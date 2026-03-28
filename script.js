function toggleSidebar(){
  document.querySelector(".sidebar").classList.toggle("hide");
}

function toggleChat(){
  let chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage(){
  let input = document.getElementById("chatInput").value;
  let body = document.getElementById("chatBody");

  body.innerHTML += "<p><b>You:</b> "+input+"</p>";
  body.innerHTML += "<p><b>AI:</b> Coming soon...</p>";

  document.getElementById("chatInput").value="";
}

function toggleSidebar(){
  document.querySelector(".sidebar").classList.toggle("hide");
  document.querySelector(".main").classList.toggle("full");
}
function toggleDetail(btn){

  let currentCard = btn.parentElement;
  let isOpen = currentCard.classList.contains("active");

  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("active");
  });

  if(!isOpen){
    currentCard.classList.add("active");
  }
}

function toggleChat(){
  let chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}
