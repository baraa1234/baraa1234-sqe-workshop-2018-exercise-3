var code_analyzer = require('./code-analyzer');
var transformer = require('./transformer');
var evaluation = require('./evaluation');
let n = 0;
let counter = () => n++;
function start(fun,params)
{

    n = 0;
    let func = code_analyzer.parseCode(fun).body.find((element) => element.type === 'FunctionDeclaration');
    let nodes = getNodes(func.body.body);
    let greens= evaluation.getGreenNodes(func,params);
    color(nodes,greens);
    n=0;
    return  transformer.transform(nodes);

}
/*
* representation for tree nodes is
* {type: ('ReturnStatement'\'IfStatement'\'WhileStatement'\'normal'\'endpoint'),
* id : (0 1 2 3 ....),
* right: {},
* left :{},
* color: ('white'/'green'),
* description: '...'}*/
let getNodes_mapper = {
    'ReturnStatement':getNodes_RS,
    'IfStatement':getNodes_IF,
    'WhileStatement':getNodes_WS,
    'BlockStatement':getNodes_BS

};
let mapper =  x =>  {  return getNodes_mapper[x.type] === undefined? getNodes_normal(x) :getNodes_mapper[x.type](x);};
let reducer =  (acc,current) => {
    if(acc.type === 'normal' && current.type === 'normal') {
        current.description += '\n' + acc.description;
        current.right = acc.right;
    }
    else if(current.type === 'IfStatement' || current.type === 'mergepoint' )
        current.endpoint.right = acc;
    else
        current.right = acc;

    return current;
};
function getNodestest(func)
{
    n = 0;
    return getNodes(func);
}
function getNodes(func){

    let mapped =func.map( mapper);

    let reduced = mapped.reduceRight(reducer);
    return reduced;
}
function getNodes_normal(expr){

    return  {'type':'normal' ,
        'id' : counter(),
        'description': code_analyzer.UnparseCode(expr),
        'color':'gray',
        'right':null,
        'left':null,
        'shape': 'rectangle'};
}
function getNodes_BS(expr){
    return  getNodes(expr.body);
}
function getNodes_IF(expr)
{
    let IF = {'type': expr.type ,'id' : counter(),'description': code_analyzer.UnparseCode(expr.test),'color':'gray','right':mapper(expr.consequent),'left':expr.alternate === null?null:mapper(expr.alternate),'shape':'diamond'};
    let endpoint = {'type': 'mergepoint' ,'id' : counter(),'description': '','color':'gray','right':null,'left':null , 'endpoint':null ,'shape':'circle'};
    let leaves = get_leaves(IF);
    leaves.forEach(function(e) {
        e.right = endpoint;
    });
    IF.endpoint = endpoint;
    expr.Myid = IF.id; // give the if an id for coloring
    return IF;
}
function getNodes_RS(expr)
{
    return  {'type': expr.type ,
        'id' : counter(),
        'description': code_analyzer.UnparseCode(expr.argument),
        'color':'gray',
        'right':null,
        'left':null,
        'shape':'rectangle'};
}
function getNodes_WS(expr)
{
    let endpoint = {'type': 'mergepoint' ,'id' : counter(),'description': 'end While','color':'gray','right':null,'left':null , 'endpoint':null,'shape':'circle'};
    let W = {'type': expr.type ,'id' : counter(),'description': code_analyzer.UnparseCode(expr.test),'color':'gray','right':mapper(expr.body),'left':null,'shape':'diamond'};
    let startpoint = {'type': 'mergepoint' ,'id' : counter(),'description': 'start While','color':'gray','right':W,'left':null , 'endpoint':endpoint,'shape':'circle'};
    let leaves = get_leaves(W);
    leaves.forEach(function(e) {
        e.right = startpoint;
    });
    W.left = endpoint;
    expr.Myid = W.id; // give the statement an id for coloring
    return startpoint;
}
function isleaf(expr)
{
    return expr.right === null && expr.left === null;
}
function isstartWhile(expr)
{
    return expr.type === 'mergepoint' && expr.endpoint !== null;
}
function get_leaves(expr){
    let res = [];
    if(isstartWhile(expr))
        return get_leaves(expr.endpoint);
    else if(isleaf(expr) )
        return [expr];

    res = res.concat(get_leaves(expr.right));
    if(expr.left !== null)
        res = res.concat(get_leaves(expr.left));
    return res;

}
let colorIF = (tree,arr) => {tree.color = 'green';//thisfunction was declared for reducing complexity
    if(arr.includes(tree.id))
        color(tree.right,arr);
    else
        color(tree.left,arr);
};

let colorW  = (tree,arr) =>{
    tree.color = 'green';
    if(arr.includes(tree.id))
        color(tree.right,arr);
    color(tree.left,arr);
};
function color(tree,arr){
    if (tree === null)
        return;
    else if(tree.type === 'IfStatement' )
        colorIF(tree,arr);
    else if (tree.type === 'WhileStatement')
        colorW(tree,arr);
    else if(tree.color !== 'green')
    { tree.color = 'green';   color(tree.right,arr); }
}

module.exports = {start,getNodestest};
