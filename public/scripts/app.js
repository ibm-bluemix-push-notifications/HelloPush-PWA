// Register applicatio'n service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () {
            console.log('Application service worker registered');
        });
}

// Initialize IBM Cloud push service
var bmsPush = new BMSPush()

function callback(response) {
    if (response.error != "") {
        alert(`Error while initializing the IBM Push notification client. ${response.error}.`)
    } else {
        alert(`Successfully initialized the IBM Cloud Push notifications client.`)
    }
}
// IBM Cloud push credentials
var initParams = {
    "appGUID": "xxx-xxxx-xxxx-xxx",
    "appRegion": "us-south",
    "clientSecret": "xxx-xx-xxxx-xxx-xx",
    "applicationServerKey": "xx-xxxx-xxxxx-xxx-xxx-xxx"
}
bmsPush.initialize(initParams, callback)

function registerButtonHandler() {
    console.log("Registering..");
    bmsPush.register(function (response) {

        if (response.error != "") {
            alert(`Error in registration. ${response.error}.`)
        } else {
            alert(`Successfully registered for IBM Cloud Push notifications. Now send a push notification from your IBM Cloud Push notifications instance.`)
        }
    })
}