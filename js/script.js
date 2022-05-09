/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { get } from './layout/storage.js';
import Keyboard from './Keybord.js';

alert('Доброго времени суток, уважаемые и глубоколюбимые проверяющие! По многим личным причинам не смогла доделать клавиатуру до дедлайна. Прошу Вас дать мне время доделать и проверить работу в четверг во второй половине дня. Спасибо большое за ваше понимание.!');

const rows1 = [
  ['Letter', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Dot', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];
const lang = get('lang', '"ru"');
new Keyboard(rows1).init(lang).generateLays();
