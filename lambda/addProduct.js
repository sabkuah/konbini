const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'ca-central-1' });
exports.handler = async (event) => {
  const params = {
    TableName: 'KonbiniProducts',
    Item: {
      productId: event.product.productId,
      productNameEn: event.product.productNameEn,
      productNameJp: event.product.productNameJp,
      details: event.product.details,
      category: event.product.category,
      quantity: event.product.quantity,
      images: event.product.images,
    },
  };
  try {
    const data = await docClient.put(params).promise();
    const response = {
      statusCode: 200,
    };
    return response;
  } catch (err) {
    return {
      statusCode: 500,
    };
  }
};
