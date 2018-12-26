var code_analyzer = require('./code-analyzer');

function getGreenNodes(func,params)
{
    let greens = [];
    change(func.body.body);
    let toEval= code_analyzer.UnparseCode(func)+ '; ' + func.id.name + '('+params+');';
    eval(toEval);
    return greens;
}

function change( body)
{

    for(let i = 0 ; i < body.length ; i++)
    {   let exp = body[i];
        if(exp.type === 'IfStatement')
            changeIf(exp);
        else if(exp.type === 'WhileStatement')
            changeW(exp);
    }
    return body;
}
function changeW(exp)
{
    if(exp.body.type === 'BlockStatement') {
        change(exp.body.body);
        exp.body.body.unshift(getes(exp.Myid));
    }
    else {
        change([exp.body]);
        exp.body = getbs([getes(exp.Myid), exp.body]);
    }
}
function changeIf(exp){
    if(exp.consequent.type === 'BlockStatement') {
        change(exp.consequent.body);
        exp.consequent.body.unshift(getes(exp.Myid));

    }
    else {
        change([exp.consequent]);
        exp.consequent = getbs([getes(exp.Myid), exp.consequent]);
    }
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
function getbs(body)
{
    return {
        'type': 'BlockStatement',
        'body': body
    };
}
function getes(id) {return {'type' : 'ExpressionStatement',
    'expression':{
        'type':'CallExpression',
        'callee':{
            'type':'MemberExpression',
            'computed':false,
            'object':{
                'type':'Identifier',
                'name':'greens'},
            'property':{
                'type':'Identifier',
                'name':'push'}},
        'arguments':[{'type':'Literal','value':id,'raw':id.toString()}]}};

}
module.exports = {getGreenNodes};