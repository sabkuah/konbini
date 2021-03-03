const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'ca-central-1' });

exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  var params = {
    TableName: 'KonbiniProducts',
    Key: {
      productId: event.pathParameters.productId,
    },

    UpdateExpression: 'set quantity = :qty',
    ExpressionAttributeValues: {
      ':qty': body.quantity,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  try {
    await docClient.update(params).promise();
    var response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(params.ExpressionAttributeValues),
    };
    return response;
  } catch (err) {
    console.log(
      'unable to update items. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  }
};
