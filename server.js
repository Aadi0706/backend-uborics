// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json'); // <== Will be created later
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3200; // <== You can change the port

// server.use(middlewares);
// server.use(router);

// server.listen(port);

const express = require('express');
const app= express();
const port = process.env.PORT || 2345;

app.get('/footwears', (req, res) => {
    res.send(
    
        {
   
         "footwears":[
           {
               "id":1,
               "title": "ADDA MEN’S CHAPPLE / SLIPPERS IN BLUE COLOUR",
               "price":"675",
               "color":"Blue",
               "category":"Casual Chapple/Slippers",
               "size":"6",
               "imgURL":"https://www.uboric.com/wp-content/uploads/2021/01/DSC_0572_result.jpg",
               "product_desc":{
                   "desc1": "Guaranteed delivery with 100% original products",
                   "desc2":"COD available on some categories",
                   "desc3":"FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500",
                   "desc4":"EMI OPTION AVAILABLE",
                   "desc5":"FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT FREE DELIVERY AVAILABLE ON ALL ORDERS",
                   "desc6":"BELOW ₹500 CASH ON DELIVERY CHARGES ₹49",
                   "desc7":"YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA",
               "desx8":"RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ RETURN POLICY TO KNOW MORE."
                     }
           },
           {
               "id":2,
               "title": "ADDA MEN’S CHAPPLE / SLIPPERS IN COLOUR BLACK",
               "price":"649",
               "color":"Blacj",
               "category":"Casual Chapple/Slippers",
               "size":"7",
               "imgURL":"https://www.uboric.com/wp-content/uploads/2021/02/DSC_0831_result.jpg",
               "product_desc":{
                   "desc1": "Guaranteed delivery with 100% original products",
                   "desc2":"COD available on some categories",
                   "desc3":"FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500",
                   "desc4":"EMI OPTION AVAILABLE",
                   "desc5":"FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT FREE DELIVERY AVAILABLE ON ALL ORDERS",
                   "desc6":"BELOW ₹500 CASH ON DELIVERY CHARGES ₹49",
                   "desc7":"YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA",
               "desx8":"RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ RETURN POLICY TO KNOW MORE."
                     }
           },
           {
               "id":3,
               "title": "ADDA MEN’S CHAPPLE / SLIPPERS IN COLOUR ORANG/NAVY",
               "price":"699",
               "color":"Orange",
               "category":"Casual Chapple/Slippers",
               "size":"6",
               "imgURL":"https://www.uboric.com/wp-content/uploads/2021/02/DSC_0807_result.jpg",
               "product_desc":{
                   "desc1": "Guaranteed delivery with 100% original products",
                   "desc2":"COD available on some categories",
                   "desc3":"FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500",
                   "desc4":"EMI OPTION AVAILABLE",
                   "desc5":"FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT FREE DELIVERY AVAILABLE ON ALL ORDERS",
                   "desc6":"BELOW ₹500 CASH ON DELIVERY CHARGES ₹49",
                   "desc7":"YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA",
               "desx8":"RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ RETURN POLICY TO KNOW MORE."
                     }
           },
           {
               "id":4,
               "title": "C.SERIES MEN’S CASUAL CHAPPAL/SLIPPRES in BLACK",
               "price":"499",
               "color":"Black",
               "category":"Casual Chapple/Slippers",
               "size":"8",
               "imgURL":"https://www.uboric.com/wp-content/uploads/2019/11/11-11116.png",
               "product_desc":{
                   "desc1": "Guaranteed delivery with 100% original products",
                   "desc2":"COD available on some categories",
                   "desc3":"FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500",
                   "desc4":"EMI OPTION AVAILABLE",
                   "desc5":"FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT FREE DELIVERY AVAILABLE ON ALL ORDERS",
                   "desc6":"BELOW ₹500 CASH ON DELIVERY CHARGES ₹49",
                   "desc7":"YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA",
               "desx8":"RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ RETURN POLICY TO KNOW MORE."
                     }
           },
           {
               "id":5,
               "title": "C.SERIES MEN’S CASUAL CHAPPAL/SLIPPERS in BROWN",
               "price":"419",
               "color":"Brown",
               "category":"Casual Chapple/Slippers",
               "size":"7",
               "imgURL":"https://www.uboric.com/wp-content/uploads/2019/11/12-11079.png",
               "product_desc":{
                   "desc1": "Guaranteed delivery with 100% original products",
                   "desc2":"COD available on some categories",
                   "desc3":"FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500",
                   "desc4":"EMI OPTION AVAILABLE",
                   "desc5":"FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT FREE DELIVERY AVAILABLE ON ALL ORDERS",
                   "desc6":"BELOW ₹500 CASH ON DELIVERY CHARGES ₹49",
                   "desc7":"YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA",
               "desx8":"RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ RETURN POLICY TO KNOW MORE."
                     }
           },
           {
               "id":6,
               "title": "C.SERIES MEN’S CASUAL CHAPPAL/SLIPPERS in TAN",
               "price":"899",
               "color":"Tan",
               "category":"Casual Chapple/Slippers",
               "size":"8",
               "imgURL":"https://www.uboric.com/wp-content/uploads/2019/11/8-11001.png",
               "product_desc":{
                   "desc1": "Guaranteed delivery with 100% original products",
                   "desc2":"COD available on some categories",
                   "desc3":"FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500",
                   "desc4":"EMI OPTION AVAILABLE",
                   "desc5":"FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT FREE DELIVERY AVAILABLE ON ALL ORDERS",
                   "desc6":"BELOW ₹500 CASH ON DELIVERY CHARGES ₹49",
                   "desc7":"YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA",
               "desx8":"RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ RETURN POLICY TO KNOW MORE."
                     }
           },
           {
               "id":7,
               "title": "RED CHIEF MEN’S CASUAL CHAPPAL/SLIPPERS in TAN",
               "price":"995",
               "color":"Tan",
               "category":"Casual Chapple/Slippers",
               "size":"7",
               "imgURL":"https://www.uboric.com/wp-content/uploads/2019/12/7-12570.jpg",
               "product_desc":{
                   "desc1": "Guaranteed delivery with 100% original products",
                   "desc2":"COD available on some categories",
                   "desc3":"FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500",
                   "desc4":"EMI OPTION AVAILABLE",
                   "desc5":"FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT FREE DELIVERY AVAILABLE ON ALL ORDERS",
                   "desc6":"BELOW ₹500 CASH ON DELIVERY CHARGES ₹49",
                   "desc7":"YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA",
               "desx8":"RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ RETURN POLICY TO KNOW MORE."
                     }
           },
           {
               "id":8,
               "title": "FUEL MEN’S CASUAL CHAPPLE / SLIPPERS IN GREY/NAVY BLUE",
               "price":"675",
               "color":"Navy Blue",
               "category":"Casual Chapple/Slippers",
               "size":"8",
               "imgURL":"https://www.uboric.com/wp-content/uploads/2021/01/DSC_0581_result.jpg",
               "product_desc":{
                   "desc1": "Guaranteed delivery with 100% original products",
                   "desc2":"COD available on some categories",
                   "desc3":"FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500",
                   "desc4":"EMI OPTION AVAILABLE",
                   "desc5":"FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT FREE DELIVERY AVAILABLE ON ALL ORDERS",
                   "desc6":"BELOW ₹500 CASH ON DELIVERY CHARGES ₹49",
                   "desc7":"YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA",
               "desx8":"RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ RETURN POLICY TO KNOW MORE."
                     }
           },
           {
               "id":9,
               "title": "C.SERIES MEN’S CASUAL CHAPPAL/SLIPPRES in BLACK",
               "price":"499",
               "color":"Black",
               "category":"Casual Chapple/Slippers",
               "size":"7",
               "imgURL":"https://www.uboric.com/wp-content/uploads/2019/11/11-11076.png",
               "product_desc":{
                   "desc1": "Guaranteed delivery with 100% original products",
                   "desc2":"COD available on some categories",
                   "desc3":"FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500",
                   "desc4":"EMI OPTION AVAILABLE",
                   "desc5":"FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT FREE DELIVERY AVAILABLE ON ALL ORDERS",
                   "desc6":"BELOW ₹500 CASH ON DELIVERY CHARGES ₹49",
                   "desc7":"YOU WILL RECEIVE PRODUCTS IN NEXT 5 to 7 DAYS ALL OVER INDIA",
               "desx8":"RETURN AVAILABLE ON WRONG OR DAMAGED PRODUCT DELIVERED, READ RETURN POLICY TO KNOW MORE."
                     }
           }
   
         ] 
       
   }
   
   )
});

app.listen(port, ()=>{
    console.log("Listening to port 2345");
})