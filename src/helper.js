export default function evil(fn) {
  // eslint-disable-next-line no-new-func
  return new Function("return " + fn)();
}

// const calculate = (array) => {
//   let fix = array.split("");
//   console.log("fix", fix);
//   const symbols = ["+", "-", "/", "*", "%"];
//   let resolve = 0;
//   let temp;
//   for (let i = 0; i < fix.length - 1; i++) {
//     console.log(fix[i]);
//     if (!symbols.includes(fix[i]) && i === 0) {
//       // const math = resolve (fix[i]) fix[i+1];
//       resolve = +fix[i];
//       // temp;
//       // if()
//       console.log(fix[i]);
//     }
//     console.log(+fix[i]);
//     console.log(symbols.includes(fix[i]));
//       if (symbols.includes) {
//         console.log(fix[i], resolve)
//       if (fix[i] === "+") {
//         resolve += +fix[i + 1];
//         i++;
//         console.log(typeof resolve, resolve);
//       }
//       if (fix[i] === "-") {
//         resolve += +fix[i + 1];
//         i++;
//         console.log(typeof resolve, resolve);
//       }
//     }

//     // else if (fix[i] === "/") {
//     //     resolve += +temp / +fix[i + 1];
//     //     i++;
//     //     console.log(temp, resolve);
//     // }
//     // else if (fix[i] === "*") {
//     //     resolve += +temp - +fix[i + 1];
//     //     i++;
//     //     console.log(temp, resolve);
//     // }
//     // else if (fix[i] === "%") {
//     //       resolve = (+temp)/100;
//     //       console.log(typeof resolve);
//     //     }
//     //         }
//     // }
//     else if (!symbols.includes(fix[i]) && i > 0) {
//       temp += fix[i];
//     }
//   }
// };
// const sum = "2+6-6*2/2=";
// calculate(sum);

// // console.log(typeof +(2 + "2" + "2" +"2"))
