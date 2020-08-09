/**
 * Class TextAreaLog
 */
class TextAreaLog implements ILog {
  private element?: HTMLTextAreaElement;

  /**
   * setTextAreaElement
   * @param {HTMLTextAreaElement} element
   */
  public setTextAreaElement(element: HTMLTextAreaElement): void {
    this.element = element;
  }

  /**
   * log
   * @param {string} message
   * @return {boolean}
   */
  public log(message: string): boolean {
    if (this.element !== undefined) {
      this.element.value = this.element.value + message + '\n';
      return true;
    }
    return false;
  }
}

export {TextAreaLog};
