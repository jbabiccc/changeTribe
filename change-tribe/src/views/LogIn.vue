<template>
    <b-container fluid>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="pass">
        </div>
        <button type="submit" class="btn btn-primary" @click="login">Submit</button>
        <p>Need an account?<router-link to="/signup">SignUp</router-link></p>
      </form>    
    </b-container>
     
</template>
        
<script>
import firebase from "firebase";

export default {
   name:"Login",
   data(){
       return{
           email:"",
           pass:""
       }
   },
   methods: {
       login:function(){
           firebase
           .auth()
           .signInWithEmailAndPassword(this.email, this.pass)
           .then(
               ()=>{
                   console.log("wokrs")
               },
               err=>{
                   alert(err);
               }
           )
       }
   }
}
</script>

<style scoped>

</style>