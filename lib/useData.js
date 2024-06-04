"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;
exports.useData = useData;
var _react = require("react");
async function getData(id, direction) {
  let api_url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://api.utdanning.no';
  const mainEndpoint = api_url + '/sammenligning/main';
  const endpoint = api_url + '/sammenligning/arbeidsmarked';
  const idNames = {
    "uno_id2nus": "uno_id",
    "uno_id2nus_kortnavn": "uno_id",
    "uno_id2styrk08": "uno_id",
    "nus_kortnavn2styrk08": "nus_kortnavn",
    "nus2styrk08": "nus",
    "styrk082nus": "styrk08"
  };

  /**
   * 1. Load data from mapping endpoint
   */
  const url = "".concat(endpoint, "?").concat(idNames[direction], "=").concat(id, "&retning=").concat(direction, "&vis_alt=true");
  const mapping = direction ? await (await fetch(url)).json() : null;

  /**
   * 2. Load data from main endpoint
   */
  const main = id.slice(0, 2) === "y_" || id.slice(0, 2) === "u_" ? await (await fetch("".concat(mainEndpoint, "?uno_id=").concat(id, "&vis_alt=true"))).json() : null;

  /**
   * 3. Add missing fields
   */
  const docs = mapping.response && mapping.response.docs ? mapping.response.docs.map(d => ({
    ...d,
    over_40: d.antall_personer - d.antall_40,
    other_experience: d.antall_personer - d.antall_13 - d.antall_710
  })) : null;
  const mappingData = mapping.response ? {
    ...mapping.response,
    docs
  } : null;
  return {
    main: main ? main[id] : null,
    mapping: mappingData
  };
}
function useData() {
  let unoId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "y_sykepleier";
  let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utdanning2yrke";
  let api_url = arguments.length > 2 ? arguments[2] : undefined;
  const [item, setItem] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    getData(unoId, direction).then(data => {
      setItem(data);
    });
  }, [unoId, direction]);
  return item;
}