<template>
  <div class="root-div">
    <Sidebar v-on:resizeMain="resizeMain" />
    <Tabs />
    <!-- <section class="main">
      <div class="main-wrapper">
        <Header />
        <nav class="nav">
          <div class="nav-elem" data-tab-name="tab-1">Tasks</div>
          <div class="nav-elem" data-tab-name="tab-2">Kanban</div>
          <div class="nav-elem is-active" data-tab-name="tab-3">Activity</div>
          <div class="nav-elem" data-tab-name="tab-4">Calendar</div>
          <div class="nav-elem" data-tab-name="tab-5">Files</div>
        </nav>
      </div>
      <div class="main-page">
        <div class="tasks-tab tab tab-1">
          <p class="day">TASK LIST</p>
          <div class="message task">
            <div class="first-part-task">
              <div class="message-img">
                <fa icon="check" class="message-img-fa" />
                <i class="fas fa-check"></i>
              </div>
              <h3>1 Task</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque laborum non excepturi voluptates recusandae minima
              </p>
            </div>
            <p class="time">Выполнить до 13:00 PM</p>
          </div>
        </div>
        <div class="kanban-tab tab tab-2">
          <p>Kanban</p>
        </div>
        <div class="activity tab tab-3 is-active">
          <p class="day">TODAY</p>
          <div class="message">
            <div class="first-part">
              <div class="message-img">
                <fa icon="check" class="message-img-fa" />
              </div>
              <p>
                Darika Samak mark as done Listing on Product Hunt so that we can
                reach as many potential users
              </p>
            </div>
            <p class="time">8:40 PM</p>
          </div>
          <div class="message">
            <div class="first-part">
              <div class="message-img chat-icon">
                <fa icon="comment-alt" class="message-img-fa" />
              </div>
              <p>
                Emilee Simchenko commented on Account for teams and personal in
                bottom style
              </p>
            </div>
            <p class="time">7:32 PM</p>
          </div>
          <div class="apendix">
            <p>
              During a project build, it is necessary to evaluate the product
              design and development against project requirements and outcomes
            </p>
          </div>
          <div class="message">
            <div class="first-part">
              <div class="message-img download-icon">
                <fa icon="cloud-download-alt" class="download-icon-fa" />
              </div>
              <p>
                Darika Samak uploaded 4 files on An option to search in current
                projects or in all projects
              </p>
            </div>
            <p class="time">6:02 PM</p>
          </div>
          <div class="images">
            <img src="@/assets/town.jpg" id="town" alt="" />
            <img src="@/assets/beach.jpg" id="beach" alt="" />
            <img src="@/assets/fiord.jpg" id="fiord" alt="" />
            <img src="@/assets/beach-2.jpg" id="beach_2" alt="" />
          </div>
        </div>
        <div class="calendar-tab tab tab-4">
          <p>Calendar</p>
        </div>
        <div class="files-tab tab tab-5">
          <p>Files</p>
        </div>
      </div>
    </section> -->
    <ModalWindow />
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
// import Header from "@/components/Header.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    // Header,
    ModalWindow,
    Tabs,
  },
  methods: {
    resizeMain() {
      let main = document.querySelector(".main");
      let test = main.style.width;
      if (window.matchMedia("(max-width: 480px)").matches) {
        main.style.width = "100%";
        console.log("Yuuhuuu");
      } else {
        if (test == "75%") {
          main.style.width = "100%";
        } else {
          main.style.width = "75%";
        }
        console.log("Br");
      }
    },
  },
  mounted() {
    let notifications = document.querySelector(".notifications");
    let notifications_text = document.querySelector(".notifications_text");
    let town = document.querySelector("#town");
    let beach = document.querySelector("#beach");
    let fiord = document.querySelector("#fiord");
    let beach_2 = document.querySelector("#beach_2");
    let images = [town, beach, fiord, beach_2];

    images.forEach((item) => {
      item.addEventListener("click", () => {
        notifications.classList.remove("hidden");
        notifications_text.innerHTML = images.indexOf(item);
      });
    });
  },
};
</script>
<style>
/* Tasks page styles*/
.first-part-task {
  display: block;
}

.first-part-task p {
  width: 460px;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  margin-top: 10px;
}

.task {
  border: 1px solid #d3d3d3;
  padding: 15px;
  border-radius: 15px;
  align-items: center;
}
/*end */
#check:checked ~ .main {
  width: 75%;
}
.root-div {
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
  margin-left: auto;
}
.nav {
  display: flex;
  margin-left: 15px;
}

.nav-elem {
  padding: 15px;
  /* color: #131313;
    opacity: 70%; */
  color: #a9a9a9;
  cursor: pointer;
}

.main-page {
  background-color: #f7f6f3;
  flex-grow: 3;
  padding-top: 30px;
  padding-bottom: 30px;
  /* height: 82%; */
  /* padding: 30px 0 120px 0; */
}

.main-wrapper {
  /* height: 18%; */
}

.activity {
  background: #ffffff;
  border-radius: 8px;
  padding: 30px 30px 45px 30px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.day {
  opacity: 0.5;
  font-size: 14px;
  color: #131313;
}

.message-img {
  background: #cef9c6;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  /* position: relative; */
}

.message-img-fa {
  /* position: absolute;
    top: 15px;
    left: 14px; */
  margin-top: 13px;
  margin-left: 12px;
  font-size: 16px;
}

.first-part {
  display: flex;
}

.message {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.first-part p {
  width: 460px;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  margin-left: 20px;
}

.time {
  opacity: 0.7;
  font-size: 14px;
  color: #131313;
}

.chat-icon {
  background: #fff8dd;
}

.chat-icon img {
  width: 15px;
}

.apendix {
  width: 75%;
  margin-top: 20px;
  background: #f7f6f3;
  border-radius: 10px;
  padding: 20px 30px;
  margin-left: auto;
  margin-right: auto;
}

.download-icon {
  background: #e3efff;
}

.download-icon-fa {
  margin-top: 13px;
  margin-left: 10px;
  /* width: 15px; */
}

.images {
  margin-top: 20px;
  display: flex;
  /* padding: 0 0 0 50px; */
  margin-left: 60px;
}

.images img {
  border-radius: 8px;
  margin-right: 10px;
}

.buttons {
  display: flex;
}

/*Стилизация табов*/

.tab {
  display: none;
  background: #ffffff;
  border-radius: 8px;
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.tab.is-active {
  display: block;
}

.nav-elem.is-active {
  color: #000000;
  border-bottom: 2px solid #ffc200;
}

@media only screen and (max-width: 1024px) {
  .first-part p {
    width: 360px;
    font-size: 15px;
  }
  .first-part-task p {
    width: 360px;
    font-size: 15px;
  }
  .time {
    font-size: 13px;
  }

  .apendix p {
    font-size: 15px;
  }

  .activity {
    padding: 30px 30px 20px 30px;
  }
}
@media only screen and (max-width: 768px) {
  .header-intro {
    padding-top: 10px;
  }

  .header {
    padding: 25px 30px 10px 30px;
  }

  .nav-elem {
    font-size: 15px;
  }

  .day {
    font-size: 13px;
  }

  .activity {
    padding: 20px;
    width: 85%;
  }

  .first-part p {
    font-size: 15px;
  }
  .first-part-task p {
    font-size: 15px;
    width: 300px;
  }

  .message {
    margin-top: 25px;
  }

  .main-page {
    padding-top: 15px;
  }

  .modal_wrapper {
    width: 40vw;
  }
  .images {
    margin-left: 0;
  }
  .download-icon-fa {
    margin-top: 12px;
  }
}
@media only screen and (max-width: 640px) {
  .nav-elem {
    padding: 10px 15px;
  }

  .day {
    font-size: 12px;
  }

  .message-img {
    width: 30px;
    height: 30px;
  }

  .message-img-fa {
    margin-top: 9px;
    margin-left: 8px;
    font-size: 15px;
  }

  .first-part p {
    margin-left: 10px;
    font-size: 14px;
    width: 310px;
  }
  .first-part-task p {
    margin-left: 0px;
    font-size: 14px;
    width: 240px;
  }

  .time {
    font-size: 11px;
  }

  .apendix p {
    font-size: 14px;
  }

  .download-icon-fa {
    margin-top: 8px;
    margin-left: 6px;
  }

  .images {
    margin-left: 0px;
  }

  .images img {
    width: 90px;
  }
}
@media only screen and (max-width: 480px) {
  .main {
    width: 100%;
  }
  .nav {
    margin-left: 0px;
  }

  .users {
    margin-top: 10px;
  }

  .photos img {
    margin-left: 3px;
  }

  .nav-elem {
    padding: 10px 13px;
  }

  .activity {
    padding: 15px 10px 15px 10px;
  }

  .day {
    font-size: 10px;
  }

  .message-img {
    width: 26px;
    height: 26px;
  }

  .message-img-fa {
    /* top: 10px;
        left: 8.5px;
        width: 10px; */
    margin-top: 8px;
    margin-left: 7px;
    font-size: 13px;
  }

  .download-icon-fa {
    margin-top: 7px;
    margin-left: 5px;
    font-size: 13px;
  }

  .first-part p {
    font-size: 13px;
    margin-left: 6px;
    width: 300px;
  }
  .first-part-task p {
    font-size: 13px;
    margin-left: 0px;
    width: 250px;
  }

  .apendix {
    padding: 15px 25px;
  }

  .apendix p {
    font-size: 13px;
  }

  .time {
    font-size: 10px;
  }

  .message {
    margin-top: 20px;
  }

  .images {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 400px) {
  .first-part p {
    width: 260px;
  }
  .first-part-task p {
    width: 200px;
  }
  .images {
    /* margin: 15px auto 0px 70px; */
    margin: 15px 0 0 0;
  }

  .images img {
    margin-top: 5px;
  }

  .download-icon img {
    top: 9px;
  }
}
@media only screen and (max-width: 920px) {
  .images {
    margin-left: 0px;
  }
}
</style>
