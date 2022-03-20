const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express();

const clientPath = `${__dirname}/client`;
console.log(`Serving static files from path ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT);
console.log("Server listening at " + PORT);

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
var roundNum = 1;
var connectedUser = '';
var aumIn = false;
var aumWins = 0;
var aumChas = 1;
var aumRes = 0;

var ninaIn = false;
var ninaWins = 0;
var ninaChas = 1;
var ninaRes = 0;

/* var LKIn = false;
var LKWins = 0;
var LKChas = 1;
var LKRes = 0; */

var LOKIn = false;
var LOKWins = 0;
var LOKChas = 1;
var LOKRes = 0;

/* var LXRIn = false;
var LXRWins = 0;
var LXRChas = 1;
var LXRRes = 0; */

var CJHIn = false;
var CJHWins = 0;
var CJHChas = 1;
var CJHRes = 0;

/* var JHAIn = false;
var JHAWins = 0;
var JHAChas = 1;
var JHARes = 0; */

var CEDIn = false;
var CEDWins = 0;
var CEDChas = 1;
var CEDRes = 0;

/* var SZFIn = false;
var SZFWins = 0;
var SZFChas = 1;
var SZFRes = 0; */

var KXIn = false;
var KXWins = 0;
var KXChas = 1;
var KXRes = 0;

/* var JLIn = false;
var JLWins = 0;
var JLChas = 1;
var JLRes = 0; */

var KNIn = false;
var KNWins = 0;
var KNChas = 1;
var KNRes = 0;

var JWIn = false;
var JWWins = 0;
var JWChas = 1;
var JWRes = 0;


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

io.on('connection', (sock) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('newuser', (data) => {
        if (data === "Aum") {
            aumIn = true;
            sock.id = "Aum";
        }
        if (data === "Nina") {
            ninaIn = true;
            sock.id = "Nina";
        }
        if (data === "LOK") {
            LOKIn = true;
            sock.id = "LOK";
        }
        if (data === "CJH") {
            CJHIn = true;
            sock.id = "CJH";
        }
        if (data === "CED") {
            CEDIn = true;
            sock.id = "CED";
        }
        if (data === "KX") {
            KXIn = true;
            sock.id = "KX";
        }
        if (data === "KN") {
            KNIn = true;
            sock.id = "KN";
        }
        if (data === "JW") {
            JWIn = true;
            sock.id = "JW";
        }
        
        io.emit('updateallwins', { aumWins, ninaWins, LOKWins, CJHWins, CEDWins, KXWins, KNWins, JWWins });

    });

    sock.on('disconnect', () => {
        if (sock.id === "Aum") {
            aumIn = false;
        }
        if (sock.id === "Nina") {
            ninaIn = false;
        }
        if (sock.id === "LOK") {
            LOKIn = false;
        }
        if (sock.id === "CJH") {
            CJHIn = false;
        }
        if (sock.id === "CED") {
            CEDIn = false;
        }
        if (sock.id === "KX") {
            KXIn = false;
        }
        if (sock.id === "KN") {
            KNIn = false;
        }
        if (sock.id === "JW") {
            JWIn = false;
        }

    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('addWin', (data) => {
        if (data === "AA") {
            aumWins++;
        }
        if (data === "NN") {
            ninaWins++;
        }
        if (data === "LOK") {
            LOKWins++;
        }
        if (data === "CJH") {
            CJHWins++;
        }
        if (data === "CED") {
            CEDWins++;
        }
        if (data === "KX") {
            KXWins++;
        }
        if (data === "KN") {
            KNWins++;
        }
        if (data === "JW") {
            JWWins++;
        }
    });
    sock.on('give', (data) => {
        
        if (data.userId === "LOK") {
            LOKWins--;
            if (data.giveToId === "CED") {
                CEDWins++
            }
            if (data.giveToId === "KX") {
                KXWins++
            }
        }
        if (data.userId === "JW") {
            JWWins--;
            if (data.giveToId === "CJH") {
                CJHWins++
            }
            if (data.giveToId === "KN") {
                KNWins++
            }
        }
        if (data.userId === "CJH") {
            CJHWins--;
            if (data.giveToId === "JW") {
                JWWins++
            }
            if (data.giveToId === "KN") {
                KNWins++
            }
        }
        if (data.userId === "CED") {
        CEDWins--;
            if (data.giveToId === "LOK") {
                LOKWins++
            }
            if (data.giveToId === "KX") {
                KXWins++
            }
        }
        if (data.userId === "KX") {
            KXWins--;
            if (data.giveToId === "LOK") {
                LOKWins++
            }
            if (data.giveToId === "CED") {
                CEDWins++
            }
        }
        if (data.userId === "KN") {
            KNWins--;
            if (data.giveToId === "JW") {
                JWWins++
            }
            if (data.giveToId === "CJH") {
                CJHWins++
            }
        }
        var giverId = data.userId
        var receiverId = data.giveToId
        io.emit("lifegained", { giverId, receiverId });
    });

    sock.on('requestlife', (data) => {   
        var requesterId = data.nickname;
        var requestToId = data.requestToId;
        io.emit('sendrequest', { requesterId, requestToId });
        
});

    sock.on('minusWin', (data) => {
        if (data === "AA") {
            aumWins--;
        }
        if (data === "NN") {
            ninaWins--;
        }
        if (data === "LOK") {
            LOKWins--;
        }
        if (data === "CJH") {
            CJHWins--;
        }
        if (data === "CED") {
            CEDWins--;
        }
        if (data === "KX") {
            KXWins--;
        }
        if (data === "KN") {
            KNWins--;
        }
        if (data === "JW") {
            JWWins--;
        }

    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('addCha', (data) => {
        if (data === "AA") {
            aumChas++;
        }
        if (data === "NN") {
            ninaChas++;
        }
        if (data === "LOK") {
            LOKChas++;
        }
        if (data === "CJH") {
            CJHChas++;
        }
        if (data === "CED") {
            CEDChas++;
        }
        if (data === "KX") {
            KXChas++;
        }
        if (data === "KN") {
            KNChas++;
        }
        if (data === "JW") {
            JWChas++;
        }
    });

    sock.on('minusCha', (data) => {
        if (data === "AA") {
            aumChas--;
        }
        if (data === "NN") {
            ninaChas--;
        }
        if (data === "LOK") {
            LOKChas--;
        }
        if (data === "CJH") {
            CJHChas--;
        }
        if (data === "CED") {
            CEDChas--;
        }
        if (data === "KX") {
            KXChas--;
        }
        if (data === "KN") {
            KNChas--;
        }
        if (data === "JW") {
            JWChas--;
        }
    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('submit', (data) => {
        if (data.userId === "AA") {
            aumRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , aumRes});
        }
        if (data.userId === "NN") {
            ninaRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , ninaRes});
        }
        if (data.userId === "LOK") {
            LOKRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , LOKRes});
        }
        if (data.userId === "CJH") {
            CJHRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , CJHRes});
        }
        if (data.userId === "CED") {
            CEDRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , CEDRes});
        }
        if (data.userId === "KX") {
            KXRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , KXRes});
        }
        if (data.userId === "KN") {
            KNRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , KNRes});
        }
        if (data.userId === "JW") {
            JWRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , JWRes});
        }
    });

    sock.on('challenge', (data) => {   
            var userId = data;
            io.emit('sendchallenge', userId);
            
    });

    sock.on('nextround', (data) => {
        roundNum = data;
        io.emit('refreshall', roundNum);
    });

    sock.on('chat-to-server', (data) => {
        io.emit('chat-to-clients', data);
    });

});


setInterval(function () {
    if (aumIn === true) {
        io.emit("transmituser", "Aum");
    }
    if (ninaIn === true) {
        io.emit("transmituser", "Nina");
    }
    if (LOKIn === true) {
        io.emit("transmituser", "LOK");
    }
    if (CJHIn === true) {
        io.emit("transmituser", "CJH");
    }
    if (CEDIn === true) {
        io.emit("transmituser", "CED");
    }
    if (KXIn === true) {
        io.emit("transmituser", "KX");
    }
    if (KNIn === true) {
        io.emit("transmituser", "KN");
    }
    if (JWIn === true) {
        io.emit("transmituser", "JW");
    }
    //dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

    if (aumIn === false) {
        io.emit('userdisconnect', "Aum");
    }
    if (ninaIn === false) {
        io.emit("userdisconnect", "Nina");
    }
    if (LOKIn === false) {
        io.emit('userdisconnect', "LOK");
    }
    if (CJHIn === false) {
        io.emit("userdisconnect", "CJH");
    }
    if (CEDIn === false) {
        io.emit("userdisconnect", "CED");
    }
    if (KXIn === false) {
        io.emit("userdisconnect", "KX");
    }
    if (KNIn === false) {
        io.emit("userdisconnect", "KN");
    }
    if (KNIn === false) {
        io.emit("userdisconnect", "KN");
    }
    if (JWIn === false) {
        io.emit("userdisconnect", "JW");
    }


    //io.emit('updateallwins', { aumWins, ninaWins, LKWins, LXRWins, JHAWins, SZFWins, JLWins });
    io.emit('updateallwins', { aumWins, ninaWins, LOKWins, CJHWins, CEDWins, KXWins, KNWins, JWWins });
    //io.emit('updateallchas', { aumChas, ninaChas, LKChas, LXRChas, JHAChas, SZFChas, JLChas });
    io.emit('updateallchas', { aumChas, ninaChas, LOKChas, CJHChas, CEDChas, KXChas, KNChas, JWChas });
    

    /* io.emit('updateAA', aumWins);
    io.emit('updateNN', ninaWins); */

}, 500);


