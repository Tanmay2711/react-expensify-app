
const book = {
    title:'my book',
    author:'Tanmay v',
    publisher:{
        name:'penguin',
    }
};

const {name:publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

const item = ['coffee med', '$2.00', '$2.50', '$2.75'];

const [coffee,,price] = item;

console.log(`${coffee} price is ${price}`);