const expect = require('expect');

const{isRealString} = require('./validation');

describe('isRealString', () => {

  it('should allow string with non-space characters', () => {
    let str = 'Is Real String    ';
    let test = isRealString(str);

    expect(test).toBe(true);
  });

  it('should reject non-string values', () => {
    str = 123456789;
    let test = isRealString(str);

    expect(test).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let str = '        ';
    let test = isRealString(str);

    expect(test).toBe(false);
  });

});//isRealString