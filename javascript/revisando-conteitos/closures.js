// Closures
// Vídeo de estudo: https://youtu.be/l32Q7FRvwAQ?si=oVPqRduxWFdx-3zP

function sum(num1) {
  return (num2) => {
    if (!num2) {
      return num1;
    }

    return sum(num1 + num2);
  };
}

console.log(sum(1)(3)(4)(8)());
