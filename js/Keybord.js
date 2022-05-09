/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import main from './main/main.js';
import language from './layout/index.js';
import Key from './Key.js';

const headboard = main(
  'headboard',
  '',
  [main('h1', 'title', 'RSS Виртуальная клавиатура'),
    main('h2', 'secondTitle', 'Клавиатура создана в операционной системе Windows'),
    main('p', 'text', 'Для переключения языка комбинация: левыe ctrl + alt'),
  ],
);
export default class Keyboard {
  constructor(rows1) {
    this.rows1 = rows1;
    this.keysPress = {};
    this.isCaps = false;
  }

  init(langCode) {
    this.keyLang = language[langCode];
    this.enterText = main(
      'textarea',
      'enterText',
      null,
      headboard,
      ['placeholder', 'Type...'],
      ['rows', 10],
      ['cols', 100],
      ['spellcheck', false],
      ['autocorrect', 'off'],
    );
    this.wrapper = main('div', 'keybord', null, headboard, ['language', langCode]);
    document.body.prepend(headboard);
    return this;
  }

  generateLays() {
    this.keyBtns = [];
    this.rows1.forEach((line, i) => {
      const elementRow = main('div', 'keybords__row', null, this.wrapper, ['line', i + 1]);
      elementRow.style.gridTemplateColumns = `repeat(${line.lenght}, 1fr)`;
      line.forEach((code) => {
        const objKey = this.keyLang.find((key) => key.code === code);
        if (objKey) {
          const btnKey = new Key(objKey);
          this.keyBtns.push(btnKey);
          elementRow.appendChild(btnKey.div);
        }
      });
    });
  }
}