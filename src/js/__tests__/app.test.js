import getHealthStatus from '../app';

test('get health status - throw (no key)', () => {
  expect(() => {
    getHealthStatus({ name: 'Маг', health_: 5 });
  }).toThrowError(new Error('Неверные входные данные'));
});

test('get health status - throw (not a number)', () => {
  expect(() => {
    getHealthStatus({ name: 'Маг', health: true });
  }).toThrowError(Error);
});

test('get health status - throw (incorrect number)', () => {
  expect(() => {
    getHealthStatus({ name: 'Маг', health: -5 });
  }).toThrowError('Неверные входные данные');
});

test.each([
  ['Маг', 5, 'critical'],
  ['Маг', 15, 'wounded'],
  ['Маг', 30, 'wounded'],
  ['Маг', 50, 'wounded'],
  ['Маг', 80, 'healthy'],
])('get health status', (name, health, expected) => {
  const received = getHealthStatus({ name, health });
  expect(received).toBe(expected);
});
