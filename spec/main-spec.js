let fs = require("fs");
const main = require('../main/main.js');

describe('main()', () =>{
    it('should pass', () =>{
      expect(fs.statSync("index.html").isFile()).toBe(true);
    });
    
    // var result = main();
    // it('score', () =>{
    //   expect(result).toEqual(100);
    // });

});
