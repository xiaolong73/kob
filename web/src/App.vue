<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
// import $ from 'jquery' 
export default{
  components:{
    NavBar
  },
  setup(){
  //   $.ajax({
  //     url:"http://127.0.0.1:8888/user/account/token/",
  //     type:"post",
  //     data:{
  //       username:'xl',
  //       password:'123456',
  //     },
  //     success(resp){
  //       console.log(resp);
  //     },
  //     error(resp){
  //       console.log(resp);
  //     }
  //   });

  //   $.ajax({
  //     url:"http://127.0.0.1:8888/user/account/info/",
  //     type:"get",
  //     headers:{
  //       Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0YzJiNGVkZjJkNTY0OTRiOWU4YzNhNTFhZGEwNDFiNyIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY3MjczNTY4OCwiZXhwIjoxNjczOTQ1Mjg4fQ.i9A5d_pslM1c4zo3QFoG-EW3r1udotWvp8h_f_Uwtvk"
  //     },
  //     success(resp){
  //       console.log(resp);
  //     },
  //     error(resp){
  //       console.log(resp);
  //     }
  //   });

  //   $.ajax({
  //     url:"http://127.0.0.1:8888/user/account/register/",
  //     type:"post",
  //     data:{
  //       username: 'yxc',
  //       password: '123456',
  //       confirmedPassword: '123456',
  //     },
  //     success(resp){
  //       console.log(resp);
  //     },
  //     error(resp){
  //       console.log(resp);
  //     },
  //   });
  }
}
</script>

<style>
body{
    background-image:url("@/assets/images/background.png");
    background-size: cover;
}
</style>
