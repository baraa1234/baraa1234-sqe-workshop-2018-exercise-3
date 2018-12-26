
var esprima = require('esprima');
var escodegen = require('escodegen');
const parseCode = (codeToParse,withLoc) => {
    return esprima.parseScript(codeToParse,{loc:withLoc});
};
const UnparseCode = (codeToUnParse) => {
    return escodegen.generate(codeToUnParse,null);
};


module.exports ={parseCode,UnparseCode};
