const callAylienAPI = async (formURL) => {
  const response = await fetch(`/apiData/${formURL}`);
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch(error) {
    console.log("error", error);
  }
};

module.exports = callAylienAPI
