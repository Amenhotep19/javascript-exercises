const steps = require('./index');

describe('Steps function', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  
  afterEach(() => {
    console.log.mockRestore();
  });
  
  test('should exists', () => {
    expect(steps).toBeDefined();
    expect(typeof steps).toEqual('function');
  });
  
  test('should prints steps when called with 1', () => {
    steps(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
  });
  
  test('should prints steps when called with 2', () => {
    steps(2);
    expect(console.log.mock.calls[0][0]).toEqual('# ');
    expect(console.log.mock.calls[1][0]).toEqual('##');
    expect(console.log.mock.calls.length).toEqual(2);
  });
  
  test('should prints steps when called with 3', () => {
    steps(3);
    expect(console.log.mock.calls[0][0]).toEqual('#  ');
    expect(console.log.mock.calls[1][0]).toEqual('## ');
    expect(console.log.mock.calls[2][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(3);
  });
})
