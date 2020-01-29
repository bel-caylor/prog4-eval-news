import {port} from '../index.js';

const callAylienAPI = async (formURL) => {
  // const response = await fetch(`/apiData/${formURL}`);
  const response = await fetch(`${port}/apiData/test`);
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch(error) {
    console.log("error", error);
  }
};

export { callAylienAPI };
