import assert from 'assert';
import {start} from '../src/js/eval';


let t1 = ()=>{
    let output = start('function fun() { }','');
    assert.equal(JSON.stringify(output),'[{"line":"function fun() {","color":"white"},{"line":"}","color":"white"}]');

};

let t2 = ()=>{
    let output = start('let x = 1; let z = 2; function fun() {return x + z; }','');
    assert.equal(JSON.stringify(output),'[{"line":"function fun() {","color":"white"},{"line":"    return x + z;","color":"white"},{"line":"}","color":"white"}]');

};

let t3 = ()=>{
    let output = start('function fun(x) { let a = x; let b = a + 1; return a+b;}','1');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x) {","color":"white"},{"line":"    return x + (x + 1);","color":"white"},{"line":"}","color":"white"}]');

};


let t4 = ()=>{
    let output = start('let x = 1; function fun(a,b,c) { return a+b+c+x;}','1,2,3');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(a, b, c) {","color":"white"},{"line":"    return a + b + c + x;","color":"white"},{"line":"}","color":"white"}]');

};


let t5 = ()=>{
    let output = start('function fun(x,y,z) {let a = x+1; let b = x+ 2; if(a + b < z)return x; else return z; }','1,1,20');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x, y, z) {","color":"white"},{"line":"    if (x + 1 + (x + 2) < z)","color":"green"},{"line":"        return x;","color":"white"},{"line":"    else","color":"white"},{"line":"        return z;","color":"white"},{"line":"}","color":"white"}]');

};

let t6 = ()=>{
    let output = start('function fun(x,y,z) {let a = x+1; let b = x+ 2; if(a + b < z)return x; else return z; }','1,1,1');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x, y, z) {","color":"white"},{"line":"    if (x + 1 + (x + 2) < z)","color":"red"},{"line":"        return x;","color":"white"},{"line":"    else","color":"white"},{"line":"        return z;","color":"white"},{"line":"}","color":"white"}]');

};



let t7 = ()=>{
    let output = start('function fun(x ) { let a = 0; while( a < x) x = x-5 ;   return  x;}','1');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x) {","color":"white"},{"line":"    while (0 < x)","color":"red"},{"line":"        x = x - 5;","color":"white"},{"line":"    return x;","color":"white"},{"line":"}","color":"white"}]');

};

let t8 = ()=>{
    let output = start('function fun(x ) { let a = 0; while( a < x) x = x-5 ;   if(x < -4) return -4; else{ return +4;}}','10');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x) {","color":"white"},{"line":"    while (0 < x)","color":"red"},{"line":"        x = x - 5;","color":"white"},{"line":"    if (x < -4)","color":"red"},{"line":"        return -4;","color":"white"},{"line":"    else {","color":"white"},{"line":"        return +4;","color":"white"},{"line":"    }","color":"white"},{"line":"}","color":"white"}]');

};

let t9 = ()=>{
    let output = start('function fun(x,y,z) {let a = x+1; let b = x+ 2; if(a + b < z){return x;} else return z; }','1,1,9');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x, y, z) {","color":"white"},{"line":"    if (x + 1 + (x + 2) < z) {","color":"green"},{"line":"        return x;","color":"white"},{"line":"    } else","color":"red"},{"line":"        return z;","color":"white"},{"line":"}","color":"white"}]');

};
let t10 = ()=>{
    let output = start('function fun(x,y,z) {let a = x+1; let b = x+ 2; if(a + b < z)return x;  return 0;}','1,1,20');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x, y, z) {","color":"white"},{"line":"    if (x + 1 + (x + 2) < z)","color":"green"},{"line":"        return x;","color":"white"},{"line":"    return 0;","color":"red"},{"line":"}","color":"white"}]');

};

let t11 = ()=>{
    let output = start('function fun(x,y,z) {let a = x+1; let b = x+ 2; if(a + b < z){a = a+1; x = a;}  return 0;}','1,1,20');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x, y, z) {","color":"white"},{"line":"    if (x + 1 + (x + 2) < z) {","color":"green"},{"line":"        x = x + 1 + 1;","color":"white"},{"line":"    }","color":"red"},{"line":"    return 0;","color":"white"},{"line":"}","color":"white"}]');

};
let t12 = ()=>{
    let output = start('function fun(x ) { let a = 0; while( a < x){ x = x-5 ;}   return  x;}','1');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x) {","color":"white"},{"line":"    while (0 < x) {","color":"green"},{"line":"        x = x - 5;","color":"white"},{"line":"    }","color":"red"},{"line":"    return x;","color":"white"},{"line":"}","color":"white"}]');

};

let t13 = ()=>{
    let output = start('function fun(x ) { let a = [1,2,3]; if(x < a[0]) return 5; return a[1];}','1');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x) {","color":"white"},{"line":"    if (x < [1, 2, 3][0])","color":"red"},{"line":"        return 5;","color":"white"},{"line":"    return [1, 2, 3][1];","color":"red"},{"line":"}","color":"white"}]');

};
let t14 = ()=>{
    let output = start('function fun(x ) { return x[0];}','[1,2,3]');
    assert.equal(JSON.stringify(output),'[{"line":"function fun(x) {","color":"white"},{"line":"    return x[0];","color":"red"},{"line":"}","color":"white"}]');

};

describe('The javascript parser', () => {
    it('eval an empty function correctly', t1);
    it('eval function with globals', t2);
    it('eval function with locals', t3);
    it('eval function with locals and paramters', t4);
    it('eval function with if else ( green condition )', t5);
    it('eval function with if else ( red condition )', t6);
    it('eval function with while', t7);
    it('eval function with while and if else clusters', t8);
    it('eval function with while and if else clusters', t9);
    it('eval function with while and if else clusters', t10);
    it('eval function with while and if else clusters', t11);
    it('eval function with while and if else clusters', t12);
    it('eval function with while and if else clusters', t13);
    it('eval function with while and if else clusters', t14);


});