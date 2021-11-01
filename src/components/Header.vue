<template lang="pug">
header.header
  .header-intro
    .shape-background
      img#shape(src="@/assets/Shapes@2x.png", alt="shape")
    p Website Redesign
    fa#more-info(icon="info-circle")
  .users
    .photos
      fa.users-fa(icon="user-circle")
      fa.users-fa(icon="user-circle")
      fa.users-fa(icon="user-circle")
    .buttons
      input#share(type="button", value="Share")
      .chat-block
        fa.chat-block-fa(icon="comments")
        input#chat(type="button", value="Chat")
//- <header class="header">
//-   <div class="header-intro">
//-     <div class="shape-background">
//-       <img src="@/assets/Shapes@2x.png" alt="shape" id="shape" />
//-     </div>
//-     p Website Redesign
//-     <fa icon="info-circle" id="more-info" />
//-     !-- <i class="fas fa-info-circle" id="more-info" 
//-   </div>
//-   <div class="users">
//-     <div class="photos">
//-       <fa icon="user-circle" class="users-fa" />
//-       <fa icon="user-circle" class="users-fa" />
//-       <fa icon="user-circle" class="users-fa" />
//-       !-- <i class="fas fa-user-circle" 
//-       i class="fas fa-user-circle" 
//-       i class="fas fa-user-circle" 
//-     </div>
//-     <div class="buttons">
//-       <input type="button" value="Share" id="share" />
//-       <div class="chat-block">
//-         <fa icon="comments" class="chat-block-fa" />
//-         !-- <i class="fas fa-comments" 
//-         <input type="button" value="Chat" id="chat" />
//-       </div>
//-     </div>
//-   </div>
//- </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 35px 30px 10px 30px;
}

.header-intro {
  font-size: 32px;
  color: #131313;
  display: flex;
  align-items: center;
}

.header-intro img {
  cursor: pointer;
}

.header-intro p {
  margin: 0px 10px 0px 10px;
}

#shape {
  width: 40px;
}

#more-info {
  /* width: 25px; */
  cursor: pointer;
}

.shape-background {
  height: 41px;
  background-color: #ffc200;
  border-radius: 20%;
}

.users-fa {
  /* width: 30px; */
  font-size: 30px;
  margin-left: 5px;
}

.users {
  display: flex;
  align-items: center;
}

#share {
  /* border-radius: 20%; */
  border-radius: 15px;
  border: none;
  padding: 5px 15px 5px 15px;
  background-color: #eaeaea;
  cursor: pointer;
  font-size: 14px;
  margin-left: 15px;
  height: 30px;
}

.chat-block {
  display: flex;
  border-radius: 15px;
  margin-left: 10px;
  background: #fff8dd;
}

.chat-block-fa {
  /* width: 16px; */
  font-size: 20px;
  color: #ffc200;
  margin-left: 10px;
  margin-top: 4px;
  cursor: pointer;
}

#chat {
  background: #fff8dd;
  border-radius: 15px;
  border: none;
  padding: 1px 10px 1px 6px;
  font-size: 14px;
  color: #ffc200;
  cursor: pointer;
  /* padding: 15px 5px 5px 35px; */
}
.buttons {
  display: flex;
}
@media only screen and (max-width: 768px) {
  .header-intro p {
    font-size: 28px;
  }

  .users-fa {
    font-size: 26px;
  }

  #shape {
    width: 35px;
  }

  .shape-background {
    height: 36px;
  }

  .users {
    display: block;
  }

  .buttons {
    margin-top: 5px;
  }

  #share {
    font-size: 13px;
    padding: 4px 12px 4px 12px;
    margin-left: 0;
  }

  #chat {
    font-size: 13px;
  }

  /* .chat-block-fa {
    width: 15px;
        left: 19px;
    margin-top: 6px;
    font-size: 19px;
  } */

  #more-info {
    /* width: 24px; */
    font-size: 25px;
    /* height: 37px; */
  }

  .header-intro {
    padding-top: 10px;
  }

  .header {
    padding: 25px 30px 10px 30px;
  }
}

@media only screen and (max-width: 640px) {
  .header {
    padding: 20px 20px 10px 20px;
  }

  .header-intro p {
    font-size: 26px;
  }

  #chat {
    margin-left: 0px;
  }
}
@media only screen and (max-width: 480px) {
  .header {
    flex-direction: column;
  }

  #shape {
    width: 30px;
  }

  .shape-background {
    height: 31px;
  }

  .header-intro p {
    font-size: 25px;
  }

  #more-info {
    /* width: 23px;
        height: auto; */
    font-size: 24px;
  }

  .users-fa {
    /* width: 23px; */
    font-size: 24px;
    margin-left: 0;
    margin-right: 5px;
  }
  .users {
    margin-top: 10px;
  }

  .buttons #share {
    font-size: 12px;
    height: 25px;
    padding: 0px 10px;
    margin-left: 0;
  }

  #chat {
    font-size: 12px;
    height: 25px;
    padding: 0px 10px 0px 10px;
  }

  .chat-block-fa {
    /* width: 14px; */
    font-size: 18.5px;
    margin-top: 4px;
    left: 16px;
    top: 6px;
  }
}
@media only screen and (max-width: 400px) {
  .buttons #share {
    margin-left: 0px;
  }

  .users-fa {
    margin-left: 0px;
  }
}
@media only screen and (max-width: 426px) {
  .images img {
    margin-top: 5px;
  }
}
@media only screen and (max-width: 920px) {
  .users {
    display: block;
  }

  #share {
    margin-left: 5px;
  }

  /* #more-info {
        height: 40px;
    } */
  .header-intro {
    align-items: center;
  }
  .buttons {
    margin-top: 5px;
  }
}
@media only screen and (max-width: 690px) {
  .header {
    flex-direction: column;
  }

  .users {
    margin-top: 10px;
  }
}
</style>
