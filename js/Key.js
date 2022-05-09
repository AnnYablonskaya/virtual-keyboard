/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import main from './main/main.js';

export default class Key {
  constructor({ small, big, code }) {
    this.code = code;
    this.small = small;
    this.big = big;
    this.isFnKey = Boolean(small.match(/Ctrl|arr|Alt|Shift|Enter|Tab|Back|Win|Del|Caps/));
    if (big && big.match(/[^a-zA-zа-яА-яЁё0-9]/)) {
      this.sumbol = main('div', 'sumbol', this.big);
    } else {
      this.sumbol = main('div', 'sumbol', '');
    }
    this.letter = main('div', 'letter', small);
    this.div = main(
      'div',
      'keyboard__key',
      [this.sumbol, this.letter],
      null,
      ['code', this.code],
      this.isFnKey ? ['fn', 'true'] : ['fn', 'false'],
    );
  }
}
