import {TextAreaLog} from './classes/TextAreaLog';
import {ConsoleLog} from './classes/ConsoleLog';

const logTextArea = new TextAreaLog();
const logConsole = new ConsoleLog();

declare global {
  interface Window {
    logTextArea: TextAreaLog;
    logConsole: ConsoleLog;
  }
}
window.logTextArea = logTextArea;
window.logConsole = logConsole;
