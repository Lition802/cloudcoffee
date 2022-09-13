const { io } = require("socket.io-client");

const socket = io("http://127.0.0.1:8080");


// client-side
socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});
