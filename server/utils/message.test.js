const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate correct mesage object', () => {
    let from = 'Jen';
    let text = 'Some message';
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});

  });//correct messageObj

});//describe generateMessage

describe('generateLocationMessage', () => {
  it('should generate correct geolocation message', () => {

    let message = generateLocationMessage('Admin', 1, 1);

expect(message.createdAt).toBeA('number');
expect(message.from).toBe('Admin');
expect(message.url).toEqual('https://www.google.com/maps?q=1,1');

  });

});//describe generateLocationMessage

