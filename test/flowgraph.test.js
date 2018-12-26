import assert from 'assert';
var a = require('../src/js/flowgraph');


let t1 = ()=>{

    let t =[{'type':'VariableDeclaration','declarations':[{'type':'VariableDeclarator','id':{'type':'Identifier','name':'a'},'init':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'x'},'right':{'type':'Literal','value':1,'raw':'1'}}}],'kind':'let'},{'type':'VariableDeclaration','declarations':[{'type':'VariableDeclarator','id':{'type':'Identifier','name':'b'},'init':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'a'},'right':{'type':'Identifier','name':'y'}}}],'kind':'let'},{'type':'VariableDeclaration','declarations':[{'type':'VariableDeclarator','id':{'type':'Identifier','name':'c'},'init':{'type':'Literal','value':0,'raw':'0'}}],'kind':'let'},{'type':'IfStatement','test':{'type':'BinaryExpression','operator':'<','left':{'type':'Identifier','name':'b'},'right':{'type':'Identifier','name':'z'}},'consequent':{'type':'BlockStatement','body':[{'type':'ExpressionStatement','expression':{'type':'AssignmentExpression','operator':'=','left':{'type':'Identifier','name':'c'},'right':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'c'},'right':{'type':'Literal','value':5,'raw':'5'}}}}]},'alternate':{'type':'IfStatement','test':{'type':'BinaryExpression','operator':'<','left':{'type':'Identifier','name':'b'},'right':{'type':'BinaryExpression','operator':'*','left':{'type':'Identifier','name':'z'},'right':{'type':'Literal','value':2,'raw':'2'}}},'consequent':{'type':'BlockStatement','body':[{'type':'ExpressionStatement','expression':{'type':'AssignmentExpression','operator':'=','left':{'type':'Identifier','name':'c'},'right':{'type':'BinaryExpression','operator':'+','left':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'c'},'right':{'type':'Identifier','name':'x'}},'right':{'type':'Literal','value':5,'raw':'5'}}}}]},'alternate':{'type':'BlockStatement','body':[{'type':'ExpressionStatement','expression':{'type':'AssignmentExpression','operator':'=','left':{'type':'Identifier','name':'c'},'right':{'type':'BinaryExpression','operator':'+','left':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'c'},'right':{'type':'Identifier','name':'z'}},'right':{'type':'Literal','value':5,'raw':'5'}}}}]}}},{'type':'ReturnStatement','argument':{'type':'Identifier','name':'c'}}];
    let expected = {'type':'normal','id':0,'description':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'gray','right':{'type':'IfStatement','id':3,'description':'b < z','color':'gray','right':{'type':'normal','id':4,'description':'c = c + 5;','color':'gray','right':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'shape':'rectangle'},'left':{'type':'IfStatement','id':5,'description':'b < z * 2','color':'gray','right':{'type':'normal','id':6,'description':'c = c + x + 5;','color':'gray','right':{'type':'mergepoint','id':8,'description':'','color':'gray','right':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'shape':'rectangle'},'left':{'type':'normal','id':7,'description':'c = c + z + 5;','color':'gray','right':{'type':'mergepoint','id':8,'description':'','color':'gray','right':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'shape':'rectangle'},'shape':'diamond','endpoint':{'type':'mergepoint','id':8,'description':'','color':'gray','right':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'endpoint':null,'shape':'circle'}},'shape':'diamond','endpoint':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'}},'left':null,'shape':'rectangle'};
    let actual= a.getNodestest(t);

    assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};

let t2 = ()=>{

    let t =[{'type':'VariableDeclaration','declarations':[{'type':'VariableDeclarator','id':{'type':'Identifier','name':'a'},'init':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'x'},'right':{'type':'Literal','value':1,'raw':'1'}}}],'kind':'let'},{'type':'VariableDeclaration','declarations':[{'type':'VariableDeclarator','id':{'type':'Identifier','name':'b'},'init':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'a'},'right':{'type':'Identifier','name':'y'}}}],'kind':'let'},{'type':'VariableDeclaration','declarations':[{'type':'VariableDeclarator','id':{'type':'Identifier','name':'c'},'init':{'type':'Literal','value':0,'raw':'0'}}],'kind':'let'},{'type':'IfStatement','test':{'type':'BinaryExpression','operator':'<','left':{'type':'Identifier','name':'b'},'right':{'type':'Identifier','name':'z'}},'consequent':{'type':'ExpressionStatement','expression':{'type':'AssignmentExpression','operator':'=','left':{'type':'Identifier','name':'c'},'right':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'c'},'right':{'type':'Literal','value':5,'raw':'5'}}}},'alternate':{'type':'ExpressionStatement','expression':{'type':'AssignmentExpression','operator':'=','left':{'type':'Identifier','name':'c'},'right':{'type':'BinaryExpression','operator':'+','left':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'c'},'right':{'type':'Identifier','name':'z'}},'right':{'type':'Literal','value':5,'raw':'5'}}}}},{'type':'ReturnStatement','argument':{'type':'Identifier','name':'c'}}];
    let expected = {'type':'normal','id':0,'description':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'gray','right':{'type':'IfStatement','id':3,'description':'b < z','color':'gray','right':{'type':'normal','id':4,'description':'c = c + 5;','color':'gray','right':{'type':'mergepoint','id':6,'description':'','color':'gray','right':{'type':'ReturnStatement','id':7,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'shape':'rectangle'},'left':{'type':'normal','id':5,'description':'c = c + z + 5;','color':'gray','right':{'type':'mergepoint','id':6,'description':'','color':'gray','right':{'type':'ReturnStatement','id':7,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'shape':'rectangle'},'shape':'diamond','endpoint':{'type':'mergepoint','id':6,'description':'','color':'gray','right':{'type':'ReturnStatement','id':7,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'}},'left':null,'shape':'rectangle'};
    let actual= a.getNodestest(t);

    assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};

let t3 = ()=>{

    let t =[{'type':'VariableDeclaration','declarations':[{'type':'VariableDeclarator','id':{'type':'Identifier','name':'a'},'init':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'x'},'right':{'type':'Literal','value':1,'raw':'1'}}}],'kind':'let'},{'type':'VariableDeclaration','declarations':[{'type':'VariableDeclarator','id':{'type':'Identifier','name':'b'},'init':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'a'},'right':{'type':'Identifier','name':'y'}}}],'kind':'let'},{'type':'VariableDeclaration','declarations':[{'type':'VariableDeclarator','id':{'type':'Identifier','name':'c'},'init':{'type':'Literal','value':0,'raw':'0'}}],'kind':'let'},{'type':'IfStatement','test':{'type':'BinaryExpression','operator':'<','left':{'type':'Identifier','name':'b'},'right':{'type':'Identifier','name':'z'}},'consequent':{'type':'IfStatement','test':{'type':'BinaryExpression','operator':'<','left':{'type':'Identifier','name':'z'},'right':{'type':'Literal','value':5,'raw':'5'}},'consequent':{'type':'ExpressionStatement','expression':{'type':'AssignmentExpression','operator':'=','left':{'type':'Identifier','name':'c'},'right':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'c'},'right':{'type':'Literal','value':5,'raw':'5'}}}},'alternate':{'type':'ExpressionStatement','expression':{'type':'AssignmentExpression','operator':'=','left':{'type':'Identifier','name':'c'},'right':{'type':'BinaryExpression','operator':'+','left':{'type':'BinaryExpression','operator':'+','left':{'type':'Identifier','name':'c'},'right':{'type':'Identifier','name':'z'}},'right':{'type':'Literal','value':5,'raw':'5'}}}}},'alternate':{'type':'ExpressionStatement','expression':{'type':'AssignmentExpression','operator':'=','left':{'type':'Identifier','name':'c'},'right':{'type':'Literal','value':0,'raw':'0'}}}},{'type':'ReturnStatement','argument':{'type':'Identifier','name':'c'}}];
    let expected = {'type':'normal','id':0,'description':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'gray','right':{'type':'IfStatement','id':3,'description':'b < z','color':'gray','right':{'type':'IfStatement','id':4,'description':'z < 5','color':'gray','right':{'type':'normal','id':5,'description':'c = c + 5;','color':'gray','right':{'type':'mergepoint','id':7,'description':'','color':'gray','right':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'shape':'rectangle'},'left':{'type':'normal','id':6,'description':'c = c + z + 5;','color':'gray','right':{'type':'mergepoint','id':7,'description':'','color':'gray','right':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'shape':'rectangle'},'shape':'diamond','endpoint':{'type':'mergepoint','id':7,'description':'','color':'gray','right':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'endpoint':null,'shape':'circle'}},'left':{'type':'normal','id':8,'description':'c = 0;','color':'gray','right':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'},'left':null,'shape':'rectangle'},'shape':'diamond','endpoint':{'type':'mergepoint','id':9,'description':'','color':'gray','right':{'type':'ReturnStatement','id':10,'description':'c','color':'gray','right':null,'left':null,'shape':'rectangle'},'left':null,'endpoint':null,'shape':'circle'}},'left':null,'shape':'rectangle'};
    let actual= a.getNodestest(t);

    assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};

let t4 = ()=>{
    let t ='function foo(x, y, z){\n' +
        '    let a = x + 1;\n' +
        '    let b = a + y;\n' +
        '    let c = 0;\n' +
        '    \n' +
        '    if (b < z) {\n' +
        '        c = c + 5;\n' +
        '    } else if (b < z * 2) {\n' +
        '        c = c + x + 5;\n' +
        '    } else {\n' +
        '        c = c + z + 5;\n' +
        '    }\n' +
        '    \n' +
        '    return c;\n' +
        '}\n';
    let expected = [{'data':{'id':0,'text':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':3,'text':'b < z','color':'green','shape':'diamond'}},{'data':{'id':4,'text':'c = c + 5;','color':'gray','shape':'rectangle'}},{'data':{'id':9,'text':'','color':'green','shape':'circle'}},{'data':{'id':10,'text':'c','color':'green','shape':'rectangle'}},{'data':{'id':5,'text':'b < z * 2','color':'green','shape':'diamond'}},{'data':{'id':6,'text':'c = c + x + 5;','color':'gray','shape':'rectangle'}},{'data':{'id':8,'text':'','color':'green','shape':'circle'}},{'data':{'id':7,'text':'c = c + z + 5;','color':'green','shape':'rectangle'}},{'data':{'id':'0->3','source':0,'target':3}},{'data':{'id':'3->4','source':3,'target':4}},{'data':{'id':'3->5','source':3,'target':5}},{'data':{'id':'4->9','source':4,'target':9}},{'data':{'id':'9->10','source':9,'target':10}},{'data':{'id':'5->6','source':5,'target':6}},{'data':{'id':'5->7','source':5,'target':7}},{'data':{'id':'6->8','source':6,'target':8}},{'data':{'id':'8->9','source':8,'target':9}},{'data':{'id':'7->8','source':7,'target':8}}];
    let actual= a.start(t);

    assert.equal(JSON.stringify(expected),JSON.stringify(actual));};

let t5 = ()=>{
    let t ='function foo(x, y, z){\n' +
        '   let a = x + 1;\n' +
        '   let b = a + y;\n' +
        '   let c = 0;\n' +
        '   \n' +
        '   while (a < z) {\n' +
        '       c = a + b;\n' +
        '       z = c * 2;\n' +
        '       a++;\n' +
        '   }\n' +
        '   \n' +
        '   return z;\n' +
        '}\n';
    let expected = [{'data':{'id':0,'text':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':8,'text':'start While','color':'green','shape':'circle'}},{'data':{'id':4,'text':'a < z','color':'green','shape':'diamond'}},{'data':{'id':5,'text':'c = a + b;\nz = c * 2;\na++;','color':'gray','shape':'rectangle'}},{'data':{'id':3,'text':'end While','color':'green','shape':'circle'}},{'data':{'id':9,'text':'z','color':'green','shape':'rectangle'}},{'data':{'id':'0->8','source':0,'target':8}},{'data':{'id':'8->4','source':8,'target':4}},{'data':{'id':'4->5','source':4,'target':5}},{'data':{'id':'4->3','source':4,'target':3}},{'data':{'id':'5->8','source':5,'target':8}},{'data':{'id':'3->9','source':3,'target':9}}];
    let actual= a.start(t);

    assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};

let t6 = ()=>{
    let t ='function foo(x, y, z){\n' +
        '    let a = x + 1;\n' +
        '    let b = a + y;\n' +
        '    let c = 0;\n' +
        '    \n' +
        '    if (b < z) \n' +
        '           if(z < 5)\n' +
        '              c = c + 5;\n' +
        '           else \n' +
        '              c = c + z + 5;\n' +
        '    else \n' +
        '           c = 0;\n' +
        '    \n' +
        '    \n' +
        '    return c;\n' +
        '}\n';
    let expected =[{'data':{'id':0,'text':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':3,'text':'b < z','color':'green','shape':'diamond'}},{'data':{'id':4,'text':'z < 5','color':'gray','shape':'diamond'}},{'data':{'id':5,'text':'c = c + 5;','color':'gray','shape':'rectangle'}},{'data':{'id':7,'text':'','color':'gray','shape':'circle'}},{'data':{'id':9,'text':'','color':'green','shape':'circle'}},{'data':{'id':10,'text':'c','color':'green','shape':'rectangle'}},{'data':{'id':6,'text':'c = c + z + 5;','color':'gray','shape':'rectangle'}},{'data':{'id':8,'text':'c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':'0->3','source':0,'target':3}},{'data':{'id':'3->4','source':3,'target':4}},{'data':{'id':'3->8','source':3,'target':8}},{'data':{'id':'4->5','source':4,'target':5}},{'data':{'id':'4->6','source':4,'target':6}},{'data':{'id':'5->7','source':5,'target':7}},{'data':{'id':'7->9','source':7,'target':9}},{'data':{'id':'9->10','source':9,'target':10}},{'data':{'id':'6->7','source':6,'target':7}},{'data':{'id':'8->9','source':8,'target':9}}];
    let actual= a.start(t);  assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};

let t7 = ()=>{
    let t = 'function foo(x, y, z){\n' +
    '    let a = x + 1;\n' +
    '    let b = a + y;\n' +
    '    let c = 0;\n' +
    '    \n' +
    '    if (b < z) \n' +
    '            c = c + 5;\n' +
    '    else \n' +
    '           c = 0;\n' +
    '    \n' +
    '    \n' +
    '    return c;\n' +
    '}\n';
    let expected =[{'data':{'id':0,'text':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':3,'text':'b < z','color':'green','shape':'diamond'}},{'data':{'id':4,'text':'c = c + 5;','color':'gray','shape':'rectangle'}},{'data':{'id':6,'text':'','color':'green','shape':'circle'}},{'data':{'id':7,'text':'c','color':'green','shape':'rectangle'}},{'data':{'id':5,'text':'c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':'0->3','source':0,'target':3}},{'data':{'id':'3->4','source':3,'target':4}},{'data':{'id':'3->5','source':3,'target':5}},{'data':{'id':'4->6','source':4,'target':6}},{'data':{'id':'6->7','source':6,'target':7}},{'data':{'id':'5->6','source':5,'target':6}}];
    let actual= a.start(t);  assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};

let t8 = ()=>{
    let t= 'function foo(x, y, z){\n' +
    '   let a = x + 1;\n' +
    '   let b = a + y;\n' +
    '   let c = 0;\n' +
    '   \n' +
    '   while (false) \n' +
    '       a++;\n' +
    '   \n' +
    '   \n' +
    '   return z;\n' +
    '}\n';
    let expected= [{'data':{'id':0,'text':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':6,'text':'start While','color':'green','shape':'circle'}},{'data':{'id':4,'text':'false','color':'green','shape':'diamond'}},{'data':{'id':5,'text':'a++;','color':'gray','shape':'rectangle'}},{'data':{'id':3,'text':'end While','color':'green','shape':'circle'}},{'data':{'id':7,'text':'z','color':'green','shape':'rectangle'}},{'data':{'id':'0->6','source':0,'target':6}},{'data':{'id':'6->4','source':6,'target':4}},{'data':{'id':'4->5','source':4,'target':5}},{'data':{'id':'4->3','source':4,'target':3}},{'data':{'id':'5->6','source':5,'target':6}},{'data':{'id':'3->7','source':3,'target':7}}];
    let actual= a.start(t);  assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};

let t9 = ()=>{
    let t = 'function foo(x, y, z){\n' +
        '    let a = x + 1;\n' +
        '    let b = a + y;\n' +
        '    let c = 0;\n' +
        '    \n' +
        '    if (b < z) \n' +
        '        c = c + 5;\n' +
        '    \n' +
        '    return c;\n' +
        '}\n';
    let expected= [{'data':{'id':0,'text':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':3,'text':'b < z','color':'green','shape':'diamond'}},{'data':{'id':4,'text':'c = c + 5;','color':'gray','shape':'rectangle'}},{'data':{'id':5,'text':'','color':'gray','shape':'circle'}},{'data':{'id':6,'text':'c','color':'gray','shape':'rectangle'}},{'data':{'id':'0->3','source':0,'target':3}},{'data':{'id':'3->4','source':3,'target':4}},{'data':{'id':'4->5','source':4,'target':5}},{'data':{'id':'5->6','source':5,'target':6}}];
    let actual= a.start(t);  assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};

let t10 = ()=>{
    let t = 'function foo(x, y, z){\n' +
        '    let a = x + 1;\n' +
        '    let b = a + y;\n' +
        '    let c = 0;\n' +
        '    \n' +
        '    if (b < z) {\n' +
        '        while(false){\n' +
        '           b++;\n' +
        '          }\n' +
        '    } else if (b < z * 2) {\n' +
        '        c = c + x + 5;\n' +
        '    } else {\n' +
        '        c = c + z + 5;\n' +
        '    }\n' +
        '    \n' +
        '    return c;\n' +
        '}\n';   let expected = [{'data':{'id':0,'text':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':3,'text':'b < z','color':'green','shape':'diamond'}},{'data':{'id':7,'text':'start While','color':'gray','shape':'circle'}},{'data':{'id':5,'text':'false','color':'gray','shape':'diamond'}},{'data':{'id':6,'text':'b++;','color':'gray','shape':'rectangle'}},{'data':{'id':4,'text':'end While','color':'gray','shape':'circle'}},{'data':{'id':12,'text':'','color':'green','shape':'circle'}},{'data':{'id':13,'text':'c','color':'green','shape':'rectangle'}},{'data':{'id':8,'text':'b < z * 2','color':'green','shape':'diamond'}},{'data':{'id':9,'text':'c = c + x + 5;','color':'gray','shape':'rectangle'}},{'data':{'id':11,'text':'','color':'green','shape':'circle'}},{'data':{'id':10,'text':'c = c + z + 5;','color':'green','shape':'rectangle'}},{'data':{'id':'0->3','source':0,'target':3}},{'data':{'id':'3->7','source':3,'target':7}},{'data':{'id':'3->8','source':3,'target':8}},{'data':{'id':'7->5','source':7,'target':5}},{'data':{'id':'5->6','source':5,'target':6}},{'data':{'id':'5->4','source':5,'target':4}},{'data':{'id':'6->7','source':6,'target':7}},{'data':{'id':'4->12','source':4,'target':12}},{'data':{'id':'12->13','source':12,'target':13}},{'data':{'id':'8->9','source':8,'target':9}},{'data':{'id':'8->10','source':8,'target':10}},{'data':{'id':'9->11','source':9,'target':11}},{'data':{'id':'11->12','source':11,'target':12}},{'data':{'id':'10->11','source':10,'target':11}}];
    let actual= a.start(t);  assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};
let t11 = ()=>{

    let t= 'function foo(x, y, z){\n' +
        '    let a = x + 1;\n' +
        '    let b = a + y;\n' +
        '    let c = 0;\n' +
        '    \n' +
        '    if (b < z) {\n' +
        '      while(b<z){\n' +
        '           b++\n' +
        '       }\n' +
        '     }  \n' +
        '    return c;\n' +
        '}\n';
    let expected = [{'data':{'id':0,'text':'let a = x + 1;\nlet b = a + y;\nlet c = 0;','color':'green','shape':'rectangle'}},{'data':{'id':3,'text':'b < z','color':'green','shape':'diamond'}},{'data':{'id':7,'text':'start While','color':'green','shape':'circle'}},{'data':{'id':5,'text':'b < z','color':'green','shape':'diamond'}},{'data':{'id':6,'text':'b++;','color':'green','shape':'rectangle'}},{'data':{'id':4,'text':'end While','color':'green','shape':'circle'}},{'data':{'id':8,'text':'','color':'green','shape':'circle'}},{'data':{'id':9,'text':'c','color':'green','shape':'rectangle'}},{'data':{'id':'0->3','source':0,'target':3}},{'data':{'id':'3->7','source':3,'target':7}},{'data':{'id':'7->5','source':7,'target':5}},{'data':{'id':'5->6','source':5,'target':6}},{'data':{'id':'5->4','source':5,'target':4}},{'data':{'id':'6->7','source':6,'target':7}},{'data':{'id':'4->8','source':4,'target':8}},{'data':{'id':'8->9','source':8,'target':9}}];
    let actual= a.start(t,'0,0,10');  assert.equal(JSON.stringify(expected),JSON.stringify(actual));
};

describe('The javascript parser', () => {
    it('if else clusters', t1);
    it('if  without ablock statement', t2);
    it('nested if', t3);
    it('start with if clusters', t4);
    it('start with while ', t5);
    it('start with if without blockstatements', t6);
    it('start with nested if', t7);
    it('eval function with while and if else clusters', t8);
    it('eval function with while aelse clusters', t9);
    it('eval function with whilelse clusters', t10);
    it('eval function while inside if', t11);


});