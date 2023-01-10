import { useEffect, useState } from "react";
export function useTooltip(_ref) {
  var container = _ref.container,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 140 : _ref$width;
  var _useState = useState(false),
    visible = _useState[0],
    setVisible = _useState[1];
  var _useState2 = useState([0, 0]),
    position = _useState2[0],
    setPosition = _useState2[1];
  var _useState3 = useState([0, 0]),
    caretPosition = _useState3[0],
    setCaretPosition = _useState3[1];
  var _useState4 = useState(),
    item = _useState4[0],
    setItem = _useState4[1];
  var show = function show(evt, subItem) {
    var containerBox = container.current.getBoundingClientRect();
    var targetBox = evt.target.getBoundingClientRect();
    var extent = [containerBox.left + width / 2, containerBox.right - width / 2];
    var extent2 = [containerBox.left + 8, containerBox.right - 8];
    setVisible(true);
    setItem(subItem);
    setPosition([clamp(targetBox.left + targetBox.width / 2, extent), targetBox.top]);
    setCaretPosition([clamp(targetBox.left + targetBox.width / 2, extent2), targetBox.top]);
  };
  var hide = function hide() {
    setVisible(false);
  };
  return {
    visible: visible,
    position: position,
    caretPosition: caretPosition,
    item: item,
    width: width,
    show: show,
    hide: hide
  };
}
export var useResize = function useResize(viz, width, setWidth) {
  useEffect(function () {
    var handleResize = function handleResize() {
      var bbox = viz.current.getBoundingClientRect();
      if (bbox.width === width) return;
      setWidth(bbox.width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
export var defaultColors = {
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
export var getColor = function getColor(id, colors) {
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
export function clamp(num, extent) {
  return Math.min(Math.max(num, extent[0]), extent[1]);
}
export function prepareMore(docs, limit) {
  if (!docs) return [];
  var more = docs.slice(limit).reduce(function (acc, cur) {
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