var db = require('../db');

module.exports = {
  messages: {
    get: function (callbackGetMsgs) {
      let queryStr = 'select messages.message_id, messages.messages, messages.roomname, users.username from messages left outer join users on (messages.user_id = users.user_id) order by messages.message_id desc;'
      db.query(queryStr, function (err, res) {
        callbackGetMsgs(err, res)
        }
      );
    }, // a function which produces all the messages
    post: function (newMsg, callbackPostMsgs) {
      let queryStr = 'insert into messages(messages, user_id, roomname) value (?, (select user_id from users where username = ? limit 1), ?);';
      console.log(newMsg);
      db.query(queryStr, newMsg, function (err, res) {
        callbackPostMsgs(err, res)
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callbackGetUsers) {
      db.query('select * from users', function (err, res) {
        callbackGetUsers(err, res)
      });
    },
    post: function (user, callbackPostUsers) {
      db.query('insert into users(username) values (?)', user, function (err, res) {
        callbackPostUsers(err, res)
      });
    }
  }
};

