

function solution(a, n) {
   a = [1, 2, 3]
    n = 99
  let new_node = new ListNode(n);
  
  var last = a;
  while( last.next != null)
    last = last.next;
    
last.next = new_node;
console.log(last)
return a;
}

solution()