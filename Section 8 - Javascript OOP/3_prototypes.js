//Constructor
function Book(title,author,year)
{
    this.title=title;
    this.author=author;
    this.year=year;
}

//this function will be present in prototype and not in book constructor
//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;

};

//getAge
Book.prototype.getAge = function(){
    let years = new Date().getFullYear() - this.year;//first parameter will give the current ongoing year and second parameter will give the Book year
    return `${this.title} is ${years} years old`;
};

//Revise / Change year
Book.prototype.revise = function(newYear){
    this.year = newYear;//2020 will change the book year for book1 object(depends which object called)
    this.revised = true;//add the new property
};
//Instantiate an Object
let book1 = new Book("Book One","Abid Dhankwala","2016");
let book2 = new Book("Book Two","John Dae","2018");

console.log(book1);
console.log(book2);
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book1.getAge());
console.log(book2.getAge());

book1.revise("2020");
console.log(book1);

