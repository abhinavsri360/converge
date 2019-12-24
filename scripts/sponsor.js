let sponsordata =  [
  {
    Name: "sponsor",
    for: "type",
    Image: "./assets/sponsors/conlogo.png"

  },

  {
    Name: "sponsor",
    for: "type",
    Image: "./assets/sponsors/conlogo.png"

  },

  {
    Name: "sponsor",
    for: "type",
    Image: "./assets/sponsors/conlogo.png"

  },
  {
    Name: "sponsor",
    for: "type",
    Image: "./assets/sponsors/conlogo.png"

  },
  {
    Name: "sponsor",
    for: "type",
    Image: "./assets/sponsors/conlogo.png"

  },
  {
    Name: "sponsor",
    for: "type",
    Image: "./assets/sponsors/conlogo.png"

  },
  {
    Name: "sponsor",
    for: "type",
    Image: "./assets/sponsors/conlogo.png"

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