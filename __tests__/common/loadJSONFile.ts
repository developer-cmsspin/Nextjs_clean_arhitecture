import fs from 'fs';
export default function loadJSONFile(filePath: string): any {
  const fileData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileData);
}
