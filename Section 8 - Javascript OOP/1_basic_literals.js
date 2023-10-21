let s1 = "Hello";
console.log(s1.toUpperCase(), typeof s1);

let s2 = new String("Hello");
console.log(typeof s2);

console.log(navigator.appVersion);//give the details of our system

//Object literal
let book1 = {
    title : "Book One",
    author : "Abid Dhankwala",
    year : "2023",
    getSummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

let book2 = {
    title : "Book Two",
    author : "Abid Dhankwala",
    year : "2025",
    getSummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book1);
console.log(book1.getSummary());

console.log(Object.values(book2));
console.log(Object.keys(book2));
console.log(Object.entries(book2));