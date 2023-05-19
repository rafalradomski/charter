import { niceDate, dollar } from './formatters';

test('dollar()', () => {
  let res = dollar(120);
  expect(res).toEqual('$120');
});

test('niceDate()', () => {
  let res = niceDate(1674401702000);
  expect(res).toEqual('15:35, Sun Jan 22 2023');
});
