import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import mitt from 'mitt';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJyfaMlmpM6pJRoWVOXiKjjKSo4XYv2AI",
    authDomain: "projet-s2-2eb48.firebaseapp.com",
    projectId: "projet-s2-2eb48",
    storageBucket: "projet-s2-2eb48.appspot.com",
    messagingSenderId: "439777940554",
    appId: "1:439777940554:web:dfd0511125a97c560802b3",
    measurementId: "G-R9CXW2XR0K"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

const app = createApp(App)

export const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')
