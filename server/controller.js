const compare = require('../database/model/compare.js')

module.exports = {
    'compareText': (req, res, next) => {
      compare()
      .then((result)=>{
        res.status(200).send(result);
      })
      .catch(err => console.log(err));
    }
}

