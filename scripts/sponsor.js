let powereddata=[
  {
    Name: "Grog",
    for: "Powered By",
    Image: "./assets/sponsor/grog.png"

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
    Image: "./assets/sponsor/KTM.png"
  }
]

let sponsordata =  [
  {
    Name: "Youth Incorporated",
    for: "Youth Media Partner",
    Image: "./assets/sponsors/Logo.png"
  },
  {
    Name: "PrepBytes",
    for: "Technical Partner",
    Image: "./assets/sponsors/PrepBytes.png"

  },
   {
    Name: "Youth Incorporated",
    for: "Youth Media Partner",
    Image: "./assets/sponsors/Logo.png"
  },
  {
    Name: "Fiesto.live",
    for: "Media Partner",
    Image: "./assets/sponsors/Fiesto.png"

  },
  {
    Name: "Datatrained",
    for: "Training Partner",
    Image: "./assets/sponsors/atatrained.png"

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
  <h5><b>${sponsordata[i].Name}</b></h5>
  <h5>${sponsordata[i].for}</h5>
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
    <h5><b>${powereddata[i].Name}</b></h5>
    <h5>${powereddata[i].for}</h5>
  </div>
  </div> 
  `
  
  
  
  
  powered.innerHTML = powered.innerHTML + text
  
  
  }
  