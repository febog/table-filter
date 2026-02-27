## Demo

Demo for [table-filter](https://www.npmjs.com/package/@febog/table-filter). Try filtering the table below.

<search>
  <form>
    <div>
      <label for="table-search-input">Search:</label>
    </div>
    <div>
      <input type="search" id="table-search-input" placeholder="Filter the table..." oninput="filterTable('search-table', 'table-search-input', 'visible-items-count')">
    </div>
  </form>
</search>

<table id="search-table">
  <caption>Showing <span id="visible-items-count">5</span> items of 5.</caption>
  <thead>
    <tr>
      <th>First</th>
      <th>Second</th>
      <th>Third</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem Ipsum</td>
      <td>Yes</td>
      <td>2026-01-05</td>
    </tr>
    <tr>
      <td>Consectetur adipiscing elit</td>
      <td>No</td>
      <td>2026-08-07</td>
    </tr>
    <tr>
      <td>Sed do eiusmod</td>
      <td>No</td>
      <td>2026-07-05</td>
    </tr>
    <tr>
      <td>Tempor incididunt ut labore</td>
      <td>Yes</td>
      <td>2026-04-08</td>
    </tr>
    <tr>
      <td>Tempor incididunt ut labore</td>
      <td>Yes</td>
      <td>2026-04-08</td>
    </tr>
  </tbody>
</table>

<script src="https://cdn.jsdelivr.net/npm/@febog/table-filter@0.1.0/table-filter.js" defer></script>
