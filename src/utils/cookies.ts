import CookiesJS from 'cookies-js';

class Cookies {
  setItem(name, item) {
    if (typeof item === 'object') {
      CookiesJS.set(name, JSON.stringify(item));
    } else {
      CookiesJS.set(name, item);
    }
  }

  getItem(name) {
    let item = CookiesJS.get(name);

    if (typeof item !== 'undefined' && item !== null) {
      try {
        item = JSON.parse(item);
      } catch (e) {
        // fail silently
      }
    }

    return item;
  }

  removeItem(name) {
    CookiesJS.expire(name);
  }

  checkItem(name) {
    return document.cookie.includes(name);
  }
}

export default new Cookies();
