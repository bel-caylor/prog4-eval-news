// const updateUI = require('./UpdateUI.js')
import {port} from '../index.js';
import { callAylienAPI } from './callAylienAPI.js'
// const callAylienAPI = require('./callAylienAPI.js')

const testValidURL = (URL) => {
    let pattern = /http|https:/;
    return pattern.test(URL);
};

function handleSubmit(event) {
    event.preventDefault()

    //test
    testServer();

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

const testServer = async () => {
  const response = await fetch(`${port}/test`);
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch(error) {
    console.log("error", error);
  }
};

export { handleSubmit }
