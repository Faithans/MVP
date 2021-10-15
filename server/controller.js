const compare = require('../database/model/compare.js')
const fs = require('fs')
const path = require('path')
var Mocha = require('mocha');


module.exports = {
  'compareText': (req, res, next) => {
    compare()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(err => console.log(err));
  },
  submit: (req, res) => {
    console.log(req.body);



    if (req.body.stepIdx === 0) {

      fs.writeFileSync(path.resolve(__dirname, './submission/submitCode.js'), `${req.body.currentCode}
      module.exports=BinarySearchTree` , function (err) {
        if (err) console.error('here is error')
        console.log('finished');
      });
      var mocha = new Mocha({});
      let testResult = {};
      mocha.addFile(path.resolve(__dirname, '../test/bts.test.js'))
      mocha.run()
        .on('pass', function (test) {
          console.log('Test passed');
          testResult[test.title] = test.state;
        })
        .on('fail', function (test, err) {
          console.log('Test fail');
          testResult[test.title] = test.state;

          console.log(err);
        })
        .on('end', function () {
          console.log(testResult);
          res.send(testResult);
        });

    }

    if (req.body.stepIdx === 1) {
      fs.writeFileSync(path.resolve(__dirname, './submission/submitCode2.js'), `${req.body.currentCode}
      module.exports=Graph` , function (err) {
        if (err) console.error('here is error')
        console.log('finished');
      });
      var mocha = new Mocha({});
      let testResult = {};
      mocha.addFile(path.resolve(__dirname, '../test/graph.test.js'))
      mocha.run()
        .on('pass', function (test) {
          console.log('Test passed');
          testResult[test.title] = test.state;
        })
        .on('fail', function (test, err) {
          console.log('Test fail');
          testResult[test.title] = test.state;

          console.log(err);
        })
        .on('end', function () {
          console.log(testResult);
          res.send(testResult);
        });

    }
  }
}

