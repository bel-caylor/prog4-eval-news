const updateUI = require('./UpdateUI.js')
import {port} from '../index.js';
import { callAylienAPI } from './callAylienAPI.js'

const testValidURL = (URL) => {
    let pattern = /http|https:/;
    return pattern.test(URL);
};

function handleSubmit(event) {
    event.preventDefault()

    let formURL = document.getElementById('formURL').value

    if (testValidURL(formURL) == true) {
      callAylienAPI(formURL)
    }else {
      alert('Please enter a valid URL')
    }
};

export { handleSubmit, testValidURL };
