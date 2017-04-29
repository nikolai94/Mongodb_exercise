# Mongodb exercise

Group: 
- Mathias Meldgaard Pedersen
- Nikolai Hansen
- Joachim Dittman Jepsen
- Jonathan Egebak Carlsen
----------------------------------------------------------

### Install this project
1. npm install
1. mongoimport -d mongo_exercise -c tweets --type csv --file mongodata.1600000.csv --headerline
1. createIndex({user:1})
1. createIndex({id:1})

### Exercise

#### How many Twitter users are in our database?
There is 659178 twitter users in our database. See [code](https://github.com/nikolai94/Mongodb_exercise/blob/master/server/dbQueries.js#L8) <br />
Call function from terminal: $node server/dbQueries.js countTwitterUsers

#### Which Twitter users link the most to other Twitter users? 
The users there link the most to other Twitter users:

| User            | LinkCount      |
| -------------   |:-------------: | 
| lost_dog        | 549            |
| tweetpet        | 310            |
| VioletsCRUK     | 251            |
| what_bugs_u     | 246            |
| tsarnick        | 245            |
| SallytheShizzle | 229            |
| mcraddictal     | 217            |
| Karen230683     | 216            |
| keza34          | 211            |
| TraceyHewins    | 202            |

See [code](https://github.com/nikolai94/Mongodb_exercise/blob/master/server/dbQueries.js#L21) <br />
Call function from terminal: $node server/dbQueries.js topTenTwitterUsersLink

#### Who is the most mentioned Twitter users?
<b style='color:red'>We do not know how to make this....</b>.

#### Who are the most active Twitter users?
The most active Twitter users:

| User            |    ActiveCount |
| -------------   |:-------------: | 
| lost_dog        | 549            |
| webwoke         | 345            |
| tweetpet        | 310            |
| SallytheShizzle | 281            |
| VioletsCRUK     | 279            |
| mcraddictal     | 276            |
| tsarnick        | 248            |
| what_bugs_u     | 246            |
| Karen230683     | 238            |
| DarkPiano       | 236            |

See [code](https://github.com/nikolai94/Mongodb_exercise/blob/master/server/dbQueries.js#L51) <br />
Call function from terminal: $node server/dbQueries.js mostActiveTwitterUsers

#### Who are the most grumpy and the most happy?

##### Most grumpy users:

| User            | GrumpyCount    |
| -------------   |:-------------: | 
| lost_dog        | 549            |
| tweetpet        | 310            |
| webwoke         | 264            |
| mcraddictal     | 210            |
| wowlew          | 210            |

See [code](https://github.com/nikolai94/Mongodb_exercise/blob/master/server/dbQueries.js#L66) <br />
Call function from terminal: $node server/dbQueries.js mostGrumpy

##### Most happy users:

| User            | HappyCount     |
| -------------   |:-------------: | 
| what_bugs_u     | 246            |
| DarkPiano       | 231            |
| VioletsCRUK     | 218            |
| tsarnick        | 212            |
| keza34          | 211            |

See [code](https://github.com/nikolai94/Mongodb_exercise/blob/master/server/dbQueries.js#L81) <br />
Call function from terminal: $node server/dbQueries.js mostHappy




