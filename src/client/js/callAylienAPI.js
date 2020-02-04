import {port} from '../index.js';
import {updateUI} from './UpdateUI.js';
// const updateUI = require('./UpdateUI.js');
require("regenerator-runtime");
const fetch = require("node-fetch");

const callAylienAPI = async (formURL) => {
  const data = {"URL":formURL};
  const response = await fetch(`${port}/apiData`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    updateUI(newData);
    return newData;
  }catch(error) {
    console.log("error", error);
  }
};

const testServer = async () => {
  const response = await fetch(`${port}/test`);
  try {
    const newData = await response.json();
    console.log(newData.test);
    return newData.test;
  }catch(error) {
    console.log("error", error);
  }
};

export { callAylienAPI, testServer };
