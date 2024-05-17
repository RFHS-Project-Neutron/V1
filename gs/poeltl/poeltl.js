//Adjust screen width for mobile
let siteWidth = 1280;
let scale = screen.width / siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

const playerList = [
  "Steven Adams",
  "LaMarcus Aldridge",
  "Kyle Anderson",
  "Giannis Antetokounmpo",
  "Carmelo Anthony",
  "D.J. Augustin",
  "Harrison Barnes",
  "Will Barton",
  "Nicolas Batum",
  "Kent Bazemore",
  "Bradley Beal",
  "Malik Beasley",
  "Davis Bertans",
  "Patrick Beverley",
  "Bismack Biyombo",
  "Nemanja Bjelica",
  "Eric Bledsoe",
  "Bojan Bogdanovic",
  "Devin Booker",
  "Avery Bradley",
  "Malcolm Brogdon",
  "Jaylen Brown",
  "Reggie Bullock",
  "Trey Burke",
  "Alec Burks",
  "Jimmy Butler",
  "Kentavious Caldwell-Pope",
  "Clint Capela",
  "Marquese Chriss",
  "Mike Conley",
  "Pat Connaughton",
  "Robert Covington",
  "Jae Crowder",
  "Stephen Curry",
  "Anthony Davis",
  "Ed Davis",
  "Dewayne Dedmon",
  "DeMar DeRozan",
  "Gorgui Dieng",
  "Spencer Dinwiddie",
  "Goran Dragic",
  "Wayne Ellington",
  "Joel Embiid",
  "Derrick Favors",
  "Dorian Finney-Smith",
  "Bryn Forbes",
  "Evan Fournier",
  "Rudy Gay",
  "Paul George",
  "Taj Gibson",
  "Rudy Gobert",
  "Aaron Gordon",
  "Eric Gordon",
  "Jerami Grant",
  "Danny Green",
  "Draymond Green",
  "Blake Griffin",
  "Tim Hardaway Jr.",
  "James Harden",
  "Maurice Harkless",
  "Montrezl Harrell",
  "Gary Harris",
  "Joe Harris",
  "Tobias Harris",
  "Udonis Haslem",
  "Gordon Hayward",
  "Juancho Hernangomez",
  "Willy Hernangomez",
  "Buddy Hield",
  "George Hill",
  "Jrue Holiday",
  "Richaun Holmes",
  "Rodney Hood",
  "Al Horford",
  "Danuel House Jr.",
  "Dwight Howard",
  "Serge Ibaka",
  "Andre Iguodala",
  "Brandon Ingram",
  "Kyrie Irving",
  "Reggie Jackson",
  "LeBron James",
  "Stanley Johnson",
  "Nikola Jokic",
  "Damian Jones",
  "Derrick Jones Jr.",
  "Tyus Jones",
  "DeAndre Jordan",
  "Cory Joseph",
  "Jeremy Lamb",
  "Zach LaVine",
  "Jake Layman",
  "Alex Len",
  "Kawhi Leonard",
  "Caris LeVert",
  "Kevon Looney",
  "Brook Lopez",
  "Robin Lopez",
  "Kyle Lowry",
  "Timothe Luwawu-Cabarrot",
  "Trey Lyles",
  "Boban Marjanovic",
  "Wesley Matthews",
  "CJ McCollum",
  "T.J. McConnell",
  "Doug McDermott",
  "Rodney McGruder",
  "Ben McLemore",
  "Khris Middleton",
  "Patty Mills",
  "Paul Millsap",
  "Marcus Morris Sr.",
  "Markieff Morris",
  "Jamal Murray",
  "Mike Muscala",
  "Larry Nance Jr.",
  "Raul Neto",
  "Georges Niang",
  "Nerlens Noel",
  "Jusuf Nurkic",
  "Victor Oladipo",
  "Kelly Olynyk",
  "Kelly Oubre Jr.",
  "Chris Paul",
  "Cameron Payne",
  "Elfrid Payton",
  "Mason Plumlee",
  "Jakob Poeltl",
  "Otto Porter Jr.",
  "Bobby Portis",
  "Dwight Powell",
  "Norman Powell",
  "Taurean Prince",
  "Julius Randle",
  "Josh Richardson",
  "Austin Rivers",
  "Rajon Rondo",
  "Terrence Ross",
  "Terry Rozier",
  "Ricky Rubio",
  "Domantas Sabonis",
  "Dario Saric",
  "Tomas Satoransky",
  "Dennis Schroder",
  "Pascal Siakam",
  "Ben Simmons",
  "Marcus Smart",
  "Ish Smith",
  "Tony Snell",
  "Isaiah Thomas",
  "Tristan Thompson",
  "Karl-Anthony Towns",
  "Myles Turner",
  "Jonas Valanciunas",
  "Fred VanVleet",
  "Nikola Vucevic",
  "Kemba Walker",
  "T.J. Warren",
  "Andrew Wiggins",
  "Lou Williams",
  "Justise Winslow",
  "Thaddeus Young",
  "Ivica Zubac",
  "Damion Lee",
  "Ryan Arcidiacono",
  "Alex Caruso",
  "David Nwaba",
  "Bam Adebayo",
  "Jarrett Allen",
  "OG Anunoby",
  "Lonzo Ball",
  "Khem Birch",
  "Bogdan Bogdanovic",
  "Chris Boucher",
  "Tony Bradley",
  "Dillon Brooks",
  "Thomas Bryant",
  "John Collins",
  "De'Aaron Fox",
  "Markelle Fultz",
  "Josh Hart",
  "Frank Jackson",
  "Josh Jackson",
  "Luke Kennard",
  "Maxi Kleber",
  "Furkan Korkmaz",
  "Luke Kornet",
  "Kyle Kuzma",
  "Lauri Markkanen",
  "Donovan Mitchell",
  "Malik Monk",
  "Monte Morris",
  "Frank Ntilikina",
  "Royce O'Neale",
  "Cedi Osman",
  "Daniel Theis",
  "Derrick White",
  "Grayson Allen",
  "Deandre Ayton",
  "Marvin Bagley III",
  "Mo Bamba",
  "Keita Bates-Diop",
  "Isaac Bonga",
  "Mikal Bridges",
  "Bruce Brown",
  "Troy Brown Jr.",
  "Jalen Brunson",
  "Jevon Carter",
  "Wendell Carter Jr.",
  "Gary Clark",
  "Hamidou Diallo",
  "Luka Doncic",
  "Wenyen Gabriel",
  "Shai Gilgeous-Alexander",
  "Devonte' Graham",
  "Isaiah Hartenstein",
  "Aaron Holiday",
  "Kevin Huerter",
  "Jaren Jackson Jr.",
  "Kevin Knox II",
  "Jordan McLaughlin",
  "Chimezie Metu",
  "Shake Milton",
  "Svi Mykhailiuk",
  "Kendrick Nunn",
  "Josh Okogie",
  "Theo Pinson",
  "Michael Porter Jr.",
  "Duncan Robinson",
  "Mitchell Robinson",
  "Collin Sexton",
  "Landry Shamet",
  "Anfernee Simons",
  "Jarred Vanderbilt",
  "Moritz Wagner",
  "Lonnie Walker IV",
  "Yuta Watanabe",
  "Kenrich Williams",
  "Robert Williams III",
  "Trae Young",
  "Gary Trent Jr.",
  "Chris Chiozza",
  "Arnoldas Kulboka",
  "Gabe Vincent",
  "Nickeil Alexander-Walker",
  "RJ Barrett",
  "Darius Bazley",
  "Goga Bitadze",
  "Bol Bol",
  "Ignas Brazdeikis",
  "Brandon Clarke",
  "Nic Claxton",
  "Jarrett Culver",
  "Bruno Fernando",
  "Daniel Gafford",
  "Darius Garland",
  "Rui Hachimura",
  "Jaxson Hayes",
  "Tyler Herro",
  "Talen Horton-Tucker",
  "De'Andre Hunter",
  "Ty Jerome",
  "Cameron Johnson",
  "Keldon Johnson",
  "Romeo Langford",
  "Nassir Little",
  "Didi Louzada",
  "Terance Mann",
  "Cody Martin",
  "Jalen McDaniels",
  "Ja Morant",
  "Jaylen Nowell",
  "Chuma Okeke",
  "Jordan Poole",
  "Kevin Porter Jr.",
  "Cam Reddish",
  "Isaiah Roby",
  "Matisse Thybulle",
  "P.J. Washington",
  "Quinndary Weatherspoon",
  "Grant Williams",
  "Zion Williamson",
  "Dylan Windler",
  "Max Strus",
  "Oshae Brissett",
  "Charlie Brown Jr.",
  "Amir Coffey",
  "Tyler Cook",
  "John Konchar",
  "Armoni Brooks",
  "Devontae Cacok",
  "Dean Wade",
  "Javonte Green",
  "Matt Thomas",
  "Keljin Blevins",
  "Precious Achiuwa",
  "Cole Anthony",
  "Deni Avdija",
  "Udoka Azubuike",
  "LaMelo Ball",
  "Desmond Bane",
  "Saddiq Bey",
  "Leandro Bolmaro",
  "Facundo Campazzo",
  "Vernon Carey Jr.",
  "Anthony Edwards",
  "CJ Elleby",
  "Malik Fitts",
  "Malachi Flynn",
  "Trent Forrest",
  "Anthony Gill",
  "Josh Green",
  "R.J. Hampton",
  "Killian Hayes",
  "Elijah Hughes",
  "Isaiah Joe",
  "Mason Jones",
  "Tre Jones",
  "Nathan Knight",
  "Vit Krejci",
  "Saben Lee",
  "Kira Lewis Jr.",
  "Theo Maledon",
  "Kenyon Martin Jr.",
  "Skylar Mays",
  "Jaden McDaniels",
  "Aaron Nesmith",
  "Zeke Nnaji",
  "Jordan Nwora",
  "Onyeka Okongwu",
  "Isaac Okoro",
  "Aleksej Pokusevski",
  "Myles Powell",
  "Payton Pritchard",
  "Immanuel Quickley",
  "Paul Reed",
  "Nick Richards",
  "Marko Simonovic",
  "Jalen Smith",
  "Xavier Sneed",
  "Lamar Stevens",
  "Isaiah Stewart",
  "Jae'Sean Tate",
  "Tyrell Terry",
  "Brodric Thomas",
  "Killian Tillie",
  "Xavier Tillman",
  "Obi Toppin",
  "Devin Vassell",
  "Patrick Williams",
  "Cassius Winston",
  "James Wiseman",
  "Robert Woodard II",
  "Naji Marshall",
  "Trevelin Queen",
  "Omer Yurtseven",
  "Santi Aldama",
  "Dalano Banton",
  "Scottie Barnes",
  "Charles Bassey",
  "Brandon Boston Jr.",
  "James Bouknight",
  "Greg Brown III",
  "Jared Butler",
  "Justin Champagnie",
  "Josh Christopher",
  "Sharife Cooper",
  "Cade Cunningham",
  "Ayo Dosunmu",
  "Chris Duarte",
  "David Duke Jr.",
  "Kessler Edwards",
  "Usman Garuba",
  "Luka Garza",
  "Josh Giddey",
  "Quentin Grimes",
  "Sam Hauser",
  "Bones Hyland",
  "Isaiah Jackson",
  "David Johnson",
  "Jalen Johnson",
  "Keon Johnson",
  "Herbert Jones",
  "Kai Jones",
  "Corey Kispert",
  "Scottie Lewis",
  "Isaiah Livers",
  "Sandro Mamukelashvili",
  "Tre Mann",
  "Miles McBride",
  "Davion Mitchell",
  "Evan Mobley",
  "Moses Moody",
  "Trey Murphy III",
  "Jamorko Pickett",
  "Yves Pons",
  "Joshua Primo",
  "Neemias Queta",
  "Austin Reaves",
  "Jeremiah Robinson-Earl",
  "Alperen Sengun",
  "Day'Ron Sharpe",
  "Jericho Sims",
  "Jaden Springer",
  "Jalen Suggs",
  "Terry Taylor",
  "Cam Thomas",
  "JT Thor",
  "Isaiah Todd",
  "Franz Wagner",
  "Ish Wainright",
  "Duane Washington Jr.",
  "Trendon Watford",
  "Joe Wieskamp",
  "Aaron Wiggins",
  "Ziaire Williams",
  "McKinley Wright IV",
  "RJ Nembhard Jr.",
  "Javonte Smart",
  "Jose Alvarado",
  "Daishen Nix",
  "Moses Wright",
  "Malcolm Hill",
  "Brandon Williams",
  "Lindy Waters III",
  "DeMarcus Cousins",
  "Seth Curry",
  "Kevin Durant",
  "Danilo Gallinari",
  "Jeff Green",
  "Justin Holiday",
  "Dejounte Murray",
  "Kristaps Porzingis",
  "Derrick Rose",
  "Nik Stauskas",
  "Lance Stephenson",
  "Garrett Temple",
  "Klay Thompson",
  "P.J. Tucker",
  "John Wall",
  "Hassan Whiteside",
  "Christian Wood",
  "Zach Collins",
  "Jonathan Isaac",
  "Davon Reed",
  "Haywood Highsmith",
  "Admiral Schofield",
  "Thanasis Antetokounmpo",
  "Jason Preston",
  "Miles Bridges",
  "Sterling Brown",
  "Vlatko Cancar",
  "Jordan Clarkson",
  "Torrey Craig",
  "Terence Davis",
  "Donte DiVincenzo",
  "Luguentz Dort",
  "Andre Drummond",
  "JaMychal Green",
  "Jalen Green",
  "Tyrese Haliburton",
  "Markus Howard",
  "Joe Ingles",
  "Jonathan Kuminga",
  "Jock Landale",
  "Damian Lillard",
  "Kevin Love",
  "Caleb Martin",
  "Garrison Mathews",
  "Tyrese Maxey",
  "JaVale McGee",
  "De'Anthony Melton",
  "Eric Paschall",
  "Gary Payton II",
  "Naz Reid",
  "D'Angelo Russell",
  "Jay Scrubb",
  "Jayson Tatum",
  "Juan Toscano-Anderson",
  "Russell Westbrook",
  "Coby White",
  "Lindell Wigginton",
  "Delon Wright"
];

function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
}

function getRandomTeamId() {
    const teamIds = [1,2,4,5,6,7,8,9,10,11,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,38,40,41];
    let id = 3;
    while(!teamIds.includes(id)){
        min = Math.ceil(1);
        max = Math.floor(41);
        id = Math.floor(Math.random() * (41 - 1) + 1);
    }
    return id;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function closeModal(){
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
}

function openModal(){
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
}


function getRandomPlayer(){
    let pName = playerList[getRandomInt(0,playerList.length)].replace(/\s/g, "").replace(/\'/g,'').replace(/\./g,'').replace(/\-/g,'');
    let fn = window[pName];
    if(typeof fn === "function"){
        actual = fn();
        if(actual.ppg < 7.0) getRandomPlayer();
    }
}


function getPlayer(guessName){
    let pName = guessName.replace(/\s/g, "").replace(/\'/g,'').replace(/\./g,'').replace(/\-/g,'');
    let fn = window[pName];
    if(typeof fn === "function"){
        guesses.push(fn());
    }
}




function createLabel(){
    for(let c = 0; c < 8; c++){
        let tile = document.createElement("span");
        if(c == 0){
            tile.classList.add("label-tile-first");
        }
        else{
            tile.classList.add("label-tile");
            if(c == 1) tile.innerText = "TEAM";
            else if(c == 2) tile.innerText = "CONF";
            else if(c == 3) tile.innerText = "DIV";
            else if(c == 4) tile.innerText = "POS";
            else if(c == 5) tile.innerText = "HT";
            else if(c == 6) tile.innerText = "AGE";
            else if(c == 7) tile.innerText = "#";
        }
        document.getElementById("label").appendChild(tile);
    }
}

function createRow(rowNum){
    document.getElementById("board").style.height += 100;
    let r = rowNum;
    for(let c = 0; c < 8; c++){
        let tile = document.createElement("span");
        tile.id = r.toString() + "-" + c.toString();
        if(c == 0){
            tile.classList.add("name-tile");
        }
        else{
            tile.classList.add("tile");
        }
        tile.innerText = "";
        document.getElementById("board").appendChild(tile);
    }
}

let actual = {};
let player = {};
const guesses = [];
let canPlay = true;
let currGuess = 0;
let playersArray = [];


window.onload = function(){
    init();
}

function init(){
  getRandomPlayer();
  //console.log(actual);
  document.getElementById("modalHeader").innerText = "Who is this mystery player?";
  document.getElementById("playerImage").style.filter = "brightness(0%)";
  document.getElementById("playerImage").src = actual.img;
  document.getElementById("message").remove()
  document.querySelector(".guess").classList.remove("hidden");
  document.querySelector(".btn").classList.remove("hidden");
  createLabel();
  document.querySelector(".guess").addEventListener("keydown", (e) => {
      processInput(e);
  });
  document.querySelector(".close-modal").addEventListener("click",closeModal);
  document.querySelector(".overlay").addEventListener("click", closeModal);
  document.querySelector(".btn").addEventListener("click", openModal);

  document.querySelector(".guess").addEventListener("input", (e) => {
      playersArray = [];
      if(e.target.value){
          playersArray = playerList.filter(p => p.toLowerCase().replace(/\s/g,"").replace(/\'/g,'').replace(/\./g,'').replace(/\-/g,'').includes(e.target.value.toLowerCase().replace(/\s/g,"").replace(/\'/g,'').replace(/\./g,'').replace(/\-/g,'')));
          playersArray = playersArray.map(p => `<li><button id="p${playersArray.indexOf(p)}" class="option" onclick="clickGuess('${p}')">${p}</button></li>`);
      }
      showPlayersArray(playersArray.slice(0,5));
  });
}

function clickGuess(desired){
  let guessedName = desired;
  showPlayersArray([]);
  getPlayer(guessedName);
  guess();
  if(canPlay) document.querySelector(".guess").value = "";
}

function showPlayersArray(playersArray){
    const html = !playersArray.length ? "" : playersArray.join("");
    document.getElementById("results").innerHTML = html;
}

function processInput(e){
    if(canPlay === false) return;

    if(e.code == "Enter" && document.querySelector(".guess").value != "" && playersArray.length !== 0){ 
      let guessedName;
      if(document.querySelector(".selected") == null){
        guessedName = playersArray[0].slice(playersArray[0].indexOf(">",6) + 1, playersArray[0].indexOf("<",6));
      }
      else{
        let selectedId = Number(document.querySelector(".selected").id.slice(1,2));
        guessedName = playersArray[selectedId].slice(playersArray[selectedId].indexOf(">",6) + 1, playersArray[selectedId].indexOf("<",6));
      }
      showPlayersArray([]);
      getPlayer(guessedName);
      guess();
      if(canPlay) document.querySelector(".guess").value = "";
    }

    if(e.code == "ArrowDown" && document.querySelector(".guess").value != "" && playersArray.length !== 0){
      if(document.querySelector(".selected") == null){
        document.getElementById("p0").classList.add("selected");
      }
      else{
        if(document.querySelector(".selected").id == "p4"){
          document.getElementById("p4").classList.remove("selected");
          document.getElementById("p0").classList.add("selected");
        }
        else{
          let currId = document.querySelector(".selected").id;
          let newId = "p" + (Number(currId.slice(1,2)) + 1).toString();
          document.getElementById(currId).classList.remove("selected");
          document.getElementById(newId).classList.add("selected");
        }
      }
    }

    if(e.code == "ArrowUp" && document.querySelector(".guess").value != "" && playersArray.length !== 0){
      if(document.querySelector(".selected") == null){
        document.getElementById("p4").classList.add("selected");
      }
      else{
        if(document.querySelector(".selected").id == "p0"){
          document.getElementById("p0").classList.remove("selected");
          document.getElementById("p4").classList.add("selected");
        }
        else{
          let currId = document.querySelector(".selected").id;
          let newId = "p" + (Number(currId.slice(1,2)) - 1).toString();
          document.getElementById(currId).classList.remove("selected");
          document.getElementById(newId).classList.add("selected");
        }
      }
    }
}

function guess(){
    if(currGuess <= 7){
        let guessed = guesses[currGuess];
        createRow(currGuess);
        
        //DISPLAY NAME
        document.getElementById(`${currGuess}-0`).innerText = guessed.name;
        if(guessed.name === actual.name) {
            document.getElementById(`${currGuess}-0`).classList.add("correct");
            win();
        }

        //TEAM
        document.getElementById(`${currGuess}-1`).innerText = guessed.team;
        if(guessed.team === actual.team) document.getElementById(`${currGuess}-1`).classList.add("correct");

        //CONFERENCE
        document.getElementById(`${currGuess}-2`).innerText = guessed.conference;
        if(guessed.conference === actual.conference) document.getElementById(`${currGuess}-2`).classList.add("correct");

        //DIVISION
        document.getElementById(`${currGuess}-3`).innerText = guessed.division;
        if(guessed.division === actual.division) document.getElementById(`${currGuess}-3`).classList.add("correct");

        //POSITION
        let pos = guessed.position;
        document.getElementById(`${currGuess}-4`).innerText = guessed.position;
        if(guessed.position === actual.position) document.getElementById(`${currGuess}-4`).classList.add("correct");
        else{
          if(actual.position === "G")
            if(pos === "G-F" || pos === "F-G") document.getElementById(`${currGuess}-4`).classList.add("present");
          
          if(actual.position === "F")
            if(pos === "G-F" || pos === "F-G" || pos === "F-C" || pos === "C-F") document.getElementById(`${currGuess}-4`).classList.add("present");

          if(actual.position === "C")
            if(pos === "C-F" || pos === "F-C") document.getElementById(`${currGuess}-4`).classList.add("present");
          
          if(actual.position === "G-F")
            if(pos === "F-G" || pos === "G" || pos === "F") document.getElementById(`${currGuess}-4`).classList.add("present");

          if(actual.position === "F-G")
            if(pos === "G-F" || pos === "G" || pos === "F") document.getElementById(`${currGuess}-4`).classList.add("present");

          if(actual.position === "F-C")
            if(pos === "C-F" || pos === "C" || pos === "F") document.getElementById(`${currGuess}-4`).classList.add("present");

          if(actual.position === "C-F")
            if(pos === "F-C" || pos === "C" || pos === "F") document.getElementById(`${currGuess}-4`).classList.add("present");
        }

        //HEIGHT
        let heightDif = guessed.heightInches - actual.heightInches;
        if(guessed.heightInches === actual.heightInches){ //if height is correct
            document.getElementById(`${currGuess}-5`).innerText = guessed.height;
            document.getElementById(`${currGuess}-5`).classList.add("correct");
        }
        else if(Math.abs(heightDif) <= 2){ //if height is close
            if(heightDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-5`).innerText = guessed.height + "\n↓";
                document.getElementById(`${currGuess}-5`).classList.add("present");
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-5`).innerText = guessed.height + "\n↑";
                document.getElementById(`${currGuess}-5`).classList.add("present");
            }
        }
        else{ //if height is not close
            if(heightDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-5`).innerText = guessed.height + "\n↓";
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-5`).innerText = guessed.height + "\n↑";
            }
        }

        //AGE
        let ageDif = guessed.age - actual.age;
        if(guessed.age === actual.age){ //if height is correct
            document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString();
            document.getElementById(`${currGuess}-6`).classList.add("correct");
        }
        else if(Math.abs(ageDif) <= 2){ //if height is close
            if(ageDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString() + "\n↓";
                document.getElementById(`${currGuess}-6`).classList.add("present");
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString() + "\n↑";
                document.getElementById(`${currGuess}-6`).classList.add("present");
            }
        }
        else{ //if height is not close
            if(ageDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString() + "\n↓";
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString() + "\n↑";
            }
        }

        //NUMBER
        let numberDif = Number(guessed.number) - actual.number;
        if(guessed.number == actual.number){ //if height is correct
            document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString();
            document.getElementById(`${currGuess}-7`).classList.add("correct");
        }
        else if(Math.abs(numberDif) <= 2){ //if height is close
            if(numberDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString() + "\n↓";
                document.getElementById(`${currGuess}-7`).classList.add("present");
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString() + "\n↑";
                document.getElementById(`${currGuess}-7`).classList.add("present");
            }
        }
        else{ //if height is not close
            if(numberDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString() + "\n↓";
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString() + "\n↑";
            }
        }
        
        currGuess++;
    }
    else{
        //SHOW ACTUAL PLAYER AND FILL RED
        createRow(8);
        document.getElementById("8-0").innerText = actual.name;
        document.getElementById("8-0").classList.add("incorrect");
        document.getElementById("8-1").innerText = actual.team;
        document.getElementById("8-1").classList.add("incorrect");
        document.getElementById("8-2").innerText = actual.conference;
        document.getElementById("8-2").classList.add("incorrect");
        document.getElementById("8-3").innerText = actual.division;
        document.getElementById("8-3").classList.add("incorrect");
        document.getElementById("8-4").innerText = actual.position;
        document.getElementById("8-4").classList.add("incorrect");
        document.getElementById("8-5").innerText = actual.height;
        document.getElementById("8-5").classList.add("incorrect");
        document.getElementById("8-6").innerText = actual.age.toString();
        document.getElementById("8-6").classList.add("incorrect");
        document.getElementById("8-7").innerText = actual.number.toString();
        document.getElementById("8-7").classList.add("incorrect");

        lose();
    }
}


function win(){
    canPlay = false;
    document.getElementById("playerImage").style.filter = "brightness(100%)";
    document.getElementById("modalName").innerText = actual.name;
    document.getElementById("modalHeader").innerText = "You Guessed Correctly!";
    document.querySelector(".btn").innerText = "VIEW RESULT";
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".guess").classList.add("locked");
    document.querySelector(".guess").value = `You guessed it in ${currGuess+1} tries!`;
    document.querySelector(".guess").readOnly = true;
    document.getElementById("playAgain").classList.remove("hidden");
    document.getElementById("playAgain").setAttribute("onclick", "window.location.reload();")
}

function lose(){
    canPlay = false;
    document.getElementById("playerImage").style.filter = "brightness(100%)";
    document.getElementById("modalName").innerText = actual.name;
    document.getElementById("modalHeader").innerText = "Sorry, the correct player was";
    document.querySelector(".btn").innerText = "VIEW RESULT";
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".guess").classList.add("locked");
    document.querySelector(".guess").value = "Game Over";
    document.querySelector(".guess").readOnly = true;
    document.getElementById("playAgain").classList.remove("hidden");
    document.getElementById("playAgain").setAttribute("onclick", "window.location.reload();")
}























































function StevenAdams() {
    return {
      name: "Steven Adams",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 28,
      number: "4",
      ppg: 9.3,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991235.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function LaMarcusAldridge() {
    return {
      name: "LaMarcus Aldridge",
      position: "C-F",
      height: `6'11"`,
      heightInches: 83,
      age: 36,
      number: "21",
      ppg: 19.1,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2983.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function KyleAnderson() {
    return {
      name: "Kyle Anderson",
      position: "F-G",
      height: `6'9"`,
      heightInches: 81,
      age: 28,
      number: "1",
      ppg: 6.7,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2993874.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function GiannisAntetokounmpo() {
    return {
      name: "Giannis Antetokounmpo",
      position: "F",
      height: `6'11"`,
      heightInches: 83,
      age: 27,
      number: "34",
      ppg: 21.8,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function CarmeloAnthony() {
    return {
      name: "Carmelo Anthony",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 37,
      number: "7",
      ppg: 22.5,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1975.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function DJAugustin() {
    return {
      name: "D.J. Augustin",
      position: "G",
      height: `5'11"`,
      heightInches: 71,
      age: 34,
      number: "4",
      ppg: 9.5,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3415.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function HarrisonBarnes() {
    return {
      name: "Harrison Barnes",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 29,
      number: "40",
      ppg: 14.1,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6578.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function WillBarton() {
    return {
      name: "Will Barton",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 31,
      number: "5",
      ppg: 11.6,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6579.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function NicolasBatum() {
    return {
      name: "Nicolas Batum",
      position: "G-F",
      height: `6'8"`,
      heightInches: 80,
      age: 33,
      number: "33",
      ppg: 11.1,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3416.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function KentBazemore() {
    return {
      name: "Kent Bazemore",
      position: "G-F",
      height: `6'4"`,
      heightInches: 76,
      age: 32,
      number: "9",
      ppg: 8.2,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6637.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function BradleyBeal() {
    return {
      name: "Bradley Beal",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 28,
      number: "3",
      ppg: 22.1,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6580.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function MalikBeasley() {
    return {
      name: "Malik Beasley",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 25,
      number: "5",
      ppg: 10.4,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907822.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function DavisBertans() {
    return {
      name: "Davis Bertans",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 29,
      number: "44",
      ppg: 8.2,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6426.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function PatrickBeverley() {
    return {
      name: "Patrick Beverley",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 33,
      number: "22",
      ppg: 8.8,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3964.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function BismackBiyombo() {
    return {
      name: "Bismack Biyombo",
      position: "C",
      height: `6'8"`,
      heightInches: 80,
      age: 29,
      number: "18",
      ppg: 5.2,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6427.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function NemanjaBjelica() {
    return {
      name: "Nemanja Bjelica",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 33,
      number: "8",
      ppg: 7.6,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4269.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function EricBledsoe() {
    return {
      name: "Eric Bledsoe",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 32,
      number: "5",
      ppg: 13.7,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4238.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function BojanBogdanovic() {
    return {
      name: "Bojan Bogdanovic",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 33,
      number: "44",
      ppg: 15,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3593.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function DevinBooker() {
    return {
      name: "Devin Booker",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 25,
      number: "1",
      ppg: 23.5,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136193.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function AveryBradley() {
    return {
      name: "Avery Bradley",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 31,
      number: "20",
      ppg: 11,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4240.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function MalcolmBrogdon() {
    return {
      name: "Malcolm Brogdon",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 29,
      number: "7",
      ppg: 15.5,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2566769.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function JaylenBrown() {
    return {
      name: "Jaylen Brown",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 25,
      number: "7",
      ppg: 16.5,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function ReggieBullock() {
    return {
      name: "Reggie Bullock",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 31,
      number: "25",
      ppg: 7.8,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528779.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function TreyBurke() {
    return {
      name: "Trey Burke",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 29,
      number: "3",
      ppg: 9.6,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2579260.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function AlecBurks() {
    return {
      name: "Alec Burks",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 30,
      number: "18",
      ppg: 10.6,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6429.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function JimmyButler() {
    return {
      name: "Jimmy Butler",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 32,
      number: "22",
      ppg: 17.7,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function KentaviousCaldwellPope() {
    return {
      name: "Kentavious Caldwell-Pope",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 29,
      number: "1",
      ppg: 11.6,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581018.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function ClintCapela() {
    return {
      name: "Clint Capela",
      position: "C",
      height: `6'10"`,
      heightInches: 82,
      age: 27,
      number: "15",
      ppg: 12.4,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102529.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function MarqueseChriss() {
    return {
      name: "Marquese Chriss",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 24,
      number: "35",
      ppg: 7.6,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907487.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function MikeConley() {
    return {
      name: "Mike Conley",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 34,
      number: "11",
      ppg: 14.8,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3195.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function PatConnaughton() {
    return {
      name: "Pat Connaughton",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 29,
      number: "24",
      ppg: 5.9,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2578239.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function RobertCovington() {
    return {
      name: "Robert Covington",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 31,
      number: "23",
      ppg: 11.6,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490620.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function JaeCrowder() {
    return {
      name: "Jae Crowder",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 31,
      number: "99",
      ppg: 9.6,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6581.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function StephenCurry() {
    return {
      name: "Stephen Curry",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 34,
      number: "30",
      ppg: 24.3,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function AnthonyDavis() {
    return {
      name: "Anthony Davis",
      position: "F-C",
      height: `6'10"`,
      heightInches: 82,
      age: 29,
      number: "3",
      ppg: 23.8,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function EdDavis() {
    return {
      name: "Ed Davis",
      position: "C-F",
      height: `6'9"`,
      heightInches: 81,
      age: 32,
      number: "21",
      ppg: 5.9,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4259.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function DewayneDedmon() {
    return {
      name: "Dewayne Dedmon",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 32,
      number: "21",
      ppg: 6.4,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2580913.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function DeMarDeRozan() {
    return {
      name: "DeMar DeRozan",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 32,
      number: "11",
      ppg: 20.8,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3978.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function GorguiDieng() {
    return {
      name: "Gorgui Dieng",
      position: "C",
      height: `6'10"`,
      heightInches: 82,
      age: 32,
      number: "10",
      ppg: 7.5,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2534781.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function SpencerDinwiddie() {
    return {
      name: "Spencer Dinwiddie",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 29,
      number: "26",
      ppg: 13,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2580782.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function GoranDragic() {
    return {
      name: "Goran Dragic",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 35,
      number: "9",
      ppg: 13.7,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3423.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function WayneEllington() {
    return {
      name: "Wayne Ellington",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 34,
      number: "2",
      ppg: 8,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3981.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function JoelEmbiid() {
    return {
      name: "Joel Embiid",
      position: "C-F",
      height: `7'0"`,
      heightInches: 84,
      age: 28,
      number: "21",
      ppg: 26,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function DerrickFavors() {
    return {
      name: "Derrick Favors",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 30,
      number: "15",
      ppg: 10.6,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4257.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function DorianFinneySmith() {
    return {
      name: "Dorian Finney-Smith",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 28,
      number: "10",
      ppg: 8.2,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2578185.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function BrynForbes() {
    return {
      name: "Bryn Forbes",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 28,
      number: "6",
      ppg: 9.1,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2994526.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function EvanFournier() {
    return {
      name: "Evan Fournier",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 29,
      number: "13",
      ppg: 14.3,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6588.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function RudyGay() {
    return {
      name: "Rudy Gay",
      position: "F-G",
      height: `6'8"`,
      heightInches: 80,
      age: 35,
      number: "8",
      ppg: 16.3,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3005.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function PaulGeorge() {
    return {
      name: "Paul George",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 31,
      number: "13",
      ppg: 20.4,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4251.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function TajGibson() {
    return {
      name: "Taj Gibson",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 36,
      number: "67",
      ppg: 9,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3986.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function RudyGobert() {
    return {
      name: "Rudy Gobert",
      position: "C",
      height: `7'1"`,
      heightInches: 85,
      age: 29,
      number: "27",
      ppg: 12.4,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032976.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function AaronGordon() {
    return {
      name: "Aaron Gordon",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 26,
      number: "50",
      ppg: 13,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064290.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function EricGordon() {
    return {
      name: "Eric Gordon",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 33,
      number: "10",
      ppg: 16.4,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3431.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function JeramiGrant() {
    return {
      name: "Jerami Grant",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 28,
      number: "9",
      ppg: 11.4,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991070.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function DannyGreen() {
    return {
      name: "Danny Green",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 34,
      number: "14",
      ppg: 8.7,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3988.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function DraymondGreen() {
    return {
      name: "Draymond Green",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 32,
      number: "23",
      ppg: 8.7,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function BlakeGriffin() {
    return {
      name: "Blake Griffin",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 33,
      number: "2",
      ppg: 19.8,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3989.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function TimHardawayJr() {
    return {
      name: "Tim Hardaway Jr.",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 30,
      number: "11",
      ppg: 13.9,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528210.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function JamesHarden() {
    return {
      name: "James Harden",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 32,
      number: "1",
      ppg: 24.9,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function MauriceHarkless() {
    return {
      name: "Maurice Harkless",
      position: "F-G",
      height: `6'7"`,
      heightInches: 79,
      age: 28,
      number: "8",
      ppg: 6.9,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6591.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function MontrezlHarrell() {
    return {
      name: "Montrezl Harrell",
      position: "F-C",
      height: `6'7"`,
      heightInches: 79,
      age: 28,
      number: "8",
      ppg: 12.9,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991055.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function GaryHarris() {
    return {
      name: "Gary Harris",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 27,
      number: "14",
      ppg: 11.8,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2999547.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function JoeHarris() {
    return {
      name: "Joe Harris",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 30,
      number: "12",
      ppg: 11.1,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528794.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function TobiasHarris() {
    return {
      name: "Tobias Harris",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 29,
      number: "12",
      ppg: 16.4,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6440.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function UdonisHaslem() {
    return {
      name: "Udonis Haslem",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 41,
      number: "40",
      ppg: 7.5,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2184.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function GordonHayward() {
    return {
      name: "Gordon Hayward",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 32,
      number: "20",
      ppg: 15.6,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4249.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function JuanchoHernangomez() {
    return {
      name: "Juancho Hernangomez",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 26,
      number: "41",
      ppg: 5.4,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4017839.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function WillyHernangomez() {
    return {
      name: "Willy Hernangomez",
      position: "C-F",
      height: `6'11"`,
      heightInches: 83,
      age: 27,
      number: "9",
      ppg: 7.4,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2999409.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function BuddyHield() {
    return {
      name: "Buddy Hield",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 29,
      number: "24",
      ppg: 15.9,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990984.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function GeorgeHill() {
    return {
      name: "George Hill",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 35,
      number: "3",
      ppg: 10.7,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3438.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function JrueHoliday() {
    return {
      name: "Jrue Holiday",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 31,
      number: "21",
      ppg: 16.2,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3995.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function RichaunHolmes() {
    return {
      name: "Richaun Holmes",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 28,
      number: "22",
      ppg: 9.6,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2993370.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function RodneyHood() {
    return {
      name: "Rodney Hood",
      position: "G-F",
      height: `6'8"`,
      heightInches: 80,
      age: 29,
      number: "22",
      ppg: 10.4,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581177.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function AlHorford() {
    return {
      name: "Al Horford",
      position: "C-F",
      height: `6'9"`,
      heightInches: 81,
      age: 35,
      number: "42",
      ppg: 13.7,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3213.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function DanuelHouseJr() {
    return {
      name: "Danuel House Jr.",
      position: "F-G",
      height: `6'6"`,
      heightInches: 78,
      age: 28,
      number: "25",
      ppg: 8.5,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991155.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function DwightHoward() {
    return {
      name: "Dwight Howard",
      position: "C-F",
      height: `6'10"`,
      heightInches: 82,
      age: 36,
      number: "39",
      ppg: 15.7,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2384.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function SergeIbaka() {
    return {
      name: "Serge Ibaka",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 32,
      number: "25",
      ppg: 12.1,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3439.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function AndreIguodala() {
    return {
      name: "Andre Iguodala",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 38,
      number: "9",
      ppg: 11.4,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2386.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function BrandonIngram() {
    return {
      name: "Brandon Ingram",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 24,
      number: "14",
      ppg: 18.5,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3913176.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function KyrieIrving() {
    return {
      name: "Kyrie Irving",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 30,
      number: "11",
      ppg: 23.1,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function ReggieJackson() {
    return {
      name: "Reggie Jackson",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 32,
      number: "1",
      ppg: 13.1,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6443.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function LeBronJames() {
    return {
      name: "LeBron James",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 37,
      number: "6",
      ppg: 27.1,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function StanleyJohnson() {
    return {
      name: "Stanley Johnson",
      position: "F-G",
      height: `6'6"`,
      heightInches: 78,
      age: 25,
      number: "14",
      ppg: 6.3,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134881.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function NikolaJokic() {
    return {
      name: "Nikola Jokic",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 27,
      number: "15",
      ppg: 19.7,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3112335.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function DamianJones() {
    return {
      name: "Damian Jones",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 26,
      number: "30",
      ppg: 5.6,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064559.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function DerrickJonesJr() {
    return {
      name: "Derrick Jones Jr.",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 25,
      number: "5",
      ppg: 6.5,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3936099.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function TyusJones() {
    return {
      name: "Tyus Jones",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 25,
      number: "21",
      ppg: 6.2,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3135046.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function DeAndreJordan() {
    return {
      name: "DeAndre Jordan",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 33,
      number: "9",
      ppg: 9.1,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3442.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function CoryJoseph() {
    return {
      name: "Cory Joseph",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 30,
      number: "18",
      ppg: 7.1,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6446.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function JeremyLamb() {
    return {
      name: "Jeremy Lamb",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 29,
      number: "26",
      ppg: 10.1,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6603.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function ZachLaVine() {
    return {
      name: "Zach LaVine",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 27,
      number: "8",
      ppg: 19.8,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064440.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function ZachCollins() {
  return {
    name: "Zach Collins",
    position: "F-C",
    height: `6'11"`,
    heightInches: 83,
    age: 24,
    number: "23",
    ppg: 6,
    fullTeamName: "San Antonio Spurs",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066650.png",
    team: "SAS",
    conference: "West",
    division: "SW"
  };
}

function JonathanIsaac() {
  return {
    name: "Jonathan Isaac",
    position: "F",
    height: `6'10"`,
    heightInches: 82,
    age: 24,
    number: "1",
    ppg: 9.3,
    fullTeamName: "Orlando Magic",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065654.png",
    team: "ORL",
    conference: "East",
    division: "SE"
  };
}

function DavonReed() {
  return {
    name: "Davon Reed",
    position: "G",
    height: `6'5"`,
    heightInches: 77,
    age: 26,
    number: "9",
    ppg: 3.6,
    fullTeamName: "Denver Nuggets",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059262.png",
    team: "DEN",
    conference: "West",
    division: "NW"
  };
}

function MelvinFrazierJr() {
  return {
    name: "Melvin Frazier Jr.",
    position: "G-F",
    height: `6'5"`,
    heightInches: 77,
    age: 25,
    number: "6",
    ppg: 2.7,
    fullTeamName: "Oklahoma City Thunder",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3913546.png",
    team: "OKC",
    conference: "West",
    division: "NW"
  };
}

function HaywoodHighsmith() {
  return {
    name: "Haywood Highsmith",
    position: "F",
    height: `6'4"`,
    heightInches: 76,
    age: 25,
    number: "24",
    ppg: 2.2,
    fullTeamName: "Miami Heat",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4291678.png",
    team: "MIA",
    conference: "East",
    division: "SE"
  };
}

function AdmiralSchofield() {
  return {
    name: "Admiral Schofield",
    position: "F",
    height: `6'5"`,
    heightInches: 77,
    age: 25,
    number: "25",
    ppg: 3.5,
    fullTeamName: "Orlando Magic",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3918423.png",
    team: "ORL",
    conference: "East",
    division: "SE"
  };
}

function ThanasisAntetokounmpo() {
  return {
    name: "Thanasis Antetokounmpo",
    position: "F",
    height: `6'6"`,
    heightInches: 78,
    age: 29,
    number: "43",
    ppg: 3.1,
    fullTeamName: "Milwaukee Bucks",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102533.png",
    team: "MIL",
    conference: "East",
    division: "Cen."
  };
}

function LucaVildoza() {
  return {
    name: "Luca Vildoza",
    position: "G",
    height: `6'3"`,
    heightInches: 75,
    age: 26,
    number: "6",
    ppg: 0,
    fullTeamName: "Milwaukee Bucks",
    img: "null",
    team: "MIL",
    conference: "East",
    division: "Cen."
  };
}

function JasonPreston() {
  return {
    name: "Jason Preston",
    position: "G",
    height: `6'3"`,
    heightInches: 75,
    age: 22,
    number: "17",
    ppg: 0,
    fullTeamName: "LA Clippers",
    img: "null",
    team: "LAC",
    conference: "West",
    division: "Pac."
  };
}

function JakeLayman() {
    return {
      name: "Jake Layman",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 28,
      number: "10",
      ppg: 4.8,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2982268.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function AlexLen() {
    return {
      name: "Alex Len",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 28,
      number: "25",
      ppg: 7.7,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2596107.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function KawhiLeonard() {
    return {
      name: "Kawhi Leonard",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 30,
      number: "2",
      ppg: 19.2,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6450.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function CarisLeVert() {
    return {
      name: "Caris LeVert",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 27,
      number: "3",
      ppg: 14.6,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991043.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function KevonLooney() {
    return {
      name: "Kevon Looney",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 26,
      number: "5",
      ppg: 4.7,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function BrookLopez() {
    return {
      name: "Brook Lopez",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 34,
      number: "11",
      ppg: 16.4,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3448.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function RobinLopez() {
    return {
      name: "Robin Lopez",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 34,
      number: "33",
      ppg: 8.7,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3447.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function KyleLowry() {
    return {
      name: "Kyle Lowry",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 36,
      number: "7",
      ppg: 14.8,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3012.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function TimotheLuwawuCabarrot() {
    return {
      name: "Timothe Luwawu-Cabarrot",
      position: "G-F",
      height: `6'7"`,
      heightInches: 79,
      age: 26,
      number: "7",
      ppg: 5.9,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3893019.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function TreyLyles() {
    return {
      name: "Trey Lyles",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 26,
      number: "41",
      ppg: 7.8,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136196.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function BobanMarjanovic() {
    return {
      name: "Boban Marjanovic",
      position: "C",
      height: `7'3"`,
      heightInches: 87,
      age: 33,
      number: "51",
      ppg: 5.9,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4376.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function WesleyMatthews() {
    return {
      name: "Wesley Matthews",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 35,
      number: "23",
      ppg: 12.2,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4032.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function CJMcCollum() {
    return {
      name: "CJ McCollum",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 30,
      number: "3",
      ppg: 19.2,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490149.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function TJMcConnell() {
    return {
      name: "T.J. McConnell",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 30,
      number: "9",
      ppg: 6.9,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2530530.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function DougMcDermott() {
    return {
      name: "Doug McDermott",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 30,
      number: "17",
      ppg: 9.2,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528588.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function RodneyMcGruder() {
    return {
      name: "Rodney McGruder",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 30,
      number: "17",
      ppg: 5.8,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2488826.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function BenMcLemore() {
    return {
      name: "Ben McLemore",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 29,
      number: "23",
      ppg: 9,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2578213.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function KhrisMiddleton() {
    return {
      name: "Khris Middleton",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 30,
      number: "22",
      ppg: 17.1,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6609.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function PattyMills() {
    return {
      name: "Patty Mills",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 33,
      number: "8",
      ppg: 9.2,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4004.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function PaulMillsap() {
    return {
      name: "Paul Millsap",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 37,
      number: "8",
      ppg: 13.4,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3015.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function MarcusMorrisSr() {
    return {
      name: "Marcus Morris Sr.",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 32,
      number: "8",
      ppg: 12.4,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6462.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function MarkieffMorris() {
    return {
      name: "Markieff Morris",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 32,
      number: "8",
      ppg: 10.9,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6461.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function JamalMurray() {
    return {
      name: "Jamal Murray",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 25,
      number: "27",
      ppg: 16.3,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3936299.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function MikeMuscala() {
    return {
      name: "Mike Muscala",
      position: "F-C",
      height: `6'10"`,
      heightInches: 82,
      age: 30,
      number: "33",
      ppg: 6.2,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490089.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function LarryNanceJr() {
    return {
      name: "Larry Nance Jr.",
      position: "F-C",
      height: `6'7"`,
      heightInches: 79,
      age: 29,
      number: "22",
      ppg: 8.1,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2580365.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function RaulNeto() {
    return {
      name: "Raul Neto",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 29,
      number: "19",
      ppg: 6,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2968361.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function GeorgesNiang() {
    return {
      name: "Georges Niang",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 28,
      number: "20",
      ppg: 6.1,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990969.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function NerlensNoel() {
    return {
      name: "Nerlens Noel",
      position: "C-F",
      height: `6'11"`,
      heightInches: 83,
      age: 28,
      number: "3",
      ppg: 7.3,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991280.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function JusufNurkic() {
    return {
      name: "Jusuf Nurkic",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 27,
      number: "27",
      ppg: 12.2,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102530.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function VictorOladipo() {
    return {
      name: "Victor Oladipo",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 29,
      number: "4",
      ppg: 17.4,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2527963.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function KellyOlynyk() {
    return {
      name: "Kelly Olynyk",
      position: "F-C",
      height: `6'11"`,
      heightInches: 83,
      age: 31,
      number: "13",
      ppg: 10.1,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2489663.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function KellyOubreJr() {
    return {
      name: "Kelly Oubre Jr.",
      position: "F-G",
      height: `6'6"`,
      heightInches: 78,
      age: 26,
      number: "12",
      ppg: 12,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133603.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function ChrisPaul() {
    return {
      name: "Chris Paul",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 36,
      number: "3",
      ppg: 18.1,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2779.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function CameronPayne() {
    return {
      name: "Cameron Payne",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 27,
      number: "15",
      ppg: 7.6,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064230.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function ElfridPayton() {
    return {
      name: "Elfrid Payton",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 28,
      number: "2",
      ppg: 10.1,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2583639.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function MasonPlumlee() {
    return {
      name: "Mason Plumlee",
      position: "F-C",
      height: `6'11"`,
      heightInches: 83,
      age: 32,
      number: "24",
      ppg: 8.3,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2488653.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function JakobPoeltl() {
    return {
      name: "Jakob Poeltl",
      position: "C",
      height: `7'1"`,
      heightInches: 85,
      age: 26,
      number: "25",
      ppg: 7.3,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134908.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function OttoPorterJr() {
    return {
      name: "Otto Porter Jr.",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 28,
      number: "32",
      ppg: 10.6,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2594922.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function BobbyPortis() {
    return {
      name: "Bobby Portis",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 27,
      number: "9",
      ppg: 11.1,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064482.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function DwightPowell() {
    return {
      name: "Dwight Powell",
      position: "F-C",
      height: `6'10"`,
      heightInches: 82,
      age: 30,
      number: "7",
      ppg: 7.7,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2531367.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function NormanPowell() {
    return {
      name: "Norman Powell",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 28,
      number: "24",
      ppg: 11.3,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2595516.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function TaureanPrince() {
    return {
      name: "Taurean Prince",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 28,
      number: "12",
      ppg: 10.5,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990962.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function JuliusRandle() {
    return {
      name: "Julius Randle",
      position: "F-C",
      height: `6'8"`,
      heightInches: 80,
      age: 27,
      number: "30",
      ppg: 17.7,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064514.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function JoshRichardson() {
    return {
      name: "Josh Richardson",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 28,
      number: "7",
      ppg: 12,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581190.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function AustinRivers() {
    return {
      name: "Austin Rivers",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 29,
      number: "25",
      ppg: 8.8,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6617.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function RajonRondo() {
    return {
      name: "Rajon Rondo",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 36,
      number: "1",
      ppg: 9.8,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3026.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function TerrenceRoss() {
    return {
      name: "Terrence Ross",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 31,
      number: "31",
      ppg: 11.2,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6619.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function TerryRozier() {
    return {
      name: "Terry Rozier",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 28,
      number: "3",
      ppg: 12.7,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3074752.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function RickyRubio() {
    return {
      name: "Ricky Rubio",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 31,
      number: "99",
      ppg: 11.1,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4011.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function DomantasSabonis() {
    return {
      name: "Domantas Sabonis",
      position: "F-C",
      height: `6'11"`,
      heightInches: 83,
      age: 25,
      number: "10",
      ppg: 14.4,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155942.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function DarioSaric() {
    return {
      name: "Dario Saric",
      position: "F-C",
      height: `6'10"`,
      heightInches: 82,
      age: 28,
      number: "20",
      ppg: 11.7,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032978.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function TomasSatoransky() {
    return {
      name: "Tomas Satoransky",
      position: "G",
      height: `6'7"`,
      heightInches: 79,
      age: 30,
      number: "31",
      ppg: 6.9,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6621.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function DennisSchroder() {
    return {
      name: "Dennis Schroder",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 28,
      number: "17",
      ppg: 14.2,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032979.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function PascalSiakam() {
    return {
      name: "Pascal Siakam",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 28,
      number: "43",
      ppg: 15.7,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3149673.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function BenSimmons() {
    return {
      name: "Ben Simmons",
      position: "G-F",
      height: `6'11"`,
      heightInches: 83,
      age: 25,
      number: "10",
      ppg: 15.9,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907387.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function MarcusSmart() {
    return {
      name: "Marcus Smart",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 28,
      number: "36",
      ppg: 10.5,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990992.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function IshSmith() {
    return {
      name: "Ish Smith",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 33,
      number: "4",
      ppg: 7.6,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4305.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function TonySnell() {
    return {
      name: "Tony Snell",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 30,
      number: "21",
      ppg: 6.1,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528353.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function IsaiahThomas() {
    return {
      name: "Isaiah Thomas",
      position: "G",
      height: `5'9"`,
      heightInches: 69,
      age: 33,
      number: "4",
      ppg: 17.7,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6472.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function TristanThompson() {
    return {
      name: "Tristan Thompson",
      position: "C-F",
      height: `6'9"`,
      heightInches: 81,
      age: 31,
      number: "3",
      ppg: 9,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6474.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function KarlAnthonyTowns() {
    return {
      name: "Karl-Anthony Towns",
      position: "C-F",
      height: `6'11"`,
      heightInches: 83,
      age: 26,
      number: "32",
      ppg: 23.2,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136195.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function MylesTurner() {
    return {
      name: "Myles Turner",
      position: "C-F",
      height: `6'11"`,
      heightInches: 83,
      age: 26,
      number: "33",
      ppg: 12.7,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133628.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function JonasValanciunas() {
    return {
      name: "Jonas Valanciunas",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 29,
      number: "17",
      ppg: 13.4,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6477.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function FredVanVleet() {
    return {
      name: "Fred VanVleet",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 28,
      number: "23",
      ppg: 13.7,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991230.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function NikolaVucevic() {
    return {
      name: "Nikola Vucevic",
      position: "C",
      height: `6'10"`,
      heightInches: 82,
      age: 31,
      number: "9",
      ppg: 16.9,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6478.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function KembaWalker() {
    return {
      name: "Kemba Walker",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 31,
      number: "8",
      ppg: 19.5,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function TJWarren() {
    return {
      name: "T.J. Warren",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 28,
      number: "1",
      ppg: 15.5,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2982334.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function AndrewWiggins() {
    return {
      name: "Andrew Wiggins",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 27,
      number: "22",
      ppg: 19.3,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059319.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function LouWilliams() {
    return {
      name: "Lou Williams",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 35,
      number: "6",
      ppg: 13.9,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2799.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function JustiseWinslow() {
    return {
      name: "Justise Winslow",
      position: "F-G",
      height: `6'6"`,
      heightInches: 78,
      age: 26,
      number: "26",
      ppg: 8.4,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3135047.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function ThaddeusYoung() {
    return {
      name: "Thaddeus Young",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 33,
      number: "21",
      ppg: 12.8,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3244.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function IvicaZubac() {
    return {
      name: "Ivica Zubac",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 25,
      number: "40",
      ppg: 8.3,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4017837.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function DamionLee() {
    return {
      name: "Damion Lee",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 29,
      number: "1",
      ppg: 8.2,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2595209.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function RyanArcidiacono() {
    return {
      name: "Ryan Arcidiacono",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 28,
      number: "51",
      ppg: 4.6,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991047.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function AlexCaruso() {
    return {
      name: "Alex Caruso",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 28,
      number: "6",
      ppg: 6.2,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991350.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function DavidNwaba() {
    return {
      name: "David Nwaba",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 29,
      number: "2",
      ppg: 6.8,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3062744.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function BamAdebayo() {
    return {
      name: "Bam Adebayo",
      position: "C-F",
      height: `6'9"`,
      heightInches: 81,
      age: 24,
      number: "13",
      ppg: 13.5,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066261.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function JarrettAllen() {
    return {
      name: "Jarrett Allen",
      position: "C",
      height: `6'10"`,
      heightInches: 82,
      age: 24,
      number: "31",
      ppg: 11.6,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066328.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function OGAnunoby() {
    return {
      name: "OG Anunoby",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 24,
      number: "3",
      ppg: 10.4,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934719.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function LonzoBall() {
    return {
      name: "Lonzo Ball",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 24,
      number: "2",
      ppg: 11.9,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066421.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function KhemBirch() {
    return {
      name: "Khem Birch",
      position: "C",
      height: `6'9"`,
      heightInches: 81,
      age: 29,
      number: "24",
      ppg: 5.2,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2578240.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function BogdanBogdanovic() {
    return {
      name: "Bogdan Bogdanovic",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 29,
      number: "13",
      ppg: 14.2,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3037789.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function ChrisBoucher() {
    return {
      name: "Chris Boucher",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 29,
      number: "25",
      ppg: 9,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3948153.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function TonyBradley() {
    return {
      name: "Tony Bradley",
      position: "C-F",
      height: `6'10"`,
      heightInches: 82,
      age: 24,
      number: "13",
      ppg: 4.6,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065673.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function DillonBrooks() {
    return {
      name: "Dillon Brooks",
      position: "G-F",
      height: `6'7"`,
      heightInches: 79,
      age: 26,
      number: "24",
      ppg: 14.5,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155526.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function ThomasBryant() {
    return {
      name: "Thomas Bryant",
      position: "C-F",
      height: `6'10"`,
      heightInches: 82,
      age: 24,
      number: "13",
      ppg: 10.2,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934723.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function JohnCollins() {
    return {
      name: "John Collins",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 24,
      number: "20",
      ppg: 16.5,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3908845.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function DeAaronFox() {
    return {
      name: "De'Aaron Fox",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 24,
      number: "5",
      ppg: 19.1,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066259.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function MarkelleFultz() {
    return {
      name: "Markelle Fultz",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 23,
      number: "20",
      ppg: 10.9,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066636.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function JoshHart() {
    return {
      name: "Josh Hart",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 27,
      number: "11",
      ppg: 9.9,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3062679.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function FrankJackson() {
    return {
      name: "Frank Jackson",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 23,
      number: "5",
      ppg: 8.5,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065651.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function JoshJackson() {
    return {
      name: "Josh Jackson",
      position: "G-F",
      height: `6'8"`,
      heightInches: 80,
      age: 25,
      number: "55",
      ppg: 11.3,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066297.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function LukeKennard() {
    return {
      name: "Luke Kennard",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 25,
      number: "5",
      ppg: 10,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3913174.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function MaxiKleber() {
    return {
      name: "Maxi Kleber",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 30,
      number: "42",
      ppg: 7.1,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2960236.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function FurkanKorkmaz() {
    return {
      name: "Furkan Korkmaz",
      position: "G-F",
      height: `6'7"`,
      heightInches: 79,
      age: 24,
      number: "30",
      ppg: 7.9,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3929325.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function LukeKornet() {
    return {
      name: "Luke Kornet",
      position: "C-F",
      height: `7'2"`,
      heightInches: 86,
      age: 26,
      number: "40",
      ppg: 5.5,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064560.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function KyleKuzma() {
    return {
      name: "Kyle Kuzma",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 26,
      number: "33",
      ppg: 15.6,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134907.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function LauriMarkkanen() {
    return {
      name: "Lauri Markkanen",
      position: "F-C",
      height: `6'11"`,
      heightInches: 83,
      age: 24,
      number: "24",
      ppg: 15.4,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066336.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function DonovanMitchell() {
    return {
      name: "Donovan Mitchell",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 25,
      number: "45",
      ppg: 23.9,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3908809.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function MalikMonk() {
    return {
      name: "Malik Monk",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 24,
      number: "11",
      ppg: 10.3,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066262.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function MonteMorris() {
    return {
      name: "Monte Morris",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 26,
      number: "11",
      ppg: 10.5,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059310.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function FrankNtilikina() {
    return {
      name: "Frank Ntilikina",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 23,
      number: "21",
      ppg: 5.2,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4230547.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function RoyceONeale() {
    return {
      name: "Royce O'Neale",
      position: "F",
      height: `6'5"`,
      heightInches: 77,
      age: 28,
      number: "23",
      ppg: 6.2,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2583632.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function CediOsman() {
    return {
      name: "Cedi Osman",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 27,
      number: "16",
      ppg: 10,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3893016.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function DanielTheis() {
    return {
      name: "Daniel Theis",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 30,
      number: "27",
      ppg: 7.6,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2451037.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function DerrickWhite() {
    return {
      name: "Derrick White",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 27,
      number: "9",
      ppg: 11.5,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3078576.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function GraysonAllen() {
    return {
      name: "Grayson Allen",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 26,
      number: "7",
      ppg: 9.4,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3135045.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function DeandreAyton() {
    return {
      name: "Deandre Ayton",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 23,
      number: "22",
      ppg: 16.3,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278129.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function MarvinBagleyIII() {
    return {
      name: "Marvin Bagley III",
      position: "F",
      height: `6'11"`,
      heightInches: 83,
      age: 23,
      number: "35",
      ppg: 13.6,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277848.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function MoBamba() {
    return {
      name: "Mo Bamba",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 23,
      number: "5",
      ppg: 7.7,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277919.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function KeitaBatesDiop() {
    return {
      name: "Keita Bates-Diop",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 26,
      number: "31",
      ppg: 5.2,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136779.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function IsaacBonga() {
    return {
      name: "Isaac Bonga",
      position: "G",
      height: `6'8"`,
      heightInches: 80,
      age: 22,
      number: "17",
      ppg: 3.1,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4348697.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function MikalBridges() {
    return {
      name: "Mikal Bridges",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 25,
      number: "25",
      ppg: 11.3,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3147657.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function BruceBrown() {
    return {
      name: "Bruce Brown",
      position: "G-F",
      height: `6'4"`,
      heightInches: 76,
      age: 25,
      number: "1",
      ppg: 7.6,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065670.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function TroyBrownJr() {
    return {
      name: "Troy Brown Jr.",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 22,
      number: "7",
      ppg: 6.4,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278508.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function JalenBrunson() {
    return {
      name: "Jalen Brunson",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 25,
      number: "13",
      ppg: 11.9,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934672.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function JevonCarter() {
    return {
      name: "Jevon Carter",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 26,
      number: "5",
      ppg: 4.4,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133635.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function WendellCarterJr() {
    return {
      name: "Wendell Carter Jr.",
      position: "C-F",
      height: `6'10"`,
      heightInches: 82,
      age: 23,
      number: "34",
      ppg: 12.2,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277847.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function GaryClark() {
    return {
      name: "Gary Clark",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 27,
      number: "12",
      ppg: 3.1,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3132042.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function HamidouDiallo() {
    return {
      name: "Hamidou Diallo",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 23,
      number: "6",
      ppg: 8.4,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4080610.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function LukaDoncic() {
    return {
      name: "Luka Doncic",
      position: "F-G",
      height: `6'7"`,
      heightInches: 79,
      age: 23,
      number: "77",
      ppg: 26.4,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function WenyenGabriel() {
    return {
      name: "Wenyen Gabriel",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 25,
      number: "35",
      ppg: 3.6,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066264.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function ShaiGilgeousAlexander() {
    return {
      name: "Shai Gilgeous-Alexander",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 23,
      number: "2",
      ppg: 18.2,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278073.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function DevonteGraham() {
    return {
      name: "Devonte' Graham",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 27,
      number: "4",
      ppg: 12.8,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133601.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function IsaiahHartenstein() {
    return {
      name: "Isaiah Hartenstein",
      position: "C-F",
      height: `7'0"`,
      heightInches: 84,
      age: 23,
      number: "55",
      ppg: 5.8,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4222252.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function AaronHoliday() {
    return {
      name: "Aaron Holiday",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 25,
      number: "4",
      ppg: 7.3,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3922230.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function KevinHuerter() {
    return {
      name: "Kevin Huerter",
      position: "G-F",
      height: `6'7"`,
      heightInches: 79,
      age: 23,
      number: "3",
      ppg: 11.4,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066372.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function JarenJacksonJr() {
    return {
      name: "Jaren Jackson Jr.",
      position: "F-C",
      height: `6'11"`,
      heightInches: 83,
      age: 22,
      number: "13",
      ppg: 15.8,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277961.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function KevinKnoxII() {
    return {
      name: "Kevin Knox II",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 22,
      number: "5",
      ppg: 7.7,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278075.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function JordanMcLaughlin() {
    return {
      name: "Jordan McLaughlin",
      position: "G",
      height: `5'11"`,
      heightInches: 71,
      age: 26,
      number: "6",
      ppg: 5,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134916.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function ChimezieMetu() {
    return {
      name: "Chimezie Metu",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 25,
      number: "7",
      ppg: 6.1,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3914283.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function ShakeMilton() {
    return {
      name: "Shake Milton",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 25,
      number: "18",
      ppg: 9.7,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3915195.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function SviMykhailiuk() {
    return {
      name: "Svi Mykhailiuk",
      position: "G-F",
      height: `6'7"`,
      heightInches: 79,
      age: 24,
      number: "14",
      ppg: 6.6,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133602.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function KendrickNunn() {
    return {
      name: "Kendrick Nunn",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 26,
      number: "12",
      ppg: 15,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3056247.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function JoshOkogie() {
    return {
      name: "Josh Okogie",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 23,
      number: "20",
      ppg: 6.4,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065663.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function TheoPinson() {
    return {
      name: "Theo Pinson",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 26,
      number: "1",
      ppg: 2.9,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3138154.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function MichaelPorterJr() {
    return {
      name: "Michael Porter Jr.",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 23,
      number: "1",
      ppg: 14.1,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278104.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function DuncanRobinson() {
    return {
      name: "Duncan Robinson",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 28,
      number: "55",
      ppg: 11.9,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3157465.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function MitchellRobinson() {
    return {
      name: "Mitchell Robinson",
      position: "C-F",
      height: `7'0"`,
      heightInches: 84,
      age: 24,
      number: "23",
      ppg: 8.4,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4351852.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function CollinSexton() {
    return {
      name: "Collin Sexton",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 23,
      number: "2",
      ppg: 20,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277811.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function LandryShamet() {
    return {
      name: "Landry Shamet",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 25,
      number: "14",
      ppg: 9,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3914044.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function AnferneeSimons() {
    return {
      name: "Anfernee Simons",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 22,
      number: "1",
      ppg: 10.2,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4351851.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function JarredVanderbilt() {
    return {
      name: "Jarred Vanderbilt",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 23,
      number: "8",
      ppg: 5.4,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278077.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function MoritzWagner() {
    return {
      name: "Moritz Wagner",
      position: "F-C",
      height: `6'11"`,
      heightInches: 83,
      age: 24,
      number: "21",
      ppg: 7.5,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3150844.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function LonnieWalkerIV() {
    return {
      name: "Lonnie Walker IV",
      position: "G-F",
      height: `6'4"`,
      heightInches: 76,
      age: 23,
      number: "1",
      ppg: 9.4,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277890.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function YutaWatanabe() {
    return {
      name: "Yuta Watanabe",
      position: "G-F",
      height: `6'9"`,
      heightInches: 81,
      age: 27,
      number: "18",
      ppg: 3.8,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133838.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function KenrichWilliams() {
    return {
      name: "Kenrich Williams",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 27,
      number: "34",
      ppg: 6.5,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133626.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function RobertWilliamsIII() {
    return {
      name: "Robert Williams III",
      position: "C-F",
      height: `6'9"`,
      heightInches: 81,
      age: 24,
      number: "44",
      ppg: 7.2,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066211.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function TraeYoung() {
    return {
      name: "Trae Young",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 23,
      number: "11",
      ppg: 25.3,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function GaryTrentJr() {
    return {
      name: "Gary Trent Jr.",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 23,
      number: "33",
      ppg: 13.5,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277843.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function ChrisChiozza() {
    return {
      name: "Chris Chiozza",
      position: "G",
      height: `5'11"`,
      heightInches: 71,
      age: 26,
      number: "2",
      ppg: 3.3,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3137795.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function ArnoldasKulboka() {
    return {
      name: "Arnoldas Kulboka",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 24,
      number: "98",
      ppg: 0,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4230551.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function GabeVincent() {
    return {
      name: "Gabe Vincent",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 25,
      number: "2",
      ppg: 6.7,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3137259.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function NickeilAlexanderWalker() {
    return {
      name: "Nickeil Alexander-Walker",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 23,
      number: "6",
      ppg: 9.3,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278039.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function RJBarrett() {
    return {
      name: "RJ Barrett",
      position: "F-G",
      height: `6'6"`,
      heightInches: 78,
      age: 21,
      number: "9",
      ppg: 17.5,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395625.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function DariusBazley() {
    return {
      name: "Darius Bazley",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 21,
      number: "7",
      ppg: 10,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4423545.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function GogaBitadze() {
    return {
      name: "Goga Bitadze",
      position: "C-F",
      height: `7'0"`,
      heightInches: 84,
      age: 22,
      number: "88",
      ppg: 5,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4348700.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function BolBol() {
    return {
      name: "Bol Bol",
      position: "C-F",
      height: `7'2"`,
      heightInches: 86,
      age: 22,
      number: "10",
      ppg: 2.7,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397102.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function IgnasBrazdeikis() {
    return {
      name: "Ignas Brazdeikis",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 23,
      number: "17",
      ppg: 5,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397205.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function BrandonClarke() {
    return {
      name: "Brandon Clarke",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 25,
      number: "15",
      ppg: 10.9,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3906665.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function NicClaxton() {
    return {
      name: "Nic Claxton",
      position: "F-C",
      height: `6'11"`,
      heightInches: 83,
      age: 23,
      number: "33",
      ppg: 7.3,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278067.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function JarrettCulver() {
    return {
      name: "Jarrett Culver",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 23,
      number: "23",
      ppg: 6.6,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277928.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function BrunoFernando() {
    return {
      name: "Bruno Fernando",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 23,
      number: "20",
      ppg: 3.2,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277952.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function DanielGafford() {
    return {
      name: "Daniel Gafford",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 23,
      number: "21",
      ppg: 7.6,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278049.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function DariusGarland() {
    return {
      name: "Darius Garland",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 22,
      number: "10",
      ppg: 17.4,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396907.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function RuiHachimura() {
    return {
      name: "Rui Hachimura",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 24,
      number: "8",
      ppg: 13,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066648.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function JaxsonHayes() {
    return {
      name: "Jaxson Hayes",
      position: "C-F",
      height: `6'11"`,
      heightInches: 83,
      age: 21,
      number: "10",
      ppg: 8.1,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397077.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function TylerHerro() {
    return {
      name: "Tyler Herro",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 22,
      number: "14",
      ppg: 16.7,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395725.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function TalenHortonTucker() {
    return {
      name: "Talen Horton-Tucker",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 21,
      number: "5",
      ppg: 9.3,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396991.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function DeAndreHunter() {
    return {
      name: "De'Andre Hunter",
      position: "F-G",
      height: `6'8"`,
      heightInches: 80,
      age: 24,
      number: "12",
      ppg: 13.2,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065732.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function TyJerome() {
    return {
      name: "Ty Jerome",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 24,
      number: "16",
      ppg: 7.1,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065733.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function CameronJohnson() {
    return {
      name: "Cameron Johnson",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 26,
      number: "23",
      ppg: 10.4,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3138196.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function KeldonJohnson() {
    return {
      name: "Keldon Johnson",
      position: "F-G",
      height: `6'6"`,
      heightInches: 78,
      age: 22,
      number: "3",
      ppg: 14.4,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395723.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function RomeoLangford() {
    return {
      name: "Romeo Langford",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 22,
      number: "35",
      ppg: 3.6,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397008.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function NassirLittle() {
    return {
      name: "Nassir Little",
      position: "F-G",
      height: `6'5"`,
      heightInches: 77,
      age: 22,
      number: "9",
      ppg: 5.8,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395652.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function DidiLouzada() {
    return {
      name: "Didi Louzada",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 22,
      number: "35",
      ppg: 3.6,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4423885.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function TeranceMann() {
    return {
      name: "Terance Mann",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 25,
      number: "14",
      ppg: 7.6,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907823.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function CodyMartin() {
    return {
      name: "Cody Martin",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 26,
      number: "11",
      ppg: 5.8,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3138161.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function JalenMcDaniels() {
    return {
      name: "Jalen McDaniels",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 24,
      number: "6",
      ppg: 6.6,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066731.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function JaMorant() {
    return {
      name: "Ja Morant",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 22,
      number: "12",
      ppg: 21.2,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4279888.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function JaylenNowell() {
    return {
      name: "Jaylen Nowell",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 22,
      number: "4",
      ppg: 8.1,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278541.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function ChumaOkeke() {
    return {
      name: "Chuma Okeke",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 23,
      number: "3",
      ppg: 8.3,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278052.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function JordanPoole() {
    return {
      name: "Jordan Poole",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 22,
      number: "3",
      ppg: 13.7,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277956.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function KevinPorterJr() {
    return {
      name: "Kevin Porter Jr.",
      position: "G-F",
      height: `6'4"`,
      heightInches: 76,
      age: 21,
      number: "3",
      ppg: 13.7,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397140.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function CamReddish() {
    return {
      name: "Cam Reddish",
      position: "F-G",
      height: `6'8"`,
      heightInches: 80,
      age: 22,
      number: "21",
      ppg: 10.5,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395627.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function IsaiahRoby() {
    return {
      name: "Isaiah Roby",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 24,
      number: "22",
      ppg: 9.1,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066392.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function MatisseThybulle() {
    return {
      name: "Matisse Thybulle",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 25,
      number: "22",
      ppg: 4.8,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907498.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function PJWashington() {
    return {
      name: "P.J. Washington",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 23,
      number: "25",
      ppg: 11.8,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278078.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function QuinndaryWeatherspoon() {
    return {
      name: "Quinndary Weatherspoon",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 25,
      number: "15",
      ppg: 2.1,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907358.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function GrantWilliams() {
    return {
      name: "Grant Williams",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 23,
      number: "12",
      ppg: 5.4,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066218.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function ZionWilliamson() {
    return {
      name: "Zion Williamson",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 21,
      number: "1",
      ppg: 25.7,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395628.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function DylanWindler() {
    return {
      name: "Dylan Windler",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 25,
      number: "9",
      ppg: 3.3,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3906786.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function MaxStrus() {
    return {
      name: "Max Strus",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 26,
      number: "31",
      ppg: 8.8,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065778.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function OshaeBrissett() {
    return {
      name: "Oshae Brissett",
      position: "F-G",
      height: `6'7"`,
      heightInches: 79,
      age: 23,
      number: "12",
      ppg: 8.2,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278031.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function CharlieBrownJr() {
    return {
      name: "Charlie Brown Jr.",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 25,
      number: "16",
      ppg: 2,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066508.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function AmirCoffey() {
    return {
      name: "Amir Coffey",
      position: "G-F",
      height: `6'7"`,
      heightInches: 79,
      age: 24,
      number: "7",
      ppg: 6.2,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066387.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function TylerCook() {
    return {
      name: "Tyler Cook",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 24,
      number: "25",
      ppg: 3.8,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066367.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function JohnKonchar() {
    return {
      name: "John Konchar",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 26,
      number: "46",
      ppg: 4.4,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134932.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function ArmoniBrooks() {
    return {
      name: "Armoni Brooks",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 23,
      number: "1",
      ppg: 6.9,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066450.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function DevontaeCacok() {
    return {
      name: "Devontae Cacok",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 25,
      number: "18",
      ppg: 2.5,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3946974.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function DeanWade() {
    return {
      name: "Dean Wade",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 25,
      number: "32",
      ppg: 5.3,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3912848.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function JavonteGreen() {
    return {
      name: "Javonte Green",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 28,
      number: "24",
      ppg: 5,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2596112.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function MattThomas() {
    return {
      name: "Matt Thomas",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 27,
      number: "21",
      ppg: 4,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059311.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function KeljinBlevins() {
    return {
      name: "Keljin Blevins",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 26,
      number: "21",
      ppg: 2.2,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3152335.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function PreciousAchiuwa() {
    return {
      name: "Precious Achiuwa",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 22,
      number: "5",
      ppg: 7.2,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431679.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function ColeAnthony() {
    return {
      name: "Cole Anthony",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 21,
      number: "50",
      ppg: 14.9,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432809.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function DeniAvdija() {
    return {
      name: "Deni Avdija",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 21,
      number: "9",
      ppg: 7.6,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683021.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function UdokaAzubuike() {
    return {
      name: "Udoka Azubuike",
      position: "C-F",
      height: `7'0"`,
      heightInches: 84,
      age: 22,
      number: "20",
      ppg: 3,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066299.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function LaMeloBall() {
    return {
      name: "LaMelo Ball",
      position: "G",
      height: `6'7"`,
      heightInches: 79,
      age: 20,
      number: "2",
      ppg: 18.3,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432816.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function DesmondBane() {
    return {
      name: "Desmond Bane",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 23,
      number: "22",
      ppg: 14,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066320.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function SaddiqBey() {
    return {
      name: "Saddiq Bey",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 23,
      number: "41",
      ppg: 14.3,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397136.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function LeandroBolmaro() {
    return {
      name: "Leandro Bolmaro",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 21,
      number: "9",
      ppg: 1.4,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683025.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function FacundoCampazzo() {
    return {
      name: "Facundo Campazzo",
      position: "G",
      height: `5'10"`,
      heightInches: 70,
      age: 31,
      number: "7",
      ppg: 5.6,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2968334.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function VernonCareyJr() {
    return {
      name: "Vernon Carey Jr.",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 21,
      number: "22",
      ppg: 2.5,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431669.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function AnthonyEdwards() {
    return {
      name: "Anthony Edwards",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 20,
      number: "1",
      ppg: 20.3,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4594268.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function CJElleby() {
    return {
      name: "CJ Elleby",
      position: "F-G",
      height: `6'6"`,
      heightInches: 78,
      age: 21,
      number: "16",
      ppg: 4.6,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397166.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function MalikFitts() {
    return {
      name: "Malik Fitts",
      position: "F",
      height: `6'5"`,
      heightInches: 77,
      age: 24,
      number: "8",
      ppg: 1.3,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066467.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function MalachiFlynn() {
    return {
      name: "Malachi Flynn",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 23,
      number: "22",
      ppg: 6,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066668.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function TrentForrest() {
    return {
      name: "Trent Forrest",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 23,
      number: "3",
      ppg: 3.1,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065656.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function AnthonyGill() {
    return {
      name: "Anthony Gill",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 29,
      number: "16",
      ppg: 3.7,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2581184.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function JoshGreen() {
    return {
      name: "Josh Green",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 21,
      number: "8",
      ppg: 4,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432811.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function RJHampton() {
    return {
      name: "R.J. Hampton",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 21,
      number: "13",
      ppg: 7.3,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4590530.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function KillianHayes() {
    return {
      name: "Killian Hayes",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 20,
      number: "7",
      ppg: 6.8,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683024.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function ElijahHughes() {
    return {
      name: "Elijah Hughes",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 24,
      number: "19",
      ppg: 2.9,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066446.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function IsaiahJoe() {
    return {
      name: "Isaiah Joe",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 22,
      number: "7",
      ppg: 3.7,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395702.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function MasonJones() {
    return {
      name: "Mason Jones",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 23,
      number: "40",
      ppg: 5.4,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395704.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function TreJones() {
    return {
      name: "Tre Jones",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 22,
      number: "33",
      ppg: 4.8,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395626.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function NathanKnight() {
    return {
      name: "Nathan Knight",
      position: "F-C",
      height: `6'10"`,
      heightInches: 82,
      age: 24,
      number: "13",
      ppg: 3.7,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4067325.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function VitKrejci() {
    return {
      name: "Vit Krejci",
      position: "G",
      height: `6'8"`,
      heightInches: 80,
      age: 21,
      number: "27",
      ppg: 6.2,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4578893.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function SabenLee() {
    return {
      name: "Saben Lee",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 22,
      number: "38",
      ppg: 5.6,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278124.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function KiraLewisJr() {
    return {
      name: "Kira Lewis Jr.",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 21,
      number: "13",
      ppg: 6.2,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395698.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function TheoMaledon() {
    return {
      name: "Theo Maledon",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 20,
      number: "11",
      ppg: 8.8,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683027.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function KenyonMartinJr() {
    return {
      name: "Kenyon Martin Jr.",
      position: "F",
      height: `6'5"`,
      heightInches: 77,
      age: 21,
      number: "6",
      ppg: 9,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431828.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function SkylarMays() {
    return {
      name: "Skylar Mays",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 24,
      number: "4",
      ppg: 3.3,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066269.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function JadenMcDaniels() {
    return {
      name: "Jaden McDaniels",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 21,
      number: "3",
      ppg: 8.1,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431671.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function AaronNesmith() {
    return {
      name: "Aaron Nesmith",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 22,
      number: "26",
      ppg: 4.2,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396909.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function ZekeNnaji() {
    return {
      name: "Zeke Nnaji",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 21,
      number: "22",
      ppg: 4.9,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431690.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function JordanNwora() {
    return {
      name: "Jordan Nwora",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 23,
      number: "13",
      ppg: 7.2,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277883.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function OnyekaOkongwu() {
    return {
      name: "Onyeka Okongwu",
      position: "F-C",
      height: `6'8"`,
      heightInches: 80,
      age: 21,
      number: "17",
      ppg: 6.3,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431680.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function IsaacOkoro() {
    return {
      name: "Isaac Okoro",
      position: "F-G",
      height: `6'5"`,
      heightInches: 77,
      age: 21,
      number: "35",
      ppg: 9.2,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432822.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function AleksejPokusevski() {
    return {
      name: "Aleksej Pokusevski",
      position: "F",
      height: `7'0"`,
      heightInches: 84,
      age: 20,
      number: "17",
      ppg: 7.8,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683018.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function MylesPowell() {
    return {
      name: "Myles Powell",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 24,
      number: "5",
      ppg: 1.2,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065816.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function PaytonPritchard() {
    return {
      name: "Payton Pritchard",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 24,
      number: "11",
      ppg: 6.9,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066354.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function ImmanuelQuickley() {
    return {
      name: "Immanuel Quickley",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 22,
      number: "5",
      ppg: 11.4,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395724.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function PaulReed() {
    return {
      name: "Paul Reed",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 22,
      number: "44",
      ppg: 3.2,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278562.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function NickRichards() {
    return {
      name: "Nick Richards",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 24,
      number: "14",
      ppg: 2.4,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278076.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function MarkoSimonovic() {
    return {
      name: "Marko Simonovic",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 22,
      number: "19",
      ppg: 1.9,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683622.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function JalenSmith() {
    return {
      name: "Jalen Smith",
      position: "F-C",
      height: `6'10"`,
      heightInches: 82,
      age: 22,
      number: "25",
      ppg: 6.7,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397189.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function XavierSneed() {
    return {
      name: "Xavier Sneed",
      position: "F",
      height: `6'5"`,
      heightInches: 77,
      age: 24,
      number: "19",
      ppg: 0.6,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066303.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function LamarStevens() {
    return {
      name: "Lamar Stevens",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 24,
      number: "8",
      ppg: 5.3,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066405.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function IsaiahStewart() {
    return {
      name: "Isaiah Stewart",
      position: "F-C",
      height: `6'8"`,
      heightInches: 80,
      age: 20,
      number: "28",
      ppg: 8.1,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432810.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function JaeSeanTate() {
    return {
      name: "Jae'Sean Tate",
      position: "F",
      height: `6'4"`,
      heightInches: 76,
      age: 26,
      number: "8",
      ppg: 11.6,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136777.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function TyrellTerry() {
    return {
      name: "Tyrell Terry",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 21,
      number: "3",
      ppg: 1,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431747.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function BrodricThomas() {
    return {
      name: "Brodric Thomas",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 25,
      number: "97",
      ppg: 3.3,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4407254.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function KillianTillie() {
    return {
      name: "Killian Tillie",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 24,
      number: "35",
      ppg: 3.2,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066651.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function XavierTillman() {
    return {
      name: "Xavier Tillman",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 23,
      number: "2",
      ppg: 5.7,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277964.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function ObiToppin() {
    return {
      name: "Obi Toppin",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 24,
      number: "1",
      ppg: 6.7,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278355.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function DevinVassell() {
    return {
      name: "Devin Vassell",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 21,
      number: "24",
      ppg: 9.1,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395630.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function PatrickWilliams() {
    return {
      name: "Patrick Williams",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 20,
      number: "44",
      ppg: 9.2,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431687.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function CassiusWinston() {
    return {
      name: "Cassius Winston",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 24,
      number: "5",
      ppg: 1.9,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066382.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function JamesWiseman() {
    return {
      name: "James Wiseman",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 21,
      number: "33",
      ppg: 11.5,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432808.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function RobertWoodardII() {
    return {
      name: "Robert Woodard II",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 22,
      number: "28",
      ppg: 1.1,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396961.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function NajiMarshall() {
    return {
      name: "Naji Marshall",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 24,
      number: "8",
      ppg: 6.4,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278594.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function TrevelinQueen() {
    return {
      name: "Trevelin Queen",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 25,
      number: "21",
      ppg: 4.3,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4409222.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function OmerYurtseven() {
    return {
      name: "Omer Yurtseven",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 23,
      number: "77",
      ppg: 5.3,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3074213.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function SantiAldama() {
    return {
      name: "Santi Aldama",
      position: "F-C",
      height: `6'11"`,
      heightInches: 83,
      age: 21,
      number: "7",
      ppg: 4.1,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4593125.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function DalanoBanton() {
    return {
      name: "Dalano Banton",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 22,
      number: "45",
      ppg: 3.2,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397885.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function ScottieBarnes() {
    return {
      name: "Scottie Barnes",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 20,
      number: "4",
      ppg: 15.3,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433134.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function CharlesBassey() {
    return {
      name: "Charles Bassey",
      position: "C-F",
      height: `6'9"`,
      heightInches: 81,
      age: 21,
      number: "23",
      ppg: 3,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397886.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function BrandonBostonJr() {
    return {
      name: "Brandon Boston Jr.",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 20,
      number: "4",
      ppg: 6.7,
      fullTeamName: "LA Clippers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432162.png",
      team: "LAC",
      conference: "West",
      division: "Pac."
    };
}

function JamesBouknight() {
    return {
      name: "James Bouknight",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 21,
      number: "5",
      ppg: 4.6,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431712.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function GregBrownIII() {
    return {
      name: "Greg Brown III",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 20,
      number: "4",
      ppg: 4.7,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432161.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function JaredButler() {
    return {
      name: "Jared Butler",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 21,
      number: "13",
      ppg: 3.8,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395695.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function JustinChampagnie() {
    return {
      name: "Justin Champagnie",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 20,
      number: "11",
      ppg: 2.3,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432907.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function JoshChristopher() {
    return {
      name: "Josh Christopher",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 20,
      number: "9",
      ppg: 7.9,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432168.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function SharifeCooper() {
    return {
      name: "Sharife Cooper",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 20,
      number: "2",
      ppg: 0.5,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432173.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function CadeCunningham() {
    return {
      name: "Cade Cunningham",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 20,
      number: "2",
      ppg: 17.4,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432166.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function AyoDosunmu() {
    return {
      name: "Ayo Dosunmu",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 22,
      number: "12",
      ppg: 8.8,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397002.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function ChrisDuarte() {
    return {
      name: "Chris Duarte",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 24,
      number: "3",
      ppg: 13.1,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4592402.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function DavidDukeJr() {
    return {
      name: "David Duke Jr.",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 22,
      number: "6",
      ppg: 4.7,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397107.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function KesslerEdwards() {
    return {
      name: "Kessler Edwards",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 21,
      number: "14",
      ppg: 5.9,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397693.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function UsmanGaruba() {
    return {
      name: "Usman Garuba",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 20,
      number: "16",
      ppg: 2,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4871143.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function LukaGarza() {
    return {
      name: "Luka Garza",
      position: "C",
      height: `6'10"`,
      heightInches: 82,
      age: 23,
      number: "55",
      ppg: 5.8,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277951.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function JoshGiddey() {
    return {
      name: "Josh Giddey",
      position: "G",
      height: `6'8"`,
      heightInches: 80,
      age: 19,
      number: "3",
      ppg: 12.5,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4871145.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function QuentinGrimes() {
    return {
      name: "Quentin Grimes",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 21,
      number: "6",
      ppg: 6,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397014.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function SamHauser() {
    return {
      name: "Sam Hauser",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 24,
      number: "30",
      ppg: 2.5,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065804.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function BonesHyland() {
    return {
      name: "Bones Hyland",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 21,
      number: "3",
      ppg: 10.1,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4592492.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function IsaiahJackson() {
    return {
      name: "Isaiah Jackson",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 20,
      number: "23",
      ppg: 8.3,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432170.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function DavidJohnson() {
    return {
      name: "David Johnson",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 21,
      number: "13",
      ppg: 0,
      fullTeamName: "Toronto Raptors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4592204.png",
      team: "TOR",
      conference: "East",
      division: "Atl."
    };
}

function JalenJohnson() {
    return {
      name: "Jalen Johnson",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 20,
      number: "1",
      ppg: 2.4,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4701230.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function KeonJohnson() {
    return {
      name: "Keon Johnson",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 20,
      number: "6",
      ppg: 7.2,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432192.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function HerbertJones() {
    return {
      name: "Herbert Jones",
      position: "F",
      height: `6'7"`,
      heightInches: 79,
      age: 23,
      number: "5",
      ppg: 9.5,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277813.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function KaiJones() {
    return {
      name: "Kai Jones",
      position: "C-F",
      height: `6'10"`,
      heightInches: 82,
      age: 21,
      number: "23",
      ppg: 1,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431699.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function CoreyKispert() {
    return {
      name: "Corey Kispert",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 23,
      number: "24",
      ppg: 8.2,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4280151.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function ScottieLewis() {
    return {
      name: "Scottie Lewis",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 22,
      number: "16",
      ppg: 0.5,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432812.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function IsaiahLivers() {
    return {
      name: "Isaiah Livers",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 23,
      number: "12",
      ppg: 6.4,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277957.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function SandroMamukelashvili() {
    return {
      name: "Sandro Mamukelashvili",
      position: "F-C",
      height: `6'9"`,
      heightInches: 81,
      age: 22,
      number: "54",
      ppg: 3.8,
      fullTeamName: "Milwaukee Bucks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278580.png",
      team: "MIL",
      conference: "East",
      division: "Cen."
    };
}

function TreMann() {
    return {
      name: "Tre Mann",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 21,
      number: "23",
      ppg: 10.4,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432819.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function MilesMcBride() {
    return {
      name: "Miles McBride",
      position: "G",
      height: `6'1"`,
      heightInches: 73,
      age: 21,
      number: "2",
      ppg: 2.2,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431823.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function DavionMitchell() {
    return {
      name: "Davion Mitchell",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 23,
      number: "15",
      ppg: 11.5,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278053.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function EvanMobley() {
    return {
      name: "Evan Mobley",
      position: "C",
      height: `6'11"`,
      heightInches: 83,
      age: 20,
      number: "4",
      ppg: 15,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432158.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function MosesMoody() {
    return {
      name: "Moses Moody",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 19,
      number: "4",
      ppg: 4.4,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432171.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function TreyMurphyIII() {
    return {
      name: "Trey Murphy III",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 21,
      number: "25",
      ppg: 5.4,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397688.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function JamorkoPickett() {
    return {
      name: "Jamorko Pickett",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 24,
      number: "24",
      ppg: 3.8,
      fullTeamName: "Detroit Pistons",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278566.png",
      team: "DET",
      conference: "East",
      division: "Cen."
    };
}

function YvesPons() {
    return {
      name: "Yves Pons",
      position: "F",
      height: `6'5"`,
      heightInches: 77,
      age: 22,
      number: "5",
      ppg: 1.1,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278116.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function JoshuaPrimo() {
    return {
      name: "Joshua Primo",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 19,
      number: "11",
      ppg: 5.8,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4702176.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function NeemiasQueta() {
    return {
      name: "Neemias Queta",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 22,
      number: "88",
      ppg: 3,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397424.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function AustinReaves() {
    return {
      name: "Austin Reaves",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 23,
      number: "15",
      ppg: 7.3,
      fullTeamName: "Los Angeles Lakers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066457.png",
      team: "LAL",
      conference: "West",
      division: "Pac."
    };
}

function JeremiahRobinsonEarl() {
    return {
      name: "Jeremiah Robinson-Earl",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 21,
      number: "50",
      ppg: 7.5,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432813.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function AlperenSengun() {
    return {
      name: "Alperen Sengun",
      position: "C",
      height: `6'10"`,
      heightInches: 82,
      age: 19,
      number: "28",
      ppg: 9.6,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4871144.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function DayRonSharpe() {
    return {
      name: "Day'Ron Sharpe",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 20,
      number: "20",
      ppg: 6.2,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432194.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function JerichoSims() {
    return {
      name: "Jericho Sims",
      position: "C",
      height: `6'9"`,
      heightInches: 81,
      age: 23,
      number: "45",
      ppg: 2.2,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277922.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function JadenSpringer() {
    return {
      name: "Jaden Springer",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 19,
      number: "11",
      ppg: 1,
      fullTeamName: "Philadelphia 76ers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432164.png",
      team: "PHI",
      conference: "East",
      division: "Atl."
    };
}

function JalenSuggs() {
    return {
      name: "Jalen Suggs",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 20,
      number: "4",
      ppg: 11.8,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432165.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function TerryTaylor() {
    return {
      name: "Terry Taylor",
      position: "F",
      height: `6'5"`,
      heightInches: 77,
      age: 22,
      number: "32",
      ppg: 9.6,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4279815.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function CamThomas() {
    return {
      name: "Cam Thomas",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 20,
      number: "24",
      ppg: 8.5,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432174.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function JTThor() {
    return {
      name: "JT Thor",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 19,
      number: "21",
      ppg: 2,
      fullTeamName: "Charlotte Hornets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4702233.png",
      team: "CHA",
      conference: "East",
      division: "SE"
    };
}

function IsaiahTodd() {
    return {
      name: "Isaiah Todd",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 20,
      number: "14",
      ppg: 1.7,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4715198.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function FranzWagner() {
    return {
      name: "Franz Wagner",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 20,
      number: "22",
      ppg: 15.2,
      fullTeamName: "Orlando Magic",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4566434.png",
      team: "ORL",
      conference: "East",
      division: "SE"
    };
}

function IshWainright() {
    return {
      name: "Ish Wainright",
      position: "F",
      height: `6'5"`,
      heightInches: 77,
      age: 27,
      number: "12",
      ppg: 2.4,
      fullTeamName: "Phoenix Suns",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059307.png",
      team: "PHX",
      conference: "West",
      division: "Pac."
    };
}

function DuaneWashingtonJr() {
    return {
      name: "Duane Washington Jr.",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 22,
      number: "4",
      ppg: 9.9,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397235.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function TrendonWatford() {
    return {
      name: "Trendon Watford",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 21,
      number: "2",
      ppg: 7.6,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431675.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function JoeWieskamp() {
    return {
      name: "Joe Wieskamp",
      position: "G-F",
      height: `6'6"`,
      heightInches: 78,
      age: 22,
      number: "15",
      ppg: 2.1,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397033.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function AaronWiggins() {
    return {
      name: "Aaron Wiggins",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 23,
      number: "21",
      ppg: 8.3,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397183.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function ZiaireWilliams() {
    return {
      name: "Ziaire Williams",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 20,
      number: "8",
      ppg: 8.1,
      fullTeamName: "Memphis Grizzlies",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433137.png",
      team: "MEM",
      conference: "West",
      division: "SW"
    };
}

function McKinleyWrightIV() {
    return {
      name: "McKinley Wright IV",
      position: "G",
      height: `5'11"`,
      heightInches: 71,
      age: 23,
      number: "25",
      ppg: 1,
      fullTeamName: "Minnesota Timberwolves",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278507.png",
      team: "MIN",
      conference: "West",
      division: "NW"
    };
}

function RJNembhardJr() {
    return {
      name: "RJ Nembhard Jr.",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 23,
      number: "5",
      ppg: 1.1,
      fullTeamName: "Cleveland Cavaliers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277916.png",
      team: "CLE",
      conference: "East",
      division: "Cen."
    };
}

function JavonteSmart() {
    return {
      name: "Javonte Smart",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 22,
      number: "15",
      ppg: 3,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396972.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function JoseAlvarado() {
    return {
      name: "Jose Alvarado",
      position: "G",
      height: `6'0"`,
      heightInches: 72,
      age: 24,
      number: "15",
      ppg: 6.1,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277869.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function DaishenNix() {
    return {
      name: "Daishen Nix",
      position: "G",
      height: `6'5"`,
      heightInches: 77,
      age: 20,
      number: "15",
      ppg: 3.2,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432176.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function MosesWright() {
    return {
      name: "Moses Wright",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 23,
      number: "5",
      ppg: 1.3,
      fullTeamName: "Dallas Mavericks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277871.png",
      team: "DAL",
      conference: "West",
      division: "SW"
    };
}

function MalcolmHill() {
    return {
      name: "Malcolm Hill",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 26,
      number: "14",
      ppg: 3.8,
      fullTeamName: "Chicago Bulls",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3056245.png",
      team: "CHI",
      conference: "East",
      division: "Cen."
    };
}

function BrandonWilliams() {
    return {
      name: "Brandon Williams",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 22,
      number: "8",
      ppg: 12.9,
      fullTeamName: "Portland Trail Blazers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397040.png",
      team: "POR",
      conference: "West",
      division: "NW"
    };
}

function LindyWatersIII() {
    return {
      name: "Lindy Waters III",
      position: "F",
      height: `6'6"`,
      heightInches: 78,
      age: 24,
      number: "12",
      ppg: 8,
      fullTeamName: "Oklahoma City Thunder",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066317.png",
      team: "OKC",
      conference: "West",
      division: "NW"
    };
}

function DeMarcusCousins() {
    return {
      name: "DeMarcus Cousins",
      position: "C",
      height: `6'10"`,
      heightInches: 82,
      age: 31,
      number: "4",
      ppg: 19.6,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4258.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function SethCurry() {
    return {
      name: "Seth Curry",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 31,
      number: "30",
      ppg: 11.3,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2326307.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function KevinDurant() {
    return {
      name: "Kevin Durant",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 33,
      number: "7",
      ppg: 27.2,
      fullTeamName: "Brooklyn Nets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png",
      team: "BKN",
      conference: "East",
      division: "Atl."
    };
}

function DaniloGallinari() {
    return {
      name: "Danilo Gallinari",
      position: "F",
      height: `6'10"`,
      heightInches: 82,
      age: 33,
      number: "8",
      ppg: 15.6,
      fullTeamName: "Atlanta Hawks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3428.png",
      team: "ATL",
      conference: "East",
      division: "SE"
    };
}

function JeffGreen() {
    return {
      name: "Jeff Green",
      position: "F",
      height: `6'8"`,
      heightInches: 80,
      age: 35,
      number: "32",
      ppg: 12.6,
      fullTeamName: "Denver Nuggets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3209.png",
      team: "DEN",
      conference: "West",
      division: "NW"
    };
}

function JustinHoliday() {
    return {
      name: "Justin Holiday",
      position: "F-G",
      height: `6'6"`,
      heightInches: 78,
      age: 33,
      number: "9",
      ppg: 8.7,
      fullTeamName: "Sacramento Kings",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2284101.png",
      team: "SAC",
      conference: "West",
      division: "Pac."
    };
}

function DejounteMurray() {
    return {
      name: "Dejounte Murray",
      position: "G",
      height: `6'4"`,
      heightInches: 76,
      age: 25,
      number: "5",
      ppg: 12.5,
      fullTeamName: "San Antonio Spurs",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907497.png",
      team: "SAS",
      conference: "West",
      division: "SW"
    };
}

function KristapsPorzingis() {
    return {
      name: "Kristaps Porzingis",
      position: "F-C",
      height: `7'3"`,
      heightInches: 87,
      age: 26,
      number: "6",
      ppg: 18.9,
      fullTeamName: "Washington Wizards",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102531.png",
      team: "WAS",
      conference: "East",
      division: "SE"
    };
}

function DerrickRose() {
    return {
      name: "Derrick Rose",
      position: "G",
      height: `6'2"`,
      heightInches: 74,
      age: 33,
      number: "4",
      ppg: 18.2,
      fullTeamName: "New York Knicks",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3456.png",
      team: "NYK",
      conference: "East",
      division: "Atl."
    };
}

function NikStauskas() {
    return {
      name: "Nik Stauskas",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 28,
      number: "13",
      ppg: 6.7,
      fullTeamName: "Boston Celtics",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991042.png",
      team: "BOS",
      conference: "East",
      division: "Atl."
    };
}

function LanceStephenson() {
    return {
      name: "Lance Stephenson",
      position: "F",
      height: `6'5"`,
      heightInches: 77,
      age: 31,
      number: "6",
      ppg: 8.6,
      fullTeamName: "Indiana Pacers",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4244.png",
      team: "IND",
      conference: "East",
      division: "Cen."
    };
}

function GarrettTemple() {
    return {
      name: "Garrett Temple",
      position: "G-F",
      height: `6'5"`,
      heightInches: 77,
      age: 35,
      number: "41",
      ppg: 6.4,
      fullTeamName: "New Orleans Pelicans",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4023.png",
      team: "NOP",
      conference: "West",
      division: "SW"
    };
}

function KlayThompson() {
    return {
      name: "Klay Thompson",
      position: "G",
      height: `6'6"`,
      heightInches: 78,
      age: 32,
      number: "11",
      ppg: 19.5,
      fullTeamName: "Golden State Warriors",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png",
      team: "GSW",
      conference: "West",
      division: "Pac."
    };
}

function PJTucker() {
    return {
      name: "P.J. Tucker",
      position: "F",
      height: `6'5"`,
      heightInches: 77,
      age: 36,
      number: "17",
      ppg: 7.1,
      fullTeamName: "Miami Heat",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3033.png",
      team: "MIA",
      conference: "East",
      division: "SE"
    };
}

function JohnWall() {
    return {
      name: "John Wall",
      position: "G",
      height: `6'3"`,
      heightInches: 75,
      age: 31,
      number: "1",
      ppg: 19.1,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4237.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function HassanWhiteside() {
    return {
      name: "Hassan Whiteside",
      position: "C",
      height: `7'0"`,
      heightInches: 84,
      age: 32,
      number: "21",
      ppg: 12.6,
      fullTeamName: "Utah Jazz",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4262.png",
      team: "UTA",
      conference: "West",
      division: "NW"
    };
}

function ChristianWood() {
    return {
      name: "Christian Wood",
      position: "F",
      height: `6'9"`,
      heightInches: 81,
      age: 26,
      number: "35",
      ppg: 14.2,
      fullTeamName: "Houston Rockets",
      img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3058254.png",
      team: "HOU",
      conference: "West",
      division: "SW"
    };
}

function MilesBridges() {
  return {
    name: "Miles Bridges",
    position: "F",
    height: `6'7"`,
    heightInches: 79,
    age: 24,
    number: "0",
    ppg: 20.2,
    fullTeamName: "Charlotte Hornets",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066383.png",
    team: "CHA",
    conference: "East",
    division: "SE"
  };
}

function SterlingBrown() {
  return {
    name: "Sterling Brown",
    position: "G-F",
    height: `6'5"`,
    heightInches: 77,
    age: 27,
    number: "0",
    ppg: 3.3,
    fullTeamName: "Dallas Mavericks",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3057187.png",
    team: "DAL",
    conference: "West",
    division: "SW"
  };
}

function VlatkoCancar() {
  return {
    name: "Vlatko Cancar",
    position: "F",
    height: `6'8"`,
    heightInches: 80,
    age: 25,
    number: "31",
    ppg: 4.1,
    fullTeamName: "Denver Nuggets",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4230557.png",
    team: "DEN",
    conference: "West",
    division: "NW"
  };
}

function JordanClarkson() {
  return {
    name: "Jordan Clarkson",
    position: "G",
    height: `6'4"`,
    heightInches: 76,
    age: 29,
    number: "00",
    ppg: 16.0,
    fullTeamName: "Utah Jazz",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528426.png",
    team: "UTA",
    conference: "West",
    division: "NW"
  };
}

function TorreyCraig() {
  return {
    name: "Torrey Craig",
    position: "F",
    height: `6'7"`,
    heightInches: 79,
    age: 31,
    number: "0",
    ppg: 6.9,
    fullTeamName: "Phoenix Suns",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2528693.png",
    team: "PHX",
    conference: "West",
    division: "Pac."
  };
}

function TerenceDavis() {
  return {
    name: "Terence Davis",
    position: "G",
    height: `6'4"`,
    heightInches: 76,
    age: 25,
    number: "3",
    ppg: 10.4,
    fullTeamName: "Sacramento Kings",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3919454.png",
    team: "SAC",
    conference: "West",
    division: "Pac."
  };
}

function DonteDiVincenzo() {
  return {
    name: "Donte DiVincenzo",
    position: "G",
    height: `6'4"`,
    heightInches: 76,
    age: 25,
    number: "0",
    ppg: 10.3,
    fullTeamName: "Sacramento Kings",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934673.png",
    team: "SAC",
    conference: "West",
    division: "Pac."
  };
}

function LuguentzDort() {
  return {
    name: "Luguentz Dort",
    position: "G",
    height: `6'3"`,
    heightInches: 75,
    age: 23,
    number: "5",
    ppg: 17.2,
    fullTeamName: "Oklahoma City Thunder",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397020.png",
    team: "OKC",
    conference: "West",
    division: "NW"
  };
}

function AndreDrummond() {
  return {
    name: "Andre Drummond",
    position: "C",
    height: `6'10"`,
    heightInches: 82,
    age: 28,
    number: "0",
    ppg: 11.8,
    fullTeamName: "Brooklyn Nets",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6585.png",
    team: "BKN",
    conference: "East",
    division: "Atl."
  };
}

function JaMychalGreen() {
  return {
    name: "JaMychal Green",
    position: "F-C",
    height: `6'8"`,
    heightInches: 80,
    age: 31,
    number: "0",
    ppg: 6.4,
    fullTeamName: "Denver Nuggets",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2327577.png",
    team: "DEN",
    conference: "West",
    division: "NW"
  };
}

function JalenGreen() {
  return {
    name: "Jalen Green",
    position: "G",
    height: `6'4"`,
    heightInches: 76,
    age: 20,
    number: "0",
    ppg: 17.3,
    fullTeamName: "Houston Rockets",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4437244.png",
    team: "HOU",
    conference: "West",
    division: "SW"
  };
}

function TyreseHaliburton() {
  return {
    name: "Tyrese Haliburton",
    position: "G",
    height: `6'5"`,
    heightInches: 77,
    age: 22,
    number: "0",
    ppg: 17.5,
    fullTeamName: "Indiana Pacers",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396993.png",
    team: "IND",
    conference: "East",
    division: "Cen."
  };
}

function MarkusHoward() {
  return {
    name: "Markus Howard",
    position: "G",
    height: `5'10"`,
    heightInches: 70,
    age: 23,
    number: "00",
    ppg: 4.1,
    fullTeamName: "Denver Nuggets",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065805.png",
    team: "DEN",
    conference: "West",
    division: "NW"
  };
}

function JoeIngles() {
  return {
    name: "Joe Ingles",
    position: "F-G",
    height: `6'8"`,
    heightInches: 80,
    age: 34,
    number: "00",
    ppg: 7.2,
    fullTeamName: "Portland Trail Blazers",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2968436.png",
    team: "POR",
    conference: "West",
    division: "NW"
  };
}

function JonathanKuminga() {
  return {
    name: "Jonathan Kuminga",
    position: "F",
    height: `6'7"`,
    heightInches: 79,
    age: 19,
    number: "00",
    ppg: 9.3,
    fullTeamName: "Golden State Warriors",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433247.png",
    team: "GSW",
    conference: "West",
    division: "Pac."
  };
}

function JockLandale() {
  return {
    name: "Jock Landale",
    position: "C",
    height: `6'11"`,
    heightInches: 83,
    age: 26,
    number: "34",
    ppg: 4.9,
    fullTeamName: "San Antonio Spurs",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3146557.png",
    team: "SAS",
    conference: "West",
    division: "SW"
  };
}

function DamianLillard() {
  return {
    name: "Damian Lillard",
    position: "G",
    height: `6'2"`,
    heightInches: 74,
    age: 31,
    number: "0",
    ppg: 24.0,
    fullTeamName: "Portland Trail Blazers",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png",
    team: "POR",
    conference: "West",
    division: "NW"
  };
}

function KevinLove() {
  return {
    name: "Kevin Love",
    position: "F-C",
    height: `6'8"`,
    heightInches: 80,
    age: 33,
    number: "0",
    ppg: 13.6,
    fullTeamName: "Cleveland Cavaliers",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3449.png",
    team: "CLE",
    conference: "East",
    division: "Cen."
  };
}

function CalebMartin() {
  return {
    name: "Caleb Martin",
    position: "F",
    height: `6'5"`,
    heightInches: 77,
    age: 26,
    number: "16",
    ppg: 9.2,
    fullTeamName: "Miami Heat",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3138160.png",
    team: "MIA",
    conference: "East",
    division: "SE"
  };
}

function GarrisonMathews() {
  return {
    name: "Garrison Mathews",
    position: "G",
    height: `6'5"`,
    heightInches: 77,
    age: 25,
    number: "25",
    ppg: 10.0,
    fullTeamName: "Houston Rockets",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3913180.png",
    team: "HOU",
    conference: "West",
    division: "SW"
  };
}

function TyreseMaxey() {
  return {
    name: "Tyrese Maxey",
    position: "G",
    height: `6'2"`,
    heightInches: 74,
    age: 21,
    number: "0",
    ppg: 17.5,
    fullTeamName: "Philadelphia 76ers",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431678.png",
    team: "PHI",
    conference: "East",
    division: "Atl."
  };
}

function JaValeMcGee() {
  return {
    name: "JaVale McGee",
    position: "C-F",
    height: `7'0"`,
    heightInches: 84,
    age: 34,
    number: "00",
    ppg: 9.2,
    fullTeamName: "Phoenix Suns",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3452.png",
    team: "PHX",
    conference: "West",
    division: "Pac."
  };
}

function DeAnthonyMelton() {
  return {
    name: "De'Anthony Melton",
    position: "G",
    height: `6'2"`,
    heightInches: 74,
    age: 23,
    number: "0",
    ppg: 10.8,
    fullTeamName: "Memphis Grizzlies",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066436.png",
    team: "MEM",
    conference: "West",
    division: "SW"
  };
}

function EricPaschall() {
  return {
    name: "Eric Paschall",
    position: "F",
    height: `6'6"`,
    heightInches: 78,
    age: 25,
    number: "0",
    ppg: 5.8,
    fullTeamName: "Utah Jazz",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133817.png",
    team: "UTA",
    conference: "West",
    division: "NW"
  };
}

function GaryPaytonII() {
  return {
    name: "Gary Payton II",
    position: "G",
    height: `6'3"`,
    heightInches: 75,
    age: 29,
    number: "0",
    ppg: 7.1,
    fullTeamName: "Golden State Warriors",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3134903.png",
    team: "GSW",
    conference: "West",
    division: "Pac."
  };
}

function NazReid() {
  return {
    name: "Naz Reid",
    position: "C-F",
    height: `6'9"`,
    heightInches: 81,
    age: 22,
    number: "11",
    ppg: 8.3,
    fullTeamName: "Minnesota Timberwolves",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396971.png",
    team: "MIN",
    conference: "West",
    division: "NW"
  };
}

function DAngeloRussell() {
  return {
    name: "D'Angelo Russell",
    position: "G",
    height: `6'4"`,
    heightInches: 76,
    age: 26,
    number: "0",
    ppg: 18.1,
    fullTeamName: "Minnesota Timberwolves",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136776.png",
    team: "MIN",
    conference: "West",
    division: "NW"
  };
}

function JayScrubb() {
  return {
    name: "Jay Scrubb",
    position: "G",
    height: `6'5"`,
    heightInches: 77,
    age: 21,
    number: "0",
    ppg: 2.7,
    fullTeamName: "LA Clippers",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683023.png",
    team: "LAC",
    conference: "West",
    division: "Pac."
  };
}

function JaysonTatum() {
  return {
    name: "Jayson Tatum",
    position: "F-G",
    height: `6'8"`,
    heightInches: 80,
    age: 24,
    number: "0",
    ppg: 26.9,
    fullTeamName: "Boston Celtics",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png",
    team: "BOS",
    conference: "East",
    division: "Atl."
  };
}

function JuanToscanoAnderson() {
  return {
    name: "Juan Toscano-Anderson",
    position: "F",
    height: `6'6"`,
    heightInches: 78,
    age: 29,
    number: "95",
    ppg: 4.1,
    fullTeamName: "Golden State Warriors",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4401416.png",
    team: "GSW",
    conference: "West",
    division: "Pac."
  };
}

function RussellWestbrook() {
  return {
    name: "Russell Westbrook",
    position: "G",
    height: `6'3"`,
    heightInches: 75,
    age: 33,
    number: "0",
    ppg: 18.5,
    fullTeamName: "Los Angeles Lakers",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png",
    team: "LAL",
    conference: "West",
    division: "Pac."
  };
}

function CobyWhite() {
  return {
    name: "Coby White",
    position: "G",
    height: `6'4"`,
    heightInches: 76,
    age: 22,
    number: "0",
    ppg: 12.7,
    fullTeamName: "Chicago Bulls",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395651.png",
    team: "CHI",
    conference: "East",
    division: "Cen."
  };
}

function LindellWigginton() {
  return {
    name: "Lindell Wigginton",
    position: "G",
    height: `6'2"`,
    heightInches: 74,
    age: 24,
    number: "28",
    ppg: 4.2,
    fullTeamName: "Milwaukee Bucks",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277887.png",
    team: "MIL",
    conference: "East",
    division: "Cen."
  };
}

function DelonWright() {
  return {
    name: "Delon Wright",
    position: "G",
    height: `6'5"`,
    heightInches: 77,
    age: 30,
    number: "0",
    ppg: 4.4,
    fullTeamName: "Atlanta Hawks",
    img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064447.png",
    team: "ATL",
    conference: "East",
    division: "SE"
  };
}

