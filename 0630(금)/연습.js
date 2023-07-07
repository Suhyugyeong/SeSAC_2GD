// 3
let name = "진형";
if (name == "진형") {
  console.log("맞았어요😀");
} else {
  console.log("틀렸어요😥");
}
name != "진형" ? console.log("맞았어요😀") : console.log("틀렸어요😥");

// console.log(3 !== "3");

// console.log(8 / "2" !== 4);

// console.log(0 === false);

// console.log(true && false);
// console.log(true && true);
// console.log(false && false);

// console.log(true || false);
// console.log(true || true);
// console.log(false || false);

// if let x = 5

// console.log(x)

// if (let x == 5)

// console.log(x)

for (let i = 0; i < 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}
for (let i = 13; i < 10000; i = i + 13) {
  if (i % 2 === 1) console.log(i);
}
