using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Google.Cloud.Firestore.V1;
using Google.Cloud.Storage.V1;
using Google.Cloud.Translation.V2;
using Grpc.Auth;
using Grpc.Core;
using System;
using System.IO;
using System.Threading.Tasks;

namespace FirebaseMessagingCSharp
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var projectId = "[YOUR_PROJECT_ID]";
            var topic = "test";
            var credential = GoogleCredential.FromFile("./serviceAccountKey.json");
            var channel = new Channel(FirestoreClient.DefaultEndpoint.Host,
                FirestoreClient.DefaultEndpoint.Port, credential.ToChannelCredentials());
            var client = FirestoreClient.Create(channel);
            var database = FirestoreDb.Create(projectId, client);
            
            var message = new FirebaseAdmin.Messaging.Message
            {
                Notification = new FirebaseAdmin.Messaging.Notification
                {
                    Title = "Test",
                    Body = "Test#2",
                    ImageUrl = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                },
                Data = new System.Collections.Generic.Dictionary<string, string>
                {
                    { "type", "test" },
                    { "content", "test#2" },
                    { "sender", "Guitar#3" },
                },
                Topic = topic,
            };

            var response = await FirebaseAdmin.Messaging.FirebaseMessaging.DefaultInstance.SendAsync(message);
            Console.WriteLine("Successfully sent message: " + response);
        }
    }
}
