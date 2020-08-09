import { TextAreaLog } from './classes/TextAreaLog';
import { ConsoleLog } from './classes/ConsoleLog';
declare global {
    interface Window {
        logTextArea: TextAreaLog;
        logConsole: ConsoleLog;
    }
}
