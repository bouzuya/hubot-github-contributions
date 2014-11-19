# Description
#   A Hubot script that returns GitHub contributions
#
# Configuration:
#   None
#
# Commands:
#   hubot github contrib[ution]s <user> - returns <user>'s GitHub contributions
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  request = require 'request-b'
  cheerio = require 'cheerio'

  robot.respond /github[ -]contrib(?:ution)?s\s+(\S+)$/i, (res) ->
    user = res.match[1]
    url = "https://github.com/#{user}"
    request(url).then (r) ->
      $ = cheerio.load r.body
      contribs = {}
      $('#contributions-calendar .contrib-column').each ->
        e = $ @
        label = e.find('.text-muted:first-child').text()
        value = e.find('.contrib-number').text()
        contribs[label] = value
      res.send """
        #{user} contributions
        #{("#{k}: #{v}\n" for k, v of contribs).join ''}
      """
