console.log('destructuring')

const person = {
    name: 'GP',
    age: 29,
    location: {
        city: 'Boulder',
        temp: 68
    }
};

const { name: firstName = 'Anonymous', age } = person;
const { city, temp: temperature } = person.location;

console.log(`${firstName} is ${age}.`)
if (city && temperature) {
    console.log(`${firstName} lives in ${city} and it is currently ${temperature} degrees farenheit there.`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { title: BookTitle = 'Untitled', author = 'Unauthored' } = book;
const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

const address = ['1299 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147'];

const [,bookCity, state] = address;

console.log(`You are in ${bookCity}, ${state}.`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);
