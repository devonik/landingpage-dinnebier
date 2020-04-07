const SparkPost = require('sparkpost');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  
  console.log("API KEY: ",process.env.SPARKPOST_API_KEY);
}
const options = {
  endpoint: 'https://api.eu.sparkpost.com:443'
};

const client = new SparkPost(process.env.SPARKPOST_API_KEY,options);

exports.handler = function(event, context, callback) {
  
    const {parse} = require('querystring');

    let parsedData = parse(event.body);
    console.log("parsed data: ",parsedData);
    let body = "";
    for(var key in parsedData){
      var value = parsedData[key];
      body += "<p><b>"+key+": </b> <span>"+value+"</span></p>";
    }
  client.transmissions
    .send({
      content: {
        from: 'dinnebier@mail.ljft.de',
        subject: 'Hello, World!',
        html:
          "<html><body>"+body+"</body></html>"
      },
      //TODO change receipent to real
    recipients: [{ address: 'developer@upljft.com' }]
  }).catch(err => {
    console.log(err);
  });
}