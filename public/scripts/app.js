// Register applicatio'n service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Application service worker registered'); });
 }

 // Initialize IBM Cloud push service
var bmsPush = new BMSPush()
function callback(response) {
    alert(response.response)
}
// IBM Cloud push credentials
var initParams = {
    "appGUID":"bf98b05c-xxxx-xxxx-a15d-xxxxxx",
    "appRegion":".ng.bluemix.net",
    "clientSecret":"07629560-xxxxxx-xxxxxxxx-xxx-xxxxxxxx"
}
bmsPush.initialize(initParams, callback)

function registerButtonHandler(){
    console.log("Registering..");

    bmsPush.register(function(response) {
        alert(response.response)
    })
}
