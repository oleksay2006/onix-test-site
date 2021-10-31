<template lang="pug">
div
  input#check(type="checkbox", v-on:change="resizeMain")
  label(for="check")
    fa#btn(icon="bars")
    fa#cancel(icon="times")
  section.sideBar
    .top
      .top-text
        .top-text-2
          img(src="@/assets/Logo@3x.svg", alt="logo3")
          h3 PROJECTUS
        fa#search(icon="search")
    .profile
      .profile-main
        img#profile-img(src="@/assets/profile.svg", alt="profile photo")
        .profile-text
          p.profile-name {{ this.profile_name }}
          p.profile-owner Product Owner
      fa#profile-more(icon="ellipsis-h")
    .tasks
      .completed
        p.numbers.completed_nums 372
        p.task-type Completed Tasks
      .opened
        p.numbers.opened_nums 11
        p.task-type Opened Tasks
    .menu
      p.menu-title MENU
      .menu-category
        p Home
      .menu-category
        p My Tasks
      .menu-category
        p Notifications
        .notifications.hidden
          p.notifications_text 0

  //- <div>
  //-   <input type="checkbox" id="check" v-on:change="resizeMain" />
  //-   <label for="check">
  //-     <!-- <i class="fas fa-bars" id="btn"></i> -->
  //-     <fa icon="bars" id="btn" />
  //-     <fa icon="times" id="cancel" />
  //-     <!-- <img id='btn' src="assets/left-arrow.svg" alt=""> -->
  //-   </label>
  //-   <section class="sideBar">
  //-     <div class="top">
  //-       <div class="top-text">
  //-         <div class="top-text-2">
  //-           <img src="@/assets/Logo@3x.svg" alt="logo3" />
  //-           <h3>PROJECTUS</h3>
  //-         </div>
  //-         <fa icon="search" id="search" />
  //-         <!-- <i class="fas fa-search" id="search"></i> -->
  //-       </div>
  //-     </div>

  //-     <div class="profile">
  //-       <div class="profile-main">
  //-         <img
  //-           src="@/assets/profile.svg"
  //-           alt="profile photo"
  //-           id="profile-img"
  //-         />
  //-         <div class="profile-text">
  //-           <p class="profile-name">{{ this.profile_name }}</p>
  //-           <p class="profile-owner">Product Owner</p>
  //-         </div>
  //-       </div>
  //-       <fa icon="ellipsis-h" id="profile-more" />
  //-       <!-- <i class="fas fa-ellipsis-h" id="profile-more"></i> -->
  //-     </div>
  //-     <div class="tasks">
  //-       <div class="completed">
  //-         <p class="numbers completed_nums">372</p>
  //-         <p class="task-type">Completed Tasks</p>
  //-       </div>
  //-       <div class="opened">
  //-         <p class="numbers opened_nums">11</p>
  //-         <p class="task-type">Opened Tasks</p>
  //-       </div>
  //-     </div>
  //-     <div class="menu">
  //-       <p class="menu-title">MENU</p>
  //-       <div class="menu-category">
  //-         <p>Home</p>
  //-       </div>
  //-       <div class="menu-category">
  //-         <p>My Tasks</p>
  //-       </div>
  //-       <div class="menu-category">
  //-         <p>Notifications</p>
  //-         <div class="notifications hidden">
  //-           <p class="notifications_text">2</p>
  //-         </div>
  //-       </div>
  //-     </div>
  //-   </section>
  //- </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  methods: {
    resizeMain() {
      this.$emit("resizeMain");
      let num: number = 12;
      console.log(num);
    },
  },
  data() {
    return {
      profile_name: "Jean Gonzales",
    };
  },
});
</script>
<style>
.hidden {
  display: none;
}
.sideBar {
  /* height: auto; */
  height: 100%;
  transition: all 1s ease;
  left: -25%;
  position: fixed;
  width: 25%;
  background-color: #000;
  color: #fff;
  /* font-family: Helvetica; */
}

/*До сайдбара*/
/*
    .sideBar {
    width: 25%;
    background-color: #000;
    color: #fff;
    }
*/
.top {
  padding: 30px;
}

.top-text-2 {
  display: flex;
}

.top-text-2 h3 {
  margin-left: 10px;
}

.top-text {
  display: flex;
  justify-content: space-between;
}

#search {
  cursor: pointer;
}

.profile {
  background: #202020;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-text {
  margin-left: 15px;
}

.profile-main {
  display: flex;
  align-items: center;
}

#profile-img {
  width: 48px;
}

#profile-more {
  /* width: 20px; */
  font-size: 20px;
  cursor: pointer;
}

.profile-name {
  font-size: 15px;
}

.profile-owner {
  font-size: 12px;
  color: #9b9b9b;
}

.tasks {
  display: flex;
  padding: 20px;
  justify-content: space-between;
}
.completed,
.opened {
  cursor: pointer;
}

.numbers {
  font-size: 20px;
}

.task-type {
  font-size: 12px;
  opacity: 0.5;
}

.menu-title {
  font-size: 13px;
  padding: 10px 10px 10px 20px;
  color: #878787;
}

.menu-category {
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
}

.menu-category p {
  font-size: 15px;
  cursor: pointer;

  /* height: 20px; */
}

#check {
  display: none;
}

label #btn,
label #cancel {
  position: fixed;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  border: 1px solid #262626;
  /* margin: 30% 30px 0 5px; */
  top: 50%;
  left: 10px;
  background: #262626;
  height: 38px;
  width: 38px;
  padding: 5px;
  text-align: center;
  line-height: 45px;
  transition: all 1s ease;
}

label #cancel {
  opacity: 0;
  visibility: hidden;
}

#check:checked ~ .sideBar {
  /* position: static; */
  left: 0;
  transition: all 1s ease;
}

#check:checked ~ .main {
  width: 75%;
}

#check:checked ~ label #btn {
  margin-left: 25%;
  opacity: 0;
  visibility: hidden;
}

#check:checked ~ label #cancel {
  margin-left: 25%;
  opacity: 1;
  visibility: visible;
}

.notifications {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffc200;
  margin-left: 15px;
  text-align: center;
  color: #131313;
  font-size: 15px;

  position: absolute;
  left: 100px;
}

.notifications p {
  margin-top: 2px;
}
@media only screen and (max-width: 768px) {
  label #btn,
  label #cancel {
    font-size: 25px;
    height: 33px;
    width: 33px;
    line-height: 40px;
  }
  #check:checked ~ label #cancel {
    margin-left: 24.5%;
  }
  .top h3 {
    font-size: 16px;
  }
  .top {
    padding: 20px;
  }
  .profile-name {
    font-size: 13px;
  }
  .profile-owner {
    font-size: 10px;
  }
  #profile-img {
    width: 38px;
  }
  #profile-more {
    /* width: 18px; */
    font-size: 19px;
  }
  .profile-text {
    margin-left: 10px;
  }
  .numbers {
    font-size: 18px;
  }
  .task-type {
    font-size: 11px;
  }
  .tasks {
    padding: 25px 15px 25px 15px;
  }
  .menu-title {
    font-size: 12px;
  }
  .menu-category p {
    font-size: 14px;
  }
  .notifications {
    width: 19px;
    height: 19px;
  }
}
@media only screen and (max-width: 640px) {
  .top {
    padding: 10px;
  }

  .top h3 {
    font-size: 15px;
    margin-left: 6px;
  }

  .top img {
    width: 17px;
  }

  #search {
    /* width: 16px; */
    font-size: 16px;
  }

  .profile {
    padding: 13px;
  }

  #profile-more {
    /* width: 16px; */
    font-size: 16px;
  }

  .profile-text {
    margin-left: 8px;
  }
}
@media only screen and (max-width: 480px) {
  .sideBar {
    width: 45%;
    left: -45%;
  }

  #check:checked ~ .sideBar {
    /* position: static; */
    /* width: 40%; */
    left: 0;
    transition: all 1s ease;
  }

  #check:checked ~ .main {
    width: 100%;
  }

  #check:checked ~ label #cancel {
    margin-left: 45%;
  }

  #check:checked ~ label #btn {
    margin-left: 45%;
  }
}
</style>
