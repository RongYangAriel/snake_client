  
const IP = 'localhost';
const PORT = 50541;
const NAME = "ry";
//const exit = '\u0003';

const keyMsg = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
  g: "Say: greetings!",
  b: "Say: bye-bye!",
  l: "Say: LOLZ...",
  exit: '\u0003'
}


module.exports = {
  IP,
  PORT,
  NAME,
  keyMsg
};