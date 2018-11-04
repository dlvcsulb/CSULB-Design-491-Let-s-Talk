'use strict'


var MongoClient = require('mongodb').MongoClient
//MongoClient.setOption( { useNewUrlParser : true } )
var dbUrl ='mongodb://jason:Cecs491!@ds147233.mlab.com:47233/heroku_04jtxgvj'

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

