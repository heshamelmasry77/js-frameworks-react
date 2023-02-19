// Explaining destructing on a larger example


const user = {
  id: 7777,
  name: "Johny",
  tags: ["tag a", "tag b", "tag c"],
  info: {
    gender: "male"
  }
};

// If we want to get the id from this object then we will do it like that

// const id  = product.id;
// console.log("id: ",id);

// we can also do object destructing
//
// const {id, name: humanName} = user;
// console.log(id);
// console.log(name); // this won't work at this time
// console.log(humanName); //  this will work because we changed it to be humanName
//
// const {gender} = user.info; // this is called nested properties
// console.log("gender: ", gender);
// console.log(user.info.gender);

// 2. function arguments
//
// function logStuff(props) {
//   console.log(props);
// }
//
// console.log("user: ",user);


// what if we want to use destructing

function logStuffTwo({id, name, tags}) {
  console.log(id);
  console.log(name);
  console.log(tags);
}

logStuffTwo(user);

// this is how to get properties from Objects.
