// Description
//   A Hubot script that returns GitHub contributions
//
// Configuration:
//   None
//
// Commands:
//   hubot github contrib[ution]s <user> - returns <user>'s GitHub contributions
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var cheerio, request;
  request = require('request-b');
  cheerio = require('cheerio');
  return robot.respond(/github[ -]contrib(?:ution)?s\s+(\S+)$/i, function(res) {
    var url, user;
    user = res.match[1];
    url = "https://github.com/" + user;
    return request(url).then(function(r) {
      var $, contribs, k, v;
      $ = cheerio.load(r.body);
      contribs = {};
      $('#contributions-calendar .contrib-column').each(function() {
        var e, label, value;
        e = $(this);
        label = e.find('.text-muted:first-child').text();
        value = e.find('.contrib-number').text();
        return contribs[label] = value;
      });
      return res.send("" + user + " contributions\n" + (((function() {
        var _results;
        _results = [];
        for (k in contribs) {
          v = contribs[k];
          _results.push("" + k + ": " + v + "\n");
        }
        return _results;
      })()).join('')));
    });
  });
};
