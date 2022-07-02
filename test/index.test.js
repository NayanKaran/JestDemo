import getShowsInfo from "../src/index.js";
import getFileContent from './getfile.js';

const jsonResponse = async () => {
    return new Promise((resolve) => {
          resolve(JSON.parse(getFileContent('./movie.json')));
    });
}

global.fetch = async () => {
  return new Promise((resolve) => {
        resolve({
          json: jsonResponse,
        });
  });
};

describe("Testing index.js", () => {
    test("getShowsInfo function", async () => {
            const data = await getShowsInfo();
            expect(data.length).toBeGreaterThan(0)
      });
});
