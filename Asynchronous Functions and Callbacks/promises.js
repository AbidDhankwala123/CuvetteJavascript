let posts = [
    {
        title : "Post One",
        body : "This is post one"
    },
    {
        title : "Post Two",
        body : "This is post two"
    }
];

function getPosts() {
    setTimeout(() => {
       let output = "";
       posts.forEach((post,index) => {
        output = output + `<li>${post.title}</li>`
       });
       document.body.innerHTML = output; 
    }, 1000);
}

function createPosts(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);

            let error = false;
            // let error = true;

            if(!error){
                resolve();
            }
            else{
                reject("Error:Something went wrong");
            }
        }, 2000);
    })
}


// createPosts({title : "Post Three",body : "This is post three"}).then(getPosts).catch(err => console.log(err));

// Async / Await
//More delegant way to handle promises
/*
async function init() {
    await createPosts({title : "Post Three",body : "This is post three"});
    getPosts();
}
init();
*/

// Async / Await with fetch
async function fetchUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await res.json();

    console.log(data);
}

fetchUsers();

//Promise.all //all promises need to be resolved
//if anyone gets failed, then all will be rejected
let promise1 = Promise.resolve("Hello World");
let promise2 = 10;
let promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 2000,"Goodbye");
});
let promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
let promise5 = Promise.reject("Goodbye World");


// Promise.all([promise1,promise2,promise3,promise4,promise5]).then(values => console.log(values)).catch(err => console.log(err));
//it is printing the value of promise5 bcoz promise5 is rejected.
//In Promise.all, all promises need to be resolved 



//Promise.any -> wait for any one to complete
// it will wait for all to be errored out
// Promise.any([promise1,promise2,promise3,promise4]).then(values => console.log(values));


//Promise.allSettled
//waits for all promises to execute and show the status of resolved and rejected promise
let p1 = Promise.resolve(50);
let p2 = new Promise((resolve,reject) => 
       setTimeout(reject,100,"geek"));
let p3 = Promise.resolve("Hii");

Promise.allSettled([p1,p2,p3])
.then((results) => results.forEach((result) => console.log(result.status,result.value)));