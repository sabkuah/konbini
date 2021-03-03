const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'ca-central-1' });
exports.handler = async (event, context) => {
  var params = {
    TableName: 'KonbiniProducts',
    Key: {
      productId: event.pathParameters.productId,
    },
  };
  try {
    const data = await docClient.delete(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Item),
      headers: { 'Access-Control-Allow-Origin': '*' },
    };
    return response;
  } catch (err) {
    return {
      statusCode: 500,
    };
  }
};
