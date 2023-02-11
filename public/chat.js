var socket = io.connect("http://localhost:4000");


// Emitting mssg from client to server

// query dom
var output = document.getElementById("output");
handle = document.getElementById("handle");
message = document.getElementById("message");
btn = document.getElementById("send");
feedback = document.getElementById("feedback");

// emit events
btn .addEventListener("click",()=>{

    console.log(message.value)
    console.log(handle.value)
    socket.emit("chat",{
        message: message.value,
        handle: handle.value
    });
});
message.addEventListener("keypress",()=>{
    socket.emit("typing",handle.value);
})


// Listen for events
socket.on("chat",(data)=>{
    feedback.innerHTML = ""; 
    output.innerHTML +=  "<p><strong>" + data.handle + "</strong>: " + data.message + "</p>";
})
socket.on("typing",(data)=>{
    feedback.innerHTML = "<p><em>" + data + " is typing...</em></p>" 
})


