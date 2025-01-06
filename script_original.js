const title = document.title;

let code = "";
let speed = 0;

const firstWord = title.split(' ')[0];

switch (firstWord){
case "Cenixa":
code = `
<!DOCTYPE html>
<html>
<head>
  <title>Cenixa | Sydney based web-design agency!</title>
</head>
<body>

  <h1>Empowering small businesses through an effective online presence</h1>
  
  <h2>Tailored web-solutions for your business</h2>


</body>
</html>`;
speed = 45; // Typing speed in milliseconds
break;

case "Services":
code = `
<!DOCTYPE html>
<html>
<head>
  <title>Our Services</title>
</head>
<body>
  <h1>Our Services</h1>
  <ul>
    <li>
      <strong>Web Development</strong>
      <p>We create custom, responsive websites tailored to your business needs, ensuring seamless user experiences across all devices.</p>
    </li>
    
    <li>
      <strong>Branding Services</strong>
      <p>From logos to full brand identity, we help your business stand out with a strong and consistent visual presence.</p>
    </li>
    
    <li>
      <strong>SEO Services</strong>
      <p>Boost your online visibility with our expert SEO strategies designed to increase traffic and improve search engine rankings.</p>
    </li>
    
    <li>
      <strong>Maintenance</strong>
      <p>Keep your website running smoothly with our regular maintenance plans, including updates, backups, and monitoring.</p>
    </li>
    
  </ul>
</body>
</html>`;
speed = 12;
break;
}
    
    let index = 0;


    const typewriterText = document.getElementById("typewriter-text");

    function typeWriter() {
      if (index < code.length) {
        // Add the next character
        if ((index >= 40 && index <= 51)||(index >= 130 && index <= 144) || (index >=332 && index <= 348) || (index >=523 && index <= 534) || (index >=721 && index <= 732)){
          typewriterText.innerHTML += "<strong>" + code.charAt(index) + "</strong>";
        }
        else{
        typewriterText.innerHTML += code.charAt(index);
      }

        index++;
        setTimeout(typeWriter, speed);
      }
    }

    console.log("Our Services starts at:", code.indexOf("Our Services"));
    console.log("Web Development starts at:", code.indexOf("Web Development"));
    console.log("Branding Services starts at:", code.indexOf("Branding Services"));
console.log("SEO Services starts at:", code.indexOf("SEO Services"));
console.log("Maintenance starts at:", code.indexOf("Maintenance")); 

    // Start the typewriter effect
    typeWriter();