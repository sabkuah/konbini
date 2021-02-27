// const AWS = require("aws-sdk");
// const docClient = new AWS.DynamoDB.DocumentClient({ region: "ca-central-1" });
// const body = JSON.parse(event.body)
// exports.handler = async (event, context) => {
//     var params = {
//         TableName: "KonbiniProducts",
//         Key: {
//             productId: event.pathParameters.productId
//         },

//     UpdateExpression: "set product.productNameEn = :en, product.productNameJp = :jp, product.details = :dets, product.images = :img, product.quantity = :qty, product.category = :cat",
//     ExpressionAttributeValues: {
//         ':en': body.product.productNameEn,
//         ':jp': body.product.productNameJp,
//         ':dets':body.product.details,
//         ':qty':body.product.quantity,
//         ':img': body.product.images,
//         ':cat': body.product.category
//     },
//     ReturnValues:"UPDATED_NEW"
//     };

//     try {
//         const data = await docClient.update(params).promise();
//         console.log("update succeeeded:", JSON.stringify(data, null, 2));
//     } catch (err) {
//         console.log("unable to update items. Error JSON:", JSON.stringify(err, null, 2));
//     }
// };
var AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({ region: "ca-central-1" });

console.log("Updating the item...");

async function updateItem() {
  const info = await JSON.parse(event.body);

  var params = {
    TableName: "KonbiniProducts",
    Key: {
      productId: event.pathParameters.productId,
    },
    UpdateExpression: "set product.quantity = :qty",
    ExpressionAttributeValues: {
      ":qty": info.product.quantity,
    },
    ReturnValues: "UPDATED_NEW",
  };

  docClient.update(params, function (err, data) {
    if (err) {
      console.error(
        "Unable to update item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
  });
}

updateItem();
