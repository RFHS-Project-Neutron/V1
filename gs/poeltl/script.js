let output = "";
const playerList = [];
const invalid = [];
const pList = [
  "Trevor Ariza",
  "DeAndre' Bembry",
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
  "Kyle Guy",
  "Tyrese Haliburton",
  "Markus Howard",
  "Joe Ingles",
  "Alize Johnson",
  "James Johnson",
  "Frank Kaminsky",
  "Jonathan Kuminga",
  "Jock Landale",
  "Damian Lillard",
  "Kevin Love",
  "Caleb Martin",
  "Kelan Martin",
  "Garrison Mathews",
  "Tyrese Maxey",
  "JaVale McGee",
  "De'Anthony Melton",
  "Semi Ojeleye",
  "Eric Paschall",
  "Gary Payton II",
  "Naz Reid",
  "D'Angelo Russell",
  "Matt Ryan",
  "Luka Samanic",
  "Olivier Sarr",
  "Jay Scrubb",
  "Chris Smith",
  "Keifer Sykes",
  "Jayson Tatum",
  "Juan Toscano-Anderson",
  "Russell Westbrook",
  "Coby White",
  "Lindell Wigginton",
  "Delon Wright"
];

let checkedIds = [560];

let totalFetches = 0;



function getAge(dateString) {
  var ageInMilliseconds = new Date() - new Date(dateString);
  return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
}

function getRandomPlayerId() {
  if(checkedIds.length <= 3411) return checkedIds[checkedIds.length - 1] + 1;
  else return -1;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function addToOutput(player){
  output += `function ${player.name.replace(/\s/g, "").replace(/\'/g,'').replace(/\./g,'').replace(/\-/g,'')}() {
    return {
      name: "${player.name}",
      position: "${player.position}",
      height: \`${player.height}\`,
      heightInches: ${player.heightInches},
      age: ${player.age},
      number: "${player.number}",
      ppg: ${player.ppg},
      fullTeamName: "${player.fullTeamName}",
      img: "${player.img}",
      team: "${player.team}",
      conference: "${player.conference}",
      division: "${player.division}"
    };
}

`;
}

function playerListOutput(){
  let pOutput = "";
  for(let x = 0; x < playerList.length; x++){
    if(x === 0){
      pOutput += `\n\n\n\n\nconst playerList = [
      "${playerList[x]}",
      `;
    }
    else if(x === playerList.length - 1){
      pOutput += `"${playerList[x]}"
];`;
    }
    else{
      pOutput += `"${playerList[x]}",
      `;
    }
  }
  return pOutput;
}


let currId = 0;

function fetchPlayers(callback){
  let player = {};
  if(currId >= 50) callback();
  else{
    let currName = pList[currId];
    console.log(currName);
    let fname = currName.slice(0,currName.indexOf(" "));
    let lname = currName.slice(currName.indexOf(" ") + 1, currName.length);
    if(lname.includes(".")) lname = lname.slice(0,lname.indexOf("."));
    if(lname.includes("-")) lname = lname.slice(0,lname.indexOf("-"));
    fetch(`https://api-nba-v1.p.rapidapi.com/players?search=${lname}`, {
      method: 'GET',
      headers: {
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
          'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
      }
    })
    .then(response => response.json())
    .then(data => {
      totalFetches++;
      let d;
      if(data.response.length >= 2){
        for(let x = 0; x < data.response.length; x++)
            if(data.response[x.toString()].firstname === fname) d = data.response[x.toString()];
      }
      else{
          d = data.response["0"];
      }
      player["firstName"] = d.firstname;
      player["lastName"] = d.lastname;
      player["name"] = `${d.firstname} ${d.lastname}`;
      player["position"] = d.leagues.standard.pos == null ? "null" : d.leagues.standard.pos;
      player["height"] = d.height.feets == null || d.height.inches == null ? "null" : `${d.height.feets}'${d.height.inches}"`;
      player["heightInches"] = d.height.feets == null || d.height.inches == null  ? "null" : 12 * Number(d.height.feets) + Number(d.height.inches);
      player["age"] = d.birth.date == null ? "null" : getAge(d.birth.date);

      fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/fullname?name=${player.firstName}_${player.lastName}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'nba-player-individual-stats.p.rapidapi.com',
            'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
        }
      })
        .then(response => response.json())
        .then(data => {
          totalFetches++;
          if(data.team == null){
            invalid.push(player.name);
            console.log(`${player.name} is invalid (no team)`);
            currId++;
            fetchPlayers(callback);
          }
          else{
            player["fullTeamName"] = data.team;
            player["number"] = data.jerseyNumber == null ? "null" : data.jerseyNumber.slice(1,data.jerseyNumber.length);
            player["img"] = data.headShotUrl;

            let tName = data.team;
            let numWords = 1;
            let spacePos = [];
            for(let x = 0; x < tName.length; x++){
                if(tName.charAt(x) === " "){
                    numWords++;
                    spacePos.push(x);
                }
            }
            let urlEnd = numWords == 2 ? `${tName.slice(0,spacePos[0])}%20${tName.slice(spacePos[0] + 1, tName.length)}` : `${tName.slice(0,spacePos[0])}%20${tName.slice(spacePos[0] + 1, spacePos[1])}%20${tName.slice(spacePos[1] + 1, tName.length)}`;
            fetch(`https://api-nba-v1.p.rapidapi.com/teams?name=${urlEnd}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
                    'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
                }
            })
                .then(response => response.json())
                .then(data => {
                  totalFetches++;
                    let d2 = data.response["0"];
                    player["team"] = d2.code;
                    player["conference"] = d2.leagues.standard.conference;
                    let div = d2.leagues.standard.division;
                    player["division"] = div.length <= 8 ? div.slice(0,3) + "." : div.charAt(0) + div.charAt(5).toUpperCase();

                    currId++;
                    addToOutput(player);
                    playerList.push(player.name);
                    console.log(`did ${player.name}, players: ${playerList.length}`);
                    fetchPlayers(callback);
                });
            }
      });
    });
  }
}


function fetchRandomPlayer(callback){
  const randomPlayerId = getRandomPlayerId();
  let currPlayer = {};
  if(randomPlayerId === -1) callback();
  else{
  fetch(`https://api-nba-v1.p.rapidapi.com/players?id=${randomPlayerId}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
    }
  })
    .then(response => response.json())
    .then(data => {
      totalFetches++;
      let d = data.response["0"];
      if(d.leagues.standard !== undefined){
        if(d.leagues.standard.active === false || d.height.feets === null || d.leagues.standard.pos === null || d.leagues.standard.jersey === null || playerList.includes(`${d.firstname} ${d.lastname}`)){
          checkedIds.push(randomPlayerId);
          fetchRandomPlayer(callback);
        }
        else{
          currPlayer["firstName"] = d.firstname;
          currPlayer["lastName"] = d.lastname;
          currPlayer["name"] = `${d.firstname} ${d.lastname}`;
          currPlayer["position"] = d.leagues.standard.pos;
          currPlayer["height"] = `${d.height.feets}'${d.height.inches}"`
          currPlayer["heightInches"] = 12 * Number(d.height.feets) + Number(d.height.inches);
          currPlayer["age"] = getAge(d.birth.date);
          currPlayer["number"] = d.leagues.standard.jersey;

          fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/fullname?name=${currPlayer.firstName}_${currPlayer.lastName}`, {
                      method: 'GET',
                      headers: {
                          'X-RapidAPI-Host': 'nba-player-individual-stats.p.rapidapi.com',
                          'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
                      }
                  })
                      .then(response => {
                          if(response.ok) return response.json();
                          else{
                            checkedIds.push(randomPlayerId);
                            fetchRandomPlayer(callback);
                          }
                      })
                      .then(data => {
                        if(data !== null){
                          if(data.team == null){
                            checkedIds.push(randomPlayerId);
                            fetchRandomPlayer(callback);
                          }
                          else{
                            currPlayer["ppg"] = data.careerPoints;
                            currPlayer["fullTeamName"] = data.team;
                            currPlayer["img"] = data.headShotUrl;

                            let tName = data.team;
                            let numWords = 1;
                            let spacePos = [];
                            for(let x = 0; x < tName.length; x++){
                                if(tName.charAt(x) === " "){
                                    numWords++;
                                    spacePos.push(x);
                                }
                            }
                            let urlEnd = numWords == 2 ? `${tName.slice(0,spacePos[0])}%20${tName.slice(spacePos[0] + 1, tName.length)}` : `${tName.slice(0,spacePos[0])}%20${tName.slice(spacePos[0] + 1, spacePos[1])}%20${tName.slice(spacePos[1] + 1, tName.length)}`;
                            fetch(`https://api-nba-v1.p.rapidapi.com/teams?name=${urlEnd}`, {
                                method: 'GET',
                                headers: {
                                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
                                    'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
                                }
                            })
                                .then(response => response.json())
                                .then(data => {
                                  totalFetches++;
                                    let d2 = data.response["0"];
                                    currPlayer["team"] = d2.code;
                                    currPlayer["conference"] = d2.leagues.standard.conference;
                                    let div = d2.leagues.standard.division;
                                    currPlayer["division"] = div.length <= 8 ? div.slice(0,3) + "." : div.charAt(0) + div.charAt(5).toUpperCase();

                                    //console.log("done");
                                    checkedIds.push(randomPlayerId);
                                    addToOutput(currPlayer);
                                    playerList.push(currPlayer.name);
                                    console.log(`did ${currPlayer.name}, ${checkedIds[checkedIds.length - 1]}, totalFetches = ${totalFetches}, players: ${playerList.length}`);
                                    fetchRandomPlayer(callback);
                                });
                          }
                        }
                        else{
                          checkedIds.push(randomPlayerId);
                          fetchRandomPlayer(callback);
                        }
                      });
        }
      }
      else{
        checkedIds.push(randomPlayerId);
        fetchRandomPlayer(callback);
      }
    });
  }
}



// addToOutput({
//   firstName: "Andrew",
//   lastName: "Wiggins",
//   name: "Andrew Wiggins",
//   position: "F",
//   height: `6'6"`,
//   heightInches: 78,
//   age: 25,
//   number: 22,
//   fullTeamName: "Golden State Warriors",
//   img: "idk.org",
//   team: "GSW",
//   conference: "West",
//   division: "Pac."
// });
// addToOutput({
//   firstName: "Andrew",
//   lastName: "Wiggins",
//   name: "Andrew Wiggins",
//   position: "F",
//   height: `6'6"`,
//   heightInches: 78,
//   age: 25,
//   number: 22,
//   fullTeamName: "Golden State Warriors",
//   img: "idk.org",
//   team: "GSW",
//   conference: "West",
//   division: "Pac."
// });

// console.log(output);



function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}


document.getElementById("output-btn").addEventListener("click", function() {
  var blob = new Blob([getOutput()], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "output.txt");
});

document.getElementById("plist-btn").addEventListener("click", function() {
  var blob = new Blob([getPlayerList()], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "playerlist.txt");
});


fetchPlayers(function(){
  console.log("done");
});


function getOutput(){
  return output;
}

function getPlayerList(){
  return playerListOutput();
}
