/**
 * Filters, i.e. hides or shows rows for the given `tableId` table
 * according to the given filter terms and updates the `counterId`
 * element to display the number of visible rows.
 * Note that the code assumes that the table has headers and thus excludes the first row from the filtering.
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
    // Extract text from cells
    const rowText = [...rowCells].map(cell => cell.textContent).join(" ").toLowerCase();
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
