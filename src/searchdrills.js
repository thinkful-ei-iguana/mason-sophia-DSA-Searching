const BST = require('./binarytreeclass');

function binarySearch(array, value, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];


  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};

//3
function findABook(number, title) {
  let foundBook = false;

  let deweyDecimalArray = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  let bookTitlearray = ['Cat', 'Bird', 'Ferret', 'Puppy']

  let deweyIndex = binarySearch(deweyDecimalArray, number);
  let titleIndex = binarySearch(bookTitlearray, title);

  if (deweyIndex === true && titleIndex === true) {
    foundBook = true;
  }

  if (foundBook) {
    console.log(`Book was found!`)
  } else {
    console.log('Eh it wasnt here my bad')
  }
}
// console.log(findABook(300, 'Puppy'));


//4
// pre-order   :    (parent, left child, right child)
// in-order    :    (left child, parent, right child)
// post-order  :    (left child, right child, parent)

//post-order Part 1
//[14, 15, 19, 25, 27, 79, 89, 90, 91, 35] sophies
//[14, 19, 15, 27, 25, 79, 91, 90, 89, 35] masons
//[14, 19, 15, 27, 25, 79, 90, 91, 89, 35] 

//Part 2
//pre-order
//[8, 6, 5, 7, 10, 9, 11]