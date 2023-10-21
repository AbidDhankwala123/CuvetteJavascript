class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    //automatically,all these below functions will go into prototype
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        let years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    //static method
    static topBookStores()
    {
        return "MERN Stack and Java";
    }
}

//Instantiate Object
let book1 = new Book("Book One","Abid Dhankwala","2016");

console.log(book1);
console.log(book1.getSummary());
book1.revise("2023");
console.log(book1);

//for static method,we don't need to create an object. Directly, we can call it by class name
console.log(Book.topBookStores());