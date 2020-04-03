exports.handler = async event => {
    const AWS = require("aws-sdk")
    // At the top of the file
    const {parse} = require('querystring');
  
    let parsedData = parse(event.body);

    console.log("parsedData", parsedData);
      AWS.config.update({
          accessKeyId: 'AKIASN2HCJIJ6UITVZZK',//process.env.AWS_ACCESS_KEY,
          secretAccessKey: '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',//process.env.AWS_SECRET_ACCESS_KEY,
          //eu-central-1 = Frankfurt
          region: 'eu-central-1'
      })
  
      const ses = new AWS.SES({ apiVersion: "2010-12-01" })
      const params = {
        Destination: {
          ToAddresses: [parsedData.email] // Email address/addresses that you want to send your email
        },
      //   ConfigurationSetName: <<ConfigurationSetName>>,
        Message: {
          Body: {
            Html: {
              // HTML Format of the email
              Charset: "UTF-8",
              Data:
                `<html>
                    <body>
                      From: ${parsedData.name}
                      <br />
                      Message: ${parsedData.message}
                    </body>
                </html>`
            },
            Text: {
              Charset: "UTF-8",
              Data: ""
            }
          },
          Subject: {
            Charset: "UTF-8",
            Data: "From Contact Form"
          }
        },
        Source: parsedData.email
      }
  
      return ses.sendEmail(params).promise().then(data => {
          console.log("email submitted to SES", data);
          return {
            statusCode: 200,
            body: `Message sent`,
          }
        })
        .catch(error => {
          console.log(error);
          return {
            statusCode: 500,
            body: `Message unsuccesfully sent, error: ${error}`,
          }
      })
  }
  