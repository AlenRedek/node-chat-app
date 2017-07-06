const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
      var from = 'Alen';
      var text = 'Some message';
      var message = generateMessage(from, text);

      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({
        from: from,
        text: text
      });
    });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Alen';
    var lat = 45;
    var lng = 13;
    var url = 'https://www.google.si/maps?q=45,13';
    var message = generateLocationMessage(from, lat, lng);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from: from,
      url: url
    });
  });
});
