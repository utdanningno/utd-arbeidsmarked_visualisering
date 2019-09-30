

      <div style={{ width: "25%", padding: "0 0.75rem" }}>
        <input
          type="range"
          min={1}
          max={30}
          value={limit}
          onChange={el => setLimit(+el.target.value)}
          style={{ margin: 0, width: "100%" }}
        />
      </div>
      <div style={{ width: "75%", padding: "0 0.75rem" }}>
        <button onClick={() => setLayout("bars")}>{"Bars"}</button>
        <button onClick={() => setLayout("tree")}>{"Tree"}</button>
        <button
          onClick={() =>
            setDisaggregate(disaggregate ? null : disaggregationValues)
          }
        >
          {"Toggle disaggregations"}
        </button>
      </div>
      {items.map((item, index) => ( 
        <div key={item} style={itemStyles}>
          <Visualization
            unoId={item}
            limit={limit}
            layout={layout}
            disaggregateBy={disaggregate}
            disaggregateLabels={disaggregationLabels}
            direction={item.substring(0,1) == "y" ? "yrke2utdanning" : "utdanning2yrke"}
          />
        </div>
      ))}