import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCGQ9vD8waHzZbUYRM7KzlNUnqWZ0tOcr0",
    authDomain: "social-auth-b2fd4.firebaseapp.com",
    projectId: "social-auth-b2fd4",
    storageBucket: "social-auth-b2fd4.appspot.com",
    messagingSenderId: "607920028862",
    appId: "1:607920028862:web:00ac76f41d1953f6f172ef",
    measurementId: "G-27S95VQNJN"
};
initializeApp(firebaseConfig)
createApp(App).use(router).use(createPinia()).mount('#app')
