const sum = require('../src/client/js/callAylienAPI.js');
import {testServer} from '../src/client/js/callAylienAPI.js';
require("regenerator-runtime");

test('test Server', async () => {
  await expect(testServer()).resolves.toBe('Server Running');
});

// test('Server Fails with an error', async () => {
//   await expect(testServer()).rejects.toThrow('error');
// });
