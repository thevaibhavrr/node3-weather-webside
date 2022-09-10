const request =  require('postman-request')
const forecast = (address,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=46a282a2986c505c879485463507159b&query='+address

    request({url ,json: true},(error,{body})=>{
        if(error){
            callback('unable to connect with internet',undefined)
        } else if(body.error){
            callback('unable to find locaiton , try another serach',undefined)
        } else{
            callback(undefined,  body.current.weather_descriptions  +" . eesa mosm hai abhi " + body.current.temperature + " digree . or pani aane ke chance " + body.current.precip + " % hai 100% garnti ni hai ki aahi jaega")
        }
    })
}
module.exports =  forecast 
