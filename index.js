const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Path: index.js
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post("/sender", (req, res) => {
    const message = req.body;
    admin.messaging().send(message).then((response) => {
        // Response is a message ID string.
        res.send("send message done ");    
        console.log('Successfully sent message:', response);
      }, (error) => { 
        res.send("send message faile ");    
        console.log('Error sending message:', error);
      });
});









// app.post("/send", (req, res) => {

//   const topic = "test";
//   console.log("send to Notifation");
//   var payload = {
//     title: "blackground",
//     body: "Test#036",
//     image:
//       "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//   };
//   const message = {
//     notification: {
//       title: payload.title,
//       body: payload.body,
//       image: payload.image,
//     },
//     data: {
//       notificationID: "6918762498236",
//       sender: "Test36",
//       headerIMG: "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
//       title: "Function-based background approach",
//       description:
//         "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus",
//       createDate: "2029-04-07T10:27:45Z",
//     },
//     topic: topic,
//   };
//   function sendMessage() {
//     admin
//       .messaging()
//       .send(message)
//       .then(
//         (response) => {
//           // Response is a message ID string.
//           console.log("Successfully sent message:", response);
//         },
//         (error) => {
//           console.log("Error sending message:", error);
//         }
//       );
//   }
//   sendMessage();
// });

// '{"notification":{"title":"payload.title","body":"payload.body","image":"payload.image"},
// "data":{"notificationID":"test","sender":"test#2","headerIMG":"Guitar#3","title":"Guitar#4","description":"Guitar#5"},"topic":"topic"}'
