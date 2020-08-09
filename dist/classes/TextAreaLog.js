"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaLog = void 0;
/**
 * Class TextAreaLog
 */
class TextAreaLog {
    /**
     * setTextAreaElement
     * @param {HTMLTextAreaElement} element
     */
    setTextAreaElement(element) {
        this.element = element;
    }
    /**
     * log
     * @param {string} message
     * @return {boolean}
     */
    log(message) {
        if (this.element !== undefined) {
            this.element.value = this.element.value + message + '\n';
            return true;
        }
        return false;
    }
}
exports.TextAreaLog = TextAreaLog;
