var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var container = document.querySelector(".container")
menuIcon.onclick = function (){
sidebar.classList.toggle("small-sidebar")
container.classList.toggle("large-container")

}




 
//  const obj1={
//     name: "ram",
//     city: "shyam",
//     superhero: "omnipotent",
//      fn: function(){
//         console.log(this.name+""+this.city+""+this.superhero);
//     }
//   }
  

//  let  obj2={
//     name: 'raghu',
//     fame: "neverends"
//   }

//   obj2.__proto__ = obj1;