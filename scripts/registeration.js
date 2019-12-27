let eventName = window.location.search.split("=")[1]

let formData =

[ {'eventName': "groove",
    'formFields': {
      'Team Name': 'text',
      'College Name': 'text',
      'Email Address': 'email',
      'Contact Number': 'text'
    }
  },
    {'eventName': "abhinay",
    'formFields': {
      'Team Name': 'text',
      'College Name': 'text',
      'Email Address': 'email',
      'Contact Number': 'text',
      'Contact Number 2': 'text'
    }
  }
  ]
let formHtml = document.getElementsByClassName("registrationForm")[0].getElementsByTagName("form")[0].innerHTML

const formFieldsHtml = (eventName) => {
  let formFields
  for(let i=0;i<formData.length;i++)
    {
      if(formData[i].eventName == eventName)
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

document.getElementsByClassName("registrationForm")[0].getElementsByTagName("form")[0].innerHTML = formHtml + formFieldsHtml(eventName) + `<input type="submit" value="Register"></input>`