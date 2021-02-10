// camelCase
String.prototype.camelCase = function () {
  let string = "";
  this.split(" ")
    .map((el, i) => {
      i == 0
        ? (string += el.replace(/^\w/, (c) => c.toLowerCase()))
        : (string += el.replace(/\w/, (c) => c.toUpperCase()));
    })
    .join("");
  return string;
};

// PascalCase
String.prototype.PascalCase = function () {
  let string = "";
  this.split(" ").map((el) => {
    string += el.replace(/^\w/, (c) => c.toUpperCase());
  });
  return string;
};

// snake_case
String.prototype.snake_case = function snake_case() {
  let string = "";
  this.toLowerCase()
    .split(" ")
    .map((el) => {
      string += el + "_";
    });
  return string;
};

// kebab-case
String.prototype.kebab_case = function () {
  let string = "";
  this.toLowerCase()
    .split(" ")
    .map((el) => {
      string += el + "-";
    });
  return string;
};

// msDecoder
// 1000ms == 1s, 60000ms = 1m 3600000ms = 1h

// msEncoder
// create element with emmet annotation in js;
