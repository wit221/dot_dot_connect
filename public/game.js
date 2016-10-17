/*
RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE 
RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE 
RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE 
*/

function range(start, stop, step) {
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0
    }
    step = arguments[2] || 1;
    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step
    }
    return range
}

function _$rapyd$_extends(child, parent) {
    child.prototype = new parent;
    child.prototype.constructor = child
}

function len(obj) {
    if (obj instanceof Array || typeof obj === "string") return obj.length;
    else {
        var count = 0;
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) count++
        }
        return count
    }
}

function _$rapyd$_print() {
    var args, output;
    args = [].slice.call(arguments, 0);
    output = JSON.stringify(args);
    if ("console" in window) console.log(output.substr(1, output.length - 2))
}
var width, height, variables;
var random = function() {
    var _$rapyd$_seed_state, _$rapyd$_get_random_byte;
    _$rapyd$_seed_state = {
        key: [],
        key_i: 0,
        key_j: 0
    };
    _$rapyd$_get_random_byte = function() {
        var _$rapyd$_Unpack;
        _$rapyd$_seed_state.key_i = (_$rapyd$_seed_state.key_i + 1) % 256;
        _$rapyd$_seed_state.key_j = (_$rapyd$_seed_state.key_j + _$rapyd$_seed_state.key[_$rapyd$_seed_state.key_i]) % 256;
        _$rapyd$_Unpack = [_$rapyd$_seed_state.key[_$rapyd$_seed_state.key_j], _$rapyd$_seed_state.key[_$rapyd$_seed_state.key_i]];
        _$rapyd$_seed_state.key[_$rapyd$_seed_state.key_i] = _$rapyd$_Unpack[0];
        _$rapyd$_seed_state.key[_$rapyd$_seed_state.key_j] = _$rapyd$_Unpack[1];
        return _$rapyd$_seed_state.key[(_$rapyd$_seed_state.key[_$rapyd$_seed_state.key_i] + _$rapyd$_seed_state.key[_$rapyd$_seed_state.key_j]) % 256]
    };

    function seed(x) {
        if (typeof x === "undefined") x = (new Date).getTime();
        var i, j, _$rapyd$_Unpack;
        if (typeof x === "number") {
            x = x.toString()
        } else if (typeof x !== "string") {
            throw TypeError("unhashable type: '" + typeof x + "'")
        }
        for (i = 0; i < 256; i++) {
            _$rapyd$_seed_state.key[i] = i
        }
        j = 0;
        for (i = 0; i < 256; i++) {
            j = (j + _$rapyd$_seed_state.key[i] + x.charCodeAt(i % x.length)) % 256;
            _$rapyd$_Unpack = [_$rapyd$_seed_state.key[j], _$rapyd$_seed_state.key[i]];
            _$rapyd$_seed_state.key[i] = _$rapyd$_Unpack[0];
            _$rapyd$_seed_state.key[j] = _$rapyd$_Unpack[1]
        }
    }
    seed();

    function random() {
        var n, m, i;
        n = 0;
        m = 1;
        for (i = 0; i < 8; i++) {
            n += _$rapyd$_get_random_byte() * m;
            m *= 256
        }
        return n / 0x10000000000000000
    }

    function randrange() {
        return choice(range.apply(this, arguments))
    }

    function randint(a, b) {
        return parseInt(random() * (b - a + 1) + a)
    }

    function uniform(a, b) {
        return random() * (b - a) + a
    }

    function choice(seq) {
        if (seq.length > 0) {
            return seq[Math.floor(random() * seq.length)]
        } else {
            throw IndexError()
        }
    }

    function shuffle(x, random_f) {
        if (typeof random_f === "undefined") random_f = random;
        var j, _$rapyd$_Unpack, i;
        for (i = 0; i < x.length; i++) {
            j = Math.floor(random_f() * (i + 1));
            _$rapyd$_Unpack = [x[j], x[i]];
            x[i] = _$rapyd$_Unpack[0];
            x[j] = _$rapyd$_Unpack[1]
        }
        return x
    }

    function sample(population, k) {
        var x, j, _$rapyd$_Unpack, i;
        x = population.slice();
        for (i = population.length - 1; i > population.length - k - 1; i--) {
            j = Math.floor(random() * (i + 1));
            _$rapyd$_Unpack = [x[j], x[i]];
            x[i] = _$rapyd$_Unpack[0];
            x[j] = _$rapyd$_Unpack[1]
        }
        return x.slice(population.length - k)
    }
    return {
        _$rapyd$_seed_state: _$rapyd$_seed_state,
        _$rapyd$_get_random_byte: _$rapyd$_get_random_byte,
        seed: seed,
        random: random,
        randrange: randrange,
        randint: randint,
        uniform: uniform,
        choice: choice,
        shuffle: shuffle,
        sample: sample
    }
}

/*RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE 
RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE 
RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE RAPYDSCRIPT CODE 
*/

/* HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE 
HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE 
HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE 
*/

//returns a random integer between min INCLUSIVE and max INCLUSIVE
function Random(min, max) {
  return Math.floor(Math.random() * (max+1 - min) + min);
}
//get max of an array
function getMaxOfArray(numArray){
    return Math.max.apply(null,numArray);
}
/* HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE 
HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE 
HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE HELPER CODE 
*/

/* DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE 
DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE 
DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE 
*/
var userIsGuest = false;
var hasloggedin = false;
var user_name;
var user_password;
var user_country;
var tempuser;
var temppassword;
var tempcountry;

$( "#playasguest" ).click(function() {
  if (confirm("Are you sure? You will not be able to see leaderboards and post highscores. Click OK if you want to miss the fun part of the game or Cancel and login/register to start the fun!") == true) {
        userIsGuest = true;
        $( "#lobby" ).remove();
        $( "#registermenu" ).remove();
        $( "#dashboard" ).append('Detailed stats available to logged-in users only! Log in now! (Refresh the page)');
        $( "#scores" ).append('Leaderboards available to logged-in users only! Log in now! (Refresh the page)');
    }
});      


$( "#gotoregister" ).click(function() {
    $( "#lobby" ).remove();
});

$( "#register" ).click(function() {
    tempuser = $( '#usernameR' ).val()
    temppassword = $( '#passwordR' ).val()
    passwordconfirm = $( '#passwordRconfirm' ).val()
    tempcountry = $( "#country" ).val()
    $( '#passwordR' ).val('')
    $( '#passwordRconfirm' ).val('')
    $( "#country" ).val('')
    if (temppassword!=passwordconfirm) {
        alert('Passwors do not match. Please try again!')
    } else if(tempuser.length<3 || tempuser.length>12){
        alert('Username has to be between 3 and 12 characters. Please try again!')
    } else if(temppassword.length<5 || temppassword.length>15){
        alert('Password has to be between 5 and 15 characters. Please try again!')
    }else if(tempcountry==''){
        alert('You need to select a country. Please try again!')       
    }else{
        CheckUsers()
    }
});

$('#backR').on('click',function(){
    $('body').append("<div id='lobby'><img src='logo.png'><div id='loginbox'><input id='usernameL' placeholder='Username'type='text'></input><input id='passwordL' placeholder='Password' type='password'>Password</input><button id='login'>Login</button></div><div id='rest'><button id='gotoregister'>Register</button><button id='playasguest'>Play as guest</button></div></div>")

    $("#login").on('click',function(){
        tempuser = $( '#usernameL' ).val()
        temppassword = $( '#passwordL' ).val()
        $( '#passwordL' ).val('');
        if(tempuser.length<3 || tempuser.length>12){
            alert('Username has to be between 3 and 12 characters. Please try again!')
        } else if(temppassword.length<5 || temppassword.length>15){
            alert('Password has to be between 5 and 15 characters. Please try again!')
        }else{
            CheckLoginData()
        }
    });
    $( "#gotoregister" ).click(function() {
        $( "#lobby" ).remove();
    });
    // $( "#playasguest" ).click(function() {
    //   if (confirm("Are you sure? You will not be able to see leaderboards and post highscores. Click OK if you want to miss the fun part of the game or Cancel and login/register to start the fun!") == true) {
    //         userIsGuest = true;
    //         $( "#lobby" ).remove();
    //         $( "#registermenu" ).remove();
    //     }    
    // });

    $( "#playasguest" ).click(function() {
  if (confirm("Are you sure? You will not be able to see leaderboards and post highscores. Click OK if you want to miss the fun part of the game or Cancel and login/register to start the fun!") == true) {
        userIsGuest = true;
        $( "#lobby" ).remove();
        $( "#registermenu" ).remove();
        $("#dashboard").html('');
         $("#scores").html('');
        $("#dashboard").append("Leaderboards available to logged-in users only! Log in now!<button class='log'>Login</button>");
        $("#scores").append("Detailed stats available to logged-in users only! Log in now!<button class='log'>Login</button>");
        $(".log").on('click',function(){
             $('body').append("<div id='lobby'><img src='logo.png'><div id='loginbox'><input id='usernameL' placeholder='Username'type='text'></input><input id='passwordL' placeholder='Password' type='password'>Password</input><button id='login'>Login</button></div><div id='rest'><button id='gotoregister'>Register</button><button id='playasguest'>Play as guest</button></div></div>")
                $("#login").on('click',function(){
        tempuser = $( '#usernameL' ).val()
        temppassword = $( '#passwordL' ).val()
        $( '#passwordL' ).val('');
        if(tempuser.length<3 || tempuser.length>12){
            alert('Username has to be between 3 and 12 characters. Please try again!')
        } else if(temppassword.length<5 || temppassword.length>15){
            alert('Password has to be between 5 and 15 characters. Please try again!')
        }else{
            CheckLoginData()
        }
    });
    $( "#gotoregister" ).click(function() {
        $( "#lobby" ).remove();
    });

    $( "#playasguest" ).click(function() {
  if (confirm("Are you sure? You will not be able to see leaderboards and post highscores. Click OK if you want to miss the fun part of the game or Cancel and login/register to start the fun!") == true) {
        userIsGuest = true;
        $( "#lobby" ).remove();
        $( "#registermenu" ).remove();
        $("#dashboard").append("<button class='log'>Login</button>");
        $("#scores").append("<button class='log'>Login</button>");
        $(".log").on('click',function(){
             $('body').append("<div id='lobby'><img src='logo.png'><div id='loginbox'><input id='usernameL' placeholder='Username'type='text'></input><input id='passwordL' placeholder='Password' type='password'>Password</input><button id='login'>Login</button></div><div id='rest'><button id='gotoregister'>Register</button><button id='playasguest'>Play as guest</button></div></div>")
        });

    }    
});
        });

    }    
});

})



function Login(){
    tempuser = document.getElementById('usernameL2').value;
    temppassword = document.getElementById('passwordL2').value;
    // document.getElementById('textbox_id').value='';
    if(tempuser.length<3 || tempuser.length>12){
        alert('Username has to be between 3 and 12 characters. Please try again!')
    } else if(temppassword.length<5 || temppassword.length>15){
        alert('Password has to be between 5 and 15 characters. Please try again!')
    }else{
        CheckLoginData()
    }
}
$("#login").on('click',function(){
    tempuser = $( '#usernameL' ).val()
    temppassword = $( '#passwordL' ).val()
    $( '#passwordL' ).val('');
    if(tempuser.length<3 || tempuser.length>12){
        alert('Username has to be between 3 and 12 characters. Please try again!')
    } else if(temppassword.length<5 || temppassword.length>15){
        alert('Password has to be between 5 and 15 characters. Please try again!')
    }else{
        CheckLoginData()
    }
});
$("#login2").on('click',function(){
    tempuser = $( '#usernameL' ).val()
    temppassword = $( '#passwordL' ).val()
    $( '#passwordL' ).val('');
    if(tempuser.length<3 || tempuser.length>12){
        alert('Username has to be between 3 and 12 characters. Please try again!')
    } else if(temppassword.length<5 || temppassword.length>15){
        alert('Password has to be between 5 and 15 characters. Please try again!')
    }else{
        CheckLoginData()
    }
});
function CheckLoginData2(){
    var obj={
        user_name: tempuser,
        user_password: temppassword,
        user_country: tempcountry,
        type: 'login'
    }

    $.ajax({
        url: '/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        error: function(resp){
            console.log("Oh no...");
            // console.log(resp);
            $('#registermenu').append('There was an error from the server. PLease try again later or play as a guest!')
            $('#registermenu').append("<button id='playasguest'>Play as guest</button>")
        },
        success: function(resp){

            console.log('WooHoo!');
            // console.log(resp);
            // $('body').append("<div id='lobby2'></div>")
            // $('#lobby2').append("You successfully registered! Go ahead and login: ")
            // $('#lobby2').append("<input id='usernameL2' type='text'>")
            // $('#lobby2').append("<input id='passwordL2' type='password'>")
            // $('#lobby2').append("<button id='login2'onclick='Login()'>Login</button>")
            // $('#lobby2').append("<button id='playasguest'>Play as guest</button>")
            // $('#lobby2').append("</div>")
        }
    });




}

function CheckLoginData(){
    $.ajax({
        url: '/api/allusers',
        type: 'GET',
        dataType: 'json',
        error: function(data){
            // console.log(data);
            alert("Oh No! Try a refreshh?");
        },
        success: function(data){
            console.log("We have dataa");
            // console.log(data);
            //Clean up the data on the client
            //You could do this on the server
            var theData = data.map(function(d){
                return d.doc;
            });
            // console.log(theData)
            CheckLoginInfo(theData)
            // var htmlString = makeHTML(theData);
            // $( "#scores" ).empty();
            // $('#scores').append(htmlString);
        }
    });
};

function CheckLoginInfo(data){
    var isin=false;
    var passwordmatch=false;
    for (var i=0;i<data.length;i++){
        if (data[i].user_name==tempuser){
            isin=true
            if (data[i].user_password==temppassword){
                passwordmatch=true
                user_name = data[i].user_name;
                user_password = data[i].user_password;
                user_country = data[i].user_country;
            }
            break;
        }
    }
    if (isin && passwordmatch){
        CreateLeaderboard()
        CreateDashboard()
        $('#lobby').remove();
        $('#lobby2').remove();
        $('#registermenu').remove();
        hasloggedin=true;
        //get score data
        //get users data
    }else if(isin && passwordmatch==false){
        alert('Wrong password for ' + tempuser + '. Please type the correct password.');
    }else{
        alert(tempuser + ' not registered! Please register!');
    }
}

function Register(){
    var obj={
        user_name: tempuser,
        user_password: temppassword,
        user_country: tempcountry,
        type: 'registration'
    }

    $.ajax({
        url: '/registeruser',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        error: function(resp){
            console.log("Oh no...");
            // console.log(resp);
            $('#registermenu').append('There was an error from the server. PLease try again later or play as a guest!')
            $('#registermenu').append("<button id='playasguest'>Play as guest</button>")
        },
        success: function(resp){
            console.log('WooHoo!');
            // console.log(resp);
            $('body').append("<div id='lobby2'></div>")
            $('#lobby2').append("You successfully registered! Go ahead and loginn: ")
            $('#lobby2').append("<input id='usernameL2' type='text'>")
            $('#lobby2').append("<input id='passwordL2' type='password'>")
            $('#lobby2').append("<button id='login2'onclick='Login()'>Login</button>")
            $('#lobby2').append("<button id='playasguest'>Play as guest</button>")
            // $('#lobby2').append("</div>")
        }
    });
};

function SendScore(){
    // console.log(user_name,user_country,variables.totalscore,variables.secondsplayed/30);
    var obj={
        user_name: user_name,
        user_country: user_country, 
        score: variables.totalscore,
        time: variables.secondsplayed/30
    }
    // console.log(obj)
    $.ajax({
        url: '/savetoscores',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        error: function(resp){
            console.log("Oh no...");
            // console.log(resp);
        },
        success: function(resp){
            CreateLeaderboard()
            CreateDashboard()
            console.log('WooHoo!');
            // console.log(resp);
        }
    });
};


function getScoresData(){
    $.ajax({
        url: '/api/allscores',
        type: 'GET',
        dataType: 'json',
        error: function(data){
            // console.log(data);
            alert("Oh No! Try a refresh?");
        },
        success: function(data){
            // console.log("We have data");
            // console.log(data);
            //Clean up the data on the client
            //You could do this on the server
            var theData = data.map(function(d){
                return d.doc;
            });
            // console.log(theData)
        }
    });
};

function CheckUsers(){
    $.ajax({
        url: '/api/allusers',
        type: 'GET',
        dataType: 'json',
        error: function(data){
            console.log(data);
            alert("Oh No! Try a refresh?");
        },
        success: function(data){
            console.log("We have dataa");
            // console.log(data);
            //Clean up the data on the client
            //You could do this on the server
            var theData = data.map(function(d){
                return d.doc;
            });
            // console.log(theData)
            CheckIfUsersIn(theData)
        }
    });
};

function CheckIfUsersIn(theData){
    var isin = false
    // console.log(theData)
    for (var i=0;i<theData.length;i++){
        if (theData[i].user_name==tempuser){
            isin=true
            break;
        }
    }
    if (isin){
        alert('Username already used. Please try again!')
    }else{
        Register()
    }
}



function getUsersData(){
    $.ajax({
        url: '/api/allusers',
        type: 'GET',
        dataType: 'json',
        error: function(data){
            // console.log(data);
            alert("Oh No! Try a refresh?");
        },
        success: function(data){
            console.log("We have data");
            // console.log(data);
            //Clean up the data on the client
            //You could do this on the server
            var theData = data.map(function(d){
                return d.doc;
            });
            // console.log(theData)

            // var htmlString = makeHTML(theData);
            // $( "#scores" ).empty();
            // $('#scores').append(htmlString);
        }
    });
};

function GetFlagIcon(country){
    var imgsource='/48/'+country+'.png'
    var url="<img class='img' src='"+imgsource+"'>"
    return url;
}



function GetFlagIconScore(country){
    var imgsource='/48/'+country+'.png'
    var url="<img class='imgscore' src='"+imgsource+"'>"
    return url;
}

function GetFlagIconScore2(country){
    var imgsource='/48/'+country+'.png'
    var url="<img class='imgscore2' src='"+imgsource+"'>"
    return url;
}
function CreateLeaderboard(){
    $.ajax({
        url: '/api/allscores',
        type: 'GET',
        dataType: 'json',
        error: function(data){
            // console.log(data);
            alert("Oh No! Try a refresh?");
        },
        success: function(data){
            var scorelist=[]
            var playersin=[]
            console.log("We have data");
            // console.log(data);
            function compare(a,b) {
              if (a.score > b.score)
                 return -1;
              if (a.score < b.score)
                return 1;
              return 0;
            }
            data.sort(compare);
            // console.log(data);
            scorelist.push(data[0]);
            playersin.push(data[0].user_name);
            for (i=0;i<data.length;i++){
                if (i==50){
                    break;
                }
                if (playersin.indexOf(data[i].user_name)==-1){
                    scorelist.push(data[i])
                    playersin.push(data[i].user_name);
                }
            }
            // console.log(scorelist)
            $("#scores").html('');
            $('#scores').append("<div id='halloffame'><div class='trophy'><img src='/medals/trophy.png'></div>Hall Of Fame</div>")
            for(var i =0; i<scorelist.length;i++){
                if (i==32){
                    break;
                }else{
                CreateScoreDiv(scorelist[i],i);
                }
            }
        }   
    });
};

function CreateScoreDiv(data,i){
    var name = data.user_name;
    var score = Math.round(data.score*100)/100;
    var country = data.user_country
    var time = data.time;
    
    
    if (i==0){
        $("#scores").append("<div class='scorebit'>"+"<div class = 'medal'><img src='/medals/gold.gif'>"+"</div>"+"<div class='imagediv'>" +  GetFlagIconScore(country)+ "</div>" +" <div class='scorescore'>"+Math.round(score) + "</div>"+"<div class='name'>" + name + "</div></div>")
    }else if(i==1){
        $("#scores").append("<div class='scorebit'>"+"<div class = 'medal'><img src='/medals/silver.gif'>"+"</div>"+"<div class='imagediv'>" +  GetFlagIconScore(country)+ "</div>" +" <div class='scorescore'>"+Math.round(score) + "</div>"+"<div class='name'>" + name + "</div></div>")
    }else if(i==2){
        $("#scores").append("<div class='scorebit'>"+"<div class = 'medal'><img src='/medals/bronze.gif'>"+"</div>"+"<div class='imagediv'>" +  GetFlagIconScore(country)+ "</div>" +" <div class='scorescore'>"+Math.round(score) + "</div>"+"<div class='name'>" + name + "</div></div>")
    }else{
    $("#scores").append("<div class='scorebit2'><div class='rank2'>"+(i+1).toString()+'.'+"</div>"+ "<div class='imagediv2'>" +GetFlagIconScore2(country)+ "</div>" +"<div class='scorescore2'>"+Math.round(score) + "</div>"+"<div class='name2'>"+ name + "</div></div>")
    }
    // $("#scores").append(GetFlagIconScore(country) + score + name + "</div>")
    // $("#dashboard").append("<div id='playerstats'></div>")
    // $("#dashboard").append("<div id='dashboardtitle'>Dashboard</div>");
    // $("#dashboard").append("<div class='statstitle'>"+user_name+"</div>");
    // if (status=='empty'){
    //     $("#dashboard").append("No data available for that section yet. Play to change that!")
    // }else{
    //     $("#dashboard").append("<div class='statsbit'>Highscore: "+(Math.round(highscore*100)/100).toString()+"</div>");
    //     $("#dashboard").append("<div class='statsbit'>Max time alive: "+(Math.round(maxtime*100)/100).toString()+"</div>");
    //     $("#dashboard").append("<div class='statsbit'>Average score per second: "+(Math.round(scorepertime*100)/100).toString()+"</div>");
    //     $("#dashboard").append("<div class='statsbit'>Global rank: "+rank+"</div>");
    //     $("#dashboard").append("<div class='statsbit'>Country rank: "+countryrank+"</div>");
    //     $("#dashboard").append("<div class='statsbit'>Times played: "+timesplayed+"</div>");
    //     $("#dashboard").append("<div class='statsbit'>Total score accumulated: "+(Math.round(totalscore*100)/100).toString()+"</div>");
    //     $("#dashboard").append("<div class='statsbit'>Total time alive: "+(Math.round(totaltime*100)/100).toString()+"</div>");
    //     $("#dashboard").append("<div class='statsbit'>Average score: "+(Math.round(meanscore*100)/100).toString()+"</div>");
    //     $("#dashboard").append("<div class='statsbit'>Average time alive: "+(Math.round(meantime*100)/100).toString()+"</div>");
    // }
    
};



function CreateDashboard(){
    $.ajax({
        url: '/api/allscores',
        type: 'GET',
        dataType: 'json',
        error: function(data){
            // console.log(data);
            alert("Oh No! Try a refresh?");
        },
        success: function(data){

            console.log("We have data");
            // console.log(data);
            var highscore;
            var maxtime;

            var countryhighscore;
            var countrymaxtime;

            var globalhighscore;
            var globalmaxtime;

            var scores = []           //good
            var times = []           //good

            var countryscores=[]
            var countrytimes=[]

            var globalscores=[]
            var globaltimes=[]

            var timesplayed=0;       //good
            var totaltime=0;         //good
            var totalscore=0;

            var timescountryplayed=0;       //good
            var totalcountrytime=0;         //good
            var totalcountryscore=0;

            var timesglobalplayed=0;       //good
            var totalglobaltime=0;         //good
            var totalglobalscore=0;  
                    //good
                   //good
            var scorepertime;      //good
            var meanscore;        //good
            var meantime;

            var countryscorepertime;      //good
            var countrymeanscore;        //good
            var countrymeantime;

            var globalscorepertime;      //good
            var globalmeanscore;        //good
            var globalmeantime;  

            var rank; //good
            var countryrank; //good

            var betterpeople = [];
            var bettercountrypeople=[];

            for (var i=0;i<data.length;i++){

                timesglobalplayed+=1;
                globaltimes.push(data[i].time);
                globalscores.push(data[i].score);

                if (data[i].user_name == user_name){
                    timesplayed+=1;
                    times.push(data[i].time)
                    scores.push(data[i].score)
                }
                // console.log(data[i].user_country,user_country)
                if(data[i].user_country == user_country){
                    timescountryplayed+=1;
                    countrytimes.push(data[i].time)
                    countryscores.push(data[i].score)
                }     
            }

            for  (var i=0;i<scores.length;i++){
                totalscore+=scores[i];
            }
            meanscore=totalscore/timesplayed;
            for  (var i=0;i<times.length;i++){
                totaltime+=times[i];
            }
            meantime=totaltime/timesplayed;

            for  (var i=0;i<countryscores.length;i++){
                totalcountryscore+=countryscores[i];
            }
            meancountryscore=totalcountryscore/timescountryplayed;
            for  (var i=0;i<countrytimes.length;i++){
                totalcountrytime+=countrytimes[i];
            }
            meancountrytime=totalcountrytime/timescountryplayed;
            

            for  (var i=0;i<globalscores.length;i++){
                totalglobalscore+=globalscores[i];
            }
            meanglobalscore=totalglobalscore/timesglobalplayed;
            for  (var i=0;i<globaltimes.length;i++){
                totalglobaltime+=globaltimes[i];
            }
            meanglobaltime=totalglobaltime/timesglobalplayed;


            globalscorepertime = totalglobalscore/totalglobaltime;
            globalhighscore = getMaxOfArray(globalscores);
            globalmaxtime = getMaxOfArray(globaltimes);

            countryscorepertime = totalcountryscore/totalcountrytime;
            countryhighscore = getMaxOfArray(countryscores);
            countrymaxtime = getMaxOfArray(countrytimes);

            scorepertime = totalscore/totaltime;
            highscore = getMaxOfArray(scores);
            maxtime = getMaxOfArray(times);

            for (var i=0;i<data.length;i++){
                if (data[i].score > highscore){
                    if (betterpeople.indexOf(data[i].user_name)==-1){
                        betterpeople.push(data[i].user_name)
                    }
                }
                if (data[i].score > highscore && data[i].country == user_country){
                    if (bettercountrypeople.indexOf(data[i].user_name)==-1){
                        bettercountrypeople.push(data[i].user_name)
                    }
                }
            }
            rank = betterpeople.length+1;
            countryrank = bettercountrypeople.length+1;
            // console.log(countryscores,countryhighscore)
            $("#dashboard").html('');
            if (scores.length == 0){
                CreateUserStatsDiv('empty',highscore,maxtime,timesplayed,totaltime,totalscore,scorepertime,meanscore,meantime,rank,countryrank)
            }else{
                CreateUserStatsDiv('datain',highscore,maxtime,timesplayed,totaltime,totalscore,scorepertime,meanscore,meantime,rank,countryrank)
            }
            if (countryscores.length == 0){
                CreateCountryStatsDiv('empty',countryhighscore,countrymaxtime,timescountryplayed,totalcountrytime,totalcountryscore,countryscorepertime,meancountryscore,meancountrytime)
            }else{
                CreateCountryStatsDiv('datain',countryhighscore,countrymaxtime,timescountryplayed,totalcountrytime,totalcountryscore,countryscorepertime,meancountryscore,meancountrytime)
            }
            if (globalscores.length == 0){
                CreateGlobalStatsDiv('empty',globalhighscore,globalmaxtime,timesglobalplayed,totalglobaltime,totalglobalscore,globalscorepertime,meanglobalscore,meanglobaltime)
            }else{
                CreateGlobalStatsDiv('datain',globalhighscore,globalmaxtime,timesglobalplayed,totalglobaltime,totalglobalscore,globalscorepertime,meanglobalscore,meanglobaltime)
            }


        }   
    });

};


function CreateUserStatsDiv(status,highscore,maxtime,timesplayed,totaltime,totalscore,scorepertime,meanscore,meantime,rank,countryrank){
    // $("#dashboard").append("<div id='playerstats'></div>")
    // $("#dashboard").append("<div id='dashboardtitle'>Dashboard</div>");
    // $("#dashboard").append("<div id='dashboardtitle'>Dashboard</div>");
    $("#dashboard").append("<div class='statstitle'>"+"<div class='person'><img src='/medals/person.png'></div>"+"<div>"+user_name+"</div></div>");
    if (status=='empty'){
        $("#dashboard").append("No data available for that section yet. Play to change that!")
    }else{
        $("#dashboard").append("<div class='statsbit'>Highscore: "+(Math.round(highscore*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Max time alive: "+(Math.round(maxtime*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Score per second: "+(Math.round(scorepertime*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Global rank: "+rank+"</div>");
        $("#dashboard").append("<div class='statsbit'>Country rank: "+countryrank+"</div>");
        $("#dashboard").append("<div class='statsbit'>Times played: "+timesplayed+"</div>");
        // $("#dashboard").append("<div class='statsbit'>Total score accumulated: "+(Math.round(totalscore*100)/100).toString()+"</div>");
        // $("#dashboard").append("<div class='statsbit'>Total time alive: "+(Math.round(totaltime*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Average score: "+(Math.round(meanscore*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Average time alive: "+(Math.round(meantime*100)/100).toString()+"</div>");
    }
    
}

function CreateCountryStatsDiv(status,highscore,maxtime,timesplayed,totaltime,totalscore,scorepertime,meanscore,meantime){
    // $("#dashboard").append("<div id='countrystats'></div>")
    $("#dashboard").append("<div class='statstitle'>"+GetFlagIcon(user_country)+user_country+"</div>");//GetFlagIcon(user_country)+
    // $('.')
    if (status=='empty'){
        $("#countrystats").append("No data available for that section yet. Play to change that!")
    }else{
        $("#dashboard").append("<div class='statsbit'>Highscore: "+(Math.round(highscore*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Max time alive: "+(Math.round(maxtime*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Score per second: "+(Math.round(scorepertime*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Times played: "+timesplayed+"</div>");
        // $("#dashboard").append("<div class='statsbit'>Total score accumulated: "+(Math.round(totalscore*100)/100).toString()+"</div>");
        // $("#dashboard").append("<div class='statsbit'>Total time alive: "+(Math.round(totaltime*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Average score: "+(Math.round(meanscore*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Average time alive: "+(Math.round(meantime*100)/100).toString()+"</div>");
    }
}
function CreateGlobalStatsDiv(status,highscore,maxtime,timesplayed,totaltime,totalscore,scorepertime,meanscore,meantime){
    // $("#dashboard").append("<div id='globalstats'></div>")
    $("#dashboard").append("<div class='statstitle'>"+"<div class='world'><img src='/medals/world.png'></div>"+'GLOBAL'+"</div>");
    if (status=='empty'){
        $("#dashboard").append("No data available for that section yet. Play to change that!")
    }else{
        $("#dashboard").append("<div class='statsbit'>Highscore: "+(Math.round(highscore*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Max time alive: "+(Math.round(maxtime*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Score per second: "+(Math.round(scorepertime*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Times played: "+timesplayed+"</div>");
        // $("#dashboard").append("<div class='statsbit'>Total score accumulated: "+(Math.round(totalscore*100)/100).toString()+"</div>");
        // $("#dashboard").append("<div class='statsbit'>Total time alive: "+(Math.round(totaltime*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Average score: "+(Math.round(meanscore*100)/100).toString()+"</div>");
        $("#dashboard").append("<div class='statsbit'>Average time alive: "+(Math.round(meantime*100)/100).toString()+"</div>");
    }
}
/* DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE 
DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE 
DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE DATABASE HANDLING CODE 
*/

/* P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE
P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE
P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE
*/

var width = 800;
var height = 600;

function Countdown() {
    var self = this;
    self.secondsleft = 30 * 3 + 29;
    self.dim = 100;
    self.initialdim = self.dim;
    self.animationstate = "increasing";
    self.x = width / 2 - 30;
    self.y = height / 2 + 30;
    fill(Random(0, 255), Random(0, 255), Random(0, 255))
};
Countdown.prototype.display = function display() {
    var self = this;
    self.animate();
    textSize(self.dim);
    if (self.secondsleft > 30) {
        text((Math.floor(self.secondsleft / 30)).toString(), self.x, self.y)
    } else {
        text("GO!", self.x - 40, self.y)
    }
};
Countdown.prototype.action = function action() {
    var self = this;
    variables.menuitems = [];
    variables.reinitialize();
    generateDots();
    variables.scoreview = new ScoreView();
    variables.timeview = new TimeView();
    variables.coinview = new CoinView();
    variables.mode = "gameplay"
};
Countdown.prototype.animate = function animate() {
    var self = this;
    if (self.secondsleft % 30 == 0 || self.secondsleft == 30 * 3 + 59) {
        fill(Random(0, 255), Random(0, 255), Random(0, 255))
    }
    if (self.dim == self.initialdim && self.secondsleft % 30 != 0) {
        self.dim = self.initialdim;
        self.animationstate = "increasing"
    } else {
        if (self.dim >= 1.1 * self.initialdim) {
            self.animationstate = "decreasing"
        } else if (self.dim <= .9 * self.initialdim) {
            self.animationstate = "increasing"
        }
        if (self.animationstate == "decreasing") {
            self.dim -= .009 * self.initialdim
        } else if (self.animationstate == "increasing") {
            self.dim += .009 * self.initialdim
        }
    }
    if (self.secondsleft > 0) {
        self.secondsleft -= 1
    } else {
        self.action()
    }
};

function Tip(type) {
    var self = this;
    self.x = 20;
    self.y = height - 50;
    self.type = type;
    if (self.type == 1) {
        self.text = "Pro tip: A bonus is activated only if you passed through it AND successfully connected two dots BUT the order doesn't matter. Use that to your advantage!"
    } else if (self.type == 2) {
        self.text = "Pro tip: Collect as many coins as you can to unlock new cool bonuses in the shop!"
    } else if (self.type == 3) {
        self.text = "Pro tip: Draw your lines so that you leave space for future lines!"
    } else if (self.type == 4) {
        self.text = "Pro tip: Research has shown that players who use a mouse instead of a touchpad score 73% higher in Dot.Connect!"
    } else if (self.type == 5) {
        self.text = "Pro tip: You are allowed to go over a line's very tip, so if you have to, go for it!"
    } else if (self.type == 6) {
        self.text = "Pro tip: Look at the legend for bonuses' explanations. Some are worth the detour but some might not!"
    } else if (self.type == 7) {
        self.text = "Pro tip: Experiencing lags? Get a new computer is the answer!"
    } else if (self.type == 8) {
        self.text = "Pro tip: Can't see the dots? Open your eyes!"
    } else if (self.type == 9) {
        self.text = "Pro tip: Score multipliers are cumulative. Gather a few and your score will skyrocket!"
    } else if (self.type == 10) {
        self.text = "Pro tip: If a dot hasn't changed size that means you haven't connected it!"
    } else if (self.type == 11) {
        self.text = "Pro tip: You don't need to start and end your line at the dots, just make sure you pass through them!"
    }else if (self.type == 12) {
        self.text = "Pro tip: You will never touch a line while on a dot. Use that to your advantage!"
    }
};
Tip.prototype.display = function display() {
    var self = this;
    fill(255, 255, 255);
    textLeading(20)
    textSize(20);
    text(self.text, self.x, self.y, width - 20, 150)
};

function Explosion(x, y, radius) {
    var self = this;
    self.x = x;
    self.y = y;
    self.secondsleft = 100;
    self.radius = radius;
    self.finished = false
};
Explosion.prototype.display = function display() {
    var self = this;
    fill(Random(100, 255), Random(0, 150), 0);
    self.drawradius = 2 * Random(parseInt(.75 * self.radius), self.radius);
    ellipse(self.x, self.y, self.drawradius, self.drawradius);
    self.secondsleft -= 1;
    if (self.secondsleft == 0) {
        self.finished = true
    }
};

function displayExplosions() {
    var i;
    var _$rapyd$_Iter0 = variables.explosions;
    for (var _$rapyd$_Index0 = 0; _$rapyd$_Index0 < _$rapyd$_Iter0.length; _$rapyd$_Index0++) {
        i = _$rapyd$_Iter0[_$rapyd$_Index0];
        i.display()
    }
}

function MenuItem(type) {
    var self = this;
    self.seconds = 20;
    self.type = type;
    self.clicked = false;
    self.animationstate = "increasing";
    if (self.type == "logo") {
        self.x = width / 2;
        self.y = 70;
        self.img = loadImage("logo.png")
    } else if (self.type == "playicon") {
        self.x = width / 2;
        self.y = height / 2;
        self.img = loadImage("playicon.gif");
        self.dim = 100;
        self.initialdim = self.dim
    } else if (self.type == "replayicon") {
        self.x = width / 2;
        self.y = height / 2;
        self.img = loadImage("replayicon.gif");
        self.dim = 100;
        self.initialdim = self.dim
    } else if (self.type == "coin") {
        self.x = width / 2 + 30;
        self.y = .8 * height;
        self.img = loadImage("cointotal.gif");
        self.dim = 50;
        self.initialdim = self.dim
    } else if (self.type == "info") {
        self.x = width - 20;
        self.y = height - 20;
        self.img = loadImage("info.gif");
        self.dim = 30;
        self.initialdim = self.dim
    }
};
MenuItem.prototype.animate = function animate() {
    var self = this;
    if (self.dim >= 1.1 * self.initialdim) {
        self.animationstate = "decreasing"
    } else if (self.dim <= .9 * self.initialdim) {
        self.animationstate = "increasing"
    }
    if (self.animationstate == "decreasing") {
        self.dim -= .02 * self.initialdim
    } else if (self.animationstate == "increasing") {
        self.dim += .02 * self.initialdim
    }
    if (self.seconds > 0) {
        self.seconds -= 1
    }
};
MenuItem.prototype.display = function display() {
    var self = this;
    if (self.clicked) {
        self.animate()
    }
    if (self.type == "logo") {
        image(self.img, self.x, self.y)
    } else if (self.type == "playicon") {
        image(self.img, self.x, self.y, self.dim, self.dim)
    } else if (self.type == "replayicon") {
        image(self.img, self.x, self.y, self.dim, self.dim)
    } else if (self.type == "coin") {
        fill(255,255,0)
        image(self.img, self.x, self.y, self.dim, self.dim)
    } else if (self.type == "info") {
        image(self.img, self.x, self.y, self.dim, self.dim)
    }
    self.action()
};
MenuItem.prototype.action = function action() {
    var self = this;
    if (self.seconds <= 0) {
        if (self.type == "playicon") {
            if (hasloggedin || userIsGuest){
                variables.menuitems = [];
                variables.menuitems.push(new Countdown);
                variables.mode = "countdown"
            }
        } else if (self.type == "replayicon") {
            variables.menuitems = [];
            variables.menuitems.push(new Countdown);
            variables.mode = "countdown"
        } else if (self.type == "info") {
            variables.menuitems = [];
            if (variables.mode == "main_menu" || variables.mode == "lost_menu") {
                generateInfoMenu();
                variables.mode = "info"
            } else if (variables.mode == "info") {
                generateMainMenu();
                variables.mode = "main_menu"
            }
        }
    }
};

function AnimateEllipse(xpos, ypos) {
    var self = this;
    self.xpos = xpos;
    self.ypos = ypos;
    self.radius = 0;
    self.targetmax = 50
};
AnimateEllipse.prototype.display = function display() {
    var self = this;
    fill(0, 0, 0, 0);
    stroke(255, 0, 0);
    ellipse(self.xpos, self.ypos, self.radius, self.radius);
    if (self.radius < self.targetmax) {
        self.radius += 2
    } else if (self.radius == self.targetmax) {
        self.radius = 0
    }
};

function Bonus(xpos, ypos, type) {
    var self = this;
    self.x = xpos;
    self.y = ypos;
    self.initialy = self.y;
    self.type = type;
    self.willactivate = false;
    self.dim = 50;
    self.animationstate = "increasing";
    self.initialtime = Random(10 * 30, 20 * 30);
    self.secondsleft = self.initialtime;
    self.opacity = 255;
    self.activated = false;
    self.setactivation = false;
    if (self.type == "line_delete1") {
        self.img = loadImage("line_delete1.gif")
    } else if (self.type == "line_delete2") {
        self.img = loadImage("line_delete2.gif")
    } else if (self.type == "line_delete3") {
        self.img = loadImage("line_delete3.gif")
    } else if (self.type == "coin") {
        self.img = loadImage("coin.gif")
    } else if (self.type == "nuke") {
        self.img = loadImage("nuke.gif");
        self.radius = Random(300, 500)
    } else if (self.type == "area_delete") {
        self.radius = Random(50, 200);
        self.img = loadImage("tnt.gif")
    } else if (self.type == "coinpile") {
        self.img = loadImage("coinpile.gif")
    } else if (self.type == "coinstack") {
        self.img = loadImage("coinstack.gif")
    } else if (self.type == "time5") {
        self.img = loadImage("time5.gif")
    } else if (self.type == "time10") {
        self.img = loadImage("time10.gif")
    } else if (self.type == "time15") {
        self.img = loadImage("time15.gif")
    } else if (self.type == "multiplier1") {
        self.img = loadImage("1.1.gif")
    } else if (self.type == "multiplier2") {
        self.img = loadImage("1.2.gif")
    } else if (self.type == "multiplier3") {
        self.img = loadImage("1.3.gif")
    }
};
Bonus.prototype.display = function display() {
    var self = this;
    if (self.secondsleft > 1) {
        self.secondsleft -= 1
    }
    if (self.opacity > 10) {
        self.opacity = parseFloat(self.secondsleft) / parseFloat(self.initialtime) * 255
    }
    if ((self.type == "area_delete" || self.type == "nuke") && self.activated == false && variables.mode == "gameplay") {
        fill(0, 255, 0, 15 * (parseFloat(self.secondsleft) / parseFloat(self.initialtime)));
        noStroke()
        ellipse(self.x, self.y, self.radius * 2, self.radius * 2)
    }
    tint(255, self.opacity);
    if (self.willactivate) {
        self.animate();
        image(self.img, self.x, self.y, self.dim, self.dim)
    } else {
        image(self.img, self.x, self.y, 50, 50)
    }
    tint(255, 255)
};
Bonus.prototype.animate = function animate() {
    var self = this;
    if (self.dim >= 60) {
        self.animationstate = "decreasing"
    } else if (self.dim <= 40) {
        self.animationstate = "increasing"
    }
    if (self.animationstate == "decreasing") {
        self.dim -= 1
    } else if (self.animationstate == "increasing") {
        self.dim += 1
    }
};
Bonus.prototype.fly = function fly() {
    var self = this;
    if (self.activated) {
        self.y -= 10
    }
};
Bonus.prototype.action = function action() {
    var self = this;
    var newlist, i;
    if (self.type == "line_delete1" || self.type == "line_delete2" || self.type == "line_delete3") {
        newlist = [];
        var _$rapyd$_Iter1 = variables.lines;
        for (var _$rapyd$_Index1 = 0; _$rapyd$_Index1 < _$rapyd$_Iter1.length; _$rapyd$_Index1++) {
            i = _$rapyd$_Iter1[_$rapyd$_Index1];
            if (i.willpop == false) {
                newlist.push(i)
            }
        }
        variables.lines = newlist
    } else if (self.type == "coin") {
        variables.coins += 1;
        variables.coinview.startanimation()
    } else if (self.type == "coinstack") {
        variables.coins += 3;
        variables.coinview.startanimation()
    } else if (self.type == "coinpile") {
        variables.coins += 5;
        variables.coinview.startanimation()
    } else if (self.type == "time5") {
        variables.seconds += 5 * 30;
        variables.timeview.startanimation()
    } else if (self.type == "time10") {
        variables.seconds += 10 * 30;
        variables.timeview.startanimation()
    } else if (self.type == "time15") {
        variables.seconds += 15 * 30;
        variables.timeview.startanimation()
    } else if (self.type == "multiplier1") {
        variables.scoremultiplier = variables.scoremultiplier * 1.1
    } else if (self.type == "multiplier2") {
        variables.scoremultiplier = variables.scoremultiplier * 1.2
    } else if (self.type == "multiplier3") {
        variables.scoremultiplier = variables.scoremultiplier * 1.3
    } else if (self.type == "area_delete" || self.type == "nuke") {
        variables.explosions.push(new Explosion(self.x, self.y, self.radius));
        variables.explosionx = self.x;
        variables.explosiony = self.y;
        deleteBonusAction([self.x, self.y], self.radius)
    }
    self.activated = true
};

function Dot(xpos, ypos, redd, greenn, bluee) {
    var self = this;
    self.x = xpos;
    self.y = ypos;
    self.redd = redd;
    self.greenn = greenn;
    self.bluee = bluee;
    self.through = false
};
Dot.prototype.display = function display() {
    var self = this;
    noStroke();
    fill(self.redd, self.greenn, self.bluee);
    if (self.through) {
        ellipse(self.x, self.y, 40, 40)
    } else {
        ellipse(self.x, self.y, 30, 30)
    }
};

function Line(redd, greenn, bluee, type) {
    var self = this;
    self.redd = redd;
    self.greenn = greenn;
    self.bluee = bluee;
    self.opacity = 255;
    self.type = type;
    self.linelists = [];
    self.dim = 5;
    self.animationstate = "increasing";
    self.willpop = false
};
Line.prototype.display = function display() {
    var self = this;
    var i;
    if (self.type == "fixed") {
        self.opacity = 255
    } else if (self.type == "beingdrawn") {
        if (variables.dots[0].through == false && variables.dots[1].through == false) {
            self.opacity = 20
        } else if (variables.dots[0].through == false && variables.dots[1].through || variables.dots[0].through && variables.dots[1].through == false) {
            self.opacity = 50
        } else if (variables.dots[0].through && variables.dots[1].through) {
            self.opacity = 100
        }
    }
    strokeWeight(self.dim);
    stroke(self.redd, self.greenn, self.bluee, self.opacity);
    for (i = 0; i < len(self.linelists); i++) {
        line(self.linelists[i][2], self.linelists[i][4], self.linelists[i][3], self.linelists[i][5])
    }
};
Line.prototype.addLineLists = function addLineLists(linelist) {
    var self = this;
    self.linelists.push(linelist)
};
Line.prototype.animate = function animate() {
    var self = this;
    if (self.dim >= 10) {
        self.animationstate = "decreasing"
    } else if (self.dim <= 1) {
        self.animationstate = "increasing"
    }
    if (self.animationstate == "decreasing") {
        self.dim -= 1
    } else if (self.animationstate == "increasing") {
        self.dim += 1
    }
};

function ScoreView() {
    var self = this;
    self.x = width / 2 - 30;
    self.y = -5;
    self.textsize = 100;
    self.animationstate = "increasing";
    self.img = loadImage("scoretotal.gif");
    self.secondsleft = 0
};
ScoreView.prototype.display = function display() {
    var self = this;
    image(self.img, self.x - 30, self.y + 55, 75, 75);
    textSize(self.textsize);
    fill(255, 255, 255);
    text((Math.round(variables.totalscore)).toString(), self.x, self.y+70, 200, 200)
};
ScoreView.prototype.startanimation = function startanimation() {
    var self = this;
    self.secondsleft = 20;
    self.animate()
};
ScoreView.prototype.animate = function animate() {
    var self = this;
    if (self.secondsleft > 0) {
        if (self.textsize >= 120) {
            self.animationstate = "decreasing"
        } else if (self.textsize <= 100) {
            self.animationstate = "increasing"
        }
        if (self.animationstate == "increasing") {
            self.textsize += 2
        } else if (self.animationstate == "decreasing") {
            self.textsize -= 2
        }
        if (self.secondsleft > 0) {
            self.secondsleft -= 1
        }
    }
};

function TimeView() {
    var self = this;
    self.x = width - 120;
    self.y = -5;
    self.textsize = 100;
    self.animationstate = "increasing";
    self.img = loadImage("clock.gif");
    self.secondsleft = 0
};
TimeView.prototype.display = function display() {
    var self = this;
    image(self.img, self.x - 40, self.y + 55, 75, 75);
    textSize(self.textsize);
    if (variables.seconds / 30 <= 5) {
        fill(255, 0, 0)
    } else if (5 < (_$rapyd$_Temp = variables.seconds / 30) && _$rapyd$_Temp <= 15) {
        fill(200, 50, 0)
    } else if (15 < (_$rapyd$_Temp = variables.seconds / 30) && _$rapyd$_Temp <= 30) {
        fill(150, 100, 0)
    } else if (30 < (_$rapyd$_Temp = variables.seconds / 30) && _$rapyd$_Temp <= 45) {
        fill(50, 200, 0)
    } else if (variables.seconds / 30 > 45) {
        fill(0, 255, 0)
    }
    text((Math.floor(variables.seconds / 30)).toString(), self.x, self.y+70, 200, 200)
};
TimeView.prototype.startanimation = function startanimation() {
    var self = this;
    self.secondsleft = 20;
    self.animate()
};
TimeView.prototype.animate = function animate() {
    var self = this;
    if (self.secondsleft > 0) {
        if (self.textsize >= 120) {
            self.animationstate = "decreasing"
        } else if (self.textsize <= 100) {
            self.animationstate = "increasing"
        }
        if (self.animationstate == "increasing") {
            self.textsize += 2
        } else if (self.animationstate == "decreasing") {
            self.textsize -= 2
        }
        if (self.secondsleft > 0) {
            self.secondsleft -= 1
        }
    }
};

function CoinView() {
    var self = this;
    self.x = 100;
    self.y = -5;
    self.textsize = 100;
    self.animationstate = "increasing";
    self.img = loadImage("cointotal.gif");
    self.secondsleft = 0
};
CoinView.prototype.display = function display() {
    var self = this;
    tint(255, 200);
    image(self.img, self.x - 50, self.y + 55, 75, 75);
    textSize(self.textsize);
    fill(255, 255, 255);
    text(variables.coins.toString(), self.x, self.y+70, 200, 200)
};
CoinView.prototype.startanimation = function startanimation() {
    var self = this;
    self.secondsleft = 20;
    self.animate()
};
CoinView.prototype.animate = function animate() {
    var self = this;
    if (self.secondsleft > 0) {
        if (self.textsize >= 120) {
            self.animationstate = "decreasing"
        } else if (self.textsize <= 100) {
            self.animationstate = "increasing"
        }
        if (self.animationstate == "increasing") {
            self.textsize += 2
        } else if (self.animationstate == "decreasing") {
            self.textsize -= 2
        }
        if (self.secondsleft > 0) {
            self.secondsleft -= 1
        }
    }
};

function Variables(redd, greenn, bluee) {
    var self = this;
    self.scoremultiplier = 1;
    self.totalscore = 0;
    self.coins = 0;
    self.score = 0;
    self.seconds = 30 * 60 + 1;
    self.secondsplayed=0
    self.currentline = "empty";
    self.dots = [];
    self.lines = [];
    self.bonuses = [];
    self.explosions = [];
    self.menuitems = [];
    self.animateellipses = [];
    self.tips = [];
    self.redd = redd;
    self.greenn = greenn;
    self.bluee = bluee;
    self.lost = false;
    self.intersectwithlines = false;
    self.intersectwithitself = false;
    self.outofbox = false;
    self.mode = "main_menu";
    self.bonusestobedeleted = false
};
Variables.prototype.reinitialize = function reinitialize() {
    var self = this;
    self.scoremultiplier = 1;
    self.totalscore = 0;
    self.explosions = [];
    self.coins = 0;
    self.currentline = "empty";
    self.score = 0;
    self.seconds = 30 * 60 + 1;
    self.secondsplayed=0
    self.dots = [];
    self.lines = [];
    self.bonuses = [];
    self.tips = [];
    self.lost = false;
    self.intersectwithlines = false;
    self.intersectwithitself = false;
    self.outofbox = false;
    self.animateellipses = [];
    self.bonusestobedeleted = false
};
variables = new Variables(Random(0, 255), Random(0, 255), Random(0, 255));

function linearFunction(coords1, coords2) {
    var x1, x2, y1, y2, a, b;
    x1 = coords1[0];
    x2 = coords2[0];
    y1 = coords1[1];
    y2 = coords2[1];
    if (x1 == x2) {
        a = "vertical";
        b = "vertical"
    } else {
        a = (y2 - y1) / (x2 - x1);
        b = y2 - a * x2
    }
    return [a, b, x1, x2, y1, y2]
}

function intersection(line1, line2) {
    var a1, a2, b1, b2, x1, x2, x3, x4, y1, y2, y3, y4, x, y;
    a1 = line1[0];
    a2 = line2[0];
    if (a1 == a2) {
        return false
    }
    b1 = line1[1];
    b2 = line2[1];
    x1 = line1[2];
    x2 = line1[3];
    x3 = line2[2];
    x4 = line2[3];
    y1 = line1[4];
    y2 = line1[5];
    y3 = line2[4];
    y4 = line2[5];
    if (a1 != "vertical" && a2 != "vertical") {
        x = (b2 - b1) / (a1 - a2);
        if ((x1 <= x && x <= x2 || x2 <= x && x <= x1) && (x3 <= x && x <= x4 || x4 <= x && x <= x3)) {
            console.log(a1,b1,a2,b2);
            return true
        } else {
            return false
        }
    } else if (a1 == "vertical" && a2 != "vertical") {
        y = a2 * x1 + b2;
        if ((y1 <= y && y <= y2 || y2 <= y && y <= y1) && (y3 <= y && y <= y4 || y4 <= y && y <= y3) && (x3 <= x1 && x1 <= x4 || x4 <= x1 && x1 <= x3)) {
            console.log(a1,b1,a2,b2);
            return true
        } else {
            return false
        }
    } else if (a1 != "vertical" && a2 == "vertical") {
        y = a1 * x3 + b1;
        if ((y1 <= y && y <= y2 || y2 <= y && y <= y1) && (y3 <= y && y <= y4 || y4 <= y && y <= y3) && (x1 <= x3 && x3 <= x2 || x2 <= x3 && x3 <= x1)) {
            console.log(a1,b1,a2,b2);
            return true
        } else {
            return false
        }
    } else {
        _$rapyd$_print("Something is wrong with da data")
    }
}

function generateDots() {
    var i;
    variables.dots = [];
    for (i = 0; i < 2; i++) {
        variables.dots.push(new Dot(Random(.05 * width, .95 * width), Random(.25 * height, .95 * height), variables.redd, variables.greenn, variables.bluee))
    }
}

function generateBonus() {
    var choices = ["multiplier1", "multiplier2", "multiplier3", "multiplier2", "area_delete","area_delete","area_delete", "nuke", "time5","time10", "time15", "time5", "coin", "coinstack", "coinpile", "line_delete1", "line_delete2", "line_delete2","line_delete2","line_delete3"]
    var choice = choices[Random(0,choices.length-1)]
    variables.bonuses.push(new Bonus(Random(.05 * width, .95 * width), Random(.25 * height, .95 * height), choice))
}

function generateMainMenu() {
    var i;
    var _$rapyd$_Iter2 = ["logo", "playicon", "info"];
    for (var _$rapyd$_Index2 = 0; _$rapyd$_Index2 < _$rapyd$_Iter2.length; _$rapyd$_Index2++) {
        i = _$rapyd$_Iter2[_$rapyd$_Index2];
        variables.menuitems.push(new MenuItem(i))
    }
}

function generateLostMenu() {
    var i;
    var _$rapyd$_Iter3 = ["logo", "replayicon", "coin", "info"];
    for (var _$rapyd$_Index3 = 0; _$rapyd$_Index3 < _$rapyd$_Iter3.length; _$rapyd$_Index3++) {
        i = _$rapyd$_Iter3[_$rapyd$_Index3];
        variables.menuitems.push(new MenuItem(i))
    }
}

function generateInfoMenu() {
    var i;
    var _$rapyd$_Iter4 = ["logo", "info"];
    for (var _$rapyd$_Index4 = 0; _$rapyd$_Index4 < _$rapyd$_Iter4.length; _$rapyd$_Index4++) {
        i = _$rapyd$_Iter4[_$rapyd$_Index4];
        variables.menuitems.push(new MenuItem(i))
    }
}

function setup() {
    // var hasloggedin=false;
    cursor(CROSS)
    frameRate(60)
    width=800
    height=600
    canvas=createCanvas(width, height);
    canvas.class("lemon");
    imageMode(CENTER);
    background(0, 0, 0);
    generateMainMenu();
}

function draw() {
    var newlist, i;
    if (variables.mode == "countdown") {
        background(0, 0, 0);
        displayMenu()
    } else if (variables.mode == "info") {
        background(0, 0, 0);
        displayMenu();
        textSize(20);
        text("Email: witold.delachapelle@nyu.edu", .3 * width, height / 2, 400, 200)
    } else if (variables.mode == "main_menu") {
        background(0, 0, 0);
        displayMenu()
    } else if (variables.mode == "lost_menu") {
        if (variables.lostopacity < 255) {
            variables.lostopacity += 2
        }
        if (variables.lostopacity1 < 200) {
            variables.lostopacity1 += 2
        }
        if (variables.lost) {
            displaylines();
            displaydots();
            displayBonuses();
            displayAnimateEllipses();
            noStroke();
            fill(0, 0, 0, variables.lostopacity1);
            rect(0, 0, width, height);
            tint(255, variables.lostopacity);
            displayMenu();
            fill(255, 0, 0, variables.lostopacity);
            textSize(40);
            text("GAME OVER!", .35 * width, .3 * height - 30, 400, 50);
            fill(0, 0, 255, variables.lostopacity);
            textSize(20);
            if (variables.outofbox) {
                text("Nah, you cannot go out of the boundaries.", .3 * width - 20, .35 * height, 500, 50)
            } else if (variables.intersectwithlines) {
                text("You smashed into another line!", .3 * width + 5, .35 * height, 500, 50)
            } else if (variables.intersectwithitself) {
                text("You crashed into your very own line!", .3 * width - 10, .35 * height, 500, 50)
            } else if (variables.seconds <= 0) {
                text("Out of time... Hurry up next time!", .3 * width - 10, .35 * height, 500, 50)
            }
            textSize(100);
            fill(variables.redd, variables.greenn, variables.bluee, variables.lostopacity);
            fill(255, 255, 255, variables.lostopacity);
            text((Math.round(variables.totalscore*100)/100).toString(), .40 * width, .7 * height, 200, 200);
            textSize(40);
            text("+ " + variables.coins.toString(), .4 * width, .8 * height, 200, 200);
            var _$rapyd$_Iter5 = variables.tips;
            for (var _$rapyd$_Index5 = 0; _$rapyd$_Index5 < _$rapyd$_Iter5.length; _$rapyd$_Index5++) {
                i = _$rapyd$_Iter5[_$rapyd$_Index5];
                i.display()
            }
        }
    } else if (variables.mode == "gameplay") {
        background(0, 0, 0);
        if (len(variables.explosions) > 0) {
            displayExplosions();
            newlist = [];
            var _$rapyd$_Iter6 = variables.explosions;
            for (var _$rapyd$_Index6 = 0; _$rapyd$_Index6 < _$rapyd$_Iter6.length; _$rapyd$_Index6++) {
                i = _$rapyd$_Iter6[_$rapyd$_Index6];
                if (i.finished == false) {
                    newlist.push(i)
                }
            }
            variables.explosions = newlist
        }
        displaylines();
        displayBonuses();
        displaydots();
        displaycurrentLine();
        if (variables.seconds % 60 == 0) {
            generateBonus()
        }
        if (variables.seconds <= 0) {
            Lost()
        } else {
            variables.seconds -= 1
            variables.secondsplayed+=1
        }
        noStroke()
        if (variables.scoreview.secondsleft > 0) {
            variables.scoreview.animate()
        }
        variables.scoreview.display();
        if (variables.timeview.secondsleft > 0) {
            variables.timeview.animate()
        }
        variables.timeview.display();
        if (variables.coinview.secondsleft > 0) {
            variables.coinview.animate()
        }
        variables.coinview.display();
        if (variables.bonusestobedeleted) {
            deleteOldBonuses()
        }
    }
}

function displaylines() {
    var i;
    for (i = 0; i < len(variables.lines); i++) {
        if (variables.lines[i].willpop) {
            variables.lines[i].animate()
        }
        variables.lines[i].display()
    }
}

function displayBonuses() {
    var newlist, i;
    newlist = [];
    var _$rapyd$_Iter7 = variables.bonuses;
    for (var _$rapyd$_Index7 = 0; _$rapyd$_Index7 < _$rapyd$_Iter7.length; _$rapyd$_Index7++) {
        i = _$rapyd$_Iter7[_$rapyd$_Index7];
        i.fly();
        i.display();
        if (0 <= (_$rapyd$_Temp = i.x) && _$rapyd$_Temp <= width && 0 <= (_$rapyd$_Temp = i.y) && _$rapyd$_Temp <= height) {
            newlist.push(i)
        }
    }
    variables.bonuses = newlist
}

function displaydots() {
    var i;
    var _$rapyd$_Iter8 = variables.dots;
    for (var _$rapyd$_Index8 = 0; _$rapyd$_Index8 < _$rapyd$_Iter8.length; _$rapyd$_Index8++) {
        i = _$rapyd$_Iter8[_$rapyd$_Index8];
        i.display()
    }
}

function displaycurrentLine() {
    if (variables.currentline != "empty") {
        variables.currentline.display()
    }
}

function displayAnimateEllipses() {
    var i;
    var _$rapyd$_Iter9 = variables.animateellipses;
    for (var _$rapyd$_Index9 = 0; _$rapyd$_Index9 < _$rapyd$_Iter9.length; _$rapyd$_Index9++) {
        i = _$rapyd$_Iter9[_$rapyd$_Index9];
        i.display()
    }
}

function mousePressed() {
    if (hasloggedin || userIsGuest){
        var i;
        if (variables.mode == "main_menu" || variables.mode == "lost_menu" || variables.mode == "info") {
            var _$rapyd$_Iter10 = variables.menuitems;
            for (var _$rapyd$_Index10 = 0; _$rapyd$_Index10 < _$rapyd$_Iter10.length; _$rapyd$_Index10++) {
                i = _$rapyd$_Iter10[_$rapyd$_Index10];
                if (i.x - 50 <= mouseX && mouseX <= i.x + 50 && i.y - 50 <= mouseY && mouseY <= i.y + 50 && i.type != "logo") {
                    i.clicked = true
                }
            }
        }
    }
}

function mouseDragged() {
    var linFunctCurrent, i, j;
    if (variables.mode == "gameplay") {
        if (variables.currentline == "empty") {
            variables.currentline = new Line(variables.redd, variables.greenn, variables.bluee, "beingdrawn")
        } else {
            if (variables.currentline.linelists.length == 0){
                linFunctCurrent = linearFunction([mouseX, mouseY], [pmouseX, pmouseY]);
                // console.log('first time: ',[mouseX, mouseY], [pmouseX, pmouseY])
            } else{
                
                // console.log(variables.currentline.linelists.slice(-1)[0][3],variables.currentline.linelists.slice(-1)[0][5])
                linFunctCurrent = linearFunction([mouseX, mouseY], [variables.currentline.linelists.slice(-1)[0][2], variables.currentline.linelists.slice(-1)[0][4]]);
                // console.log('consecutive: ',[mouseX, mouseY], [variables.currentline.linelists.slice(-1)[0][2], variables.currentline.linelists.slice(-1)[0][4]])
            }
            variables.currentline.addLineLists(linFunctCurrent);


            // for (j = 0; j < (variables.currentline.linelists).length - 5; j++) {
            //     if (j < (variables.currentline.linelists).length - 5) {
            //         if (intersection(linFunctCurrent, variables.currentline.linelists[j])) {
            //             variables.intersectwithitself = true;
            //             _$rapyd$_print("current line touched")
            //         }
            //     }
            // }
            // for (i = 0; i < (variables.lines).length; i++) {
            //     for (j = 0; j < (variables.lines[i].linelists).length; j++) {
            //         if (j < (variables.lines[i].linelists).length - 5) {
            //             if (intersection(linFunctCurrent, variables.lines[i].linelists[j])) {
            //                 variables.intersectwithlines = true;
            //                 _$rapyd$_print("fixed lines touched")
            //             }
            //         }
            //     }
            // }


            // if (variables.intersectwithlines || variables.intersectwithitself || variables.outofbox) {
            //     variables.animateellipses.push(new AnimateEllipse(mouseX, mouseY));
            //     Lost()
            // }
            if (variables.dots[1].x - 18 < mouseX && mouseX < variables.dots[1].x + 18 && variables.dots[1].y - 18 < mouseY && mouseY < variables.dots[1].y + 18) {
                variables.dots[1].through = true
            }
            if (variables.dots[0].x - 18 < mouseX && mouseX < variables.dots[0].x + 18 && variables.dots[0].y - 18 < mouseY && mouseY < variables.dots[0].y + 18) {
                variables.dots[0].through = true
            }
            if (((variables.dots[1].x - 18 < mouseX && mouseX < variables.dots[1].x + 18 && variables.dots[1].y - 18 < mouseY && mouseY < variables.dots[1].y + 18) || (variables.dots[0].x - 18 < mouseX && mouseX < variables.dots[0].x + 18 && variables.dots[0].y - 18 < mouseY && mouseY < variables.dots[0].y + 18))==false){
                for (j = 0; j < (variables.currentline.linelists).length - 5; j++) {
                    if (j < (variables.currentline.linelists).length - 5) {
                        if (intersection(linFunctCurrent, variables.currentline.linelists[j])) {
                            variables.intersectwithitself = true;
                            _$rapyd$_print("current line touched")
                        }
                    }
                }
                for (i = 0; i < (variables.lines).length; i++) {
                    for (j = 0; j < (variables.lines[i].linelists).length; j++) {
                        if (j < (variables.lines[i].linelists).length - 5) {
                            if (intersection(linFunctCurrent, variables.lines[i].linelists[j])) {
                                variables.intersectwithlines = true;
                                _$rapyd$_print("fixed lines touched")
                            }
                        }
                    }
                }


                if (variables.intersectwithlines || variables.intersectwithitself || variables.outofbox) {
                    variables.animateellipses.push(new AnimateEllipse(mouseX, mouseY));
                    Lost()
                }
            }

            var _$rapyd$_Iter11 = variables.bonuses;
            for (var _$rapyd$_Index11 = 0; _$rapyd$_Index11 < _$rapyd$_Iter11.length; _$rapyd$_Index11++) {
                i = _$rapyd$_Iter11[_$rapyd$_Index11];
                if (i.willactivate == false) {
                    if (i.x - 25 < mouseX && mouseX < i.x + 25 && i.y - 25 < mouseY && mouseY < i.y + 25) {
                        i.willactivate = true;
                        if (i.type == "line_delete1" || i.type == "line_delete2" || i.type == "line_delete3") {
                            var _$rapyd$_Iter12 = variables.lines;
                            for (var _$rapyd$_Index12 = 0; _$rapyd$_Index12 < _$rapyd$_Iter12.length; _$rapyd$_Index12++) {
                                j = _$rapyd$_Iter12[_$rapyd$_Index12];
                                if (j.willpop == false) {
                                    j.willpop = true;
                                    break
                                }
                            }
                        }
                        if (i.type == "line_delete2" || i.type == "line_delete3") {
                            var _$rapyd$_Iter13 = variables.lines;
                            for (var _$rapyd$_Index13 = 0; _$rapyd$_Index13 < _$rapyd$_Iter13.length; _$rapyd$_Index13++) {
                                j = _$rapyd$_Iter13[_$rapyd$_Index13];
                                if (j.willpop == false) {
                                    j.willpop = true;
                                    break
                                }
                            }
                        }
                        if (i.type == "line_delete3") {
                            var _$rapyd$_Iter14 = variables.lines;
                            for (var _$rapyd$_Index14 = 0; _$rapyd$_Index14 < _$rapyd$_Iter14.length; _$rapyd$_Index14++) {
                                j = _$rapyd$_Iter14[_$rapyd$_Index14];
                                if (j.willpop == false) {
                                    j.willpop = true;
                                    break
                                }
                            }
                        }
                    }
                }
            }
            if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
                variables.outofbox = true
            }
        }
    }
}

function Lost() {
    if (userIsGuest == false){
    SendScore();
    }
    if (variables.currentline != "empty") {
        variables.lines.push(variables.currentline)
    }
    variables.lostopacity = 0;
    variables.lostopacity1 = 0;
    variables.lost = true;
    generateLostMenu();
    variables.tips.push(new Tip(Random(1, 12)));
    variables.mode = "lost_menu"
}

function mouseReleased() {
    var i;
    if (variables.mode == "gameplay") {
        if (variables.dots[0].through && variables.dots[1].through) {
            Win()
        }
        var _$rapyd$_Iter15 = variables.lines;
        for (var _$rapyd$_Index15 = 0; _$rapyd$_Index15 < _$rapyd$_Iter15.length; _$rapyd$_Index15++) {
            i = _$rapyd$_Iter15[_$rapyd$_Index15];
            i.willpop = false
        }
        var _$rapyd$_Iter16 = variables.bonuses;
        for (var _$rapyd$_Index16 = 0; _$rapyd$_Index16 < _$rapyd$_Iter16.length; _$rapyd$_Index16++) {
            i = _$rapyd$_Iter16[_$rapyd$_Index16];
            i.willactivate = false
        }
        variables.currentline = "empty";
        variables.dots[0].through = false;
        variables.dots[1].through = false
    }
}

function Win() {
    var i;
    if (variables.mode == "gameplay") {
        var _$rapyd$_Iter17 = variables.bonuses;
        for (var _$rapyd$_Index17 = 0; _$rapyd$_Index17 < _$rapyd$_Iter17.length; _$rapyd$_Index17++) {
            i = _$rapyd$_Iter17[_$rapyd$_Index17];
            if (i.willactivate) {
                i.action();
                variables.bonusestobedeleted = true
            }
        }
        variables.currentline.type = "fixed";
        variables.lines.push(variables.currentline);
        variables.redd = Random(0, 255);
        variables.greenn = Random(0, 255);
        variables.bluee = Random(0, 255);
        generateDots();
        variables.score += 1;
        variables.totalscore = variables.scoremultiplier * variables.score;
        variables.scoreview.startanimation()
    }
}

function reinitialize() {
    variables.reinitialize();
    generateDots()
}

function deleteBonusAction(coords, destructionRadius) {
    var j, i, newlist;
    var _$rapyd$_Iter18 = variables.lines;
    for (var _$rapyd$_Index18 = 0; _$rapyd$_Index18 < _$rapyd$_Iter18.length; _$rapyd$_Index18++) {
        i = _$rapyd$_Iter18[_$rapyd$_Index18];
        newlist = [];
        var _$rapyd$_Iter19 = i.linelists;
        for (var _$rapyd$_Index19 = 0; _$rapyd$_Index19 < _$rapyd$_Iter19.length; _$rapyd$_Index19++) {
            j = _$rapyd$_Iter19[_$rapyd$_Index19];
            if (sqrt(Math.pow((j[2] - coords[0]), 2) + Math.pow((j[4] - coords[1]), 2)) >= destructionRadius || sqrt(Math.pow((j[3] - coords[0]), 2) + Math.pow((j[5] - coords[1]), 2)) >= destructionRadius) {
                newlist.push(j)
            }
        }
        i.linelists = newlist
    }
    newlist = [];
    var _$rapyd$_Iter20 = variables.currentline.linelists;
    for (var _$rapyd$_Index20 = 0; _$rapyd$_Index20 < _$rapyd$_Iter20.length; _$rapyd$_Index20++) {
        j = _$rapyd$_Iter20[_$rapyd$_Index20];
        if (sqrt(Math.pow((j[2] - coords[0]), 2) + Math.pow((j[4] - coords[1]), 2)) >= destructionRadius || sqrt(Math.pow((j[3] - coords[0]), 2) + Math.pow((j[5] - coords[1]), 2)) >= destructionRadius) {
            newlist.push(j)
        }
    }
    variables.currentline.linelists = newlist;
    newlist = [];
    var _$rapyd$_Iter21 = variables.lines;
    for (var _$rapyd$_Index21 = 0; _$rapyd$_Index21 < _$rapyd$_Iter21.length; _$rapyd$_Index21++) {
        j = _$rapyd$_Iter21[_$rapyd$_Index21];
        if (len(j.linelists) > 1) {
            newlist.push(j)
        }
    }
    variables.lines = newlist
}

function deleteOldBonuses() {
    var newlist, i;
    newlist = [];
    var _$rapyd$_Iter22 = variables.bonuses;
    for (var _$rapyd$_Index22 = 0; _$rapyd$_Index22 < _$rapyd$_Iter22.length; _$rapyd$_Index22++) {
        i = _$rapyd$_Iter22[_$rapyd$_Index22];
        if (i.secondsleft >= 0) {
            newlist.push(i)
        }
    }
    variables.bonuses = newlist;
    variables.bonusestobedeleted = false
}

function displayMenu() {
    var i;
    var _$rapyd$_Iter23 = variables.menuitems;
    for (var _$rapyd$_Index23 = 0; _$rapyd$_Index23 < _$rapyd$_Iter23.length; _$rapyd$_Index23++) {
        i = _$rapyd$_Iter23[_$rapyd$_Index23];
        i.display()
    }
}

/* P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE
P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE
P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE P5 CODE
*/