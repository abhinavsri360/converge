let powereddata=[
  {
    Name: "Grog",
    for: "Powered By",
    Image: "./assets/sponsor/grog.png",
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
    Image: "./assets/sponsor/KTM.png",
    link:'https://www.ktm.com/'
  }
]

let sponsordata =  [
  {
    Name: "Woosh",
    for: "Fashion Partner",
    Image: "./assets/sponsor/WhooshBlack.png",
    link:"https://whoosh.com/"
  },
  {
    Name: "PrepBytes",
    for: "Technical Partner",
    Image: "./assets/sponsor/prepbytes (2).png",
    link:'https://www.prepbytes.com/'

  },
   {
    Name: "Data Trained",
    for: "Training Partner",
    Image: "./assets/sponsor/atatrained.png",
    link:"https://www.datatrained.com/"
  },
  {
    Name: "Anytime Fitness",
    for: "Gyming Partner",
    Image: "./assets/sponsor/AnytimeFitnessLogo.png",
    link:'https://www.anytimefitness.com/'
  },
  // {
  //   Name: "IAS Academy",
  //   for: "Education Partner",
  //   Image: "./assets/sponsor/atatrained.png"

  // }

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
  