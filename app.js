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
    title : 'Test',
    body : 'Test#2',
    image : 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
}
const topic = 'test';

function sendNotification(){
    console.log('send to Notifation')
    admin.messaging().sendMulticast({
        tokens : token,
        // topic : topic,
        notification : {
            title : payload.title,//
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
        type : 'test',
        content : 'test#2',
        sender : 'Guitar#3',
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