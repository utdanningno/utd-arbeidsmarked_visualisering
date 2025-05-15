"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = require("./index");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Demo, null));
}
const data = [
// "u_bioingeniorfag",
// "y_elektriker",
// "u_journalistikk",
// "y_allmennlege",

"u_automatiseringsfag"
// "u_reservedelsfag",
// "u_journalistikk",

// "y_journalist",
// "y_agronom",
// "y_arkitekt",
// "y_urolog",
];
const containerStyles = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: 1120,
  margin: "0 auto",
  padding: "2.5rem 0.75rem",
  boxSizing: "border-box"
};
const itemStyles = {
  width: "25%",
  padding: "0.75rem",
  boxSizing: "border-box"
};
const selectStyles = {
  appearance: "none",
  height: "2.5rem",
  fontSize: "inherit",
  fontFamily: "inherit"
};

// const disaggregationValues = [
//   "antall_kvinner",
//   "antall_menn",
//   "antall_ukjent_kjonn"
// ];
// const disaggregationLabels = ["kvinner", "menn", "ukjent kjonn"];

// const disaggregationValues = ["antall_offentlig", "antall_privat", "antall_ukjent_sektor"]
// const disaggregationLabels = ["Offentlig", "Privat", "Ukjent sektor"]

// const disaggregationValues = ["antall_13", "antall_710", "other_experience"]
// const disaggregationLabels = ["1-3 years", "7-10 years", "Other"]

const disaggregationValues = ["antall_40", "over_40"];
const disaggregationLabels = ["Under 40", "Over 40"];
const disaggregations = [{
  name: "By age",
  values: ["antall_40", "over_40"],
  labels: ["Under 40", "Over 40"]
}, {
  name: "By experience",
  values: ["antall_13", "antall_710", "other_experience"],
  labels: ["1-3 years", "7-10 years", "Other"]
}, {
  name: "By sector",
  values: ["antall_offentlig", "antall_privat", "antall_ukjent_sektor"],
  labels: ["Offentlig", "Privat", "Ukjent sektor"]
}, {
  name: "By gender",
  values: ["antall_kvinner", "antall_menn", "antall_ukjent_kjonn"],
  labels: ["kvinner", "menn", "ukjent kjonn"]
}];
const Header = _ref => {
  let {
    title,
    direction
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: "1.25rem"
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    style: {
      marginTop: "0",
      marginBottom: "0.5rem"
    }
  }, title), /*#__PURE__*/_react.default.createElement("strong", null, direction));
};
const Context2Demo = _ref2 => {
  let {
    layout,
    disaggregation
  } = _ref2;
  const [korts, setKorts] = (0, _react.useState)(null);
  const [nusKortnavn, setNusKortnavn] = (0, _react.useState)("all");
  (0, _react.useEffect)(() => {
    (0, _index.getData)("y_sykepleier", "uno_id2nus_kortnavn").then(d => {
      if (d && d.mapping && d.mapping.docs) setKorts(d.mapping.docs);
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: "1.25rem"
    }
  }, korts && /*#__PURE__*/_react.default.createElement("select", {
    style: selectStyles,
    value: nusKortnavn,
    onChange: evt => setNusKortnavn(evt.target.value)
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "all"
  }, "All"), korts.map(d => {
    var _d$nus_kortnavn$repla, _d$nus_kortnavn;
    const name = (_d$nus_kortnavn$repla = (_d$nus_kortnavn = d.nus_kortnavn) === null || _d$nus_kortnavn === void 0 ? void 0 : _d$nus_kortnavn.replace(/"/g, "")) !== null && _d$nus_kortnavn$repla !== void 0 ? _d$nus_kortnavn$repla : "";
    return /*#__PURE__*/_react.default.createElement("option", {
      key: d.id,
      value: name
    }, name);
  }))), /*#__PURE__*/_react.default.createElement(_index.Context2, {
    id: nusKortnavn === "all" ? "y_sykepleier" : nusKortnavn,
    direction: nusKortnavn === "all" ? "uno_id2styrk08" : "nus_kortnavn2styrk08",
    layout: layout,
    limit: 8,
    disaggregateBy: disaggregation ? disaggregation.values : null,
    disaggregateLabels: disaggregation ? disaggregation.labels : null
  }));
};
const Demo = () => {
  const [layout, setLayout] = (0, _react.useState)("bars");
  const [disaggregation, setDisaggregation] = (0, _react.useState)(null);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: containerStyles
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 999,
      background: "#FFF",
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Controls"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setLayout("bars")
  }, "Bars"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setLayout("tree")
  }, "Tree"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setDisaggregation(null)
  }, "No disaggregation"), disaggregations.map(d => /*#__PURE__*/_react.default.createElement("button", {
    key: d.name,
    onClick: () => setDisaggregation(d)
  }, d.name))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Context 2")), /*#__PURE__*/_react.default.createElement(Context2Demo, {
    layout: layout,
    disaggregation: disaggregation
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement(Header, {
    title: "Sykepleie",
    direction: "nus_kortnavn2styrk08"
  }), /*#__PURE__*/_react.default.createElement(_index.Context2, {
    id: "Sykepleie",
    direction: "nus_kortnavn2styrk08",
    layout: layout,
    limit: 8,
    disaggregateBy: disaggregation ? disaggregation.values : null,
    disaggregateLabels: disaggregation ? disaggregation.labels : null
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement(Header, {
    title: "y_sykepleier",
    direction: "y_* uno_id2styrk08"
  }), /*#__PURE__*/_react.default.createElement(_index.Context2, {
    id: "y_sykepleier",
    direction: "uno_id2styrk08",
    layout: layout,
    limit: 8,
    disaggregateBy: disaggregation ? disaggregation.values : null,
    disaggregateLabels: disaggregation ? disaggregation.labels : null
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement(Header, {
    title: "u_sykepleie",
    direction: "u_* uno_id2styrk08"
  }), /*#__PURE__*/_react.default.createElement(_index.Context2, {
    id: "u_sykepleie",
    direction: "uno_id2styrk08",
    layout: layout,
    limit: 8,
    disaggregateBy: disaggregation ? disaggregation.values : null,
    disaggregateLabels: disaggregation ? disaggregation.labels : null
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      border: 0,
      borderBottom: "0.25rem solid currentcolor"
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Context 3")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25%"
    }
  }, /*#__PURE__*/_react.default.createElement(Header, {
    title: "y_dataingenior",
    direction: "y_* uno_id2styrk08"
  }), /*#__PURE__*/_react.default.createElement(_index.Context3, {
    id: "y_dataingenior",
    direction: "uno_id2styrk08",
    layout: layout,
    limit: 8,
    disaggregateBy: disaggregation ? disaggregation.values : null,
    disaggregateLabels: disaggregation ? disaggregation.labels : null,
    moreLabel: "Andre yrker"
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25%"
    }
  }, /*#__PURE__*/_react.default.createElement(Header, {
    title: "y_dataingenior",
    direction: "y_* uno_id2nus"
  }), /*#__PURE__*/_react.default.createElement(_index.Context3, {
    id: "y_dataingenior",
    direction: "uno_id2nus",
    layout: layout,
    limit: 8,
    disaggregateBy: disaggregation ? disaggregation.values : null,
    disaggregateLabels: disaggregation ? disaggregation.labels : null,
    moreLabel: "Andre yrker"
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25%"
    }
  }, /*#__PURE__*/_react.default.createElement(Header, {
    title: "y_dataingenior",
    direction: "y_* uno_id2nus_kortnavn"
  }), /*#__PURE__*/_react.default.createElement(_index.Context3, {
    id: "y_dataingenior",
    direction: "uno_id2nus_kortnavn",
    layout: layout,
    limit: 8,
    disaggregateBy: disaggregation ? disaggregation.values : null,
    disaggregateLabels: disaggregation ? disaggregation.labels : null,
    moreLabel: "Andre yrker"
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "25%"
    }
  }, /*#__PURE__*/_react.default.createElement(Header, {
    title: "u_journalistikk",
    direction: "u_* uno_id2styrk08"
  }), /*#__PURE__*/_react.default.createElement(_index.Context3, {
    id: "u_journalistikk",
    direction: "uno_id2styrk08",
    layout: layout,
    limit: 8,
    disaggregateBy: disaggregation ? disaggregation.values : null,
    disaggregateLabels: disaggregation ? disaggregation.labels : null,
    moreLabel: "Andre yrker"
  })));
};
var _default = exports.default = App;