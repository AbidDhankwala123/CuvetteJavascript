//Object of Protos
let bookProtos = {
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    
    },
    getAge : function(){
        let years = new Date().getFullYear() - this.year;//first parameter will give the current ongoing year and second parameter will give the Book year
        return `${this.title} is ${years} years old`;
    }
};

//Create Object
//One way
let book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "Abid Dhankwala";
book1.year = "2000";

//Second way
let book2 = Object.create(bookProtos,{
    title : {value : "Book Two"},
    author : {value : "xyz"},
    year : {value : "2023"},
});


console.log(book1);
console.log(book2);
