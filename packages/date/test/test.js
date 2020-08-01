const test = require('ava');
const { runEleventy, readOutput } = require('../../../util/11ty');

test.beforeEach(() => process.chdir(__dirname));

test('formats dates in templates', async (t) => {
  const fixture = 'fixtures/default';
  await runEleventy(fixture);

  t.is(await readOutput(fixture), 'January 1, 2016');
});

test('includeDefaults: false removes readableDate', async (t) => {
  const fixture = 'fixtures/exclude-readable-date';
  const { stderr } = await t.throwsAsync(runEleventy(fixture));
  t.true(stderr.includes('filter not found: readableDate'));
});

test('includeDefaults: false removes isoDate', async (t) => {
  const fixture = 'fixtures/exclude-iso-date';
  const { stderr } = await t.throwsAsync(runEleventy(fixture));
  t.true(stderr.includes('filter not found: isoDate'));
});

test('override built in formats', async (t) => {
  const fixture = 'fixtures/override';
  await runEleventy(fixture);

  t.is(await readOutput(fixture), '01 Jan. 2016');
});

test('specify custom format', async (t) => {
  const fixture = 'fixtures/custom-format';
  await runEleventy(fixture);

  t.is(await readOutput(fixture), 'January 2016');
});
