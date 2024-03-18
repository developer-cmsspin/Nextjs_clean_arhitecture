/**
 * ClassValidator provides methods to validate the existence of classes and functions in a specified file.
 */
export default class ClassValidator {
  /**
   * Validates the existence of a class with the specified name in the given file.
   * @param className - The name of the class to be validated.
   * @param filePath - The path of the file to be imported and checked.
   * @returns A Promise that resolves to a boolean value indicating whether the class exists in the file.
   * If the class is found, it returns true; otherwise, it returns false. If there's an error during the import
   * or validation process, it logs an error message to the console and returns false.
   */
  static async validateClassExistence(className: string, filePath: string): Promise<boolean> {
    try {
      const myModule = await import(filePath);
      return className in myModule;
    } catch (error) {
      console.error(`Error loading ${filePath}:`, error);
      return false;
    }
  }

  /**
   * Validates the existence of a function with the specified name in the given file.
   * @param functionName - The name of the function to be validated.
   * @param filePath - The path of the file to be imported and checked.
   * @returns A Promise that resolves to a boolean value indicating whether the function exists in the file.
   * If the function is found, it returns true; otherwise, it returns false. If there's an error during the
   * import or validation process, it logs an error message to the console and returns false.
   */
  static async validateFunctionExistence(functionName: string, filePath: string): Promise<boolean> {
    try {
      const myModule = await import(filePath);
      return functionName in myModule;
    } catch (error) {
      console.error(`Error loading ${filePath}:`, error);
      return false;
    }
  }
}
