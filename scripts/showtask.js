// /**
//  * Filename: showtask.js
//  * Description: 指定したリスト名のタスクを表示します
//  * Command: show <listname> 
//  */

// var Trello = require("node-trello");
// var _ = require("underscore");

// // function getList (err, data) {
// // 	msg.send("test");
// // 	var res = "";
// // 	if (err) {
// // 		return "ERROR";
// // 	}
// // 	_.each (data, function (datum) {
// // 		res += datum.name + "\n";
// // 	});
// // 	return res;
// // }

// function mainProcess (msg) {
// 	// var t = new Trello(process.env.HUBOT_TRELLO_KEY, process.env.HUBOT_TRELLO_TOKEN);
// 	// var list = "";
// 	// t.get("/1/boards/" + process.env.HUBOT_TRELLO_BOARD + "/lists", function (err, data) {
// 	// 	if (err) {
// 	// 		msg.send("ERROR");
// 	// 		return;
// 	// 	}
// 	// 	msg.send(data);
// 	// 	_.each(data, function (datum) {
// 	// 		list += datum.name;
// 	// 	});
// 	// 	return;
// 	// });
// 	msg.send("test");
// }

// module.exports = function (robot) {
// 	robot.respond(/show/i, function (msg) {
// 		mainProcess(msg);
// 	});
// }