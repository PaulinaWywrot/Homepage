/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/


/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/

var photo;

// Describe this function...
function first() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_img2 = document.getElementById('img');
  element_img2.setAttribute("src", photo[0]);
  photo.push(photo.shift());
}


photo = ['https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', 'https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'];
first();


document.getElementById('next').addEventListener('click', (event) => {
  first();

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_img = document.getElementById('img');
  element_img.setAttribute("src", photo.slice(-1)[0]);
  photo.unshift(photo.pop());

});

var value, review, item, links, http;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


value = getNumberOrString(document.getElementById('button').value);
review = [];
links = [];
http = [];


document.getElementById('button').addEventListener('click', (event) => {
  if (value == 'See all reviews') {
    review.forEach((item) => {
      let element_list = document.getElementById('list');
      let new_li = document.createElement('p');
      new_li.innerText = item;

      element_list.appendChild(new_li);
      let new_ul = document.createElement('div');
      let new_li2 = document.createElement('p');
      new_li2.innerText = http[0];

      new_ul.appendChild(new_li2);

      element_list.appendChild(new_ul);
    });
    value = 'off';
  } else {
    let element_list2 = document.getElementById('list');
    element_list2.innerText = '';
    value = 'See all reviews';
  }

});

document.getElementById('send').addEventListener('click', (event) => {
  review.unshift(getNumberOrString(document.getElementById('name').value));
  http.unshift(getNumberOrString(document.getElementById('comment').value));

});

console.log("Paulina")