// ======================
// THEME TOGGLE WITH STORAGE
// ======================
function toggleTheme() {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

}

// load saved theme
window.onload = function(){

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
document.body.classList.add("dark");
}

};



// ======================
// LIVE MATCH SCOREBOARD
// ======================
let runs = 120;
let wickets = 3;
let overs = 12;

function updateScore(){

runs += Math.floor(Math.random()*10);

if(Math.random() > 0.7){
wickets++;
}

overs++;

document.getElementById("matchScore").innerText =
"RCB: "+runs+"/"+wickets+" ("+overs+" overs)";

}



// ======================
// PLAYER SEARCH
// ======================

function searchPlayer(){

let input = document.getElementById("playerSearch");
let filter = input.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let text = card.firstChild.textContent.trim();
let lowerText = text.toLowerCase();

if(lowerText.includes(filter)){

card.style.display = "block";

/* highlight match */
let start = lowerText.indexOf(filter);
let end = start + filter.length;

let highlighted =
text.substring(0,start) +
"<span class='highlight'>" +
text.substring(start,end) +
"</span>" +
text.substring(end);

card.childNodes[0].textContent = "";
card.insertAdjacentHTML("afterbegin", highlighted);

}
else{

card.style.display = "none";

}

});

}

// SEARCH PLAYER FUNCTION
function searchPlayer() {

let input = document.getElementById("playerSearch");
let filter = input.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(filter)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

}


// SHOW PLAYER INFORMATION
function showPlayerInfo(name, team, role, runs){

alert(
"Player: " + name + "\n" +
"Team: " + team + "\n" +
"Role: " + role + "\n" +
"Runs: " + runs
);

}

// ======================
// PLAYER DETAILS POPUP
// ======================
let playerDetails = {

"Virat Kohli":"Team: RCB | Role: Batsman",
"MS Dhoni":"Team: CSK | Role: Wicket Keeper",
"Rohit Sharma":"Team: MI | Role: Batsman",
"Jasprit Bumrah":"Team: MI | Role: Fast Bowler",
"KL Rahul":"Team: LSG | Role: Batsman",
"Hardik Pandya":"Team: MI | Role: All Rounder",
"Ravindra Jadeja":"Team: CSK | Role: All Rounder",
"Shubman Gill":"Team: GT | Role: Batsman",
"David Warner":"Team: DC | Role: Batsman",
"Jos Buttler":"Team: RR | Role: Wicket Keeper",
"Pat cummins":"Team: SRH | Role: Fast Bowler",
"Abhishek sharma":"Team: SRH | Role: All Rounder",
"NKR":"Team: SRH | Role: All Rounder",
"Travis head":"Team: SRH | Role: Batsman",
"Heinrich klaasen":"Team: SRH | Role: Wicket Keeper",
"Siraj":"Team: RCB | Role: Fast Bowler"

};



// ======================
// TEAM SEARCH
// ======================
let teams = {

"Mumbai Indians":{score:"235/1",trophies:5},
"Chennai Super Kings":{score:"246/5",trophies:5},
"Royal Challengers Bangalore":{score:"263/5",trophies:0},
"Kolkata Knight Riders":{score:"245/6",trophies:3},
"Delhi Capitals":{score:"257/4",trophies:0},
"Sunrisers Hyderabad":{score:"287/3",trophies:1},
"Rajasthan Royals":{score:"226/6",trophies:1},
"Punjab Kings":{score:"262/2",trophies:0},
"Lucknow Super Giants":{score:"257/5",trophies:0},
"Gujarat Titans":{score:"233/3",trophies:1}

};

function searchTeam(){

let input = document.getElementById("teamSearch");

if(!input) return;

let teamName = input.value;
let result = document.getElementById("teamResult");

if(teams[teamName]){

result.innerHTML =
"<h3>"+teamName+"</h3>"+
"<p>Highest Score: "+teams[teamName].score+"</p>"+
"<p>Trophies Won: "+teams[teamName].trophies+"</p>";

}else{

result.innerHTML = "<p>Team not found</p>";

}

}



// ======================
// PAGE EVENTS
// ======================
document.addEventListener("DOMContentLoaded",function(){


// PLAYER CARD CLICK
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",function(){

let name = this.childNodes[0].textContent.trim();

let popup = document.getElementById("playerPopup");

if(popup){

document.getElementById("playerName").innerText = name;

document.getElementById("playerInfo").innerText =
playerDetails[name] || "IPL Player";

popup.style.display="flex";

}else{

alert("Player: "+name);

}

});

});



// CONTACT FORM
let form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been submitted.");

form.reset();

});

}



// GALLERY IMAGE ZOOM
let images = document.querySelectorAll(".grid-container img");

images.forEach(img=>{

img.addEventListener("click",function(){

if(this.style.transform === "scale(1.5)"){
this.style.transform = "scale(1)";
}else{
this.style.transform = "scale(1.5)";
}

});

});



// POINTS TABLE AUTO SORT
let table = document.querySelector("table");

if(table){

let rows = Array.from(table.rows).slice(1);

rows.sort(function(a,b){

let aPoints = parseInt(a.cells[3].innerText);
let bPoints = parseInt(b.cells[3].innerText);

return bPoints - aPoints;

});

rows.forEach(row=>table.appendChild(row));

}

});



// ======================
// CLOSE POPUP
// ======================
function closePopup(){

let popup = document.getElementById("playerPopup");

if(popup){
popup.style.display="none";
}

}
