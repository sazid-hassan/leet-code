var deleteDuplicates = function (head) {
  if (!head) return null;
  let currentState = head.next;
  let prevState = head;

  while (prevState) {
    if (currentState === null) return head;
    if (prevState.val === currentState.val) {
      prevState.next = currentState.next;
    } else {
      prevState = currentState;
    }
    currentState = currentState.next;
  }
  return prevState;
};

console.log(deleteDuplicates([1, 2, 2, 2, 3]));

// var deleteDuplicates = function (head) {
//   let newArr = [],
//     temp;

//   for (let i = 0; i < head.length; i++) {
//     temp = head[i];
//     if (head[i + 1] !== temp) {
//       newArr.push(head[i]);
//     }
//   }

//   return newArr;
// };
