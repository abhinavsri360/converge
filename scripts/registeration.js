let eventName = window.location.search.split("=")[1]

let formData =

[ {'code': "groove",
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
  {'code': "Inquizzitive",
      'formFields': {
        'Name': 'text',
        'year': 'number',
        'college': 'text',
        'phone no.': 'text',
        'Email': 'email',
        'Team name': 'text',
        'Team size(1 or 2)': 'number',
        'Team members': 'text',
        'Team members details': 'text'
      }
  },
  {'code': "rihaa",
      'formFields': {
        'College Name': 'text',
        'Team Name': 'text',
        'No. of Participants': 'number',
        'Contact No.(POC 1)': 'text',
        'Contact No. (POC 2)': 'text',
        'Email ID.': 'email'
      }
  },
  {'code': "mehfil",
      'formFields': {
        'Name of Participant': 'text',
        'College Name': 'text',
        'Contact No.': 'text',
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
  }
  ]
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
 document.getElementsByClassName("registrationForm")[0].getElementsByTagName("form")[0].innerHTML = formHtml + formFieldsHtml(eventName) + `<input type="submit" value="Register"></input>`
else
  window.location = './404.html'

  const sendDataToApi = () => {
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
        success: function(data, status){
          alert("Check")
        window.location.href = `index.html`
        }
        });
        alert(JSON.stringify({'formData': json}))
    return false; //added to cancel the submit operation
  }
