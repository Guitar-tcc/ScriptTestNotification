// Path: index.js
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
var token = [
    'cEBpXtrhSOmS7QNogpXm0R:APA91bFoQzaMNxDExB2sLoIaG2fku7v-3JiiSRU_frY0N21gQK-7-6YXW2IzcR5_mNg3RKVgEGtFM_90w1BpU9MCLCIs9cPVjyNfZ5jlA8zG_dozhbPkv2i2Bf9h05H46kQHPd1RntbE'
]

var payload = {
    title : 'blackground',
    body : 'Test#036',
    image : 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
}
const topic = 'test';

function sendNotification(){
    console.log('send to Notifation')
    admin.messaging().sendMulticast({
        tokens : token,
        // topic : topic,
        notification : {
            notificationID : payload.title,//
            body : payload.body,
            image : payload.image,
        },
        data : {'key':'value'}
    }).then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
      }, (error) => {
        console.log('Error sending message:', error);
      });
}

// sendNotification();

function sendNotificationToTopic()
{
   const message = {

    notification: {
        title : payload.title,
        body : payload.body,
        image : payload.image,
    },
    data: {
        "notificationID": "6918762498236",
        "sender": "Test36",
        "headerIMG": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "title": "Function-based background approach",
        "description": "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus",
        "createDate": "2029-04-07T10:27:45Z"
    },
    topic : topic,
   };
   admin.messaging().send(message).then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
}, (error) => {
    console.log('Error sending message:', error);
});
}
sendNotificationToTopic();