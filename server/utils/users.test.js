const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: 1,
                name: 'Alen',
                room: 'Purgatorio'
            },
            {
                id: 2,
                name: 'Branko',
                room: 'Inferno'
            },
            {
                id: 3,
                name: 'Redek',
                room: 'Purgatorio'
            }
        ];
    });

    it('should add new user', () => {
      var users = new Users();
      var user = {
          id: 12345,
          name: 'Alen',
          room: 'Purgatorio'
      }

      var resUser = users.addUser(user.id, user.name, user.room);

      expect(users.users).toEqual([user]);
    });

    it('should remove an user', () => {
        var userId = 2;
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = 17;
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = 2;
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = 17;
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for Purgatorio chat room', () => {
        var userList = users.getUserList('Purgatorio');

        expect(userList).toEqual(['Alen', 'Redek']);
    });

    it('should return names for Inferno chat room', () => {
        var userList = users.getUserList('Inferno');

        expect(userList).toEqual(['Branko']);
    });
});
