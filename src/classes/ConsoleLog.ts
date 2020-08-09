/**
 * Class ConsoleLog
 */
class ConsoleLog implements ILog {
  /**
   * log
   * @param {string} message
   * @return {boolean}
   */
  public log(message: string): boolean {
    console.log(message);
    return true;
  }
}

export {ConsoleLog};
