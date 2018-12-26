function transform(nodes)
{   let vertices = [];
    let edges = [];
    getVerticesNEdges(nodes,vertices,edges);
    return vertices.concat(edges);
}
function getVerticesNEdges(tree,vertices,edges){
    if(tree === null)
        return ;
    else if(!contains(vertices,tree.id)){
        vertices.push({data : {id : tree.id ,'text':tree.description,'color':tree.color,'shape':tree.shape}});
        tree.right !== null? edges.push({data:{'id':tree.id+'->'+tree.right.id , source:tree.id ,  target:tree.right.id}}):1;
        tree.left !== null? edges.push({data:{'id':tree.id+'->'+tree.left.id , source:tree.id ,  target:tree.left.id}}):1;
        getVerticesNEdges(tree.right,vertices,edges);
        getVerticesNEdges(tree.left,vertices,edges);

    }
}
function contains(arr,id)
{
    let res = arr.find((element)=> element.data.id === id) !== undefined;
    return res;
}
module.exports={transform};



