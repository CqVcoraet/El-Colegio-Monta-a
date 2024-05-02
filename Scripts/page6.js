// Background
var bg = document.createElement("div");
var bgWidth = 1200;
var bgHeight = 1600;
bg.style.width = bgWidth + "px";
bg.style.height = bgHeight + "px";
bg.style.left = "50%";
bg.style.top = "50%";
bg.style.position = "absolute";
bg.style.transform = "translate(-50%, -50%)";
bg.style.backgroundColor = "#E8E8E8";
document.body.append(bg);

// Imported Font
var font = document.createElement("link");
font.href = "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap";
font.rel = "stylesheet";
document.head.append(font);

// Logo
var logo = document.createElement("div");
logo.style.backgroundImage = "url('Images/El_Colegio_Montaña_Logo-removebg-preview.png')";
logo.style.left = "168px";
logo.style.top = "480px";
logo.style.position = "absolute";
logo.style.transform = "translate(-50%, -50%)";
var logoWidth = 510;
var logoHeight = 490;
logo.style.width = logoWidth / 2 + "px"; // Actual Width
logo.style.height = logoHeight / 2 + "px"; // Actual Height
logo.style.backgroundRepeat = "no-repeat";
logo.style.backgroundSize = "cover";
logo.style.backgroundPosition = "center";
bg.append(logo);

// Title
var title = document.createElement("div");
title.style.left = "50%";
title.style.top = "28%";
title.style.position = "absolute";
title.style.transform = "translateX(-50%)";
title.style.fontSize = "55px";
title.style.color = "#000000";
title.style.textAlign = "center";
title.style.fontWeight = "bold";
title.style.textDecoration = "underline";
title.style.fontFamily = "Lexend, sans-serif";
title.innerHTML = "El Colegio Montaña";
bg.append(title);

// Previous Page Button
var previousPageButton = document.createElement("button");
previousPageButton.style.left = "25%";
previousPageButton.style.top = "95%";
previousPageButton.style.width = "200px";
previousPageButton.style.height = "50px";
previousPageButton.style.position = "absolute";
previousPageButton.style.transform = "translateX(-50%)";
previousPageButton.style.fontSize = "20px";
previousPageButton.style.backgroundColor = "#D20000";
previousPageButton.style.color = "#FFFFFF";
previousPageButton.style.textAlign = "center";
previousPageButton.style.fontWeight = "bold";
previousPageButton.style.fontFamily = "Lexend, sans-serif";
previousPageButton.innerText = "Previous";
previousPageButton.addEventListener("click", function() {
    window.location.href = "page5.html";
});
bg.append(previousPageButton);

// Next Page Button
var nextPageButton = document.createElement("button");
nextPageButton.style.left = "75%";
nextPageButton.style.top = "95%";
nextPageButton.style.width = "200px";
nextPageButton.style.height = "50px";
nextPageButton.style.position = "absolute";
nextPageButton.style.transform = "translateX(-50%)";
nextPageButton.style.fontSize = "20px";
nextPageButton.style.backgroundColor = "#007722";
nextPageButton.style.color = "#FFFFFF";
nextPageButton.style.textAlign = "center";
nextPageButton.style.fontWeight = "bold";
nextPageButton.style.fontFamily = "Lexend, sans-serif";
nextPageButton.innerText = "Next";
nextPageButton.addEventListener("click", function() {
    alert("Inch!");
});
bg.append(nextPageButton);

// El Espanol
var p1 = document.createElement("div");
p1.style.left = "50%";
p1.style.top = "45%";
p1.style.width = bgWidth - 100 + "px";
p1.style.height = "200px";
p1.style.position = "absolute";
p1.style.transform = "translateX(-50%)";
p1.style.fontSize = "20px";
p1.style.color = "#000000";
p1.style.textAlign = "center";
p1.style.fontFamily = "Lexend, sans-serif";
p1.innerHTML = "Yo tengo el español, es las once y nueve - doce y tres de la tarde. El difficul y interesante. El lapiz y el papel. El estudiar y praticar espanol.";
p1.innerHTML += "<br> Practicar correr es las tres y trienta de la tarde - es las cinco de la tarde. Chickadees Team 5871 es las cinco y trienta de la noche - es las ocho de la noche.";
p1.innerHTML += "<br> Schedule: Same as THS on Wolf Wednesdays.";
p1.innerHTML += "<br> Lunch Served: Si";
p1.innerHTML += "<br> El Otono Break: Tarde Noviembre";
p1.innerHTML += "<br> El Invierno Break: Tarde Diciembre";
p1.innerHTML += "<br> La Primavera Break: Mid Marzo";
p1.innerHTML += "<br> I really liked this project because it was fun to design a high school and also I used it as an opportunity to improve my coding skills. Thank you Greggles for giving me the multi-page idea! Without that idea, I wouldn't have been able to finish the project!";
bg.append(p1);

// School Outside
var schoolOutside = document.createElement("div");
schoolOutside.style.left = "12.5%";
schoolOutside.style.top = "66%";
schoolOutside.style.position = "absolute";
schoolOutside.style.transform = "translateX(-50%)";
schoolOutside.style.backgroundImage = "url('Images/School Outside.jpeg')";
var schoolOutsideWidth = 790;
var schoolOutsideHeight = 645;
schoolOutside.style.width = schoolOutsideWidth / 3 + "px"; // Actual Width
schoolOutside.style.height = schoolOutsideHeight / 3 + "px"; // Actual Height
schoolOutside.style.backgroundRepeat = "no-repeat";
schoolOutside.style.backgroundSize = "cover";
schoolOutside.style.backgroundPosition = "center";
bg.append(schoolOutside);

// Running Track
var runningTrack = document.createElement("div");
runningTrack.style.left = "35%";
runningTrack.style.top = "66%";
runningTrack.style.position = "absolute";
runningTrack.style.transform = "translateX(-50%)";
runningTrack.style.backgroundImage = "url('Images/Track.jpeg')";
var runningTrackWidth = 227;
var runningTrackHeight = 227;
runningTrack.style.width = runningTrackWidth * 1 + "px"; // Actual Width
runningTrack.style.height = runningTrackHeight * 1 + "px"; // Actual Height
runningTrack.style.backgroundRepeat = "no-repeat";
runningTrack.style.backgroundSize = "cover";
runningTrack.style.backgroundPosition = "center";
bg.append(runningTrack);

// Robotics
var robotics = document.createElement("div");
robotics.style.left = "60%";
robotics.style.top = "66%";
robotics.style.position = "absolute";
robotics.style.transform = "translateX(-50%)";
robotics.style.backgroundImage = "url('Images/Robotics.jpeg')";
var roboticsWidth = 275;
var roboticsHeight = 183;
robotics.style.width = roboticsWidth * 1 + "px"; // Actual Width
robotics.style.height = roboticsHeight * 1 + "px"; // Actual Height
robotics.style.backgroundRepeat = "no-repeat";
robotics.style.backgroundSize = "cover";
robotics.style.backgroundPosition = "center";
bg.append(robotics);