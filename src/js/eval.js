import {parseCode, UnparseCode} from './code-analyzer';
import {sub} from './substitution';



let conditions = {};
function getp(body){
    return {
        'type': 'Program',
        'body': body,
        'sourceType': 'script'
    };
}
function getes(line) {  let raw = line.toString();
    return  {
        'type': 'ExpressionStatement',
        'expression': {
            'type': 'AssignmentExpression',
            'operator': '=',
            'left': {
                'type': 'MemberExpression',
                'computed': true,
                'object': {
                    'type': 'Identifier',
                    'name': 'conditions'
                },
                'property': {'type': 'Literal', 'value': line, 'raw': raw
                }},
            'right': {
                'type': 'Literal',
                'value': 'green',
                'raw': '"green"'}}};}
function getbs(body)
{
    return {
        'type': 'BlockStatement',
        'body': body
    };
}
function start(_code,param) {
    let code = sub(_code);
    let fd = code[0];
    let substitutedFun = UnparseCode(fd);
    fd = ((parseCode(substitutedFun, true)).body)[0];
    fd.body.body = change(fd.body.body);
    code[0] = fd;
    let changed = UnparseCode(getp(code));
    eval(changed + ' ' + fd.id.name + '(' + param + ');');
    return coloredLines(substitutedFun.split('\n'), conditions);



}
function coloredLines(lines,cond){
    let result = [];
    for(let i = 0 ; i < lines.length ; i++)
    {    let color = getcolor(i+1,cond);
        result.push({'line': lines[i] , 'color' :color });
    }
    return result;
}

function getcolor( i,cond){
    return cond[i]=== undefined?'white':cond[i];

}
function changeIf(exp){
    conditions[exp.loc.start.line] = 'red';
    if(exp.consequent.type === 'BlockStatement')
        exp.consequent.body.unshift(getes(exp.loc.start.line));
    else
        exp.consequent = getbs([getes(exp.loc.start.line),exp.consequent]);
    if(exp.alternate !== null)
    {
        if(exp.alternate.type === 'BlockStatement')
            exp.alternate.body = change(exp.alternate.body);
        else {
            let changed = change([exp.alternate]);
            exp.alternate = changed[0];
        }
    }
}
function change( body)
{

    for(let i = 0 ; i < body.length ; i++)
    {   let exp = body[i];
        if(exp.type === 'IfStatement')
            changeIf(exp);
    }
    return body;
}



export {start};