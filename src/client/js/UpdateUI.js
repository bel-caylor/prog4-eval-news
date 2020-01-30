    //Add Locations
const updateUI = (allData) => {
    const HTMLresults = "<h1>Form Results</h1><div id=\"location\" class=\"entity\"></div><div id=\"organization\" class=\"entity\"></div><div id=\"person\" class=\"entity\"></div><div id=\"keyword\" class=\"entity\"></div>"
    document.getElementById('results').innerHTML = HTMLresults

    //Add Sections to HTML Results
    addSection('keyword', allData.keyword);
    addSection('organization', allData.organization);
    addSection('person', allData.person);
};

const addSection = (section, sections) => {
  // const sections = allData.section
  let header = "<h1>" + section + "</h1>"
  let sectionHTML = "";
  sections.forEach((section) => {
    sectionHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + section + "\">" + section + "</a></div>"
  })
  document.getElementById(section).innerHTML = sectionHTML
};

module.exports = updateUI
