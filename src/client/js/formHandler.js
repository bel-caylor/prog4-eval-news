// const updateUI = require('./UpdateUI.js')
const callAylienAPI = require('./callAylienAPI.js')

const testValidURL = (URL) => {
    let pattern = /http|https:/;
    return pattern.test(URL);
};

function handleSubmit(event) {
    event.preventDefault()

    //console.log(formURL)
    let formURL = document.getElementById('formURL').value

    if (testValidURL(formURL) == true) {
      callAylienAPI(formURL)
        .then(updateUI())
    }else {
      alert('Please enter a valid URL')
    }
    // setTimeout(updateUI,10000)
      // .then()
}


export { handleSubmit }
