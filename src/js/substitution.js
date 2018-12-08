import {parseCode} from './code-analyzer';

function sub(code)
{
    let parsed_code = parseCode(code,false);
    let rest = (parsed_code.body).filter((element) => element.type === 'VariableDeclaration');
    let fd = (parsed_code.body).find(function (element) {return element.type === 'FunctionDeclaration';});
    fd.body.body = substitute(fd.body.body, {});
    rest.unshift(fd);
    return rest;

}
function addVarDeclaration(env,vd)
{
    env[(vd.declarations[0]).id.name] = replace((vd.declarations[0]).init,env);
    return env;
}
function handleVarDeclaration(vd,locals)
{
    addVarDeclaration(locals,vd) ;
    vd.type ='toremove';
}
function handleIfStatement(is,locals)
{
    is.test= replace(is.test,locals);
    if(is.consequent.type === 'BlockStatement')
        is.consequent.body = substitute(is.consequent.body,deep_copy(locals));
    else {
        substitute([is.consequent],deep_copy(locals));

    }


    if(is.alternate!==null && is.alternate.type === 'BlockStatement')
        is.alternate.body = substitute(is.alternate.body,deep_copy(locals));
    else if(is.alternate!==null)
        substitute([is.alternate],deep_copy(locals));



}
function handleExpressionStatement(es,locals)
{

    let left = es.expression.left;
    let right = es.expression.right;

    if(locals[left.name] !== undefined){
        locals[left.name] = replace(right,locals);
        es.type ='toremove';
    }
    else {
        es.expression.right = replace(right,locals);

    }


}

function handleWhileStatement(ws,locals)
{
    ws.test = replace(ws.test,locals);
    if(ws.body.type === 'BlockStatement')
        ws.body.body = substitute(ws.body.body ,deep_copy(locals));
    else {
        substitute([ws.body], deep_copy(locals));
    }

}
function handleReturnStatement(rs,locals)
{
    rs.argument = replace(rs.argument,locals);
}
let mapper = {
    'VariableDeclaration':handleVarDeclaration,
    'IfStatement':handleIfStatement,
    'ExpressionStatement':handleExpressionStatement,
    'WhileStatement':handleWhileStatement,
    'ReturnStatement':handleReturnStatement
};
function substitute(body,locals)
{


    for(let i =0 ; i< body.length ; i++)
    {
        let element = body[i];
        let a = mapper[element.type];
        a(element,locals);

    }
    return body.filter(word => word.type !== 'toremove');

}

function rep_Identifier(exp,locals){return locals[exp.name] === undefined?exp:locals[exp.name];}

function rep_BinaryExpression(exp,locals){
    exp['left'] = replace(exp.left,locals);
    exp['right'] = replace(exp.right,locals);
    return exp;}

function rep_MemberExpression(exp,locals){
    if(locals[exp.object.name] !== undefined)
        exp.object = locals[exp.object.name];
    return exp;
}



function replace(exp,locals)
{
    let A = {'Identifier':rep_Identifier,
        'BinaryExpression':rep_BinaryExpression,
        'MemberExpression':rep_MemberExpression};
    if(A[exp.type] === undefined) return exp;
    else
        return A[exp.type](exp,locals);

}

function deep_copy(myMap)
{
    const newMap = {};
    for (let i in myMap)
        newMap[i] = myMap[i];
    return newMap;
}

export {sub};