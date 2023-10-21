// const http = require('http');
 
// const hostname = '127.0.0.1';
// const port = 3000;
 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Document</title>
//       <style>
//           .parent-div{
//               border: 3px solid orangered;
//               display: flex;
//               /*default property of flex-direction is row*/
//               /*default property of flex-wrap is nowrap. If the width of parent element or (in this case)
//               parent div reduces then effect of this property can be seen. 
//               All the child divs will adjust automatically*/
//               flex-wrap: wrap;
//               justify-content: center;
//               height: 100vh;
//               width: 300px;
//               align-items: center;/*align-items is for the container*/
              
//           }
//           .child-div{
//               border: 5px solid darkgreen;
//               padding: 10px;
//               margin: 10px;
//               text-align: center;
//               height: 20px;
//               width: 30px;
//           }
//           .container-1{
//               display: flex;
//               /*
//               align-items: flex-start;
//               align-items: flex-end;
//                align-items: center; */
//               border: 2px solid black;
//               padding: 10px;
//               margin-top: 10px;
//           }
//           .box-1{
//               /*flex is a short-hand property for flex-grow and flex-shrink and flex-basis
//               And only one parameter is short hand for all above three properties using flex */
//               flex: 2;
//               /*order property is used to change the order of elements*/
//               order: 3;
//               padding: 10px;
//               margin: 10px;
//               border: 4px solid saddlebrown;
              
//               /* flex-flow: row wrap; -> shorthand property for flex-direction and flex-wrap */
//           }
//           .box-2{
//               flex: 1;
//               order: 1;
//               padding: 10px;
//               margin: 10px;
//               border: 4px solid saddlebrown;
//           }
//           .box-3{
//               flex: 2;
//               order: 2;
//               padding: 10px;
//               margin: 10px;
//               border: 4px solid saddlebrown;
//           }
//           .container-2{
//               display: flex;
//               /*by default
//               justify-content: flex-start;*/
//               /* justify-content: flex-end; */
//               justify-content: space-between;
//               /* justify-content: space-around; */
//               border: 2px solid black;
//               padding: 10px;
//               margin-top: 10px;
//               height: 400px;
//           }
//           .box-4{
//                /*flex-grow property is used to increase the width of element(in this case - div)*/
//               flex-grow: 4;
//               /*flex shrink effect will be seen when the size of browser gets reduced */
//               flex-shrink: 1;
//               height: 30%;
//               width: 20%;
//               padding: 10px;
//               align-self: self-start;/*align-self is for each element(self element)*/
//               border: 4px solid rgb(19, 139, 87);
//           }
//           .box-5{
//               flex-grow: 3;
//               flex-shrink: 2;
//               text-align: center;
//               height: 30%;
//               width: 20%;
//               padding: 10px;
//               align-self: center;
//               border: 4px solid rgb(19, 75, 139);
//           }
//           .box-6{
//               /*flex-basis is similar to width. For flex, flex-basis property is available.
//               For flex, rather than using width,use flex-basis*/
//               flex-grow: 2;
//               flex-shrink: 3;
//               flex-basis: 20%;
//               padding: 10px;
//               height: 30%;
//               /*align-self item is used for individual element to put it on start or end or center*/
//               align-self: self-end;
//               border: 4px solid violet;
//           }
//           .container-3{
//               border: 2px solid black;
//               display: flex;
//               justify-content: space-between;
//               flex-wrap: wrap;
//               width: 30%;
//           }
//           .box-7{
//               width: 15%;
//               padding: 10px;
//               border: 4px solid indigo;
//           }
//           .box-8{
//               width: 15%;
//               padding: 10px;
//               border: 4px solid blue;
//           }
//           .box-9{
//               width: 15%;
//               padding: 10px;
//               border: 4px solid green;
//           }
//           .box-10{
//               width: 15%;
//               padding: 10px;
//               border: 4px solid yellow;
//           }
//           .box-11{
//               width: 15%;
//               padding: 10px;
//               border: 4px solid orange;
//           }
//           .box-12{
//               width: 15%;
//               padding: 10px;
//               border: 4px solid red;
//           }
//           section{
//               border: 5px solid green;
//               margin-top: 10px;
//           }
//           img{
//               /*float: right;float: top; -> by default*/
//               position: fixed;
//               top: 300px;
//               right: 10rem;
//               height: 200px;
//               width: 200px;
//           }
//       </style>
//   </head>
//   <body>
//       <div class="parent-div">
//           <div class="child-div" style="order: 9; flex-grow: 3;">div1</div>
//           <div class="child-div" style="order: 2;">div2</div>
//           <div class="child-div" style="order: 3;">div3</div>
//           <div class="child-div" style="order: 4;">div4</div>
//           <div class="child-div" style="order: 5;">div5</div>
//           <div class="child-div" style="order: 6;">div6</div>
//           <div class="child-div" style="order: 7;">div7</div>
//           <div class="child-div" style="order: 8;">div8</div>
//           <div class="child-div" style="order: 1;">div9</div>
//       </div>
//       <div class="container-1">
//           <div class="box-1">
//               <h3>box one</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//           <div class="box-2">
//               <h3>box two</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//           <div class="box-3">
//               <h3>box three</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//       </div>
//       <div class="container-2">
//           <div class="box-4">
//               <h3>box four</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//           <div class="box-5">
//               <h3>box five</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//           <div class="box-6">
//               <h3>box six</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//       </div>
//       <div class="container-3">
//           <div class="box-7">
//               <h3>box seven</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//           <div class="box-8">
//               <h3>box eight</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//           <div class="box-9">
//               <h3>box nine</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//           <div class="box-10">
//               <h3>box ten</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//           <div class="box-11">
//               <h3>box eleven</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//           <div class="box-12">
//               <h3>box twelve</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//           </div>
//       </div>
//       <section>
//           <img src="../MyImages/star.jpg" alt="">
//           <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum, doloribus harum necessitatibus, exercitationem consequatur, dolorem odit illo nulla sit molestias. Consequuntur, iusto temporibus? Architecto, totam atque ipsa culpa nam laborum labore quia animi iure aspernatur? Eius, vel molestias, maxime, accusamus ab quod cupiditate doloribus non nulla illum corrupti. Beatae, consequatur expedita? Reiciendis totam quae voluptas dolore dignissimos voluptatem nesciunt nemo accusantium, vel laborum hic neque cupiditate culpa, nisi sint! Officiis exercitationem, consectetur veniam omnis distinctio, voluptates quae dolor impedit tempora totam dolores, doloremque ut perferendis! Repellendus necessitatibus aperiam vitae, natus optio enim consectetur nesciunt, velit, autem eius distinctio numquam?
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore minima mollitia vero beatae, quam id eligendi voluptate, dolore similique labore necessitatibus molestias? Hic distinctio explicabo excepturi quaerat voluptas laborum totam animi natus quidem odit fugit voluptatem quia iure consequuntur expedita dolor alias veritatis, facere perspiciatis repudiandae facilis autem nisi. Veritatis, molestiae earum blanditiis vitae enim illo illum id possimus ea beatae necessitatibus, sit nihil rerum minima et temporibus sapiente repudiandae quisquam suscipit ut culpa! Iure omnis deserunt, quo quis odit sit temporibus totam eum dolore nobis consequatur vitae quaerat voluptatum laborum perspiciatis placeat reprehenderit ipsum sed necessitatibus inventore nesciunt quasi sunt nostrum? Consectetur dignissimos excepturi iste similique nesciunt. Eius facere, cumque atque reprehenderit enim repellendus eum earum. Laboriosam dignissimos, veritatis itaque aliquid saepe est quisquam repudiandae, tempora dicta quia, quos impedit recusandae ipsum consequuntur modi ipsa quod eum libero repellat delectus deleniti officiis? Sunt aliquam, et hic impedit quo porro minus magnam enim cum, totam id consequatur? Repellat nemo possimus corporis vero nostrum eaque soluta delectus, labore a aperiam iste id laborum amet reprehenderit deserunt non accusamus ad tenetur aut molestias. Dolore nesciunt quaerat expedita? Fugiat rem, voluptas ipsum qui aliquid explicabo. Dolor sunt quisquam odio soluta veritatis! Iste nisi laborum id nobis consequuntur, dolores eos cum, reprehenderit totam non esse magnam neque quas tenetur delectus facere aliquam quis! Asperiores, porro ad! Dolorem odit possimus cum earum reiciendis numquam fuga suscipit officia iusto atque quas corrupti aliquam explicabo nostrum, placeat sunt modi! Ut illo incidunt aut veniam, molestiae eos architecto quas officia officiis error eligendi ea libero nisi ad, voluptas sint itaque repellat, aliquam iusto! Nostrum dignissimos officiis ratione numquam adipisci architecto accusamus iure iste laborum asperiores, molestias in, ipsa esse ullam aliquid sequi omnis inventore temporibus, voluptatibus magnam! Vel praesentium exercitationem sint nihil aperiam? Nihil, ratione qui, fugit at possimus aperiam quae sequi distinctio tempore pariatur vero consectetur porro! Provident voluptates nemo molestiae, dolores recusandae numquam delectus at animi ab, exercitationem quo? In doloribus consequuntur, sit commodi omnis id. Vero perferendis placeat nobis reiciendis veniam eos minus, animi sunt veritatis ducimus vitae, et asperiores officiis eum suscipit tempore cum necessitatibus illum modi a perspiciatis magni! Nihil porro veritatis sint sunt laborum delectus et perferendis alias maiores ut, obcaecati iste doloribus sapiente sequi, rerum ipsam culpa quod. Aut molestias quidem odio cumque minima beatae vel dolores amet nihil qui eum mollitia perspiciatis, praesentium placeat quos! Quis ea non iure nostrum dicta quas esse dolores temporibus, nulla, repellat voluptates, quisquam aspernatur excepturi eligendi minima? Repellat atque commodi deserunt incidunt expedita architecto vel aut eligendi ipsa quos voluptas numquam accusamus dolorum nostrum illo dolorem quibusdam sunt, earum, iure, nulla consequatur! Iste sit illum consequuntur, maxime ex facere et nam illo magni laboriosam quidem vel perferendis dolorem optio quas amet nulla repellendus in quis rerum magnam sapiente praesentium eaque. Cupiditate dignissimos maiores beatae molestiae asperiores atque illo consequatur quaerat numquam voluptas doloremque, blanditiis aliquid omnis nemo ipsa temporibus consectetur illum reprehenderit dolor ipsam corporis? Laborum animi ipsum consequatur voluptas! Adipisci minima molestias consequatur dolores a placeat ad, cupiditate explicabo odio. Est optio ex nulla ea suscipit ratione quasi minima sint aspernatur autem totam, unde consequuntur, aliquid voluptate, mollitia recusandae sapiente tempora exercitationem repellat quaerat temporibus amet facere maxime asperiores! Est dolorem, eveniet, eius nobis praesentium in hic temporibus consequatur, earum ipsum vitae voluptatum illum sapiente maiores deleniti! Tempore voluptatum pariatur temporibus, accusantium illum corrupti fugit rem nam odit in, dolor dignissimos natus voluptates officiis itaque maiores dolore? Quis odit id nostrum molestias officiis asperiores doloremque repudiandae omnis fuga ratione dolorem quidem corporis eos, ipsam amet dolores repellendus, veniam, aperiam dolore. Officia rem optio sit quos asperiores eaque ea, mollitia ducimus tenetur, at quod facilis vitae inventore itaque a accusamus enim beatae iure esse maiores eos animi veniam est. Cumque eum velit atque quidem, tempora saepe iusto ipsa? Veniam eos voluptatum eaque aliquam alias doloremque a provident, nisi sunt, blanditiis voluptatem dicta aut laborum illum? Porro, nostrum suscipit. Eius, omnis. Blanditiis, nulla? Saepe qui officiis in, unde odio animi! Saepe consequuntur recusandae eveniet magni, enim ex atque sunt, voluptate quia exercitationem aspernatur deleniti fuga asperiores laudantium quasi aperiam maxime porro suscipit maiores, quos commodi quibusdam quod. Reiciendis possimus cupiditate maiores quod aliquam non sed corrupti illo perspiciatis obcaecati ea quo cum sunt magni suscipit laboriosam sapiente at pariatur ad, accusantium debitis alias. Repellendus doloremque aliquam impedit deleniti, praesentium ipsam explicabo excepturi neque ut eius ab quam! Facilis nesciunt, voluptatibus omnis ex consequatur, consectetur neque suscipit doloremque ad, eaque animi quam? Velit, ipsam. Saepe eos molestias voluptates corporis? Temporibus neque, voluptatum dolore eaque suscipit cupiditate velit nesciunt in fugiat, et error, cum enim assumenda esse dignissimos commodi facere excepturi inventore laborum modi minus ea? Deserunt odit quibusdam vero rem mollitia autem est. Deleniti dolorum magnam quam sint necessitatibus sapiente numquam molestiae! Ipsam molestiae iure corrupti fugiat ullam error sunt voluptate eveniet fugit sit nesciunt voluptatem officia, magnam porro doloribus. Asperiores, necessitatibus? Temporibus, sed obcaecati hic qui nisi omnis blanditiis, sit nulla architecto molestias ullam est perspiciatis maiores optio incidunt quam fugit esse. Earum, mollitia nulla officiis fuga sit dicta ea atque quas rem voluptates doloribus praesentium beatae repudiandae culpa laboriosam voluptas nostrum voluptatum molestiae! Quam, maxime aliquam! Commodi odio ab temporibus veritatis animi excepturi perferendis dolorum nulla nisi delectus ut quod, sunt nesciunt quibusdam iste totam mollitia minima? Libero nam, odio atque eos dignissimos adipisci sint molestiae! Ad adipisci, distinctio minima numquam libero veniam!</p>
//       </section>
  
//   </body>
//   </html>`);
// });
 
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var num = 8;
function display(){
    var num = 10;
    console.log(num);
}
display();
console.log(num);