 let chatboxVisible = false;

 function toggleChatbox() {
     const chatbox = document.getElementById("chatbox");
     chatbox.style.display = chatboxVisible ? "none" : "block";
     chatboxVisible = !chatboxVisible;
 }

 function sendMessage() {
     const userInput = document.getElementById("user-input").value;
     const chatboxBody = document.getElementById("chatbox-body");

     // Tambahkan pesan pengguna ke chatbox
     const userMessage = document.createElement("p");
     userMessage.innerText = "You: " + userInput;
     chatboxBody.appendChild(userMessage);

     // Kirim pesan ke API chat GPT dan terima respon
     // Implementasi logika untuk berkomunikasi dengan API GPT disini

     // Reset input
     document.getElementById("user-input").value = "";
 }
