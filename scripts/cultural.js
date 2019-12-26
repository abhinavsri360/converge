let cultureData = 
[
  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/Events/culture.jpeg"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/Events/culture.jpeg"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/Events/culture.jpeg"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/Events/culture.jpeg"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/Events/culture.jpeg"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/Events/culture.jpeg"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/Events/culture.jpeg"
  }

]

cultureDiv = document.getElementsByClassName("culturalDiv")[0]

for(var i=0; i<cultureData.length; i++)
{

  text = 
  `
  <div class="event">
    <div class="event_title">
      <h2><b>${cultureData[i].title}</b></h2>
    </div>

    <div class="event_image">
      <img src="${cultureData[i].image}">
    </div>

    <div class="event_description">
      <p>${cultureData[i].brief_description}</p>
    </div>

    <div class="event_button">
      <input type="button" name="Register" src="${cultureData[i].link}" value="Register here">
    </div>

  </div>

  `

  cultureDiv.innerHTML = cultureDiv.innerHTML + text

}