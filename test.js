const scores = [98, 45, 33, 47, 100, 80];
const totalScores = scores.reduce((a, c) => a + c, 0);
console.log(totalScores);
let school = {
  name: "DAV",
  code: 1234,
};
let student = {
  std_name: "mohini",
  age: 37,
};
student.__proto__ = school;

// we can find both properties in student now:
console.log(student.age);
console.log(student.code);

function Box(length, height) {
  this.length = length;
  this.height = height;
}
function NewBox(color) {
  //   Box.call(this, 100, 200);
  Box.apply(this, [100, 300]);
  this.color = color;
  console.log(this);
}
const res = new NewBox("red");

function submit() {
  console.log("submitted");
}

function display() {
  this.submit();
}
