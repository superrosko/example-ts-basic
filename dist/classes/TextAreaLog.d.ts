/**
 * Class TextAreaLog
 */
declare class TextAreaLog implements ILog {
    private element?;
    /**
     * setTextAreaElement
     * @param {HTMLTextAreaElement} element
     */
    setTextAreaElement(element: HTMLTextAreaElement): void;
    /**
     * log
     * @param {string} message
     * @return {boolean}
     */
    log(message: string): boolean;
}
export { TextAreaLog };
