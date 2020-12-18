import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-east-2' });

async function sendMail(event, context) {
  const params = {
    Source: 'jvmarquim@gmail.com',
    Destination: {
      ToAddresses: ['jvmarquim@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from me',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;