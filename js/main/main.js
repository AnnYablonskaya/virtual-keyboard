/* eslint-disable linebreak-style */
/**
 * @param {String} el
 * @param {String} nameClass
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 * @param {...array} dataarr
 */
export default function main(el, nameClass, child, parent, ...dataArr) {
  let element = null;
  element = document.createElement(el);
  if (nameClass) element.classList.add(...nameClass.split(' '));
  if (child && Array.isArray(child)) {
    child.forEach((childEl) => childEl && element.appendChild(childEl));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }
  if (parent) {
    parent.appendChild(element);
  }
  if (dataArr.length) {
    dataArr.forEach(([attrNam, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrNam, '');
      }
      if (attrNam.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)) {
        element.setAttribute(attrNam, attrValue);
      } else {
        element.dataset[attrNam] = attrValue;
      }
    });
  }
  return element;
}
