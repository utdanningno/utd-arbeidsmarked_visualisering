
# Udir data visualization tools

This module contains the dataviz tool to generate working market bar/tree charts for the utdanning.no website.

## Components

There's a component for each context. Under the hood they use similar components to render the visualizations. The individual contexts provide a little bit more control in case we need to add more UI elements or built-in disaggregations.

### `<Context2 />`

```jsx
import { Context2 } from "job-market-visuals"

const MyComponent = () => {
  return (
    <div>
      <Context2
        id="y_sykepleier"
        direction="uno_id2styrk08"
        limit={8}
      />
    </div>
  )
}
```

You can freely disaggregate data by using the `disaggregateBy` and `disaggregateLabels` props.

#### Props

| Name               | Type             | default          |
| ------------------ | ---------------- | ---------------- |
| id                 | String           | `y_sykepleier`   |
| direction          | String           | `uno_id2styrk08` |
| layout             | `bars`/`tree`    | `bars`           |
| limit              | Number           | `8`              |
| disaggregateBy     | Array of Strings |                  |
| disaggregateLabels | Array of Strings |                  |
| colors             | Object           |                  |
| missingDataText    | String           | `Missing data`   |

### `<Context 3/>`

```jsx
import { Context3 } from "job-market-visuals"

const MyComponent = () => {
  return (
    <div>
      <Context3
        id="y_sykepleier"
        direction="uno_id2styrk08"
        limit={8}
      />
    </div>
  )
}
```

#### Props

You can freely disaggregate data by using the `disaggregateBy` and `disaggregateLabels` props.

| Name               | Type             | default          |
| ------------------ | ---------------- | ---------------- |
| id                 | String           | `y_sykepleier`   |
| direction          | String           | `uno_id2styrk08` |
| layout             | `bars`/`tree`    | `bars`           |
| limit              | Number           | `8`              |
| disaggregateBy     | Array of Strings |                  |
| disaggregateLabels | Array of Strings |                  |
| colors             | Object           |                  |
| missingDataText    | String           | `Missing data`   |

## Hooks

### `useData`

The `useData` hook can be used to load relevant data from the API endpoint. To use it, just include an id and a direction.

```jsx
import { useData } from "job-market-visuals"

const MyComponent = () => {

  const data = useData("y_sykepleier", "uno_id2styrk08")

  return (
    <div>{"..."}</div>
  )
}
```

## Layouts

To determine the layout (`bars`/`tree`), you can pass a `layout` prop with a string of either `bars` or `tree` to the visualizaiton component.

```jsx
<Context2
  id="u_bioingeniorfag"
  limit={8}
  layout="tree"
/>
```

## Disaggregations

In order for the chart to show a disaggregated view of the data, you have to pass an array of strings to identify which keys to use for disaggregation.

Here is an example of the gender disaggregated chart:

```jsx
<Context2
  id="u_bioingeniorfag"
  limit={8}
  disaggregatedBy={["antall_kvinner", "antall_menn", "antall_ukjent_kjonn"]}
  disaggregateLabels={["kvinner", "menn", "ukjent kjonn"]}
/>
```

Here is an example of the sector disaggregated chart:

```jsx
<Context2
  id="u_bioingeniorfag"
  limit={8}
  disaggregatedBy={["antall_offentlig", "antall_privat", "antall_ukjent_sektor"]}
  disaggregateLabels={["Offentlig", "Privat", "Ukjent sektor"]}
/>
```

Here is an example of the age disaggregations:

```jsx
<Context2
  id="u_bioingeniorfag"
  limit={8}
  disaggregatedBy={["antall_40", "over_40"]}
  disaggregateLabels={["under 40", "Over 40"]}
/>
```

Here is an example of the experience disaggregations:

```jsx
<Context2
  id="u_bioingeniorfag"
  limit={8}
  disaggregatedBy={["antall_13", "antall_710", "other_experience"]}
  disaggregateLabels={["1-3 years", "7-10 years", "Other"]}
/>
```

> *Note: Don't forget to pass `disaggregateLabels` in order to provide a user-friendly string to display in the tooltips. By default the basic amount of labeled as "personer".

<a name="colors"></a>
## Colors

In order to determine the look of the visualization, you can pass a set of colors to the visualization component. Here are all the options:

```jsx
<Context2
  id="u_bioingeniorfag"
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
