
require('dotenv').config();
var Twitter = require('twitter'); // this is how we import the twit package
var config = require('./config'); //this is we import the config 
var fs = require('fs');

console.log(config.access_token_key)
var T = new Twitter(config);
var params = { 
    q: 'donald trump',
     count: 100 
    }
//'search/tweets'
var util = require('util')
let new_data = []
console.log(typeof(new_data))
T.get('search/tweets', params,searchedData);
function searchedData(err, data, response) 
{	j =0;

		for (i=0;i<data.statuses.length;i++){
			new_data.push(i + " " + data.statuses[i].text)

     		//console.log(data)
     	}

     		new_data.toString();
     		
     fs.writeFileSync('index.txt', 'var obj = ' + util.inspect(new_data) , 'utf-8')
       
     console.log(new_data)  
}



	     		
			