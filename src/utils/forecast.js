const request = require('request');

const forecast = (latitue, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ac06e070b94d7caabd25f7faa667adcf&query=${longitude},${latitue}`;
    request({url, json: true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error){
            callback(`Unable to find location,`, undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out.`);
        }
    });
}

module.exports = forecast;