/* eslint-disable linebreak-style */
export function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}

export function get(name, sumbol = null) {
  return JSON.parse(window.localStorage.getItem(name) || sumbol);
}
