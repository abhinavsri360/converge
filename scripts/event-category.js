// Data
let cultureData =
[
  {
    title: "GROOVE",
    brief_description: "Dance Competition",
    link: "./event.html?eventname=groove",
    image: "./assets/Events/groove.png"
  },

  {
    title: "RIHAA",
    brief_description: "Street Play Event",
    link: "./event.html?eventname=rihaa",
    image: "./assets/Events/rihaa.png"
  },

  {
    title: "MEHFIL",
    brief_description: "The Open Mic Show",
    link: "./event.html?eventname=mehfil",
    image: "./assets/Events/mehfil.png"
  },

  {
    title: "ADVAYA",
    brief_description: "Solo Folk/Classical Dance Competition",
    link: "./event.html?eventname=advaya",
    image:"./assets/Events/advaya.png"
  },

  {
    title: "SABRANG",
    brief_description: "Group Folk Dance Competition",
    link: "./event.html?eventname=sabrang",
    image: "./assets/Events/sabrang.png"
  },

  {
    title: "PLAY PAUSE REWIND",
    brief_description: "Short Film Making contest to showcase your work.",
    link: "./event.html?eventname=ppr",
    image: "./assets/Events/ppr.png"
  },

  {
    title: "FLUTTER THE SHUTTER",
    brief_description: "Showcase your amazing photographs in an Online Competition.",
    link: "./event.html?eventname=fts",
    image: "./assets/Events/fts.png"
  },
  {
    title: "POISE",
    brief_description: "Fashion event of JIIT",
    link: "./event.html?eventname=poise",
    image: "./assets/Events/poise.png"
  },
  {
    title: "MR and MS CONVERGE",
    brief_description: "Fashion Competition for Mr and Mrs Converge",
    link: "./event.html?eventname=mconv",
    image: "./assets/Events/mmc.png"
  }

]

let techData = []

let informalarray=[]

let literaryarray=[
  {
    title: "Adi Shankaracharya Memorial Debate",
    brief_description: "Battle of words to show how can you convince audience and your opposition.",
    link: "./event.html?eventname=adsmd",
    image: "./assets/Events/adsmd.jpg"
  },
  {
    title: "Jazbaat- The Open Mic Show",
    brief_description: "Show us your talent in Poetry , Stand-up or story telling and mesmerize the audience with your talent",
    link: "./event.html?eventname=jzbaat",
    image: "./assets/Events/jzbaat.jpg"
  }
];

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
