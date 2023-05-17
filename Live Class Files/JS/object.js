// node object.js

// for (k in object){
//     console.log(k);
// }

// string,


const obj1 = {
     name: 'ayasha',
     surname: 'devikar',
     config: {
         role: 'ui developer'
     }

}

// obj1.surname = 'francis'
// obj1['year'] = 2000

// part 2

const obj2 = new Object()
obj2.redbook = 'html book'
obj2.bluebook = 'css book'
obj2.myvalue = '1 css book'

// console.log(obj2);

// part 3

const powers = {
      fly: true,
      coordinate: Math.random() + 2
}


const obj3 = Object.create(powers)
// console.log(obj3);
// console.log(obj3.coordinate);
// console.log(Object.getPrototypeOf(obj3))

// part 4

const obj4 = Object.create({})
// obj4.name = "ayasha"
// console.log(obj4);
Object.defineProperty(obj4, 'book', {
    //  name: 'ayasha',
    // get: () => 'ayasha',
    set: () => 'blue',
    enumerable: true
})

// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4))


let pen = 'hitesh'
// part 5

const obj5 = {
comics : 'marvel',
pen: '',
printComic: function(){
    this.pen += 'pencil book'
    console.log(this);
},

printaComic: () => {
    // this.pen += 'pencil book'
    console.log(this);
},

}

// console.log(obj5.printComic());
// console.log(obj5.printaComic(

// ));

const myname = 'ayasha';
console.log("my name is" + myname);

