const SparkPost = require('sparkpost');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const options = {
  endpoint: 'https://api.eu.sparkpost.com:443'
};

const client = new SparkPost(process.env.SPARKPOST_API_KEY,options);
exports.handler = function(event, context, callback) {
    const {parse} = require('querystring');
    let parsedData = parse(event.body);
    console.log("parsed data: ",parsedData);

    let header = "<p><b>Es sind folgende Formulardaten von der Seite https://aktion.dinnebiergruppe.de/ eingegangen:</b></p><hr>"

    let body = "";
    for(var key in parsedData){
      var value = parsedData[key];
      body += "<p><b>"+key+": </b> <span>"+value+"</span></p>";
    }

  client.transmissions
    .send({
      content: {
        from: 'dinnebier@mail.ljft.de',
        subject: 'Formular',
        html:
          "<html><body>"+header+body+"</body></html>"
      },
    recipients: [{ address: 'lead.krefeld@dinnebier-gruppe.de' }, { address: 'developer@upljft.com' }]
  }).then(result => {
    callback(null, {
      statusCode: 200,
      body: "Success",
      headers: {
        'Content-Type': "application/json",
      }
    });
  }).catch(err => {
    callback(null, {
      statusCode: 500,
      body: err,
      headers: {
        'Content-Type': 'appl/xml',
      },
    });
  });
}