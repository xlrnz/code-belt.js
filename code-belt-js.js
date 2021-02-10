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
// 1000ms == 1s, 60000ms = 60s/1m 3600s = 1h
function ms(ms, floor = false) {
  return {
    hour: floor ? Math.floor(ms / 3600000) : ms / 3600000,
    minute: floor ? Math.floor(ms / 60000) : ms / 60000,
    seconds: floor ? Math.floor(ms / 1000) : ms / 1000,
  };
}
// msEncoder
// create element with emmet annotation in js;
