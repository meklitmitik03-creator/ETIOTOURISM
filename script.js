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

function toggleChat(){
  let chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}
