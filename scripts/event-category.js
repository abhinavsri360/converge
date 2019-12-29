// Data
let cultureData = 
[
  {
    title: "GROOVE",
    brief_description: "Description of the event",
    link: "./event.html?eventname=groove",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "RIHAA",
    brief_description: "Description of the event",
    link: "./event.html?eventname=rihaa",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "MEHFIL",
    brief_description: "Description of the event",
    link: "./event.html?eventname=mehfil",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "ADVAYA",
    brief_description: "Description of the event",
    link: "./event.html?eventname=advaya",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "SABRANG",
    brief_description: "Description of the event",
    link: "./event.html?eventname=sabrang",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "PLAY PAUSE REWIND",
    brief_description: "Description of the event",
    link: "./event.html?eventname=ppr",
    image: "./assets/NoPath - Copy (6).png"
  },

  {
    title: "FLUTTER THE SHUTTER",
    brief_description: "Description of the event",
    link: "./event.html?eventname=fts",
    image: "./assets/NoPath - Copy (6).png"
  },
  {
    title: "POISE",
    brief_description: "Description of the event",
    link: "./event.html?eventname=poise",
    image: "./assets/NoPath - Copy (6).png"
  },
  {
    title: "MR and MS CONVERGE",
    brief_description: "Description of the event",
    link: "./event.html?eventname=mconv",
    image: "./assets/NoPath - Copy (6).png"
  }

]

let techData = []

let informalarray=[]

let literaryarray=[]

let sportsarray=[]

// Funtion to inject array to page
const InjectArray = (data,title) => {
  document.getElementById('event-category').innerHTML=title
  let output = ``
  data.forEach((event,index) => {
    if(index%2 !==0 ) {
      output+=`
      <div class="event-card row flexReverse">
                    <img src="${event.image}" alt="" class="col-sm-5">
                    <div class="event-card-content col-sm-7">
                        <h3>${event.title}</h3>
                        <p>${event.brief_description}</p>
                        <button><a href="${event.link}">Details</a></button>
                    </div>
      </div>
      `
    }else {
      output+=`
      <div class="event-card row">
                    <img src="${event.image}" alt="" class="col-sm-5">
                    <div class="event-card-content col-sm-7">
                        <h3>${event.title}</h3>
                        <p>${event.brief_description}</p>
                        <button><a href="${event.link}">Details</a></button>
                    </div>
      </div>
      `
    }
  })
  if(output.length===0) {
    output="<div class='myalert'>Sorry, no events yet added!</div><div class='myalert'>Will be updated soon!</div>"
  }
  document.getElementById('event-grid').innerHTML=output
  
}
// Script from here
let searchCategory = window.location.search.split("=")[1]
switch (searchCategory) {
  case "cultural":
    InjectArray(cultureData,"Cultural Events")
    break;
  case "technical":
    InjectArray(techData,"Technical Events")
    break;
  case "informal":
  InjectArray(informalarray,"Informal Events")
  break;
  case "sports":
  InjectArray(sportsarray,"Sports Events")
  break;
  case "literary":
  InjectArray(literaryarray,"Literary Events")
  break;
  default:
    window.location.href="404.html"
    break;
}





