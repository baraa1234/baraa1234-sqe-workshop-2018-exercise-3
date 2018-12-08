import * as esprima from 'esprima';
import * as escodegen from 'escodegen';

const parseCode = (codeToParse,withLoc) => {
    return esprima.parseScript(codeToParse,{loc:withLoc});
};
const UnparseCode = (codeToUnParse) => {
    return escodegen.generate(codeToUnParse,null);
};


export {parseCode,UnparseCode};
