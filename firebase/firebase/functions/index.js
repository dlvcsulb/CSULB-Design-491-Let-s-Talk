'use strict';

// Import functions from firebase and dialogflow packages 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

// Initialize DB connection
const admin = require('firebase-admin');
admin.initializeApp();

// Create the root reference for firebase db
var db = admin.database();
var ref = db.ref();

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements


exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  
  // Get the local date as M/D/Y format
  var date = new Date().toLocaleDateString();
  
  // Save the user input name to DB
  function saveUser(agent) {
      
      // Pull input name from intent
      const nameParam = agent.parameters.name;
      const userName = nameParam;
      
      // Save to DB under /Users/
      return admin.database().ref('/Users/').push({Name: userName}).then((snapshot) => {
          console.log('database write successful: ' + snapshot.ref.toString());
      });
      
  }
  
  // Save the user's mood when mood is positive
  function userFeelingGood(agent) {
      
      // Get feeling input from user (feeling) from intent
      const feelingParam = agent.parameters.feeling;
      const userMood = feelingParam;
      
      // Save to DB under /User/User Mood/
      var usersRef = ref.child('Users/');
      usersRef.push().set({
          "User Mood": {
              Date: date,
              Mood: userMood
          }
      });
  }
  
  // Save the user's mood when mood is negative
  function userFeelingBad(agent) {
      
      // Get feeling input from user (feeling2) from intent
      const feelingParam = agent.parameters.feeling2;
      const userMood = feelingParam;
      
      // Save to DB under /User/User Mood/
      var usersRef = ref.child('Users/');
      usersRef.push().set({
          "User Mood": {
              Date: date,
              Mood: userMood
          }
      });
  }
  
  // Save user's response after positive mood
  function userResponseGood1(agent) {
      
      // Get response input from user (any) from given intent
      const responseParam = agent.parameters.any;
      const userResponse = responseParam;
      
      // Save response to DB under /Users/User Response/
      var usersRef = ref.child('Users/');
      usersRef.push().set({
          "User Response": {
              Date: date,
              Response: userResponse
          }
      });
  }
  
  // Save user's response after continuing conversation from positive
  function userResponseGood2(agent) {
      
      // Get second response input from user (any2)
      const responseParam = agent.parameters.any2;
      const userResponse = responseParam;
      
      // Save response 2 to DB under /Users/User Response/
      var usersRef = ref.child('Users/');
      usersRef.push().set({
          "User Response": {
              Date: date,
              Response: userResponse
          }
      });
  }
  
  // Save user's response after negative mood
  function userResponseBad1(agent) {
      
      // Get response input from user (any) from given intent
      const responseParam = agent.parameters.any;
      const userResponse = responseParam;
      
      // Save reponse to DB under /Users/User Response
      var usersRef = ref.child('Users/');
      usersRef.push().set({
          "User Response": {
              Date: date,
              Response: userResponse
          }
      });
  }
  
  // Save user's response  after continuing conversation from negative
  function userResponseBad2(agent) {
      
      // Get second response input from user (any2)
      const responseParam = agent.parameters.any2;
      const userResponse = responseParam;
      
      // Save response 2 in DB under /Users/User Response
      var usersRef = ref.child('Users/');
      usersRef.push().set({
          "User Response": {
              Date: date,
              Response: userResponse
          }
      });
  }
  
  // Create a new Map( intent , function call )
  let intentMap = new Map();
  intentMap.set('Intro', saveUser);
  intentMap.set('LetsTalk - good', userFeelingGood);
  intentMap.set('LetsTalk - bad', userFeelingBad);
  intentMap.set('LetsTalk - good - yes - convo', userResponseGood1);
  intentMap.set('LetsTalk - good - yes - convo - yes - custom', userResponseGood2);
  intentMap.set('LetsTalk - bad - yes - custom', userResponseBad1);
  intentMap.set('LetsTalk - bad - yes - custom - yes - custom', userResponseBad2)
  intentMap.set('LetsTalk - bad - no - yes - convo', userResponseBad1);
  intentMap.set('LetsTalk - bad - no - yes - convo - yes - custom', userResponseBad2);

  agent.handleRequest(intentMap);
});
