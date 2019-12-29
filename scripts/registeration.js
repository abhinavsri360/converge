let eventName = window.location.search.split("=")[1]

let formData =

[ {'code': "groove",
    'formFields': {
      'Team Name': 'text',
      'College Name': 'text',
      'Email Address': 'text',
      'Contact Number': 'text'
    }
  },
    {'code': "abhinay",
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
  document.getElementsByClassName("registrationForm")[0].getElementsByTagName("form")[0].innerHTML = formHtml + formFieldsHtml(eventName) + `<input type="submit" onclick="sendDataToApi()" value="Register"></input>`
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

  }
