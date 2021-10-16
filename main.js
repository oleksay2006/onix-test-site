let tab = function() {
    let tabNav = document.querySelectorAll('.nav-elem');
    let tabContent = document.querySelectorAll('.tab');
    let tabName;
    tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
    })

    function selectTabNav() {
      tabNav.forEach(item => {
          item.classList.remove('is-active');
      })
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
      tabContent.forEach(item => {
        item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
      })
    }

}

tab();

let modal = document.querySelector('.mainModal')
let modalButton_Yes = document.querySelector('.first-button')
let modalButton_No = document.querySelector('.second-button')
let completedTask = document.querySelector('.completed')
let num_1 = document.querySelector('.completed_nums')
let num_2 = document.querySelector('.opened_nums')
let good = document.querySelector('.good')
let bad = document.querySelector('.bad')
let tasks = 5
let opened_tasks = 5

num_1.innerHTML = tasks
num_2.innerHTML = opened_tasks

completedTask.addEventListener('click', () => {
  modal.classList.remove('hidden')
  if(opened_tasks == 0) {
    good.classList.add('hidden')
    bad.classList.remove('hidden')
    modalButton_Yes.classList.add('hidden')
    modalButton_No.classList.add('hidden')
    setTimeout(() => {
      modal.classList.add('hidden')
      good.classList.remove('hidden')
      bad.classList.add('hidden')
      modalButton_Yes.classList.remove('hidden')
      modalButton_No.classList.remove('hidden')
    }, 2000)
  }
})

modalButton_Yes.addEventListener('click', () => {
  if (opened_tasks > 0) {
    tasks += 1
    opened_tasks -= 1
    num_1.innerHTML = tasks
    num_2.innerHTML = opened_tasks
    modal.classList.add('hidden')
  }
})
modalButton_No.addEventListener('click', () => {
  modal.classList.add('hidden')
})



let notifications = document.querySelector('.notifications')
let notifications_text = document.querySelector('.notifications_text')
let town = document.querySelector('#town')
let beach = document.querySelector('#beach')
let fiord = document.querySelector('#fiord')
let beach_2 = document.querySelector('#beach_2')
let images = [town, beach, fiord, beach_2]

images.forEach((item) => { 
  item.addEventListener('click', () => {
    notifications.classList.remove('hidden')
    notifications_text.innerHTML = images.indexOf(item)
  }) 
})
