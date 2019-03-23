console.log("hello! this is the chrome extension talking")

/**
 * Gets an array of the matching text nodes contained by the specified element.
 * @param  {!Element} elem
 *     The DOM element which will be traversed.
 * @param  {function(!Node,!Element):boolean} opt_fnFilter
 *     Optional function that if a true-ish value is returned will cause the
 *     text node in question to be added to the array to be returned from
 *     getTextNodesIn().  The first argument passed will be the text node in
 *     question while the second will be the parent of the text node.
 * @return {!Array.<!Node>}
 *     Array of the matching text nodes contained by the specified element.
 */
function getTextNodesIn(elem, opt_fnFilter) {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
      var node = nodes[i], nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          textNodes.push(node);
        }
      }
      else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;

}




textNodes = getTextNodesIn(document.getElementsByTagName("BODY")[0], null);

console.log(textNodes)

for (let i in textNodes){
	textNodes[i].nodeValue = "ABSOLUTE ORANGUTAN"

	console.log(textNodes[i].nodeValue)
}