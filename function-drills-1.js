'use strict';

function yearOfBirth (age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return 2018-age;
}

function whoAmI (name, age) {
  try {
    console.log(`Hi, my name is ${name} and I am ${age} years old.`);
    console.log(`I was born in ${yearOfBirth(age)}.`);
  }
  catch(e) { console.log(e.message);}
}


whoAmI('Dom', -33);
