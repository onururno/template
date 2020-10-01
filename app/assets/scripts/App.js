import "../styles/styles.css";

if (module.hot) {
  module.hot.accept();
}

/* Lesson example code below this line*/

//Object ! Can contain all of the Data and behavior (its an entity it has Data and behavior)
// inside an object => name, favoriteColor, greet are called Method !
let gomen = {
  name: "Gomen",
  favoriteColor: "blue",
  greet: function () {
    console.log(
      "Hello, my name is " +
        gomen.name +
        " and my favorite color is " +
        gomen.favoriteColor +
        "."
    );
  },
};

gomen.greet();

//Better way to code it! (if we want to add more names) => its called bluePrint function

function Person(name, favColor) {
  (this.name = name),
    (this.favColor = favColor),
    (this.greet = function () {
      console.log(
        "Hello there, my name is " +
          this.name +
          " and my fav color is " +
          this.favColor +
          "."
      );
    });
}

//it will create a new Object using Person blueprint
let john = new Person("john", "blue");
john.greet();

let jane = new Person("jane", "green");
jane.greet();
