<template>
  <div class="container">

    <h1>Sign Up</h1>
    <form @submit.prevent = "signUp">
      <div class="sub-container">
        <label for="email"><b>Name</b></label>
        <input v-model="name" type="text" placeholder="Enter Your Name" name="name" required>

        <label for="email"><b>Email</b></label>
        <input v-model="email" type="text" placeholder="Enter Email" name="email" required>
        <p v-if="emailError">{{ emailError }}</p>

        <label for="psw"><b>Password</b></label>
        <input v-model="password" type="password" placeholder="Enter Password" name="password" required>
        <p v-if="passwordError">{{ passwordError }}</p>

        <div class="clearfix">
          <button type="submit" class="signupbtn">Sign Up</button>
        </div>

        <p> Already have an account? <span @click="redirectToSignIn"> Sign In </span></p>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
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
    //     const userType = ref('customer')
    const redirectToSignIn = () => {
      router.push("/login")
    }

    const passwordError = ref('')
    const emailError = ref('')
    

    const signUp =  async() => {
      const validatePassword = () => {
        if(password.value.lastIndexOf>=8 && password.value.length<=18) {
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
      
      try {

        

      
      validateEmail(email.value)
      validatePassword(password.value)
      
      if(passwordError.value === '' && emailError.value === '') {
        
        
       const res =  await createUserWithEmailAndPassword(getAuth(),email.value,password.value)

       ///add sooraj ka api call and populate user and session storage me daal do iska token
       const user = res.user;
        profileStore.updateUserAfterAuth(user);
       console.log(user)

       
       //sooraj ka login
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

        console.log('Successfully signed up!');
        router.replace('/addProfile')
      }
      else {
        console.log("Error validating email and password")
      }
        
      } catch (error) {
        console.error('Error logging in:', error.message);
        // Handle login errors
      }

      // const user = registerWithEmailAndPassword(name.value,email.value, password.value)
      // console.log("userDetails", user)
      //         const loginStatus = await authStore.LOGIN({ email: email.value, password: password.value })
      //         if(loginStatus){
      //             alert("Login successful")
      //             if(userType.value==='user')
      //                 router.push("/addProduct")
      //             else
      // router.push('/')
      //         }
      //         else{
      //             alert('Login unsuccessful')
      //       }
    };

    return {
      name,
      email,
      password,
      signUp,
      redirectToSignIn,
      emailError,
      passwordError
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
  margin: 450px;
  margin-top: 80px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 50px;
  margin-bottom: 0px;
  border-radius: 4%;
  background-color: rgb(252, 252, 251);
  /* background-color: #898888eb; */
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

@media screen and (max-width: 768px) {
  .sub-container {
    margin: 20px;
    padding: 15px;
  }

  button {
    width: 100%;
  }
}

.sign-in-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.social-login>button {
  background-color: rgb(252, 252, 251);
  width: 33%;
}

.connect {
  margin-top: 15px;
}</style> 

