/**
 * Loads a JSON file from the specified file path.
 * @param filePath - The path of the JSON file to load.
 * @returns The parsed JSON data from the file.
 */
import fs from 'fs';

export default function loadJSONFile(filePath: string): any {
  /**
   * Read the contents of the file synchronously using utf-8 encoding.
   * @param filePath - The path of the file to read.
   * @param 'utf-8' - The encoding type for reading the file (utf-8 by default).
   * @returns The content of the file as a string.
   */
  const fileData = fs.readFileSync(filePath, 'utf-8');

  // Parse the file data into a JavaScript object.
  return JSON.parse(fileData);
}
