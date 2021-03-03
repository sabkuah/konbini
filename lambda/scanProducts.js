const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'ca-central-1' });
exports.handler = async (event, context) => {
  var params = {
    TableName: 'KonbiniProducts',
  };
  try {
    const data = await docClient.scan(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };
    return response;
  } catch (err) {
    return {
      statusCode: 500,
    };
  }
};
