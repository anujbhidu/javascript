// use getter method


// const person = {
//     firstName: "Anuj",
//     lastName: "Srivastav",
//     age: 22,
//     language: "en",
    
//     get lang() {
//         return this.language;
//     }
// };


// console.log(person.lang);

// use setter method

const person1 = {
    fullName: "Sahil",
    lastName: "Sharma",
    age: 23,
    language: "",
    
    set lang(lang) {
        this.language = lang;
    }

}


person1.lang = "english";
console.log(person1.language);
