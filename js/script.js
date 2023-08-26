window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function openLink(tabname, element, tabActive) {
    let tab_content;
    let tablink = document.getElementsByClassName('booking-box');

    tab_content = document.getElementsByClassName("booking-details");
    
    for (let i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }

    for (let j = 0; j < tablink.length; j++) {
        tablink[j].style.backgroundColor = "#fff";
    }

    document.querySelector('.' + tabActive).style.backgroundColor = "#4086F5";
    document.getElementById(tabname).style.display = 'flex';
}

document.getElementById("default").click();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-nav");


hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("ul li, .profile-status span").forEach(n => n.addEventListener("click", () => {
    // hamburger.classList.remove("active");
    // navMenu.classList.remove("active");

}))

function openTab(tabname, element, tabActive) {
    let tab_content;
    let tablink = document.getElementsByClassName('tab-choice');

    tab_content = document.getElementsByClassName("packages-card-wrapper");
    
    for (let i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }

    for (let j = 0; j < tablink.length; j++) {
        tablink[j].style.backgroundColor = "#fff";
    }

    document.querySelector('.' + tabActive).style.backgroundColor = '#4086F5';
    document.querySelector('.' + tabActive).style.padding = '5px 20px';
    document.querySelector('.' + tabActive).style.borderRadius = '13px';
    document.getElementById(tabname).style.display = 'flex';
}

document.getElementById("default2").click();