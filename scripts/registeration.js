let eventName = window.location.search.split("=")[1]
console.log('chane');
let formData =

[ {'code': "camb",
    'formFields': {
      'Name': 'text',
      'College name': 'text',
      'Email address': 'email',
      'Contact number (WhatsApp) ': 'text',
      'Why you want to be a part of this': 'text'
    }
  },

{'code': "groove",
    'formFields': {
      'Team name': 'text',
      'College name': 'text',
      'Email address': 'email',
      'Contact number 1': 'text',
      'Contact number 2': 'text',
      'Number of participants': 'number',
      'Video link for Preliminary Round' : 'url'
    }
  },
  {'code': "inquizzitive",
      'formFields': {
        'Name': 'text',
        'year': 'number',
        'college': 'text',
        'phone no': 'text',
        'Email': 'email',
        'Team name': 'text',
        'Team size(1 or 2)': 'number',
        'Team members': 'text'
      }
  },
  {'code': "rihaa",
      'formFields': {
        'College Name': 'text',
        'Team Name': 'text',
        'No of Participants': 'number',
        'Contact No (POC 1)': 'text',
        'Contact No (POC 2)': 'text',
        'Email ID': 'email'
      }
  },
  {'code': "mehfil",
      'formFields': {
        'Name of Participant': 'text',
        'College Name': 'text',
        'Contact No': 'text',
        'Email ID': 'email'
      }
  },
  {'code': "advaya",
      'formFields': {
        'Participant Name': 'text',
        'Participant Contact Number': 'text',
        'Participant Email ID': 'email',
        'College Name': 'text',
        'City': 'text'
      }
  },
  {'code': "sabrang",
      'formFields': {
        'College Name': 'text',
        'City': 'text',
        'Team Name': 'text',
        'Team Size': 'number',
        'Person Of Contact (POC) Name': 'text',
        'POC Contact Number': 'text',
        'POC Email Id': 'email'
      }
  },
  {'code': "ppr",
      'formFields': {
        'Team Leader\'s Name': 'text',
        'Team Leader\'s Contact': 'text',
        'Team Leader\'s Email': 'email',
        'Team Name': 'text',
        'College Name': 'text'
      }
  },
  {'code': "fts",
      'formFields': {
        'Name': 'text',
        'Email': 'email',
        'Contact': 'text',
        'College Name': 'text'
      }
  },
  {'code': "poise",
      'formFields': {
        'Team name': 'text',
        'College name': 'text',
        'Number of team members': 'number',
        'Name of president': 'text',
        'Email ID of president': 'email',
        'Contact number of president': 'text',
        'Name of vice President': 'text',
        'Email ID of vice President': 'email',
        'Contact number of vice Presidet': 'text'
      }
  },
  {'code': "mconv",
      'formFields': {
        'Full name': 'text',
        'Contact number': 'text',
        'Email ID': 'email',
        'Enrollment number': 'number'
      }
  },
  {
    'code': "adsmd",
      'formFields': {
        'Full name': 'text',
        'College name': 'text',
        'Contact number': 'number'
      }
  },
  {
    'code': "jzbaat",
      'formFields': {
        'Full name': 'text',
        'College name': 'text',
        'Contact number': 'number'
      }
  },
  {
    'code': "crsd",
      'formFields': {
        "Band Name": 'text',
        "Band's official e-mail ID OR any one member's e-mail ID": 'email',
        "College name": 'text',
        'Member 1 Name': 'text',
        'Member 1 Contact': 'number',
        'Member 2 Name': 'text',
        'Member 2 Contact': 'number',
        'Member 3 Name': 'text',
        'Member 3 Contact': 'number',
        'Member 4 Name': 'text',
        'Member 4 Contact': 'number',
        'Member 5 Name': 'text',
        'Member 5 Contact': 'number',
        'Member 6 Name': 'text',
        'Member 6 Contact': 'number',
        'Member 7 Name': 'text',
        'Member 7 Contact': 'number',
      }
  },
  {
    'code': "acst",
      'formFields': {
        'Full name': 'text',
        'College name': 'text',
        'Contact number': 'number',
        'Email id:': 'email'
      }
  },
  {
    'code': "marathon",
      'formFields': {
        'First name': 'text',
        'Last name': 'text',
        'College name': 'text',
        'Email id': 'email',
        'Previous participations in marathon (yes/no)': 'text',
      }
  },
  {
    'code': "bdmntnboys",
      'formFields': {
        'College name': 'text',
          'Team Captain Name': 'text',
        'Contact no': 'text',
          'Email ID': 'email',
        'No of Players': 'text',
        'Accommodation required or not': 'text',
      }
  },
  {
    'code': "bdmntngirls",
      'formFields': {
        'College name': 'text',
          'Team Captain Name': 'text',
        'Contact no': 'text',
          'Email ID': 'email',
        'No of Players': 'text',
        'Accommodation required or not': 'text',
      }
  },
  {
    'code': "vllyballb",
      'formFields': {
        'College name': 'text',
        'Team Captain Name': 'text',
        'Contact no': 'text',
          'Email ID': 'email',
        'No of Players': 'text',
        'Accommodation required or not': 'text',
      }
  },
  {
    'code': "vllyballg",
      'formFields': {
        'College name': 'text',
        'Team Captain Name': 'text',
        'Contact no': 'text',
          'Email ID': 'email',
        'No of Players': 'text',
        'Accommodation required or not': 'text',
      }
  },
  {
    'code': "football",
    'formFields': {
      'College name': 'text',
      'Team Captain Name': 'text',
      'Contact no': 'text',
        'Email ID': 'email',
      'No of Players': 'text',
      'Accommodation required or not': 'text',
    }
  },
  {
    'code': "tt",
    'formFields': {
      'College name': 'text',
      'Team Captain Name': 'text',
      'Contact no': 'text',
        'Email ID': 'email',
      'No of Players': 'text',
      'Accommodation required or not': 'text',
    }
  },
  {
    'code': "crckt",
    'formFields': {
      'College name': 'text',
      'Team Captain Name': 'text',
      'Contact no': 'text',
        'Email ID': 'email',
      'No of Players': 'text',
      'Accommodation required or not': 'text',
    }
  },
 {
    'code': "bbb",
    'formFields': {
      'College name': 'text',
      'Team Captain Name': 'text',
      'Contact no': 'text',
        'Email ID': 'email',
      'No of Players': 'text',
      'Accommodation required or not': 'text',
    }
  },
 {
    'code': "bbg",
    'formFields': {
      'College name': 'text',
      'Team Captain Name': 'text',
      'Contact no': 'text',
        'Email ID': 'email',
      'No of Players': 'text',
      'Accommodation required or not': 'text',
    }
  },
 {
    'code': "chess",
    'formFields': {
      'College name': 'text',
      'Team Captain Name': 'text',
      'Contact no': 'text',
        'Email ID': 'email',
      'No of Players': 'text',
      'Accommodation required or not': 'text',
    }
  },
  {
    'code': "algoflux",
      'formFields': {
        'Name': 'text',
        'email': 'email',
        'Phone no': 'text',
        'College name': 'text',
        'year': 'text',
      }
  },
  {
    'code': "codft",
      'formFields': {
        'Name': 'text',
        'College name': 'text',
        'email': 'email',
        'year': 'text',
        'Phone no': 'text',
      }
  },
  {
    'code': "rpdfire",
      'formFields': {
        'Name': 'text',
        'email': 'email',
        'Phone no': 'text',
        'College name': 'text',
        'year': 'text',
      }
  },
{
    'code': "rlms",
      'formFields': {
        'Name': 'text',
        'Enrollment number': 'text',
        'Phone no': 'text',
      }
  },
  {
    'code': "leanon",
      'formFields': {
        'Name (first member)': 'text',
        'Enrollment number (first member)': 'text',
        'Phone no (first member)': 'text',
        'Name (second member)': 'text',
        'Enrollment number (second member)': 'text',
        'Phone no (second member)': 'text',
      }
  },
  {
    'code': "bubble",
      'formFields': {
        'Name': 'text',
        'Enrollment number': 'text',
        'Phone no': 'text',
      }
  },
  {
    'code': "shoot",
      'formFields': {
        'Name': 'text',
        'Enrollment number': 'text',
        'Phone no': 'text',
      }
  },
  {
    'code': "flipr",
      'formFields': {
        'Name': 'text',
        'Enrollment number': 'text',
        'Phone no': 'text',
      }
  },
  {
    'code': "trsrhnt",
      'formFields': {
        'Name': 'text',
        'Enrollment number': 'text',
        'Phone no': 'text',
      }
  },
  {
    'code': "bbs",
      'formFields': {
        'Name': 'text',
        'Enrollment number': 'text',
        'Phone no': 'text',
      }
  },
  {
    'code': "bheja",
      'formFields': {
        'Name': 'text',
        'Enrollment number': 'text',
        'Phone no': 'text',
      }
  },
  {
    'code': "roboH",
      'formFields': {
        'Team Name': 'text',
        'College Name': 'text',
        'Team Size': 'number',
        'Member1 Name': 'text',
        'Member1 Email': 'email',
        'Member1 Phone': 'text',
        'Member2 Name': 'text',
        'Member2 Phone': 'text',
        'Member3 Name': 'text',
        'Member3 Phone': 'text',
        'Member4 Name': 'text',
        'Member4 Phone': 'text'
      }
  },
  {
    'code': "checkM",
      'formFields': {
        'Team Name': 'text',
        'College Name': 'text',
        'Team Size': 'number',
        'Member1 Name': 'text',
        'Member1 Email': 'email',
        'Member1 Phone': 'text',
        'Member2 Name': 'text',
        'Member2 Phone': 'text',
        'Member3 Name': 'text',
        'Member3 Phone': 'text',
        'Member4 Name': 'text',
        'Member4 Phone': 'text'

      }
  }
];
let formHtml = document.getElementsByClassName("registrationForm")[0].getElementsByTagName("form")[0].innerHTML

const formFieldsHtml = (eventName) => {
  let formFields
  for(let i=0;i<formData.length;i++)
    {
      if(formData[i].code == eventName)
        {
formFields = formData[i].formFields
        }
    }
    let formFieldsTag = ""

    for (let key in formFields){
      if(formFields.hasOwnProperty(key)){
        let temp = `
        <p>${key}</p>
                    <input type="${formFields[key]}" name="${key}" required autocomplete="off">
        `
        formFieldsTag += temp
      }
   }
   return formFieldsTag
}
if(eventName)
 {document.getElementsByClassName("registrationForm")[0].getElementsByTagName("form")[0].innerHTML = formHtml + formFieldsHtml(eventName) + `<input type="submit" value="Register"></input>`
 if(eventName==='camb')
 document.getElementById('hltsheading').innerText='Campus Ambassador'
}
else
  window.location = './404.html'

  const sendDataToApi = () => {
    document.getElementsByClassName('create_edit_loading')[0].style.display = "block";
    let inputs = document.getElementsByClassName("registrationForm")[0].getElementsByTagName("form")[0].getElementsByTagName("input")
    userData = {
    }
    for(let i=0;i<inputs.length - 1 ; i++) { //-1 coz last input is button
      userData[inputs[i].name] = inputs[i].value
    }
    let json = {
      'event': eventName,
      'userData': userData
    }
    $.ajax(
      { url: 'https://converge2020.herokuapp.com/postFormData',
        data: JSON.stringify({'formData': json}),
        contentType: 'application/json',
        type: 'POST',
        error: function(){
          window.location.href = `404.html`
      },
        success: function(data, status){
          console.log("Check")
        window.location.href = `confirm.html`
        },
        timeout: 10000
        });
        console.log(JSON.stringify({'formData': json}))
    return false; //added to cancel the submit operation
  }
