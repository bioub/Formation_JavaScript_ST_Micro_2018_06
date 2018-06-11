(function(dom) {
  'use strict';

  /*
  Exercice 1 : Ajouter un bouton moins à la fin de chaque ligne
  Exercice 2 : Au clic du bouton moins supprimer la ligne
  Indice : event.target => la référence du HTMLButtonElement
  Indice : parentNode / parentElement / removeChild / remove (mal supporté)

  Exercice 3 : Ajouter dans le HTML une case à cocher <input type="checkbox">
  et en JS une case à cocher sur chaque ligne
  Au clic de la case au cocher du formulaire, tout cocher ou décocher
  */

  /**
   * @param {object} todo La todo
   * @param {string} todo.title Le titre
   * @param {boolean} todo.completed Le status
   */
  function addTodo(todo) {
    const value = todo.title
    const checked = todo.completed;
    
    const rowElt = document.createElement('div');

    const checkboxElt = document.createElement('input');
    checkboxElt.type = 'checkbox';
    dom.append(rowElt, checkboxElt); // <div><input type="checkbox"></div>

    const rowInputElt = document.createElement('input');
    rowInputElt.value = value;
    dom.append(rowElt, rowInputElt); // <div><input type="checkbox"><input value="todo"></div>

    const buttonRemoveElt = document.createElement('button');
    buttonRemoveElt.innerText = '-';
    dom.append(rowElt, buttonRemoveElt); // <div><input type="checkbox"><input value="todo"><button>-</button></div>

    buttonRemoveElt.addEventListener('click', (event) => {
      dom.remove(event.target.parentElement);
    });

    dom.prepend(divElt, rowElt);
  }

  /** @type HTMLFormElement */
  const formElt = document.querySelector('.todo-form');

  /** @type HTMLInputElement */
  const inputElt = document.querySelector('.todo-input');

  /** @type HTMLDivElement */
  const divElt = document.querySelector('.todo-div');

  /** @type HTMLInputElement */
  const checkElt = document.querySelector('.todo-check');
  
  formElt.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo({
      title: inputElt.value,
      completed: false,
    });
  });

  checkElt.addEventListener('change', () => {
    const checkboxesNodeList = divElt.querySelectorAll('input[type=checkbox]');
   
    const checkboxes = Array.from(checkboxesNodeList);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checkElt.checked;
    });
  });

  
}(stMicro.dom));