let powereddata=[
  {
    Name: "Grog",
    for: "Powered By",
    Image: "./assets/sponsor/9.jpg",
    link:'./'
  },
   {
    Name: "",
    for: "",
    Image: ""
  },
  {
    Name: "",
    for: "",
    Image: ""
  },
  {
    Name: "KTM",
    for: "Associate Partner",
    Image: "./assets/sponsor/4.jpg",
    link:'https://www.ktm.com/'
  }
]

let sponsordata =  [
  {
    Name: "Woosh",
    for: "Fashion Partner",
    Image: "./assets/sponsor/36.jpg",
    link:"https://whoosh.com/"
  },
  {
    Name: "PrepBytes",
    for: "Technical Partner",
    Image: "./assets/sponsor/29.jpg",
    link:'https://www.prepbytes.com/'

  },
   {
    Name: "Data Trained",
    for: "Training Partner",
    Image: "./assets/sponsor/1.jpg",
    link:"https://www.datatrained.com/"
  },
  {
    Name: "Anytime Fitness",
    for: "Gyming Partner",
    Image: "./assets/sponsor/2.jpg",
    link:'https://www.anytimefitness.com/'
  },
  {
    Name: "IAS Academy",
    for: "Education Partner",
    Image: "./assets/sponsor/27.jpg",
    link: 'https://www.nextias.com/'
 },
 {
   Name: "ACE Engineering",
   for: "Learning Partner",
   Image: "./assets/sponsor/23.jpg",
   link: 'https://www.aceenggacademy.com/'
 },
  {
    Name: "Gamers Sanctuary",
    for: "Gaming Partner",
    Image: "./assets/sponsor/15.jpg",
    link: './'
  },
  {
    Name: "Doctor Titoria",
    for: "Medical Partner",
    Image: "./assets/sponsor/21.jpg",
    link: './'
  },
  {
    Name: "FoxMula",
    for: "Internship Partner",
    Image: "./assets/sponsor/12.jpg",
    link: 'https://foxmula.com/'
  },
  {
    Name: "La'Pinoz",
    for: "Italian Food Partner",
    Image: "./assets/sponsor/14.jpg",
    link: 'https://lapinozpizza.in/'
  },
  {
    Name: "Iceberg",
    for: "Beverages Partner",
    Image: "./assets/sponsor/6.jpg",
    link: 'https://www.icebergicecreams.com/'
  },
  {
    Name: "Bowl of China",
    for: "Bowl Partner",
    Image: "./assets/sponsor/18.jpg",
    link: './'
  },
  {
    Name: "Shakti Dhaba",
    for: "North Indian",
    Image: "./assets/sponsor/32.jpg",
    link: './'
  },
  {
    Name: "House of Momos",
    for: "Momo Partner",
    Image: "./assets/sponsor/7.jpg",
    link: './'
  },
  {
    Name: "LFC",
    for: "Chinese Partner",
    Image: "./assets/sponsor/5.jpg",
    link: './'
  },
  {
    Name: "White Cedar Furniture",
    for: "Comfort Partner",
    Image: "./assets/sponsor/35.jpg",
    link: './'
  },
  {
    Name: "Burgrill",
    for: "Burger Partner",
    Image: "./assets/sponsor/20.jpg",
    link: 'https://www.burgrill.in/'
  },
  {
    Name: "Samosa",
    for: "Samosa Partner",
    Image: "./assets/sponsor/40.jpg",
    link: './'
  }

]

teamDiv = document.getElementsByClassName("sponsorDiv")[0]
powered= document.getElementsByClassName("powered")[0]
for(var i=0;i<sponsordata.length;i++){


text = 

`
<div class="sponsor">
<div class="sponsorimage">
<a href="${sponsordata[i].link}"><img class="sponsorimage" src="${sponsordata[i].Image}" alt=""></a>
</div>
<div class="teamDetails">
  <h5><b>${sponsordata[i].for}</b></h5>
  <h5>${sponsordata[i].Name}</h5>
</div>
</div> 
`




teamDiv.innerHTML = teamDiv.innerHTML + text


}

for(var i=0;i<powereddata.length;i++){


  text = 
  
  `
  <div class="sponsor">
  <div class="sponsorimage">
  <a href="${powereddata[i].link}"><img class="sponsorimage" src="${powereddata[i].Image}" alt=""></a>
  </div>
  <div class="teamDetails">
    <h5><b>${powereddata[i].for}</b></h5>
    <h5>${powereddata[i].Name}</h5>
  </div>
  </div> 
  `
  
  
  
  
  powered.innerHTML = powered.innerHTML + text
  
  
  }
  
