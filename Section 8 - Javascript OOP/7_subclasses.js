class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//Magazine Subclass
class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);//this has been done in java also//super constructor
        this.month=month;
    }
}

//Instantiate Magazine
let mag1 = new Magazine("Book One","Abid Dhankwala","2023","July");
console.log(mag1);
console.log(mag1.getSummary());