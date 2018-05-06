let fs = require("fs");
const main = require('../main/main');

describe('main()', () => {

    it('should pass', () => {
      expect(fs.statSync("index.html").isFile()).toBe(true);
    });

});
