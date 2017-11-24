// const person = {
//   name: "Leann",
//   age: 23,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };
//
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);
//
// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//   console.log(`It's ${city} in ${temperature}`);
// }
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['1313 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state] = address;
console.log(`You are in ${city} ${state}.`);

const menuItem = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , priceMed] = menuItem;
console.log(`A ${itemName} costs ${priceMed}.`)
