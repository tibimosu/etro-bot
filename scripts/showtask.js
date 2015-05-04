/**
 * Filename: showtask.js
 * Description: 指定したリスト名のタスクを表示します
 * Command: show <listname> 
 */

var Trello = require("node-trello");
var _ = require("underscore");

function mainProcess (msg) {
	var t = new Trello(process.env.HUBOT_TRELLO_KEY, process.env.HUBOT_TRELLO_TOKEN);
	var list;
	msg.send(t.get("/1/boards/" + process.env.HUBOT_TRELLO_BOARD + "/lists", function (err, data) {
		if (err) {
			msg.send("ERROR");
			return;
		}
		var l = [];
		_.each(data, function (datum) {
			l.push(datum.name);
		});
		return l;
	}));
	// msg.send(list);
}

module.exports = function (robot) {
	robot.respond(/show/i, function (msg) {
		mainProcess(msg);
	});
}