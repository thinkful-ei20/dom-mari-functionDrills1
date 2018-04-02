'use strict';
function whoAmI (name, age) {
  let yearOfBirth = 2018 - age;
  console.log(`Hi, my name is ${name} and I am ${age} years old.`);
  console.log(`I was born in ${yearOfBirth}.`)
}

whoAmI('Dom', 33);
