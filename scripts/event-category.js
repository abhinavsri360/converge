// Data
let cultureData = 
[
  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  }

]

let techData = 
[
  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "Event Name",
    brief_description: "Description of the event",
    link: "./event.html?eventname=TEST",
    image: "./assets/NoPath - Copy (6).png"
  }

]






// Funtion to inject array to page
const InjectArray = (data,title) => {
  document.getElementById('event-category').innerHTML=title
  let output = ``
  data.forEach((event,index) => {
    if(index%2 !==0 ) {
      output+=`
      <div class="event-card row">
                    <div class="event-card-content col-7">
                        <h3>${event.title}</h3>
                        <p>${event.brief_description}</p>
                        <button><a href="${event.link}">Details</a></button>
                    </div>
                    <img src="${event.image}" alt="" class="col-5">
      </div>
      `
    }else {
      output+=`
      <div class="event-card row">
                    <img src="${event.image}" alt="" class="col-5">
                    <div class="event-card-content col-7">
                        <h3>${event.title}</h3>
                        <p>${event.brief_description}</p>
                        <button><a href="${event.link}">Details</a></button>
                    </div>
      </div>
      `
    }
  })
  document.getElementById('event-grid').innerHTML=output
  
}
// Script from here
let searchCategory = window.location.search.split("=")[1]
switch (searchCategory) {
  case "Cultural":
    InjectArray(cultureData,"Cultural Events")
    break;
  case "Technical":
    InjectArray(techData,"Technical Events")
    break;
  case "Informal":
  default:
    window.location.href="404.html"
    break;
}





