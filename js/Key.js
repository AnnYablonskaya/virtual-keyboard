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
      this.sub = main('div', 'sub', this.big);
    } else {
      this.sub = main('div', 'sub', '');
    }
    this.letter = main('div', 'letter', small);
    this.div = main(
      'div',
      'keyboard__key',
      [this.sub, this.letter],
      null,
      ['code', this.code],
      this.isFnKey ? ['fn', 'true'] : ['fn', 'false'],
    );
  }
}
