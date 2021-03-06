/**
 * Test send message every 3s and display GIF
 */

const webapp = require("../webapp")
const Emitter = require('events');
const client = new Emitter();




/** test on receive message and show GIF */
client.on('message', (channel, tags, message, self) => {

    console.log(message)
    
    /** display gif, sound, message */
    webapp.socket.io().emit("widget::gif", {
        message : message
    })

});



/** test loop send message like a tmi.js */
let messages = [
    "Hello",
    "สวัสดี",
    "", // image only
];

let i = 0
setInterval(()=>{
    client.emit('message', "test_channel", "tags", messages[i], "self");
    i++
    if(i>=messages.length){
        i = 0;
    }
}, 3000)

console.log(`see GIF at ${webapp.url}/widgets/gif click -> 'Launch'`)