<template>
  <section class="main">
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
        <div
          class="message task"
          v-for="task in tasks"
          v-bind:key="task.title"
          v-bind:task_data="task"
        >
          <div class="first-part-task">
            <!-- <div class="message-img">
                <fa icon="check" class="message-img-fa" />
                <i class="fas fa-check"></i>
              </div> -->
            <h3>{{ task.title }}</h3>
            <p>
              {{ task.text }}
            </p>
          </div>
          <p class="time">Выполнить до {{ task.time }}</p>
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
              <!-- <i class="fas fa-check"></i> -->
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
              <!-- <i class="fas fa-comment-alt"></i> -->
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
              <!-- <i class="fas fa-cloud-download-alt"></i> -->
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
  </section>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "Tabs",
  components: {
    Header,
  },
  data() {
    return {
      tasks: {
        first: {
          title: "Task 1",
          text: "Go to the shop",
          time: "13:30 PM",
        },
        second: {
          title: "Task 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
          time: "9:00 PM",
        },
        third: {
          title: "Task 3",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum non excepturi voluptates recusandae minima",
          time: "19:25 PM",
        },
      },
    };
  },
  mounted() {
    let tab = function () {
      let tabNav = document.querySelectorAll(".nav-elem");
      let tabContent = document.querySelectorAll(".tab");
      let tabName;
      tabNav.forEach((item) => {
        item.addEventListener("click", selectTabNav);
      });

      function selectTabNav() {
        tabNav.forEach((item) => {
          item.classList.remove("is-active");
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-tab-name");
        selectTabContent(tabName);
      }
      function selectTabContent(tabName) {
        tabContent.forEach((item) => {
          item.classList.contains(tabName)
            ? item.classList.add("is-active")
            : item.classList.remove("is-active");
        });
      }
    };

    tab();
  },
};
</script>
<style></style>
