function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    const serviceID = "service_1x2q2rs";
    const templateID = "template_2p8ubgr";

    emailjs.send(serviceID, templateID, params).then((res) => {
    alert("Your message has successfully sent!" + res.status);
}).catch((err) => console.log(err));
        
    
}

var menu_bar = document.querySelector(".menubar");
var main_div = document.querySelector(".nav-content");

menu_bar.addEventListener("click", () => togglebar());

const togglebar = () => {
  main_div.classList.toggle("active");
};
