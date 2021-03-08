# Konbini Japanese Convenience

### Lambda Functions | DynamoDB | Cognito | API Gateway | REST Api | React

Konbini is inspired by the Konbiniya Japanese Center on Robson Street.
This app is a loose rebranding of their website: [Shop Kobiniya](https://shop.konbiniya.com/)

It is built with a React front-end that features public and admin routes. Public routes allow users to browse products available. Admin must be authenticated and able to view an sales/inventory dashboard. Admin can trigger lambda CRUD functions to manage their inventory (add a product, edit a product, change the quantity in inventory, delete a product). Users are able to toggle between light and dark modes.

The app uses AWS serverless technologies such as DynamoDB, Cognito, Lamba and API Gateway on the backend.

<img src="kb-darkmode.gif" alt="screenshot of darkmode in app" width="500">

Sample JSON data:

`{ product": { "category":"Instant noodles", "details":"Instant fried noodles with salt by Myojo", "images":"https://cdn.shopify.com/s/files/1/0359/6084/8519/products/ippeichanyakisoba_salt_360x.jpg?v=1585974035", "productId":"99338079-c809-475e-bf7d-8fb14e23db7d", "productNameEn":"Ippei Chan Yakisoba", "productNameJp":" 一平ちゃん焼きそば", "quantity":45 } }`
