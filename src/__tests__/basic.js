import { calculateTotal } from '../calculate.js';

test('basic test', () => {
  let result = 4;
  expect(result).toBe(4);

});

test('calculateTotal sum without discont', () => {
  const list = [
    {
      id: 456,
      name: ' Dance, dance, dance',
      count: 3,
      price: 400
    },
    {
      id: 123,
      name: 'JavaScript for beginner',
      count: 1,
      price: 1300
    }
  ];

  const result = calculateTotal(list);
  expect(result).toBe(2500);

});


test('calculateTotal sum with discont', () => {
  const list = [
    {
      id: 456,
      name: ' Dance, dance, dance',
      count: 3,
      price: 401
    },
    {
      id: 123,
      name: 'JavaScript for beginner',
      count: 1,
      price: 1300
    }
  ];

  const result = calculateTotal(list, true);
  expect(result).toBeCloseTo(2230.173);

});