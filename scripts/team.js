let teamData =

[ {'Name': 'Atul',
'Image': './assets/team/18.jpg',
'Position': 'Vice President',
'Facebook': 'https://www.facebook.com/atul.upadhyay.14811692',
'Linkedin': 'https://www.linkedin.com/in/atul-upadhyay-293681160'},
{'Name': 'Shuddhatm Jain',
  'Image': './assets/team/8.jpg',
  'Position': 'General Secretary ',
  'Facebook': 'https://www.facebook.com/shuddhatm.jain.7',
  'Linkedin': 'https://www.linkedin.com/in/shuddhatm-jain-6ab2b2150'},
{'Name': 'Prateek Jain',
'Image': './assets/team/19.jpg',
'Position': 'Public Relations Head',
'Facebook': 'https://m.facebook.com/profile.php',
'Linkedin': 'https://www.linkedin.com/mwlite/me'},
{'Name': 'Ashita',
  'Image': './assets/team/14.jpg',
  'Position': 'Public Relations head',
  'Facebook': '',
  'Linkedin': ''},
  {'Name': 'Eti Agarwal',
   'Image': './assets/team/23.jpg',
   'Position': 'Public Relations Head',
   'Facebook': 'https://m.facebook.com/eti.agrawal.7?',
   'Linkedin': ' https://www.linkedin.com/in/eti-agarwal-28020b154'},
   {'Name': 'Tushar Goel',
   'Image': './assets/team/2.jpg',
   'Position': 'Technical Head',
   'Facebook': 'https://facebook.com/tushar.goel.904',
   'Linkedin': 'https://www.linkedin.com/in/tushar-goel-53b09411a'},
   {'Name': 'Kartikay Bhutani',
   'Image': './assets/team/24.jpg',
   'Position': 'Prismatic Head',
   'Facebook': 'https://m.facebook.com/eti.agrawal.7?',
   'Linkedin': ' https://www.linkedin.com/in/eti-agarwal-28020b154'},
  {'Name': 'Nitin Singhal',
  'Image': './assets/team/25.jpg',
  'Position': 'UX UI Head',
  'Facebook': 'https://www.facebook.com/nitin10s',
  'Linkedin': 'https://in.linkedin.com/in/nitin-singhal-10s'},
  {'Name': 'Lakshya Khera',
  'Image': './assets/team/26.jpg',
  'Position': 'Web Designing Head',
  'Facebook': 'https://www.facebook.com/lakshya.khera2212',
  'Linkedin': 'https://in.linkedin.com/in/lakshya-khera-52b67718'},
  {'Name': 'HARSH VARSHNEY',
  'Image': './assets/team/9.jpg',
  'Position': 'Photography Head',
  'Facebook': 'https://www.facebook.com/gabruh',
  'Linkedin': 'https://www.linkedin.com/in/harsh-varshney-5b4514168/'},
  {'Name': 'Dhiraj Wadhwa',
  'Image': './assets/team/13.jpg',
  'Position': 'Cinekala Head',
  'Facebook': 'https://www.facebook.com/dhiraj3108',
  'Linkedin': 'https://www.linkedin.com/in/dhirajwadhwa'},
  {'Name': 'Jahanvi Goyal',
  'Image': './assets/team/1.jpg',
  'Position': 'Fashion society - Panache Head',
  'Facebook': 'https://www.facebook.com/goyal.jahanvi18',
  'Linkedin': 'https://www.linkedin.com/in/jahanvi-goyal-08486517a'},
 {'Name': 'Kashvi Saxena',
  'Image': './assets/team/6.jpg',
  'Position': 'Fortissimo (Music Society) Head ',
  'Facebook': 'https://www.facebook.com/kashvi.saxena.79',
  'Linkedin': ''},
  {'Name': 'Parth Sethi ',
  'Image': './assets/team/10.jpg',
  'Position': 'Bhangde De Sartaaj Head',
  'Facebook': 'https://www.facebook.com/parth.sethi.5621',
  'Linkedin': ''},
 {'Name': 'Sugandha Pathak ',
  'Image': './assets/team/11.jpg',
  'Position': 'Aakriti Head',
  'Facebook': '',
  'Linkedin': 'https://www.linkedin.com/in/sugandha-pathak-4027a5177'},
  {'Name': 'Megha Goel',
  'Image': './assets/team/17.jpg',
  'Position': 'Aakriti Head',
  'Facebook': 'https://m.facebook.com/profile.php?ref=bookmarks',
  'Linkedin': ''},
 {'Name': 'Pranav',
  'Image': './assets/team/20.jpg',
  'Position': 'Western Dance Society Head ',
  'Facebook': 'https://www.facebook.com/pranav.mangla',
  'Linkedin': ''},
 {'Name': 'Harshit Singh',
  'Image': './assets/team/16.jpg',
  'Position': 'ABHIVYAKTI Head',
  'Facebook': '',
  'Linkedin': ''},
  {'Name': 'Anubhav Sanyal',
  'Image': './assets/team/7.jpg',
  'Position': 'Literary Head',
  'Facebook': 'https://www.facebook.com/anubhav.sanyal09',
  'Linkedin': 'https://www.linkedin.com/in/anubhav-sanyal-424852192'},
  {'Name': 'SHIKHAR KATARUKA',
  'Image': './assets/team/12.jpg',
  'Position': 'Treasurer',
  'Facebook': 'https://m.facebook.com/shikhar.kataruka.1',
  'Linkedin': 'https://linkedin.com/in/shikhar9820'},
 {'Name': 'Shubham Singh',
  'Image': './assets/team/21.jpg',
  'Position': 'CICR Head',
  'Facebook': '',
  'Linkedin': ''},
  {'Name': 'Utkarsh Srivastava',
  'Image': './assets/team/15.jpg',
  'Position': 'CICR Head',
  'Facebook': 'https://bit.ly/2EJ9wlT',
  'Linkedin': 'https://bit.ly/34Nra2D'},
 {'Name': 'Shubham Shahi',
  'Image': './assets/team/22.jpg',
  'Position': 'CICR Head',
  'Facebook': 'https://www.facebook.com/shubham.shahi.102',
  'Linkedin': 'https://www.linkedin.com/in/shubham-s-200146111/'},
  {'Name': 'Vipul kumar',
  'Image': './assets/team/4.jpg',
  'Position': 'Chief editor',
  'Facebook': 'https://www.facebook.com/vipulsatyendra',
  'Linkedin': 'https://www.linkedin.com/in/vipul-satyendra-b95747151'}]


teamDiv = document.getElementsByClassName("teamImageDiv")[0]

for (var i = 0; i < teamData.length; i++) {


    text =

        `
<div class="teamMember">
<div class="teamSocialHandle">
<img class="teamImage" src="${teamData[i].Image}" alt="">
<div class="teamSocialLinks">
  <a href="${teamData[i].Facebook}"  target="_blank"><img  class="facebook" src="./assets/facebook-logo.svg"/></a>
  <a href="${teamData[i].Linkedin}" target="_blank" ><img  class="linkedin" src="./assets/linkedin-logo.svg"/></a>
</div>
</div>
<div class="teamDetails">
  <h5><b>${teamData[i].Name}</b></h5>
  <h6>${teamData[i].Position}</h6>
</div>
</div>
`




    teamDiv.innerHTML = teamDiv.innerHTML + text


}
