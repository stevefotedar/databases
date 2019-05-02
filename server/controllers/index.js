var models = require('../models');

module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get((err, allMsgs) => {
        if (err) {
          res.send(err);
        } else {
          res.json(allMsgs);
        }
      })
    }, // a function which handles a get request for all messages
    post: (req, res) => {
      let newMsg = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(newMsg, (err, msg) => {
        if (err) {
          res.send(err);
        }
        res.sendStatus(201);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: (req, res) => {
      models.users.get((err, allUsrs) => {
        if (err) {
          res.send(err);
        } else {
          res.json(allUsrs);
        }
      })
    },
    post: (req, res) => {
      let newUsr = [req.body.username];
      models.users.post(newUsr, (err, usr) => {
        if (err) {
          res.send(err);
        }
        res.sendStatus(201);
      })
    }
  }
};

