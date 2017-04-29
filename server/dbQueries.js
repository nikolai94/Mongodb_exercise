//mongoimport -d mongo_exercise -c tweets --type csv --file mongodata.1600000.csv --headerline

var db = require("./db");
var mongoose = require('mongoose');
var tweets = mongoose.model('Tweets');

//countTwitterUsers();
//How many Twitter users are in our database? - DONE
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
        [{"$match":{"text": {"$regex" : new RegExp(/(@)\w+/)} }},
            {"$group": {"_id": "$user", "count": {"$sum" : 1 }} },
            { "$sort": {"count": -1}},
            { "$limit" : 5 }],
        function(err,data){
            if(err){console.log(err); return;}
            console.log(data);
        });
}

//MAKE THIS
//topFiveMostMentionedUsers();
//Who is are the most mentioned Twitter users? - DONE
function topFiveMostMentionedUsers() {
    /*tweets.aggregate(
     [{"$match":{"text": {"$regex": "@\\w+"} }},
     { "$unwind" : "$user" },
     { "$sort": {"tweets": -1}},
     { "$limit" : 10 }],
     function(err,data){
     if(err){console.log(err); return;}
     console.log(data);
     });*/

}


//mostActiveTwitterUsers();
//Who are the most active Twitter users - DONE
function mostActiveTwitterUsers() {
    tweets.aggregate(
            [{ "$group": {"_id":"$user", "tweets":{ "$sum":1 } }},
            { "$sort": {"tweets": -1}},
            { "$limit" : 10 }],
        function(err,data){
            if(err){console.log(err); return;}
            console.log(data);
        });

}

//mostGrumpy();
//Make this
//Most grumpy limit 5
function mostGrumpy(){
    tweets.aggregate(
        [{"$match":{"polarity": 0 }},
            { "$group" : {"_id":"$user", "mostGrumpyCount":{"$sum":1}} },
            { "$sort" : {"mostGrumpyCount": -1}},
            { "$limit" : 5 }],
        function(err,data){
            if(err){console.log(err); return;}
            console.log(data);
        });
}


//mostHappy();
//Most happy limit 5 - DONE
function mostHappy(){
    tweets.aggregate(
        [{"$match":{"polarity": 4 }},
            { "$group" : {"_id":"$user", "mostHappyCount":{"$sum":1}} },
            { "$sort" : {"mostHappyCount": -1}},
            { "$limit" : 5 }],
        function(err,data){
            if(err){console.log(err); return;}
            console.log(data);
        });
}



module.exports = {
    countTwitterUsers:countTwitterUsers,
    topTenTwitterUsersLink: topTenTwitterUsersLink,
    topFiveMostMentionedUsers: topFiveMostMentionedUsers,
    mostActiveTwitterUsers: mostActiveTwitterUsers,
    mostGrumpy: mostGrumpy,
    mostHappy:mostHappy

}

require('make-runnable');

