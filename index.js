require('datejs');

const users1 = ["garrett", "thomas", "chris"]
const users2 = ["nick", "michael", "andy"]

function combineUsers(...args){
  let combineObject = {
    users: [],
  };

  for (const ele of args){
    combineObject.users.push(...ele);
  }
  combineObject.merge_date = new Date().toString("M/d/yyyy");
  return combineObject;
};

console.log(combineUsers(users1, users2));


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};