<template>
  <ContentField> 我的Bot </ContentField>
</template>

<script>
import ContentField from "../../../components/ContentField.vue";
import $ from 'jquery'
import {useStore} from 'vuex'

export default {
  components: {
    ContentField,
  },
  setup(){
    const store = useStore();
  //   $.ajax({
  //     url: "http://127.0.0.1:8888/user/bot/add/",
  //     type: "post",
  //     data:{
  //       title:"Bot标题",
  //       description:"Bot描述",
  //       content:"Bot代码",
  //     },
  //     headers:{
  //       Authorization: "Bearer " + store.state.user.token,
  //     },
  //     success(resp){
  //       console.log(resp);
  //     },
  //     error(resp){
  //       console.log(resp);
  //     }
  //   })
    //   $.ajax({
    //   url: "http://127.0.0.1:8888/user/bot/remove/",
    //   type: "post",
    //   data:{
    //     bot_id:4,
    //   },
    //   headers:{
    //     Authorization: "Bearer " + store.state.user.token,
    //   },
    //   success(resp){
    //     console.log(resp);
    //   },
    //   error(resp){
    //     console.log(resp);
    //   }update
    // })
  //   $.ajax({
  //   url: "http://127.0.0.1:8888/user/bot/update/",
  //   type: "post",
  //   data:{
  //     bot_id:5,
  //     title:"Bot新标题5",
  //     description:"Bot新描述5",
  //     content:"Bot新代码5",

  //   },
  //   headers:{
  //     Authorization: "Bearer " + store.state.user.token,
  //   },
  //   success(resp){
  //     console.log(resp);
  //   },
  //   error(resp){
  //     console.log(resp);
  //   }
  // })
    $.ajax({
    url: "http://127.0.0.1:8888/user/bot/getlist/",
    type: "get",
    headers:{
      Authorization: "Bearer " + store.state.user.token,
    },
    success(resp){
      console.log(resp);
    },
    error(resp){
      console.log(resp);
    }
  })
  }
};
</script>

<style scoped>
</style>