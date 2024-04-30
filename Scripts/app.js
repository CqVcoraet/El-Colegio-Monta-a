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
heading.style.top = "50%";
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


