import { } from 'testcafe';

fixture('Matchers');

test('string array contains string', async t => {
  const array = ['one', 'two', 'three'];
  await t.expect(array).contains('one');
});

test('number array contains number', async t => {
  const array = [1, 2, 3];
  await t.expect(array).contains(3);
});

test('object contains object', async t => {
  const obj = { key1: 'val1', key2: 'val2' };
  await t.expect(obj).contains({ key1: 'val1' });
});
