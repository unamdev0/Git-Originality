const Axios = require("axios");
const _ = require("lodash");

exports.getApi = async (req, res) => {
  var userData = null;
  var forked = 0;
  var original = 0;
  var language = {};
  const { username } = req.body;
  const url = "https://api.github.com/users/" + username;
  var options = {
    method: "get",
    url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
      Authorization: " token " + process.env.GITHUB_API
    }
  };
  Axios(options).then(userdata => {
    userData = userdata.data;
  });

  Axios({
    method: "get",
    url: url + "/repos",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
      Authorization: " token " + process.env.GITHUB_API
    }
  }).then(async repoData => {
    var repositoryPromise = repoData.data.map(async repository => {
      if (repository.fork == true) {
        forked += 1;
      } else {
        original += 1;
      }
      var languagePromise = Axios({
        method: "get",
        url: repository.languages_url,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
          Authorization: " token " + process.env.GITHUB_API
        }
      }).then(async languageData => {
        var array = _.keys(languageData.data);
        var arrayPromise = array.map(async langu => {
          language[langu] = (await (language[langu] || 0)) + 1;
          return language;
        });
        return arrayPromise;
      });
      return languagePromise;
    });
    const result = Promise.all(repositoryPromise).then(() => {
      res.send({ language, forked, original, userData });
    });
  });
};
