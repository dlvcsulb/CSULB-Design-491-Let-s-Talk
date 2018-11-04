'use strict'

const {dialogflow} = require('actions-on-google')
const https = require('https')
var MongoClient = require('mongodb').MongoClient
var dbUrl ='mongodb://jason:Cecs491!@ds147233.mlab.com:47233/heroku_04jtxgvj'

const app = dialogflow({debug: true})

//letstalkcsulb-wkmuwt
//https.get('https://dialogflow.googleapis.com/v2/letstalkcsulb-wkmuwt=projects/*/agent/intents')

//https://dialogflow.googleapis.com/v2/projects/letstalkcsulb-wkmuwt/agent/intents

MongoClient.connect(dbUrl, function(err, db)
{
    if (err) throw err
    var dbo = db.db("heroku_04jtxgvj")
    var myQuery = { userName: "test" }
    var newValues = { $set: { userName: "Jason", lastLogIn: "today" }}
    dbo.collection("LetsTalkUsers").updateOne(myQuery, newValues, function(err, res)
    {
        if (err) throw err
        console.log("1 doc updated")
        db.close()
    })
})

//user name
//{date : overall feeling}
//{date : day talking}

