<template>
  <div class="container">
    <h1></h1>
    <form @submit.prevent="signIn">
    <div class="sub-container">
      <label for="email"><b>Email</b></label>
      <input v-model="email" type="text" placeholder="Enter Email" name="email" required>
      <p v-if="emailError">{{ emailError }}</p>

      <label for="psw"><b>Password</b></label>
      <input v-model="password" type="password" placeholder="Enter Password" name="psw" required>
      <p v-if="passwordError">{{ passwordError }}</p>

      <div class="clearfix">
        <button type="submit" class="signupbtn" @click="submitForm">Sign In</button>
      </div>
      <p> Don't have an account? <span class="signup" @click="redirectToSignUp"> Sign Up </span></p>

      <div style="width: 100%; height: 10px; border-bottom: 1px solid black; text-align: center; margin-top: 20px; ">
        <span style="background-color: rgb(252, 252, 251); padding: 0 10px;">
          or connect with
        </span>
      </div>
      <div class="social-login">
        <button @click="signInWithGoogle"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
            width="50px"></button>
        <button @click="signInWithFacebook"><img src="../assets/facebook.png" width="50px"></button>
        <button @click="signInWithInstagram"><img src="../assets/instagram.png" width="50px"></button>
      </div>

    </div>
    </form>
  </div>
</template>
    
<script>
// import {  ref } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import {useProfileStore} from "../store/profile-store.js"
export default {
  props: {
    // formType: String,
  },
  setup() {

    const profileStore = useProfileStore()
    const name = ref("")
    const email = ref('');
    const password = ref('');
    const router = useRouter()

    const redirectToSignUp = () => {
      router.replace("/SignUp")
    }
    const passwordError = ref('')
    const emailError = ref('')

    const validatePassword = () => {
        if(password.value.length<9) {
            passwordError.value = 'Password must be at least 8 characters long.';
            console.log(passwordError)
        }
        else
            passwordError.value = ''; 
      };
      
      const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.value = 'Invalid email address';
        } 
        else {
            emailError.value = '';
        }
      };
    const signIn =  async() => {
      
      try {
      validateEmail(email.value)
      validatePassword(password.value)
      
      if(passwordError.value === '' && emailError.value === '') {
        
       const res =  await signInWithEmailAndPassword(getAuth(),email.value,password.value)

       ///add sooraj ka api call and populate user and session storage me daal do iska token
       const user = res.user;
        profileStore.updateUserAfterAuth(user);
       console.log(user)

       
       //sooraj ka login

       //uncomment later
       const authToken = `Bearer ${user.stsTokenManager.accessToken}`;
       const apiUrl = "http://10.20.3.164:8765/user-details"; 

          const res2   = await fetch(apiUrl, { 
            method: "GET", 
            headers: { 
              "Authorization": authToken, 
              "Content-Type": "application/json", 
            }, 
          })
          const res2Data = await res2.json()
          console.log("sooraj ka responsse",res2Data)

       console.log("sooraj ka token",res2.headers.get('Authorization'))
       sessionStorage.setItem("token",res2.headers.get('Authorization'))
       sessionStorage.setItem("userId",res2Data.uid)


      //comment this back
        // sessionStorage.setItem("token",user.stsTokenManager.accessToken);
        // sessionStorage.setItem("userId",user.uid);

        console.log('Successfully signed up!');
        profileStore.updateAuthStatus(true)

        router.replace('/home')
      }
      else {
        console.log("Error validating email and password")
      }
        
      } catch (error) {
        alert(error)
        console.error('Error logging in:', error.message);
        // Handle login errors
      }

    };

    return {

      redirectToSignUp,
      name,
      email,
      password,
      signIn,
      emailError,
      passwordError
      //         userType
    }
  }
}

</script>
    
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
 
* {
  box-sizing: border-box
}
 
input {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: 1px solid #333;
  background: #f1f1f1;
}
 
input[type=text]:focus,
input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}
 
.sub-container {
    margin-left: 30%;
    margin-right: 35%;
    margin-top: 15%;
    box-shadow: 0px -1px 5px 5px rgba(0, 0, 0, 0.1);
    padding: 50px;
    margin-bottom: 0px;
    border-radius: 4%;
    background-color: rgb(252, 252, 251);
    min-width: 560px;
    max-width: 500px;
}
 
label {
  float: left;
  color: #ddd;
  color: black;
}
 
button {
  background-color: #333;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
 
button:hover {
  opacity: 1;
}
 
.container {
  padding: 16px;
}
 
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
 
@media screen and (min-width: 300px) and (max-width: 900px) {
  .sub-container {
   margin-top: 25%;
   margin-left: 5%;
   margin-right: 5%;
    padding: 15px;
    max-width: fit-content;
    min-width: fit-content;
  }
 
  button {
    width: 100%;
  }
}
 
.social-login>button {
  background-color: rgb(252, 252, 251);
  width: 33%;
}
 
.connect {
  margin-top: 15px;
}
 
.signup {
  cursor: pointer;
  color: rgb(8, 0, 255);
}
</style>
