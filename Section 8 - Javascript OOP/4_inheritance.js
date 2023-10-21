//Constructor
function Book(title,author,year)
{
    this.title=title;
    this.author=author;
    this.year=year;
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;

};

//Magazine Constructor
function Magazine(title,author,year,month) {
    Book.call(this,title,author,year);

    this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
let mag1 = new Magazine("Book One","Abid Dhankwala","2000","April");

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;//to change the name of constructor

console.log(mag1);
console.log(mag1.getSummary());