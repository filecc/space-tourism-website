const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const app = express();
const fs = require('fs');






app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.render("home");

});


app.get("/destination*", function (req, res) {
  const data = JSON.parse(fs.readFileSync('data.json'));
  const { destinations } = data;
  let planetChose = "";
  const [moon, mars, europa, titan] = destinations;

  switch (req.path) {
    case "/destination":
      planetChose = moon;
      break;
    case "/destination-moon":
      planetChose = moon;
      break;
    case "/destination-mars":
      planetChose = mars;
      break;
    case "/destination-europa":
      planetChose = europa;
      break;
    case "/destination-titan":
      planetChose = titan;
      break;
    default:
      break;
  }

  res.render("destination", {
    planetName: planetChose.name,
    planetDescription: planetChose.description,
    planetDistance: planetChose.distance,
    planetTimeTravel: planetChose.travel,
    planetImg: planetChose.images.webp
  });

});


app.get("/crew*", function (req, res) {
  const data = JSON.parse(fs.readFileSync('data.json'));
  const { crew } = data;
  const [douglas, mark, viktor, anousheh] = crew;
  let crewChoose = "";
  let commanderButton, specialistButton, pilotButton, engineerButton = ""

  switch (req.path) {
    case "/crew":
      crewChoose = douglas;
      commanderButton = "background-color:grey; cursor: default;"
      break;
    case "/crew-commander":
      crewChoose = douglas;
      commanderButton = "background-color:grey; cursor: default;"
      break;
    case "/crew-specialist":
      crewChoose = mark;
      specialistButton = "background-color:grey; cursor: default;"
      break;
    case "/crew-pilot":
      crewChoose = viktor;
      pilotButton = "background-color:grey; cursor: default;"
      break;
    case "/crew-engineer":
      crewChoose = anousheh;
      engineerButton = "background-color:grey; cursor: default;"
      break;
    default:
      break;
  }

  res.render("crew", {
    role: crewChoose.role,
    crewName: crewChoose.name,
    crewDescription: crewChoose.bio,
    crewImg: crewChoose.images.webp,
    commanderBut: commanderButton,
    specialistBut: specialistButton,
    pilotBut: pilotButton,
    engineerBut: engineerButton

  });



});




app.get("/technology*", function (req, res) {
  const data = JSON.parse(fs.readFileSync('data.json'));
  const { technology } = data;
  const [launch, spaceport, space] = technology;
  let techChoose = "";
  let launchButton, spaceportButton, spaceButton = ""

  switch (req.path) {
    case "/technology":
      techChoose = launch;
      launchButton = "background-color:white;" 
      break;
    case "/technology-launch":
      techChoose = launch;
      launchButton = "background-color:white;"
      break;
    case "/technology-spaceport":
      techChoose = spaceport;
      spaceportButton = "background-color:white;" 
      break;
    case "/technology-space":
      techChoose = space;
      spaceButton = "background-color:white; color: black:" 
      break;
    default:
      break;
  }

  res.render("technology",{
    techName: techChoose.name,
    techDescription: techChoose.description,
    techImg: techChoose.images,
    launchButton: launchButton,
    spaceportButton: spaceportButton,
    spaceButton: spaceButton
  }
  
  );

 
  


});



app.listen(3000, function () {
  console.log("Server started on port 3000.");
});


