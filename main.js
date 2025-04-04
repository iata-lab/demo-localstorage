// Capture  input and the botton

const inputName = document.getElementById("userName");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");
const inputImgUrl = document.getElementById("imgUrl");
const sendButton = document.getElementsByClassName("button");

// Function for the event button and storage input of the user

function onSubmit(event) {
  event.preventDefault();
  console.log("Hello!");

  const nameValue = inputName.value;
  localStorage.setItem("Name", nameValue);

  const emailValue = inputName.value;
  localStorage.setItem("Email", emailValue);

  const messageValue = inputName.value;
  localStorage.setItem("Message", messageValue);

  const imgUrlValue = inputName.value;
  localStorage.setItem("Image URL", imgUrlValue);
}

sendButton.addEventListener("click", onSubmit);


// Use JSON.parse() and JSON.stringify() to save data 


const contact={
    nameNewFormat:"inputName.value"
    emailNewFormat:"inputEmail.value"
    messageNewFormat:"inputMessage.value"
    imgUrlNewFormat: "inputImgUrl.value"
};

const contactJSON = JSON.stringify(contact); 
localStorage.setItem("contact", contactJSON);



// Convert from JSON to JS

const contactSaved = localStorage.getItem("contact");
const contactObject = JSON.parse(contactSaved);

console.log(contactObject.name);

