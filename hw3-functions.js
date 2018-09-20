/**
 * Created by Hans Dulimarta
 * TODO: Add your name below this line
 */

/**
 * Given the ID of a node {rootId}, find all its descendant elements having
 * its attribute id set and then change their class to {klazName}.
 * The function returns the number of such elements found.
 *
 * @param rootId    the ID of the "root" element to begin searching
 * @param klazName  the class to assign to each descendant whose id attrib 
 *                  is set.
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
    /* complete this function */
    var numberOfElements = 0;
    var rootElement = document.getElementById(rootId);
    var childElements = rootElement.children;

    for (var i = 0; i < childElements.length; i++) {
              if(childElements[i].id.length >= 1){
                  childElements[i].classList.add(klazName);
                  numberOfElements++;
              }
            }

    /* complete this function */
    return numberOfElements;
  }
  
  /**
   * The following function finds all elements with attribute 'data-gv-row' (or
   * 'data-gv-column') and create a table of the desired dimension as a child of
   * the element.
   *
   * @returns NONE
   */
  function createTable() {
    /* complete this function */
    
    var targetDiv = document.getElementsByClassName("table-home")[0];
    var numRows = targetDiv.getAttribute("data-gv-row");
    var numCols = targetDiv.getAttribute("data-gv-column");
    var newTable = document.createElement("table");

    var lipsum = new LoremIpsum();

    var words = lipsum.generate((numCols + 1));
    var wordArray = [];
    var wordCount = 0;
    words.split(' ').forEach( (word) => {
      wordArray[wordCount] = word;
      wordCount++;
    });

    console.log(numCols)
    for (var j = 0; j <= numRows ; j++) {
      var row = document.createElement("tr");

      for (var i = 0; i <= numCols; i++) {
          if(j == 0){
            var header = document.createElement("th");
            header.innerHTML = "Header " + (i + 1).toString();
            row.appendChild(header);
          }
          else{    
            var cell = document.createElement("td");
            cell.innerHTML = wordArray[(i * j)];
            row.appendChild(cell);
          }
      }
      newTable.appendChild(row);
  }



    targetDiv.appendChild(newTable);
    console.log(targetDiv.className);

  }