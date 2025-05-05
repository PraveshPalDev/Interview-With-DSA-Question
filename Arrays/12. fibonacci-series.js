// Fibonacci series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233,
// F(0)=0,
// F(1)=1,

// F(n) = F(n-1)+F(n-2), for n >1,

const fibonacci = (x) => {
  let a = 0,
    b = 1;
  let result = [];

  for (let i = 0; i < x; i++) {
    result.push(a); // 0

    let next = a + b; //1
    a = b; //1
    b = next; //1
  }

  return result;
};

console.log(fibonacci(5));
