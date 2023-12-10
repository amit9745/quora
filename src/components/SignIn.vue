<template>

    <div class="container">        
        <h1>Sign In</h1>
        <div class="sub-container">
            <label for="email"><b>Email</b></label>
            <input v-model="email" type="text" placeholder="Enter Email" name="email" required>
    
            <label for="psw"><b>Password</b></label>
            <input v-model="password" type="text" placeholder="Enter Password" name="psw" required>
    
            <div class="clearfix">
                <button type="submit" class="signupbtn" @click="submitForm">Sign In</button>
            </div>
            <p> Don't have an account? <span @click="redirectToSignUp"> Sign Up </span></p>

            <div style="width: 100%; height: 10px; border-bottom: 1px solid black; text-align: center; margin-top: 20px; ">
  <span style="background-color: rgb(252, 252, 251); padding: 0 10px;">
    or connect with
  </span>
</div>
            <div class="social-login">
      <button @click="signInWithGoogle"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" width="50px"></button>
      <button @click="signInWithFacebook"><img src="../assets/facebook.png" width="50px"></button>
      <button @click="signInWithInstagram"><img src="../assets/instagram.png" width="50px"></button>
    </div>
        
        </div>
    </div>

</template>
    
<script>
// import {  ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  props: {
    // formType: String,
  },
  setup() {
//     const authStore = useAuthStore()
//     const email = ref('');
//     const password = ref('');
    const router = useRouter()
//     const userType = ref('customer')
    const redirectToSignUp = () => {
        router.push("/SignUp")
    }
    const submitForm = async() => {
//         const loginStatus = await authStore.LOGIN({ email: email.value, password: password.value })
//         if(loginStatus){
//             alert("Login successful")
//             if(userType.value==='user')
//                 router.push("/addProduct")
//             else
                router.push('/')
//         }
//         else{
//             alert('Login unsuccessful')
//       }
    };

    return {
//         email,
//         password,
        submitForm,
        redirectToSignUp,
//         userType
    }
  }
  }

</script>
    
<style scoped>
    
    body {font-family: Arial, Helvetica, sans-serif;}
    * {box-sizing: border-box}
    
    input {
      width: 100%;
      padding: 15px;
      margin: 5px 0 22px 0;
      display: inline-block;
      border: 1px solid #333;
      background: #f1f1f1;
    }
    
    input[type=text]:focus, input[type=password]:focus {
      background-color: #ddd;
      outline: none;
    }
    
    .sub-container {
        margin:450px;
        margin-top:150px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 50px;
        margin-bottom: 0px;
        border-radius: 4%;
        background-color:rgb(252, 252, 251);
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
      opacity:1;
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

.social-login > button{
    background-color:rgb(252, 252, 251);
    width: 33%;
}

.connect {
    margin-top: 15px;
}
</style> 

