const request = require("request");
var userData = null
var repoData = null


exports.rec = async (req, res) => {
  const { username } = req.body;
  var url = "https://api.github.com/users/";
  url = url + username;
  repoInfo(url);
  var options = {
    url: url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
      Authorization: " token " + process.env.GITHUB_API
    }
  };

  const callback= async(error, response, body)=> {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      userData = await info;
      return res.redirect('/')
    }
  }
 
  request(options, callback);
};

async function repoInfo(link){
  url = link+'/repos'
  var options = {
    url: url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
      Authorization: " token " + process.env.GITHUB_API
    }
  };

  const callback= async(error, response, body)=> {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      repoData = await info;
    }
  }
  request(options, callback);
}


exports.sen = async (req, res) => {
  res.send({userData,repoData});
};
