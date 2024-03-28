


function toggleBar() {
    const element = document.getElementById('nav-menu');
    element.hidden=!element.hidden;
    // element.classList.toggle("show-menu");
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const openPopupButtons = document.querySelectorAll('[data-modal-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')

openPopupButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const cur_project = button.closest('.project')
        const popup = cur_project.querySelector("#popup")
        openPopup(popup)
    })
})

closePopupButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const popup = button.closest('#popup')
        closePopup(popup)
    })
})

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active')
}

function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
}