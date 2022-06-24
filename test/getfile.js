import path from 'path';
import fs from 'fs';

const getFileContent = (fileName) => {
  const filePath = path.join(__dirname, fileName);
  return fs.readFileSync(filePath);
};

export default getFileContent;
