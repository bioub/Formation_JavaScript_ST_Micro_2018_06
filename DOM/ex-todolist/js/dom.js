(function (global) {
  'use strict';

  /**
   * Prepend child to element
   * @param {Element} container 
   * @param {Element} element 
   */
  function prepend(container, element) {
    if (container.children.length) {
      container.insertBefore(element, container.firstElementChild);
    } else {
      container.appendChild(element);
    }
  }

  /**
   * Append child to element
   * @param {Element} container 
   * @param {Element} element 
   */
  function append(container, element) {
    container.appendChild(element);
  }

  /**
   * Remove element
   * @param {Element} element 
   */
  function remove(element) {
    element.parentElement.removeChild(element);
  }

  global.stMicro = global.stMicro || {};
  stMicro.dom = stMicro.dom || {};
  stMicro.dom.append = append;
  stMicro.dom.prepend = prepend;
  stMicro.dom.remove = remove;
}(window));