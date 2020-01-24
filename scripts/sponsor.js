let sponsordata =  [
  {
    Name: "PrepBytes",
    for: "Associate Partner",
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
    for: "Education Partner",
    Image: "./assets/sponsors/atatrained.png"

  }

]

teamDiv = document.getElementsByClassName("sponsorDiv")[0]

for(var i=0;i<sponsordata.length;i++){


text = 

`
<div class="sponsor">
<div class="sponsorimage">
<img class="sponsorimage" src="${sponsordata[i].Image}" alt="">
</div>
<div class="teamDetails">
  <h5><b>${sponsordata[i].Name}</b></h5>
  <h5>${sponsordata[i].for}</h5>
</div>
</div> 
`




teamDiv.innerHTML = teamDiv.innerHTML + text


}
