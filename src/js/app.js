import $ from 'jquery';
var cytoscape = require('cytoscape');
var flowgraph = require('./flowgraph');



$(document).ready(function () { $('#codeSubmissionButton').click(() => {

    let codeToParse = $('#codePlaceholder').val();
    let params = $('#paramPlaceholder').val();
    let elements = flowgraph.start(codeToParse,params);


    cytoscape({
        container: document.getElementById('cy'), // container to render in
        elements: elements,
        style: [
            {
                selector: 'node', style: {'text-valign':'center', 'color':'black', 'label': 'data(text)', 'shape':'data(shape)', 'background-color':'data(color)', 'border-width':3, 'height':50, 'width':100}},
            {selector: 'edge', style: {'width': 1, 'line-color': 'black', 'curve-style': 'bezier', 'target-arrow-shape': 'triangle'}}],
        layout: {name:'breadthfirst', directed:true, paddding:10}});

});
});
