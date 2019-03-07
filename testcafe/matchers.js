const tc = require('testcafe');

fixture('Matchers');

test('string array contains string', async t => {
  await t.expect(['one', 'two', 'three']).contains('one');
});

test('number array contains number', async t => {
  await t.expect([1, 2, 3]).contains(3);
});

test('object contains object', async t => {
  await t.expect({ key1: 'val1', key2: 'val2' }).contains({ key1: 'val1' });
});
