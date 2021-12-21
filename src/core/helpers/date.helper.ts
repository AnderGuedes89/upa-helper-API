export abstract class DateHelper {
  protected constructor() {
    /* Empty */
  }

  static formatDateTime(date: Date): string {
    const value = date.toLocaleDateString() + ' - ' + date.toLocaleTimeString();
    return value;
  }

  static formatOnlyDate(date: Date): string {
    const value = date.toLocaleDateString();
    return value;
  }
}
