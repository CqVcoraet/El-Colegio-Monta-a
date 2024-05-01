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
previousPageButton.style.color = "#000000";
previousPageButton.style.textAlign = "center";
previousPageButton.style.fontWeight = "bold";
previousPageButton.style.fontFamily = "Lexend, sans-serif";
previousPageButton.innerText = "Previous";
previousPageButton.addEventListener("click", function() {
    window.location.href = "index.html";
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
nextPageButton.style.color = "#000000";
nextPageButton.style.textAlign = "center";
nextPageButton.style.fontWeight = "bold";
nextPageButton.style.fontFamily = "Lexend, sans-serif";
nextPageButton.innerText = "Next";
nextPageButton.addEventListener("click", function() {
    window.location.href = "page2.html";
});
bg.append(nextPageButton);

// Attendance Policy
var h2 = document.createElement("div");
h2.style.left = "50%";
h2.style.top = "38%";
h2.style.width = bgWidth - 100 + "px";
h2.style.height = "200px";
h2.style.position = "absolute";
h2.style.transform = "translateX(-50%)";
h2.style.fontSize = "45px";
h2.style.color = "#000000";
h2.style.textAlign = "center";
h2.style.fontWeight = "bold";
h2.style.textDecoration = "underline";
h2.style.fontFamily = "Lexend, sans-serif";
h2.innerHTML = "Attendance Policy";
bg.append(h2);

// Penalties for Excessive Tardiness
var h1 = document.createElement("div");
h1.style.left = "50%";
h1.style.top = "44%";
h1.style.width = bgWidth - 100 + "px";
h1.style.height = "200px";
h1.style.position = "absolute";
h1.style.transform = "translateX(-50%)";
h1.style.fontSize = "35px";
h1.style.color = "#000000";
h1.style.textAlign = "center";
h1.style.fontWeight = "bold";
h1.style.fontFamily = "Lexend, sans-serif";
h1.innerHTML = "Penalties for Excessive Tardiness:";
bg.append(h1);

// Excessive Tardiness Listings
var p1 = document.createElement("div");
p1.style.left = "50%";
p1.style.top = "50%";
p1.style.width = bgWidth - 100 + "px";
p1.style.height = "200px";
p1.style.position = "absolute";
p1.style.transform = "translateX(-50%)";
p1.style.fontSize = "20px";
p1.style.color = "#000000";
p1.style.textAlign = "center";
p1.style.fontFamily = "Lexend, sans-serif";
p1.innerHTML = "10 Tardy Points: Warning from assistant principal.";
p1.innerHTML += "<br>" // Space
p1.innerHTML += "<br> 20 Tardy Points: Warning from assistant principal and parental contact.";
p1.innerHTML += "<br>"; // Space
p1.innerHTML += "<br> 40 Tardy Points: Lunch detention, afternoon school detention, or Saturday school detention and parental contact. Failure to attend detention will result in further consequences.";
p1.innerHTML += "<br>"; // Space
p1.innerHTML += "<br> 60 Tardy Points: Loss of credit and parental contact.";
p1.innerHTML += "<br>"; // Space
p1.innerHTML += "<br> 100 Tardy Points: 3 day suspension / 3 days in-house detention and parental contact.";
p1.innerHTML += "<br>"; // Space
p1.innerHTML += "<br> 130 Tardy Points: Expulsion for the rest of the year.";
bg.append(p1);
