const fullName = ['hariom', 'singh'];
const biodata = [1, 26, "male", ...fullName];


var biodata = ['hariom', 'singh', 'male', "bihar"];
var [first, ...remaining] = biodata;

console.log(first);
console.log(remaining);


const fullName = {
    fname: "hariom",
    lname: "singh"
};

const biodata = {
    id: 1,
    ...fullName,
    age: 19,
    gender: "male",
};

console.log(biodata);