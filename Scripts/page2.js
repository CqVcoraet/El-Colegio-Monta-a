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

// Attendance Policy
var h2 = document.createElement("div");
h2.style.left = "50%";
h2.style.top = "60%";
h2.style.width = bgWidth - 100 + "px";
h2.style.height = "200px";
h2.style.position = "absolute";
h2.style.transform = "translateX(-50%)";
h2.style.fontSize = "35px";
h2.style.color = "#000000";
h2.style.textAlign = "center";
h2.style.fontWeight = "bold";
h2.style.textDecoration = "underline";
h2.style.fontFamily = "Lexend, sans-serif";
h2.innerHTML = "Attendance Policy";
bg.append(h2);

// Tardy Policy Paragraph
var p3 = document.createElement("div");
p3.style.left = "50%";
p3.style.top = "72%";
p3.style.width = bgWidth - 100 + "px";
p3.style.height = "400px";
p3.style.position = "absolute";
p3.style.transform = "translateX(-50%)";
p3.style.fontSize = "20px";
p3.style.color = "#000000";
p3.style.textAlign = "center";
p3.style.fontFamily = "Lexend, sans-serif";
p3.innerHTML = "Our tardy policy is lax compared to most high schools in the state. We have tardy scales which gives you more tardy points, the more late you are. This means that being late by 15 minutes will get you detentions way faster than being 1 minute late. We are kind enough to not consider being late under a minute as a tardy. The following below are the tardy scales:";
p3.innerHTML += "<br>"; // Space
p3.innerHTML += "<br> On Time/ Margin of Error: < 1 minute (0 Tardy Points)";
p3.innerHTML += "<br> Slightly Late: 1 - 3 minutes (1 Tardy Point)";
p3.innerHTML += "<br> Late: 4 - 8 minutes (5 Tardy Points)";
p3.innerHTML += "<br> Very Late: 9 - 15 minutes (10 Tardy Points)";
p3.innerHTML += "<br> Extremely Late: 16 - 19 minutes (20 Tardy Points)";
p3.innerHTML += "<br> Absent: 20+ minutes (1 Absence)";
p3.innerHTML += "<br>"; // Space
p3.innerHTML += "<br> <b> Penalties for Excessive Tardiness: </b>"
bg.append(p3);