const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'ca-central-1' });

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  var params = {
    TableName: 'KonbiniProducts',
    Key: {
      productId: event.pathParameters.productId,
    },
    UpdateExpression:
      'set productNameEn = :en, productNameJp = :jp, details = :dets, images = :img, quantity = :qty, category = :cat',
    ExpressionAttributeValues: {
      ':en': body.product.productNameEn,
      ':jp': body.product.productNameJp,
      ':dets': body.product.details,
      ':qty': body.product.quantity,
      ':img': body.product.images,
      ':cat': body.product.category,
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
