let headingarrays = [...document.getElementsByClassName('content-heading')]
let eventContents = [...document.getElementsByClassName('main-content')]


// Injecting data from json



let searchCategory = window.location.search.split("=")[1]
// Logic for collapse menu
const HighlightElement = (index) => {
    // Highlighting headings
    headingarrays.forEach((element,elindex)=> {
        if(elindex!==index) {
            element.classList.remove('bold')
        }else {
            element.classList.add('bold')
        }
    })
    // Displaying or hiding content
    eventContents.forEach((element,elindex)=> {
        if(elindex!=index) {
            element.classList.remove('block')

        }else {
            element.classList.add('block')

        }
    })
}

headingarrays.forEach((element,index) => {
    element.addEventListener('click', HighlightElement.bind(this,index))
});
eventdata=[{
    image:"./assets/NoPath - Copy (6).png",
    venue:"JIIT 128",
    title:"GROOVE",
    date:"2020-02-01",
    time:"00:00:00",
    description:"Description of the event fgschwcvdeywyfv,ewv,jyhfvfew,vfe,wvfew,yfyvbewm,f,wefvb,jrvfrmhvfvfmsdshvm",
    rules:"Here's the rules which you ain't like",
    prizes:"$1,00,000",
    code:'groove'
}];
for (event in eventdata)
{
    if (eventdata[event].code==searchCategory)
    {
        final=eventdata[event];
        break;
    }
}
data=`<div class="container">
<div class=" row event-head-wrapper mb-4">
    <div class="col-sm-4 event-image-wrapper">
        <img src="${final.image}" alt="">
    </div>
    <div class="col-sm-8 event-title-wrapper">
      <h1>${final.title}</h1>
      <div class="venue">
        <h3><b>DATE:</b> ${final.date}</h3>
        <h3><b>TIME:</b> ${final.time}</h3>
        <h3><b>VENUE:</b> ${final.venue}</h3>
      </div>
      <div style="text-align: end;max-width: 90%;margin-top: 35px;">
        <button><a>Register</a></button>
      </div>
    </div>
</div>
<div class="event-content row">
    <ul class="nav">
            <li class="content-heading bold">Description</li>
            <li class="content-heading">Rules</li>
            <li class="content-heading">Prizes</li>
</ul>
<!-- Content Paragraphs -->
<p id="description" class="main-content block">
${final.description}
</p>
<p id="rules" class="main-content">
${final.rules}
</p>
<p id="prizes" class="main-content">
${final.prizes}
</p>
</div>
</div>`
document.getElementById('event').innerHTML=data