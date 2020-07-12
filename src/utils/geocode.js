const request = require('request');

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicGhvZW5peG5lcmQiLCJhIjoiY2swaTZiaGxpMDk5MzNmbXo1Y3RoYWppeSJ9.zseGR84mWG3Aveug2NrxEA&limit=1`;
    console.log(url)
    request({url, json: true}, (error, {body} = {}) =>{
        if(error){
            callback(`Unable to connect to location services!`, undefined);
        } else if (!body.features.length){
            callback(`Unable to find place, please use a different search term`, undefined);
        } else {
            callback( undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });

}

module.exports = geoCode;