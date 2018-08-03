# HelloPush PWA Sample

  This Progressive web application which shows how to use IBM cloud push notifications service.

#### Supported platforms

* Android
 
### Limitations 

 We dont support push notifications in iOS PWA due to the limitations in safari service workers

### Requirements 

 * IBM Cloud Push notifications Instance - [Follow this Docs](https://console.bluemix.net/docs/services/mobilepush/index.html#gettingstartedtemplate)
 * Any Code Editor

### Create and Configure push notification service
  
  Create a push notification service in IBM Cloud and configure the [Web push](https://console.bluemix.net/docs/services/mobilepush/push_step_2.html#push_step2_chromefirefox).

### Configure the PWA app

 * In the example app, go the the `public -> Scripts -> app.js` folder and add values for the following ,

  ```Javascript
    var initParams = {
      "appGUID":"bf98b05c-xxxx-xxxx-a15d-xxxxxx",
      "appRegion":".ng.bluemix.net",
      "clientSecret":"07629560-xxxxxx-xxxxxxxx-xxx-xxxxxxxx"
    }
  ```

  * In the `public` folder find the `manifest.json` file and add the `gcm_sender_id` for your FCM app . For more details about FCM app [follow this](https://console.bluemix.net/docs/services/mobilepush/push_step_1.html#push_step_1_android).

  * Add the [Web Push SDK](https://github.com/ibm-bluemix-mobile-services/bms-clientsdk-javascript-webpush) inside the public folder.

### Push your website to the IBM Cloud

  * Connect and log in to IBM Cloud
   ```Javascript
    $ bluemix api https://api.ng.bluemix.net
   ```
  * From the directory root folder deploy your app into IBM Cloud,
   ```Javascript
    $ bluemix app push ibmcloudpwapush
   ```

   After successful deploy , you will be able to see your website running in `https://ibmcloudpwapush.mybluemix.net`. 

### Use PWA app in browsers

  * Try push notification in Chrome and Firefox.
  
### Use the PWA app in Android

 * Open the `https://ibmcloudpwapush.mybluemix.net` in Android chrome and from the menu options select `Add to home screen` option. This will add the PWA app to your Android home screen.

 * Open the app from home screen and register for push notifications.

 * Send push notifications from IBM Cloud push notifications console.



### Samples & videos

* Please visit for samples - [Github Sample](https://github.com/ibm-bluemix-mobile-services/bms-samples-android-hellopush)

* Video Tutorials Available here - [Bluemix Push Notifications](https://www.youtube.com/channel/UCRr2Wou-z91fD6QOYtZiHGA)

=======================
Copyright 2016 IBM Corp.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
