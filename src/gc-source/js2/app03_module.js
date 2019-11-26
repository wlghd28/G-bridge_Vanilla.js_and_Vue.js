import _ from './utility.js';
import CodingSchool from './CodingSchool.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World ~~!!</p>`;
_.log('my first data');

const cs = new CodingSchool();
_.log(`letures of CodingSchool are ${cs.getLectures()}`);