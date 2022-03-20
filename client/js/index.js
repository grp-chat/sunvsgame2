
const sock = io();
//let newLine = createNewLine();
var rotation = 1;
var roundNum = 1;
var wordRow = "row";
var rowNum = 1;
var userName = "Aum";
var userId = "AA";
var userName2 = "Julie ";
var userId2 = "NN";

/* var userId3 = "LK";
var userId4 = "LXR";
var userId5 = "JHA";
var userId6 = "JL";
var userId7 = "SZF";
var userId8 = ""; */

var userId3 = "LOK";
var userId4 = "CJH";
var userId5 = "CED";
var userId6 = "KX";
var userId7 = "KN";
var userId8 = "JW";

var team1 = ["LOK", "CED", "KX"];
var team2 = ["JW", "CJH", "KN"];

var nickname = '';
var connectedUser = '';
var userOnline = '';
var userOffline = '';
var aumWins = 0;
var aumChas = 1;
var ninaWins = 0;
var ninaChas = 1;
/* var LKWins = 0;
var LKChas = 1;
var LXRWins = 0;
var LXRChas = 1;
var JHAWins = 0;
var JHAChas = 1;
var SZFWins = 0;
var SZFChas = 1;
var JLWins = 0;
var JLChas = 1; */

var LOKWins = 0;
var LOKChas = 1;
var CJHWins = 0;
var CJHChas = 1;
var CEDWins = 0;
var CEDChas = 1;
var KXWins = 0;
var KXChas = 1;
var KNWins = 0;
var KNChas = 1;
var JWWins = 0;
var JWChas = 1;

//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------
const promptMsg = () => {
    var nick = prompt("Please enter your pin number:");
    while (nick.length == 0) {
        alert("Please enter your pin number!");
        nick = prompt("Please enter your pin number:");
    }


    if (nick === '8111188') {
        nickname = 'Aum';
        correctPin = true;
    } else if (nick === '1888811') {
        nickname = 'Nina'
        correctPin = true;
    } else if (nick === '9852') {
        nickname = 'LK'
        correctPin = true;
    } else if (nick === '9035') {
        nickname = 'LXR'
        correctPin = true;
    } else if (nick === '6588') {
        nickname = 'TJY'
        correctPin = true;
    } else if (nick === '1072') {
        nickname = 'JL'
        correctPin = true;
    } else if (nick === '3839') {
        nickname = 'SZF'
        correctPin = true;
    } else if (nick === '88888') {
        nickname = 'TCR'
        correctPin = true;
    } else if (nick === '3583') {
        nickname = 'JHA'
        correctPin = true;
    } else if (nick === '5086') {
        nickname = 'CED'
    } else if (nick === '2105') {
        nickname = 'CJH'
    } else if (nick === '2167') {
        nickname = 'KX'
    } else if (nick === '7051') {
        nickname = 'KN'
    } else if (nick === '1198') {
        nickname = 'LOK'
    } else if (nick === '7089') {
        nickname = 'JW'
    } else {
        alert("Wrong pin number!");
        promptMsg();
    }
};

promptMsg();
sock.emit('newuser', nickname);
//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------



//++++++++++++++++++++++++++++++++++++++++ DOCUMENT OBJECT METHOD UPDATE +++++++++++++++++++++++++++++++++++

var theRound = document.getElementById("h1");
theRound.innerHTML = "Infinity War - Round" + roundNum;
document.body.appendChild(createContainerFluid());

let mainDiv = document.getElementById("maindiv");

/* document.body.appendChild(createNewRow(wordRow + rowNum, userName, userId));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId2));
rowNum++;
document.body.appendChild(createHrLine(rowNum));
rowNum++; */

document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId3));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId8));
rowNum++;
document.body.appendChild(createHrLine(wordRow + rowNum));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId4));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId5));
rowNum++;
document.body.appendChild(createHrLine(wordRow + rowNum));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId6));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId7));
rowNum++;

document.body.appendChild(createBotBtn(wordRow + rowNum));

//++++++++++++++++++++++++++++++++++++++++ DOCUMENT OBJECT METHOD UPDATE +++++++++++++++++++++++++++++++++++


//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} LISTENERS FROM SERVER {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{
sock.on('updateallwins', data => {
    if (data.aumWins > aumWins) {
        var aumWinDif = data.aumWins - aumWins;
        var userId = "AA"
        updateAllWins(userId, aumWinDif);
        aumWins = data.aumWins;
    }
    if (data.ninaWins > ninaWins) {
        var ninaWinDif = data.ninaWins - ninaWins;
        var userId = "NN"
        updateAllWins(userId, ninaWinDif);
        ninaWins = data.ninaWins;
    }
    if (data.LOKWins > LOKWins) {
        var LOKWinDif = data.LOKWins - LOKWins;
        var userId = "LOK"
        updateAllWins(userId, LOKWinDif);
        LOKWins = data.LOKWins;
    }
    if (data.CJHWins > CJHWins) {
        var CJHWinDif = data.CJHWins - CJHWins;
        var userId = "CJH"
        updateAllWins(userId, CJHWinDif);
        CJHWins = data.CJHWins;
    }
    if (data.CEDWins > CEDWins) {
        var CEDWinDif = data.CEDWins - CEDWins;
        var userId = "CED"
        updateAllWins(userId, CEDWinDif);
        CEDWins = data.CEDWins;
    }
    if (data.KXWins > KXWins) {
        var KXWinDif = data.KXWins - KXWins;
        var userId = "KX"
        updateAllWins(userId, KXWinDif);
        KXWins = data.KXWins;
    }
    if (data.KNWins > KNWins) {
        var KNWinDif = data.KNWins - KNWins;
        var userId = "KN"
        updateAllWins(userId, KNWinDif);
        KNWins = data.KNWins;
    }
    if (data.JWWins > JWWins) {
        var JWWinDif = data.JWWins - JWWins;
        var userId = "JW"
        updateAllWins(userId, JWWinDif);
        JWWins = data.JWWins;
    }

    //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    if (data.aumWins < aumWins) {
        var userId = "AA"
        removeWin(userId, aumWins);
        aumWins = data.aumWins;
    }
    if (data.ninaWins < ninaWins) {
        var userId = "NN"
        removeWin(userId, ninaWins);
        ninaWins = data.ninaWins;
    }
    if (data.LOKWins < LOKWins) {
        var userId = "LOK"
        removeWin(userId, LOKWins);
        LOKWins = data.LOKWins;
    }
    if (data.CJHWins < CJHWins) {
        var userId = "CJH"
        removeWin(userId, CJHWins);
        CJHWins = data.CJHWins;
    }
    if (data.CEDWins < CEDWins) {
        var userId = "CED"
        removeWin(userId, CEDWins);
        CEDWins = data.CEDWins;
    }
    if (data.KXWins < KXWins) {
        var userId = "KX"
        removeWin(userId, KXWins);
        KXWins = data.KXWins;
    }
    if (data.KNWins < KNWins) {
        var userId = "KN"
        removeWin(userId, KNWins);
        KNWins = data.KNWins;
    }
    if (data.JWWins < JWWins) {
        var userId = "JW"
        removeWin(userId, JWWins);
        JWWins = data.JWWins;
    }

});

sock.on('updateallchas', data => {
    if (data.aumChas > aumChas) {
        var aumChaDif = data.aumChas - aumChas;
        var userId = "AA"
        updateAllChas(userId, aumChaDif);
        aumChas = data.aumChas;
    }
    if (data.ninaChas > ninaChas) {
        var ninaChaDif = data.ninaChas - ninaChas;
        var userId = "NN"
        updateAllChas(userId, ninaChaDif);
        ninaChas = data.ninaChas;
    }
    if (data.LOKChas > LOKChas) {
        var LOKChaDif = data.LOKChas - LOKChas;
        var userId = "LOK"
        updateAllChas(userId, LOKChaDif);
        LOKChas = data.LOKChas;
    }
    if (data.CJHChas > CJHChas) {
        var CJHChaDif = data.CJHChas - CJHChas;
        var userId = "CJH"
        updateAllChas(userId, CJHChaDif);
        CJHChas = data.CJHChas;
    }
    if (data.CEDChas > CEDChas) {
        var CEDChaDif = data.CEDChas - CEDChas;
        var userId = "CED"
        updateAllChas(userId, CEDChaDif);
        CEDChas = data.CEDChas;
    }
    if (data.KXChas > KXChas) {
        var KXChaDif = data.KXChas - KXChas;
        var userId = "KX"
        updateAllChas(userId, KXChaDif);
        KXChas = data.KXChas;
    }
    if (data.KNChas > KNChas) {
        var KNChaDif = data.KNChas - KNChas;
        var userId = "KN"
        updateAllChas(userId, KNChaDif);
        KNChas = data.KNChas;
    }
    if (data.JWChas > JWChas) {
        var JWChaDif = data.JWChas - JWChas;
        var userId = "JW"
        updateAllChas(userId, JWChaDif);
        JWChas = data.JWChas;
    }

    //CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

    if (data.aumChas < aumChas) {
        var userId = "AA"
        removeCha(userId, aumChas);
        aumChas = data.aumChas;
    }
    if (data.ninaChas < ninaChas) {
        var userId = "NN"
        removeCha(userId, ninaChas);
        ninaChas = data.ninaChas;
    }
    if (data.LOKChas < LOKChas) {
        var userId = "LOK"
        removeCha(userId, LOKChas);
        LOKChas = data.LOKChas;
    }
    if (data.CJHChas < CJHChas) {
        var userId = "CJH"
        removeCha(userId, CJHChas);
        CJHChas = data.CJHChas;
    }
    if (data.CEDChas < CEDChas) {
        var userId = "CED"
        removeCha(userId, CEDChas);
        CEDChas = data.CEDChas;
    }
    if (data.KXChas < KXChas) {
        var userId = "KX"
        removeCha(userId, KXChas);
        KXChas = data.KXChas;
    }
    if (data.KNChas < KNChas) {
        var userId = "KN"
        removeCha(userId, KNChas);
        KNChas = data.KNChas;
    }
    if (data.JWChas < JWChas) {
        var userId = "JW"
        removeCha(userId, JWChas);
        JWChas = data.JWChas;
    }

});

sock.on('transmituser', data => {
    userOnline = data;
    if (userOnline === "Aum") {
        var togSpan = document.getElementById('AAspan');
        togSpan.style.background = "green";
    };
    if (userOnline === "Nina") {
        var togSpan = document.getElementById('NNspan');
        togSpan.style.background = "green";

    };
    if (userOnline === "LOK") {
        var togSpan = document.getElementById('LOKspan');
        togSpan.style.background = "green";
    };
    if (userOnline === "CJH") {
        var togSpan = document.getElementById('CJHspan');
        togSpan.style.background = "green";

    };
    if (userOnline === "CED") {
        var togSpan = document.getElementById('CEDspan');
        togSpan.style.background = "green";

    };
    if (userOnline === "KX") {
        var togSpan = document.getElementById('KXspan');
        togSpan.style.background = "green";

    };
    if (userOnline === "KN") {
        var togSpan = document.getElementById('KNspan');
        togSpan.style.background = "green";

    };
    if (userOnline === "JW") {
        var togSpan = document.getElementById('JWspan');
        togSpan.style.background = "green";

    };

});

sock.on('userdisconnect', data => {
    userOffline = data;
    /* if (userOffline === "Aum") {
        var togSpan = document.getElementById('AAspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "Nina") {
        var togSpan = document.getElementById('NNspan');
        togSpan.style.background = "red";
    }; */
    if (userOffline === "LOK") {
        var togSpan = document.getElementById('LOKspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "CJH") {
        var togSpan = document.getElementById('CJHspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "CED") {
        var togSpan = document.getElementById('CEDspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "KX") {
        var togSpan = document.getElementById('KXspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "KN") {
        var togSpan = document.getElementById('KNspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "JW") {
        var togSpan = document.getElementById('JWspan');
        togSpan.style.background = "red";
    };
});

sock.on('updateallresults', data => {
    if (data.userId === "AA") {
        var updatebox = document.getElementById('AAinput');
        updatebox.value = data.aumRes;
    }
    if (data.userId === "NN") {
        var updatebox = document.getElementById('NNinput');
        updatebox.value = data.ninaRes;
    }
    if (data.userId === "LOK") {
        var updatebox = document.getElementById('LOKinput');
        updatebox.value = data.LOKRes;
    }
    if (data.userId === "CJH") {
        var updatebox = document.getElementById('CJHinput');
        updatebox.value = data.CJHRes;
    }
    if (data.userId === "CED") {
        var updatebox = document.getElementById('CEDinput');
        updatebox.value = data.CEDRes;
    }
    if (data.userId === "KX") {
        var updatebox = document.getElementById('KXinput');
        updatebox.value = data.KXRes;
    }
    if (data.userId === "KN") {
        var updatebox = document.getElementById('KNinput');
        updatebox.value = data.KNRes;
    }
    if (data.userId === "JW") {
        var updatebox = document.getElementById('JWinput');
        updatebox.value = data.JWRes;
    }
});

sock.on('sendchallenge', data => {
    if (nickname === "TCR") {
        alert(data + " has called for a Challenge");
    }
});

sock.on('refreshall', data => {
    changeBackground(rotation);
    rotation++;

    if (rotation >= 13) { rotation = 1 };
    lifeGiven = 0;

    roundNum = data;
    theRound.innerHTML = "Infinity War - Round" + roundNum;
    var refreshIt = document.getElementById(nickname + "submitbtn");
    refreshIt.disabled = false;
    var refreshIt2 = document.getElementById(nickname + "callcha");
    refreshIt2.disabled = false;
    var refreshIt3 = document.getElementById(nickname + "givebtn");
    if (nickname != "TCR") {
        refreshIt3.disabled = false;
    }
    var refreshIt4 = document.getElementById(nickname + "reqbtn");
    if (nickname != "TCR") {
        refreshIt4.disabled = false;
    }

    var clearIt = document.getElementById("LOKinput");
    clearIt.value = '';
    clearIt = document.getElementById("CJHinput");
    clearIt.value = '';
    clearIt = document.getElementById("CEDinput");
    clearIt.value = '';
    clearIt = document.getElementById("KXinput");
    clearIt.value = '';
    clearIt = document.getElementById("KNinput");
    clearIt.value = '';
    clearIt = document.getElementById("JWinput");
    clearIt.value = '';



});

sock.on('lifegained', data => {
    if (nickname === data.receiverId) {
        alert("You have gained 1 life from " + data.giverId);
    }
});

sock.on('sendrequest', data => {
    if (nickname === data.requestToId) {
        alert(data.requesterId + " is requesting 1 life from you");
    }
});

sock.on('chat-to-clients', data => {
    appendMessage(data.message, data.nickname);
    
});
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} LISTENERS FROM SERVER {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{



//(((((((((((((((((((((((((((((((((((((((( FACTORY FUNCTIONS ))))))))))))))))))))))))))))))))))))))))))))))))

function createContainerFluid() {
    var createDiv = document.createElement('div');
    createDiv.className = "container-fluid";
    createDiv.setAttribute("id", "maindiv");
    return createDiv;
}

function createNewRow(rowNum, userName, userId) {

    var divRow = mainDiv.appendChild(document.createElement('div'));
    divRow.className = "row";
    divRow.setAttribute("id", rowNum);

    var divCol1 = divRow.appendChild(document.createElement('div'));
    divCol1.className = "col1";
    divCol1.style.padding = "10px";
    var label1 = divCol1.appendChild(document.createElement('h2'));
    label1.innerHTML = userId;
    label1.style.width = "100px";
    label1.style.color = "mediumblue";
    //label1.style = "background:rgba(255, 255, 0, 0.3)"
    var span1 = label1.appendChild(document.createElement('span'));
    span1.setAttribute("id", userId + "span");
    span1.style = "width:20px;height:20px";
    span1.style.display = "inline-block";
    span1.style.background = "red";

    /* var divCol1e = divRow.appendChild(document.createElement('div'));
    divCol1e.className = "col1e";
    divCol1e.style.padding = "10px";
    var span1 = divCol1e.appendChild(document.createElement('span'));
    span1.style = "width:10rem;height:10rem;background:red"; */

    var divCol2 = divRow.appendChild(document.createElement('div'));
    divCol2.className = "col2"
    divCol2.setAttribute("id", userId + "border");
    //createDiv.style.border = "5px solid black"
    //createDiv.style.padding = "40px"
    divCol2.style = "width:400px;height:65px"
    //createDiv.style.float = "left"
    //createDiv.className = "rounded"
    divCol2.style.backgroundImage = "url(https://lh3.googleusercontent.com/g1-vQvca_v4Juug9neJuXRY9Nnwh4sdNnxqG0THU_WocwJiD7ixvJL4CoGTWmdyZyCFtjz4gTI7LQCJaJ29eMk9xg_h2qonU0bcDbVYvxQ2BKzZWYs-VL02fLFHqhlfo3Cheh-om=w2400)"
    divCol2.style.backgroundSize = "100%"
    divCol2.style.backgroundRepeat = "no-repeat"

    var divCol1a = divRow.appendChild(document.createElement('input'));
    divCol1a.className = "input1";
    divCol1a.style.width = "7%";
    divCol1a.setAttribute("id", userId + "input");
    divCol1a.setAttribute("type", "number");
    if (userId != nickname) {
        divCol1a.disabled = true;
    }

    var divCol1b = divRow.appendChild(document.createElement('button'));
    divCol1b.className = "btn btn-secondary";
    //divCol1b.style.width = "7%";
    divCol1b.setAttribute("id", userId + "submitbtn");
    divCol1b.innerHTML = "Submit"
    if (userId != nickname) {
        divCol1b.disabled = true;
    }
    divCol1b.addEventListener('click', function () {
        var result = document.getElementById(userId + "input").value;
        sock.emit('submit', { userId, result });
        divCol1b.disabled = true;
    });

    var divCol1c = divRow.appendChild(document.createElement('button'));
    divCol1c.className = "btn btn-warning";
    //divCol1b.style.width = "7%";
    divCol1c.setAttribute("id", userId + "callcha");
    divCol1c.innerHTML = "Challenge"
    if (userId != nickname) {
        divCol1c.disabled = true;
    }
    divCol1c.addEventListener('click', function () {
        sock.emit('challenge', userId);
        divCol1c.disabled = true;
        alert(userId + " has called for a Challenge");
    });

    var divCol3 = divRow.appendChild(document.createElement('div'));
    divCol3.className = "col3"
    divCol3.style.padding = "10px";
    divCol3.appendChild(createButtonGroup("btnGrp1", userId + "border", userId));

    var divCol4a = divRow.appendChild(document.createElement('div'));
    divCol4a.setAttribute("id", userId + "listdiv");
    divCol4a.className = "col4a";
    if (team1.includes(userId)) {
        createDropList(userId, divCol4a, team1);
    }
    if (team2.includes(userId)) {
        createDropList(userId, divCol4a, team2);
    }

    var divCol4b = divRow.appendChild(document.createElement('button'));
    divCol4b.className = "btn btn-success";
    divCol4b.setAttribute("id", userId + "givebtn");
    divCol4b.innerHTML = "Give"
    if (userId != nickname) {
        divCol4b.disabled = true;
    }

    divCol4b.addEventListener('click', function () {
        //GIVE  

        if (userId === "LOK" && LOKWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "LOK" && LOKWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "JW" && JWWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "JW" && JWWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "CJH" && CJHWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "CJH" && CJHWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "CED" && CEDWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "CED" && CEDWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "KX" && KXWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "KX" && KXWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "KN" && KNWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "KN" && KNWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (lifeGiven >= 2) {
            divCol4b.disabled = true;
        }

    });

    var divCol4c = divRow.appendChild(document.createElement('button'));
    divCol4c.className = "btn btn-danger";
    divCol4c.setAttribute("id", userId + "reqbtn");
    divCol4c.innerHTML = "Request"
    if (userId != nickname) {
        divCol4c.disabled = true;
    }
    divCol4c.addEventListener('click', function () {
        var selection = document.getElementById(userId + "droplist");
        var requestToId = selection.options[selection.selectedIndex].text;
        sock.emit('requestlife', { nickname, requestToId });
        divCol4c.disabled = true;
        alert("You have sent a request to " + requestToId + " to give you 1 life");
    });

    var divCol4 = divRow.appendChild(document.createElement('div'));
    divCol4.setAttribute("id", userId + "chadiv");
    divCol4.className = "col4";
    //divCol4.style.padding = "10px";
    createChallenges(userId, userId + "chadiv", 1);
    //createChallenges(userId, userId + "chadiv", 2);
    //createChallenges(userId, userId + "chadiv", 3);
    //divCol4.appendChild(createChallenges(userId + "chadiv"));

    var divCol5 = divRow.appendChild(document.createElement('div'));
    divCol5.className = "col5"
    divCol5.style.padding = "10px";
    divCol5.appendChild(createChaButtons(userId));
    return mainDiv;
}

function createChallenges(userId, elToApply, chaCount) {
    var createDiv = document.getElementById(elToApply);
    createDiv.className = "float-left";
    //createDiv.setAttribute("id", "col4");
    var img = document.createElement('img');
    img.src = "https://lh3.googleusercontent.com/xpz43lDxs3mmfni85cCGkIX4GeKMsoC5RHDoLRxOpj28VggUjXnadGBq7Oh_TX4Hp7-cT68YfJhmh_LB-5RooPgxNhFn0NKSM1z6PKVwtLUmACeKct8Uo6N269krf5tg9KMOmf0y=w2400";
    img.style = "width:55px;height:55px";
    img.setAttribute("id", userId + "cha" + chaCount);
    createDiv.appendChild(img);
    return createDiv;
}

function createButtonGroup(name, elToApply, userId) {
    let winCount = 0;
    var createDiv = document.createElement('div');
    createDiv.setAttribute("id", name)
    createDiv.className = "btn-group"
    //createDiv.style.display = 'block'
    //createDiv.style = "width:100px;height:80px"
    //createDiv.style.clear = "left"
    let btn1 = createDiv.appendChild(document.createElement('button'));
    btn1.setAttribute("id", "btn1")
    btn1.className = "btn btn-success"
    btn1.innerHTML = "+"
    let btn2 = createDiv.appendChild(document.createElement('button'));
    btn2.setAttribute("id", "btn2")
    btn2.className = "btn btn-dark"
    btn2.innerHTML = "-"

    btn1.addEventListener('click', function () {
        sock.emit('addWin', userId);
    })
    btn2.addEventListener('click', function () {
        sock.emit('minusWin', userId);
    })

    if (nickname != "TCR") {
        //alert("hello")
        btn1.style.visibility = "hidden"
        btn2.style.visibility = "hidden"
    }
    return createDiv;

}

function createChaButtons(userId) {
    //var chaCount = 3;
    var createDiv = document.createElement('div');
    createDiv.setAttribute("id", userId + "chabtndiv");
    createDiv.className = "btn-group";
    let chaBtn1 = createDiv.appendChild(document.createElement('button'));
    chaBtn1.setAttribute("id", userId + "chabtn1");
    chaBtn1.className = "btn btn-success";
    chaBtn1.innerHTML = "+C";
    //chaBtn1.disabled = "true";
    let chaBtn2 = createDiv.appendChild(document.createElement('button'));
    chaBtn2.setAttribute("id", userId + "chabtn2");
    chaBtn2.className = "btn btn-dark";
    chaBtn2.innerHTML = "-C";

    chaBtn1.addEventListener('click', function () {
        sock.emit('addCha', userId);
    });

    chaBtn2.addEventListener('click', function () {
        sock.emit('minusCha', userId);
    });

    if (nickname != "TCR") {
        chaBtn1.style.visibility = "hidden";
        chaBtn2.style.visibility = "hidden";
    }



    return createDiv;

}

function removeWin(userId, winCount) {
    //alert(userId + "win" + winCount);
    var removeWin = document.getElementById(userId + "win" + winCount);
    removeWin.parentNode.removeChild(removeWin);


}

function removeCha(userId, chaCount) {

    var removeCha = document.getElementById(userId + "cha" + chaCount);
    removeCha.parentNode.removeChild(removeCha);
    //chaCount -= 1;

}

function addChallenge(userId, chaCount) {
    //chaCount++;
    var addCha = document.getElementById(userId + "chadiv");
    var img = document.createElement('img');
    img.src = "https://lh3.googleusercontent.com/xpz43lDxs3mmfni85cCGkIX4GeKMsoC5RHDoLRxOpj28VggUjXnadGBq7Oh_TX4Hp7-cT68YfJhmh_LB-5RooPgxNhFn0NKSM1z6PKVwtLUmACeKct8Uo6N269krf5tg9KMOmf0y=w2400";
    img.style = "width:35px;height:35px";
    //chaCount += 1;
    img.setAttribute("id", userId + "cha" + chaCount);
    //alert(userId + "cha" + chaCount);
    //img.style.padding = "10px"
    addCha.appendChild(img);
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function createNewDiv() {
    var div = document.createElement("div");
    div.setAttribute("id", "botdiv");
    div.style.width = "750px";
    div.style.height = "300px";
    //div.style = "background:rgba(255, 255, 255, 0.5); color:black; overflow: auto;"
    div.style.background = "rgba(255, 255, 255, 0.5)";
    div.style.color = "black";
    div.style.overflow = "auto";
    div.style.overflowX = "hidden";
    //div.style.float = "left";
    div.style.marginLeft = "2%";
    //div.innerHTML = "div";
    return div;
}

function appendMessage(message, userId) {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = message;
    var chatDiv = document.getElementById('chatdiv')
    if (userId === "TCR") {messageDiv.style.color = "yellow";}
    if (userId === "LOK") {messageDiv.style.color = "orange";}
    if (userId === "JW") {messageDiv.style.color = "lime";}
    if (userId === "CJH") {messageDiv.style.color = "aqua";}
    if (userId === "CED") {messageDiv.style.color = "white";}
    if (userId === "KX") {messageDiv.style.color = "magenta";}
    if (userId === "KN") {messageDiv.style.color = "lightpink";}
    
    chatDiv.append(messageDiv);
    chatDiv.scrollTop = chatDiv.scrollHeight;
}


function createHrLine(rowNum) {
    var divRow = mainDiv.appendChild(document.createElement('div'));
    divRow.className = "row";
    divRow.setAttribute("id", rowNum);

    var createLine = divRow.appendChild(document.createElement('hr'));
    createLine.setAttribute("width", "1300px");
    return mainDiv;
}

function createBotBtn(rowNum) {
    var divRow = mainDiv.appendChild(document.createElement('div'));
    divRow.className = "row";
    divRow.setAttribute("id", rowNum);

    var botBtn = divRow.appendChild(document.createElement('button'));
    botBtn.setAttribute("id", userId + "botbtn");
    botBtn.className = "btn btn-success btn-lg";
    botBtn.innerHTML = "Next Round";
    botBtn.style.visibility = "hidden";
    botBtn.style.height = "50px";
    if (nickname === "TCR") {
        botBtn.style.visibility = "visible";

        botBtn.addEventListener('click', function () {
            roundNum++;
            sock.emit('nextround', roundNum);
            var clearIt = document.getElementById("LOKinput");
            clearIt.value = '';
            clearIt = document.getElementById("CJHinput");
            clearIt.value = '';
            clearIt = document.getElementById("CEDinput");
            clearIt.value = '';
            clearIt = document.getElementById("KXinput");
            clearIt.value = '';
            clearIt = document.getElementById("KNinput");
            clearIt.value = '';
            clearIt = document.getElementById("JWinput");
            clearIt.value = '';

        });
    }

    var resetBtn = divRow.appendChild(document.createElement('button'));
    resetBtn.setAttribute("id", userId + "resetbtn");
    resetBtn.className = "btn btn-secondary btn-lg";
    resetBtn.innerHTML = "Reset Round";
    resetBtn.style.visibility = "hidden";
    resetBtn.style.height = "50px";
    if (nickname === "TCR") {
        resetBtn.style.visibility = "visible";

        resetBtn.addEventListener('click', function () {
            roundNum = 1;
            sock.emit('nextround', roundNum);

        });


    }

    var chatDiv = divRow.appendChild(document.createElement('div'));
    chatDiv.style.width = '420px';
    chatDiv.style.height = '125px'
    chatDiv.style.color = 'black';
    chatDiv.style.background = 'rgba(255, 255, 255, 0.1)';
    //chatDiv.style.background = 'white';
    //chatDiv.style.opacity = '0.3';
    chatDiv.setAttribute("id", "chatdiv");
    chatDiv.style.overflow = "auto";
    chatDiv.style.overflowX = "hidden";

    var chatInput = divRow.appendChild(document.createElement('input'));
    chatInput.className = "form-control";
    chatInput.style.width = "350px";
    chatInput.style.height = "48px";
    chatInput.setAttribute("id", "chatinput");
    chatInput.setAttribute("type", "text");
    //chatInput.style.display = "inline";

    var chatBtn = divRow.appendChild(document.createElement('button'));
    chatBtn.className = "btn btn-secondary";
    chatBtn.setAttribute("id", "chatBtn");
    chatBtn.innerHTML = "Send";
    chatBtn.style.height = "50px";

    chatBtn.addEventListener('click', function () {
        var message = nickname + ': ';
        message += chatInput.value;
        sock.emit('chat-to-server', { message,nickname });
        chatInput.value = '';
    });
    
    chatInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("chatBtn").click();
        }
    
    });

    return mainDiv;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function updateAllWins(userId, winDif) {
    if (userId === "AA") {
        counter = aumWins;
    }
    if (userId === "NN") {
        counter = ninaWins;
    }
    if (userId === "LOK") {
        counter = LOKWins;
    }
    if (userId === "CJH") {
        counter = CJHWins;
    }
    if (userId === "CED") {
        counter = CEDWins;
    }
    if (userId === "KX") {
        counter = KXWins;
    }
    if (userId === "KN") {
        counter = KNWins;
    }
    if (userId === "JW") {
        counter = JWWins;
    }

    for (var i = counter + 1; i < winDif + counter + 1; i++) {
        var displayWin = document.getElementById(userId + "border");
        var img = document.createElement('img');
        img.src = "https://cdn3.iconfinder.com/data/icons/phuzion/PNG/Misc/fav-heart.png"
        //img.src = "https://cdn0.iconfinder.com/data/icons/startup-and-new-business-3/24/trophy-1024.png";
        img.style = "width:35px;height:35px"
        img.style.position = "relative"
        img.style.top = "17px"
        img.style.left = "10px"
        img.setAttribute("id", userId + "win" + i);
        displayWin.appendChild(img);
        //alert(userId + "win" + i)
    };

}

function updateAllChas(userId, chaDif) {
    if (userId === "AA") {
        counter = aumChas;
    }
    if (userId === "NN") {
        counter = ninaChas;
    }
    if (userId === "LOK") {
        counter = LOKChas;
    }
    if (userId === "CJH") {
        counter = CJHChas;
    }
    if (userId === "CED") {
        counter = CEDChas;
    }
    if (userId === "KX") {
        counter = KXChas;
    }
    if (userId === "KN") {
        counter = KNChas;
    }
    if (userId === "JW") {
        counter = JWChas;
    }

    for (var i = counter + 1; i < chaDif + counter + 1; i++) {
        var addCha = document.getElementById(userId + "chadiv");
        var img = document.createElement('img');
        img.src = "https://lh3.googleusercontent.com/xpz43lDxs3mmfni85cCGkIX4GeKMsoC5RHDoLRxOpj28VggUjXnadGBq7Oh_TX4Hp7-cT68YfJhmh_LB-5RooPgxNhFn0NKSM1z6PKVwtLUmACeKct8Uo6N269krf5tg9KMOmf0y=w2400";
        img.style = "width:55px;height:55px";
        img.setAttribute("id", userId + "cha" + i);
        addCha.appendChild(img);
    }

}

function createDropList(userId, elToApply, teamNum) {
    var select = document.createElement("select");
    select.name = teamNum;
    //select.id = teamNum;
    select.setAttribute("id", userId + "droplist");
    select.className = "form-control";
    select.style.width = "80px";

    if (userId != nickname) {
        select.disabled = true;
    }

    teamNum = teamNum.filter(function (passId) {
        return passId !== userId;
    });
    for (const val of teamNum) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    var listLabel = document.createElement("label");
    listLabel.innerHTML = ""
    listLabel.htmlFor = teamNum;

    elToApply.appendChild(listLabel).appendChild(select);
}

function changeBackground(rotation) {
    if (rotation === 2) {
        var url = 'https://cdnb.artstation.com/p/assets/images/images/014/324/815/large/chris-kesler-1.jpg?1543495968';
        document.body.style.backgroundImage = "url(" + url + ")";
        document.body.style.backgroundSize = "1750px";
    }

    if (rotation === 4) {
        url = 'https://www.awn.com/sites/default/files/styles/original/public/image/attached/1046374-anf3740compv0081020cc-lr.jpg?itok=Pf44ptMv';
        document.body.style.backgroundImage = "url(" + url + ")";
        document.body.style.backgroundSize = "1500px";
    }

    if (rotation === 6) {
        url = 'https://www.teahub.io/photos/full/94-945045_marvel-comic-space-backgrounds.jpg';
        document.body.style.backgroundImage = "url(" + url + ")";

    }

    if (rotation === 8) {
        url = 'https://m.media-amazon.com/images/M/MV5BOTg0ODU3ODY2NF5BMl5BanBnXkFtZTgwMTg4MjkzNTM@._V1_.jpg';
        document.body.style.backgroundImage = "url(" + url + ")";
    }

    if (rotation === 10) {
        url = 'https://lumiere-a.akamaihd.net/v1/images/g_avengers_infinitywar_05_54868e20.jpeg?region=0%2C0%2C1200%2C560';
        document.body.style.backgroundImage = "url(" + url + ")";
    }

    if (rotation === 12) {
        url = 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/02/1452510174-movies-thanos-infinity-gauntlet-marvel-cinematic-universe.jpg';
        document.body.style.backgroundImage = "url(" + url + ")";
        document.body.style.backgroundSize = "1700px";
    }






}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
