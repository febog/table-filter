[![Publish package](https://github.com/febog/table-filter/actions/workflows/publish.yml/badge.svg)](https://github.com/febog/table-filter/actions/workflows/publish.yml)
[![NPM Version](https://img.shields.io/npm/v/%40febog%2Ftable-filter)](https://www.npmjs.com/package/@febog/table-filter)
[![NPM License](https://img.shields.io/npm/l/%40febog%2Ftable-filter)](https://www.npmjs.com/package/@febog/table-filter)

A minimal way to filter HTML table rows.

## About

A minimal tool to filter rows in an HTML table. This code takes a straightforward approach and directly manipulates the DOM to filter the rows of a `<table>` according to an input.

## Installation

The package consists of a JavaScript module meant to be run directly in the browser as part of a webpage. It exports a single function, `filterTable`.

For example using jsDelivr:

```js
import { filterTable } from "https://cdn.jsdelivr.net/npm/@febog/table-filter@0.5.0/table-filter.js";
```

## Usage

The `filterTable` function is designed to be executed whenever the search input changes, for example:

```html
<input type="search" id="table-search-input" placeholder="Filter the table...">

<script type="module">
  import { filterTable } from "https://cdn.jsdelivr.net/npm/@febog/table-filter@0.5.0/table-filter.js";
  const input = document.getElementById("table-search-input");
  input.addEventListener("input", _ => filterTable("search-table", "table-search-input", "visible-items-count"));
</script>
```

### Parameters

The `filterTable(tableId, searchInputId, counterId)` function requires the ID of 3 elements:

- `tableId`: Id of the `<table>` element to filter.
- `searchInputId`: Id of the search `<input>` element containing the query to filter for.
- `counterId`: Id of an element for displaying the number of visible rows after filtering, for example a `<span>`.

## Working example

You can see it in action at the [demo website](https://febog.github.io/table-filter/demo).

## Background

I created this package as a personal learning exercise on how to publish npm packages following modern practices with an emphasis on how to improve the security posture against supply chain attacks in open source software.

As such, this repository and the process that publishes the package to npm uses features such as [immutable releases](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases), [signed software packages](https://docs.npmjs.com/generating-provenance-statements#about-sigstore) through [Sigstore](https://www.sigstore.dev/) (thanks to npm's [trusted publishing](https://docs.npmjs.com/trusted-publishers)) and verified commits and tags.

As for the package itself, I found myself copying and pasting code to implement a simple table search for my small personal projects. Since my use case is small websites I chose to keep the scope of the project small.
