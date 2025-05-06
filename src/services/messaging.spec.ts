import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); // limpar os mocks conforme finalizar cada teste

  it('should return undefined', () => {
    // System Under Test
    const sut = new Messaging();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log'); // espião
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Message sent:", and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Message sent:', 'teste');
  });
});
