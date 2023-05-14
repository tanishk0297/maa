function displayMessage() {
    var messageContainer = document.getElementById("messageContainer");
    var motherImage = document.getElementById("motherImage");
    var messageText = document.getElementById("messageText");

    messageContainer.classList.remove("hidden");
    motherImage.src = "1.jpg";
    messageText.innerHTML = "A beautiful message for your mother";
}
// JavaScript code
function displayMessage() {
    const messageContainer = document.getElementById("messageContainer");
    const messageTexts = messageContainer.getElementsByTagName("h3");
  
    // Loop through each message text and apply the hover effect with delay
    for (let i = 0; i < messageTexts.length; i++) {
      setTimeout(() => {
        messageTexts[i].classList.toggle("hoverEffect");
      }, i * 5000); // Delay each hover effect by 5 seconds (5000 milliseconds)
    }
  
    // Show the message container
    messageContainer.classList.remove("hidden");
  }
  