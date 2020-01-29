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

//5
// 5.

function main() {
  const newBST = new BST();
  newBST.insert(25, 25);
  newBST.insert(15, 15);
  newBST.insert(50, 50);
  newBST.insert(10, 10);
  newBST.insert(24, 24);
  newBST.insert(35, 35);
  newBST.insert(70, 70);
  newBST.insert(4, 4);
  newBST.insert(12, 12);
  newBST.insert(18, 18);
  newBST.insert(31, 31);
  newBST.insert(44, 44);
  newBST.insert(66, 66);
  newBST.insert(90, 90);
  newBST.insert(22, 20);
  console.log(newBST.postOrder());
  console.log(newBST.preOrder());
  console.log(newBST.inOrder());
}

// main();

//6
// picard, riker, worf, LaForge, Security officer, Data, Crusher, Selar
//first go left, get node and its children, then get childerens childeren 
//then go right 
const starTrekArr = [
  "Captain Picard",
  "Commander Riker",
  "Commander Data",
  "Lt. Cmdr. Worf",
  "Lt. Cmdr. LaForge",
  "Crusher",
  "Lieutenant Security Officer",
  "Lieutenant Selar"
];
const starTrek = new BST();
for (let num of starTrekArr) starTrek.insert(num, num);

// console.log(starTrek.preOrder());

//7
const profitTree = new BST();
profitTree.insert(128, 128);
profitTree.insert(97, 97);
profitTree.insert(121, 121);
profitTree.insert(123, 123);
profitTree.insert(98, 98);
profitTree.insert(97, 97);
profitTree.insert(105, 105);

function maxProfit(tree, maxP, current) {

  if (tree.right === null && tree.left === null) {
    if (tree.value - current > maxP) maxP = tree.value - current;
    return maxP;
  }

  if (tree.value - current > maxP) maxP = tree.value - current;

  if (tree.right) {
    const rCurrent = maxProfit(tree.right, maxP, current);
    const rNext = maxProfit(tree.right, maxP, tree.right.value);
    return rCurrent > rNext ? rCurrent : rNext;
  }

  const lCurrent = maxProfit(tree.left, maxP, current);
  const lNext = maxProfit(tree.left, maxP, tree.left.value);
  return lCurrent > lNext ? lCurrent : lNext;

}
console.log(maxProfit(profitTree, 0, profitTree.value));

//SOLUTIONS IN LINK BELOW
//https://gist.github.com/tparveen/83f63946395dc7432b0da6c9826b53ed