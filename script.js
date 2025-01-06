const title = document.title;

let code = "";
let speed = 0;

let indexCenixa, indexEmpowering;
let indexOS, indexWD, indexBS, indexSS, indexM;
let indexAbout;
let indexContact, indexPhone, indexEmail, indexAddress;
let index = 0;

const typewriterText = document.getElementById("typewriter-text");

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
indexCenixa = code.indexOf("Cenixa");
indexEmpowering = code.indexOf("Empowering");
speed = 10; // Typing speed in milliseconds
break;

case "Services":
code = `
<!DOCTYPE html>
<html>
<head>
  <title>Our-Services</title>
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
indexOS = code.indexOf("Our Services");
indexWD = code.indexOf("Web Development");
indexBS = code.indexOf("Branding Services");
indexSS = code.indexOf("SEO Services");
indexM = code.indexOf("Maintenance");
speed = 12;
break;

case "About":
code = `
<!DOCTYPE html>
<html>
<head>
  <title>About-Us</title>
</head>
<body>

  <h1>About Us</h1>
  
  <p>At Cenixa, we are passionate about creating exceptional digital experiences that empower businesses to succeed in today's competitive landscape. With a dedicated team of experts and a commitment to quality, we strive to deliver practical solutions that drive growth and elevate brands to new heights.</p>
  <p>Our mission is to help businesses succeed in the digital age by telling their unique stories through innovative technology, creative design, and strategic digital marketing.</p>


</body>
</html>`;
indexAbout = code.indexOf("About Us");
speed = 10; // Typing speed in milliseconds
break;

case "Contact":
code = `
<!DOCTYPE html>
<html>
<head>
  <title>Contact-Us</title>
</head>
<body>

  <h1>Contact Us</h1>
  
  <p>We'd love to hear from you! Whether you have questions about our services, want to discuss a project, or just want to say hello, feel free to reach out to us using the contact form below or the contact information provided. Our team is ready to assist you and provide the best solution for your needs. </p>
 
  <div class = "communication_channels">
    <ul>
      <li>Email: contact@cenixa.com.au</li>
      <li>Phone: 0410 450 796</li>
      <li>Address: 27 Bigge Street, Liverpool NSW 2170</li>
    </ul>
  </div>

  <p>Alternatively, you can use the contact form below!</p>
  <form>
`;
indexContact = code.indexOf("Contact Us");
indexPhone = code.indexOf("Phone");
indexEmail = code.indexOf("Email");
indexAddress = code.indexOf("Address");
speed = 5; // Typing speed in milliseconds
break;

}



function typeWriter() {
  if (index < code.length) {
        // Add the next character
        if (firstWord === "Services"){
          if ((index >= indexOS && index <= (indexOS + 11))||(index >= indexWD && index <= (indexWD + 14)) || (index >=indexBS && index <= (indexBS + 16)) || (index >=indexSS && index <= (indexSS + 11)) || (index >=indexM && index <= (indexM + 10))){
            typewriterText.innerHTML += "<strong>" + code.charAt(index) + "</strong>";
          }
          else{
            typewriterText.innerHTML += code.charAt(index);
          }
        }
        else if (firstWord === "Cenixa"){
          if ((index >= indexCenixa && index <= (indexCenixa + 39))||(index >= indexEmpowering && index <= (indexEmpowering + 63))){
            typewriterText.innerHTML += "<strong>" + code.charAt(index) + "</strong>";
          }
          else{
            typewriterText.innerHTML += code.charAt(index);

          }
        }
        else if (firstWord === "About"){
          if((index >= indexAbout && index <= (indexAbout + 7))){
             typewriterText.innerHTML += "<strong>" + code.charAt(index) + "</strong>"; 
          }
          else{
             typewriterText.innerHTML += code.charAt(index); 
          }
        }

        else if (firstWord === "Contact"){
          if((index >= indexContact && index <= (indexContact + 9)) || (index >= indexPhone && index <= (indexPhone + 5)) || (index >= indexEmail && index <= (indexEmail + 5)) || (index >= indexAddress && index <= (indexAddress + 7))){
             typewriterText.innerHTML += "<strong>" + code.charAt(index) + "</strong>"; 
          }
          else{
             typewriterText.innerHTML += code.charAt(index); 
          }
        }

        index++;
        setTimeout(typeWriter, speed);
      }
}
    

console.log("Cenixa starts at:", code.indexOf("Cenixa"));
console.log("About Us starts at:", code.indexOf("About Us"));
console.log("Our Services starts at:", code.indexOf("Our Services"));
console.log("Web Development starts at:", code.indexOf("Web Development"));
console.log("Branding Services starts at:", code.indexOf("Branding Services"));
console.log("SEO Services starts at:", code.indexOf("SEO Services"));
console.log("Maintenance starts at:", code.indexOf("Maintenance")); 

    // Start the typewriter effect
    typeWriter();
