const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ac4e8d3f338608900474f0852d6de0f0&query=' + latitude + ',' + longitude + '&units=f';
    request({ url: url, json: true }, (error, { body }) => {     // note: instead of response just put { body } here.
        if (error) {
            callback('not available', undefined)
        } else if (body.error) {
            callback('Error', undefined)
        } else {
            callback(undefined, {
                feelslike: body.current.feelslike,
                temperature: body.current.temperature,
            })
        }
    })
}
module.exports = forecast;