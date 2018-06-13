var Twitter = require('twitter'); // this is how we import the twit package
var config = require('./config') //this is we import the config 

var T = new Twitter(config); //this is the object of twit which 
var params = { 
    q: 'Donald Trump',
     count: 100 
    }
//'search/tweets'

	
console.log('The value of PORT is:', process.env.PORT);
/** 
T.get('search/tweets', params,searchedData);
function searchedData(err, data, response) 
{
     
        for(let i = 0; i < data.statuses.length; i++)
        {
            console.log(data.statuses[i].text)
        }
         
}
*/