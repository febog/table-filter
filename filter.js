/**
 * Filters, i.e. hides or shows rows for the given `tableId` table
 * according to the given filter terms and updates the `counterId`
 * element to display the number of visible rows.
 * @param {string} tableId Id of the `<table>` element whose rows will be filtered.
 * @param {string} filterString Terms to filter for.
 * @param {string} counterId Id of an element to display the number of visible rows after filtering (optional).
 */
function filterTable(tableId, filterString, counterId = null) {
  const searchString = filterString.toLowerCase();
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
    const rowText = cellsText.join(" ").toLowerCase();
    if (textContainsEverySearchedTerm(rowText, searchTerms)) {
      row.style.display = "";
      visibleRows++;
    } else {
      row.style.display = "none";
    }
  }
  // Update the shown items counter
  const counter = document.getElementById(counterId);
  if (counter !== null) {
    counter.textContent = visibleRows;
  }
}

const textContainsEverySearchedTerm = (text, terms) => {
  return terms.every(term => text.includes(term));
};

export { filterTable };
