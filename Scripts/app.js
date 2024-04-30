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

// Title
var title = document.createElement("div");
title.style.left = "50%";
title.style.top = "30%";
title.style.position = "absolute";
title.style.transform = "translateX(-50%)";
title.style.fontSize = "45px";
title.style.color = "#000000";
title.style.textAlign = "center";
title.style.fontWeight = "bold";
title.innerHTML = "El Colegio Montaña";
bg.append(title);

// Heading
var heading = document.createElement("div");
heading.style.left = "50%";
heading.style.top = "40%";
heading.style.width = bgWidth - 100 + "px";
heading.style.height = "200px";
heading.style.position = "absolute";
heading.style.transform = "translateX(-50%)";
heading.style.fontSize = "32px";
heading.style.color = "#000000";
heading.style.textAlign = "center";
heading.style.fontWeight = "bold";
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
p1.innerHTML = "Welcome to El Colegio Montaña! I am so happy to have you here! We are a high school located on top of a plateu near a mountain range. We are a bit more lax compared to most high schools. However we are not static meaning that we adjust our policies based on the current situation. We want to reward students that want to be good and give effective consequences to combat misbehavior. ";
p1.innerHTML += "We have all the school subjects you'd typically expect but also some fun ones that you wouldn't expect. We have mountain biking as an extra option. This is because we are physically near a mountain range.";
bg.append(p1);


