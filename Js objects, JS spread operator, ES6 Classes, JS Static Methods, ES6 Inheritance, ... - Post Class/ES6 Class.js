<!-- GO TO SRC >> INDEX.JS THEN PASTE  ---->

class API {
  #secure = null; // private field

  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.#secure = url.startsWith('https');
  }

  isSecure() {
    return this.#secure;
  }

  updateUrl(url) {
    this.url = url;
    this.#secure = url.startsWith('https');
  }
}

const s = new API('http://api.com/api/hello');
console.log(s.isSecure()); // false

s.updateUrl('https://api.com/api/hello');
console.log(s.isSecure()); // true

console.log(s.url); // https://api.com/api/hello

console.log(s.method); // GET

console.log(s.secure); // Uncaught SyntaxError: Private field '#secure' must be declared in an enclosing class

module.exports = { API }
