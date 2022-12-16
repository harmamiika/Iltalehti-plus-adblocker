console.log('yo');

// add hello world to the body
document.body.appendChild(document.createTextNode('Hello World!'));

const hiddenElements = document.querySelectorAll('.hidden');
console.log(hiddenElements, 'hidden elements initial');

document.addEventListener('DOMContentLoaded', function () {
  console.log('Page loaded!');
});

document.addEventListener('scroll', function () {
  console.log('scrolling');
  const hiddenElements = document.querySelectorAll('.full-article');
  // select items with classname full-article

  // log document body contents
  console.log(document.body);

  console.log(hiddenElements);
});

// document.addEventListener('DOMContentLoaded', function () {
//   console.log('Page loaded!');
// });

// document.addEventListener('DOMContentLoaded', function () {
//   console.log('executing');
//   const hiddenElements = document.querySelectorAll('.hidden');
//   hiddenElements.forEach(function (element) {
//     element.style.display = 'none';
//   });
// });
