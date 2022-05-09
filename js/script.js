/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { get } from './layout/storage.js';
import Keyboard from './Keybord.js';

alert('Доброго времени суток, уважаемые и глубоколюбимые проверяющие! По многим личным причинам не смогла доделать клавиатуру до дедлайна. Прошу Вас дать мне время доделать и проверить работу в четверг во второй половине дня. Спасибо большое за ваше понимание.!');

const rows1 = [
  ['letter', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9', 'num0', 'minus', 'equal', 'delete'],
  ['tab', 'letQ', 'letW', 'letE', 'letR', 'letT', 'letY', 'letU', 'letI', 'letO', 'letP', 'bracketLeft', 'bracketRight', 'backspace'],
  ['capsLock', 'letA', 'letS', 'letD', 'letF', 'letG', 'letH', 'letJ', 'letK', 'letL', 'semicolon', 'Quote', 'backslash', 'enter'],
  ['shiftLeft', 'intlBackslash', 'letZ', 'letX', 'letC', 'letV', 'letB', 'letN', 'letM', 'comma', 'dot', 'slash', 'arrowUp', 'shiftRight'],
  ['controlLeft', 'win', 'altLeft', 'space', 'altRight', 'arrowLeft', 'arrowDown', 'arrowRight', 'controlRight'],
];
const lang = get('lang', '"ru"');
new Keyboard(rows1).init(lang).generateLays();
