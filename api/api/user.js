const request = require("request");
const _ = require("lodash");
var userData = null;
var forked = null;
var original = null;
var language = {};

exports.getApi = async (req, res) => {
  const { username } = req.body;
  const url = "https://api.github.com/users/" + username;
  getData(url, function(userdata) {
    userData = userdata;
  });
  getData(url + "/repos", function(repoData) {
    repoData.map(repository => {
      if (repository.fork == true) {
        forked += 1;
      } else {
        original += 1;
      }
      getData(repository.languages_url, function(languageData) {
        _.mapKeys(languageData, function(value, key) {
          if (key in _.keys(language)) {
            console.log("ALreda");
            language[key] += 1;
          } else {
            language[key] += 1;
          }
        });
      });
    });
  });

  return res.redirect("/");
};

function getData(url, callback) {
  var options = {
    url: url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
      Authorization: " token " + process.env.GITHUB_API
    }
  };
  request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      callback(info);
    }
  });
}

exports.sen = async (req, res) => {
  setTimeout(() => {
    res.send({ userData, forked, original, language });
  }, 2000);

  forked = 0;
  original = 0;
};
