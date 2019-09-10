// 1) Print the first p tag to the console using the ID, class, and tag selectors.

//
// let ptag =document.getElementsByTagName("p");
// console.log(ptag[0]);

let ptag02 = document.getElementById('first');
console.log(ptag02);

let ptag3 = document.getElementsByClassName('special');
console.log(ptag3);

// 2) Print the special class using both the query selector and query all selector.

let qsa = document.querySelector('.special');
console.log(qsa[0].innerHTML);


let qsa2 = document.querySelectorAll('special');
console.log(qsa2[0].innerText);



// 3) Change the color of the h1 statement to blue.
//
let h1el = document.getElementsByTagName("h1");
for (let x =0; x<h1el.length; x++)
{
    h1el[x].style.color = 'blue';
}
// 4) Change the color of the last p tag to yellow.
let ptag2 = document.getElementById('#last');
ptag2.style.color = 'yellow';

// for (let pt =0; pt<h1el.length; pt++)
// {
//     h1el[pt].style.color = 'yellow';
// }
