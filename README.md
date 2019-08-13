
# Udir data visualization tools

This module contains the dataviz tool to generate working market bar/tree charts for the utdanning.no website.

## `<Visualization />`

The visualization component is a configurable container that render either a bar chart or a treemap. It can show disaggregated values in bars (max. 3 categories), and singular datasets for the treemap.

### Basic usage

To use the visualization, import the `Visualization` component from the package:

```js
impor { Visualization } from "job-market-visuals"
```

To render a basic bar chart with standard tooltips, you can pass a `unoId` to the visualization component. Under the hood this will load the relevant data for this `uno_id` and render a basic bar chart. If you want to control the number of items displayed, you can pass a `limit` prop.

```jsx
<Visualization unoId="u_bioingeniorfag" limit={5} />
```

### Layouts

To determine the layout (`bars`/`tree`), you can pass a `layout` prop with a string of either `bars` or `tree` to the visualizaiton component.

```jsx
<Visualization
  unoId="u_bioingeniorfag"
  limit={8}
  layout="tree"
/>
```

### Disaggregations

In order for the chart to show a disaggregated view of the data, you have to pass an array of strings to identify which keys to use for disaggregation. Here is an example of the gender disaggregated chart:

```jsx
<Visualization
  unoId="u_bioingeniorfag"
  limit={8}
  disaggregatedBy={["antall_kvinner", "antall_menn"]}
  disaggregateLabels={["kvinner", "menn"]}
/>
```

> *Note: Don't forget to pass `disaggregateLabels` in order to provide a user-friendly string to display in the tooltips. By default the basic amount of labeled as "personer".

<a name="colors"></a>
### Colors

In order to determine the look of the visualization, you can pass a set of colors to the visualization component. Here are all the options:

```jsx
<Visualization
  unoId="u_bioingeniorfag"
  limit={8}
  colors={{
    text: "#333",
    textTree: "#333",
    primary: "#ff9800",
    disaggregations: ["#ffcc80", "#f57c00", "#ddd"],
    notWorking: "#ff5722",
    unemployed: "#f44336",
    inEducation: "#ff9800",
    selfEmployed: "#ff9800",
    other: "#9e9e9e",
  }}
/>
```

### Props

| Name                  | type                                 | default          |
| --------------------- | ------------------------------------ | ---------------- |
| `unoId`               | `String`                             | u_bioingeniorfag |
| `limit`               | `Number`                             | 8                |
| `layout`              | `bars` \| `tree`                     | bars             |
| `colors`              | `Object`                             | *See colors      |
| `disaggregatedBy`     | `Array`                              | null             |
| `disaggregatedLabels` | `Array`                              | null             |
| `direction`           | `utdanning2yrke` \| `yrke2utdanning` | utdanning2yrke   |
