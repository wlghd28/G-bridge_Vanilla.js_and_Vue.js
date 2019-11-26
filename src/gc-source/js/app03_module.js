import log, {getCurrentHour, MyLogger} from "./myLogger.js";

// 77. selector
// document.querySelector정리
// 객체를 하나 가져올 때 사용
// document.querySelecctAll
// 객체를 여러개 가져올 때 사용
const root = document.querySelector("#root");
root.innerHTML = '<p>Hello World!!</p>';
//console.log("my first log data");
log("my second log data");
// log(getTime());
// log(getCurrentHour());
// log(`getTime is ${getTime}`);
// log(`getTime hour is ${getCurrentHour}`);
const logger = new MyLogger();
log(`lectures of CodingSchool are ${logger.getLecture()}`);