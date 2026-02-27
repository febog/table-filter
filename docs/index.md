[![Publish package](https://github.com/febog/table-filter/actions/workflows/publish.yml/badge.svg)](https://github.com/febog/table-filter/actions/workflows/publish.yml)
[![NPM Version](https://img.shields.io/npm/v/%40febog%2Ftable-filter)](https://www.npmjs.com/package/@febog/table-filter)
[![NPM License](https://img.shields.io/npm/l/%40febog%2Ftable-filter)](https://www.npmjs.com/package/@febog/table-filter)

A minimal way to filter HTML table rows.

## About

A minimal tool to filter rows in an HTML table. This code takes a straightforward approach and directly manipulates the DOM to filter the rows of a `<table>` according to an input.

## Installation

This package offers a vanilla JavaScript file that is meant to be run directly in the browser as part of a webpage.

For example using jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/@febog/table-filter@0.1.0/table-filter.js" defer></script>
```

## Usage

The code offers a function that is meant to be executed whenever the search input changes, for example:

```html
<input type="search" id="table-search-input" placeholder="Filter the table..."
  oninput="filterTable('search-table', 'table-search-input', 'visible-items-count')">
```

### Parameters

The `filterTable(tableId, searchInputId, counterId)` function requires the ID of 3 elements:

- `tableId`: Id of the `<table>` element to filter.
- `searchInputId`: Id of the search `<input>` element containing the query to filter for.
- `counterId`: Id of an element for displaying the number of visible rows after filtering, for example a `<span>`.

## Working example

You can see it in action at the [demo website](https://febog.github.io/table-filter/demo).
