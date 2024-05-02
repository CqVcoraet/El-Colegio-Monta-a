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

// Heading
var heading = document.createElement("div");
heading.style.left = "50%";
heading.style.top = "41%";
heading.style.width = bgWidth - 100 + "px";
heading.style.height = "200px";
heading.style.position = "absolute";
heading.style.transform = "translateX(-50%)";
heading.style.fontSize = "35px";
heading.style.color = "#000000";
heading.style.textAlign = "center";
heading.style.fontWeight = "bold";
heading.style.textDecoration = "underline";
heading.style.fontFamily = "Lexend, sans-serif";
heading.innerHTML = "About Our School";
bg.append(heading);

// Intro Paragraph
var p1 = document.createElement("div");
p1.style.left = "50%";
p1.style.top = "45%";
p1.style.width = bgWidth - 100 + "px";
p1.style.height = "400px";
p1.style.position = "absolute";
p1.style.transform = "translateX(-50%)";
p1.style.fontSize = "20px";
p1.style.color = "#000000";
p1.style.textAlign = "center";
p1.style.fontFamily = "Lexend, sans-serif";
p1.innerHTML = "Welcome to El Colegio Montaña! I am so happy to have you here! We are a high school located on top of a plateau near a mountain range. We are a bit more lax compared to most high schools. However, we are not static, meaning that we adjust our policies based on the current situation. We want to reward students who want to be good and give effective consequences to combat misbehavior. ";
p1.innerHTML += "We have all the school subjects you'd typically expect but also some fun ones that you wouldn't expect. We have mountain biking as an extra option. This is because we are physically near a mountain range.";
p1.innerHTML += "This school is a place to learn and have fun. Not to be toxic to each other. Enjoy your 3 years of schooling here! By the way, the logo is AI-generated using Magic Media from Canva. I thought I'd let you know.";
bg.append(p1);

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

// Attendance Policy Paragraph Intro
var p2 = document.createElement("div");
p2.style.left = "50%";
p2.style.top = "64%";
p2.style.width = bgWidth - 100 + "px";
p2.style.height = "400px";
p2.style.position = "absolute";
p2.style.transform = "translateX(-50%)";
p2.style.fontSize = "20px";
p2.style.color = "#000000";
p2.style.textAlign = "center";
p2.style.fontFamily = "Lexend, sans-serif";
p2.innerHTML = "We have a flexible attendance policy. We want to be more lax compared to other schools but be stricter if the person being dealt with is showing that they consistently make bad choices. If you are absent for more than 20 minutes, you will be considered absent. Tardies in this school have scales so being 1 minute late and 15 minutes late are treated very differently. There are no excuses such as \"if you're late, you're late\" or \"better late than never.\"";
bg.append(p2);

// Tardy Policy (Subheading)
var h3 = document.createElement("div");
h3.style.left = "50%";
h3.style.top = "74%";
h3.style.width = bgWidth - 100 + "px";
h3.style.height = "200px";
h3.style.position = "absolute";
h3.style.transform = "translateX(-50%)";
h3.style.fontSize = "28px";
h3.style.color = "#000000";
h3.style.textAlign = "center";
h3.style.fontWeight = "bold";
h3.style.fontFamily = "Lexend, sans-serif";
h3.innerHTML = "Tardy Policy";
bg.append(h3);

// Tardy Policy Paragraph
var p3 = document.createElement("div");
p3.style.left = "50%";
p3.style.top = "77%";
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
bg.append(p3);

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
    window.location.href = "page2.html";
});
bg.append(nextPageButton);




