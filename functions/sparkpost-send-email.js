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
  console.log("event.body", event.body);
    let parsedJson = parse(event.body);
    console.log('parsedJson', parsedJson);
    if(parsedJson.message){
      //If message its set lets change linebreak
      parsedJson.message = parsedJson.message.split('\r\n').join('&#xD;')
    }
    var parsedXml = xmlParser.parse(parsedJson);
    console.log('parsedXml', parsedXml)
    
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
                
  client.transmissions
    .send({
      content: {
        from: 'aktion.dinnebiergruppe@mail.ljft.de',
        subject: 'CATCH LEADS XML API',
        text: xml
      },
      //TODO change receipent to real - { address: 'lead.krefeld@dinnebier-gruppe.de' }
    recipients: [{ address: 'developer@upljft.com' }, { address: 'lead.krefeld@dinnebier-gruppe.de' }]
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