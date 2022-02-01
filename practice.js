s = "this is a goat this goat";
function solution(s) {
  let count = "";
  let a = s.split(" ");
  let counter = {};
  let c;
  for (word of a) {
    if (counter[word]) {
      counter[word] = counter[word] + 1;
    } else {
      counter[word] = 1;
    }
  }

  console.log({ a });
  console.log({ counter });

  for (const property in counter) {
    c += `${property}(${counter[property]}) `;
  }

  console.log(c);
  return c;
}

solution(s);
