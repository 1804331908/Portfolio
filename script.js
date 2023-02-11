function sendMail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "shivammaheshwari503@gmail.com",
    Password : "93B9A0E01851828946348DADB87A9DE493F4",
    To : 'shivam8077990774@gmail.com',
    From : "shivammaheshwari503@gmail.com",
    Subject : "This is the subject",
    Body : "Name:" + document.getElementById("name").value
    + "<br> Email:" + document.getElementById("email").value
    + "<br> Message:" + document.getElementById("message").value
}).then(
  message => alert(message + " " + "Message Send Successfully!")
);

}



var menu_bar = document.querySelector(".menubar");
var main_div = document.querySelector(".nav-content");
console.log(main_div)
var sidebar = document.querySelector("#navUl")
var toggle =  document.querySelector("#toggle")
var navLink = document.querySelector(".nav-link")
console.log(navLink)


menu_bar.addEventListener("click", () => togglebar());

const togglebar = () => {
  main_div.classList.toggle("active");
};


function RemoveSidebar(){
  main_div.classList.remove("active");
}

