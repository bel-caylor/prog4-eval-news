const sum = require('../src/client/js/UpdateUI.js');
import {addSection} from '../src/client/js/UpdateUI.js';
require("regenerator-runtime");
const sampleAPIData = require('../src/server/sampleAPI.js');

test('test UpdateUI addSection function', () => {
  // console.log(sampleAPIData.keyword);
  expect(addSection('keyword', sampleAPIData.entities.keyword)).toContain('John');
});
