    //Add Locations
const updateUI = (allData) => {
    let HTMLresults = "<h1>Form Results</h1><div id=\"location\" class=\"entity\"><h1 class=\"sectionHead\">Locations</h1></div>"
    HTMLresults += "<div id=\"organization\" class=\"entity\"><h1 class=\"sectionHead\">Organizations</h1></div>"
    HTMLresults += "<div id=\"person\" class=\"entity\"><h1 class=\"sectionHead\">People</h1></div>"
    HTMLresults += "<div id=\"keyword\" class=\"entity\"><h1 class=\"sectionHead\">Keywords</h1></div>"
    document.getElementById('results').innerHTML = HTMLresults

    //Add Sections to HTML Results
    document.getElementById('location').insertAdjacentHTML('beforeend', addSection('location', allData.location));
    document.getElementById('keyword').insertAdjacentHTML('beforeend', addSection('keyword', allData.keyword));
    document.getElementById('organization').insertAdjacentHTML('beforeend', addSection('organization', allData.organization));
    document.getElementById('person').insertAdjacentHTML('beforeend', addSection('person', allData.person));
};

const addSection = (section, sections) => {
  // console.log(sections);
  // let header = "<h1>" + section + "</h1>"
  let sectionHTML = "";
  sections.forEach((section) => {
    sectionHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + section + "\">" + section + "</a></div>"
  })
  // document.getElementById(section).innerHTML = sectionHTML;
  return sectionHTML;
};

// module.exports = updateUI, addSection
export { updateUI, addSection };
