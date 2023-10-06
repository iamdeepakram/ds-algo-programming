function getChildNodes(element) {
    var allChildNodes = document.body.childNodes;
    let nodesArray = [];
    for(let i of allChildNodes){
        if( i.nodeType != Node.TEXT_NODE){
            nodesArray.push(i);
        }
    }

    return nodesArray;
}

console.log(getChildNodes('*'));

module.exports = {
  getChildNodes
};
