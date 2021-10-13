var axios = require("axios");


const compareText = (userCode, answerCode) => {
  return new Promise((resolve, reject) => {


    var options = {
      method: 'GET',
      url: 'https://twinword-text-similarity-v1.p.rapidapi.com/similarity/',
      params: {
        text1: userCode,
        text2: answerCode
      },
      headers: {
        'x-rapidapi-host': 'twinword-text-similarity-v1.p.rapidapi.com',
        'x-rapidapi-key': '341e3c2de0msh21af986d12f11edp19e778jsn064062bcd0ad'
      }
    };

    // var options = {
    //   method: 'GET',
    //   url: 'https://api.dandelion.eu/datatxt/sim/v1',
    //   params: {
    //     text1: 'helloword',
    //     text2: 'hello word'
    //   },
    //   // headers: {
    //   //   'x-rapidapi-host': 'twinword-text-similarity-v1.p.rapidapi.com',
    //   //   'x-rapidapi-key': '341e3c2de0msh21af986d12f11edp19e778jsn064062bcd0ad'
    //   // }
    // };


    axios.request(options)
    .then(function (response) {
      console.log(response.data);
      resolve(response.data);
    }).catch(reject);

  })


}

module.exports = compareText



