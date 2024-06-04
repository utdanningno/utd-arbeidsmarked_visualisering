"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
exports.getColor = exports.defaultColors = void 0;
exports.prepareMore = prepareMore;
exports.useResize = void 0;
exports.useTooltip = useTooltip;
var _react = require("react");
function useTooltip(_ref) {
  let {
    container,
    width = 140
  } = _ref;
  const [visible, setVisible] = (0, _react.useState)(false);
  const [position, setPosition] = (0, _react.useState)([0, 0]);
  const [caretPosition, setCaretPosition] = (0, _react.useState)([0, 0]);
  const [item, setItem] = (0, _react.useState)();
  const show = (evt, subItem) => {
    const containerBox = container.current.getBoundingClientRect();
    const targetBox = evt.target.getBoundingClientRect();
    const extent = [containerBox.left + width / 2, containerBox.right - width / 2];
    const extent2 = [containerBox.left + 8, containerBox.right - 8];
    setVisible(true);
    setItem(subItem);
    setPosition([clamp(targetBox.left + targetBox.width / 2, extent), targetBox.top]);
    setCaretPosition([clamp(targetBox.left + targetBox.width / 2, extent2), targetBox.top]);
  };
  const hide = () => {
    setVisible(false);
  };
  return {
    visible,
    position,
    caretPosition,
    item,
    width,
    show,
    hide
  };
}
const useResize = (viz, width, setWidth) => {
  (0, _react.useEffect)(() => {
    const handleResize = () => {
      const bbox = viz.current.getBoundingClientRect();
      if (bbox.width === width) return;
      setWidth(bbox.width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
exports.useResize = useResize;
const defaultColors = exports.defaultColors = {
  text: "#333",
  textTree: "#333",
  primary: "#ff9800",
  disaggregations: ["#f57c00", "#ffcc80", "#ddd"],
  notWorking: "#ff5722",
  unemployed: "#f44336",
  inEducation: "#ff9800",
  selfEmployed: "#ff9800",
  other: "#9e9e9e"
};
const getColor = (id, colors) => {
  if (!id) {
    return colors.other;
  } else if (id.indexOf("9999") !== -1) {
    return colors.selfEmployed;
  } else if (id.indexOf("9998") !== -1) {
    return colors.unemployed;
  } else if (id.indexOf("9997") !== -1) {
    return colors.inEducation;
  } else if (id.indexOf("9996") !== -1) {
    return colors.notWorking;
  } else {
    return colors.primary;
  }
};
exports.getColor = getColor;
function clamp(num, extent) {
  return Math.min(Math.max(num, extent[0]), extent[1]);
}
function prepareMore(docs, limit) {
  if (!docs) return [];
  const more = docs.slice(limit).reduce((acc, cur) => {
    return {
      id: "more",
      tittel: "Mer",
      count: docs.slice(limit).length || 0,
      antall_personer: (acc.antall_personer || 0) + cur.antall_personer,
      antall_kvinner: (acc.antall_kvinner || 0) + cur.antall_kvinner,
      antall_menn: (acc.antall_menn || 0) + cur.antall_menn,
      antall_ukjent_kjonn: (acc.antall_ukjent_kjonn || 0) + cur.antall_ukjent_kjonn,
      antall_offentlig: (acc.antall_offentlig || 0) + cur.antall_offentlig,
      antall_privat: (acc.antall_privat || 0) + cur.antall_privat,
      antall_ukjent_sektor: (acc.antall_ukjent_sektor || 0) + cur.antall_ukjent_sektor,
      antall_40: (acc.antall_40 || 0) + cur.antall_40,
      antall_13: (acc.antall_13 || 0) + cur.antall_13,
      antall_710: (acc.antall_710 || 0) + cur.antall_710,
      over_40: (acc.over_40 || 0) + cur.over_40,
      other_experience: (acc.other_experience || 0) + cur.other_experience
    };
  }, {});
  return docs.slice(0, limit).concat([more]);
}