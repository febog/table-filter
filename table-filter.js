/**
 * Filters, i.e. hides or shows rows for the given `tableId` table
 * rows according to the `searchInputId` search criteria and updates 
 * the `counterId` element to present the number of displayed rows.
 * @param {string} tableId Table HTML element ID to filter.
 * @param {string} searchInputId Input filed ID containing the search string.
 * @param {string} counterId Element to display the number of visible rows.
 */
function filterTable(tableId, searchInputId, counterId) {
  const searchInput = document.getElementById(searchInputId);
  const searchString = searchInput.value.toLowerCase();
  const searchTerms = searchString.replace(/\s+/g, " ").trim().split(" ");
  const table = document.getElementById(tableId);
  const rows = table.getElementsByTagName("tr");
  let visibleRows = 0;
  // Start search on all rows from second row onwards, to skip headers
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const rowCells = row.getElementsByTagName("td");
    const cellsText = [];
    // Extract text from cells
    for (let j = 0; j < rowCells.length; j++) {
      const dataCell = rowCells[j];
      if (dataCell) {
        cellsText.push(dataCell.textContent);
      }
    }
    const rowText = cellsText.join(" ");
    // Search for each filter term
    if (textContainsEveryTerm(rowText, searchTerms)) {
      row.style.display = "";
      visibleRows++;
    } else {
      row.style.display = "none";
    }
  }
  // Update the shown items counter
  const counter = document.getElementById(counterId);
  counter.textContent = visibleRows;
}

function textContainsEveryTerm(text, terms) {
  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    if (text.toLowerCase().indexOf(term) < 0) {
      return false;
    }
  }
  return true;
}
