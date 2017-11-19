const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Dan',
      room: 'Processing'
    },{
      id: '2',
      name: 'Lauren',
      room: 'P5.js'
    },{
      id: '3',
      name: 'Ben',
      room: 'Processing'
    }];
  });

  it('should add new user', () => {

    let users = new Users();

    let user = {
      id: '123',
      name: 'Lauren',
      room: 'Creative Coding'
    };

    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    userId = '3';
    let user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    userId = '99';
    let user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);

  });

  it('should find user', () => {
      let userId = '2';
      let user = users.getUser(userId);

      expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    let userId = '99';
    let user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for Processing', () => {
    let userList = users.getUserList('Processing');

    expect(userList).toEqual(['Dan', 'Ben']);
  });

  it('should return names for P5.js', () => {
    let userList = users.getUserList('P5.js');

    expect(userList).toEqual(['Lauren']);
  });

});//Users