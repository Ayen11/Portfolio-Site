var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

var sidemenu =document.getElementById("sidemenu")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab');
}



function closemenu(){
    sidemenu.style.right = "-200";
}

function openmenu(){
    alert("aaa")
    sidemenu.style.right = "0";
}