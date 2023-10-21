//Constructor
function Book(title,author,year)
{
    this.title=title;
    this.author=author;
    this.year=year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;

//         this.getSummary = function () {
//             return `${this.title} was written by ${this.author} in ${this.year}`;
//         };
//     }
// }

//Instantiate an Object
let book1 = new Book("Book One","Abid Dhankwala","2023");
let book2 = new Book("Book Two","John Dae","2025");

console.log(book1);
console.log(book2);
console.log(book1.author);
console.log(book1.getSummary());
console.log(book2.getSummary());

