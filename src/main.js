import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
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
const analytics = getAnalytics(app);


const app = createApp(App)

app.use(router)

app.mount('#app')
