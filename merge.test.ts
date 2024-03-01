import { merge } from './merge';

test('merges three collections', () => {
  const collection_1 = [11, 33, 55];
  const collection_2 = [22, 44, 66];
  const collection_3 = [99, 77, 0];

  const expected = [0, 11, 22, 33, 44, 55, 66, 77, 99];
  expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
});