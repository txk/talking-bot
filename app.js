/*-----------------------------------------------------------------------------
A simple echo bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');
var botbuilder_azure = require("botbuilder-azure");
var https = require('https');
var _ = require('lodash');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    openIdMetadata: process.env.BotOpenIdMetadata
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());


var inMemoryStorage = new builder.MemoryBotStorage();

// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector);
bot.set('storage', inMemoryStorage);

bot.dialog('/', function (session) {

    session.say('Hello! I am Quiggly and can help you find you personalized health tests. Want to you want to do?', 'Hello! I am Quiggly and can help you find you personalized health tests. Want to you want to do?', {inputHint: builder.InputHint.ignoringInput});
});


        


