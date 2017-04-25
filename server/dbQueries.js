//mongoimport -d mongo_exercise -c tweets --type csv --file mongodata.1600000.csv --headerline
var db = require("./db");
var mongoose = require('mongoose');
var tweets = mongoose.model('Tweets');

//countTwitterUsers();
//How many Twitter users are in our database?
function countTwitterUsers() {
    tweets.aggregate(
        {$group : {_id : "$user"} },
        {$group: {_id:1, count: {$sum : 1 }}},function(err,data){
            if(err){console.log(err); return;}
            console.log("There is '"+data[0].count +"' twitter users unique");
        });
}

topTenTwitterUsersLink();
//Which Twitter users link the most to other Twitter users? (Provide the top ten.)
function topTenTwitterUsersLink() {
    tweets.aggregate(
        [{"$match":{"text": {"$regex": "@"} }},
            //{ "$group": {"_id":"$user", "count":{"$sum":1} }},
            { "$group": {"_id":"$user", "tweets":{ "$sum":1 } }},
            { "$sort": {"tweets": -1}},
            { "$limit" : 10 }],
        function(err,data){
            if(err){console.log(err); return;}
            //console.log("There is '"+data[0].count +"' twitter users unique");
            console.log(data);
        });
}


/*function insertTweet() {
    tweets.create({polarity:1, id:1, date:"test",query:"test",user:"test",text:"test"},function(err, data){
        if(err) {console.log(err); return;}
        console.log(data);
    });
}*/
