# Data Visualization Library

A lightweight JavaScript library for creating simple data visualizations.

## Installation

You can install the library via npm:

```bash
npm install data-visualization-library
```

## Usage

```javascript
// Import the library
const DataVisualizationLibrary = require('data-visualization-library');

// Example data
const data = [
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 15 }
];

// Example options
const options = {
    width: 400,
    height: 300,
    barColor: 'steelblue',
    margin: { top: 20, right: 30, bottom: 30, left: 40 }
};

// Create a bar chart
const svg = DataVisualizationLibrary.createBarChart(data, options);

// Append the SVG element to the DOM
document.body.appendChild(svg);
```

## API

### `createBarChart(data, options)`

Creates a bar chart using the provided data and options.

- `data`: An array of objects, where each object represents a data point. Each object should have a `label` and a `value`.
- `options`: An optional object containing chart customization options. Available options are:
  - `width`: Width of the chart (default: `400`).
  - `height`: Height of the chart (default: `300`).
  - `barColor`: Color of the bars (default: `'steelblue'`).
  - `margin`: Object specifying margins around the chart (default: `{ top: 20, right: 30, bottom: 30, left: 40 }`).

Returns an SVG element representing the created chart.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
