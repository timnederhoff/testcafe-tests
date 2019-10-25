import { Selector } from 'testcafe';
import { TestpagePo } from './testpage.po';

const page = new TestpagePo();

fixture('Test Page')
  .page(`file://${__dirname}/../src/index.html`);

test('has list items', async t => {
  console.log('items:', await page.list.textContent);
  await t
    .expect(page.littItem.count).eql(3);
});
