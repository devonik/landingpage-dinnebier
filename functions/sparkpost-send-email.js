const SparkPost = require('sparkpost');
const FastXmlParser = require("fast-xml-parser").j2xParser;
const {parse} = require('querystring');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const options = {
  endpoint: 'https://api.eu.sparkpost.com:443'
};

const client = new SparkPost(process.env.SPARKPOST_API_KEY,options);
const xmlParser = new FastXmlParser();
exports.handler = function(event, context, callback) {
    let parsedJson = parse(event.body);

    var parsedXml = xmlParser.parse(parsedJson);

    //This beatiful text is replaced by horrible xml ...
    /*let header = "<p><b>Es sind folgende Formulardaten von der Seite https://aktion.dinnebiergruppe.de/ eingegangen:</b></p><hr>"

    let body = "";
    for(var key in parsedJson){
      var value = parsedJson[key];
      body += "<p><b>"+key+": </b> <span>"+value+"</span></p>";
    }*/

    let xml = '<?xml version="1.0" encoding="UTF-8"?>'+
                '<lead>'+
                  '<vehicle>'+
                    '<internalId />'+
                    '<make />'+
                    '<model />'+
                    '<firstRegistration />'+
                    '<mileage />'+
                    '<price />'+
                    '<conditionType />'+
                    '<type />'+
                    '<vin />'+
                  '</vehicle>'+
                  '<potentialBuyer>'+
                    '<salutation />'+
                    '<title/>'+
                    '<street/>'+
                    '<phone>'+
                      '<internationalPrefix />'+
                      '<prefix/>'+
                      '<number>'+parsedJson.phone+'</number>'+
                    '</phone>'+
                    parsedXml+
                  '</potentialBuyer>'+
                  '<subject>Angebotsanfrage</subject>'+
                  '<campaign_name/>'+
                '</lead>';
                //old html: "<html><body>"+header+body+"</body></html>"
  client.transmissions
    .send({
      content: {
        from: 'aktion.dinnebiergruppe@mail.ljft.de',
        subject: 'CATCH LEADS XML API',
        text: xml
      },
      //TODO change receipent to real - { address: 'lead.krefeld@dinnebier-gruppe.de' }
    recipients: [{ address: 'developer@upljft.com' }]
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
        'Content-Type': 'application/json',
      },
    });
  });
}