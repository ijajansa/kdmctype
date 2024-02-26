importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyA1VolvVtHDeg0b1VyRcRoXKwQfNeMOfYM",
    authDomain: "triple-brook-270004.firebaseapp.com",
    projectId: "triple-brook-270004",
    storageBucket: "triple-brook-270004.appspot.com",
    messagingSenderId: "570334724652",
    appId: "1:570334724652:web:23e6f2e193d99aa4480789"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});