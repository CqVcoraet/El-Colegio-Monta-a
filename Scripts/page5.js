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
    window.location.href = "page4.html";
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
    window.location.href = "page6.html";
});
bg.append(nextPageButton);

// La Fisica
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
p1.style.textAlign = "center";
p1.innerHTML = "Yo tengo la física es las diez y veintiuno - es las once y cuatro. Me bueno. La regla (inches) y la computerdora. La cienca and labs.";
bg.append(p1);

// Physics Classroom Image
var physicsClassroom = document.createElement("div");
physicsClassroom.style.left = "50%";
physicsClassroom.style.top = "50%";
physicsClassroom.style.position = "absolute";
physicsClassroom.style.transform = "translateX(-50%)";
physicsClassroom.style.backgroundImage = "url('Images/Physics Classroom.jpeg')";
var physicsClassroomWidth = 652;
var physicsClassroomHeight = 652;
physicsClassroom.style.width = physicsClassroomWidth / 1 + "px"; // Actual Width
physicsClassroom.style.height = physicsClassroomHeight / 1 + "px"; // Actual Height
physicsClassroom.style.backgroundRepeat = "no-repeat";
physicsClassroom.style.backgroundSize = "cover";
physicsClassroom.style.backgroundPosition = "center";
bg.append(physicsClassroom);