## Demo

Demo for [table-filter](https://febog.github.io/table-filter/), a tiny [npm package](https://www.npmjs.com/package/@febog/table-filter) for filtering an HTML table with source code [available on GitHub](https://github.com/febog/table-filter). Try filtering the table below.

<search>
  <form style="padding: 0 0 1rem 0">
    <div>
      <label for="table-search-input">Search:</label>
    </div>
    <div>
      <input type="search" id="table-search-input" placeholder="Filter the table...">
    </div>
  </form>
</search>

<table id="search-table" style="width: 100%;">
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

<script type="module">
  import { filterTable } from "https://cdn.jsdelivr.net/npm/@febog/table-filter@0.5.0/table-filter.js";
  const input = document.getElementById("table-search-input");
  input.addEventListener("input", _ => filterTable("search-table", "table-search-input", "visible-items-count"));
</script>

## Code

```html
<search>
  <form>
    <div>
      <label for="table-search-input">Search:</label>
    </div>
    <div>
      <input type="search" id="table-search-input" placeholder="Filter the table...">
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

<script type="module">
  import { filterTable } from "https://cdn.jsdelivr.net/npm/@febog/table-filter@0.5.0/table-filter.js";
  const input = document.getElementById("table-search-input");
  input.addEventListener("input", _ => filterTable("search-table", "table-search-input", "visible-items-count"));
</script>
```

Go back to the [homepage](https://febog.github.io/table-filter/).
