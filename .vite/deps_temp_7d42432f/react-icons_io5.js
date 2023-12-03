import {
  __toESM,
  require_react
} from "./chunk-BUWGJMQ6.js";

// frontend/node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require_react());

// frontend/node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// frontend/node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// frontend/node_modules/react-icons/io5/index.esm.js
function IoAccessibilityOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "56", "r": "40", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z" } }] })(props);
}
function IoAccessibilitySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 112c-66.82 17.92-119.55 32-192 32s-125.18-14.08-192-32l-16 51c48 20.53 96.71 35.16 147.2 53.2L144 496l56.4 16L246 336h20l45.6 176 56.4-16-51.2-279.8C367.26 199.93 416 183.53 464 164zm-192 0a56 56 0 1156-56 56.06 56.06 0 01-56 56z" } }] })(props);
}
function IoAccessibility(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 112a56 56 0 1156-56 56.06 56.06 0 01-56 56z" } }, { "tag": "path", "attr": { "d": "M432 112.8l-.45.12-.42.13c-1 .28-2 .58-3 .89-18.61 5.46-108.93 30.92-172.56 30.92-59.13 0-141.28-22-167.56-29.47a73.79 73.79 0 00-8-2.58c-19-5-32 14.3-32 31.94 0 17.47 15.7 25.79 31.55 31.76v.28l95.22 29.74c9.73 3.73 12.33 7.54 13.6 10.84 4.13 10.59.83 31.56-.34 38.88l-5.8 45-32.19 176.19q-.15.72-.27 1.47l-.23 1.27c-2.32 16.15 9.54 31.82 32 31.82 19.6 0 28.25-13.53 32-31.94s28-157.57 42-157.57 42.84 157.57 42.84 157.57c3.75 18.41 12.4 31.94 32 31.94 22.52 0 34.38-15.74 32-31.94a57.17 57.17 0 00-.76-4.06L329 301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09 1.09 0 00.08-.15c1.08-2 6-6.48 17.48-10.79l89.28-31.21a16.9 16.9 0 001.62-.52c16-6 32-14.3 32-31.93S451 107.81 432 112.8z" } }] })(props);
}
function IoAddCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 176v160m80-80H176" } }] })(props);
}
function IoAddCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm96 224h-80v80h-32v-80h-80v-32h80v-80h32v80h80z" } }] })(props);
}
function IoAddCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z" } }] })(props);
}
function IoAddOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 112v288m144-144H112" } }] })(props);
}
function IoAddSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 112v288m144-144H112" } }] })(props);
}
function IoAdd(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 112v288m144-144H112" } }] })(props);
}
function IoAirplaneOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 01-1.69-.9L193.55 67.56a9 9 0 00-6.66-3.56H160l73 161a2.35 2.35 0 01-2.26 3.35l-121.69 1.8a8.06 8.06 0 01-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 010 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 016.6-3.1l120.68 2.7a2.7 2.7 0 012.43 3.74L160 448h26.64a9 9 0 006.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32z" } }] })(props);
}
function IoAirplaneSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 010 .15 15.42 15.42 0 00-.53 1.58L15.86 352h51.78l45.45-55 96.77 2.17L135.24 464h63l133-161.75 57.77 1.54c4.29.23 16 .31 18.66.31 24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48zm-71.29 87.9z" } }] })(props);
}
function IoAirplane(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M186.62 464H160a16 16 0 01-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 01-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38 0 000-.15 14.82 14.82 0 01-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0113.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05 97.32-1.44-64.44-142A16 16 0 01160 48h26.91a25 25 0 0119.35 9.8l125.05 152 57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16-14.93 6.6-34.85 9.94-59.21 9.94-2.68 0-14.37-.08-18.66-.31l-57.76-1.54-125.36 152a25 25 0 01-19.32 9.75z" } }] })(props);
}
function IoAlarmOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M416.07 272a160 160 0 10-160 160 160 160 0 00160-160zM142.12 91.21A46.67 46.67 0 00112 80l-2.79.08C83.66 81.62 64 104 64.07 131c0 13.21 4.66 19.37 10.88 27.23a4.55 4.55 0 003.24 1.77h.88a3.23 3.23 0 002.54-1.31L142.38 99a5.38 5.38 0 001.55-4 5.26 5.26 0 00-1.81-3.79zm227.76 0A46.67 46.67 0 01400 80l2.79.08C428.34 81.62 448 104 447.93 131c0 13.21-4.66 19.37-10.88 27.23a4.55 4.55 0 01-3.24 1.76h-.88a3.23 3.23 0 01-2.54-1.31L369.62 99a5.38 5.38 0 01-1.55-4 5.26 5.26 0 011.81-3.79z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256.07 160v112h-80m240 160l-40-40m-280 40l40-40" } }] })(props);
}
function IoAlarmSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M403.79 64.11l-3.27-.1H400c-14.73 0-28.55 5.91-40.52 15S344 96 344 96l88 86s11.25-5.71 17.61-13.85 14.28-18.08 14.32-37.11c.07-35.49-26.33-64.89-60.14-66.93zm-295.58 0l3.27-.1h.52c14.73 0 28.55 5.91 40.52 15S168 96 168 96l-88 86s-11.25-5.71-17.61-13.85S48.11 150.07 48.07 131C48 95.55 74.4 66.15 108.21 64.11z" } }, { "tag": "path", "attr": { "d": "M391.3 384.6a.06.06 0 010-.08C425 344 441 288.24 427 229.23c-13.64-57.52-72.67-115.69-130.34-128.66C182 74.79 80.07 161.71 80.07 272a175.15 175.15 0 0040.78 112.52.06.06 0 010 .08L73 432a.06.06 0 000 .08l23 22.51a.06.06 0 00.08 0l47.43-47.37a.06.06 0 01.08 0 175.64 175.64 0 00225.05 0h.07L416 454.59a.06.06 0 00.08 0L440 432zM272.07 288H160v-31.9l.05-.05h80V144h32z" } }] })(props);
}
function IoAlarm(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M153.59 110.46A21.41 21.41 0 00152.48 79 62.67 62.67 0 00112 64l-3.27.09h-.48C74.4 66.15 48 95.55 48.07 131c0 19 8 29.06 14.32 37.11a20.61 20.61 0 0014.7 7.8c.26 0 .7.05 2 .05a19.06 19.06 0 0013.75-5.89zm250.2-46.35l-3.27-.1H400a62.67 62.67 0 00-40.52 15 21.41 21.41 0 00-1.11 31.44l60.77 59.65a19.06 19.06 0 0013.79 5.9c1.28 0 1.72 0 2-.05a20.61 20.61 0 0014.69-7.8c6.36-8.05 14.28-18.08 14.32-37.11.06-35.49-26.34-64.89-60.15-66.93z" } }, { "tag": "path", "attr": { "d": "M256.07 96c-97 0-176 78.95-176 176a175.23 175.23 0 0040.81 112.56l-36.12 36.13a16 16 0 1022.63 22.62l36.12-36.12a175.63 175.63 0 00225.12 0l36.13 36.12a16 16 0 1022.63-22.62l-36.13-36.13A175.17 175.17 0 00432.07 272c0-97-78.95-176-176-176zm16 176a16 16 0 01-16 16h-80a16 16 0 010-32h64v-96a16 16 0 0132 0z" } }] })(props);
}
function IoAlbumsOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "384", "height": "256", "x": "64", "y": "176", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28.87", "ry": "28.87" } }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M144 80h224m-256 48h288" } }] })(props);
}
function IoAlbumsSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128 64h256v32H128zm-32 48h320v32H96zm368 336H48V160h416z" } }] })(props);
}
function IoAlbums(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 96H144a16 16 0 010-32h224a16 16 0 010 32zm32 48H112a16 16 0 010-32h288a16 16 0 010 32zm19.13 304H92.87A44.92 44.92 0 0148 403.13V204.87A44.92 44.92 0 0192.87 160h326.26A44.92 44.92 0 01464 204.87v198.26A44.92 44.92 0 01419.13 448z" } }] })(props);
}
function IoAlertCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" } }, { "tag": "path", "attr": { "d": "M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" } }] })(props);
}
function IoAlertCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M240 304h32l6-160h-44l6 160z" } }, { "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm20 319.91h-40v-40h40zM272 304h-32l-6-160h44z" } }] })(props);
}
function IoAlertCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 319.91a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.94v-.05a21.74 21.74 0 1143.44 0z" } }] })(props);
}
function IoAlertOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 008 8h0a8 8 0 008-8l8-216c.58-8.64-7.34-16-16-16z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "416", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoAlertSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M240 80l8 240h16l8-240h-32zm0 320h32v32h-32z" } }] })(props);
}
function IoAlert(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 008 8h0a8 8 0 008-8l8-216c.58-8.64-7.34-16-16-16z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "416", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoAmericanFootballOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "ellipse", "attr": { "cx": "256", "cy": "256", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "267.57", "ry": "173.44", "transform": "rotate(-45 256 256.002)" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M334.04 177.96L177.96 334.04M278.3 278.3l-44.6-44.6m89.19 0l-44.59-44.59m178.38 22.29L300.6 55.32m-89.2 401.36L55.32 300.6m178.38 22.29l-44.59-44.59" } }] })(props);
}
function IoAmericanFootballSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M120.9 120.51c-44.75 44.56-67.29 101.05-78.64 145.9l202.31 201.44c45.05-11.3 101.78-33.74 146.53-78.3s67.29-101.05 78.64-145.91L267.43 42.21C222.38 53.51 165.65 76 120.9 120.51zm259 257.83zm-45-224.2l22.52 22.42-33.78 33.63 22.52 22.42L323.55 255 301 232.61 278.52 255 301 277.45l-22.51 22.42L256 277.45l-22.52 22.42L256 322.29l-22.52 22.42L211 322.29l-33.78 33.63-22.55-22.42 33.78-33.63-22.52-22.42L188.45 255 211 277.45 233.48 255 211 232.61l22.51-22.42L256 232.61l22.52-22.42L256 187.77l22.52-22.42L301 187.77zm143.58 44.27C485.85 143.65 464 48.05 464 48.05s-96.14-21.88-151.14-14.54c-2.54.33-5.21.72-8 1.14l172.47 171.71c.43-2.76.81-5.42 1.15-7.95zM33.52 311.65C26.15 366.41 48.05 464 48.05 464s60 16 99.86 16a391.92 391.92 0 0051.23-3.45c2.54-.33 5.21-.72 8-1.15L34.67 303.7c-.43 2.76-.81 5.42-1.15 7.95z" } }] })(props);
}
function IoAmericanFootball(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M122.06 122.06c-44.37 44.37-66.71 100.61-78 145.28l200.6 200.56c44.67-11.25 100.91-33.59 145.28-78s66.71-100.61 78-145.28L267.34 44.1c-44.67 11.25-100.91 33.59-145.28 77.96zm256.73 256.72zM300.65 189L323 166.71A15.78 15.78 0 01345.29 189L323 211.35l11.16 11.17a15.78 15.78 0 01-22.32 22.32l-11.16-11.16L278.32 256l11.16 11.16a15.78 15.78 0 11-22.32 22.32L256 278.32l-22.32 22.33 11.16 11.16a15.78 15.78 0 11-22.32 22.32L211.35 323 189 345.29A15.78 15.78 0 01166.71 323L189 300.65l-11.16-11.17a15.78 15.78 0 0122.32-22.32l11.16 11.16L233.68 256l-11.16-11.16a15.78 15.78 0 1122.32-22.32L256 233.68l22.32-22.33-11.16-11.16a15.78 15.78 0 0122.32-22.32zm175.92 10.63c7.31-54.53 4-120.26-20-144.21s-89.68-27.3-144.21-20c-2.51.34-5.16.72-7.91 1.15l171 171c.4-2.78.78-5.43 1.12-7.94zM35.43 312.37c-7.31 54.53-4 120.26 20 144.21C72.17 473.33 109.34 480 148.84 480a387 387 0 0050.79-3.43c2.51-.34 5.16-.72 7.91-1.15l-171-171c-.39 2.79-.77 5.44-1.11 7.95z" } }] })(props);
}
function IoAnalyticsOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M344 280l88-88m-200 24l64 64M80 320l104-104" } }, { "tag": "circle", "attr": { "cx": "456", "cy": "168", "r": "24", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "320", "cy": "304", "r": "24", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "208", "cy": "192", "r": "24", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "56", "cy": "344", "r": "24", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoAnalyticsSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M450 128a46 46 0 00-44.11 59l-71.37 71.36a45.88 45.88 0 00-29 0l-52.91-52.91a46 46 0 10-89.12 0L75 293.88A46.08 46.08 0 10106.11 325l87.37-87.36a45.85 45.85 0 0029 0l52.92 52.92a46 46 0 1089.12 0L437 218.12A46 46 0 10450 128z" } }] })(props);
}
function IoAnalytics(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M456 128a40 40 0 00-37.23 54.6l-84.17 84.17a39.86 39.86 0 00-29.2 0l-60.17-60.17a40 40 0 10-74.46 0L70.6 306.77a40 40 0 1022.63 22.63L193.4 229.23a39.86 39.86 0 0029.2 0l60.17 60.17a40 40 0 1074.46 0l84.17-84.17A40 40 0 10456 128z" } }] })(props);
}
function IoApertureOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M360 94.59V296m83.13-83.13L296 360m121.41 0H216m83.13 83.13l-144-144M152 416V216m-83.13 83.13l144-144M94.59 152H288m-75.13-83.13L360 216" } }] })(props);
}
function IoApertureSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M216 48l129.49 128.18V48H216zm-34.53 10.38L80 134h176l-74.53-75.62zM336 344h128V216L336 344zm118-162L378 80v176l76-74zM48 166v128l128-128H48zm282 288l102-76H256l74 76zM58 330l76 102V256l-76 74zm287.49-107.88l-55.55-55.46h-67.88l-55.55 55.46v67.76l55.62 55.52c.44 0 .88-.06 1.33-.06h66.48l55.55-55.46zM165.98 336.09L166 464h128L165.98 336.09z" } }] })(props);
}
function IoAperture(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M250.54 129.17l-67.8-67.8A209.65 209.65 0 0086.32 136h161.4a4 4 0 002.82-6.83zM167.72 168H67.63a207.34 207.34 0 00-16.15 125.9l119.06-119.07a4 4 0 00-2.82-6.83zm176.28-.28V67.56a207.82 207.82 0 00-125.89-16.08l119.06 119.06a4 4 0 006.83-2.82zm116.52 50.38L341.46 337.17a4 4 0 002.82 6.83h100.09a207.34 207.34 0 0016.15-125.9zm-77.69 32.44l67.83-67.82A209.08 209.08 0 00376 86.2v161.52a4 4 0 006.83 2.82zm-161.15 91.23a8 8 0 005.54 2.23h59.66a8 8 0 005.7-2.39l49.18-50a8 8 0 002.3-5.62l-.06-60.81a8 8 0 00-2.38-5.69l-50-49.25a8 8 0 00-5.63-2.3l-60.84.06a8 8 0 00-5.69 2.38l-49.25 50a8 8 0 00-2.3 5.63l.06 60.78a8 8 0 002.45 5.76zm39.78 41.06l67.8 67.8A209.65 209.65 0 00425.68 376h-161.4a4 4 0 00-2.82 6.83zM168 344.28v100.16a207.82 207.82 0 00125.89 16.08L174.83 341.46a4 4 0 00-6.83 2.82zm-38.83-82.82l-67.83 67.83A209.1 209.1 0 00136 425.8V264.28a4 4 0 00-6.83-2.82z" } }] })(props);
}
function IoAppsOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "80", "height": "80", "x": "64", "y": "64", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "40", "ry": "40" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "216", "y": "64", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "40", "ry": "40" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "368", "y": "64", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "40", "ry": "40" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "64", "y": "216", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "40", "ry": "40" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "216", "y": "216", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "40", "ry": "40" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "368", "y": "216", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "40", "ry": "40" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "64", "y": "368", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "40", "ry": "40" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "216", "y": "368", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "40", "ry": "40" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "368", "y": "368", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "40", "ry": "40" } }] })(props);
}
function IoAppsSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "112", "height": "112", "x": "48", "y": "48", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "112", "height": "112", "x": "200", "y": "48", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "112", "height": "112", "x": "352", "y": "48", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "112", "height": "112", "x": "48", "y": "200", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "112", "height": "112", "x": "200", "y": "200", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "112", "height": "112", "x": "352", "y": "200", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "112", "height": "112", "x": "48", "y": "352", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "112", "height": "112", "x": "200", "y": "352", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "112", "height": "112", "x": "352", "y": "352", "rx": "8", "ry": "8" } }] })(props);
}
function IoApps(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56z" } }] })(props);
}
function IoArchiveOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152" } }, { "tag": "rect", "attr": { "width": "416", "height": "80", "x": "48", "y": "64", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 304l-64 64-64-64m64 41.89V224" } }] })(props);
}
function IoArchiveSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "448", "height": "80", "x": "32", "y": "48", "rx": "12", "ry": "12" } }, { "tag": "path", "attr": { "d": "M64 160v280a24 24 0 0024 24h336a24 24 0 0024-24V160zm192 230.63L169.32 304 192 281.32l48 48.05V208h32v121.37l48.07-48.07 22.61 22.64z" } }] })(props);
}
function IoArchive(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M64 164v244a56 56 0 0056 56h272a56 56 0 0056-56V164a4 4 0 00-4-4H68a4 4 0 00-4 4zm267 151.63l-63.69 63.68a16 16 0 01-22.62 0L181 315.63c-6.09-6.09-6.65-16-.85-22.38a16 16 0 0123.16-.56L240 329.37V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 224v105.37l36.69-36.68a16 16 0 0123.16.56c5.8 6.37 5.24 16.29-.85 22.38z" } }, { "tag": "rect", "attr": { "width": "448", "height": "80", "x": "32", "y": "48", "rx": "32", "ry": "32" } }] })(props);
}
function IoArrowBackCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M249.38 336L170 256l79.38-80m-68.35 80H342" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoArrowBackCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm224-80.09L208.42 240H358v32H208.42L272 336.09l-22.7 22.54L147.46 256 249.3 153.37z" } }] })(props);
}
function IoArrowBackCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm212.65-91.36a16 16 0 01.09 22.63L208.42 240H342a16 16 0 010 32H208.42l52.32 52.73A16 16 0 11238 347.27l-79.39-80a16 16 0 010-22.54l79.39-80a16 16 0 0122.65-.09z" } }] })(props);
}
function IoArrowBackOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M244 400L100 256l144-144M120 256h292" } }] })(props);
}
function IoArrowBackSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M244 400L100 256l144-144M120 256h292" } }] })(props);
}
function IoArrowBack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M244 400L100 256l144-144M120 256h292" } }] })(props);
}
function IoArrowDownCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 262.62L256 342l80-79.38m-80 68.35V170" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" } }] })(props);
}
function IoArrowDownCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-80.09-224L240 303.58V154h32v149.58L336.09 240l22.54 22.71L256 364.54 153.37 262.7z" } }] })(props);
}
function IoArrowDownCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0122.63-.09L240 303.58V170a16 16 0 0132 0v133.58l52.73-52.32A16 16 0 11347.27 274l-80 79.39a16 16 0 01-22.54 0l-80-79.39a16 16 0 01-.09-22.65z" } }] })(props);
}
function IoArrowDownOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M112 268l144 144 144-144M256 392V100" } }] })(props);
}
function IoArrowDownSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M112 268l144 144 144-144M256 392V100" } }] })(props);
}
function IoArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M112 268l144 144 144-144M256 392V100" } }] })(props);
}
function IoArrowForwardCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M262.62 336L342 256l-79.38-80m68.35 80H170" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z" } }] })(props);
}
function IoArrowForwardCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256 262.7 358.63z" } }] })(props);
}
function IoArrowForwardCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-212.65 91.36a16 16 0 01-.09-22.63L303.58 272H170a16 16 0 010-32h133.58l-52.32-52.73A16 16 0 11274 164.73l79.39 80a16 16 0 010 22.54l-79.39 80a16 16 0 01-22.65.09z" } }] })(props);
}
function IoArrowForwardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M268 112l144 144-144 144m124-144H100" } }] })(props);
}
function IoArrowForwardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M268 112l144 144-144 144m124-144H100" } }] })(props);
}
function IoArrowForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M268 112l144 144-144 144m124-144H100" } }] })(props);
}
function IoArrowRedoCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M266.91 327.74v-37.32c-57.07 0-84.51 13.47-108.58 38.68-5.4 5.65-15 1.32-14.29-6.43 5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0114-6L365.42 242a8.2 8.2 0 010 11.94L281 333.71a8.32 8.32 0 01-14.09-5.97z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z" } }] })(props);
}
function IoArrowRedoCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm98 88c0-68.13 22.67-137.14 119.17-137.14V152L366 248l-100.83 96v-54.86c-66.69 0-91.32 19.29-119.17 54.86z" } }] })(props);
}
function IoArrowRedoCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm96 66.67c5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0114-6L365.42 242a8.2 8.2 0 010 11.94L281 333.71a8.32 8.32 0 01-14-6v-37.29c-57.07 0-84.51 13.47-108.58 38.68-5.49 5.65-15.07 1.32-14.42-6.43z" } }] })(props);
}
function IoArrowRedoOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" } }] })(props);
}
function IoArrowRedoSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 399.26C48 335.19 62.44 284 90.91 247c34.38-44.67 88.68-68.77 161.56-71.75V72L464 252 252.47 432V329.35c-44.25 1.19-77.66 7.58-104.27 19.84-28.75 13.25-49.6 33.05-72.08 58.7L48 440z" } }] })(props);
}
function IoArrowRedo(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M58.79 439.13A16 16 0 0148 424c0-73.1 14.68-131.56 43.65-173.77 35-51 90.21-78.46 164.35-81.87V88a16 16 0 0127.05-11.57l176 168a16 16 0 010 23.14l-176 168A16 16 0 01256 424v-79.77c-45 1.36-79 8.65-106.07 22.64-29.25 15.12-50.46 37.71-73.32 67a16 16 0 01-17.82 5.28z" } }] })(props);
}
function IoArrowUndoCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M245.09 327.74v-37.32c57.07 0 84.51 13.47 108.58 38.68 5.4 5.65 15 1.32 14.29-6.43-5.45-61.45-34.14-117.09-122.87-117.09v-37.32a8.32 8.32 0 00-14.05-6L146.58 242a8.2 8.2 0 000 11.94L231 333.71a8.32 8.32 0 0014.09-5.97z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" } }] })(props);
}
function IoArrowUndoCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-9.17 241.14V344L146 248l100.83-96v54.86c96.5 0 119.17 69 119.17 137.14-27.85-35.57-52.48-54.86-119.17-54.86z" } }] })(props);
}
function IoArrowUndoCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm97.67 281.1c-24.07-25.21-51.51-38.68-108.58-38.68v37.32a8.32 8.32 0 01-14.05 6L146.58 254a8.2 8.2 0 010-11.94L231 162.29a8.32 8.32 0 0114.05 6v37.32c88.73 0 117.42 55.64 122.87 117.09.73 7.72-8.85 12.05-14.25 6.4z" } }] })(props);
}
function IoArrowUndoOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z" } }] })(props);
}
function IoArrowUndoSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7-26.61-12.26-60-18.65-104.27-19.84V432L48 252 259.53 72v103.21c72.88 3 127.18 27.08 161.56 71.75C449.56 284 464 335.19 464 399.26z" } }] })(props);
}
function IoArrowUndo(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 440a16 16 0 01-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 01-27 11.57l-176-168a16 16 0 010-23.14l176-168A16 16 0 01256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 01-16 16z" } }] })(props);
}
function IoArrowUpCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 249.38L256 170l80 79.38m-80-68.35V342" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoArrowUpCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm80.09 224L272 208.42V358h-32V208.42L175.91 272l-22.54-22.7L256 147.46 358.63 249.3z" } }] })(props);
}
function IoArrowUpCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm91.36 212.65a16 16 0 01-22.63.09L272 208.42V342a16 16 0 01-32 0V208.42l-52.73 52.32A16 16 0 11164.73 238l80-79.39a16 16 0 0122.54 0l80 79.39a16 16 0 01.09 22.65z" } }] })(props);
}
function IoArrowUpOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M112 244l144-144 144 144M256 120v292" } }] })(props);
}
function IoArrowUpSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M112 244l144-144 144 144M256 120v292" } }] })(props);
}
function IoArrowUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M112 244l144-144 144 144M256 120v292" } }] })(props);
}
function IoAtCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448.08 256.08c0-106-86-192-192-192s-192 86-192 192 86 192 192 192 192-85.97 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "28", "d": "M300.81 358.29c-20.83 7.42-34.05 9.59-54.19 9.59-61.17 0-106.39-50.07-101-111.84S205 144.21 266.14 144.21c68.92 0 106.79 45.55 101.47 106.55-4 45.54-32.8 58.66-47.89 56-14.2-2.55-25.92-15.52-23.75-40.35l5.62-44.66c-7.58-9.17-28.11-18-49.93-14.54C231.77 210.3 209 228 206.56 256s14.49 50.84 39.93 50.84 47.86-18.39 50.69-50.84" } }] })(props);
}
function IoAtCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256.41 48.74c-114.85 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.16-208-208-208zM381.22 252c-2.85 32.63-16.78 49.7-28 58.26s-24.69 12.34-36.33 10.26a41.63 41.63 0 01-27-17.52 60.84 60.84 0 01-43.72 17.9 51.65 51.65 0 01-38.55-16.83c-11.39-12.42-17-30.36-15.33-49.23 3.05-35 30.92-57.39 56.87-61.48 27.21-4.29 52.24 6.54 62.91 19.46l3.84 4.66-6.34 50.38c-1.19 14.34 3.29 23.48 12.29 25.1 2.39.42 8.11-.13 14.38-4.93 6.72-5.15 15.14-16 17.1-38.47 2.32-26.55-4.35-49.19-19.28-65.49-15.5-16.9-39.1-25.84-68.24-25.84-54 0-101.81 44.43-106.57 99-2.29 26.2 5.66 50.68 22.39 68.93C198 344 221 353.88 246.29 353.88c19 0 30.61-2.05 49.49-8.78l13.22-4.69 9.39 26.37-13.19 4.7c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77-22.09-24.11-32.62-56.17-29.65-90.29 2.91-33.33 18.46-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.94 12.08 88.88 34.93 20.05 21.91 29.48 52.75 26.5 86.86z" } }, { "tag": "path", "attr": { "d": "M253.51 221c-14.83 2.33-31.55 15.84-33.34 36.26-1 11.06 2 21.22 8.08 27.87a23.63 23.63 0 0017.91 7.75c19.7 0 33.8-14.79 36.8-38.59l1.75-13.89h.09l1.65-13.11a49.63 49.63 0 00-32.94-6.3z" } }] })(props);
}
function IoAtCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208zM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 01-26.82-17.19 62.06 62.06 0 01-44 17.57 51.66 51.66 0 01-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 019.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86z" } }, { "tag": "path", "attr": { "d": "M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0017.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 01.34-2.07l3.2-25.45a49.61 49.61 0 00-32.93-6.3z" } }] })(props);
}
function IoAtOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25" } }] })(props);
}
function IoAtSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M407.6 115.78c-32.07-35-79.47-53.51-137.09-53.51-51 0-100.69 19.8-139.82 55.76s-63.13 83.84-67.63 134.83c-4.55 51.67 11.41 100.29 44.94 136.9 33.37 36.44 80.07 56.51 131.49 56.51 32.52 0 53.61-2.36 85.48-15.75l14.75-6.2-12.4-29.5-14.75 6.18c-27.15 11.4-43.78 13.25-73.08 13.25-42.34 0-80.65-16.38-107.89-46.12-27.4-29.92-40.42-69.86-36.66-112.48 7.84-89 86.6-161.4 175.57-161.4 48.4 0 87.65 14.91 113.49 43.13 24.61 26.87 35.6 63.92 31.79 107.15-3.29 37.35-17.76 55.74-29.32 64.6-11 8.44-22 10.18-28 9.11-17.68-3.13-26.87-20.46-24.59-46.29l9.93-109.12L311.9 160l-2 22.29a79.69 79.69 0 00-57.32-24c-23.8 0-46.54 10.07-64 28.37-16.77 17.53-27.23 41.05-29.45 66.22-2.45 27.87 5.75 54.34 22.51 72.64a76.14 76.14 0 0056.88 24.77A93 93 0 00310 318a60 60 0 0042.88 31.81c16.89 3 36.73-2.69 53.08-15.21 30.19-23.13 39.36-60.19 41.74-87.2 4.52-51.7-9.7-98.4-40.1-131.62zm-126.34 186a62.19 62.19 0 01-42.81 16.53 43.94 43.94 0 01-33.28-14.38c-10.71-11.7-15.9-29.27-14.23-48.22 3.23-36.68 30.29-65.4 61.61-65.4a48.16 48.16 0 0135.88 15.82c10.87 11.87 16.2 28.87 14.63 46.73-1.78 20.28-9.33 37.14-21.8 48.88z" } }] })(props);
}
function IoAt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25" } }] })(props);
}
function IoAttachOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M216.08 192v143.85a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 10191 0V159.74" } }] })(props);
}
function IoAttachSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M216.08 192v143.55a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 00191 0V159.44" } }] })(props);
}
function IoAttach(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M216.08 192v143.85a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 10191 0V159.74" } }] })(props);
}
function IoBackspaceOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M135.19 390.14a28.79 28.79 0 0021.68 9.86h246.26A29 29 0 00432 371.13V140.87A29 29 0 00403.13 112H156.87a28.84 28.84 0 00-21.67 9.84v0L46.33 256l88.86 134.11z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336.67 192.33L206.66 322.34m130.01 0L206.66 192.33m130.01 0L206.66 322.34m130.01 0L206.66 192.33" } }] })(props);
}
function IoBackspaceSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M144 96L32 256l112 160h304V96zm215.3 226.34L336.67 345l-65-65-65 65L184 322.34l65-65-65-65 22.63-22.63 65 65 65-65 22.63 22.63-65 65z" } }] })(props);
}
function IoBackspace(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M403.13 96H156.87a44.9 44.9 0 00-33.68 15.27 15.88 15.88 0 00-1.91 2.7L32 247.75a16 16 0 000 16.5l89.15 133.57a16.24 16.24 0 002 2.88 44.89 44.89 0 0033.7 15.3h246.28A44.92 44.92 0 00448 371.13V140.87A44.92 44.92 0 00403.13 96zM348 311a16 16 0 11-22.63 22.62L271.67 280 218 333.65A16 16 0 01195.35 311L249 257.33l-53.69-53.69A16 16 0 01218 181l53.69 53.7 53.67-53.7A16 16 0 01348 203.64l-53.7 53.69z" } }] })(props);
}
function IoBagAddOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 256v128m64-64H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32" } }] })(props);
}
function IoBagAddSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" } }] })(props);
}
function IoBagAdd(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M454.66 169.4A31.86 31.86 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.78 31.78 0 00-9.34-22.6zM320 336h-48v48a16 16 0 01-32 0v-48h-48a16 16 0 010-32h48v-48a16 16 0 0132 0v48h48a16 16 0 010 32zm16-176H176v-16a80 80 0 01160 0z" } }] })(props);
}
function IoBagCheckOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 264l-89.6 112-38.4-44.88" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32" } }] })(props);
}
function IoBagCheckSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm50.81 252.12l-61.37-71.72 24.31-20.81L230 350.91l87.51-109.4 25 20z" } }] })(props);
}
function IoBagCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM332.49 274l-89.6 112a16 16 0 01-12.23 6h-.26a16 16 0 01-12.16-5.6l-38.4-44.88a16 16 0 1124.32-20.8L230 350.91 307.51 254a16 16 0 0125 20zM336 160H176v-16a80 80 0 01160 0z" } }] })(props);
}
function IoBagHandleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16" } }] })(props);
}
function IoBagHandleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm188 91a112 112 0 01-224 0v-32h32v32a80 80 0 00160 0v-32h32z" } }] })(props);
}
function IoBagHandle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z" } }] })(props);
}
function IoBagOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32" } }] })(props);
}
function IoBagRemoveOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32" } }] })(props);
}
function IoBagRemoveSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187H176v-32h160z" } }] })(props);
}
function IoBagRemove(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M454.66 169.4A31.86 31.86 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.78 31.78 0 00-9.34-22.6zM320 336H192a16 16 0 010-32h128a16 16 0 010 32zm16-176H176v-16a80 80 0 01160 0z" } }] })(props);
}
function IoBagSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M372 160v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-40 0H180v-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148z" } }] })(props);
}
function IoBag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176z" } }] })(props);
}
function IoBalloonOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M414.11 153.82C429.66 264.4 345.85 357.09 282.54 366s-169.48-57.5-185-167.68a159.82 159.82 0 11316.53-44.49z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M236.06 308.05c-32.83-13-67.08-43.1-82.27-85.46M367.7 495.78c-32.83-13-63.31-40.06-78.5-82.41" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M266.71 368.21l-9.17 49.61 63.31-8.9-22.49-45.16-31.65 4.45z" } }] })(props);
}
function IoBalloonSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M391 307.27c32.75-46.35 46.59-101.63 39-155.68C416.47 55.59 327.38-11.54 231.38 2S68.24 104.53 81.73 200.53c7.57 53.89 36.12 103.16 80.37 138.74 26.91 21.64 57.59 36.1 86.05 41.33l-8.36 45.23a8 8 0 009 9.38L279 431c15.9 35.87 41.65 60.48 78.41 75l14.88 5.88 11.77-29.75-14.88-5.89c-26.35-10.42-44.48-26.16-57-49.92l21.84-3.07a8 8 0 006.05-11.49l-20.49-41.16c25.98-12.87 51.49-35.18 71.42-63.33zm-160.82 15.66c-41.26-16.32-76.3-52.7-91.45-94.94l-5.4-15.06 30.12-10.8 5.4 15.06c14.5 40.44 47.27 65.77 73.1 76l14.88 5.88-11.77 29.76z" } }] })(props);
}
function IoBalloon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M391 307.27c32.75-46.35 46.59-101.63 39-155.68A175.82 175.82 0 00231.38 2c-96 13.49-163.14 102.58-149.65 198.58 7.57 53.89 36.12 103.16 80.37 138.74 24.58 19.68 52.31 33.5 78.62 39.68a8 8 0 016 9.22l-4.87 26.38a16.29 16.29 0 001.48 10.57 16 16 0 0014.2 8.61 15.21 15.21 0 002.23-.16l17.81-2.5a2 2 0 012.09 1.14c16.72 36.31 45.46 63.85 82.15 78.36a16 16 0 0021-9.65c2.83-8.18-1.64-17.07-9.68-20.28a118.57 118.57 0 01-59.3-51.88 2 2 0 011.45-3l7.4-1a16.54 16.54 0 0010.08-5.23 16 16 0 002.39-17.8l-12.06-24.23a8 8 0 013.26-10.55c23.59-13.17 46.45-34 64.65-59.73zm-154.9 16.78a16 16 0 01-5.88-1.12c-41.26-16.32-76.3-52.7-91.45-94.94a16 16 0 1130.12-10.8c14.5 40.44 47.27 65.77 73.1 76a16 16 0 01-5.89 30.88z" } }] })(props);
}
function IoBanOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M108.92 108.92l294.16 294.16" } }] })(props);
}
function IoBanSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM432 256a175.09 175.09 0 01-35.8 106.26L149.74 115.8A175.09 175.09 0 01256 80c97.05 0 176 79 176 176zm-352 0a175.09 175.09 0 0135.8-106.26L362.26 396.2A175.09 175.09 0 01256 432c-97 0-176-78.95-176-176z" } }] })(props);
}
function IoBan(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "200", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "48" } }, { "tag": "path", "attr": { "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M114.58 114.58l282.84 282.84" } }] })(props);
}
function IoBandageOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "560.87", "height": "176.25", "x": "-24.43", "y": "167.88", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "88.12", "ry": "88.12", "transform": "rotate(-45 256 256.002)" } }, { "tag": "rect", "attr": { "width": "176", "height": "196", "x": "169.41", "y": "156.59", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32", "ry": "32", "transform": "rotate(45 257.409 254.582)" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "208", "r": "16" } }, { "tag": "circle", "attr": { "cx": "304", "cy": "256", "r": "16" } }, { "tag": "circle", "attr": { "cx": "208", "cy": "256", "r": "16" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "304", "r": "16" } }] })(props);
}
function IoBandageSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M27.71 337.1a40 40 0 000 56.54l90.65 90.65a40 40 0 0056.54 0l75.1-75.1L102.81 262zM496 147.1a39.87 39.87 0 00-11.75-28.38l-91-91a40.14 40.14 0 00-56.75 0L264 100.28 411.72 248l72.53-72.53A39.85 39.85 0 00496 147.1zM273.06 386.19l116-116L241.77 123l-116 116zm19.63-141.5a16 16 0 110 22.62 16 16 0 010-22.62zm-48-48a16 16 0 110 22.62 16 16 0 010-22.62zm0 96a16 16 0 110 22.62 16 16 0 010-22.62zm-25.38-48a16 16 0 11-22.62 0 16 16 0 0122.62 0z" } }] })(props);
}
function IoBandage(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M275.8 157a16 16 0 00-22.63 0l-93.34 93.34a16 16 0 000 22.63l79.2 79.2a16 16 0 0022.63 0L355 258.83a16 16 0 000-22.63zM137.21 295.6a47.81 47.81 0 01-9.43-13.38L69 341a72.2 72.2 0 000 102 72.37 72.37 0 00102 0l58.77-58.76a47.81 47.81 0 01-13.38-9.43zM392 48a71.55 71.55 0 00-51 21l-55.92 55.91a48.05 48.05 0 0113.36 9.45l79.19 79.19a48.05 48.05 0 019.45 13.36L443 171a72 72 0 00-51-123z" } }, { "tag": "path", "attr": { "d": "M275.8 157a16 16 0 00-22.63 0l-93.34 93.34a16 16 0 000 22.63l79.2 79.2a16 16 0 0022.63 0L355 258.83a16 16 0 000-22.63zm-56.49 110.31a16 16 0 110-22.62 16 16 0 010 22.62zm48 48a16 16 0 110-22.62 16 16 0 010 22.62zm0-96a16 16 0 110-22.62 16 16 0 010 22.62zm48 48a16 16 0 110-22.62 16 16 0 010 22.62zm150.3-220.92a104.38 104.38 0 00-147.25 0l-69.76 69.89a4 4 0 004.2 6.58 35.74 35.74 0 0111.69-2.54 47.7 47.7 0 0133.94 14.06l79.19 79.19a47.7 47.7 0 0114.06 33.94 35.68 35.68 0 01-2.54 11.69 4 4 0 006.58 4.2l69.89-69.76a104.38 104.38 0 000-147.25z" } }, { "tag": "path", "attr": { "d": "M254.34 386.83a47.91 47.91 0 01-33.94-14l-79.19-79.23a47.81 47.81 0 01-9.43-13.38c-4.59-9.7-1.39-25 2.48-36.9a4 4 0 00-6.64-4l-77.23 77.04a104.12 104.12 0 00147.25 147.25l72.75-72.88a4 4 0 00-4.21-6.58c-4.18 1.58-8.4 2.68-11.84 2.68z" } }] })(props);
}
function IoBarChartOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M32 32v432a16 16 0 0016 16h432" } }, { "tag": "rect", "attr": { "width": "80", "height": "192", "x": "96", "y": "224", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "20", "ry": "20" } }, { "tag": "rect", "attr": { "width": "80", "height": "240", "x": "240", "y": "176", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "20", "ry": "20" } }, { "tag": "rect", "attr": { "width": "80", "height": "304", "x": "383.64", "y": "112", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "20", "ry": "20" } }] })(props);
}
function IoBarChartSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 496H16V16h32v448h448v32z" } }, { "tag": "path", "attr": { "d": "M192 432H80V208h112zm144 0H224V160h112zm143.64 0h-112V96h112z" } }] })(props);
}
function IoBarChart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 496H48a32 32 0 01-32-32V32a16 16 0 0132 0v432h432a16 16 0 010 32z" } }, { "tag": "path", "attr": { "d": "M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zm144 0h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zm143.64 0h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z" } }] })(props);
}
function IoBarbellOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 256h416" } }, { "tag": "rect", "attr": { "width": "32", "height": "256", "x": "384", "y": "128", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }, { "tag": "rect", "attr": { "width": "32", "height": "256", "x": "96", "y": "128", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }, { "tag": "rect", "attr": { "width": "16", "height": "128", "x": "32", "y": "192", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "16", "height": "128", "x": "464", "y": "192", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }] })(props);
}
function IoBarbellSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 176h-58v-64h-76v122H150V112H74v64H16v160h58v64h76V278h212v122h76v-64h58V176z" } }] })(props);
}
function IoBarbell(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M467 176a29.94 29.94 0 00-25.32 12.5 2 2 0 01-3.64-1.14v-36.65c0-20.75-16.34-38.21-37.08-38.7A38 38 0 00362 150v82a2 2 0 01-2 2H152a2 2 0 01-2-2v-81.29c0-20.75-16.34-38.21-37.08-38.7A38 38 0 0074 150v37.38a2 2 0 01-3.64 1.14A29.94 29.94 0 0045 176c-16.3.51-29 14.31-29 30.62v98.72c0 16.31 12.74 30.11 29 30.62a29.94 29.94 0 0025.32-12.5 2 2 0 013.68 1.16v36.67C74 382 90.34 399.5 111.08 400A38 38 0 00150 362v-82a2 2 0 012-2h208a2 2 0 012 2v81.29c0 20.75 16.34 38.21 37.08 38.7A38 38 0 00438 362v-37.38a2 2 0 013.64-1.14A29.94 29.94 0 00467 336c16.3-.51 29-14.31 29-30.62v-98.74c0-16.31-12.74-30.11-29-30.64z" } }] })(props);
}
function IoBarcodeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384 400.33l35.13-.33A29 29 0 00448 371.13V140.87A29 29 0 00419.13 112l-35.13.33M128 112l-36.8.33c-15.88 0-27.2 13-27.2 28.87v230.27c0 15.87 11.32 28.86 27.2 28.86L128 400m256-208v128m-64-160v192m-64-176v160m-64-176v192m-64-160v128" } }] })(props);
}
function IoBarcodeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 400.33l48-.33V112l-48 .33M112 112l-48 .33v288l48-.33m272-208v128m-64-160v192m-64-176v160m-64-176v192m-64-160v128" } }] })(props);
}
function IoBarcode(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M419.13 96H419l-35.05.33L128 96h-.16l-36.74.33C66.93 96.38 48 116.07 48 141.2v230.27c0 25.15 19 44.86 43.2 44.86h.15l36.71-.33 255.92.33h.17l35.07-.33A44.91 44.91 0 00464 371.13V140.87A44.92 44.92 0 00419.13 96zM144 320a16 16 0 01-32 0V192a16 16 0 0132 0zm64 32a16 16 0 01-32 0V160a16 16 0 0132 0zm64-16a16 16 0 01-32 0V176a16 16 0 0132 0zm64 16a16 16 0 01-32 0V160a16 16 0 0132 0zm64-32a16 16 0 01-32 0V192a16 16 0 0132 0z" } }] })(props);
}
function IoBaseballOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M294.25 108.6l-60.57 17.59m83.45 29.92l-51.5 36.4m90.26 2.36l-36.4 51.5m83.91-28.62l-17.59 60.57" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "192", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M432.94 255.05a192 192 0 01-176.31-180.7M108.54 294.31l17.59-60.57m29.92 83.45l36.4-51.5m2.36 90.26l51.5-36.4m-28.62 83.91l60.57-17.59M255 433.61A192 192 0 0074.29 256.69" } }] })(props);
}
function IoBaseballSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M302.16 56.2a13.88 13.88 0 01-3.42 8.91l-.11 5.13-27.71-.57c0 1.3.09 2.61.16 3.91a177.33 177.33 0 003.45 26.31l24.72-7.18 7.81 26.88-24.71 7.18a177.21 177.21 0 0013.34 27.69l21.27-15 16.16 22.86-21.29 15.05q5.25 6.33 11.11 12.19c3.91 3.91 8 7.6 12.2 11.1l15.71-22.22 22.86 16.16L358 216.75a178.78 178.78 0 0027.68 13.32l7.49-25.8 26.89 7.81-7.5 25.83a177.8 177.8 0 0031 3.67l-.41-24.67 17.41-.29A208 208 0 00301.82 52.93a13.65 13.65 0 01.34 3.27zM214 441.64l27.91.49a177.46 177.46 0 00-3.62-29.95l-24.14 7-7.81-26.88 24.11-7a177.92 177.92 0 00-13.33-27.68L196.79 372l-16.16-22.86L201 334.73c-3.49-4.22-7.19-8.3-11.09-12.2s-8-7.62-12.19-11.12l-13.91 19.68L141 314.93l13.9-19.66a177.26 177.26 0 00-27.7-13.33l-6.37 21.94-26.89-7.81 6.38-22a177.32 177.32 0 00-26.32-3.4c-1.59-.09-3.18-.16-4.78-.2l.4 22.34-17.71.32a207.88 207.88 0 00161.81 166.48z" } }, { "tag": "path", "attr": { "d": "M444.65 302.67l-.55-33.06a206 206 0 01-39.33-4.74L397 291.8l-26.94-7.8 7.83-27a206.91 206.91 0 01-36.06-17.35l-16.36 23.15-22.86-16.16 16.33-23.11a204.21 204.21 0 01-30-30l-22.19 15.67-16.16-22.87 22.17-15.67a206 206 0 01-17.38-36.06l-25.75 7.48-7.81-26.89 25.73-7.47q-2-9.21-3.18-18.64h-.47l-.78-14-.33-6-17.94-.32a13.38 13.38 0 01-1.79-.16l-6.35-.13.06-2.47a14 14 0 01-5.66-11.49 13.27 13.27 0 01.13-1.67A208 208 0 0052.16 217.43l16.1-.28.45 25.18 6.83.38 14 .77v.48q9.42 1.17 18.64 3.18l6.68-23L141.7 232l-6.7 23a205.3 205.3 0 0136.06 17.38l14.53-20.56L208.47 268 194 288.5a203.5 203.5 0 0130 30l21.3-15 16.16 22.86-21.36 15.05a206.86 206.86 0 0117.34 36.06l25.27-7.33 7.81 26.86-25.24 7.33a205.9 205.9 0 014.72 38.3l29.42.53-.29 16.48a207.94 207.94 0 00160-157.21z" } }] })(props);
}
function IoBaseball(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M444 295.67l-.47-26.07a205.42 205.42 0 01-39.27-4.73l-5 17.35a14 14 0 11-26.88-7.81l5-17.38a206.47 206.47 0 01-36.05-17.35l-10.44 14.77a14 14 0 01-22.87-16.16l10.41-14.73a204.8 204.8 0 01-30-30L273.71 204a14 14 0 01-16.16-22.87l14.74-10.42a205.3 205.3 0 01-17.38-36.06l-17.32 5a14 14 0 11-7.81-26.89l17.3-5a205.88 205.88 0 01-4.43-32.59q-.17-3-.24-6l-18.22-.33a14 14 0 01-13.74-14A208 208 0 0055 202.42a16 16 0 0115 15.66l.44 24.43c1.58.05 3.16.11 4.73.2a205.88 205.88 0 0132.59 4.43l5-17.3a14 14 0 0126.89 7.81l-5 17.32a205.21 205.21 0 0136 17.38L181 257.61a14 14 0 0122.87 16.16l-10.39 14.73a205.65 205.65 0 0115.79 14.23 203.79 203.79 0 0114.23 15.79l14.73-10.41A14 14 0 01254.39 331l-14.76 10.43A206.86 206.86 0 01257 377.47l17.38-5.05a14 14 0 017.81 26.89l-17.35 5a205.89 205.89 0 014.7 38.28l18.27.33a16 16 0 0115.71 16.28 11.69 11.69 0 01-.08 1.19 208 208 0 00153.39-151.03A14 14 0 01444 295.67z" } }, { "tag": "path", "attr": { "d": "M301.49 56.2A14 14 0 01287.5 70h-.25l-16.81-.3c.05 1.31.1 2.62.17 3.93a178.83 178.83 0 003.44 26.31l16.29-4.74a14 14 0 017.81 26.8l-16.27 4.73a178.06 178.06 0 0013.33 27.69l13.84-9.78a14 14 0 1116.16 22.87l-13.86 9.79q5.25 6.33 11.12 12.19c3.9 3.91 8 7.6 12.2 11.1l9.78-13.84A14 14 0 11367.32 203l-9.76 13.8a178.83 178.83 0 0027.68 13.33l4.76-16.28a14 14 0 0126.89 7.81l-4.73 16.26a177.72 177.72 0 0030.95 3.65l-.16-9a14 14 0 0113.75-14.24h.25a14.67 14.67 0 012.59.25 208 208 0 00-158-163.51c-.06.4-.04.76-.05 1.13zm-93.05 401.35a16 16 0 0116.28-15.71l16.76.29a178.49 178.49 0 00-3.62-29.95l-16.26 4.72a14 14 0 11-7.81-26.9l16.21-4.7a177.92 177.92 0 00-13.33-27.68l-13.8 9.76a14 14 0 11-16.16-22.87l13.84-9.78c-3.5-4.22-7.19-8.3-11.1-12.2s-8-7.62-12.19-11.12l-9.79 13.86a14 14 0 11-22.87-16.16l9.78-13.84a177.16 177.16 0 00-27.69-13.33L122 298.21a14 14 0 11-26.9-7.81l4.73-16.29a177.32 177.32 0 00-26.31-3.44c-.89-.05-1.79-.08-2.68-.12l.16 10.59a16 16 0 01-15.71 16.28H55a16 16 0 01-3.94-.51 208 208 0 00157.65 163.87 15.72 15.72 0 01-.27-3.23z" } }] })(props);
}
function IoBasketOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M68.4 192A20.38 20.38 0 0048 212.2a17.87 17.87 0 00.8 5.5L100.5 400a40.46 40.46 0 0039.1 29.5h232.8a40.88 40.88 0 0039.3-29.5l51.7-182.3.6-5.5a20.38 20.38 0 00-20.4-20.2H68.4zm193.32 160.07A42.07 42.07 0 11304 310a42.27 42.27 0 01-42.28 42.07z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 192l96-128 96 128" } }] })(props);
}
function IoBasketSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M339.2 217.6L256 106.67 172.8 217.6l-25.6-19.2 96-128a16 16 0 0125.6 0l96 128z" } }, { "tag": "path", "attr": { "d": "M441.59 192H70.41a12 12 0 00-11.68 14.77L112.59 434h286.82l53.86-227.23A12 12 0 00441.59 192zM256 351.66A37.71 37.71 0 11293.89 314 37.88 37.88 0 01256 351.66z" } }] })(props);
}
function IoBasket(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M424.11 192H360L268.8 70.4a16 16 0 00-25.6 0L152 192H87.89a32.57 32.57 0 00-32.62 32.44 30.3 30.3 0 001.31 9l46.27 163.14a50.72 50.72 0 0048.84 36.91h208.62a51.21 51.21 0 0049-36.86l46.33-163.36a15.62 15.62 0 00.46-2.36l.53-4.93a13.3 13.3 0 00.09-1.55A32.57 32.57 0 00424.11 192zM256 106.67L320 192H192zm0 245a37.7 37.7 0 1137.88-37.7A37.87 37.87 0 01256 351.63z" } }] })(props);
}
function IoBasketballOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "192", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M432.94 255.05a192 192 0 01-176.31-180.7M255 433.61A192 192 0 0074.29 256.69m45.95-136.45l271.52 271.52m-271.52 0l271.52-271.52" } }] })(props);
}
function IoBasketballSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 233.37l34.45-34.45a207.08 207.08 0 01-50.12-135.25c0-5 .19-10.05.54-15A207.09 207.09 0 00120.67 98zm57.14-57.14L391.33 98A207.07 207.07 0 00273 48.8c-.41 4.9-.64 9.86-.64 14.87a175.25 175.25 0 0040.78 112.56zm22.63 22.63a175.25 175.25 0 00112.56 40.81c5 0 10-.23 14.87-.64A207.07 207.07 0 00414 120.67zM176.23 313.14a175.23 175.23 0 00-112.56-40.81q-7.52 0-14.87.64A207.07 207.07 0 0098 391.33zM256 278.63l-34.45 34.45a207.08 207.08 0 0150.12 135.25c0 5-.19 10.05-.54 15A207.06 207.06 0 00391.33 414zm192.33-6.96a207.08 207.08 0 01-135.25-50.12L278.63 256 414 391.33a207.09 207.09 0 0049.39-120.2c-5.01.35-10.02.54-15.06.54zM233.37 256L98 120.67a207.06 207.06 0 00-49.39 120.2c5-.35 10-.54 15-.54a207.08 207.08 0 01135.25 50.12zm-112.7 158A207.07 207.07 0 00239 463.2q.63-7.35.64-14.87a175.23 175.23 0 00-40.81-112.56z" } }] })(props);
}
function IoBasketball(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 233.37l34.45-34.45a207.08 207.08 0 01-50.12-135.25c0-5 .19-10.05.54-15A207.09 207.09 0 00120.67 98zm57.14-57.14L391.33 98A207.07 207.07 0 00273 48.8c-.41 4.9-.64 9.86-.64 14.87a175.25 175.25 0 0040.78 112.56zm22.63 22.63a175.25 175.25 0 00112.56 40.81c5 0 10-.23 14.87-.64A207.07 207.07 0 00414 120.67zM176.23 313.14a175.23 175.23 0 00-112.56-40.81q-7.52 0-14.87.64A207.07 207.07 0 0098 391.33zM256 278.63l-34.45 34.45a207.08 207.08 0 0150.12 135.25c0 5-.19 10.05-.54 15A207.06 207.06 0 00391.33 414zm192.33-6.96a207.08 207.08 0 01-135.25-50.12L278.63 256 414 391.33a207.09 207.09 0 0049.39-120.2c-5.01.35-10.02.54-15.06.54zM233.37 256L98 120.67a207.06 207.06 0 00-49.39 120.2c5-.35 10-.54 15-.54a207.08 207.08 0 01135.25 50.12zm-112.7 158A207.07 207.07 0 00239 463.2q.63-7.35.64-14.87a175.23 175.23 0 00-40.81-112.56z" } }] })(props);
}
function IoBatteryChargingOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 322.3V189.7A29.74 29.74 0 0177.7 160h137.44l24.4-32H77.7A61.77 61.77 0 0016 189.7v132.6A61.77 61.77 0 0077.7 384h96.85a22.57 22.57 0 01.26-7.32l.15-.75.21-.73 6.5-23.2H77.7A29.74 29.74 0 0148 322.3zM386.3 128h-98.64a22.69 22.69 0 01-.27 7.2l-.15.74-.21.73-6.54 23.33H386.3a29.74 29.74 0 0129.7 29.7v132.6a29.74 29.74 0 01-29.7 29.7H247l-24.42 32H386.3a61.77 61.77 0 0061.7-61.7V189.7a61.77 61.77 0 00-61.7-61.7z" } }, { "tag": "path", "attr": { "d": "M162.65 294.16a24.37 24.37 0 01-21.56-13 25 25 0 011.42-25.83l.31-.46.33-.44L197.62 183H89.69a20 20 0 00-20 20v106a20 20 0 0020 20h98.42l9.78-34.86z" } }, { "tag": "path", "attr": { "d": "M276.07 280.89l27.07-35.49a5.2 5.2 0 00.77-1.91 5 5 0 00.08-.66 5 5 0 00-.08-1.29 5.11 5.11 0 00-.68-1.75 4.76 4.76 0 00-.78-.95 3.48 3.48 0 00-.48-.38 4 4 0 00-1.11-.55 4.28 4.28 0 00-1.31-.2h-61.62l12.12-43.21 3.23-11.5 6.21-22.16.51-1.84 7.79-27.76a3.51 3.51 0 00.05-.55v-.16c0-.05 0-.26-.05-.38s0-.09 0-.14a2.2 2.2 0 00-.17-.45 3.77 3.77 0 00-.26-.39l-.09-.1a2.73 2.73 0 00-.25-.23l-.1-.08a3.14 3.14 0 00-.39-.24 2 2 0 00-.41-.14h-.59a2.3 2.3 0 00-.45 0 1.9 1.9 0 00-.42.15l-.13.07-.3.21-.11.1a2.4 2.4 0 00-.36.41l-18 23.63-13.14 17.22-9.85 12.83-63.71 83.55a5.72 5.72 0 00-.44.8 4.78 4.78 0 00-.35 1.09 4.7 4.7 0 00-.08 1.29 4.86 4.86 0 002 3.71 4.74 4.74 0 00.54.31 4.31 4.31 0 001.89.43h61.62L194.42 380.6a3.64 3.64 0 000 .56v.15a2.32 2.32 0 00.06.38.58.58 0 000 .14 2.2 2.2 0 00.17.45 3.62 3.62 0 00.26.38l.09.1.25.24a.39.39 0 01.1.08 2.22 2.22 0 00.39.23 2.83 2.83 0 00.41.14h.13a1.86 1.86 0 00.33 0h.13a2.32 2.32 0 00.45-.06 2.05 2.05 0 00.41-.16l.13-.07.3-.21.11-.09a2.4 2.4 0 00.36-.41L221.82 352l17.53-23z" } }, { "tag": "path", "attr": { "d": "M319.5 256.93l-.46.6L264.51 329h109.8a20 20 0 0020-20V203a20 20 0 00-20-20H274.05l-9.74 34.73h35.24A24.35 24.35 0 01321 230.5a25.21 25.21 0 01-1 25.79zM480 202.67a16 16 0 00-16 16v74.66a16 16 0 0032 0v-74.66a16 16 0 00-16-16z" } }] })(props);
}
function IoBatteryChargingSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M306.68 237.62h-66.5l15.33-54.7 6.43-22.92 3.94-14 4.29-15.33a3.56 3.56 0 00.06-.44v-.19a1.85 1.85 0 000-.23 2 2 0 000-.24v-.14c0-.1-.07-.19-.11-.29v-.05a2.33 2.33 0 00-2-1.35h-.1a2.25 2.25 0 00-1.8 1l-12.5 17.15-18.82 25.55-8.36 11.48-35.41 48.6L160 274.26h66.44l-30 107a3.93 3.93 0 00-.06.48v.1a1.94 1.94 0 000 .34.29.29 0 000 .09 3 3 0 00.07.32v.06a1.83 1.83 0 00.14.32 2.38 2.38 0 001.52 1.16h.57a2.1 2.1 0 001.31-.5l.06-.05a2.6 2.6 0 00.42-.45L223.3 352l13-17.82z" } }, { "tag": "path", "attr": { "d": "M289.78 134.55l-.14.74-.21.73-6.72 24H417V352H248.05l-23.33 32H449V128H290.13a22.62 22.62 0 01-.35 6.55zM49 160h169.49l23.31-32H17v256h159.49a22.73 22.73 0 01.34-6.67l.15-.75.2-.73 6.69-23.85H49z" } }, { "tag": "path", "attr": { "d": "M264.76 329.08h130.55V182.92H276.28l-9.73 34.7H346l-23.16 31.78-58.08 79.68zM160 294.26h-39.31l23.15-31.78 57.95-79.56H70.69v146.16h119.6l9.77-34.82H160zm305-91.59h32v106.67h-32z" } }] })(props);
}
function IoBatteryCharging(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 322.3V189.7A29.74 29.74 0 0177.7 160h137.44l24.4-32H77.7A61.77 61.77 0 0016 189.7v132.6A61.77 61.77 0 0077.7 384h96.85a22.57 22.57 0 01.26-7.32l.15-.75.21-.73 6.5-23.2H77.7A29.74 29.74 0 0148 322.3zM386.3 128h-98.64a22.69 22.69 0 01-.27 7.2l-.15.74-.21.73-6.54 23.33H386.3a29.74 29.74 0 0129.7 29.7v132.6a29.74 29.74 0 01-29.7 29.7H247l-24.42 32H386.3a61.77 61.77 0 0061.7-61.7V189.7a61.77 61.77 0 00-61.7-61.7z" } }, { "tag": "path", "attr": { "d": "M162.65 294.16a24.37 24.37 0 01-21.56-13 25 25 0 011.42-25.83l.31-.46.33-.44L197.62 183H89.69a20 20 0 00-20 20v106a20 20 0 0020 20h98.42l9.78-34.86z" } }, { "tag": "path", "attr": { "d": "M276.07 280.89l27.07-35.49a5.2 5.2 0 00.77-1.91 5 5 0 00.08-.66 5 5 0 00-.08-1.29 5.11 5.11 0 00-.68-1.75 4.76 4.76 0 00-.78-.95 3.48 3.48 0 00-.48-.38 4 4 0 00-1.11-.55 4.28 4.28 0 00-1.31-.2h-61.62l12.12-43.21 3.23-11.5 6.21-22.16.51-1.84 7.79-27.76a3.51 3.51 0 00.05-.55v-.16c0-.05 0-.26-.05-.38s0-.09 0-.14a2.2 2.2 0 00-.17-.45 3.77 3.77 0 00-.26-.39l-.09-.1a2.73 2.73 0 00-.25-.23l-.1-.08a3.14 3.14 0 00-.39-.24 2 2 0 00-.41-.14h-.59a2.3 2.3 0 00-.45 0 1.9 1.9 0 00-.42.15l-.13.07-.3.21-.11.1a2.4 2.4 0 00-.36.41l-18 23.63-13.14 17.22-9.85 12.83-63.71 83.55a5.72 5.72 0 00-.44.8 4.78 4.78 0 00-.35 1.09 4.7 4.7 0 00-.08 1.29 4.86 4.86 0 002 3.71 4.74 4.74 0 00.54.31 4.31 4.31 0 001.89.43h61.62L194.42 380.6a3.64 3.64 0 000 .56v.15a2.32 2.32 0 00.06.38.58.58 0 000 .14 2.2 2.2 0 00.17.45 3.62 3.62 0 00.26.38l.09.1.25.24a.39.39 0 01.1.08 2.22 2.22 0 00.39.23 2.83 2.83 0 00.41.14h.13a1.86 1.86 0 00.33 0h.13a2.32 2.32 0 00.45-.06 2.05 2.05 0 00.41-.16l.13-.07.3-.21.11-.09a2.4 2.4 0 00.36-.41L221.82 352l17.53-23z" } }, { "tag": "path", "attr": { "d": "M319.5 256.93l-.46.6L264.51 329h109.8a20 20 0 0020-20V203a20 20 0 00-20-20H274.05l-9.74 34.73h35.24A24.35 24.35 0 01321 230.5a25.21 25.21 0 01-1 25.79zM480 202.67a16 16 0 00-16 16v74.66a16 16 0 0032 0v-74.66a16 16 0 00-16-16z" } }] })(props);
}
function IoBatteryDeadOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "400", "height": "224", "x": "31", "y": "144", "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "45.7", "ry": "45.7" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M479 218.67v74.66" } }] })(props);
}
function IoBatteryDeadSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M32 144h400v224H32zm448 74.67v74.66" } }] })(props);
}
function IoBatteryDead(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "400", "height": "224", "x": "31", "y": "144", "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "45.7", "ry": "45.7" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M479 218.67v74.66" } }] })(props);
}
function IoBatteryFullOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "400", "height": "224", "x": "32", "y": "144", "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "45.7", "ry": "45.7" } }, { "tag": "rect", "attr": { "width": "292.63", "height": "114.14", "x": "85.69", "y": "198.93", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "4", "ry": "4" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M480 218.67v74.66" } }] })(props);
}
function IoBatteryFullSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M17 384h432V128H17zm32-224h368v192H49z" } }, { "tag": "path", "attr": { "d": "M70.69 182.94h324.63v146.13H70.69zM465 202.67h32v106.67h-32z" } }] })(props);
}
function IoBatteryFull(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "400", "height": "224", "x": "32", "y": "144", "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "45.7", "ry": "45.7" } }, { "tag": "rect", "attr": { "width": "292.63", "height": "114.14", "x": "85.69", "y": "198.93", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "4", "ry": "4" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M480 218.67v74.66" } }] })(props);
}
function IoBatteryHalfOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "400", "height": "224", "x": "32", "y": "144", "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "45.7", "ry": "45.7" } }, { "tag": "rect", "attr": { "width": "154.31", "height": "114.13", "x": "85.69", "y": "198.93", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "4", "ry": "4" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M480 218.67v74.66" } }] })(props);
}
function IoBatteryHalfSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M17 384h432V128H17zm32-224h368v192H49z" } }, { "tag": "path", "attr": { "d": "M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z" } }] })(props);
}
function IoBatteryHalf(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "400", "height": "224", "x": "32", "y": "144", "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "45.7", "ry": "45.7" } }, { "tag": "rect", "attr": { "width": "154.31", "height": "114.13", "x": "85.69", "y": "198.93", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "4", "ry": "4" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M480 218.67v74.66" } }] })(props);
}
function IoBeakerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M445.2 48.05L398 48H128c-54.3 0-64 35.7-64 48 30.3 4.2 48 8 48 40v264a64 64 0 0064 64h192a64 64 0 0064-64V96c0-19 11.5-38.35 12.6-40 1.2-1.9 3.4-4.4 3.4-5.5s-.3-2.45-2.8-2.45zM112 176h320" } }] })(props);
}
function IoBeakerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M453.55 54.7L464 32H128.4c-27.74 0-49 6.57-63.31 19.51C54.39 61.27 48 74.89 48 88v24h16c31 0 32 16.79 32 35v313a20 20 0 0020 20h312a20 20 0 0020-20V96c0-17.16 2.28-34.14 5.55-41.3zM416 96v64H128v-22c0-36.15-21-51-41.77-53.46C89 70 105.7 64.05 128.4 64.05h289.92A221.83 221.83 0 00416 96z" } }] })(props);
}
function IoBeaker(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M444 32H128c-19.38 0-45.9 4.34-64.11 24.77C52.17 69.92 48 85.66 48 96a16 16 0 0013.8 15.85C91.7 116 96 117.79 96 136v264a80.07 80.07 0 0080 80h192a80.11 80.11 0 0080-80V96c0-12.55 7.46-27.25 10-31.36l.1-.14c.22-.35.5-.72.78-1.1 2-2.79 5.09-7 5.09-12.95C464 39.79 454.89 32 444 32zM84.11 83.08c5.24-8.87 17.17-19 44.29-19h294.43C419.3 72.87 416 84.27 416 96v64H128v-24c0-37.32-21.35-48.14-43.89-52.92z" } }] })(props);
}
function IoBedOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16m0 0v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16" } }] })(props);
}
function IoBedSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 224V96a16 16 0 00-16-16H96a16 16 0 00-16 16v128a48 48 0 00-48 48v160h36v-32h376v32h36V272a48 48 0 00-48-48zm-192 0H120v-32a16 16 0 0116-16h88a16 16 0 0116 16zm32-32a16 16 0 0116-16h88a16 16 0 0116 16v32H272z" } }] })(props);
}
function IoBed(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 230.7a79.44 79.44 0 00-32-6.7H112a79.51 79.51 0 00-32 6.69A80.09 80.09 0 0032 304v112a16 16 0 0032 0v-8a8.1 8.1 0 018-8h368a8.1 8.1 0 018 8v8a16 16 0 0032 0V304a80.09 80.09 0 00-48-73.3zM376 80H136a56 56 0 00-56 56v72a4 4 0 005.11 3.84A95.5 95.5 0 01112 208h4.23a4 4 0 004-3.55A32 32 0 01152 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h24.46a4 4 0 004-3.55A32 32 0 01304 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h4.2a95.51 95.51 0 0126.89 3.85A4 4 0 00432 208v-72a56 56 0 00-56-56z" } }] })(props);
}
function IoBeerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 200v240a40.12 40.12 0 01-40 40H136a40.12 40.12 0 01-40-40V224" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M352 224h40a56.16 56.16 0 0156 56v80a56.16 56.16 0 01-56 56h-40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M224 256v160m64-160v160M160 256v160m160-304a48 48 0 010 96c-13.25 0-29.31-7.31-38-16H160c-8 22-27 32-48 32a48 48 0 010-96 47.91 47.91 0 0126 9" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M91.86 132.43a40 40 0 1160.46-52S160 91 160 96m-14.17-31.29C163.22 44.89 187.57 32 216 32c52.38 0 94 42.84 94 95.21a95 95 0 01-1.67 17.79" } }] })(props);
}
function IoBeerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 208h-80v-5.74A63.93 63.93 0 00321.65 96a111 111 0 00-27.59-47.29A108.62 108.62 0 00216 16c-29.91 0-57.78 12.28-79 34.67a56 56 0 00-67.51 77.51c-1 .86-1.91 1.74-2.83 2.66A63.56 63.56 0 0048 176.26a62.65 62.65 0 0020.77 46.54A65 65 0 0080 231v249a16 16 0 0016 16h256a16 16 0 0016-16v-48h80a16 16 0 0016-16V224a16 16 0 00-16-16zM176 432h-32V240h32zm64 0h-32V240h32zm64 0h-32V240h32zm16-240c-8.33 0-20.55-5.18-26.69-11.31l-4.68-4.69H148.79L145 186.53c-5.81 16-18.83 20.41-28.73 21.29a34.08 34.08 0 01-25.91-8.67 31 31 0 01-10.32-23 31.8 31.8 0 019.33-22.71c.16-.17.33-.32.5-.49A31.78 31.78 0 01112 144c.09 0 9.12.34 16.4 5.8l12.8 9.6 19.2-25.6-12.8-9.6A63.69 63.69 0 00112 112a64.79 64.79 0 00-14 1.55 24 24 0 0141.4-23.68l.23.35.4.46a35.78 35.78 0 015 8.94l5.62 15 30-11.24-5.62-15a68.2 68.2 0 00-10-17.74c-.38-.52-.79-1-1.19-1.51C178.38 55.45 196.64 48 216 48a76.86 76.86 0 0155.23 23.18A80.2 80.2 0 01292.61 142l-3 15.72 31.43 6 3-15.72a111.78 111.78 0 001.96-19.43 32 32 0 01-6 63.43zm112 208h-64V240h64z" } }] })(props);
}
function IoBeer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M392 208h-24v-5.74A63.93 63.93 0 00321.65 96a111 111 0 00-27.59-47.29A108.62 108.62 0 00216 16c-29.91 0-57.78 12.28-79 34.68a56 56 0 00-67.51 77.54A63.91 63.91 0 0080 231.39V440a56.06 56.06 0 0056 56h176a56.06 56.06 0 0056-56v-8h24a72.08 72.08 0 0072-72v-80a72.08 72.08 0 00-72-72zM176 416a16 16 0 01-32 0V256a16 16 0 0132 0zm64 0a16 16 0 01-32 0V256a16 16 0 0132 0zm64 0a16 16 0 01-32 0V256a16 16 0 0132 0zm16-224c-8.33 0-20.55-5.18-26.69-11.31A16 16 0 00282 176H160a16 16 0 00-15 10.53c-6.83 18.68-23.6 21.47-33 21.47a32 32 0 010-64c.09 0 9.12.34 16.4 5.8a16 16 0 1019.2-25.6A63.69 63.69 0 00112 112a63.55 63.55 0 00-14 1.57A24 24 0 01120 80a23.78 23.78 0 0119.38 9.84 51.35 51.35 0 014.71 7.9A16 16 0 00176 96c0-6.77-3.61-15.17-10.76-25-.46-.63-1-1.25-1.45-1.86C178.39 55.44 196.64 48 216 48a76.86 76.86 0 0155.23 23.18A80.2 80.2 0 01292.61 142a16 16 0 0012.73 18.71 16.29 16.29 0 003 .28 16 16 0 0015.7-13 111.78 111.78 0 001.96-19.42 32 32 0 01-6 63.43zm112 168a40 40 0 01-40 40h-24V240h24a40 40 0 0140 40z" } }] })(props);
}
function IoBicycleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M388 288a76 76 0 1076 76 76.24 76.24 0 00-76-76zm-264 0a76 76 0 1076 76 76.24 76.24 0 00-76-76z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 360v-86l-64-42 80-88 40 72h56" } }, { "tag": "path", "attr": { "d": "M320 136a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 72a32 32 0 10-.2 64z" } }] })(props);
}
function IoBicycleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M320 192l-29.5-60.1C284.32 118 284.32 118 264 118c-13.26 0-14.76 0-23 7.3l-71.7 69.1c-8.3 8.45-9.3 9.45-9.3 26.6 0 12.67 3.78 14.61 18.51 22.9L240 278v90h32V254s-29-17-48.3-30l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H384v-32z" } }, { "tag": "path", "attr": { "d": "M388 448a92 92 0 1192-92 92.1 92.1 0 01-92 92zm0-152a60 60 0 1060 60 60.07 60.07 0 00-60-60zM124 448a92 92 0 1192-92 92.1 92.1 0 01-92 92zm0-152a60 60 0 1060 60 60.07 60.07 0 00-60-60zm196-168a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 64a32 32 0 10-.2 64z" } }] })(props);
}
function IoBicycle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M388 448a92 92 0 1192-92 92.1 92.1 0 01-92 92zm0-152a60 60 0 1060 60 60.07 60.07 0 00-60-60zM124 448a92 92 0 1192-92 92.1 92.1 0 01-92 92zm0-152a60 60 0 1060 60 60.07 60.07 0 00-60-60zm196-168a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 64a32 32 0 10-.2 64z" } }, { "tag": "path", "attr": { "d": "M367.55 192h-43.76a4 4 0 01-3.51-2.08l-31.74-58.17a31 31 0 00-49.38-7.75l-69.86 70.4a32.56 32.56 0 00-9.3 22.4c0 17.4 12.6 23.6 18.5 27.1 28.5 16.42 48.57 28.43 59.58 35.1a4 4 0 011.92 3.41v69.12c0 8.61 6.62 16 15.23 16.43A16 16 0 00272 352v-86a16 16 0 00-6.66-13l-37-26.61a4 4 0 01-.58-6l42-44.79a4 4 0 016.42.79L298 215.77a16 16 0 0014 8.23h56a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z" } }] })(props);
}
function IoBluetoothOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M144 352l224-192L256 48v416l112-112-224-192" } }] })(props);
}
function IoBluetoothSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M397.41 161.13L236-.28v212.8l-94.17-80.72-26 30.37L225.27 256 115.8 349.83l26 30.37 94.2-80.72v212.8l161.41-161.41L286.73 256zM276 96.28l62.59 62.59L276 212.52zm62.58 256.85L276 415.72V299.48z" } }] })(props);
}
function IoBluetooth(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M388 160.77a20 20 0 00-5.85-14.91l-112-112A20 20 0 00236 48v164.52l-79-67.71a20 20 0 00-26 30.38L225.27 256 131 336.81a20 20 0 1026 30.38l79-67.71V464a20 20 0 0034.14 14.14l112-112a20 20 0 00-1.14-29.33L286.73 256 381 175.19a20 20 0 007-14.42zm-49.42 192.36L276 415.72V299.49zM276 212.52V96.28l62.59 62.59z" } }] })(props);
}
function IoBoatOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M461.93 261.05c-2-4.76-6.71-7.83-11.67-9.49l-187.18-74.48a23.78 23.78 0 00-14.17 0l-187 74.52c-5 1.56-9.83 4.77-11.81 9.53s-2.94 9.37-1 15.08l46.53 119.15a7.46 7.46 0 007.47 4.64c26.69-1.68 50.31-15.23 68.38-32.5a7.66 7.66 0 0110.49 0C201.29 386 227 400 256 400s54.56-14 73.88-32.54a7.67 7.67 0 0110.5 0c18.07 17.28 41.69 30.86 68.38 32.54a7.45 7.45 0 007.46-4.61l46.7-119.16c1.98-4.78.99-10.41-.99-15.18z" } }, { "tag": "path", "attr": { "d": "M416 473.14a6.84 6.84 0 00-3.56-6c-27.08-14.55-51.77-36.82-62.63-48a10.05 10.05 0 00-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 00-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.15 7.15 0 00-3.89 5.73 6.73 6.73 0 007.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 018-.06A185.14 185.14 0 00340 456a8.82 8.82 0 018.09.06c19.1 10 39.22 19.59 60 23.8a6.72 6.72 0 007.95-6.71z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 96V72a24.07 24.07 0 00-24-24h-80a24.07 24.07 0 00-24 24v24m224 137v-89a48.14 48.14 0 00-48-48H144a48.14 48.14 0 00-48 48v92m160-52.4v212.85" } }] })(props);
}
function IoBoatSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M477.77 246.42c-2.13-6-7.23-9.55-12.56-11.95L432 221.38V92a20 20 0 00-20-20h-76V40a16 16 0 00-16-16H192a16 16 0 00-16 16v32h-76a20 20 0 00-20 20v129.46l-33.08 13.06c-5.33 2.4-10.58 6-12.72 12s-3.16 11.81-1 19L84.25 415.7h1.06c34.12 0 64-17.41 85.31-43.82 21.32 26.41 51.18 42.12 85.3 42.12s64-15.76 85.31-42.17c21.32 26.41 51.18 43.87 85.3 43.87h1.06l51.25-150.17c2.16-6 1.07-13.1-1.07-19.11zM256 152l-144 56.83V108a4 4 0 014-4h280a4 4 0 014 4v100.76z" } }, { "tag": "path", "attr": { "d": "M345.22 407c-52.25 36.26-126.35 36.25-178.6 0 0 0-45.64 63-94.64 63l13.33 1c29.86 0 58.65-11.73 85.31-25.59a185.33 185.33 0 00170.6 0c26.66 13.87 55.45 25.6 85.31 25.6l13.33-1C392.21 470 345.22 407 345.22 407z" } }] })(props);
}
function IoBoat(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 473.14a6.83 6.83 0 00-3.57-6c-27.07-14.55-51.76-36.82-62.62-48a10.05 10.05 0 00-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 00-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.11 7.11 0 00-3.89 5.73 6.73 6.73 0 007.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 018-.06 185.14 185.14 0 00167.81 0 8.82 8.82 0 018.09.06c19.1 10 39.22 19.59 60 23.8a6.73 6.73 0 008-6.71zm60.71-226.23c-3.49-8.39-10.9-14.89-20.9-18.35L432 219.08V136a64 64 0 00-64-64h-32v-8a40 40 0 00-40-40h-80a40 40 0 00-40 40v8h-32a64 64 0 00-64 64v83.15l-23.58 9.39c-9.94 3.3-17.63 10-21.15 18.44-2.45 5.89-5.25 15-1.3 26.46l.1.3 46.66 119.44A23.33 23.33 0 00102.58 408c.5 0 1 0 1.53-.05 31.32-2 56-17.27 72.6-31.61C200.42 396.81 228.31 408 256 408s55.43-11.2 79.14-31.7c16.59 14.36 41.3 29.67 72.61 31.65a23.36 23.36 0 0023.37-14.74l46.65-119c3.28-8.09 2.9-17.76-1.06-27.3zM269 154.21l-1.14-.4a39.53 39.53 0 00-23.73 0l-.58.18-126.07 50.23a4 4 0 01-5.48-3.72V136a32 32 0 0132-32h224a32 32 0 0132 32v64.44a4 4 0 01-5.48 3.72z" } }] })(props);
}
function IoBodyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "56", "r": "40", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M199.3 295.62h0l-30.4 172.2a24 24 0 0019.5 27.8 23.76 23.76 0 0027.6-19.5l21-119.9v.2s5.2-32.5 17.5-32.5h3.1c12.5 0 17.5 32.5 17.5 32.5v-.1l21 119.9a23.92 23.92 0 1047.1-8.4l-30.4-172.2-4.9-29.7c-2.9-18.1-4.2-47.6.5-59.7 4-10.4 14.13-14.2 23.2-14.2H424a24 24 0 000-48H88a24 24 0 000 48h92.5c9.23 0 19.2 3.8 23.2 14.2 4.7 12.1 3.4 41.6.5 59.7z" } }] })(props);
}
function IoBodySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "56", "r": "56" } }, { "tag": "path", "attr": { "d": "M464 128H48v52h144l-32 325.13 51 6.87 21.65-192h47.02L301 512l51-6.98L320 180h144v-52z" } }] })(props);
}
function IoBody(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "56", "r": "56" } }, { "tag": "path", "attr": { "d": "M437 128H75a27 27 0 000 54h101.88c6.91 0 15 3.09 19.58 15 5.35 13.83 2.73 40.54-.57 61.23l-4.32 24.45a.42.42 0 01-.12.35l-34.6 196.81A27.43 27.43 0 00179 511.58a27.06 27.06 0 0031.42-22.29l23.91-136.8S242 320 256 320c14.23 0 21.74 32.49 21.74 32.49l23.91 136.92a27.24 27.24 0 1053.62-9.6L320.66 283a.45.45 0 00-.11-.35l-4.33-24.45c-3.3-20.69-5.92-47.4-.57-61.23 4.56-11.88 12.91-15 19.28-15H437a27 27 0 000-54z" } }] })(props);
}
function IoBonfireOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M273.38 368.33c-.81-9.23-8.86-16.44-18.55-16.44a18.63 18.63 0 00-18.2 14.11l-18.2 88.38a35.75 35.75 0 00-.93 7.88c0 19.93 16.68 33.78 37.33 33.78s37.34-13.85 37.34-33.78a36.16 36.16 0 00-1.29-9.45zm137.67 39.53a41.78 41.78 0 00-5.95-4.35l-69.53-48.59c-6.77-4.25-14-4.13-19.25 1a13.53 13.53 0 00-2 17.2l52.5 69a36.57 36.57 0 004 4.69c9.1 10.17 29.28 10.73 40.37 0 10.94-10.91 10.81-30.35-.14-38.95zm52.25-71.98h-70.42c-4.55 0-8.88 3.35-8.88 8.16s2.95 7.85 6.92 9.16l66.43 20.55C467 376 480 367.4 480 356.66c0-13.66-7.6-20.78-16.7-20.78zM128.22 344c0-5-4.55-8.16-9.45-8.16H48.35c-8.87 0-16.35 9.58-16.35 20.32S44.62 376 54.3 373.75l67.43-20.55c4.39-1.31 6.49-4.2 6.49-9.2zm48.33 11L107 403.38a32.34 32.34 0 00-6 4.35 26.33 26.33 0 000 38.56 29.39 29.39 0 0040.36 0 30.75 30.75 0 004-4.68L197.9 373c3.5-5.58 2.92-12.49-2-17.06a15 15 0 00-19.35-.94z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M368 125.09c0-55.7-49.22-89.16-94.2-93.06a8 8 0 00-8.69 7.71c-3.12 76-109.38 110.69-119.87 178.68-7 45.4 16.65 72.37 34.31 85.78a15.94 15.94 0 0023.93-5.62c22.5-45.86 74.33-63.49 109.72-85.94 42.88-27.2 54.8-56.44 54.8-87.55z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M240 95.7c-12.82-23-30.51-31-59.16-31.63a3.86 3.86 0 00-4.06 3.51c-.95 34.22-32.78 44.85-32.78 73.15 0 19.37 5.39 29 17.16 39.28m191.29-1.25c8.6 14.31 15.55 30.08 15.55 48 0 52.52-42.47 93.1-94.86 93.1a94.42 94.42 0 01-65.14-26" } }] })(props);
}
function IoBonfireSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M199.89 336l-15.25-5.62a100.35 100.35 0 01-32-23.08c-13.93-14.9-29.29-40.71-23.38-79.11 5.2-33.73 44.2-74.21 69.34-97.87 27.24-25.62 66-65.85 64.15-99.15L262 16h15.18C328.53 16 384 53.62 384 114.41c0 45.57-22 77.61-68.91 106.9-8 5-16.44 9.66-25.42 14.53-30.63 16.62-75.29 49.83-85.73 85.32zm-18.7-222.41C201 95 218.91 78.15 227.62 59.79q-2.76-1.68-5.7-3.09c-11.87-5.69-26.1-8.34-44.76-8.34h-16.94l.56 16.49c.47 14.06-6.06 22.51-14.33 33.21C137.8 109.26 128 121.94 128 141c0 10.23 1.29 18.76 4.2 26.36q3.5-5.31 7.61-10.63c12.19-15.73 27.05-29.68 41.38-43.14z" } }, { "tag": "path", "attr": { "d": "M330.34 239.85c-9.31 5.9-19 11.14-29.25 16.71-32.65 17.69-63.48 34.44-73.23 67.44l-.6 2a110.5 110.5 0 0045.87 10c29.66 0 57.45-11.13 78.24-31.36A107.38 107.38 0 00384 227a92.39 92.39 0 00-5.59-31c-11.35 16.18-27.14 30.58-48.07 43.85zM268.72 360h-25.44a4 4 0 00-3.92 3.22l-25.36 128a4 4 0 003.92 4.78h76.26a4 4 0 003.92-4.78l-25.41-128a4 4 0 00-3.97-3.22zm56.96-5.68l-11.36 11.36a4 4 0 00-.5 5.05l59.47 89.21a4 4 0 006.16.61l41.1-41.1a4 4 0 00-.61-6.16l-89.21-59.47a4 4 0 00-5.05.5zM388 336a4 4 0 00-4 4v8.61a4 4 0 003.34 3.95l88 14.66a4 4 0 004.66-3.94V340a4 4 0 00-4-4zm-201.68 18.32l11.36 11.36a4 4 0 01.5 5.05l-59.47 89.21a4 4 0 01-6.16.61l-41.1-41.1a4 4 0 01.61-6.16l89.21-59.47a4 4 0 015.05.5zM124 336H36a4 4 0 00-4 4v23.28a4 4 0 004.66 3.94l88-14.66a4 4 0 003.34-3.95V340a4 4 0 00-4-4z" } }] })(props);
}
function IoBonfire(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M273.38 368.37c-.81-9.23-8.86-16.44-18.55-16.44a18.63 18.63 0 00-18.2 14.07l-18.2 88.36a35.59 35.59 0 00-.93 7.87c0 19.93 16.68 33.77 37.33 33.77s37.34-13.84 37.34-33.77a36.16 36.16 0 00-1.29-9.45zm137.67 39.52a42.66 42.66 0 00-5.95-4.36L335.57 355c-6.77-4.24-14-4.13-19.25 1a13.52 13.52 0 00-2 17.19l52.5 69a38 38 0 004 4.69c9.1 10.16 29.28 10.72 40.37 0 10.94-10.96 10.81-30.39-.14-38.99zm52.25-71.96h-70.42c-4.55 0-8.88 3.35-8.88 8.15s2.95 7.85 6.92 9.16l66.43 20.55C467 376 480 367.44 480 356.71c0-13.63-7.6-20.78-16.7-20.78zm-335.08 8.15c0-4.95-4.55-8.15-9.45-8.15H48.35c-8.87 0-16.35 9.58-16.35 20.31S44.62 376 54.3 373.79l67.43-20.55c4.39-1.31 6.49-4.24 6.49-9.16zm48.33 10.97L107 403.41a32.29 32.29 0 00-6 4.34 26.33 26.33 0 000 38.56 29.41 29.41 0 0040.36 0 30.75 30.75 0 004-4.68L197.9 373c3.5-5.57 2.92-12.48-2-17a15 15 0 00-19.35-.95zm116.91-112.66c10-5.42 19.45-10.54 28.31-16.16 42.46-26.92 62.23-59 62.23-101 0-64.66-56.07-104.4-108.82-109-6.49-.57-15-.42-19.91 3.88s-5.88 12.56-6.15 19.1c-1.38 33.61-28.38 59-57 85.86-28 26.3-56.93 53.49-62.71 91-8.41 54.68 21.74 86.71 40.46 100.93a31.88 31.88 0 0019.3 6.51 32.32 32.32 0 007.41-.87 31.75 31.75 0 0021.27-16.95c14.91-30.39 45.77-47.12 75.61-63.3z" } }, { "tag": "path", "attr": { "d": "M139.82 156.57c12.22-15.76 27-29.68 41.37-43.15 19.92-18.72 37.81-35.58 46.5-53.86-12.24-7.37-27.36-11.36-46.51-11.36-17.79 0-20.39 5.18-20.39 19.06 0 12.56-6.53 20.54-14.34 30.65C137.8 109.1 128 121.77 128 140.84c0 10.23 1.29 18.77 4.2 26.37q3.5-5.32 7.62-10.64zm190.52 83.17c-9.33 5.92-19 11.16-29.25 16.71-28.91 15.68-56.21 30.48-68.88 56.28a62.6 62.6 0 01-1.88 3.61 8 8 0 003.89 11.3c12.31 5.1 25.13 8.27 38.91 8.27a111.42 111.42 0 0078.24-31.37A107.45 107.45 0 00384 226.85a86.56 86.56 0 00-1.33-15 8 8 0 00-13.8-4c-10.18 11.47-22.93 22-38.53 31.89z" } }] })(props);
}
function IoBookOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zm0 0v288" } }] })(props);
}
function IoBookSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z" } }] })(props);
}
function IoBook(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 00-17.92 5.33A32 32 0 0016 79.9V366c0 19.34 13.76 33.93 32 33.93 71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 006.94-3V106.82a15.89 15.89 0 00-5.46-12A143 143 0 00202.24 74zm279.68-20.7A31.33 31.33 0 00464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 00-32.31 20.78 15.93 15.93 0 00-5.45 12v337.13a3.93 3.93 0 006.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0032-32v-288a32 32 0 00-14.12-26.61z" } }] })(props);
}
function IoBookmarkOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" } }] })(props);
}
function IoBookmarkSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 480L256 357.41 96 480V32h320z" } }] })(props);
}
function IoBookmark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z" } }] })(props);
}
function IoBookmarksOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z" } }] })(props);
}
function IoBookmarksSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M112 0v48h304v368l48 32V0H112z" } }, { "tag": "path", "attr": { "d": "M48 80v432l168-124 168 124V80H48z" } }] })(props);
}
function IoBookmarks(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M400 0H176a64.11 64.11 0 00-62 48h228a74 74 0 0174 74v304.89l22 17.6a16 16 0 0019.34.5 16.41 16.41 0 006.66-13.42V64a64 64 0 00-64-64z" } }, { "tag": "path", "attr": { "d": "M320 80H112a64 64 0 00-64 64v351.62A16.36 16.36 0 0054.6 509a16 16 0 0019.71-.71L216 388.92l141.69 119.32a16 16 0 0019.6.79 16.4 16.4 0 006.71-13.44V144a64 64 0 00-64-64z" } }] })(props);
}
function IoBowlingBallOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "288", "cy": "200", "r": "24" } }, { "tag": "circle", "attr": { "cx": "296", "cy": "128", "r": "24" } }, { "tag": "circle", "attr": { "cx": "360", "cy": "168", "r": "24" } }] })(props);
}
function IoBowlingBallSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM286 230a28 28 0 1128-28 28 28 0 01-28 28zm8-76a28 28 0 1128-28 28 28 0 01-28 28zm68 44a28 28 0 1128-28 28 28 0 01-28 28z" } }] })(props);
}
function IoBowlingBall(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM288 224a24 24 0 1124-24 24 24 0 01-24 24zm8-72a24 24 0 1124-24 24 24 0 01-24 24zm64 40a24 24 0 1124-24 24 24 0 01-24 24z" } }] })(props);
}
function IoBriefcaseOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "448", "height": "320", "x": "32", "y": "128", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32m112 112H32m288 0v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24" } }] })(props);
}
function IoBriefcaseSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 288H176v-32H16v196a12 12 0 0012 12h456a12 12 0 0012-12V256H336zm160-164a12 12 0 00-12-12H384V56a8 8 0 00-8-8H136a8 8 0 00-8 8v56H28a12 12 0 00-12 12v100h480zm-152-12H168V88h176z" } }] })(props);
}
function IoBriefcase(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M336 80H176a16 16 0 00-16 16v16h192V96a16 16 0 00-16-16z" } }, { "tag": "path", "attr": { "d": "M496 176a64.07 64.07 0 00-64-64h-48V96a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v48h480zm-144-64H160V96a16 16 0 0116-16h160a16 16 0 0116 16zm-16 152a24 24 0 01-24 24H200a24 24 0 01-24-24v-4a4 4 0 00-4-4H16v144a64 64 0 0064 64h352a64 64 0 0064-64V256H340a4 4 0 00-4 4z" } }] })(props);
}
function IoBrowsersOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "384", "x": "48", "y": "64", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "path", "attr": { "d": "M397.82 64H114.18C77.69 64 48 94.15 48 131.2V176h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-44.8c0-37.05-29.69-67.2-66.18-67.2z" } }] })(props);
}
function IoBrowsersSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 64v384a16 16 0 0016 16h416a16 16 0 0016-16V64a16 16 0 00-16-16H48a16 16 0 00-16 16zm408 364H72a4 4 0 01-4-4V152a4 4 0 014-4h368a4 4 0 014 4v272a4 4 0 01-4 4z" } }] })(props);
}
function IoBrowsers(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 48H96a64 64 0 00-64 64v288a64 64 0 0064 64h320a64 64 0 0064-64V112a64 64 0 00-64-64zm24 96H72a8 8 0 01-8-8v-24a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v24a8 8 0 01-8 8z" } }] })(props);
}
function IoBrushOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M452.37 59.63h0a40.49 40.49 0 00-57.26 0L184 294.74c23.08 4.7 46.12 27.29 49.26 49.26l219.11-227.11a40.49 40.49 0 000-57.26zM138 336c-29.88 0-54 24.5-54 54.86 0 23.95-20.88 36.57-36 36.57C64.56 449.74 92.82 464 120 464c39.78 0 72-32.73 72-73.14 0-30.36-24.12-54.86-54-54.86z" } }] })(props);
}
function IoBrushSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 96l-64-64-244 260 64 64zM142 320c-36.52 0-66 30.63-66 68.57 0 25.43-31 45.72-44 45.72C52.24 462.17 86.78 480 120 480c48.62 0 88-40.91 88-91.43 0-37.94-29.48-68.57-66-68.57z" } }] })(props);
}
function IoBrush(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M233.15 360.11a15.7 15.7 0 01-4.92-.77 16 16 0 01-10.92-13c-2.15-15-19.95-32.46-36.62-35.85a16 16 0 01-8.69-26.33l211.09-235.1c.19-.22.39-.43.59-.63a56.57 56.57 0 0179.89 0 56.51 56.51 0 01.11 79.78l-219 227a16 16 0 01-11.53 4.9zm-113.26 120c-32.14 0-65.45-16.89-84.85-43a16 16 0 0112.85-25.54c5.34 0 20-4.87 20-20.57 0-39.07 31.4-70.86 70-70.86s70 31.79 70 70.86c0 49.12-39.48 89.11-88 89.11z" } }] })(props);
}
function IoBugOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M370 378c28.89 23.52 46 46.07 46 86m-274-86c-28.89 23.52-46 46.06-46 86m288-256c28.89-23.52 32-56.07 32-96m-288 94c-28.89-23.52-32-54.06-32-94m368 176.13h-80m-256 0H48M256 192v256" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 448h0c-70.4 0-128-57.6-128-128v-96.07c0-65.07 57.6-96 128-96h0c70.4 0 128 25.6 128 96V320c0 70.4-57.6 128-128 128z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M179.43 143.52a49.08 49.08 0 01-3.43-15.73A80 80 0 01255.79 48h.42A80 80 0 01336 127.79a41.91 41.91 0 01-3.12 14.3" } }] })(props);
}
function IoBugSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 304.13v-32h-80V215.2c29.42-27.95 32-64.76 32-103.2V96h-32v16c0 28-1.86 48.15-9.9 63.84C368 128 324.32 112 256 112c-39.8 0-75.19 7.06-100.43 24.32-14.9 10.19-25.2 24.91-32.7 39.72C114 160.57 112 140.82 112 112V96H80v16c0 37.44 2.59 73.36 32 101.2v58.93H32v32l80-.13c0 19 3.7 53.09 10.39 69.69C96.6 396.76 80 422.31 80 464v16h32v-16c0-27.66 9.1-44.71 26.17-61.32C160 448 177 464 240 464V176h32v288c65 0 80-16 101.83-61.32C390.9 419.29 400 436.35 400 464v16h32v-16c0-41.68-16.6-67.23-42.39-90.31C396.3 357.09 400 323 400 304z" } }, { "tag": "path", "attr": { "d": "M256 32c-48.06 0-96 0-96 84 26.12-14 59.35-20 96-20 24.09 0 46.09 2.65 65.39 8 10.75 3 24.66 8.71 30.61 12 0-84-47.94-84-96-84z" } }] })(props);
}
function IoBug(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M463.55 272.13H400v-48.2q0-4.32-.27-8.47c29.57-27.88 32.25-64.63 32.27-103 0-8.61-6.64-16-15.25-16.41A16 16 0 00400 112c0 28-1.86 48.15-9.9 63.84-19.22-41.15-65.78-63.91-134.1-63.91-39.8 0-74.19 9.13-99.43 26.39-14.9 10.19-26.2 22.91-33.7 37.72C114 160.65 112 141 112 112.46c0-8.61-6.6-16-15.2-16.44A16 16 0 0080 112c0 37.63 2.61 73.73 32.44 101.63q-.43 5.06-.44 10.3v48.2H48.45c-8.61 0-16 6.62-16.43 15.23a16 16 0 0016 16.77h64V320a143.32 143.32 0 0010.39 53.69C96.74 396.64 80.18 422 80 463.34c0 8.74 6.62 16.3 15.36 16.65A16 16 0 00112 464c0-27.66 9.1-44.71 26.17-61.32A144.37 144.37 0 00220 459.42a16 16 0 0020-15.49V192.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 192v251.93a16 16 0 0020 15.49 144.4 144.4 0 0081.82-56.74c17 16.54 26.09 33.52 26.17 60.95a16.27 16.27 0 0015.1 16.37A16 16 0 00432 464c0-41.68-16.6-67.23-42.39-90.31A143.32 143.32 0 00400 320v-15.87h64a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z" } }, { "tag": "path", "attr": { "d": "M321.39 104l.32.09c13.57 3.8 25.07-10.55 18.2-22.85A95.86 95.86 0 00256.21 32h-.42a95.87 95.87 0 00-84.19 50.13c-6.84 12.58 5.14 27 18.84 22.86 19.71-6 41.79-9.06 65.56-9.06 24.09 0 46.09 2.72 65.39 8.07z" } }] })(props);
}
function IoBuildOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M393.87 190a32.1 32.1 0 01-45.25 0l-26.57-26.57a32.09 32.09 0 010-45.26L382.19 58a1 1 0 00-.3-1.64c-38.82-16.64-89.15-8.16-121.11 23.57-30.58 30.35-32.32 76-21.12 115.84a31.93 31.93 0 01-9.06 32.08L64 380a48.17 48.17 0 1068 68l153.86-167a31.93 31.93 0 0131.6-9.13c39.54 10.59 84.54 8.6 114.72-21.19 32.49-32 39.5-88.56 23.75-120.93a1 1 0 00-1.6-.26z" } }, { "tag": "circle", "attr": { "cx": "96", "cy": "416", "r": "16" } }] })(props);
}
function IoBuildSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M230 209.2L32 405.58 106.65 480l197.59-198.17c46.47 17.46 105.52 12.54 143-24.78 40.44-40.32 40.35-108 16.81-156.79l-87.33 87.06-52.32-52.13 87.33-87.06C363 24.46 294.67 24.34 254.23 64.66c-38.03 37.91-42.78 97.6-24.23 144.54z" } }] })(props);
}
function IoBuild(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M469.54 120.52a16 16 0 00-25.54-4L382.56 178a16.12 16.12 0 01-22.63 0l-26.56-26.6a16 16 0 010-22.63l61.18-61.19a16 16 0 00-4.78-25.92C343.56 21 285.88 31.78 249.51 67.88c-30.9 30.68-40.11 78.62-25.25 131.53a15.89 15.89 0 01-4.49 16L53.29 367.46a64.17 64.17 0 1090.6 90.64l153.68-166.85a15.9 15.9 0 0115.77-4.57 179.3 179.3 0 0046.22 6.37c33.4 0 62.71-10.81 83.85-31.64 39.15-38.57 45.12-103.99 26.13-140.89zM99.48 447.15a32 32 0 1128.34-28.35 32 32 0 01-28.34 28.35z" } }] })(props);
}
function IoBulbOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 00-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M294 240s-21.51 16-38 16-38-16-38-16" } }] })(props);
}
function IoBulbSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M208 464h96v32h-96zm-16-48h128v32H192zM369.42 62.69C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0096 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v40h48V269.11L195.72 244 214 217.72 256 240l41.29-22.39 19.1 25.68-44.39 26V400h48v-40c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 00-46.58-113.31z" } }] })(props);
}
function IoBulb(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M288 464h-64a16 16 0 000 32h64a16 16 0 000-32zm16-48h-96a16 16 0 000 32h96a16 16 0 000-32zm65.42-353.31C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0096 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v24a16 16 0 0016 16h24a8 8 0 008-8V274.82a8 8 0 00-5.13-7.47A130.73 130.73 0 01208.71 253a16 16 0 1118.58-26c7.4 5.24 21.65 13 28.71 13s21.31-7.78 28.73-13a16 16 0 0118.56 26 130.73 130.73 0 01-26.16 14.32 8 8 0 00-5.13 7.47V392a8 8 0 008 8h24a16 16 0 0016-16v-24c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 00-46.58-113.31z" } }] })(props);
}
function IoBusOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "352", "height": "192", "x": "80", "y": "112", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32", "ry": "32" } }, { "tag": "rect", "attr": { "width": "352", "height": "128", "x": "80", "y": "304", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32", "ry": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 112H112a32.09 32.09 0 01-32-32h0a32.09 32.09 0 0132-32h288a32.09 32.09 0 0132 32h0a32.09 32.09 0 01-32 32zM144 432v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22zm272 0v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22z" } }, { "tag": "circle", "attr": { "cx": "368", "cy": "368", "r": "16", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "144", "cy": "368", "r": "16", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 112v192M80 80v288M432 80v288" } }] })(props);
}
function IoBusSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M400 64H112a16 16 0 000 32h288a16 16 0 000-32z" } }, { "tag": "path", "attr": { "d": "M424 32H88a24 24 0 00-24 24v360a32 32 0 0016 27.71V480h72v-32h208v32h72v-36.29A32 32 0 00448 416V56a24 24 0 00-24-24zM175.82 371.47a32 32 0 11-35.3-35.29 32.09 32.09 0 0135.3 35.29zM240 288H96V128h144zm16-192H96.46L96 64h320l-.46 32H256zm16 32h144v160H272zm64.18 236.53a32 32 0 1135.3 35.29 32.09 32.09 0 01-35.3-35.29z" } }] })(props);
}
function IoBus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M400 32H112a48 48 0 00-48 48v320a47.91 47.91 0 0016 35.74V454a26 26 0 0026 26h28a26 26 0 0026-26v-6h192v6a26 26 0 0026 26h28a26 26 0 0026-26v-18.26A47.91 47.91 0 00448 400V80a48 48 0 00-48-48zM147.47 399.82a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zM236 288H112a16 16 0 01-16-16V144a16 16 0 0116-16h124a4 4 0 014 4v152a4 4 0 01-4 4zm20-192H112.46c-8.6 0-16-6.6-16.44-15.19A16 16 0 01112 64h287.54c8.6 0 16 6.6 16.44 15.19A16 16 0 01400 96H256zm20 32h124a16 16 0 0116 16v128a16 16 0 01-16 16H276a4 4 0 01-4-4V132a4 4 0 014-4zm60.18 243.47a32 32 0 1128.35 28.35 32 32 0 01-28.35-28.35z" } }] })(props);
}
function IoBusinessOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 416v64M80 32h192a32 32 0 0132 32v412a4 4 0 01-4 4H48h0V64a32 32 0 0132-32zm240 160h112a32 32 0 0132 32v256h0-160 0V208a16 16 0 0116-16z" } }, { "tag": "path", "attr": { "d": "M98.08 431.87a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm80 240a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm80 320a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79z" } }, { "tag": "ellipse", "attr": { "cx": "256", "cy": "176", "rx": "15.95", "ry": "16.03", "transform": "rotate(-45 255.99 175.996)" } }, { "tag": "path", "attr": { "d": "M258.08 111.87a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zM400 400a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16zm-64 160a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16z" } }] })(props);
}
function IoBusinessSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M320 176V16H32v480h128v-96h32v96h288V176zM112 432H80v-32h32zm0-80H80v-32h32zm0-80H80v-32h32zm0-80H80v-32h32zm0-80H80V80h32zm128-32h32v32h-32zm-48 272h-32v-32h32zm0-80h-32v-32h32zm0-80h-32v-32h32zm0-80h-32V80h32zm80 320h-32v-32h32zm0-80h-32v-32h32zm0-80h-32v-32h32zm0-80h-32v-32h32v32zm176 272H320v-32h32v-32h-32v-48h32v-32h-32v-48h32v-32h-32v-32h128z" } }, { "tag": "path", "attr": { "d": "M384 400h32v32h-32zm0-80h32v32h-32zm0-80h32v32h-32z" } }] })(props);
}
function IoBusiness(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 176H320V64a48 48 0 00-48-48H80a48 48 0 00-48 48v416a16 16 0 0016 16h104a8 8 0 008-8v-71.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01192 416v72a8 8 0 008 8h264a16 16 0 0016-16V224a48 48 0 00-48-48zM98.08 431.87a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm80 240a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm80 320a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zM444 464H320V208h112a16 16 0 0116 16v236a4 4 0 01-4 4z" } }, { "tag": "path", "attr": { "d": "M400 400a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16zm-64 160a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16z" } }] })(props);
}
function IoCafeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M368 80h64a16 16 0 0116 16v34a46 46 0 01-46 46h-34M96 80h272v192a80 80 0 01-80 80H176a80 80 0 01-80-80V80h0zM64 416h336" } }] })(props);
}
function IoCafeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 64H80v254.34a19.83 19.83 0 005.86 14.14l29.65 29.66a19.87 19.87 0 0014.15 5.86h204.68a19.87 19.87 0 0014.15-5.86l29.65-29.66a19.83 19.83 0 005.86-14.14V192h32a16 16 0 0011.31-4.69l32-32A16 16 0 00464 144V80a16 16 0 00-16-16zm-16 73.37L409.37 160H384V96h48zM48 400h368v32H48z" } }] })(props);
}
function IoCafe(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 64H96a16 16 0 00-16 16v192a96.11 96.11 0 0096 96h112a96.11 96.11 0 0096-96v-80h18a62.07 62.07 0 0062-62V96a32 32 0 00-32-32zm0 66a30 30 0 01-30 30h-18V96h48zm-32 270H64a16 16 0 000 32h336a16 16 0 000-32z" } }] })(props);
}
function IoCalculatorOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "288", "height": "416", "x": "112", "y": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32", "ry": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160.01 112H352v64H160.01z" } }, { "tag": "circle", "attr": { "cx": "168", "cy": "248", "r": "24" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "248", "r": "24" } }, { "tag": "circle", "attr": { "cx": "344", "cy": "248", "r": "24" } }, { "tag": "circle", "attr": { "cx": "168", "cy": "328", "r": "24" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "328", "r": "24" } }, { "tag": "circle", "attr": { "cx": "168", "cy": "408", "r": "24" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "408", "r": "24" } }, { "tag": "rect", "attr": { "width": "48", "height": "128", "x": "320", "y": "304", "rx": "24", "ry": "24" } }] })(props);
}
function IoCalculatorSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 48a16 16 0 00-16-16H112a16 16 0 00-16 16v416a16 16 0 0016 16h288a16 16 0 0016-16zM192 432h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48v-48h48zm0-80h-48v-48h48zm0-80h-48v-48h48zm88 160h-48V304h48zm0-160h-48v-48h48zm0-96H144V80h224z" } }] })(props);
}
function IoCalculator(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 80a48.05 48.05 0 00-48-48H144a48.05 48.05 0 00-48 48v352a48.05 48.05 0 0048 48h224a48.05 48.05 0 0048-48zM168 432a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm88 160a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm112 136a24 24 0 01-48 0v-80a24 24 0 0148 0zm-24-136a24 24 0 1124-24 24 24 0 01-24 24zm19.31-100.69A16 16 0 01352 176H160a16 16 0 01-16-16V96a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-4.69 11.31z" } }] })(props);
}
function IoCalendarClearOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "384", "x": "48", "y": "80", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128 48v32m256-32v32m80 80H48" } }] })(props);
}
function IoCalendarClearSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 456a24 24 0 0024 24h400a24 24 0 0024-24V192H32zM480 87.77A23.8 23.8 0 00456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448z" } }] })(props);
}
function IoCalendarClear(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V180a4 4 0 00-4-4H36a4 4 0 00-4 4z" } }] })(props);
}
function IoCalendarNumberOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "384", "x": "48", "y": "80", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128 48v32m256-32v32m80 80H48m256 100l43.42-32H352v168m-160.13-89.37c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48" } }] })(props);
}
function IoCalendarNumberSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 456a24 24 0 0024 24h400a24 24 0 0024-24V176H32zm310.17-244H368v200h-32V256.29l-35.39 26.08-19-25.76zM222 335.3c-8.54-8.74-22.75-12.67-30.11-12.67h-16v-32h16c4.85 0 17.41-2.6 25.28-10.65a22 22 0 006.57-16.08c0-23.23-28.63-23.9-31.89-23.9-17.34 0-23.8 10.61-24.07 11.06l-8.13 13.78-27.56-16.27 8.14-13.77c7.64-13 25.22-26.8 51.62-26.8 16.44 0 31.76 4.77 43.13 13.42 13.39 10.2 20.76 25.28 20.76 42.48A54 54 0 01240 302.35c-1.15 1.18-2.36 2.28-3.59 3.35a66.18 66.18 0 018.42 7.23c10.56 10.8 16.14 25.75 16.14 43.25 0 18.06-7.61 34-21.42 44.92-12.17 9.61-28.75 14.9-46.7 14.9-27.87 0-48.48-18.16-57.66-33.7l-8.13-13.78 27.56-16.27 8.16 13.75c1.08 1.84 11.15 18 30.1 18 16.66 0 36.12-7.29 36.12-27.82 0-6.25-1.22-14.95-7-20.88zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448V87.77A23.8 23.8 0 00456 64z" } }] })(props);
}
function IoCalendarNumber(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4v-12a64 64 0 00-64-64zm60 112H36a4 4 0 00-4 4v236a64 64 0 0064 64h320a64 64 0 0064-64V180a4 4 0 00-4-4zM239.58 401.1c-12.17 9.61-28.75 14.9-46.7 14.9-27.87 0-48.48-18.16-57.66-33.7a16 16 0 0127.56-16.3c1.08 1.84 11.15 18 30.1 18 16.66 0 36.12-7.29 36.12-27.82 0-6.25-1.22-14.95-7-20.88-8.54-8.74-22.75-12.67-30.11-12.67a16 16 0 010-32c4.85 0 17.41-2.6 25.28-10.65a22 22 0 006.57-16.08c0-23.23-28.63-23.9-31.89-23.9-17.34 0-23.8 10.61-24.07 11.06a16 16 0 11-27.55-16.26c7.64-13 25.22-26.8 51.62-26.8 16.44 0 31.76 4.77 43.13 13.42 13.39 10.2 20.76 25.28 20.76 42.48A54 54 0 01240 302.35c-1.15 1.18-2.36 2.28-3.59 3.35a66.18 66.18 0 018.42 7.23c10.56 10.8 16.14 25.75 16.14 43.25.03 18.06-7.58 34.01-21.39 44.92zM368 396a16 16 0 01-32 0V256.29l-22.51 16.59a16 16 0 11-19-25.76l43.42-32a16 16 0 019.49-3.12h4.6a16 16 0 0116 16z" } }] })(props);
}
function IoCalendarOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "384", "x": "48", "y": "80", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48" } }, { "tag": "circle", "attr": { "cx": "296", "cy": "232", "r": "24" } }, { "tag": "circle", "attr": { "cx": "376", "cy": "232", "r": "24" } }, { "tag": "circle", "attr": { "cx": "296", "cy": "312", "r": "24" } }, { "tag": "circle", "attr": { "cx": "376", "cy": "312", "r": "24" } }, { "tag": "circle", "attr": { "cx": "136", "cy": "312", "r": "24" } }, { "tag": "circle", "attr": { "cx": "216", "cy": "312", "r": "24" } }, { "tag": "circle", "attr": { "cx": "136", "cy": "392", "r": "24" } }, { "tag": "circle", "attr": { "cx": "216", "cy": "392", "r": "24" } }, { "tag": "circle", "attr": { "cx": "296", "cy": "392", "r": "24" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128 48v32m256-32v32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M464 160H48" } }] })(props);
}
function IoCalendarSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 456a24 24 0 0024 24h400a24 24 0 0024-24V176H32zm320-244a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm-80-80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zm0 80a4 4 0 014-4h40a4 4 0 014 4v40a4 4 0 01-4 4h-40a4 4 0 01-4-4zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448V87.77A23.8 23.8 0 00456 64z" } }] })(props);
}
function IoCalendar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z" } }] })(props);
}
function IoCallOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" } }] })(props);
}
function IoCallSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M478.94 370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83 3.83 0 00-3.92.49c-11.63 9.07-31.21 25.73-32.26 26.63-6.78 5.81-6.78 5.81-12.33 4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56 4-12.34.9-1.05 17.57-20.63 26.64-32.25a3.83 3.83 0 00.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52a3.9 3.9 0 00-3.89-.87 322.35 322.35 0 00-56 25.45A338 338 0 0033.35 92a3.83 3.83 0 00-1.26 3.74c2.09 9.74 12.08 50.4 43.08 106.72 31.63 57.48 53.55 86.93 100 133.22S252 405.21 309.54 436.84c56.32 31 97 41 106.72 43.07a3.86 3.86 0 003.75-1.26A337.73 337.73 0 00454.35 430a322.7 322.7 0 0025.45-56 3.9 3.9 0 00-.86-3.86z" } }] })(props);
}
function IoCall(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z" } }] })(props);
}
function IoCameraOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "272", "r": "80", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M124 158v-22h-24v22" } }] })(props);
}
function IoCameraReverseOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M124 158v-22h-24v22m235.76 127.22v-13.31a80 80 0 00-131-61.6M176 258.78v13.31a80 80 0 00130.73 61.8" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M196 272l-20-20-20 20m200 0l-20 20-20-20" } }] })(props);
}
function IoCameraReverseSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M456 144h-83c-3 0-6.72-1.94-9.62-5l-27.31-42.79C326 80 320 80 302 80h-92c-18 0-23 0-34.07 16.21L148.62 139c-2.22 2.42-5.34 5-8.62 5v-16a8 8 0 00-8-8H92a8 8 0 00-8 8v16H56a24 24 0 00-24 24v240a24 24 0 0024 24h400a24 24 0 0024-24V168a24 24 0 00-24-24zM256 368c-47.82 0-87.76-34.23-95-80h-43.63L176 229.37 234.63 288H194a64.07 64.07 0 00102.63 33.49L320 343l-3.68 3.72A96.64 96.64 0 01256 368zm80-53.84L277.11 256H318a64.26 64.26 0 00-103-33.36L192 200l3.14-2.45A96.19 96.19 0 01255.76 176c47.85 0 87 34.19 94.24 80h44.92z" } }] })(props);
}
function IoCameraReverse(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.52 15.52 0 00-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.52 15.52 0 00-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 00-16-16h-24a16 16 0 00-16 16v8h-4a48.05 48.05 0 00-48 48V384a48.05 48.05 0 0048 48h352a48.05 48.05 0 0048-48V192a48.05 48.05 0 00-48-48zM316.84 346.3a96.06 96.06 0 01-155.66-59.18 16 16 0 01-16.49-26.43l20-20a16 16 0 0122.62 0l20 20A16 16 0 01196 288a17.31 17.31 0 01-2-.14 64.07 64.07 0 00102.66 33.63 16 16 0 1120.21 24.81zm50.47-63l-20 20a16 16 0 01-22.62 0l-20-20a16 16 0 0113.09-27.2A64 64 0 00215 222.64 16 16 0 11194.61 198a96 96 0 01156 59 16 16 0 0116.72 26.35z" } }] })(props);
}
function IoCameraSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "272", "r": "64" } }, { "tag": "path", "attr": { "d": "M456 144h-83c-3 0-6.72-1.94-9.62-5L336.1 96.2C325 80 320 80 302 80h-92c-18 0-24 0-34.07 16.21L148.62 139c-2.22 2.42-5.34 5-8.62 5v-16a8 8 0 00-8-8H92a8 8 0 00-8 8v16H56a24 24 0 00-24 24v240a24 24 0 0024 24h400a24 24 0 0024-24V168a24 24 0 00-24-24zM260.51 367.9a96 96 0 1191.39-91.39 96.11 96.11 0 01-91.39 91.39z" } }] })(props);
}
function IoCamera(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "272", "r": "64" } }, { "tag": "path", "attr": { "d": "M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.52 15.52 0 00-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.52 15.52 0 00-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 00-16-16h-24a16 16 0 00-16 16v8h-4a48.05 48.05 0 00-48 48V384a48.05 48.05 0 0048 48h352a48.05 48.05 0 0048-48V192a48.05 48.05 0 00-48-48zM256 368a96 96 0 1196-96 96.11 96.11 0 01-96 96z" } }] })(props);
}
function IoCarOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M80 224l37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224m-352 0h352v144H80zm32 144v32H80v-32m352 0v32h-32v-32" } }, { "tag": "circle", "attr": { "cx": "144", "cy": "288", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "368", "cy": "288", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoCarSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M447.68 220.78a16.44 16.44 0 00-1-3.1l-48-112A16 16 0 00384 96H128a16 16 0 00-14.71 9.7l-48 112a16.44 16.44 0 00-1 3.1A16.15 16.15 0 0064 224v184a8 8 0 008 8h32a8 8 0 008-8v-24h288v24a8 8 0 008 8h32a8 8 0 008-8V224a16.15 16.15 0 00-.32-3.22zM144 320a32 32 0 1132-32 32 32 0 01-32 32zm224 0a32 32 0 1132-32 32 32 0 01-32 32zM104.26 208l34.29-80h234.9l34.29 80z" } }] })(props);
}
function IoCarSportOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63-38.75 52.52-50.27 70-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8 31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48-2.04-91.67-9.33-101.4zM400 384h56v16h-56zm-344 0h56v16H56z" } }, { "tag": "path", "attr": { "d": "M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84zm67.1-66.11a3.23 3.23 0 00-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.88 93.88 0 00-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455.32 455.32 0 0052.82 3.1c10.59 0 21.52-3 23.55-12.44a52.41 52.41 0 00.49-16.51zm-351.14 0a3.23 3.23 0 013.1-3c11.81-.42 23.8.42 45.07 6.69a93.88 93.88 0 0130.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455.32 455.32 0 01-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.41 52.41 0 01-.49-16.51z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M432 192h16m-384 0h16m-2 19s46.35-12 178-12 178 12 178 12" } }] })(props);
}
function IoCarSportSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M488 224c-3-5-32.61-17.79-32.61-17.79 5.15-2.66 8.67-3.21 8.67-14.21 0-12-.06-16-8.06-16h-27.14c-.11-.24-.23-.49-.34-.74-17.52-38.26-19.87-47.93-46-60.95C347.47 96.88 281.76 96 256 96s-91.47.88-126.49 18.31c-26.16 13-25.51 19.69-46 60.95 0 .11-.21.4-.4.74H55.94c-7.94 0-8 4-8 16 0 11 3.52 11.55 8.67 14.21C56.61 206.21 28 220 24 224s-8 32-8 80 4 96 4 96h11.94c0 14 2.06 16 8.06 16h80c6 0 8-2 8-16h256c0 14 2 16 8 16h82c4 0 6-3 6-16h12s4-49 4-96-5-75-8-80zm-362.74 44.94A516.94 516.94 0 0170.42 272c-20.42 0-21.12 1.31-22.56-11.44a72.16 72.16 0 01.51-17.51L49 240h3c12 0 23.27.51 44.55 6.78a98 98 0 0130.09 15.06C131 265 132 268 132 268zm247.16 72L368 352H144s.39-.61-5-11.18c-4-7.82 1-12.82 8.91-15.66C163.23 319.64 208 304 256 304s93.66 13.48 108.5 21.16C370 328 376.83 330 372.42 341zm-257-136.53a96.23 96.23 0 01-9.7.07c2.61-4.64 4.06-9.81 6.61-15.21 8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35 2.57 5.45 4 10.66 6.68 15.33-2 .11-4.3 0-9.79-.19zm347.72 56.11C461 273 463 272 441.58 272a516.94 516.94 0 01-54.84-3.06c-2.85-.51-3.66-5.32-1.38-7.1a93.84 93.84 0 0130.09-15.06c21.28-6.27 33.26-7.11 45.09-6.69a3.22 3.22 0 013.09 3 70.18 70.18 0 01-.49 17.47z" } }] })(props);
}
function IoCarSport(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M494.26 276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16a3.6 3.6 0 01-.91-5.68 15.93 15.93 0 004.53-12.53A16.27 16.27 0 00447.65 176h-15.6a17 17 0 00-2 .13 8.5 8.5 0 00-1.41-.47c-9.24-19.53-21.89-46.27-48.11-59.32C341.64 97 270 96 256 96s-85.64 1-124.48 20.31c-26.22 13.05-38.87 39.79-48.11 59.32l-.08.16a6.52 6.52 0 00-1.35.34 17 17 0 00-2-.13H64.35A16.27 16.27 0 0048 190.77a15.93 15.93 0 004.59 12.47 3.6 3.6 0 01-.91 5.68c-8.72 4.72-17 9.19-22.11 16-2.24 3-8.16 10.83-11.77 51.24-2 22.74-2.3 46.28-.73 61.44 3.29 31.5 9.46 50.54 9.72 51.33a16 16 0 0013.2 10.87v.2a16 16 0 0016 16h56a16 16 0 0016-16c8.61 0 14.6-1.54 20.95-3.18a158.83 158.83 0 0128-4.91C207.45 389 237.79 388 256 388c17.84 0 49.52 1 80.08 3.91a159.16 159.16 0 0128.11 4.93c6.08 1.56 11.85 3 19.84 3.15a16 16 0 0016 16h56a16 16 0 0016-16v-.12A16 16 0 00485.27 389c.26-.79 6.43-19.83 9.72-51.33 1.57-15.17 1.29-38.67-.73-61.45zm-381.93-86.91c8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35l1 2.17a8 8 0 01-7.44 11.42C360 202 290 199.12 256 199.12s-104 2.95-137.28 3.85a8 8 0 01-7.44-11.42c.35-.74.72-1.49 1.05-2.24zm11.93 79.63A427.17 427.17 0 0172.42 272c-10.6 0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49 243 50 240.78 55 240c13-2 20.27.51 41.55 6.78 14.11 4.15 24.29 9.68 30.09 14.06 2.91 2.16 1.36 7.8-2.38 8.1zm221.38 82c-13.16 1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79 7.87-7.54 26.23-13.18 50.68-16.35s34.8-4.8 57.62-4.8 32.12 1 57.62 4.81 44.77 9.52 50.68 16.35c10.78 12.24-5.29 24.19-18.86 25.84zm117.5-91.39c-2 9.48-13 12.44-23.56 12.44a455.91 455.91 0 01-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1 5.71-4.49 16-9.91 30.09-14.06 21.28-6.27 33.55-8.78 44.09-6.69 2.57.51 3.93 3.27 4.09 5a40.64 40.64 0 01-.49 14.48z" } }] })(props);
}
function IoCar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M447.68 220.78a16 16 0 00-1-3.08l-37.78-88.16C400.19 109.17 379 96 354.89 96H157.11c-24.09 0-45.3 13.17-54 33.54L65.29 217.7A15.72 15.72 0 0064 224v176a16 16 0 0016 16h32a16 16 0 0016-16v-16h256v16a16 16 0 0016 16h32a16 16 0 0016-16V224a16.15 16.15 0 00-.32-3.22zM144 320a32 32 0 1132-32 32 32 0 01-32 32zm224 0a32 32 0 1132-32 32 32 0 01-32 32zM104.26 208l28.23-65.85C136.11 133.69 146 128 157.11 128h197.78c11.1 0 21 5.69 24.62 14.15L407.74 208z" } }] })(props);
}
function IoCardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "320", "x": "48", "y": "96", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "56", "ry": "56" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "60", "d": "M48 192h416M128 300h48v20h-48z" } }] })(props);
}
function IoCardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 416a16 16 0 0016 16h416a16 16 0 0016-16V222H32zm66-138a8 8 0 018-8h92a8 8 0 018 8v64a8 8 0 01-8 8h-92a8 8 0 01-8-8zM464 80H48a16 16 0 00-16 16v66h448V96a16 16 0 00-16-16z" } }] })(props);
}
function IoCard(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 376a56 56 0 0056 56h336a56 56 0 0056-56V222H32zm66-76a30 30 0 0130-30h48a30 30 0 0130 30v20a30 30 0 01-30 30h-48a30 30 0 01-30-30zM424 80H88a56 56 0 00-56 56v26h448v-26a56 56 0 00-56-56z" } }] })(props);
}
function IoCaretBackCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M273.77 169.57l-89.09 74.13a16 16 0 000 24.6l89.09 74.13A16 16 0 00300 330.14V181.86a16 16 0 00-26.23-12.29z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoCaretBackCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm252 108.27L169.91 256 300 147.73z" } }] })(props);
}
function IoCaretBackCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm252-74.14v148.28a16 16 0 01-26.23 12.29l-89.09-74.13a16 16 0 010-24.6l89.09-74.13A16 16 0 01300 181.86z" } }] })(props);
}
function IoCaretBackOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z" } }] })(props);
}
function IoCaretBackSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 64L144 256l224 192V64z" } }] })(props);
}
function IoCaretBack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z" } }] })(props);
}
function IoCaretDownCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M342.43 238.23l-74.13 89.09a16 16 0 01-24.6 0l-74.13-89.09A16 16 0 01181.86 212h148.28a16 16 0 0112.29 26.23z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoCaretDownCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-99.73-44L256 342.09 147.73 212z" } }] })(props);
}
function IoCaretDownCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-121.57-17.77l-74.13 89.09a16 16 0 01-24.6 0l-74.13-89.09A16 16 0 01181.86 212h148.28a16 16 0 0112.29 26.23z" } }] })(props);
}
function IoCaretDownOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" } }] })(props);
}
function IoCaretDownSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M64 144l192 224 192-224H64z" } }] })(props);
}
function IoCaretDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" } }] })(props);
}
function IoCaretForwardCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M238.23 342.43l89.09-74.13a16 16 0 000-24.6l-89.09-74.13A16 16 0 00212 181.86v148.28a16 16 0 0026.23 12.29z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoCaretForwardCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zM212 147.73L342.09 256 212 364.27z" } }] })(props);
}
function IoCaretForwardCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-252 74.14V181.86a16 16 0 0126.23-12.29l89.09 74.13a16 16 0 010 24.6l-89.09 74.13A16 16 0 01212 330.14z" } }] })(props);
}
function IoCaretForwardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" } }] })(props);
}
function IoCaretForwardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M144 448l224-192L144 64v384z" } }] })(props);
}
function IoCaretForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" } }] })(props);
}
function IoCaretUpCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M342.43 273.77l-74.13-89.09a16 16 0 00-24.6 0l-74.13 89.09A16 16 0 00181.86 300h148.28a16 16 0 0012.29-26.23z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoCaretUpCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zM147.73 300L256 169.91 364.27 300z" } }] })(props);
}
function IoCaretUpCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm74.14 252H181.86a16 16 0 01-12.29-26.23l74.13-89.09a16 16 0 0124.6 0l74.13 89.09A16 16 0 01330.14 300z" } }] })(props);
}
function IoCaretUpOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z" } }] })(props);
}
function IoCaretUpSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 368L256 144 64 368h384z" } }] })(props);
}
function IoCaretUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z" } }] })(props);
}
function IoCartOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "176", "cy": "416", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "400", "cy": "416", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 80h64l48 272h256" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" } }] })(props);
}
function IoCartSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "176", "cy": "416", "r": "32" } }, { "tag": "circle", "attr": { "cx": "400", "cy": "416", "r": "32" } }, { "tag": "path", "attr": { "d": "M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z" } }] })(props);
}
function IoCart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "176", "cy": "416", "r": "32" } }, { "tag": "circle", "attr": { "cx": "400", "cy": "416", "r": "32" } }, { "tag": "path", "attr": { "d": "M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z" } }] })(props);
}
function IoCashOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "448", "height": "256", "x": "32", "y": "80", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16", "transform": "rotate(180 256 208)" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 384h384M96 432h320" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "208", "r": "80", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80m368 176a80 80 0 00-80 80M32 256a80 80 0 0180 80" } }] })(props);
}
function IoCashSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 368h416v32H48zm32 48h352v32H80zm400-240a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96h16v-64zM256 304a96 96 0 1196-96 96.11 96.11 0 01-96 96z" } }, { "tag": "path", "attr": { "d": "M96 80V64H16v80h16a64.07 64.07 0 0064-64zM32 272H16v80h80v-16a64.07 64.07 0 00-64-64zm448-128h16V64h-80v16a64.07 64.07 0 0064 64zm-64 192v16h80v-80h-16a64.07 64.07 0 00-64 64z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "208", "r": "64" } }] })(props);
}
function IoCash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 400H64a16 16 0 010-32h384a16 16 0 010 32zm-32 48H96a16 16 0 010-32h320a16 16 0 010 32zM32 272H16v48a32 32 0 0032 32h48v-16a64.07 64.07 0 00-64-64z" } }, { "tag": "path", "attr": { "d": "M480 240h16v-64h-16a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96zm-224 64a96 96 0 1196-96 96.11 96.11 0 01-96 96z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "208", "r": "64" } }, { "tag": "path", "attr": { "d": "M416 336v16h48a32 32 0 0032-32v-48h-16a64.07 64.07 0 00-64 64zm64-192h16V96a32 32 0 00-32-32h-48v16a64.07 64.07 0 0064 64zM96 80V64H48a32 32 0 00-32 32v48h16a64.07 64.07 0 0064-64z" } }] })(props);
}
function IoCellularOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "64", "height": "320", "x": "416", "y": "96", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "64", "height": "240", "x": "288", "y": "176", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "64", "height": "176", "x": "160", "y": "240", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "64", "height": "112", "x": "32", "y": "304", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }] })(props);
}
function IoCellularSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 432h-96V80h96zm-128 0h-96V160h96zm-128 0h-96V224h96zm-128 0H16V288h96z" } }] })(props);
}
function IoCellular(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M472 432h-48a24 24 0 01-24-24V104a24 24 0 0124-24h48a24 24 0 0124 24v304a24 24 0 01-24 24zm-128 0h-48a24 24 0 01-24-24V184a24 24 0 0124-24h48a24 24 0 0124 24v224a24 24 0 01-24 24zm-128 0h-48a24 24 0 01-24-24V248a24 24 0 0124-24h48a24 24 0 0124 24v160a24 24 0 01-24 24zm-128 0H40a24 24 0 01-24-24v-96a24 24 0 0124-24h48a24 24 0 0124 24v96a24 24 0 01-24 24z" } }] })(props);
}
function IoChatboxEllipsesOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" } }, { "tag": "circle", "attr": { "cx": "160", "cy": "216", "r": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "216", "r": "32" } }, { "tag": "circle", "attr": { "cx": "352", "cy": "216", "r": "32" } }] })(props);
}
function IoChatboxEllipsesSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M456 48H56a24 24 0 00-24 24v288a24 24 0 0024 24h72v80l117.74-80H456a24 24 0 0024-24V72a24 24 0 00-24-24zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zM456 80z" } }] })(props);
}
function IoChatboxEllipses(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M408 48H104a72.08 72.08 0 00-72 72v192a72.08 72.08 0 0072 72h24v64a16 16 0 0026.25 12.29L245.74 384H408a72.08 72.08 0 0072-72V120a72.08 72.08 0 00-72-72zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoChatboxOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" } }] })(props);
}
function IoChatboxSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128 464v-80H56a24 24 0 01-24-24V72a24 24 0 0124-24h400a24 24 0 0124 24v288a24 24 0 01-24 24H245.74zM456 80z" } }] })(props);
}
function IoChatbox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M144 464a16 16 0 01-16-16v-64h-24a72.08 72.08 0 01-72-72V120a72.08 72.08 0 0172-72h304a72.08 72.08 0 0172 72v192a72.08 72.08 0 01-72 72H245.74l-91.49 76.29A16.05 16.05 0 01144 464z" } }] })(props);
}
function IoChatbubbleEllipsesOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 014.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 00-11.13-2.07 30.7 30.7 0 00-12.08 2.43L81.5 462.78a15.92 15.92 0 01-4.66 1.22 9.61 9.61 0 01-9.58-9.74 15.85 15.85 0 01.6-3.29z" } }, { "tag": "circle", "attr": { "cx": "160", "cy": "256", "r": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "32" } }, { "tag": "circle", "attr": { "cx": "352", "cy": "256", "r": "32" } }] })(props);
}
function IoChatbubbleEllipsesSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M475.22 206.52c-10.34-48.65-37.76-92.93-77.22-124.68A227.4 227.4 0 00255.82 32C194.9 32 138 55.47 95.46 98.09 54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0035.65 118.76l4.35 6.05L48 480l114.8-28.56s2.3.77 4 1.42 16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9 59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 00-4.78-44.97zM160 288a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoChatbubbleEllipses(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M398 81.84A227.4 227.4 0 00255.82 32C194.9 32 138 55.47 95.46 98.09 54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0035.65 118.76l.19.27c.28.41.57.82.86 1.22s.65.92.73 1.05l.22.4c1.13 2 2 4.44 1.23 6.9l-18.42 66.66a29.13 29.13 0 00-1.2 7.63A25.69 25.69 0 0076.83 480a29.44 29.44 0 0010.45-2.29l67.49-24.36.85-.33a14.75 14.75 0 015.8-1.15 15.12 15.12 0 015.37 1c1.62.63 16.33 6.26 31.85 10.6 12.9 3.6 39.74 9 60.77 9 59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 00-4.78-45c-10.34-48.62-37.76-92.9-77.22-124.65zM87.48 380zM160 288a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoChatbubbleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" } }] })(props);
}
function IoChatbubbleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M475.22 206.52c-10.34-48.65-37.76-92.93-77.22-124.68A227.4 227.4 0 00255.82 32C194.9 32 138 55.47 95.46 98.09 54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0035.65 118.76l4.35 6.05L48 480l114.8-28.56s2.3.77 4 1.42 16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9 59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 00-4.78-44.97z" } }] })(props);
}
function IoChatbubble(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M76.83 480a25.69 25.69 0 01-25.57-25.74 29.13 29.13 0 011.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0132 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 01398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 014.78 45c0 58.93-22.64 114.28-63.76 155.87-41.48 42-97.18 65.06-156.83 65.06-21 0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.12 15.12 0 00-5.37-1 14.75 14.75 0 00-5.8 1.15l-.85.33-67.48 24.38A29.44 29.44 0 0176.83 480zm-2-31.8zM87.48 380z" } }] })(props);
}
function IoChatbubblesOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11" } }] })(props);
}
function IoChatbubblesSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 312.43c.77-1.11 1.51-2.26 2.27-3.34A174.55 174.55 0 00480 211.85C480.32 112.55 396.54 32 292.94 32c-90.36 0-165.74 61.49-183.4 143.12a172.81 172.81 0 00-4 36.83c0 99.4 80.56 182.11 184.16 182.11 16.47 0 38.66-4.95 50.83-8.29s24.23-7.75 27.35-8.94 8-2.41 11.89-1.29l77.42 22.38a4 4 0 005-4.86l-17.72-67.49c-1.23-5-1.39-5.94 3.53-13.14z" } }, { "tag": "path", "attr": { "d": "M312.54 415.38a165.32 165.32 0 01-23.26 2.05c-42.43 0-82.5-11.2-115-32.2a184.09 184.09 0 01-53.09-49.32c-26.08-34.57-40.3-78.51-40.3-124.49 0-3.13.11-6.14.22-9.16a4.34 4.34 0 00-7.54-3.12 158.76 158.76 0 00-14.86 195.24c2.47 3.77 3.87 6.68 3.44 8.62l-14.09 72.26a4 4 0 005.22 4.53l68-24.24a16.85 16.85 0 0112.92.22c20.35 8 42.86 12.92 65.37 12.92a169.45 169.45 0 00116.63-46 4.29 4.29 0 00-3.66-7.31z" } }] })(props);
}
function IoChatbubbles(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M60.44 389.17c0 .07 0 .2-.08.38.03-.12.05-.25.08-.38zM439.9 405.6a26.77 26.77 0 01-9.59-2l-56.78-20.13-.42-.17a9.88 9.88 0 00-3.91-.76 10.32 10.32 0 00-3.62.66c-1.38.52-13.81 5.19-26.85 8.77-7.07 1.94-31.68 8.27-51.43 8.27-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 01100.3 215.1a175.9 175.9 0 014.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 01290.3 32c52.21 0 100.86 20 137 56.18 34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 01-30.3 99.15l-.19.28-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 00-1.08 2.09l15.74 55.94a26.42 26.42 0 011.12 7.11 24 24 0 01-24.03 24.03z" } }, { "tag": "path", "attr": { "d": "M299.87 425.39a15.74 15.74 0 00-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 01-128.82-58.75A199.21 199.21 0 0186.4 244.16C85 234.42 85 232 85 232a16 16 0 00-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0011 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 008 22.92l.46.39A24.34 24.34 0 0072 480a23.42 23.42 0 009-1.79l53.51-20.65a8.05 8.05 0 015.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0074.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 001.95-16.39z" } }] })(props);
}
function IoCheckboxOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 176L217.6 336 160 272" } }, { "tag": "rect", "attr": { "width": "384", "height": "384", "x": "64", "y": "64", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }] })(props);
}
function IoCheckboxSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 48v416h416V48zm170 312.38l-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174z" } }] })(props);
}
function IoCheckbox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M400 48H112a64.07 64.07 0 00-64 64v288a64.07 64.07 0 0064 64h288a64.07 64.07 0 0064-64V112a64.07 64.07 0 00-64-64zm-35.75 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z" } }] })(props);
}
function IoCheckmarkCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 176L217.6 336 160 272" } }] })(props);
}
function IoCheckmarkCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-38 312.38l-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174z" } }] })(props);
}
function IoCheckmarkCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z" } }] })(props);
}
function IoCheckmarkDoneCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M368 192L256.13 320l-47.95-48m-16.23 48L144 272m161.71-80l-51.55 59" } }] })(props);
}
function IoCheckmarkDoneCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48.19 121.42l24.1 21.06-73.61 84.1-24.1-23.06zM191.93 342.63L121.37 272 144 249.37 214.57 320zm65 .79L185.55 272l22.64-22.62 47.16 47.21 111.13-127.17 24.1 21.06z" } }] })(props);
}
function IoCheckmarkDoneCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm-16.79 192.47l51.55-59a16 16 0 0124.1 21.06l-51.55 59a16 16 0 11-24.1-21.06zm-38.86 90.85a16 16 0 01-22.62 0l-47.95-48a16 16 0 1122.64-22.62l48 48a16 16 0 01-.07 22.62zm176.8-128.79l-111.88 128a16 16 0 01-11.51 5.47h-.54a16 16 0 01-11.32-4.69l-47.94-48a16 16 0 1122.64-22.62l29.8 29.83a8 8 0 0011.68-.39l95-108.66a16 16 0 0124.1 21.06z" } }] })(props);
}
function IoCheckmarkDoneOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M464 128L240 384l-96-96m0 96l-96-96m320-160L232 284" } }] })(props);
}
function IoCheckmarkDoneSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "44", "d": "M465 127L241 384l-92-92m-9 93l-93-93m316-165L236 273" } }] })(props);
}
function IoCheckmarkDone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M464 128L240 384l-96-96m0 96l-96-96m320-160L232 284" } }] })(props);
}
function IoCheckmarkOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 128L192 384l-96-96" } }] })(props);
}
function IoCheckmarkSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "44", "d": "M416 128L192 384l-96-96" } }] })(props);
}
function IoCheckmark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 128L192 384l-96-96" } }] })(props);
}
function IoChevronBackCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M296 352l-96-96 96-96" } }] })(props);
}
function IoChevronBackCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm62.63 304L296 374.63 177.37 256 296 137.37 318.63 160l-96 96z" } }] })(props);
}
function IoChevronBackCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm35.31 292.69a16 16 0 11-22.62 22.62l-96-96a16 16 0 010-22.62l96-96a16 16 0 0122.62 22.62L206.63 256z" } }] })(props);
}
function IoChevronBackOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M328 112L184 256l144 144" } }] })(props);
}
function IoChevronBackSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M328 112L184 256l144 144" } }] })(props);
}
function IoChevronBack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M328 112L184 256l144 144" } }] })(props);
}
function IoChevronDownCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 216l-96 96-96-96" } }] })(props);
}
function IoChevronDownCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-96-270.63l96 96 96-96L374.63 216 256 334.63 137.37 216z" } }] })(props);
}
function IoChevronDownCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-100.69-28.69l-96 96a16 16 0 01-22.62 0l-96-96a16 16 0 0122.62-22.62L256 289.37l84.69-84.68a16 16 0 0122.62 22.62z" } }] })(props);
}
function IoChevronDownOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M112 184l144 144 144-144" } }] })(props);
}
function IoChevronDownSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M112 184l144 144 144-144" } }] })(props);
}
function IoChevronDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M112 184l144 144 144-144" } }] })(props);
}
function IoChevronForwardCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M216 352l96-96-96-96" } }] })(props);
}
function IoChevronForwardCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-40 326.63L193.37 352l96-96-96-96L216 137.37 334.63 256z" } }] })(props);
}
function IoChevronForwardCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm257.37 0l-84.68-84.69a16 16 0 0122.62-22.62l96 96a16 16 0 010 22.62l-96 96a16 16 0 01-22.62-22.62z" } }] })(props);
}
function IoChevronForwardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M184 112l144 144-144 144" } }] })(props);
}
function IoChevronForwardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M184 112l144 144-144 144" } }] })(props);
}
function IoChevronForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M184 112l144 144-144 144" } }] })(props);
}
function IoChevronUpCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 296l-96-96-96 96" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" } }] })(props);
}
function IoChevronUpCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 270.63l-96-96-96 96L137.37 296 256 177.37 374.63 296z" } }] })(props);
}
function IoChevronUpCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm107.31 259.31a16 16 0 01-22.62 0L256 222.63l-84.69 84.68a16 16 0 01-22.62-22.62l96-96a16 16 0 0122.62 0l96 96a16 16 0 010 22.62z" } }] })(props);
}
function IoChevronUpOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M112 328l144-144 144 144" } }] })(props);
}
function IoChevronUpSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M112 328l144-144 144 144" } }] })(props);
}
function IoChevronUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M112 328l144-144 144 144" } }] })(props);
}
function IoClipboardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32" } }, { "tag": "rect", "attr": { "width": "160", "height": "64", "x": "176", "y": "32", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "26.13", "ry": "26.13" } }] })(props);
}
function IoClipboardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M420 48h-68V28a12 12 0 00-12-12H172a12 12 0 00-12 12v20H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V60a12 12 0 00-12-12zm-84.13 64H176.13V80h159.74z" } }] })(props);
}
function IoClipboard(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 48h-11.41a8 8 0 01-7.44-5.08A42.18 42.18 0 00309.87 16H202.13a42.18 42.18 0 00-39.28 26.92 8 8 0 01-7.44 5.08H144a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V112a64 64 0 00-64-64zm-48.13 64H192.13a16 16 0 010-32h127.74a16 16 0 010 32z" } }] })(props);
}
function IoCloseCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 320L192 192m0 128l128-128" } }] })(props);
}
function IoCloseCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64z" } }] })(props);
}
function IoCloseCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" } }] })(props);
}
function IoCloseOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M368 368L144 144m224 0L144 368" } }] })(props);
}
function IoCloseSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" } }] })(props);
}
function IoClose(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" } }] })(props);
}
function IoCloudCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M333.88 240.59a8 8 0 01-6.66-6.66C320.68 192.78 290.82 168 256 168c-32.37 0-53.93 21.22-62.48 43.58a7.92 7.92 0 01-6.16 5c-27.67 4.35-50.82 22.56-51.35 54.3-.52 31.53 25.51 57.11 57 57.11H326c27.5 0 50-13.72 50-44 0-27.22-22-40.41-42.12-43.4z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoCloudCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm70 280H196c-33 0-60-23-60-56 0-34.21 26-53 56-56 7.28-23.9 29.5-48 64-48 36.5 0 67.55 27.23 72 72 21.49 1.12 48 14.09 48 44 0 30.28-22.5 44-50 44z" } }] })(props);
}
function IoCloudCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm70 280H193.05c-31.53 0-57.56-25.58-57-57.11.53-31.74 23.68-49.95 51.35-54.3a7.92 7.92 0 006.16-5C202.07 189.22 223.63 168 256 168c33.17 0 61.85 22.49 70.14 60.21a17.75 17.75 0 0013.18 13.43C357.79 246.05 376 259.21 376 284c0 30.28-22.5 44-50 44z" } }] })(props);
}
function IoCloudDoneOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 240c-8.89-89.54-71-144-144-144-69 0-113.44 48.2-128 96-60 6-112 43.59-112 112 0 66 54 112 120 112h260c55 0 100-27.44 100-88 0-59.82-53-85.76-96-88z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M317 208L209.2 336 163 284.8" } }] })(props);
}
function IoCloudDoneSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.25 225.36c-6.52-41.18-24.05-76.4-51.11-102.46A153.57 153.57 0 00256 80c-35.5 0-68.24 11.69-94.68 33.8a156.42 156.42 0 00-45.22 63.61c-30.26 4.81-57.45 17.18-77.38 35.37C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h260c32.37 0 60.23-8.57 80.59-24.77C499.76 388.78 512 361.39 512 328c0-61.85-48.44-95.34-97.75-102.64zm-204.63 135l-69.22-76.7 23.76-21.44 44.62 49.46 106.29-126.2 24.47 20.61z" } }] })(props);
}
function IoCloudDone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M424.44 227.25a16 16 0 01-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 00256 80c-35.5 0-68.24 11.69-94.68 33.8a156.24 156.24 0 00-42 56 16 16 0 01-11.37 9.15c-27 5.62-51.07 17.34-69.18 33.87C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h260c32.37 0 60.23-8.57 80.59-24.77C499.76 388.78 512 361.39 512 328c0-57.57-42-90.58-87.56-100.75zm-95.2-8.94l-107.8 128a16 16 0 01-12 5.69h-.27a16 16 0 01-11.88-5.28l-45.9-50.87c-5.77-6.39-5.82-16.33.3-22.4a16 16 0 0123.16.63l33.9 37.58 96-114a16 16 0 1124.48 20.62z" } }] })(props);
}
function IoCloudDownloadOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56m0 64.1l64 63.9 64-63.9M256 224v224.03" } }] })(props);
}
function IoCloudDownloadSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M472.7 189.5c-15.76-10-36.21-16.79-58.59-19.54-6.65-39.1-24.22-72.52-51.27-97.26C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a149.7 149.7 0 00-45.29 60.42c-30.67 4.32-57 14.61-76.71 30C13.7 174.83 0 203.56 0 237.6 0 305 55.92 352 136 352h104V208h32v144h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 419.42L191.98 371l-22.61 23L256 480l86.63-86-22.61-23L272 419.42V352h-32v67.42z" } }] })(props);
}
function IoCloudDownload(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M472.7 189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16 16 0 01412 159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a150.13 150.13 0 00-41.95 52.83A16.05 16.05 0 01108 125.8c-27.13 4.9-50.53 14.68-68.41 28.7C13.7 174.83 0 203.56 0 237.6 0 305 55.93 352 136 352h104V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 224v128h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 425.42l-36.7-36.64a16 16 0 00-22.6 22.65l64 63.89a16 16 0 0022.6 0l64-63.89a16 16 0 00-22.6-22.65L272 425.42V352h-32z" } }] })(props);
}
function IoCloudOfflineOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M93.72 183.25C49.49 198.05 16 233.1 16 288c0 66 54 112 120 112h184.37m147.45-22.26C485.24 363.3 496 341.61 496 312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16 0-48.79 6.93-67.6 18.14" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 448L64 64" } }] })(props);
}
function IoCloudOfflineSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M41.37 64l22.628-22.628L470.627 448l-22.628 22.627zm-2.65 148.78C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h228.12L110.51 178.39c-28.01 5.39-53.09 17.33-71.79 34.39zm437.87 194.45C499.76 388.78 512 361.39 512 328c0-61.85-48.44-95.34-97.75-102.64-6.52-41.18-24.05-76.4-51.11-102.46A153.57 153.57 0 00256 80c-30.47 0-58.9 8.62-83.07 25l302.82 302.86c.25-.21.57-.41.84-.63z" } }] })(props);
}
function IoCloudOffline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 464a15.92 15.92 0 01-11.31-4.69l-384-384a16 16 0 0122.62-22.62l384 384A16 16 0 01448 464zM38.72 196.78C13.39 219.88 0 251.42 0 288c0 36 14.38 68.88 40.49 92.59C65.64 403.43 99.56 416 136 416h192.8a8 8 0 005.66-13.66L100.88 168.76a8 8 0 00-8-2C72 173.15 53.4 183.38 38.72 196.78zm437.87 194.45C499.76 372.78 512 345.39 512 312c0-57.57-42-90.58-87.56-100.75a16 16 0 01-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 00256 64c-31.12 0-60.12 9-84.62 26.1a8 8 0 00-1.14 12.26L461.68 393.8a8 8 0 0010.2.93q2.43-1.68 4.71-3.5z" } }] })(props);
}
function IoCloudOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 240c-8.89-89.54-71-144-144-144-69 0-113.44 48.2-128 96-60 6-112 43.59-112 112 0 66 54 112 120 112h260c55 0 100-27.44 100-88 0-59.82-53-85.76-96-88z" } }] })(props);
}
function IoCloudSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M396 432H136c-36.44 0-70.36-12.57-95.51-35.41C14.38 372.88 0 340 0 304c0-36.58 13.39-68.12 38.72-91.22 19.93-18.19 47.12-30.56 77.38-35.37a156.42 156.42 0 0145.22-63.61C187.76 91.69 220.5 80 256 80a153.57 153.57 0 01107.14 42.9c27.06 26.06 44.59 61.28 51.11 102.46C463.56 232.66 512 266.15 512 328c0 33.39-12.24 60.78-35.41 79.23C456.23 423.43 428.37 432 396 432z" } }] })(props);
}
function IoCloudUploadOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 255.79l-64-64-64 64m64 192.42V207.79" } }] })(props);
}
function IoCloudUploadSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M473.66 210c-16.56-12.3-37.7-20.75-59.52-24-6.62-39.18-24.21-72.67-51.3-97.45-28.69-26.3-66.63-40.76-106.84-40.76-35.35 0-68 11.08-94.37 32.05a149.61 149.61 0 00-45.32 60.49c-29.94 4.6-57.12 16.68-77.39 34.55C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76 25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-48 48-22.63-22.63L256 169.17l86.63 86.62L320 278.42l-48-48v153.37h124c31.34 0 59.91-8.8 80.45-24.77 23.26-18.1 35.55-44 35.55-74.83 0-29.94-13.26-55.61-38.34-74.19zM240 383.79h32v80.41h-32z" } }] })(props);
}
function IoCloudUpload(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M473.66 210c-14-10.38-31.2-18-49.36-22.11a16.11 16.11 0 01-12.19-12.22c-7.8-34.75-24.59-64.55-49.27-87.13C334.15 62.25 296.21 47.79 256 47.79c-35.35 0-68 11.08-94.37 32.05a150.07 150.07 0 00-42.06 53 16 16 0 01-11.31 8.87c-26.75 5.4-50.9 16.87-69.34 33.12C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76 25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-36.69 36.69a16 16 0 01-23.16-.56c-5.8-6.37-5.24-16.3.85-22.39l63.69-63.68a16 16 0 0122.62 0L331 244.14c6.28 6.29 6.64 16.6.39 22.91a16 16 0 01-22.68.06L272 230.42v153.37h124c31.34 0 59.91-8.8 80.45-24.77 23.26-18.1 35.55-44 35.55-74.83 0-29.94-13.26-55.61-38.34-74.19zM240 448.21a16 16 0 1032 0v-64.42h-32z" } }] })(props);
}
function IoCloud(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M396 432H136c-36.44 0-70.36-12.57-95.51-35.41C14.38 372.88 0 340 0 304c0-36.58 13.39-68.12 38.72-91.22 18.11-16.53 42.22-28.25 69.18-33.87a16 16 0 0011.37-9.15 156.24 156.24 0 0142.05-56C187.76 91.69 220.5 80 256 80a153.57 153.57 0 01107.14 42.9c24.73 23.81 41.5 55.28 49.18 92a16 16 0 0012.12 12.39C470 237.42 512 270.43 512 328c0 33.39-12.24 60.78-35.41 79.23C456.23 423.43 428.37 432 396 432z" } }] })(props);
}
function IoCloudyNightOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M388.31 272c47.75 0 89.77-27.77 107.69-68.92-14.21 6.18-30.9 8.61-47.38 8.61A116.31 116.31 0 01332.31 95.38c0-16.48 2.43-33.17 8.61-47.38C299.77 65.92 272 107.94 272 155.69a116.31 116.31 0 003.44 28.18" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z" } }] })(props);
}
function IoCloudyNightSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74 14.55-11.13 33.41-18.87 53.2-22 6.06-36.92 21.92-68.53 46.29-92A139.82 139.82 0 01232 160c32.33 0 62.15 10.65 86.24 30.79a142.41 142.41 0 0140.83 57.05c27.18 4.48 51.59 15.68 69.56 32.08C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zm41.55-260.07c26.5 6.93 50 19.32 68.65 36.34q3.89 3.56 7.47 7.34c25.41-18.4 45.47-44.92 54.33-71.38-16.24 7.07-35.31 9.85-54.15 9.85-73.42 0-115.93-42.51-115.93-115.93 0-18.84 2.78-37.91 9.85-54.15-40.41 13.53-81 53.19-92.52 98.13a162.61 162.61 0 0179.52 36.12 173 173 0 0142.78 53.68z" } }] })(props);
}
function IoCloudyNight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74 12.1-9.26 27.2-16.17 43.33-20.05a16 16 0 0011.81-12.21c7.15-32.54 22.25-60.49 44.33-81.75A139.82 139.82 0 01232 160c32.33 0 62.15 10.65 86.24 30.79a142.22 142.22 0 0137.65 49.54 16.06 16.06 0 0011.12 9c24 5.22 45.42 15.78 61.62 30.56C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zm170.53-270.21a16.34 16.34 0 00-1.35-15.8 16 16 0 00-19.57-5.58c-10.7 4.65-24.48 7.17-39.92 7.28-55.3.4-101.38-45-101.38-100.31 0-15.75 2.48-29.84 7.18-40.76a16.3 16.3 0 00-1.85-16.33 16 16 0 00-19.1-5c-38.63 16.82-66.18 51.51-75.27 92.54a4 4 0 003.19 4.79 162.54 162.54 0 0176.31 35.59 172.58 172.58 0 0139.64 47.84 16.35 16.35 0 009.54 7.64c23.89 7.17 45.1 18.9 62.25 34.54q4.44 4.07 8.48 8.42a4 4 0 005.16.57 129.12 129.12 0 0046.69-55.43z" } }] })(props);
}
function IoCloudyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M100.18 241.19a15.93 15.93 0 0013.37-13.25C126.6 145.59 186.34 96 256 96c64.69 0 107.79 42.36 124.92 87a16.11 16.11 0 0012.53 10.18C449.36 202.06 496 239.21 496 304c0 66-54 112-120 112H116c-55 0-100-27.44-100-88 0-54.43 43.89-80.81 84.18-86.81z" } }] })(props);
}
function IoCloudySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M376 432H116c-32.37 0-60.23-8.57-80.59-24.77C12.24 388.78 0 361.39 0 328c0-61.85 48.44-95.34 97.75-102.64 6.52-41.18 24-76.4 51.11-102.46A153.57 153.57 0 01256 80c35.5 0 68.24 11.69 94.68 33.8a156.42 156.42 0 0145.22 63.61c30.26 4.81 57.45 17.18 77.38 35.36C498.61 235.88 512 267.42 512 304c0 36-14.38 68.88-40.49 92.59C446.36 419.43 412.44 432 376 432z" } }] })(props);
}
function IoCloudy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M376 432H116c-32.37 0-60.23-8.57-80.59-24.77C12.24 388.78 0 361.39 0 328c0-57.57 42-90.58 87.56-100.75a16 16 0 0012.12-12.39c7.68-36.68 24.45-68.15 49.18-92A153.57 153.57 0 01256 80c35.5 0 68.24 11.69 94.68 33.8a156.24 156.24 0 0142.05 56 16 16 0 0011.37 9.16c27 5.61 51.07 17.33 69.18 33.85C498.61 235.88 512 267.42 512 304c0 36-14.38 68.88-40.49 92.59C446.36 419.43 412.44 432 376 432z" } }] })(props);
}
function IoCodeDownloadOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 368L32 256l128-112m192 224l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03" } }] })(props);
}
function IoCodeDownloadSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "42", "d": "M160 368L32 256l128-112m192 224l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03" } }] })(props);
}
function IoCodeDownload(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "42", "d": "M160 368L32 256l128-112m192 224l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03" } }] })(props);
}
function IoCodeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 368L32 256l128-112m192 224l128-112-128-112" } }] })(props);
}
function IoCodeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M161.98 397.63L0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02-27.65 31.61zm188.04 0l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256 350.02 397.63z" } }] })(props);
}
function IoCodeSlashOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 368L32 256l128-112m192 224l128-112-128-112m-48-48l-96 320" } }] })(props);
}
function IoCodeSlashSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M161.98 397.63L0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02-27.65 31.61zm188.04 0l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256 350.02 397.63zM222.15 442L182 430.08 289.85 70 330 81.92 222.15 442z" } }] })(props);
}
function IoCodeSlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zm192 0a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389zm-144 48a21 21 0 01-20.12-27l96-320a21 21 0 1140.23 12l-96 320A21 21 0 01208 437z" } }] })(props);
}
function IoCodeWorkingOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "26" } }, { "tag": "circle", "attr": { "cx": "346", "cy": "256", "r": "26" } }, { "tag": "circle", "attr": { "cx": "166", "cy": "256", "r": "26" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 368L32 256l128-112m192 224l128-112-128-112" } }] })(props);
}
function IoCodeWorkingSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "26", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "10" } }, { "tag": "circle", "attr": { "cx": "346", "cy": "256", "r": "26", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "10" } }, { "tag": "circle", "attr": { "cx": "166", "cy": "256", "r": "26", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "10" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "42", "d": "M160 368L32 256l128-112m192 224l128-112-128-112" } }] })(props);
}
function IoCodeWorking(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "26", "strokeMiterlimit": "10", "strokeWidth": "10" } }, { "tag": "circle", "attr": { "cx": "346", "cy": "256", "r": "26", "strokeMiterlimit": "10", "strokeWidth": "10" } }, { "tag": "circle", "attr": { "cx": "166", "cy": "256", "r": "26", "strokeMiterlimit": "10", "strokeWidth": "10" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "42", "d": "M160 368L32 256l128-112m192 224l128-112-128-112" } }] })(props);
}
function IoCode(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zm192 0a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389z" } }] })(props);
}
function IoCogOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M456.7 242.27l-26.08-4.2a8 8 0 01-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08 8.08 0 013.9-8.62l23.09-12.82a8.05 8.05 0 003.9-9.92l-4-11a7.94 7.94 0 00-9.4-5l-25.89 5a8 8 0 01-8.59-4.11q-2.25-4.2-4.8-8.41a8.16 8.16 0 01.7-9.52l17.29-19.94a8 8 0 00.3-10.62l-7.49-9a7.88 7.88 0 00-10.5-1.51l-22.69 13.63a8 8 0 01-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8 8 0 01-2.5-9.11l9.4-24.75A8 8 0 00365 78.77l-10.2-5.91a8 8 0 00-10.39 2.21l-16.64 20.84a7.15 7.15 0 01-8.5 2.5s-5.6-2.3-9.8-3.71A8 8 0 01304 87l.4-26.45a8.07 8.07 0 00-6.6-8.42l-11.59-2a8.07 8.07 0 00-9.1 5.61l-8.6 25.05a8 8 0 01-7.79 5.41h-9.8a8.07 8.07 0 01-7.79-5.41l-8.6-25.05a8.07 8.07 0 00-9.1-5.61l-11.59 2a8.07 8.07 0 00-6.6 8.42l.4 26.45a8 8 0 01-5.49 7.71c-2.3.9-7.3 2.81-9.7 3.71-2.8 1-6.1.2-8.8-2.91l-16.51-20.34A8 8 0 00156.75 73l-10.2 5.91a7.94 7.94 0 00-3.3 10.09l9.4 24.75a8.06 8.06 0 01-2.5 9.11c-2.5 2-5 4.11-7.4 6.22a8 8 0 01-9.39.9L111 116.14a8 8 0 00-10.5 1.51l-7.49 9a8 8 0 00.3 10.62l17.29 19.94a8 8 0 01.7 9.52q-2.55 4-4.8 8.41a8.11 8.11 0 01-8.59 4.11l-25.89-5a8 8 0 00-9.4 5l-4 11a8.05 8.05 0 003.9 9.92L85.58 213a7.94 7.94 0 013.9 8.62c-.6 3.2-1.2 6.31-1.7 9.51a8.08 8.08 0 01-6.6 6.82l-26.08 4.2a8.09 8.09 0 00-7.1 7.92v11.72a7.86 7.86 0 007.1 7.92l26.08 4.2a8 8 0 016.6 6.82c.5 3.2 1 6.41 1.7 9.51a8.08 8.08 0 01-3.9 8.62L62.49 311.7a8.05 8.05 0 00-3.9 9.92l4 11a7.94 7.94 0 009.4 5l25.89-5a8 8 0 018.59 4.11q2.25 4.2 4.8 8.41a8.16 8.16 0 01-.7 9.52l-17.29 19.96a8 8 0 00-.3 10.62l7.49 9a7.88 7.88 0 0010.5 1.51l22.69-13.63a8 8 0 019.39.9c2.4 2.11 4.9 4.21 7.4 6.22a8 8 0 012.5 9.11l-9.4 24.75a8 8 0 003.3 10.12l10.2 5.91a8 8 0 0010.39-2.21l16.79-20.64c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.61a8 8 0 015.49 7.71l-.4 26.45a8.07 8.07 0 006.6 8.42l11.59 2a8.07 8.07 0 009.1-5.61l8.6-25a8 8 0 017.79-5.41h9.8a8.07 8.07 0 017.79 5.41l8.6 25a8.07 8.07 0 009.1 5.61l11.59-2a8.07 8.07 0 006.6-8.42l-.4-26.45a8 8 0 015.49-7.71c4.2-1.41 7-2.51 9.6-3.51s5.8-1 8.3 2.1l17 20.94A8 8 0 00355 439l10.2-5.91a7.93 7.93 0 003.3-10.12l-9.4-24.75a8.08 8.08 0 012.5-9.12c2.5-2 5-4.1 7.4-6.21a8 8 0 019.39-.9L401 395.66a8 8 0 0010.5-1.51l7.49-9a8 8 0 00-.3-10.62l-17.29-19.94a8 8 0 01-.7-9.52q2.55-4.05 4.8-8.41a8.11 8.11 0 018.59-4.11l25.89 5a8 8 0 009.4-5l4-11a8.05 8.05 0 00-3.9-9.92l-23.09-12.82a7.94 7.94 0 01-3.9-8.62c.6-3.2 1.2-6.31 1.7-9.51a8.08 8.08 0 016.6-6.82l26.08-4.2a8.09 8.09 0 007.1-7.92V250a8.25 8.25 0 00-7.27-7.73zM256 112a143.82 143.82 0 01139.38 108.12A16 16 0 01379.85 240H274.61a16 16 0 01-13.91-8.09l-52.1-91.71a16 16 0 019.85-23.39A146.94 146.94 0 01256 112zM112 256a144 144 0 0143.65-103.41 16 16 0 0125.17 3.47L233.06 248a16 16 0 010 15.87l-52.67 91.7a16 16 0 01-25.18 3.36A143.94 143.94 0 01112 256zm144 144a146.9 146.9 0 01-38.19-4.95 16 16 0 01-9.76-23.44l52.58-91.55a16 16 0 0113.88-8H379.9a16 16 0 0115.52 19.88A143.84 143.84 0 01256 400z" } }] })(props);
}
function IoCogSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 249.93a10.58 10.58 0 00-9.36-9.94L429 235.84a5.42 5.42 0 01-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 012.63-5.85l22.78-12.65a10.35 10.35 0 005-12.83l-3.95-10.9a10.32 10.32 0 00-12.13-6.51l-25.55 5a5.5 5.5 0 01-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 01.44-6.5l17-19.63a10.44 10.44 0 00.39-13.77l-7.42-8.91a10.24 10.24 0 00-13.58-2l-22.37 13.43a5.39 5.39 0 01-6.39-.63c-2.47-2.17-4.95-4.26-7.37-6.19a5.45 5.45 0 01-1.72-6.21l9.26-24.4a10.35 10.35 0 00-4.31-13.07l-10.08-5.85a10.31 10.31 0 00-13.46 2.83L325 96.28a4.58 4.58 0 01-5.6 1.72c-.62-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 01-3.74-5.23l.39-26.07a10.48 10.48 0 00-8.57-10.88l-11.45-2a10.45 10.45 0 00-11.75 7.17L266 82.1a5.42 5.42 0 01-5.36 3.65h-9.75a5.53 5.53 0 01-5.3-3.67l-8.46-24.67a10.46 10.46 0 00-11.77-7.25l-11.46 2a10.46 10.46 0 00-8.57 10.79l.4 26.16a5.45 5.45 0 01-3.86 5.25c-2.28.89-7.26 2.78-9.51 3.63-2 .72-4.19-.07-6-2.1l-16.26-20A10.3 10.3 0 00156.69 73l-10.06 5.83A10.36 10.36 0 00142.31 92l9.25 24.34a5.54 5.54 0 01-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 01-6.35.64L114 115.74a10.39 10.39 0 00-13.61 2l-7.4 8.9a10.32 10.32 0 00.37 13.76l17.09 19.6a5.42 5.42 0 01.45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 01-5.86 2.82l-25.51-4.93a10.34 10.34 0 00-12.14 6.51l-4 10.88a10.37 10.37 0 005 12.85l22.78 12.65a5.39 5.39 0 012.65 5.92l-.23 1.24c-.53 2.8-1 5.45-1.47 8.27a5.48 5.48 0 01-4.46 4.64l-25.7 4.15A10.42 10.42 0 0048 250.16v11.58A10.26 10.26 0 0057.16 272l25.68 4.14a5.41 5.41 0 014.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 01-2.63 5.85l-22.77 12.67a10.35 10.35 0 00-5 12.83l4 10.9a10.33 10.33 0 0012.13 6.51l25.55-4.95a5.5 5.5 0 015.82 2.81c1.5 2.8 3.12 5.64 4.8 8.42a5.58 5.58 0 01-.44 6.5l-17 19.64a10.41 10.41 0 00-.5 13.76l7.41 8.91a10.24 10.24 0 0013.58 2l22.37-13.43a5.39 5.39 0 016.39.63c2.48 2.17 5 4.26 7.37 6.19a5.45 5.45 0 011.72 6.21l-9.26 24.4a10.35 10.35 0 004.31 13.07l10.11 5.84a10.3 10.3 0 0013.45-2.82L187 415.92c1.39-1.73 3.6-2.5 5.24-1.84 3.47 1.44 5.8 2.25 9.93 3.63a5.44 5.44 0 013.75 5.23l-.4 26.05a10.5 10.5 0 008.57 10.88l11.45 2a10.44 10.44 0 0011.75-7.17l8.5-24.77a5.48 5.48 0 015.36-3.65h9.75a5.52 5.52 0 015.3 3.67l8.47 24.67a10.48 10.48 0 0010 7.41 9.74 9.74 0 001.78-.16l11.47-2a10.46 10.46 0 008.56-10.79l-.4-26.16a5.43 5.43 0 013.75-5.2c3.84-1.29 6.53-2.33 8.91-3.24l.6-.24c3.06-1.06 4.53.14 5.47 1.31l16.75 20.63A10.3 10.3 0 00355 439l10.07-5.83a10.35 10.35 0 004.31-13.1l-9.24-24.34a5.52 5.52 0 011.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 016.38-.62l22.39 13.4a10.39 10.39 0 0013.61-2l7.4-8.9a10.31 10.31 0 00-.37-13.75l-17.06-19.67a5.42 5.42 0 01-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.56 5.56 0 015.86-2.82l25.48 4.97a10.34 10.34 0 0012.14-6.51l3.95-10.88a10.36 10.36 0 00-5-12.84l-22.8-12.67a5.4 5.4 0 01-2.61-5.89l.23-1.25c.53-2.8 1-5.44 1.47-8.26a5.48 5.48 0 014.46-4.64l25.7-4.14a10.43 10.43 0 009.17-10.28v-11.71zM171.59 361.27a135.12 135.12 0 01.5-210.94l60 105.61zM256 391.11a133.75 133.75 0 01-48.49-9.05L268 276.79h121.22C379.21 341.45 323.29 391.11 256 391.11zm12.06-155.9l-59.95-105.5a133.87 133.87 0 0147.89-8.82c67.29 0 123.21 49.66 133.22 114.32z" } }] })(props);
}
function IoCog(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 249.93a10.58 10.58 0 00-9.36-9.94L429 235.84a5.42 5.42 0 01-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 012.63-5.85l22.78-12.65a10.35 10.35 0 005-12.83l-3.95-10.9a10.32 10.32 0 00-12.13-6.51l-25.55 5a5.51 5.51 0 01-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 01.44-6.5l17-19.64a10.42 10.42 0 00.39-13.76l-7.42-8.91a10.24 10.24 0 00-13.58-2l-22.37 13.43a5.39 5.39 0 01-6.39-.63c-2.47-2.17-5-4.26-7.37-6.19a5.45 5.45 0 01-1.72-6.21l9.26-24.4a10.35 10.35 0 00-4.31-13.07l-10.09-5.89a10.3 10.3 0 00-13.45 2.83L325 96.28a4.6 4.6 0 01-5.6 1.72c-.61-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 01-3.74-5.23l.39-26.07a10.48 10.48 0 00-8.57-10.88l-11.45-2a10.45 10.45 0 00-11.75 7.17L266 82.1a5.46 5.46 0 01-5.36 3.65h-9.75a5.5 5.5 0 01-5.3-3.67l-8.46-24.67a10.46 10.46 0 00-11.77-7.25l-11.47 2a10.46 10.46 0 00-8.56 10.79l.4 26.16a5.45 5.45 0 01-3.86 5.25c-2.29.89-7.26 2.79-9.52 3.63-2 .72-4.18-.07-5.94-2.1l-16.26-20A10.3 10.3 0 00156.69 73l-10.06 5.83A10.36 10.36 0 00142.31 92l9.25 24.34a5.54 5.54 0 01-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 01-6.35.64L114 115.74a10.4 10.4 0 00-13.61 2L93 126.63a10.31 10.31 0 00.37 13.75L110.45 160a5.42 5.42 0 01.45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 01-5.86 2.82l-25.51-4.93a10.34 10.34 0 00-12.14 6.51l-4 10.88a10.38 10.38 0 005 12.85l22.78 12.65a5.39 5.39 0 012.65 5.92l-.24 1.27c-.52 2.79-1 5.43-1.46 8.24a5.48 5.48 0 01-4.46 4.64l-25.69 4.15A10.42 10.42 0 0048 250.16v11.58A10.26 10.26 0 0057.16 272l25.68 4.14a5.41 5.41 0 014.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 01-2.63 5.85l-22.77 12.67a10.35 10.35 0 00-5 12.83l4 10.9a10.33 10.33 0 0012.13 6.51l25.55-4.95a5.49 5.49 0 015.82 2.81c1.5 2.8 3.11 5.63 4.8 8.42a5.58 5.58 0 01-.44 6.5l-17 19.63a10.41 10.41 0 00-.5 13.77l7.41 8.91a10.23 10.23 0 0013.58 2l22.37-13.43a5.39 5.39 0 016.39.63c2.48 2.17 5 4.26 7.37 6.19a5.47 5.47 0 011.73 6.21l-9.27 24.4a10.35 10.35 0 004.31 13.07l10.11 5.84a10.3 10.3 0 0013.45-2.82L187 415.92c1.4-1.73 3.6-2.5 5.23-1.84 3.48 1.44 5.81 2.25 9.94 3.63a5.44 5.44 0 013.75 5.23l-.4 26.05a10.5 10.5 0 008.57 10.88l11.45 2a10.43 10.43 0 0011.75-7.17l8.5-24.77a5.45 5.45 0 015.36-3.65h9.75a5.49 5.49 0 015.3 3.67l8.47 24.67a10.48 10.48 0 0010 7.41 9.74 9.74 0 001.78-.16l11.47-2a10.46 10.46 0 008.56-10.79l-.4-26.16a5.43 5.43 0 013.75-5.2c3.84-1.29 6.54-2.33 8.91-3.25l.6-.23c3.1-1.07 4.6.23 5.47 1.31l16.75 20.63A10.3 10.3 0 00355 439l10.07-5.83a10.35 10.35 0 004.31-13.1l-9.24-24.34a5.52 5.52 0 011.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 016.38-.62l22.39 13.4a10.39 10.39 0 0013.61-2l7.4-8.9a10.31 10.31 0 00-.37-13.75l-17.06-19.67a5.42 5.42 0 01-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.55 5.55 0 015.86-2.82l25.48 4.97a10.34 10.34 0 0012.14-6.51l3.95-10.88a10.37 10.37 0 00-5-12.84l-22.8-12.67a5.4 5.4 0 01-2.61-5.89l.24-1.27c.52-2.79 1-5.43 1.46-8.24a5.48 5.48 0 014.46-4.64l25.69-4.14a10.43 10.43 0 009.18-10.28v-11.71zm-282.45 94a15.8 15.8 0 01-25.47 2.66 135.06 135.06 0 01.42-181.65 15.81 15.81 0 0125.5 2.77l45.65 80.35a15.85 15.85 0 010 15.74zM256 391.11a134.75 134.75 0 01-28.31-3 15.81 15.81 0 01-10.23-23.36l46-80a15.79 15.79 0 0113.7-7.93h92.14a15.8 15.8 0 0115.1 20.53c-17.49 54.32-68.4 93.76-128.4 93.76zm7.51-163.9L218 147.07a15.81 15.81 0 0110.31-23.3 134 134 0 0127.69-2.88c60 0 110.91 39.44 128.37 93.79a15.8 15.8 0 01-15.1 20.53h-92a15.78 15.78 0 01-13.76-8z" } }] })(props);
}
function IoColorFillOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M419.1 337.45a3.94 3.94 0 00-6.1 0c-10.5 12.4-45 46.55-45 77.66 0 27 21.5 48.89 48 48.89h0c26.5 0 48-22 48-48.89 0-31.11-34.3-65.26-44.9-77.66zM387 287.9L155.61 58.36a36 36 0 00-51 0l-5.15 5.15a36 36 0 000 51l52.89 52.89 57-57L56.33 263.2a28 28 0 00.3 40l131.2 126a28.05 28.05 0 0038.9-.1c37.8-36.6 118.3-114.5 126.7-122.9 5.8-5.8 18.2-7.1 28.7-7.1h.3a6.53 6.53 0 004.57-11.2z" } }] })(props);
}
function IoColorFillSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 320s-64 48-64 99.84c0 33.28 28.67 60.16 64 60.16s64-27 64-60.16C480 368 416 320 416 320zM144 32l-76 76 70 70L32 280l176 184 152.8-148.3L416 304zm24 116l-39.6-41 15.88-15.89L184 132z" } }] })(props);
}
function IoColorFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 480c-35.29 0-64-29.11-64-64.88 0-33.29 28.67-65.4 44.08-82.64 1.87-2.1 3.49-3.91 4.68-5.31a19.94 19.94 0 0130.55 0c1.13 1.31 2.63 3 4.36 4.93 15.5 17.3 44.33 49.51 44.33 83.05 0 35.74-28.71 64.85-64 64.85zm-17.77-203.36L166.89 47.22a52.1 52.1 0 00-73.6 0l-4.51 4.51a53.2 53.2 0 00-15.89 37.33A51.66 51.66 0 0088.14 126l41.51 41.5L45 252a44.52 44.52 0 00-13 32 42.81 42.81 0 0013.5 30.84l131.24 126a44 44 0 0061.08-.18l124.11-120.28a15.6 15.6 0 018.23-4.29 69.21 69.21 0 0111.93-.86h.3a22.53 22.53 0 0015.84-38.59zM152.29 144.85l-41.53-41.52a20 20 0 010-28.34l5.16-5.15a20.07 20.07 0 0128.39 0L186 111.21z" } }] })(props);
}
function IoColorFilterOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "184", "r": "120", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "344", "cy": "328", "r": "120", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "168", "cy": "328", "r": "120", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoColorFilterSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 185a167.85 167.85 0 01134.9-18.28C382.36 99.83 325.12 48 256 48S129.64 99.83 121.1 166.67A167.85 167.85 0 01256 185zm80 146.73a167.51 167.51 0 01-52.37 118.08A135 135 0 00344 464c75 0 136-61 136-136a136 136 0 00-59.06-112.08A168.53 168.53 0 01336 331.73zm-52.42-125.54a167.87 167.87 0 0149.36 89.89 136.14 136.14 0 0058.06-95.7 135.87 135.87 0 00-107.43 5.81zM176.05 331.73a168.53 168.53 0 01-85-115.81A136 136 0 0032 328c0 75 61 136 136 136a135 135 0 0060.42-14.19 167.51 167.51 0 01-52.37-118.08zm3.01-35.65a167.87 167.87 0 0149.36-89.89A135.87 135.87 0 00121 200.38a136.14 136.14 0 0058.06 95.7zm123.84 49.25a168.22 168.22 0 01-93.8 0A135.9 135.9 0 00256 431.6a135.9 135.9 0 0046.9-86.27zM209 311.62a136 136 0 0094 0 135.93 135.93 0 00-47-87.22 135.93 135.93 0 00-47 87.22z" } }] })(props);
}
function IoColorFilter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M253.72 202.53a4 4 0 004.56 0 151.88 151.88 0 01128.44-20.41 4 4 0 005.15-4C388.8 105.86 329 48 256 48s-132.8 57.86-135.87 130.15a4 4 0 005.15 4 151.88 151.88 0 01128.44 20.41zm151.59 10.03a152.53 152.53 0 01-83.08 108.23 4 4 0 00-2.28 3.69c0 1.17.05 2.34.05 3.52a151.58 151.58 0 01-47.15 109.94 4 4 0 00.64 6.31A135.24 135.24 0 00344 464c72.07 0 134.1-60.28 136-132.34a136.07 136.07 0 00-68.76-121.87 4 4 0 00-5.93 2.77z" } }, { "tag": "path", "attr": { "d": "M390.57 203.67a4 4 0 00-2.69-4.4 135.84 135.84 0 00-114.4 12.49 4 4 0 00-.64 6.29 151.92 151.92 0 0144.47 81.4 4 4 0 005.94 2.72 136.29 136.29 0 0067.32-98.5zM192 328c0-1.18 0-2.35.05-3.52a4 4 0 00-2.28-3.69 152.53 152.53 0 01-83.08-108.23 4 4 0 00-5.88-2.77 136.07 136.07 0 00-68.76 121.87C34 403.72 96 464 168.05 464a135.24 135.24 0 0070.46-19.75 4 4 0 00.64-6.31A151.58 151.58 0 01192 328z" } }, { "tag": "path", "attr": { "d": "M168 192a135.34 135.34 0 00-43.88 7.27 4 4 0 00-2.69 4.4 136.29 136.29 0 0067.32 98.5 4 4 0 005.94-2.72 151.92 151.92 0 0144.47-81.4 4 4 0 00-.64-6.29A135.18 135.18 0 00168 192zm88 144a151.44 151.44 0 01-42.72-6.12 4 4 0 00-5.15 4 135.69 135.69 0 0045.18 95.4 4 4 0 005.38 0 135.69 135.69 0 0045.18-95.4 4 4 0 00-5.15-4A151.44 151.44 0 01256 336zm46.57-27.67a135.94 135.94 0 00-43.87-81.58 4.06 4.06 0 00-5.4 0 135.94 135.94 0 00-43.87 81.58 4 4 0 002.69 4.4 136.06 136.06 0 0087.76 0 4 4 0 002.69-4.4z" } }] })(props);
}
function IoColorPaletteOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z" } }, { "tag": "circle", "attr": { "cx": "144", "cy": "208", "r": "32" } }, { "tag": "circle", "attr": { "cx": "152", "cy": "311", "r": "32" } }, { "tag": "circle", "attr": { "cx": "224", "cy": "144", "r": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "367", "r": "48" } }, { "tag": "circle", "attr": { "cx": "328", "cy": "144", "r": "32" } }] })(props);
}
function IoColorPaletteSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 352c-12.6-.84-21-4-28-12-14-16-14-36 5.49-52.48l32.82-29.14c50.27-44.41 50.27-117.21 0-161.63C389.26 64.14 339.54 48 287.86 48c-60.34 0-123.39 22-172 65.11-90.46 80-90.46 210.92 0 290.87 45 39.76 105.63 59.59 165.64 60h1.84c60 0 119.07-19.5 161.2-56.77C464 390 464 385 444.62 355.56 440 348 431 353 416 352zM112 208a32 32 0 1132 32 32 32 0 01-32-32zm40 135a32 32 0 1132-32 32 32 0 01-32 32zm40-199a32 32 0 1132 32 32 32 0 01-32-32zm64 271a48 48 0 1148-48 48 48 0 01-48 48zm72-239a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoColorPalette(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M441 336.2l-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.17 266.17 0 0086.87 15h1.81c61 0 119.09-20.57 159.39-56.4 9.7-8.56 15.15-20.83 15.34-34.56.21-14.17-5.37-27.95-14.93-36.84zM112 208a32 32 0 1132 32 32 32 0 01-32-32zm40 135a32 32 0 1132-32 32 32 0 01-32 32zm40-199a32 32 0 1132 32 32 32 0 01-32-32zm64 271a48 48 0 1148-48 48 48 0 01-48 48zm72-239a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoColorWandOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "63.03", "height": "378.2", "x": "280.48", "y": "122.9", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "31.52", "transform": "rotate(-45 312.002 311.994)" } }, { "tag": "path", "attr": { "d": "M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z" } }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M48 192h48M90.18 90.18l33.94 33.94M192 48v48m101.82-5.82l-33.94 33.94M124.12 259.88l-33.94 33.94" } }] })(props);
}
function IoColorWandSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M133.441 200.647l67.197-67.196 78.142 78.142-67.196 67.196zM301.41 234.21l-67.19 67.2L412 480l68-68-178.59-177.79zM32 176h80v32H32zm35.624-85.75l22.627-22.628 56.569 56.569-22.627 22.627zM176 32h32v80h-32zm61.32 92.195l56.569-56.569 22.627 22.627-56.569 56.569zM67.62 293.887l56.569-56.569 22.627 22.627-56.569 56.569z" } }] })(props);
}
function IoColorWand(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M96 208H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16zm28.1-67.9c-4.2 0-8.3-1.7-11.3-4.7l-33.9-33.9c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l33.9 33.9c6.3 6.2 6.3 16.4 0 22.6-3 3-7 4.7-11.3 4.7zM192 112c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 8.8-7.2 16-16 16zm67.9 28.1c-8.8 0-16-7.2-16-16 0-4.2 1.7-8.3 4.7-11.3l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6l-33.9 33.9c-3 3-7.1 4.7-11.3 4.7zM90.2 309.8c-8.8 0-16-7.2-16-16 0-4.2 1.7-8.3 4.7-11.3l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-33.9 33.9c-3 3-7.1 4.7-11.3 4.7zm144-142.8c-18.4-18.7-48.5-19-67.2-.7s-19 48.5-.7 67.2l.7.7 39.5 39.5c3.1 3.1 8.2 3.1 11.3 0l55.9-55.9c3.1-3.1 3.1-8.2 0-11.3L234.2 167zM457 389.8L307.6 240.4c-3.1-3.1-8.2-3.1-11.3 0l-55.9 55.9c-3.1 3.1-3.1 8.2 0 11.3L389.8 457c18.4 18.7 48.5 19 67.2.7 18.7-18.4 19-48.5.7-67.2-.2-.2-.4-.5-.7-.7z" } }] })(props);
}
function IoCompassOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "d": "M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z" } }] })(props);
}
function IoCompassSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "24" } }, { "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48 256l-160 64 64-160 160-64z" } }] })(props);
}
function IoCompass(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "24" } }, { "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm105.07 113.33l-46.88 117.2a64 64 0 01-35.66 35.66l-117.2 46.88a8 8 0 01-10.4-10.4l46.88-117.2a64 64 0 0135.66-35.66l117.2-46.88a8 8 0 0110.4 10.4z" } }] })(props);
}
function IoConstructOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52m49.18 46.58c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z" } }] })(props);
}
function IoConstructSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M497.14 111.38l-81.09 80.84-48.58-48.41L448.56 63c-45.22-22-108.65-22.09-146.2 15.35-35.32 35.2-39.73 90.61-22.54 134.2L99.57 391.37a12 12 0 000 17l52.27 52.11a12 12 0 0017 0l180-180.5c43.16 16.21 98 11.64 132.74-23 37.5-37.45 37.42-100.34 15.56-145.6z" } }, { "tag": "path", "attr": { "d": "M365.45 308.62l-71.83 72 75.53 79.92a10.88 10.88 0 0015.65.21l60-60.46a11 11 0 00-.24-15.69zM119 212c0-4.87-4-9.33-7.45-12.78l-.25-.24-1.54-1.47a1.06 1.06 0 01-.26-.8 16.16 16.16 0 019.52-2c1.27.13 5.91.9 12.4 4.91 3.38 2.09 32.63 30.23 43.93 40.7a11 11 0 00.14 15.35l7.43 7.86 65.66-65.17-8.25-7.84a10.87 10.87 0 00-15.31-.06c-23-24.68-29-35.45-31-42.45-4.42-15.47 4.14-28 14-36 5.84-4.62 17.88-8.08 29-9a52.72 52.72 0 0111.61.6c3.47.5 6.3 1.14 7.39 1.4a68.51 68.51 0 0111 4l12-19a88.38 88.38 0 00-13.4-17.7 115.05 115.05 0 00-5.19-5.1c-7.78-7.15-28-19.2-54.59-19.2a117.38 117.38 0 00-44.77 8.82c-37.44 15.34-61.88 36.25-73.11 47.35l-.07.07A219.55 219.55 0 0067 128.56c-5.35 7.53-4.77 15.84-4.38 21.34 0 .32 0 .67.07 1a18.41 18.41 0 00-10.78-3.5A18 18 0 0039 152.73L2 189.62a6.79 6.79 0 000 9.6L65 262a6.72 6.72 0 009.5 0l37.06-37c3.44-3.44 7.44-8.14 7.44-13z" } }] })(props);
}
function IoConstruct(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M503.58 126.2a16.85 16.85 0 00-27.07-4.55l-51.15 51.15a11.15 11.15 0 01-15.66 0l-22.48-22.48a11.17 11.17 0 010-15.67l50.88-50.89a16.85 16.85 0 00-5.27-27.4c-39.71-17-89.08-7.45-120 23.29-26.81 26.61-34.83 68-22 113.7a11 11 0 01-3.16 11.1L114.77 365.1a56.76 56.76 0 1080.14 80.18L357 272.08a11 11 0 0110.9-3.17c45 12 86 4 112.43-22 15.2-15 25.81-36.17 29.89-59.71 3.83-22.2 1.41-44.44-6.64-61z" } }, { "tag": "path", "attr": { "d": "M437.33 378.41c-13.94-11.59-43.72-38.4-74.07-66.22l-66.07 70.61c28.24 30 53.8 57.85 65 70.88l.07.08A30 30 0 00383.72 464h1.1a30.11 30.11 0 0021-8.62l.07-.07 33.43-33.37a29.46 29.46 0 00-2-43.53zM118.54 214.55a20.48 20.48 0 00-3-10.76 2.76 2.76 0 012.62-4.22h.06c.84.09 5.33.74 11.7 4.61 4.73 2.87 18.23 12.08 41.73 35.54a34.23 34.23 0 007.22 22.12l66.23-61.55a33.73 33.73 0 00-21.6-9.2 2.65 2.65 0 01-.21-.26l-.65-.69-24.54-33.84a28.45 28.45 0 01-4-26.11 35.23 35.23 0 0111.78-16.35c5.69-4.41 18.53-9.72 29.44-10.62a52.92 52.92 0 0115.19.94 65.57 65.57 0 017.06 2.13 15.46 15.46 0 002.15.63 16 16 0 0016.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a91.85 91.85 0 00-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.13 123.13 0 00-46.3 9c-38.37 15.45-63.47 36.58-75.01 47.79l-.09.09A222.14 222.14 0 0063.7 129.5a27 27 0 00-4.7 11.77 7.33 7.33 0 01-7.71 6.17H50.2a20.65 20.65 0 00-14.59 5.9L6.16 182.05l-.32.32a20.89 20.89 0 00-.24 28.72c.19.2.37.39.57.58L53.67 258a21 21 0 0014.65 6 20.65 20.65 0 0014.59-5.9l29.46-28.79a20.51 20.51 0 006.17-14.76z" } }] })(props);
}
function IoContractOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 416V304h112m-101.8 10.23L432 432M208 96v112H96m101.8-10.23L80 80m336 128H304V96m10.23 101.8L432 80M96 304h112v112m-10.23-101.8L80 432" } }] })(props);
}
function IoContractSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M304 416V304h112m-101.8 10.23L432 432M208 96v112H96m101.8-10.23L80 80m336 128H304V96m10.23 101.8L432 80M96 304h112v112m-10.23-101.8L80 432" } }] })(props);
}
function IoContract(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 416V304h112m-101.8 10.23L432 432M208 96v112H96m101.8-10.23L80 80m336 128H304V96m10.23 101.8L432 80M96 304h112v112m-10.23-101.8L80 432" } }] })(props);
}
function IoContrastOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "d": "M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z" } }] })(props);
}
function IoContrastSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zM128.72 383.28A180 180 0 01256 76v360a178.82 178.82 0 01-127.28-52.72z" } }] })(props);
}
function IoContrast(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32A224 224 0 0097.61 414.39 224 224 0 10414.39 97.61 222.53 222.53 0 00256 32zM64 256c0-105.87 86.13-192 192-192v384c-105.87 0-192-86.13-192-192z" } }] })(props);
}
function IoCopyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "336", "height": "336", "x": "128", "y": "128", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "57", "ry": "57" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" } }] })(props);
}
function IoCopySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M456 480H136a24 24 0 01-24-24V128a16 16 0 0116-16h328a24 24 0 0124 24v320a24 24 0 01-24 24z" } }, { "tag": "path", "attr": { "d": "M112 80h288V56a24 24 0 00-24-24H60a28 28 0 00-28 28v316a24 24 0 0024 24h24V112a32 32 0 0132-32z" } }] })(props);
}
function IoCopy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M408 480H184a72 72 0 01-72-72V184a72 72 0 0172-72h224a72 72 0 0172 72v224a72 72 0 01-72 72z" } }, { "tag": "path", "attr": { "d": "M160 80h235.88A72.12 72.12 0 00328 32H104a72 72 0 00-72 72v224a72.12 72.12 0 0048 67.88V160a80 80 0 0180-80z" } }] })(props);
}
function IoCreateOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" } }, { "tag": "path", "attr": { "d": "M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" } }] })(props);
}
function IoCreateSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464.37 49.2a22.07 22.07 0 00-31.88-.76l-18.31 18.25 31.18 31.1 18-17.91a22.16 22.16 0 001.01-30.68zM252.76 336H176v-76.76l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6l-9.38 9.4zM400 143.16l32.79-32.86-31.09-31.09L368.85 112H400v31.16z" } }, { "tag": "path", "attr": { "d": "M208 304h31.49L400 143.16V112h-31.15L208 272.51V304z" } }] })(props);
}
function IoCreate(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" } }, { "tag": "path", "attr": { "d": "M386.34 193.66L264.45 315.79A41.08 41.08 0 01247.58 326l-25.9 8.67a35.92 35.92 0 01-44.33-44.33l8.67-25.9a41.08 41.08 0 0110.19-16.87l122.13-121.91a8 8 0 00-5.65-13.66H104a56 56 0 00-56 56v240a56 56 0 0056 56h240a56 56 0 0056-56V199.31a8 8 0 00-13.66-5.65z" } }] })(props);
}
function IoCropOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M144 48v272a48 48 0 0048 48h272" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M368 304V192a48 48 0 00-48-48H208m160 224v96M144 144H48" } }] })(props);
}
function IoCropSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44H166z" } }, { "tag": "path", "attr": { "d": "M346 320h44V122H192v44h154v154z" } }] })(props);
}
function IoCrop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M458 346H192a26 26 0 01-26-26V54a22 22 0 00-44 0v68H54a22 22 0 000 44h68v154a70.08 70.08 0 0070 70h154v68a22 22 0 0044 0v-68h68a22 22 0 000-44z" } }, { "tag": "path", "attr": { "d": "M214 166h106a26 26 0 0126 26v106a22 22 0 0044 0V192a70.08 70.08 0 00-70-70H214a22 22 0 000 44z" } }] })(props);
}
function IoCubeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M69 153.99l187 110 187-110m-187 310v-200" } }] })(props);
}
function IoCubeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 170v196.92L240 480V284L48 170zm224 310l192-113.08V170L272 284zm176-122.36zM448 144L256 32 64 144l192 112 192-112z" } }] })(props);
}
function IoCube(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M440.9 136.3a4 4 0 000-6.91L288.16 40.65a64.14 64.14 0 00-64.33 0L71.12 129.39a4 4 0 000 6.91L254 243.88a4 4 0 004.06 0zM54 163.51a4 4 0 00-6 3.49v173.89a48 48 0 0023.84 41.39L234 479.51a4 4 0 006-3.46V274.3a4 4 0 00-2-3.46zM272 275v201a4 4 0 006 3.46l162.15-97.23A48 48 0 00464 340.89V167a4 4 0 00-6-3.45l-184 108a4 4 0 00-2 3.45z" } }] })(props);
}
function IoCutOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "104", "cy": "152", "r": "56", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "104", "cy": "360", "r": "56", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M157 175l-11 15 37 15s3.46-6.42 7-10z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M154.17 334.43L460 162c-2.5-6.7-28-12-64-4-29.12 6.47-121.16 29.05-159.16 56.05C205.85 236.06 227 272 192 298c-25.61 19-44.43 22.82-44.43 22.82zm190.3-56.19L295 306.67c14.23 6.74 65.54 33.27 117 36.33 14.92.89 30 .39 39-6z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "240", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoCutSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 128h-48l-198.94 70.46-59.13-31.59a72.16 72.16 0 10-25.69 41.47l52.2 31.72L192 277l-43.64 26.76a71.74 71.74 0 1024.79 38L480 160zm-376.52 64a40 40 0 1140-40 40 40 0 01-40 40zm0 208a40 40 0 1140-40 40 40 0 01-40 40zm152-144a16 16 0 1116-16 16 16 0 01-16 16z" } }, { "tag": "path", "attr": { "d": "M343.79 259.87l-83.74 48.18L432 368h47.99l.01-32-136.21-76.13z" } }] })(props);
}
function IoCut(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M103.48 224a71.64 71.64 0 0044.76-15.66l41.5 16.89 6.82-12.63a39.15 39.15 0 014.32-6.37l14.22-14.42-41.17-24.94A72 72 0 10103.48 224zm0-112a40 40 0 11-40 40 40 40 0 0140-40z" } }, { "tag": "path", "attr": { "d": "M480 169l-5.52-12.58c-4.48-10.42-14.74-16-32.78-17.85-10.12-1-26.95-1.24-49.69 3.81-20 4.45-122.14 28.2-164.95 58.62-20.25 14.39-24.06 33.67-27.06 49.16-2.78 14.14-5 25.31-18 35-15 11.14-27.27 16.38-33.58 18.6a71.74 71.74 0 1024.79 38zm-224.52 87a16 16 0 1116-16 16 16 0 01-16 16zm-152 144a40 40 0 1140-40 40 40 0 01-40 40z" } }, { "tag": "path", "attr": { "d": "M343.79 259.87l-83.74 48.18 27.63 13.08 3.62 1.74C310 331.92 359.74 356 410.53 359c3.89.23 7.47.34 10.78.34C442 359.31 453 354 459.75 350L480 336z" } }] })(props);
}
function IoDesktopOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "448", "height": "320", "x": "32", "y": "64", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32", "ry": "32" } }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 448l-8-64h-80l-8 64h96z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M368 448H144" } }, { "tag": "path", "attr": { "d": "M32 304v48a32.09 32.09 0 0032 32h384a32.09 32.09 0 0032-32v-48zm224 64a16 16 0 1116-16 16 16 0 01-16 16z" } }] })(props);
}
function IoDesktopSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 48H32a16 16 0 00-16 16v320a16 16 0 0016 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0016-16V64a16 16 0 00-16-16zm-20 36v216H52V84zM240.13 354.08a16 16 0 1113.79 13.79 16 16 0 01-13.79-13.79z" } }] })(props);
}
function IoDesktop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 352a48.05 48.05 0 0048 48h133.88l-4 32H144a16 16 0 000 32h224a16 16 0 000-32h-49.88l-4-32H448a48.05 48.05 0 0048-48v-48H16zm240-16a16 16 0 11-16 16 16 16 0 0116-16zM496 96a48.05 48.05 0 00-48-48H64a48.05 48.05 0 00-48 48v192h480z" } }] })(props);
}
function IoDiamondOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M35.42 188.21l207.75 269.46a16.17 16.17 0 0025.66 0l207.75-269.46a16.52 16.52 0 00.95-18.75L407.06 55.71A16.22 16.22 0 00393.27 48H118.73a16.22 16.22 0 00-13.79 7.71L34.47 169.46a16.52 16.52 0 00.95 18.75zM48 176h416" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 64l-48 112-96-128M112 64l48 112 96-128m0 400l-96-272m96 272l96-272" } }] })(props);
}
function IoDiamondSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M396.31 32H264l84.19 112.26L396.31 32zm-280.62 0l48.12 112.26L248 32H115.69zM256 74.67L192 160h128l-64-85.33zm166.95-23.61L376.26 160H488L422.95 51.06zm-333.9 0L23 160h112.74L89.05 51.06zM146.68 192H24l222.8 288h.53L146.68 192zm218.64 0L264.67 480h.53L488 192H365.32zm-35.93 0H182.61L256 400l73.39-208z" } }] })(props);
}
function IoDiamond(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M121.72 32a4 4 0 00-3.72 5.56l2.3 5.43 40.7 94.9a4 4 0 006.88.82L243 38.4a4 4 0 00-3.2-6.4zm298.21 26.06l-41.28 96.37a4 4 0 003.68 5.57h101a4 4 0 003.4-6.11L427 57.53a4 4 0 00-7.07.53zM85 57.57l-59.71 96.32a4 4 0 003.4 6.11h101a4 4 0 003.67-5.58L92 58.1a4 4 0 00-7-.53zM393.27 32H267.82a1.94 1.94 0 00-1.56 3.11l79.92 106.46a1.94 1.94 0 003.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 00-1.7-2.66zM239 448l-89.43-253.49A3.78 3.78 0 00146 192H25.7a3.72 3.72 0 00-2.95 6l216 279.81a5.06 5.06 0 006.39 1.37 5 5 0 002.39-6.08zm247.3-256H366a3.75 3.75 0 00-3.54 2.51l-98.2 278.16a5.21 5.21 0 002.42 6.31 5.22 5.22 0 006.61-1.39L489.25 198a3.72 3.72 0 00-2.95-6zM259.2 78.93l56 74.67a4 4 0 01-3.2 6.4H200a4 4 0 01-3.2-6.4l56-74.67a4 4 0 016.4 0zm-7 310.31l-67.7-191.91a4 4 0 013.77-5.33h135.46a4 4 0 013.77 5.33l-67.73 191.91a4 4 0 01-7.54 0z" } }] })(props);
}
function IoDiceOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M69 153.99l187 110 187-110m-187 310v-200" } }, { "tag": "ellipse", "attr": { "cx": "256", "cy": "152", "rx": "24", "ry": "16" } }, { "tag": "ellipse", "attr": { "cx": "208", "cy": "296", "rx": "16", "ry": "24" } }, { "tag": "ellipse", "attr": { "cx": "112", "cy": "328", "rx": "16", "ry": "24" } }, { "tag": "ellipse", "attr": { "cx": "304", "cy": "296", "rx": "16", "ry": "24" } }, { "tag": "ellipse", "attr": { "cx": "400", "cy": "240", "rx": "16", "ry": "24" } }, { "tag": "ellipse", "attr": { "cx": "304", "cy": "384", "rx": "16", "ry": "24" } }, { "tag": "ellipse", "attr": { "cx": "400", "cy": "328", "rx": "16", "ry": "24" } }] })(props);
}
function IoDiceSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 366.92L240 480V284L48 170zM192 288c8.84 0 16 10.75 16 24s-7.16 24-16 24-16-10.75-16-24 7.16-24 16-24zm-96 32c8.84 0 16 10.75 16 24s-7.16 24-16 24-16-10.75-16-24 7.16-24 16-24zm176-36v196l192-113.08V170zm48 140c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm32 77.64zM256 32L64 144l192 112 192-112zm0 120c-13.25 0-24-7.16-24-16s10.75-16 24-16 24 7.16 24 16-10.75 16-24 16z" } }] })(props);
}
function IoDice(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M440.88 129.37L288.16 40.62a64.14 64.14 0 00-64.33 0L71.12 129.37a4 4 0 000 6.9L254 243.85a4 4 0 004.06 0L440.9 136.27a4 4 0 00-.02-6.9zM256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16 24 7.16 24 16-10.75 16-24 16zm-18 118.81L54 163.48a4 4 0 00-6 3.46v173.92a48 48 0 0023.84 41.39L234 479.48a4 4 0 006-3.46V274.27a4 4 0 00-2-3.46zM96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm266-172.49L274 271.56a4 4 0 00-2 3.45V476a4 4 0 006 3.46l162.15-97.23A48 48 0 00464 340.86V167a4 4 0 00-6-3.49zM320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24z" } }] })(props);
}
function IoDiscOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "96", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "32" } }] })(props);
}
function IoDiscSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "32" } }, { "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 336a80 80 0 1180-80 80.09 80.09 0 01-80 80z" } }] })(props);
}
function IoDisc(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 176a80 80 0 1080 80 80.09 80.09 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32z" } }, { "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 368a112 112 0 11112-112 112.12 112.12 0 01-112 112z" } }] })(props);
}
function IoDocumentAttachOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M208 64h66.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62V432a48 48 0 01-48 48H192a48 48 0 01-48-48V304" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M288 72v120a32 32 0 0032 32h120" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M160 80v152a23.69 23.69 0 01-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144" } }] })(props);
}
function IoDocumentAttachSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M280 240a8 8 0 01-8-8V48h-57.25a65.42 65.42 0 00-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0040-40V80h-32v152a7.75 7.75 0 01-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40 29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144H48v82.13c0 51.51 33.19 89.63 80 93.53V468a12 12 0 0012 12h312a12 12 0 0012-12V240z" } }, { "tag": "path", "attr": { "d": "M308 208h146.31a2 2 0 001.42-3.41L307.41 56.27a2 2 0 00-3.41 1.42V204a4 4 0 004 4z" } }] })(props);
}
function IoDocumentAttach(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M460 240H320a48 48 0 01-48-48V52a4 4 0 00-4-4h-53.25a65.42 65.42 0 00-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0040-40V80a16 16 0 00-32 0v152a7.75 7.75 0 01-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40 29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144a16 16 0 00-32 0v82.13c0 51.51 33.19 89.63 80 93.53V432a64 64 0 0064 64h208a64 64 0 0064-64V244a4 4 0 00-4-4z" } }, { "tag": "path", "attr": { "d": "M320 208h129.81a2 2 0 001.41-3.41L307.41 60.78a2 2 0 00-3.41 1.41V192a16 16 0 0016 16z" } }] })(props);
}
function IoDocumentLockOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M288 304v-18c0-16.63-14.26-30-32-30s-32 13.37-32 30v18" } }, { "tag": "path", "attr": { "d": "M304 416h-96a32 32 0 01-32-32v-48a32 32 0 0132-32h96a32 32 0 0132 32v48a32 32 0 01-32 32z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 50.88V176a32 32 0 0032 32h125.12" } }] })(props);
}
function IoDocumentLockSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M276 192h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42V188a4 4 0 004 4zm-20 80c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14z" } }, { "tag": "path", "attr": { "d": "M248 224a8 8 0 01-8-8V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224zm88 175.91A16.1 16.1 0 01319.91 416H192.09A16.1 16.1 0 01176 399.91V320c0-10 7-16 16-16h16v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18h16a15.8 15.8 0 0116 16z" } }] })(props);
}
function IoDocumentLock(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M288 192h129.81a2 2 0 001.41-3.41L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16zm-32 80c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14z" } }, { "tag": "path", "attr": { "d": "M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160a32 32 0 01-32 32h-96a32 32 0 01-32-32v-48a32 32 0 0132-32v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18a32 32 0 0132 32z" } }] })(props);
}
function IoDocumentOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 56v120a32 32 0 0032 32h120" } }] })(props);
}
function IoDocumentSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M240 216V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224H248a8 8 0 01-8-8z" } }, { "tag": "path", "attr": { "d": "M272 41.69V188a4 4 0 004 4h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42z" } }] })(props);
}
function IoDocumentTextOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 56v120a32 32 0 0032 32h120m-232 80h160m-160 80h160" } }] })(props);
}
function IoDocumentTextSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M272 41.69V188a4 4 0 004 4h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42z" } }, { "tag": "path", "attr": { "d": "M248 224a8 8 0 01-8-8V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224zm104 160H160v-32h192zm0-80H160v-32h192z" } }] })(props);
}
function IoDocumentText(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z" } }, { "tag": "path", "attr": { "d": "M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z" } }] })(props);
}
function IoDocument(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4z" } }, { "tag": "path", "attr": { "d": "M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z" } }] })(props);
}
function IoDocumentsOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 264.13V436c0 24.3-19.05 44-42.95 44H107c-23.95 0-43-19.7-43-44V172a44.26 44.26 0 0144-44h94.12a24.55 24.55 0 0117.49 7.36l109.15 111a25.4 25.4 0 017.24 17.77z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M200 128v108a28.34 28.34 0 0028 28h108" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 128V76a44.26 44.26 0 0144-44h94a24.83 24.83 0 0117.61 7.36l109.15 111A25.09 25.09 0 01448 168v172c0 24.3-19.05 44-42.95 44H344" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M312 32v108a28.34 28.34 0 0028 28h108" } }] })(props);
}
function IoDocumentsSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M307.94 248L216 154.52V242a6 6 0 006 6z" } }, { "tag": "path", "attr": { "d": "M184 268V144H60a12 12 0 00-12 12v328a12 12 0 0012 12h248a12 12 0 0012-12V280H196a12 12 0 01-12-12zm182-148h85.94L360 26.52V114a6 6 0 006 6z" } }, { "tag": "path", "attr": { "d": "M340 152a12 12 0 01-12-12V16H172a12 12 0 00-12 12v84h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400H452a12 12 0 0012-12V152z" } }] })(props);
}
function IoDocuments(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M298.39 248a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V236a12 12 0 0012 12z" } }, { "tag": "path", "attr": { "d": "M197 267a43.67 43.67 0 01-13-31v-92h-72a64.19 64.19 0 00-64 64v224a64 64 0 0064 64h144a64 64 0 0064-64V280h-92a43.61 43.61 0 01-31-13zm175-147h70.39a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V108a12 12 0 0012 12z" } }, { "tag": "path", "attr": { "d": "M372 152a44.34 44.34 0 01-44-44V16H220a60.07 60.07 0 00-60 60v36h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152z" } }] })(props);
}
function IoDownloadOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 272l80 80 80-80M256 48v288" } }] })(props);
}
function IoDownloadSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M272 160v147.37l64-64L358.63 266 256 368.63 153.37 266 176 243.37l64 64V160H92a12 12 0 00-12 12v296a12 12 0 0012 12h328a12 12 0 0012-12V172a12 12 0 00-12-12zM240 32h32v128h-32z" } }] })(props);
}
function IoDownload(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M376 160H272v153.37l52.69-52.68a16 16 0 0122.62 22.62l-80 80a16 16 0 01-22.62 0l-80-80a16 16 0 0122.62-22.62L240 313.37V160H136a56.06 56.06 0 00-56 56v208a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V216a56.06 56.06 0 00-56-56zM272 48a16 16 0 00-32 0v112h32z" } }] })(props);
}
function IoDuplicateOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "336", "height": "336", "x": "128", "y": "128", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "57", "ry": "57" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24m168-168v160m80-80H216" } }] })(props);
}
function IoDuplicateSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M112 80h288V56a24 24 0 00-24-24H66a34 34 0 00-34 34v310a24 24 0 0024 24h24V112a32 32 0 0132-32z" } }, { "tag": "path", "attr": { "d": "M456 112H136a24 24 0 00-24 24v320a24 24 0 0024 24h320a24 24 0 0024-24V136a24 24 0 00-24-24zm-64 200h-80v80h-32v-80h-80v-32h80v-80h32v80h80z" } }] })(props);
}
function IoDuplicate(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M408 112H184a72 72 0 00-72 72v224a72 72 0 0072 72h224a72 72 0 0072-72V184a72 72 0 00-72-72zm-32.45 200H312v63.55c0 8.61-6.62 16-15.23 16.43A16 16 0 01280 376v-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01216 280h64v-63.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01312 216v64h64a16 16 0 0116 16.77c-.42 8.61-7.84 15.23-16.45 15.23z" } }, { "tag": "path", "attr": { "d": "M395.88 80A72.12 72.12 0 00328 32H104a72 72 0 00-72 72v224a72.12 72.12 0 0048 67.88V160a80 80 0 0180-80z" } }] })(props);
}
function IoEarOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M335.72 330.76C381.73 299.5 416 251.34 416 192a160 160 0 00-320 0v206.57c0 44.26 35.74 81.43 80 81.43h0c44.26 0 66.83-25.94 77.29-40 14.77-19.81 41.71-81.56 82.43-109.24z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 304V184c0-48.4 43.2-88 96-88h0c52.8 0 96 39.6 96 88" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 239c25-18 79.82-15 79.82-15 26 0 41.17 29.42 26 50.6 0 0-36.86 42.4-41.86 61.4" } }] })(props);
}
function IoEarSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M380.48 68.09C347.09 34.5 302.88 16 256 16 159 16 80 95 80 192v206.57a97.59 97.59 0 0028 68.49A94.49 94.49 0 00176 496c19.93 0 41.06-7.69 62.8-22.87a181.46 181.46 0 0025.88-21.86C327.37 390.16 432 288.06 432 192c0-46.49-18.29-90.49-51.52-123.91zM368 200h-32v-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.41c27.5-7.84 59.89-6.62 64.26-6.41a48 48 0 0138.62 75.9c-.3.41-.61.81-.95 1.2-16.55 19-36 45.49-38.46 55l-4.07 15.47-30.94-8.14 4.07-15.47c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 00239.82 240h-.88c-10.67-.58-42.66-.25-62.12 8l-.82.35V320h-32V184c0-57.35 50.24-104 112-104s112 46.65 112 104z" } }] })(props);
}
function IoEar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 16C159 16 80 95 80 192v206.57a97.59 97.59 0 0028 68.49A94.51 94.51 0 00176 496c36.86 0 67.18-15.62 90.12-46.42 4.48-6 9.55-14.74 15.42-24.85 15.32-26.37 36.29-62.47 63.17-80.74 25.77-17.51 47.23-39.54 62-63.72C423.51 252.94 432 223.24 432 192c0-97-78.95-176-176-176zm96 184a16 16 0 01-16-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.42c27.19-7.84 58.4-6.72 64.28-6.42a48 48 0 0138.6 75.9c-.3.41-.61.81-.95 1.2-16.55 19-36 45.48-38.46 55a16 16 0 01-30.94-8.14c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 00239.82 240h-.88c-16.6-.89-45.89.8-62.94 8.31V304a16 16 0 01-32 0V184c0-57.35 50.24-104 112-104s112 46.65 112 104a16 16 0 01-16 16z" } }] })(props);
}
function IoEarthOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208z" } }, { "tag": "path", "attr": { "d": "M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75-7.43-5.18-12-12.71-21.33-15-8.15-2-16.5.08-24.55 1.47-9.15 1.58-20 2.29-26.94 9.22-6.71 6.67-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.8 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21 1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38 1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13-1.29-15.81 1.6-28.43-10.58-41.65-11.76-12.75-29-15.81-45.47-13.22-8.3 1.3-41.71 6.64-28.3-12.33 2.65-3.73 7.28-6.79 10.26-10.34 2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95 8.17 7 11.64 9.56a49.89 49.89 0 0021.81 9.36c13.66 2 42.22-5.94 42-23.46-.04-8.4-7.84-20.1-10.92-27.96zM287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11-9.45-7-17.86-17.81-30.27-18.69-5.72-.41-10.51.83-16.18-.64-5.2-1.34-9.28-4.14-14.82-3.41-10.35 1.36-16.88 12.42-28 10.92-10.55-1.42-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.67 5.78 2.15 8.51 7.81 13.7 10.67 9.73 5.33 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.22 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 008.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5.42 10-1.14 15.12-7.68 22.15-2.83 3-4.83 7.26-7.71 10.07-3.53 3.43-2.22 2.38-7.73 3.32-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13 6.83 20.57 20.61 36.48 29.51 56.16 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.2-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.09 8.72 21.53 10.08 33.36a305.22 305.22 0 007.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76 2.2 2.66 9.75 4.95 6.7 5.83 4.26.7 11.85 4.68 15.4 1.76 4.68-3.84 3.43-15.66 4.24-21 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.69 34.11-33 8.73-12.98 11.36-30.49 7.74-45.68zm-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39-2.33 2.31-7.29 10.31-10.21 8.58-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 00-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7-2-3.53-.2-11.86-.13-15.7.11-5.6-2.44-14.91-1.06-20 1.6-5.87-1.48-2.33 3.77-3.49 2.77-.62 14.21 1.39 17.66 2.11 5.48 1.14 8.5 4.55 12.82 8 11.36 9.11 23.87 16.16 36.6 23.14 9.86 5.46 12.76 12.37 6.46 23.62zm-69.6-275.53c4.74 4.63 9.2 10.11 16.27 10.57 6.69.45 13-3.17 18.84 1.38 6.48 5 11.15 11.33 19.75 12.89 8.32 1.51 17.13-3.35 19.19-11.86 2-8.11-2.31-16.93-2.57-25.07 0-1.13.61-6.15-.17-7-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 00-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22zm171.94 56.18c8.49 0 17.11-3.8 14.37-13.62-2.3-8.23-6.22-17.16-15.76-12.72-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22zm-6.78 42.97c8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0110.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54 1.81 11.05 13.66.63 16.75-3.65 2-2.79 4.71-6.93 3.8-10.56-.84-3.39-4.8-7-6.56-10.11-5.14-9-9.37-19.47-17.07-26.74-7.41-7-16.52-6.19-23.55 1.08-5.76 6-12.45 10.75-16.39 18.05-2.78 5.13-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.39 3.74 23.51z" } }] })(props);
}
function IoEarthSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M267 474l-.8-.13a.85.85 0 00.8.13zm181.9-286.22a5.51 5.51 0 00-10.67-.63A5.52 5.52 0 01433 191h-15.47a5.48 5.48 0 01-2.84-.79l-22.38-13.42a5.48 5.48 0 00-2.84-.79h-35.8a5.48 5.48 0 00-3.06.93l-44.15 29.43A5.52 5.52 0 00304 211v41.74a5.51 5.51 0 002.92 4.87l57.89 30.9a5.55 5.55 0 012.92 4.8l.27 23.49a5.53 5.53 0 002.85 4.75l23.26 12.87a5.54 5.54 0 012.85 4.83v48.6a5.52 5.52 0 009.17 4.14c9.38-8.26 22.83-20.32 24.62-23.08q4.44-6.87 8.33-14.07a207.39 207.39 0 0013.6-31c12.68-36.71 2.66-102.7-3.78-136.06zM286.4 302.8l-61.33-46a4 4 0 00-2.4-.8h-29.1a3.78 3.78 0 01-2.68-1.11l-13.72-13.72a4 4 0 00-2.83-1.17h-53.19a3.79 3.79 0 01-2.68-6.47l8.42-8.42a3.78 3.78 0 012.68-1.11h32.37a8 8 0 007.7-5.83l6.89-24.5a4 4 0 012-2.47L206 177.06a3.79 3.79 0 002.05-3.37v-12.5a3.82 3.82 0 01.68-2.17l14.6-21.02a3.75 3.75 0 011.78-1.38l20.43-7.67a3.79 3.79 0 002.46-3.55V114a3.8 3.8 0 00-1.69-3.16l-20.48-13.62A3.83 3.83 0 00222 97l-27.88 13.94a3.78 3.78 0 01-4-.41l-13.22-10.45a3.8 3.8 0 01.1-6l10.74-7.91a3.78 3.78 0 00-.09-6.16l-16.73-11.67a3.78 3.78 0 00-4-.22c-6.05 3.31-23.8 13.11-30.1 17.52a209.48 209.48 0 00-68.16 80c-1.82 3.76-4.07 7.59-4.29 11.72s-3.46 13.35-4.81 17.08a3.78 3.78 0 00.24 3.1l35.69 65.58a3.74 3.74 0 001.38 1.44l37.55 22.54a3.78 3.78 0 011.81 2.73l7.52 54.54a3.82 3.82 0 001.61 2.61l29.3 20.14a4 4 0 011.65 2.48l15.54 73.8a3.6 3.6 0 00.49 1.22c1.46 2.36 7.28 11 14.3 12.28-.65.18-1.23.59-1.88.78a47.63 47.63 0 015 1.16c2 .54 4 1 6 1.43 3.13.62 3.44 1.1 4.94-1.68 2-3.72 4.29-5 6-5.46a3.85 3.85 0 002.89-2.9l10.07-46.68a4 4 0 011.6-2.42l45-31.9a4 4 0 001.69-3.27V306a4 4 0 00-1.55-3.2z" } }, { "tag": "path", "attr": { "d": "M262 48s-3.65.21-4.39.23q-8.13.24-16.22 1.12A207.45 207.45 0 00184.21 64c2.43 1.68-1.75 3.22-1.75 3.22L189 80h35l24 12 21-12zm92.23 72.06l16.11-14a4 4 0 00-.94-6.65l-18.81-8.73a4 4 0 00-5.3 1.9l-7.75 16.21a4 4 0 001.49 5.11l10.46 6.54a4 4 0 004.74-.38zm75.41 20.61l-5.83-9c-.09-.14-.17-.28-.25-.43-1.05-2.15-9.74-19.7-17-26.51-5.45-5.15-7-3.67-7.43-2.53a3.77 3.77 0 01-1.19 1.6l-28.84 23.31a4 4 0 01-2.51.89h-14.93a4 4 0 00-2.83 1.17l-12 12a4 4 0 000 5.66l12 12a4 4 0 002.83 1.17h75.17a4 4 0 004-4.17l-.55-13.15a4 4 0 00-.64-2.01z" } }, { "tag": "path", "attr": { "d": "M256 72a184 184 0 11-130.1 53.9A182.77 182.77 0 01256 72m0-40C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" } }] })(props);
}
function IoEarth(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.74A224 224 0 1097.61 414.52 224 224 0 10414.39 97.74zM64 256.13a191.63 191.63 0 016.7-50.31c7.34 15.8 18 29.45 25.25 45.66 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.21-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.08 8.72 21.52 10.08 33.36a305.36 305.36 0 007.45 41.27c0 .1 0 .21.08.31C117.8 411.13 64 339.8 64 256.13zm192 192a193.12 193.12 0 01-32-2.68c.11-2.71.16-5.24.43-7 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.68 34.11-33 8.78-13 11.41-30.5 7.79-45.69-5.33-22.44-35.82-29.93-52.26-42.1-9.45-7-17.86-17.82-30.27-18.7-5.72-.4-10.51.83-16.18-.63-5.2-1.35-9.28-4.15-14.82-3.42-10.35 1.36-16.88 12.42-28 10.92-10.55-1.41-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.68 5.78 2.14 8.51 7.8 13.7 10.66 9.73 5.34 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.21 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.06 10-21.46 1.65-3.45 0-8.24-2.78-12.75q5.41-2.28 11-4.23a15.6 15.6 0 008 3c6.69.44 13-3.18 18.84 1.38 6.48 5 11.15 11.32 19.75 12.88 8.32 1.51 17.13-3.34 19.19-11.86 1.25-5.18 0-10.65-1.2-16a190.83 190.83 0 01105 32.21c-2-.76-4.39-.67-7.34.7-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22 8.5 0 17.11-3.8 14.37-13.62-1.19-4.26-2.81-8.69-5.42-11.37a193.27 193.27 0 0118 14.14c-.09.09-.18.17-.27.27-5.76 6-12.45 10.75-16.39 18.05-2.78 5.14-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.4 3.74 23.51 8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0110.82 4.41c3.8 3.94 3.05 7.62 3.86 12.54 1.43 8.74 9.14 4 13.83-.41a192.12 192.12 0 019.24 18.77c-5.16 7.43-9.26 15.53-21.67 6.87-7.43-5.19-12-12.72-21.33-15.06-8.15-2-16.5.08-24.55 1.47-9.15 1.59-20 2.29-26.94 9.22-6.71 6.68-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.81 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21a158 158 0 004.74 30.07A191.75 191.75 0 01256 448.13z" } }] })(props);
}
function IoEaselOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "272", "x": "48", "y": "80", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32", "ry": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 416v-64m0-272V48m144 416l-32-112M112 464l32-112" } }] })(props);
}
function IoEaselSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M468 64H278V32h-44v32H44a12 12 0 00-12 12v280a12 12 0 0012 12h78.19L89.93 470.46l36.53 9.61L161.74 368H234v64h44v-64h71.84l31 111.7 36.83-8.57L389.05 368H468a12 12 0 0012-12V76a12 12 0 00-12-12zm-26 266H70V102h372z" } }, { "tag": "path", "attr": { "d": "M88 120h336v192H88z" } }] })(props);
}
function IoEasel(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "352", "height": "208", "x": "80", "y": "112", "rx": "12", "ry": "12" } }, { "tag": "path", "attr": { "d": "M432 64H272V48a16 16 0 00-32 0v16H80a48.05 48.05 0 00-48 48v208a48.05 48.05 0 0048 48h42.79l-26.17 91.6a16 16 0 1030.76 8.8L156.07 368H240v48a16 16 0 0032 0v-48h83.93l28.69 100.4a16 16 0 1030.76-8.8L389.21 368H432a48.05 48.05 0 0048-48V112a48.05 48.05 0 00-48-48zm16 256a16 16 0 01-16 16H80a16 16 0 01-16-16V112a16 16 0 0116-16h352a16 16 0 0116 16z" } }] })(props);
}
function IoEggOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 48C192 48 96 171.69 96 286.55S160 464 256 464s160-62.59 160-177.45S320 48 256 48z" } }] })(props);
}
function IoEggSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M418.39 381.05c-8.08 21.68-19.76 40.1-34.72 54.75-14.38 14.07-32.1 24.95-52.67 32.34C309.08 476 283.85 480 256 480s-53.08-4-75-11.86c-20.57-7.39-38.29-18.27-52.67-32.34-15-14.65-26.64-33.07-34.72-54.75C84.58 356.82 80 328.53 80 296.94c0-30.28 6.68-62.57 19.86-96A371 371 0 01151 111.42C195.78 53.56 241 32 256 32s62.67 22.4 105 79.42c18.33 24.71 38.87 58.34 51.17 89.54 13.18 33.41 19.86 65.7 19.86 96-.03 31.57-4.61 59.86-13.64 84.09z" } }] })(props);
}
function IoEgg(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 480c-52.57 0-96.72-17.54-127.7-50.73C96.7 395.4 80 346.05 80 286.55 80 230.5 101.48 168 138.93 115 175.65 63 219.41 32 256 32s80.35 31 117.07 83C410.52 168 432 230.5 432 286.55c0 59.5-16.7 108.85-48.3 142.72C352.72 462.46 308.57 480 256 480z" } }] })(props);
}
function IoEllipseOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "192", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoEllipseSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" } }] })(props);
}
function IoEllipse(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" } }] })(props);
}
function IoEllipsisHorizontalCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "26" } }, { "tag": "circle", "attr": { "cx": "346", "cy": "256", "r": "26" } }, { "tag": "circle", "attr": { "cx": "166", "cy": "256", "r": "26" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoEllipsisHorizontalCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-90 234a26 26 0 1126-26 26 26 0 01-26 26zm90 0a26 26 0 1126-26 26 26 0 01-26 26zm90 0a26 26 0 1126-26 26 26 0 01-26 26z" } }] })(props);
}
function IoEllipsisHorizontalCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "26" } }, { "tag": "circle", "attr": { "cx": "346", "cy": "256", "r": "26" } }, { "tag": "circle", "attr": { "cx": "166", "cy": "256", "r": "26" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoEllipsisHorizontalOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "416", "cy": "256", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "96", "cy": "256", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoEllipsisHorizontalSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "48" } }, { "tag": "circle", "attr": { "cx": "416", "cy": "256", "r": "48" } }, { "tag": "circle", "attr": { "cx": "96", "cy": "256", "r": "48" } }] })(props);
}
function IoEllipsisHorizontal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "48" } }, { "tag": "circle", "attr": { "cx": "416", "cy": "256", "r": "48" } }, { "tag": "circle", "attr": { "cx": "96", "cy": "256", "r": "48" } }] })(props);
}
function IoEllipsisVerticalCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "26" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "346", "r": "26" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "166", "r": "26" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoEllipsisVerticalCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-234-90a26 26 0 1126 26 26 26 0 01-26-26zm0 90a26 26 0 1126 26 26 26 0 01-26-26zm0 90a26 26 0 1126 26 26 26 0 01-26-26z" } }] })(props);
}
function IoEllipsisVerticalCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "26" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "346", "r": "26" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "166", "r": "26" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoEllipsisVerticalOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "416", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "96", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoEllipsisVerticalSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "48" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "416", "r": "48" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "96", "r": "48" } }] })(props);
}
function IoEllipsisVertical(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "48" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "416", "r": "48" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "96", "r": "48" } }] })(props);
}
function IoEnterOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 176v-40a40 40 0 0140-40h208a40 40 0 0140 40v240a40 40 0 01-40 40H216a40 40 0 01-40-40v-40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M272 336l80-80-80-80M48 256h288" } }] })(props);
}
function IoEnterSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M160 240h147.37l-64-64L266 153.37 368.63 256 266 358.63 243.37 336l64-64H160v148a12 12 0 0012 12h296a12 12 0 0012-12V92a12 12 0 00-12-12H172a12 12 0 00-12 12zm-128 0h128v32H32z" } }] })(props);
}
function IoEnter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M160 136v104h153.37l-52.68-52.69a16 16 0 0122.62-22.62l80 80a16 16 0 010 22.62l-80 80a16 16 0 01-22.62-22.62L313.37 272H160v104a56.06 56.06 0 0056 56h208a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56H216a56.06 56.06 0 00-56 56zM48 240a16 16 0 000 32h112v-32z" } }] })(props);
}
function IoExitOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40m64-160l80 80-80 80m-193-80h273" } }] })(props);
}
function IoExitSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M335.69 272h-161v-32h161V92a12 12 0 00-12-12h-280a12 12 0 00-12 12v328a12 12 0 0012 12h280a12 12 0 0012-12zm83.37 0l-64 64 22.63 22.63L480.31 256 377.69 153.37 355.06 176l64 64h-83.37v32h83.37z" } }] })(props);
}
function IoExit(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 376V272H191a16 16 0 010-32h145V136a56.06 56.06 0 00-56-56H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h192a56.06 56.06 0 0056-56zm89.37-104l-52.68 52.69a16 16 0 0022.62 22.62l80-80a16 16 0 000-22.62l-80-80a16 16 0 00-22.62 22.62L425.37 240H336v32z" } }] })(props);
}
function IoExpandOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M432 320v112H320m101.8-10.23L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320m10.23 101.8L208 304" } }] })(props);
}
function IoExpandSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M432 320v112H320m101.8-10.23L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320m10.23 101.8L208 304" } }] })(props);
}
function IoExpand(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M432 320v112H320m101.8-10.23L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320m10.23 101.8L208 304" } }] })(props);
}
function IoExtensionPuzzleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M413.66 246.1H386a2 2 0 01-2-2v-77.24A38.86 38.86 0 00345.14 128H267.9a2 2 0 01-2-2V98.34c0-27.14-21.5-49.86-48.64-50.33a49.53 49.53 0 00-50.4 49.51V126a2 2 0 01-2 2H87.62A39.74 39.74 0 0048 167.62V238a2 2 0 002 2h26.91c29.37 0 53.68 25.48 54.09 54.85.42 29.87-23.51 57.15-53.29 57.15H50a2 2 0 00-2 2v70.38A39.74 39.74 0 0087.62 464H158a2 2 0 002-2v-20.93c0-30.28 24.75-56.35 55-57.06 30.1-.7 57 20.31 57 50.28V462a2 2 0 002 2h71.14A38.86 38.86 0 00384 425.14v-78a2 2 0 012-2h28.48c27.63 0 49.52-22.67 49.52-50.4s-23.2-48.64-50.34-48.64z" } }] })(props);
}
function IoExtensionPuzzleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M345.14 480H256v-45.71a31.3 31.3 0 00-9.59-22.65c-7.67-7.56-18.83-11.81-30.57-11.64a44.38 44.38 0 00-28.45 10.67c-5.2 4.6-11.39 12.56-11.39 24.42V480H87.62A55.68 55.68 0 0132 424.38V336h45.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0012.2-29.92C114.7 273.89 97.26 256 76.91 256H32v-89.34a53.77 53.77 0 0116.53-39A55.88 55.88 0 0187.62 112h63.24V97.52A65.53 65.53 0 01217.54 32c35.49.62 64.36 30.38 64.36 66.33V112h63.24A54.28 54.28 0 01400 166.86v63.24h13.66c36.58 0 66.34 29 66.34 64.64 0 36.61-29.39 66.4-65.52 66.4H400v63.24c0 30.67-24.61 55.62-54.86 55.62z" } }] })(props);
}
function IoExtensionPuzzle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M345.14 480H274a18 18 0 01-18-18v-27.71a31.32 31.32 0 00-9.71-22.77c-7.78-7.59-19.08-11.8-30.89-11.51-21.36.5-39.4 19.3-39.4 41.06V462a18 18 0 01-18 18H87.62A55.62 55.62 0 0132 424.38V354a18 18 0 0118-18h27.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0012.2-29.92C114.7 273.89 97.26 256 76.91 256H50a18 18 0 01-18-18v-70.38A55.62 55.62 0 0187.62 112h55.24a8 8 0 008-8v-6.48A65.53 65.53 0 01217.54 32c35.49.62 64.36 30.38 64.36 66.33V104a8 8 0 008 8h55.24A54.86 54.86 0 01400 166.86v55.24a8 8 0 008 8h5.66c36.58 0 66.34 29 66.34 64.64 0 36.61-29.39 66.4-65.52 66.4H408a8 8 0 00-8 8v56A54.86 54.86 0 01345.14 480z" } }] })(props);
}
function IoEyeOffOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zm-176.34-64c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zm235.18-145.4c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" } }, { "tag": "path", "attr": { "d": "M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zm-90.22 73.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" } }] })(props);
}
function IoEyeOffSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998zM259.34 192.09l60.57 60.57a64.07 64.07 0 00-60.57-60.57zm-6.68 127.82l-60.57-60.57a64.07 64.07 0 0060.57 60.57z" } }, { "tag": "path", "attr": { "d": "M256 352a96 96 0 01-92.6-121.34l-69.07-69.08C66.12 187.42 39.24 221.14 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416A233.47 233.47 0 00335 402.2l-53.61-53.6A95.84 95.84 0 01256 352zm0-192a96 96 0 0192.6 121.34L419.26 352c29.15-26.25 56.07-61.56 76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1 111.2 304.31 96 255.76 96a222.92 222.92 0 00-78.21 14.29l53.11 53.11A95.84 95.84 0 01256 160z" } }] })(props);
}
function IoEyeOff(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zm16-119.7L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z" } }, { "tag": "path", "attr": { "d": "M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z" } }] })(props);
}
function IoEyeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "80", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoEyeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "64" } }, { "tag": "path", "attr": { "d": "M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" } }] })(props);
}
function IoEye(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "64" } }, { "tag": "path", "attr": { "d": "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" } }] })(props);
}
function IoEyedropOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M262.51 204.22L70 396.69C57.56 409.15 48 464 48 464s54.38-9.09 67.31-22L307.8 249.51" } }, { "tag": "rect", "attr": { "width": "192.15", "height": "64.05", "x": "211.72", "y": "172.19", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32.03", "ry": "32.03", "transform": "rotate(45 307.788 204.2)" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M289.91 141s20.57 8.57 37.22-8.08l54.67-70.63c18.5-19.41 49.26-18.69 67.94 0h0c18.68 18.68 19.34 48.81 0 67.93l-70.68 54.67c-15.65 15.65-8.08 37.22-8.08 37.22M115.31 442s-26.48 17.34-44.56-.73-.75-44.58-.75-44.58" } }] })(props);
}
function IoEyedropSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 96.22a63.84 63.84 0 00-18.95-45.61 65 65 0 00-45.71-19h-.76a61.78 61.78 0 00-44.22 19.09l-74.88 74.88-33.88-33.86-34.07 33.91-33.85 34 44 44L32 409.37V480h70.63l205.7-205.71L352 317.94l11.31-11.19c.11-.1 10.42-10.31 22.79-22.68l33.85-34-33.89-33.89L461 141.23a63.18 63.18 0 0019-45.01zM245 292.35L219.65 267l40.68-40.69 25.38 25.38z" } }] })(props);
}
function IoEyedrop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M461.05 51a65 65 0 00-45.71-19h-.76a61.81 61.81 0 00-44.36 19.25 12.81 12.81 0 00-1.07 1.25l-54 69.76c-5.62 7.1-12.74 8.68-16.78 4.64l-1.9-1.9a48 48 0 00-67.92 67.92l9.91 9.91a2 2 0 010 2.83L58.7 385.38C54 390.05 46.9 399.85 38.85 431c-4.06 15.71-6.51 29.66-6.61 30.24A16 16 0 0048 480a15.68 15.68 0 002.64-.22c.58-.1 14.44-2.43 30.13-6.44 31.07-7.94 41.05-15.24 45.85-20l179.77-179.79a2 2 0 012.82 0l9.92 9.92a48 48 0 0067.92-67.93l-1.59-1.54c-5-5-2.52-12.11 4.32-17.14l69.75-53.94a17.82 17.82 0 001.47-1.32 63.2 63.2 0 0019-45A63.88 63.88 0 00461.05 51zM250.78 283.9c-2.92 2.92-16.18 7.92-23.39.71s-2.24-20.42.69-23.35l33-33a2 2 0 012.83 0l19.84 19.83a2 2 0 010 2.83z" } }] })(props);
}
function IoFastFoodOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64m258-80c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 480h139.31a32 32 0 0031.91-29.61L463 112" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M368 112l16-64 47-16" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M224 112h256" } }] })(props);
}
function IoFastFoodSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M384 352H184.36l-41 35-41-35H16v24c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 13.88-.25 26.35-7.4 35-18.63A61.26 61.26 0 00384 376zm-279-32l38.33 28.19L182 320h202v-8a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312v8h89z" } }, { "tag": "path", "attr": { "d": "M463.08 96h-74.59l8.92-35.66L442 45l-10-29-62 20-14.49 60H208v32h18.75l1.86 16H236c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a124.16 124.16 0 0110.73 32.65 72 72 0 0127.89 90.9A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80 80 0 01-31.83 22.95 109.21 109.21 0 01-18.53 33c-1.18 1.42-2.39 2.81-3.63 4.15H416c16 0 23-8 25-23l36.4-345H496V96z" } }] })(props);
}
function IoFastFood(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 128h.09m111.46-32h-91.06l8.92-35.66 38.32-13.05c8.15-2.77 13-11.43 10.65-19.71a16 16 0 00-20.54-10.73l-47 16a16 16 0 00-10.36 11.27L355.51 96H224.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 00224 128h2.75l1 8.66A8.3 8.3 0 00236 144c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a123.4 123.4 0 0110.12 29.51 7.83 7.83 0 003.29 4.88 72 72 0 0126.38 86.43 7.92 7.92 0 00-.15 5.53A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80.12 80.12 0 01-28.78 21.67 8 8 0 00-4.21 4.37 108.19 108.19 0 01-17.37 29.86 2.5 2.5 0 001.9 4.11h49.21a48.22 48.22 0 0047.85-44.14L477.4 128h2.6a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z" } }, { "tag": "path", "attr": { "d": "M108.69 320a23.87 23.87 0 0117 7l15.51 15.51a4 4 0 005.66 0L162.34 327a23.87 23.87 0 0117-7h196.58a8 8 0 008.08-7.92V312a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312a8 8 0 008 8zm77.25 32a8 8 0 00-5.66 2.34l-22.14 22.15a20 20 0 01-28.28 0l-22.14-22.15a8 8 0 00-5.66-2.34h-69.4a15.93 15.93 0 00-15.76 13.17A65.22 65.22 0 0016 376c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 26.13-.47 47.26-25.39 47.26-56a65.22 65.22 0 00-.9-10.83A15.93 15.93 0 00367.34 352z" } }] })(props);
}
function IoFemaleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "184", "r": "152", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 336v144m58-64H198" } }] })(props);
}
function IoFemaleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-58v44h58v58h44v-58h58v-44h-58v-31.39c85.6-10.84 152-84.12 152-172.61zm-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130-58.32 130-130 130-130-58.32-130-130z" } }] })(props);
}
function IoFemale(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-36a22 22 0 000 44h36v36a22 22 0 0044 0v-36h36a22 22 0 000-44h-36v-31.39c85.6-10.84 152-84.12 152-172.61zm-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130-58.32 130-130 130-130-58.32-130-130z" } }] })(props);
}
function IoFileTrayFullOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48V272l-32-152c-5-27-23-40-48-40z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 272h144m128 0h144m-272 0a64 64 0 00128 0M144 144h224m-240 64h256" } }] })(props);
}
function IoFileTrayFullSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128 128h256v38H128zm-16 64h288v38H112z" } }, { "tag": "path", "attr": { "d": "M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 01-128 0H76l22-150h316z" } }] })(props);
}
function IoFileTrayFull(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.65 16.65 0 0032 272v112a64 64 0 0064 64h320a64 64 0 0064-64V272a16.65 16.65 0 00-.34-3.3zm-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91 0 .13.05.26.07.39l26.93 127.88a4 4 0 01-3.92 4.82H320a15.92 15.92 0 00-16 15.82 48 48 0 11-96 0A15.92 15.92 0 00192 256H72.65a4 4 0 01-3.92-4.82z" } }, { "tag": "path", "attr": { "d": "M368 160H144a16 16 0 010-32h224a16 16 0 010 32zm16 64H128a16 16 0 010-32h256a16 16 0 010 32z" } }] })(props);
}
function IoFileTrayOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48V272l-32-152c-5-27-23-40-48-40z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 272h144m128 0h144m-272 0a64 64 0 00128 0" } }] })(props);
}
function IoFileTraySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 01-128 0H76l22-150h316z" } }] })(props);
}
function IoFileTrayStackedOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 336v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 336h144m128 0h144m-272 0a64 64 0 00128 0" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96L432 72c-5-27-23-40-48-40z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 192h144m128 0h144m-272 0a64 64 0 00128 0" } }] })(props);
}
function IoFileTrayStackedSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 16H64L32 176v144h448V176zm-12 160H320a64 64 0 01-128 0H76L98 58h316zM320 352a64 64 0 01-128 0H32v144h448V352z" } }] })(props);
}
function IoFileTrayStacked(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 352H320a16 16 0 00-16 16 48 48 0 01-96 0 16 16 0 00-16-16H48a16 16 0 00-16 16v64a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64v-64a16 16 0 00-16-16zm15.46-164.12L447.61 68.45C441.27 35.59 417.54 16 384 16H128c-16.8 0-31 4.69-42.1 13.94S67.66 52 64.4 68.4L32.54 187.88A15.9 15.9 0 0032 192v48c0 35.29 28.71 80 64 80h320c35.29 0 64-44.71 64-80v-48a15.9 15.9 0 00-.54-4.12zM440.57 176H320a15.92 15.92 0 00-16 15.82 48 48 0 11-96 0A15.92 15.92 0 00192 176H71.43a2 2 0 01-1.93-2.52L95.71 75c3.55-18.41 13.81-27 32.29-27h256c18.59 0 28.84 8.53 32.25 26.85l26.25 98.63a2 2 0 01-1.93 2.52z" } }] })(props);
}
function IoFileTray(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.65 16.65 0 0032 272v112a64 64 0 0064 64h320a64 64 0 0064-64V272a16.65 16.65 0 00-.34-3.3zm-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91 0 .13.05.26.07.39l26.93 127.88a4 4 0 01-3.92 4.82H320a15.92 15.92 0 00-16 15.82 48 48 0 11-96 0A15.92 15.92 0 00192 256H72.65a4 4 0 01-3.92-4.82z" } }] })(props);
}
function IoFilmOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "320", "x": "48", "y": "96", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "384", "y": "336", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "384", "y": "256", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "384", "y": "176", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "384", "y": "96", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "48", "y": "336", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "48", "y": "256", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "48", "y": "176", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "48", "y": "96", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "256", "height": "160", "x": "128", "y": "96", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }, { "tag": "rect", "attr": { "width": "256", "height": "160", "x": "128", "y": "256", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "28", "ry": "28" } }] })(props);
}
function IoFilmSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 80H32v352h448zM112 352v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm256 160H144v-32h224zm80 80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48z" } }] })(props);
}
function IoFilm(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M436 80H76a44.05 44.05 0 00-44 44v264a44.05 44.05 0 0044 44h360a44.05 44.05 0 0044-44V124a44.05 44.05 0 00-44-44zM112 388a12 12 0 01-12 12H76a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12H76a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12H76a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12H76a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm241.68 124H158.32a16 16 0 010-32h195.36a16 16 0 110 32zM448 388a12 12 0 01-12 12h-24a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12h-24a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12h-24a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12zm0-80a12 12 0 01-12 12h-24a12 12 0 01-12-12v-24a12 12 0 0112-12h24a12 12 0 0112 12z" } }] })(props);
}
function IoFilterCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M144 208h224m-192 64h160m-112 64h64" } }] })(props);
}
function IoFilterCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48 304h-96v-32h96zm48-64H160v-32h192zm32-64H128v-32h256z" } }] })(props);
}
function IoFilterCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm32 304h-64a16 16 0 010-32h64a16 16 0 010 32zm48-64H176a16 16 0 010-32h160a16 16 0 010 32zm32-64H144a16 16 0 010-32h224a16 16 0 010 32z" } }] })(props);
}
function IoFilterOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M32 144h448M112 256h288M208 368h96" } }] })(props);
}
function IoFilterSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 120h480v48H16zm80 112h320v48H96zm96 112h128v48H192z" } }] })(props);
}
function IoFilter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M472 168H40a24 24 0 010-48h432a24 24 0 010 48zm-80 112H120a24 24 0 010-48h272a24 24 0 010 48zm-96 112h-80a24 24 0 010-48h80a24 24 0 010 48z" } }] })(props);
}
function IoFingerPrintOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M390.42 75.28a10.45 10.45 0 01-5.32-1.44C340.72 50.08 302.35 40 256.35 40c-45.77 0-89.23 11.28-128.76 33.84C122 77 115.11 74.8 111.87 69a12.4 12.4 0 014.63-16.32A281.81 281.81 0 01256.35 16c49.23 0 92.23 11.28 139.39 36.48a12 12 0 014.85 16.08 11.3 11.3 0 01-10.17 6.72zm-330.79 126a11.73 11.73 0 01-6.7-2.16 12.26 12.26 0 01-2.78-16.8c22.89-33.6 52-60 86.69-78.48 72.58-38.84 165.51-39.12 238.32-.24 34.68 18.48 63.8 44.64 86.69 78a12.29 12.29 0 01-2.78 16.8 11.26 11.26 0 01-16.18-2.88c-20.8-30.24-47.15-54-78.36-70.56-66.34-35.28-151.18-35.28-217.29.24-31.44 16.8-57.79 40.8-78.59 71a10 10 0 01-9.02 5.08zM204.1 491a10.66 10.66 0 01-8.09-3.6C175.9 466.48 165 453 149.55 424c-16-29.52-24.27-65.52-24.27-104.16 0-71.28 58.71-129.36 130.84-129.36S387 248.56 387 319.84a11.56 11.56 0 11-23.11 0c0-58.08-48.32-105.36-107.72-105.36S148.4 261.76 148.4 319.84c0 34.56 7.39 66.48 21.49 92.4 14.8 27.6 25 39.36 42.77 58.08a12.67 12.67 0 010 17 12.44 12.44 0 01-8.56 3.68zm165.75-44.4c-27.51 0-51.78-7.2-71.66-21.36a129.1 129.1 0 01-55-105.36 11.57 11.57 0 1123.12 0 104.28 104.28 0 0044.84 85.44c16.41 11.52 35.6 17 58.72 17a147.41 147.41 0 0024-2.4c6.24-1.2 12.25 3.12 13.4 9.84a11.92 11.92 0 01-9.47 13.92 152.28 152.28 0 01-27.95 2.88zM323.38 496a13 13 0 01-3-.48c-36.76-10.56-60.8-24.72-86-50.4-32.37-33.36-50.16-77.76-50.16-125.28 0-38.88 31.9-70.56 71.19-70.56s71.2 31.68 71.2 70.56c0 25.68 21.5 46.56 48.08 46.56s48.08-20.88 48.08-46.56c0-90.48-75.13-163.92-167.59-163.92-65.65 0-125.75 37.92-152.79 96.72-9 19.44-13.64 42.24-13.64 67.2 0 18.72 1.61 48.24 15.48 86.64 2.32 6.24-.69 13.2-6.7 15.36a11.34 11.34 0 01-14.79-7 276.39 276.39 0 01-16.88-95c0-28.8 5.32-55 15.72-77.76 30.75-67 98.94-110.4 173.6-110.4 105.18 0 190.71 84.24 190.71 187.92 0 38.88-31.9 70.56-71.2 70.56s-71.2-31.68-71.2-70.56c.01-25.68-21.49-46.6-48.07-46.6s-48.08 20.88-48.08 46.56c0 41 15.26 79.44 43.23 108.24 22 22.56 43 35 75.59 44.4 6.24 1.68 9.71 8.4 8.09 14.64a11.39 11.39 0 01-10.87 9.16z" } }] })(props);
}
function IoFingerPrintSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M56.79 200.58l12.36 7.5 7.35-13.58C93.07 166.75 143.78 102 256 102c115 0 164 70.32 180.1 93.46l8.16 12.7L469.88 192l-8.54-13.36c-8.88-12.85-27.52-39.53-60.78-63.1C360.15 86.82 311.5 72.25 256 72.25c-128.07 0-186.69 75.11-206 107.25L42.63 192 54 198.86a14.09 14.09 0 001.63 1.1 12.57 12.57 0 001.16.62z" } }, { "tag": "path", "attr": { "d": "M379.22 172.32c-35.54-28.93-78.12-44.25-123.22-44.25-97.52 0-162.31 66-183.33 131.47C53.42 320 76.82 407.61 77.8 411.36l4.38 13.81 29.93-6.43-4.74-15c-.21-.75-22.1-82.93-5.41-135.21 9-28.08 27.73-55.4 51.35-74.79C181.81 170.39 217.35 158 256 158c90.58 0 141.93 70.61 156.45 108.11 11.27 28.93 8.67 61.82-6.28 82-5.53 7.39-15.28 16.07-30.12 15.32-33.81-1.72-39.66-18.43-47.79-50.25-3.9-15.32-7.9-31.18-17.87-44-12.14-15.75-29.8-23.36-54.28-23.36-26.33 0-46.27 8.68-59.38 25.72-28.6 37.28-10 100.93-9.21 103.61l.22.85c1.41 3.86 36.08 96.65 128.93 119.68l14.77 3.21 8.09-28.71-15.27-3.43c-74.22-18.43-105.21-94.39-107.59-100.39a152.44 152.44 0 01-5.1-29.79c-1.08-14.46-.32-34.39 9.43-47.14 7.15-9.32 18.64-13.82 35-13.82 29.79 0 34.78 14.57 42.58 44.79 7.58 29.46 18 69.85 75.84 72.75 22.21 1.07 42.26-8.79 56.34-27.65 21.13-28.28 25.14-71.57 10.19-110.14-11.68-30.36-34.21-60.54-61.73-83.04z" } }, { "tag": "path", "attr": { "d": "M154.18 343.21c-3.47-28.28 1.41-71 26.55-98.78 17.44-19.29 42.79-29 75.19-29 37.49 0 65.87 16.72 84.51 49.61a154 154 0 0117.88 53.25l1.43 14.69 30-2.2a112.63 112.63 0 00-1-15.6c-.11-1.28-3.57-32.46-21-63.75-24.06-43.11-62.63-65.93-111.74-65.93-41.5 0-74.55 13.18-98.06 39.11-31.85 35.14-38.35 86.25-33.91 122.35v.33c7.97 54.53 28.97 98.14 66.12 137.14l11.6 11.22 20.95-21.79-10.34-9.79c-32.72-34.28-51.25-72.64-58.18-120.86zM132.47 72.66c11.08-6.72 50.27-26.77 123.53-26.77 87.54 0 126.44 28.72 126.87 28.93l13.9 8.86L413 58.47l-13.22-8.56c-.52-.38-1.06-.76-1.6-1.12C385.5 40.54 340.54 16 256 16c-87.71 0-132.75 26.48-143.41 33.71L99 58.52l16.2 25.21z" } }, { "tag": "path", "attr": { "d": "M390.59 415.21c-33.37 3.75-60.45-2.67-80.71-18.85-34.24-27.43-38.68-75.11-38.79-76l-1.23-14.88-30.53 2.23 1.31 15c.22 2.46 5.2 60.75 49.62 96.54 22.11 17.89 49.74 26.89 82.24 26.89a187 187 0 0021.56-1.29l16.59-2.09-6.1-29.71z" } }] })(props);
}
function IoFingerPrint(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M63.28 202a15.29 15.29 0 01-7.7-2 14.84 14.84 0 01-5.52-20.46C69.34 147.36 128 72.25 256 72.25c55.47 0 104.12 14.57 144.53 43.29 33.26 23.57 51.9 50.25 60.78 63.1a14.79 14.79 0 01-4 20.79 15.52 15.52 0 01-21.24-4C420 172.32 371 102 256 102c-112.25 0-163 64.71-179.53 92.46A15 15 0 0163.28 202z" } }, { "tag": "path", "attr": { "d": "M320.49 496a15.31 15.31 0 01-3.79-.43c-92.85-23-127.52-115.82-128.93-119.68l-.22-.85c-.76-2.68-19.39-66.33 9.21-103.61 13.11-17 33.05-25.72 59.38-25.72 24.48 0 42.14 7.61 54.28 23.36 10 12.86 14 28.72 17.87 44 8.13 31.82 14 48.53 47.79 50.25 14.84.75 24.59-7.93 30.12-15.32 14.95-20.15 17.55-53 6.28-82C398 228.57 346.61 158 256 158c-38.68 0-74.22 12.43-102.72 35.79-23.59 19.35-42.28 46.67-51.28 74.75-16.69 52.28 5.2 134.46 5.41 135.21A14.83 14.83 0 0196.54 422a15.39 15.39 0 01-18.74-10.6c-1-3.75-24.38-91.4-5.1-151.82 21-65.47 85.81-131.47 183.33-131.47 45.07 0 87.65 15.32 123.19 44.25 27.52 22.5 50 52.72 61.76 82.93 14.95 38.57 10.94 81.86-10.19 110.14-14.08 18.86-34.13 28.72-56.34 27.65-57.86-2.9-68.26-43.29-75.84-72.75-7.8-30.22-12.79-44.79-42.58-44.79-16.36 0-27.85 4.5-35 13.82-9.75 12.75-10.51 32.68-9.43 47.14a152.44 152.44 0 005.1 29.79c2.38 6 33.37 82 107.59 100.39a14.88 14.88 0 0111 18.11 15.36 15.36 0 01-14.8 11.21z" } }, { "tag": "path", "attr": { "d": "M201.31 489.14a15.5 15.5 0 01-11.16-4.71c-37.16-39-58.18-82.61-66.09-137.14V347c-4.44-36.1 2.06-87.21 33.91-122.35 23.51-25.93 56.56-39.11 98.06-39.11 49.08 0 87.65 22.82 111.7 65.89 17.45 31.29 20.91 62.47 21 63.75a15.07 15.07 0 01-13.65 16.4 15.26 15.26 0 01-16.79-13.29A154 154 0 00340.43 265c-18.64-32.89-47-49.61-84.51-49.61-32.4 0-57.75 9.75-75.19 29-25.14 27.75-30 70.5-26.55 98.78 6.93 48.22 25.46 86.58 58.18 120.86a14.7 14.7 0 01-.76 21.11 15.44 15.44 0 01-10.29 4z" } }, { "tag": "path", "attr": { "d": "M372.5 446.18c-32.5 0-60.13-9-82.24-26.89-44.42-35.79-49.4-94.08-49.62-96.54a15.27 15.27 0 0130.45-2.36c.11.86 4.55 48.54 38.79 76 20.26 16.18 47.34 22.6 80.71 18.85a15.2 15.2 0 0116.91 13.18 14.92 14.92 0 01-13.44 16.5 187 187 0 01-21.56 1.26zm25.68-397.39C385.5 40.54 340.54 16 256 16c-88.74 0-133.81 27.11-143.78 34a11.59 11.59 0 00-1.84 1.4.36.36 0 01-.22.1 14.87 14.87 0 00-5.09 11.15 15.06 15.06 0 0015.31 14.85 15.56 15.56 0 008.88-2.79c.43-.32 39.22-28.82 126.77-28.82S382.58 74.29 383 74.5a15.25 15.25 0 009.21 3 15.06 15.06 0 0015.29-14.89 14.9 14.9 0 00-9.32-13.82z" } }] })(props);
}
function IoFishOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 00-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0023.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96z" } }, { "tag": "circle", "attr": { "cx": "416", "cy": "239.99", "r": "16" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "20", "strokeWidth": "32", "d": "M378.37 356a199.22 199.22 0 010-200" } }] })(props);
}
function IoFishSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M335.45 256a214.83 214.83 0 0129.08-108l7.62-13.26a280.69 280.69 0 00-48.64-7.15c-21.94-16.9-54.64-36.95-92.34-43.33L208 80l13.37 61.86c-41.67 14.14-78.43 42.86-102.76 62.62q-7.06-5.91-14.78-11.55c-39.71-29-82.6-31.8-84.4-31.9L0 160l2.67 19.31c.29 2 6.79 44.73 31.65 76.52C9.46 287.63 3 330.33 2.67 332.36L0 352l19.43-1.36c1.8-.1 44.69-2.89 84.4-31.9q7.58-5.53 14.56-11.37c24.37 19.83 61.14 48.6 102.86 62.74L208 432l23.17-4.22c37.49-6.34 70.08-26.4 92-43.32a284.27 284.27 0 0049.32-7.23l-7.91-13.18A214.92 214.92 0 01335.45 256z" } }, { "tag": "path", "attr": { "d": "M499.59 221.75c-5.85-9.88-16.54-24.9-34.19-40.28a209.82 209.82 0 00-62-37L392.23 164a183.22 183.22 0 00-.09 183.87l11.75 19.57a209.26 209.26 0 0061.42-36.49C497.05 303.47 512 269 512 256c0-12.31-8-26.74-12.41-34.25zM416 256a16 16 0 1116-16 16 16 0 01-16 16z" } }] })(props);
}
function IoFish(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M512 256c0-16.54-14.27-46.76-45.61-74a207.06 207.06 0 00-60.28-36.12 3.15 3.15 0 00-3.93 1.56c-.15.29-.3.57-.47.86l-9.59 15.9a183.24 183.24 0 00.07 183.78l.23.39 8.74 16a4 4 0 004.94 1.82C479.63 337.42 512 281.49 512 256zm-93.92-.14a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79z" } }, { "tag": "path", "attr": { "d": "M335.45 256a214.8 214.8 0 0129.08-108l.12-.21 4.62-7.67a4 4 0 00-2.59-6 284.29 284.29 0 00-39.26-5.39 7.94 7.94 0 01-4.29-1.6c-19.28-14.66-57.5-40.3-96.46-46.89a16 16 0 00-18 20.18l10.62 37.17a4 4 0 01-2.42 4.84c-36.85 13.69-68.59 38.75-91.74 57.85a8 8 0 01-10.06.06q-4.72-3.75-9.69-7.39c-39.64-28.95-86.21-32.76-88.17-32.9a16 16 0 00-16.83 19.4c.42 1.93 9.19 40.69 31.7 71.61a8.09 8.09 0 010 9.55C9.57 291.52.8 330.29.38 332.22a16 16 0 0016.83 19.4c2-.14 48.53-4 88.12-32.88q4.85-3.56 9.47-7.22a8 8 0 0110.06.07c23.25 19.19 55.05 44.28 92 58a4 4 0 012.42 4.83l-10.66 37.18a16 16 0 0018 20.18c17.16-2.9 51.88-12.86 96.05-46.83a8.15 8.15 0 014.36-1.65 287.36 287.36 0 0039.22-5.3 4 4 0 002.69-5.83l-4.51-8.29A214.81 214.81 0 01335.45 256z" } }] })(props);
}
function IoFitnessOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 256h112l48-96 48 160 48-96 32 64h128" } }] })(props);
}
function IoFitnessSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 272h-37.34a261.41 261.41 0 01-18.25 32H480zM32 240v32h37.34a225.1 225.1 0 01-12.4-32z" } }, { "tag": "path", "attr": { "d": "M304 259.78l-51.73 103.46-48-160L169.89 272H69.34c10 20.92 23.5 41.41 40.63 61.68 40.12 47.46 94.25 79.75 137 108.32l9 6 9-6c42.78-28.57 96.91-60.86 137-108.32A322.78 322.78 0 00424.41 304h-98.3z" } }, { "tag": "path", "attr": { "d": "M211.73 116.76l48 160L304 188.22 345.89 272h96.77A213.13 213.13 0 00464 176.65C463.37 114.54 413.54 64 352.92 64c-48.11 0-80.1 28-96.92 48.21C239.18 92 207.19 64 159.08 64 98.46 64 48.63 114.54 48 176.65A211.23 211.23 0 0056.94 240h93.17z" } }] })(props);
}
function IoFitness(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M193.69 152.84a16 16 0 0129.64 2.56l36.4 121.36 30-59.92a16 16 0 0128.62 0L345.89 272h96.76A213.08 213.08 0 00464 176.65C463.37 114.54 413.54 64 352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65A211.13 211.13 0 0056.93 240h93.18z" } }, { "tag": "path", "attr": { "d": "M321.69 295.16L304 259.78l-33.69 67.38A16 16 0 01256 336q-.67 0-1.38-.06a16 16 0 01-14-11.34l-36.4-121.36-30 59.92A16 16 0 01160 272H69.35q14 29.29 37.27 57.66c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81a316.79 316.79 0 0019-25.66H336a16 16 0 01-14.31-8.84zM464 272h-21.35a260.11 260.11 0 01-18.25 32H464a16 16 0 000-32zM48 240a16 16 0 000 32h21.35a225.22 225.22 0 01-12.42-32z" } }] })(props);
}
function IoFlagOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M80 464V68.14a8 8 0 014-6.9C91.81 56.66 112.92 48 160 48c64 0 145 48 192 48a199.53 199.53 0 0077.23-15.77 2 2 0 012.77 1.85v219.36a4 4 0 01-2.39 3.65C421.37 308.7 392.33 320 352 320c-48 0-128-32-192-32s-80 16-80 16" } }] })(props);
}
function IoFlagSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M102 480H64V57.37l4.69-4.68C72.14 49.23 92.78 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80c42.83 0 72.72-14.25 73-14.4l23-11.14v259.43l-8.84 4.42C437.71 319 403.19 336 352 336c-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-49.74 5.58-58 9.11z" } }] })(props);
}
function IoFlag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M80 480a16 16 0 01-16-16V68.13a24 24 0 0111.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.84 183.84 0 0071-14.5 18 18 0 0125 16.58v219.36a20 20 0 01-12 18.31c-8.71 3.81-40.51 16.25-84 16.25-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 01-16 16z" } }] })(props);
}
function IoFlameOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 320c0-93 124-165 96-272 66 0 192 96 192 272a144 144 0 01-288 0z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 368c0 57.71-32 80-64 80s-64-22.29-64-80 40-86 32-128c42 0 96 70.29 96 128z" } }] })(props);
}
function IoFlameSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M394.24 197.56a300.67 300.67 0 00-53.38-90C301.2 61.65 240 32 192 32c19 70-14.36 117.12-44.79 163.77C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.76-122.44zM288.33 418.69C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 6.48-14.07 14.66-27.22 15.11-44.49 11.3 5.88 23.67 16.91 34.54 31.28 18.17 24 29 52.42 29 76 .01 22.23-5.41 39.76-15.66 50.68z" } }] })(props);
}
function IoFlame(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" } }] })(props);
}
function IoFlashOffOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM294.34 84.28l-22.08 120.84a16 16 0 006.17 15.71 16.49 16.49 0 009.93 3.17h94.12l-38.37 47.42a4 4 0 00.28 5.34l17.07 17.07a4 4 0 005.94-.31l60.8-75.16a16.37 16.37 0 003.3-14.36 16 16 0 00-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 00302.73 23l-92.58 114.46a4 4 0 00.28 5.35l17.07 17.06a4 4 0 005.94-.31zm-76.56 343.29l22-120.71a16 16 0 00-6.19-15.7 16.54 16.54 0 00-9.92-3.16h-94.1l38.36-47.42a4 4 0 00-.28-5.34l-17.07-17.07a4 4 0 00-5.93.31L83.8 293.64A16.37 16.37 0 0080.5 308 16 16 0 0096 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0032.5 14.53l92.61-114.46a4 4 0 00-.28-5.35l-17.07-17.06a4 4 0 00-5.94.31z" } }] })(props);
}
function IoFlashOffSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998zM80 304h144l-32 192 108.18-129.82-148.36-148.36L80 304zm352-96H288l32-192-108.18 129.82 148.36 148.36L432 208z" } }] })(props);
}
function IoFlashOff(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zm-.5-244a16 16 0 00-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 00302.73 23l-92.58 114.46a4 4 0 00.29 5.35l151 151a4 4 0 005.94-.31l60.8-75.16A16.37 16.37 0 00431.5 204zM301.57 369.19l-151-151a4 4 0 00-5.93.31L83.8 293.64A16.37 16.37 0 0080.5 308 16 16 0 0096 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0032.5 14.53l92.61-114.46a4 4 0 00-.28-5.35z" } }] })(props);
}
function IoFlashOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z" } }] })(props);
}
function IoFlashSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 208H288l32-192L80 304h144l-32 192z" } }] })(props);
}
function IoFlash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M194.82 496a18.36 18.36 0 01-18.1-21.53v-.11L204.83 320H96a16 16 0 01-12.44-26.06L302.73 23a18.45 18.45 0 0132.8 13.71c0 .3-.08.59-.13.89L307.19 192H416a16 16 0 0112.44 26.06L209.24 489a18.45 18.45 0 01-14.42 7z" } }] })(props);
}
function IoFlashlightOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M456.64 162.86L349.12 55.36c-13.15-13.14-28.68-7.17-41.82 6l-11.95 12c-26.13 26.13-27.62 58.38-29.42 83.31-.89 12.24-9.78 27.55-18.51 36.28L58.58 381.67c-16.35 16.33-12.69 39.42 3.73 55.84l12.17 12.17c16.36 16.35 39.43 20.16 55.86 3.74l188.83-188.8c8.74-8.74 24-17.55 36.29-18.52 24.87-1.86 58.62-4.85 83.26-29.49l11.94-11.94c13.15-13.14 19.12-28.67 5.98-41.81z" } }, { "tag": "circle", "attr": { "cx": "224.68", "cy": "287.28", "r": "20" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M289 81l142 142" } }] })(props);
}
function IoFlashlightSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M330 16l-42.68 42.7L453.3 224.68 496 182 330 16z" } }, { "tag": "ellipse", "attr": { "cx": "224.68", "cy": "287.3", "fill": "none", "rx": "20.03", "ry": "19.96" } }, { "tag": "path", "attr": { "d": "M429.21 243.85L268 82.59 249.65 168 16 402l94 94 234.23-233.8zm-189 56.07a20 20 0 110-25.25 20 20 0 01-.02 25.25z" } }] })(props);
}
function IoFlashlight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M462 216c9.35-9.35 15.14-19.09 17.19-28.95 2.7-12.95-1.29-25.55-11.22-35.48L360.43 44.05C346.29 29.92 322 24.07 296 50l-2 2a8 8 0 000 11.32L448.64 218a8 8 0 0011.36 0zm-211.86-62.92l-.16 2.34c-.53 7.18-6.88 19.15-13.88 26.14L47.27 370.36c-11.12 11.11-16.46 25.57-15.05 40.7C33.49 424.58 40.16 438 51 448.83L63.17 461c12.61 12.6 27.78 19 42.49 19a50.4 50.4 0 0036-15.24l188.84-188.8c7.07-7.07 18.84-13.3 26.17-13.87 17.48-1.32 43.57-3.28 67.79-15.65a4 4 0 001-6.37L271.69 86.31a4 4 0 00-6.39 1c-12.12 22.99-13.82 46.91-15.16 65.77zm-9.95 146.83a20 20 0 110-25.25 20 20 0 010 25.25z" } }] })(props);
}
function IoFlaskOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M176 48h160M118 304h276M208 48v93.48a64.09 64.09 0 01-9.88 34.18L73.21 373.49C48.4 412.78 76.63 464 123.08 464h265.84c46.45 0 74.68-51.22 49.87-90.51L313.87 175.66a64.09 64.09 0 01-9.87-34.18V48" } }] })(props);
}
function IoFlaskSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M469.11 382.76L325 153.92V74h32V32H155v42h32v79.92L42.89 382.76c-13 20.64-14.78 43.73-3 65.1S71.59 480 96 480h320c24.41 0 44.32-10.76 56.1-32.14s10.04-44.46-2.99-65.1zM224.39 173.39a29.76 29.76 0 004.62-16V74h54v84.59a25.85 25.85 0 004 13.82L356.82 283H155.18z" } }] })(props);
}
function IoFlask(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M452.32 365L327.4 167.12a48.07 48.07 0 01-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 00336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 00176 64h16v77.48a47.92 47.92 0 01-7.41 25.63L59.68 365a74 74 0 00-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 00-2.5-75.79zM211.66 184.2A79.94 79.94 0 00224 141.48V68a4 4 0 014-4h56a4 4 0 014 4v73.48a79.94 79.94 0 0012.35 42.72l57.8 91.53a8 8 0 01-6.78 12.27H160.63a8 8 0 01-6.77-12.27z" } }] })(props);
}
function IoFlowerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 01256 32h0c28.55 0 51.69 23.69 51.69 51.69 0 16.5-5.85 48.95-10.77 73.23m-81.84 198.16c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 00256 480h0c28.55 0 51.69-23.69 51.69-51.69 0-16.54-5.85-48.93-10.77-73.23m58.16-140c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 01480 256h0c0 28.55-23.69 51.69-51.69 51.69-16.5 0-48.95-5.85-73.23-10.77m-198.16-81.85c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0032 256h0c0 28.55 23.69 51.69 51.69 51.69 16.5 0 48.95-5.85 73.23-10.77" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0173.1 0h0c20.19 20.19 19.8 53.3 0 73.1-11.66 11.67-38.67 30.67-59.31 44.37m-198.16 81.84c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 000 73.1h0c20.19 20.19 53.3 19.8 73.1 0 11.67-11.66 30.67-38.67 44.37-59.31m140-58.16c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 010 73.1h0c-20.19 20.19-53.3 19.8-73.1 0-11.69-11.69-30.66-38.65-44.37-59.31m-81.84-198.16c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 00-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1 11.61 11.61 38.7 30.68 59.31 44.37" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "64", "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoFlowerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "43" } }, { "tag": "path", "attr": { "d": "M475.93 303.91a67.49 67.49 0 00-47.62-115.6c-2.88 0-6.2.14-9.93.43 2.75-2.36 5.23-4.62 7.33-6.71A67.83 67.83 0 00378 66.33h-.25a67.27 67.27 0 00-47.82 20c-2.11 2.11-4.37 4.59-6.72 7.33.29-3.75.44-7.07.44-9.93a67.69 67.69 0 10-135.38 0c0 2.87.15 6.19.44 9.93-2.36-2.74-4.62-5.22-6.72-7.33a67.27 67.27 0 00-47.82-20H134A67.9 67.9 0 0086.29 182c2.1 2.09 4.58 4.35 7.34 6.72-3.74-.29-7.06-.44-9.94-.44a67.69 67.69 0 000 135.38c2.86 0 6.18-.15 9.93-.44-2.74 2.35-5.22 4.61-7.33 6.72a67.55 67.55 0 0047.82 115.42h.25A67.32 67.32 0 00182 425.71c2.09-2.1 4.35-4.58 6.71-7.33-.28 3.73-.43 7.05-.43 9.93a67.69 67.69 0 00135.38 0c0-2.87-.15-6.19-.44-9.94 2.36 2.75 4.62 5.24 6.72 7.34a67.32 67.32 0 0047.67 19.68h.25A67.5 67.5 0 00425.71 330c-2.11-2.11-4.59-4.37-7.33-6.72 3.75.29 7.07.44 9.93.44a67.27 67.27 0 0047.62-19.81zM256 341a85 85 0 1185-85 85.1 85.1 0 01-85 85z" } }] })(props);
}
function IoFlower(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "48" } }, { "tag": "path", "attr": { "d": "M475.93 303.91a67.49 67.49 0 00-44.34-115.53 5.2 5.2 0 01-4.58-3.21 5.21 5.21 0 011-5.51A67.83 67.83 0 00378 66.33h-.25A67.13 67.13 0 00332.35 84a5.21 5.21 0 01-5.52 1 5.23 5.23 0 01-3.22-4.58 67.68 67.68 0 00-135.23 0 5.2 5.2 0 01-3.21 4.58 5.21 5.21 0 01-5.52-1 67.11 67.11 0 00-45.44-17.69H134a67.91 67.91 0 00-50 113.34 5.21 5.21 0 011 5.51 5.2 5.2 0 01-4.58 3.21 67.71 67.71 0 000 135.23 5.23 5.23 0 014.58 3.23 5.22 5.22 0 01-1 5.52 67.54 67.54 0 0050.08 113h.25A67.38 67.38 0 00179.65 428a5.21 5.21 0 015.51-1 5.2 5.2 0 013.21 4.58 67.71 67.71 0 00135.23 0 5.23 5.23 0 013.22-4.58 5.21 5.21 0 015.51 1 67.38 67.38 0 0045.29 17.42h.25a67.48 67.48 0 0050.08-113 5.22 5.22 0 01-1-5.52 5.23 5.23 0 014.58-3.22 67.31 67.31 0 0044.4-19.77zM256 336a80 80 0 1180-80 80.09 80.09 0 01-80 80z" } }] })(props);
}
function IoFolderOpenOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 192v-72a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H408a40 40 0 0140 40v40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M479.9 226.55L463.68 392a40 40 0 01-39.93 40H88.25a40 40 0 01-39.93-40L32.1 226.55A32 32 0 0164 192h384.1a32 32 0 0131.8 34.55z" } }] })(props);
}
function IoFolderOpenSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M16.08 189.4l28.58 233.87A28 28 0 0072.52 448h367a28 28 0 0027.86-24.73l28.54-233.87A12 12 0 00484 176H28a12 12 0 00-11.92 13.4zM464 124a28 28 0 00-28-28H244.84l-48-32H76a28 28 0 00-28 28v52h416z" } }] })(props);
}
function IoFolderOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M408 96H252.11a23.89 23.89 0 01-13.31-4L211 73.41A55.77 55.77 0 00179.89 64H104a56.06 56.06 0 00-56 56v24h416c0-30.88-25.12-48-56-48zm15.75 352H88.25a56 56 0 01-55.93-55.15L16.18 228.11v-.28A48 48 0 0164 176h384.1a48 48 0 0147.8 51.83v.28l-16.22 164.74A56 56 0 01423.75 448zm56.15-221.45z" } }] })(props);
}
function IoFolderOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M440 432H72a40 40 0 01-40-40V120a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H440a40 40 0 0140 40v240a40 40 0 01-40 40zM32 192h448" } }] })(props);
}
function IoFolderSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 420a28 28 0 0028 28h424a28 28 0 0028-28V208H16zm480-296a28 28 0 00-28-28H212.84l-48-32H44a28 28 0 00-28 28v84h480z" } }] })(props);
}
function IoFolder(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 152a56 56 0 00-56-56H220.11a23.89 23.89 0 01-13.31-4L179 73.41A55.77 55.77 0 00147.89 64H72a56 56 0 00-56 56v48a8 8 0 008 8h464a8 8 0 008-8zM16 392a56 56 0 0056 56h368a56 56 0 0056-56V216a8 8 0 00-8-8H24a8 8 0 00-8 8z" } }] })(props);
}
function IoFootballOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "192", "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 175.15l-76.09 63.83L200 320h112l20.09-81.02L256 175.15zm76.09 63.83l52.87-22.4 25.78-73.26M447 269.97l-62.04-53.39m-205.05 22.4l-52.87-22.4-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64m-128-.01l64 42.65M312 320l28 48-28 71m98.74-71H342m-142-48l-28 48 28.37 71.5M101.63 368H172" } }] })(props);
}
function IoFootballSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm140.64 296.08h-46.77l-16.89-29 15-60.44L377.79 242l42.65 36.71a164.87 164.87 0 01-23.8 65.37zM134.21 242L164 254.67l15 60.44-16.89 29h-46.75a164.87 164.87 0 01-23.8-65.34zm249.07-92.47l-18.41 52.33-31.12 13.18L277 167.46v-35l43.86-29.22a166.87 166.87 0 0162.42 46.32zM191.14 103.2L235 132.42v35l-56.75 47.61-31.12-13.18-18.41-52.33a166.87 166.87 0 0162.42-46.32zm26.44 314.3l-20.1-50.66 16-27.51h85l16.06 27.53-20 50.6a166.23 166.23 0 01-77 0z" } }] })(props);
}
function IoFootball(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm143 304h-45.22a8 8 0 01-6.91-4l-16.14-27.68a8 8 0 01-.86-6l14.86-59.92a8 8 0 014.65-5.45l28.1-11.9a8 8 0 018.34 1.3l41.63 35.82a8 8 0 012.69 7.26 174.75 174.75 0 01-24.28 66.68A8 8 0 01399 352zM134.52 237.13l28.1 11.9a8 8 0 014.65 5.45l14.86 59.92a8 8 0 01-.86 6L165.13 348a8 8 0 01-6.91 4H113a8 8 0 01-6.82-3.81 174.75 174.75 0 01-24.28-66.68 8 8 0 012.69-7.26l41.63-35.82a8 8 0 018.3-1.3zm256.94-87.24l-18.07 51.38A8 8 0 01369 206l-29.58 12.53a8 8 0 01-8.26-1.24L274.9 170.1a8 8 0 01-2.9-6.1v-33.58a8 8 0 013.56-6.65l42.83-28.54a8 8 0 017.66-.67A176.92 176.92 0 01390 142a8 8 0 011.46 7.89zM193.6 95.23l42.84 28.54a8 8 0 013.56 6.65V164a8 8 0 01-2.86 6.13l-56.26 47.19a8 8 0 01-8.26 1.24L143 206a8 8 0 01-4.43-4.72L120.5 149.9a8 8 0 011.5-7.9 176.92 176.92 0 0164-47.48 8 8 0 017.6.71zm17.31 327.46L191.18 373a8 8 0 01.52-7l15.17-26a8 8 0 016.91-4h84.44a8 8 0 016.91 4l15.18 26a8 8 0 01.53 7l-19.59 49.67a8 8 0 01-5.69 4.87 176.58 176.58 0 01-79 0 8 8 0 01-5.65-4.85z" } }] })(props);
}
function IoFootstepsOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41-50.65 7.49-71.52-26.44-80.33-85.06-11.85-78.88 16-127.94 55.71-131.1 36.14-2.87 68.71 60.14 77.53 118.75zm23.65 162.69c3.13 33.28-14.86 64.34-42 69.66-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21 55.99-20.4 59.77 19.74zM312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41 50.66 7.49 71.52-26.44 80.33-85.06 11.86-78.89-16-128.22-55.7-131.1-36.4-2.64-68.71 60.13-77.53 118.75zm-23.65 162.7c-3.13 33.27 14.86 64.34 42 69.66 27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22-55.99-20.4-59.77 19.75z" } }] })(props);
}
function IoFootstepsSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M130.54 358.31c-12.83 1.88-33.95 5.38-48-10.56S56.34 293.32 51 258.92c-7.88-50.7-.06-93.43 22-120.31 13-15.83 30.06-25 49.34-26.46 16.51-1.27 41.18 5.19 65 43.19 14.92 23.81 26.27 55.44 31.14 86.77 5.88 37.82 11.61 78.18-8.44 92.65-11.31 8.17-19.43 11-38.62 15.57-15.78 3.75-28.04 6.09-40.88 7.98zm-22.82 32.53l108.89-22.46c9.2-1.9 16.58 3.16 20 18.32 11.22 49.76-4.86 109.3-55.22 109.3-47.69 0-79.47-54.36-84.66-83.58-2.37-13.25 1.01-19.53 10.99-21.58zm232.87-136.5c-19.19-4.55-27.31-7.4-38.62-15.57-20.05-14.47-14.32-54.83-8.44-92.65 4.87-31.33 16.22-63 31.14-86.77 23.8-38 48.47-44.46 65-43.19C408.93 17.63 426 26.78 439 42.61c22.08 26.88 29.9 69.61 22 120.31-5.35 34.4-17.46 72.76-31.59 88.83s-35.13 12.44-48 10.56-25.05-4.23-40.82-7.97zm63.69 40.5l-108.89-22.46c-9.2-1.9-16.58 3.16-20 18.32-11.21 49.76 4.87 109.3 55.23 109.3 47.69 0 79.47-54.36 84.66-83.58 2.36-13.25-1.02-19.53-11-21.58z" } }] })(props);
}
function IoFootsteps(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M133.83 361.27c-22.61 0-41-8.17-54.79-24.39s-22.84-40.29-28.11-75.31c-7.76-51.61-.06-95.11 21.68-122.48 12.8-16.12 29.6-25.44 48.58-26.94 16.25-1.3 40.54 5.29 64 44 14.69 24.24 25.86 56.44 30.65 88.34 5.79 38.51 1.48 66.86-13.18 86.65-11.64 15.72-29.54 25.46-53.21 29a106.46 106.46 0 01-15.62 1.13zM173 496c-13.21 0-26.6-4.23-38.66-12.36a79.79 79.79 0 01-33.52-50.6c-2.85-14.66-1.14-26.31 5.22-35.64 10.33-15.15 28.87-18.56 48.49-22.18 2.07-.38 4.17-.76 6.3-1.17 4.52-.86 9.14-2 13.62-3.11 16.78-4.14 34.14-8.43 48.47 1.75 9.59 6.8 15 18.36 16.62 35.32 1.84 19.57-2.36 39.1-11.83 55-10.19 17.11-25.47 28.42-43 31.86A61 61 0 01173 496zm205.17-230.73a106.69 106.69 0 01-15.6-1.2c-23.66-3.5-41.56-13.25-53.2-29-14.66-19.79-19-48.13-13.18-86.65 4.79-31.93 15.93-64.1 30.55-88.25 23.34-38.57 47.66-45.26 64-44.08 18.92 1.38 35.69 10.57 48.51 26.6 21.89 27.37 29.65 71 21.86 122.84-5.27 35-14.2 58.95-28.11 75.31s-32.22 24.43-54.83 24.43zM339 400a61 61 0 01-11.68-1.13c-17.56-3.44-32.84-14.75-43-31.86-9.47-15.9-13.67-35.43-11.83-55 1.6-17 7-28.52 16.62-35.33 14.33-10.17 31.69-5.89 48.47-1.74 4.48 1.1 9.1 2.24 13.62 3.11l6.29 1.17c19.63 3.61 38.17 7 48.5 22.17 6.36 9.33 8.07 21 5.22 35.64a79.78 79.78 0 01-33.52 50.61C365.56 395.78 352.17 400 339 400z" } }] })(props);
}
function IoFunnelOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z" } }] })(props);
}
function IoFunnelSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M0 48l192 240v128l128 48V288L512 48H0z" } }] })(props);
}
function IoFunnel(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M296 464a23.88 23.88 0 01-7.55-1.23L208.3 436.1a23.92 23.92 0 01-16.3-22.78V294.11a.44.44 0 00-.09-.13L23.26 97.54A30 30 0 0146.05 48H466a30 30 0 0122.79 49.54L320.09 294a.77.77 0 00-.09.13V440a23.93 23.93 0 01-24 24z" } }] })(props);
}
function IoGameControllerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 00352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 00-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88 26 9 49.25-9.61 71.27-37 25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16 41.02-14.01 40.44-79.13 21.43-165.04z" } }, { "tag": "circle", "attr": { "cx": "292", "cy": "224", "r": "20" } }, { "tag": "path", "attr": { "d": "M336 288a20 20 0 1120-19.95A20 20 0 01336 288z" } }, { "tag": "circle", "attr": { "cx": "336", "cy": "180", "r": "20" } }, { "tag": "circle", "attr": { "cx": "380", "cy": "224", "r": "20" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 176v96m48-48h-96" } }] })(props);
}
function IoGameControllerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M478.07 356.88L439 151c-8.86-40.35-23-71-88-71H145c-66 0-79.14 30.65-88 71L18 356.88c-7 34.12 4.43 61.25 33.37 71.81S103 423 119.18 391.3l15.42-30.52a16 16 0 0114.28-8.78h198.28a16 16 0 0114.28 8.78l15.42 30.52c16.14 31.7 38.88 48 67.81 37.39S485 391 478.07 356.88zM224 240h-48v48h-32v-48H96v-32h48v-48h32v48h48zm68 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z" } }] })(props);
}
function IoGameController(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z" } }] })(props);
}
function IoGiftOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 104v56h56a56 56 0 10-56-56zm0 0v56h-56a56 56 0 1156-56z" } }, { "tag": "rect", "attr": { "width": "384", "height": "112", "x": "64", "y": "160", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32", "ry": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272m160-112v304" } }] })(props);
}
function IoGiftSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M346 110a34 34 0 00-68 0v34h34a34 34 0 0034-34zm-112 0a34 34 0 10-34 34h34z" } }, { "tag": "path", "attr": { "d": "M234 144h44v112h164a22 22 0 0022-22v-68a22 22 0 00-22-22h-59.82A77.95 77.95 0 00256 55.79 78 78 0 00129.81 144H70a22 22 0 00-22 22v68a22 22 0 0022 22h164zm44-34a34 34 0 1134 34h-34zm-112 0a34 34 0 1168 0v34h-34a34 34 0 01-34-34zm112 370h132a22 22 0 0022-22V288H278zM80 458a22 22 0 0022 22h132V288H80z" } }] })(props);
}
function IoGift(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M200 144h40v-40a40 40 0 10-40 40zm152-40a40 40 0 00-80 0v40h40a40 40 0 0040-40z" } }, { "tag": "path", "attr": { "d": "M80 416a64 64 0 0064 64h92a4 4 0 004-4V292a4 4 0 00-4-4H88a8 8 0 00-8 8zm160-164V144h32v108a4 4 0 004 4h140a47.93 47.93 0 0016-2.75A48.09 48.09 0 00464 208v-16a48 48 0 00-48-48h-40.54a2 2 0 01-1.7-3A72 72 0 00256 58.82 72 72 0 00138.24 141a2 2 0 01-1.7 3H96a48 48 0 00-48 48v16a48.09 48.09 0 0032 45.25A47.93 47.93 0 0096 256h140a4 4 0 004-4zm32-148a40 40 0 1140 40h-40zm-74.86-39.9A40 40 0 01240 104v40h-40a40 40 0 01-2.86-79.89zM276 480h92a64 64 0 0064-64V296a8 8 0 00-8-8H276a4 4 0 00-4 4v184a4 4 0 004 4z" } }] })(props);
}
function IoGitBranchOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "160", "cy": "96", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "160", "cy": "416", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 368V144" } }, { "tag": "circle", "attr": { "cx": "352", "cy": "160", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 208c0 128-192 48-192 160" } }] })(props);
}
function IoGitBranchSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M352 96a64 64 0 00-58.86 89.11l-101.14 88V151.39a64 64 0 10-64 0v209.22a64 64 0 1064 0V358l154.25-134.27c1.9.17 3.81.27 5.75.27a64 64 0 000-128zM160 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm192-256a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGitBranch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 160a64 64 0 10-96.27 55.24c-2.29 29.08-20.08 37-75 48.42-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 10-64 0v209.22a64 64 0 1064.42.24c2.39-18 16-24.33 65.26-34.52 27.43-5.67 55.78-11.54 79.78-26.95 29-18.58 44.53-46.78 46.36-83.89A64 64 0 00416 160zM160 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm192-256a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGitCommitOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "96", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 256H48m416 0H352" } }] })(props);
}
function IoGitCommitSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 224H380a128 128 0 00-247.9 0H32v64h100.05A128 128 0 00380 288h100zm-224 96a64 64 0 1164-64 64.07 64.07 0 01-64 64z" } }] })(props);
}
function IoGitCommit(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 224h-68a128 128 0 00-247.9 0H64a32 32 0 000 64h68.05A128 128 0 00380 288h68a32 32 0 000-64zm-192 96a64 64 0 1164-64 64.07 64.07 0 01-64 64z" } }] })(props);
}
function IoGitCompareOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 160l-64-64 64-64m-97 320l64 64-64 64" } }, { "tag": "circle", "attr": { "cx": "112", "cy": "96", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "400", "cy": "416", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 96h84a60 60 0 0160 60v212m-145 48h-84a60 60 0 01-60-60V144" } }] })(props);
}
function IoGitCompareSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M209 384h-37a28 28 0 01-28-28V152a64 64 0 10-64-1.16V356a92.1 92.1 0 0092 92h37v55.21L294.39 416 209 328.79zM113 64a32 32 0 11-32 32 32 32 0 0132-32zm319 296.61V156a92.1 92.1 0 00-92-92h-35V9.93L217.14 96 305 182.07V128h35a28 28 0 0128 28v204.61a64 64 0 1064 0zM400 448a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGitCompare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M218.31 340.69A16 16 0 00191 352v32h-20a28 28 0 01-28-28V152a64 64 0 10-64-1.16V356a92.1 92.1 0 0092 92h20v32a16 16 0 0027.31 11.31l64-64a16 16 0 000-22.62zM112 64a32 32 0 11-32 32 32 32 0 0132-32zm320 296.61V156a92.1 92.1 0 00-92-92h-20V32a16 16 0 00-27.31-11.31l-64 64a16 16 0 000 22.62l64 64A16 16 0 00320 160v-32h20a28 28 0 0128 28v204.61a64 64 0 1064 0zM400 448a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGitMergeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "129", "cy": "96", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "129", "cy": "416", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M129 144v224" } }, { "tag": "circle", "attr": { "cx": "385", "cy": "288", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M129 144c0 96 112 144 208 144" } }] })(props);
}
function IoGitMergeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M384 224a63.66 63.66 0 00-37.95 12.5L160 153.36v-2a64 64 0 10-64 0v209.25a64 64 0 1064 0V223.46l160.41 71.69A64 64 0 10384 224zM128 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm256-128a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGitMerge(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M385 224a64 64 0 00-55.33 31.89c-42.23-1.21-85.19-12.72-116.21-31.33-32.2-19.32-49.71-44-52.15-73.35a64 64 0 10-64.31.18v209.22a64 64 0 1064 0v-94.46c44.76 34 107.28 52.38 168.56 53.76A64 64 0 10385 224zM129 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm256-128a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGitNetworkOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "128", "cy": "96", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "416", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 256v112" } }, { "tag": "circle", "attr": { "cx": "384", "cy": "96", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128 144c0 74.67 68.92 112 128 112m128-112c0 74.67-68.92 112-128 112" } }] })(props);
}
function IoGitNetworkSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M384 32a64 64 0 00-57.67 91.73l-70.83 80.82-70.19-80.1A64 64 0 10128 160c1.1 0 2.2 0 3.29-.08L224 265.7v94.91a64 64 0 1064 0v-96.05l91.78-104.71c1.39.09 2.8.15 4.22.15a64 64 0 000-128zM96 96a32 32 0 1132 32 32 32 0 01-32-32zm160 352a32 32 0 1132-32 32 32 0 01-32 32zm128-320a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGitNetwork(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 96a64 64 0 10-96.31 55.21c-1.79 20.87-11.47 38.1-28.87 51.29C305.07 216 280.09 224 256 224s-49.07-8-66.82-21.5c-17.4-13.19-27.08-30.42-28.87-51.29a64 64 0 10-64.11.29c2.08 40.87 21.17 76.87 54.31 102C171.3 269.26 197 280.19 224 285.09v75.52a64 64 0 1064 0v-75.52c27-4.9 52.7-15.83 73.49-31.59 33.14-25.13 52.23-61.13 54.31-102A64 64 0 00448 96zM128 64a32 32 0 11-32 32 32 32 0 0132-32zm128 384a32 32 0 1132-32 32 32 0 01-32 32zm128-320a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGitPullRequestOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "128", "cy": "416", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128 144v224m160-208l-64-64 64-64" } }, { "tag": "circle", "attr": { "cx": "128", "cy": "96", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "384", "cy": "416", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M240 96h84a60 60 0 0160 60v212" } }] })(props);
}
function IoGitPullRequestSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M192 96a64 64 0 10-97 54.81v209.8a64 64 0 1064 0V152a64.06 64.06 0 0033-56zm-64-32a32 32 0 11-32 32 32 32 0 0132-32zm-1 384a32 32 0 1132-32 32 32 0 01-32 32zm289-87.39V156a92.1 92.1 0 00-92-92h-35V9.93L201.14 96 289 182.07V128h35a28 28 0 0128 28v204.61a64 64 0 1064 0zM384 448a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGitPullRequest(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M192 96a64 64 0 10-96 55.39v209.22a64 64 0 1064 0V151.39A64 64 0 00192 96zm-64-32a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm288-87.39V156a92.1 92.1 0 00-92-92h-20V32a16 16 0 00-27.31-11.31l-64 64a16 16 0 000 22.62l64 64A16 16 0 00304 160v-32h20a28 28 0 0128 28v204.61a64 64 0 1064 0zM384 448a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoGlassesOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M224 232a32 32 0 0164 0m160-32h16m-400 0H48m16 0c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16zm384 0c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16z" } }] })(props);
}
function IoGlassesSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 176H16v64h21.24l12.44 112h171.87L240 241.32V240a16 16 0 0132 0v1.32L290.45 352h171.87l12.44-112H496z" } }] })(props);
}
function IoGlasses(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 184h-10.9a78.72 78.72 0 00-16-7.18C419.5 171 396.26 168 368 168s-51.5 3-69.06 8.82c-14.06 4.69-20.25 9.86-22.25 11.87a47.94 47.94 0 00-41.36 0c-2-2-8.19-7.18-22.25-11.87C195.5 171 172.26 168 144 168s-51.5 3-69.06 8.82a78.72 78.72 0 00-16 7.18H48a16 16 0 000 32h.17c1 45.46 6.44 72.78 18.11 92.23a66.78 66.78 0 0031.92 28c12.23 5.24 27.22 7.79 45.8 7.79 24.15 0 58.48-3.71 77.72-35.77 9.68-16.14 15.09-37.69 17.21-70.52A16 16 0 00240 232a16 16 0 0132 0 16 16 0 001.07 5.71c2.12 32.83 7.53 54.38 17.21 70.52a66.78 66.78 0 0031.92 28c12.23 5.24 27.22 7.79 45.8 7.79 24.15 0 58.48-3.71 77.72-35.77 11.67-19.45 17.13-46.77 18.11-92.23h.17a16 16 0 000-32z" } }] })(props);
}
function IoGlobeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 48v416m208-208H48" } }] })(props);
}
function IoGlobeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "44", "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "44", "d": "M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "44", "d": "M117.33 121.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 269.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "44", "d": "M256 48v416m208-208H48" } }] })(props);
}
function IoGlobe(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M340.75 344.49c5.91-20.7 9.82-44.75 11.31-67.84a4.41 4.41 0 00-4.46-4.65h-71.06a4.43 4.43 0 00-4.47 4.39v55.3a4.44 4.44 0 004.14 4.38 273.51 273.51 0 0159 11.39 4.45 4.45 0 005.54-2.97zm-17.17 32.82a260.05 260.05 0 00-46.6-9.09 4.42 4.42 0 00-4.91 4.29v65.24a4.47 4.47 0 006.76 3.7c15.9-9.27 29-24.84 40.84-45.43 1.94-3.36 4.89-9.15 6.67-12.69a4.29 4.29 0 00-2.76-6.02zm-88.29-8.91a256.85 256.85 0 00-46.56 8.82c-2.64.76-3.75 4.4-2.55 6.79 1.79 3.56 4 8.11 5.89 11.51 13 23 26.84 37.5 41.24 45.93a4.47 4.47 0 006.76-3.7v-65.27a4.16 4.16 0 00-4.78-4.08zm.31-96.4h-71.06a4.41 4.41 0 00-4.46 4.64c1.48 23.06 5.37 47.16 11.26 67.84a4.46 4.46 0 005.59 3 272.2 272.2 0 0159-11.36 4.44 4.44 0 004.15-4.38V276.4a4.43 4.43 0 00-4.48-4.4zM277 143.78a235.8 235.8 0 0046.5-9.14 4.3 4.3 0 002.76-6c-1.79-3.57-4.27-8.68-6.17-12.09-12.29-22-26.14-37.35-41.24-46a4.48 4.48 0 00-6.76 3.7v65.23a4.43 4.43 0 004.91 4.3zm-.46 96.22h71.06a4.39 4.39 0 004.46-4.58c-1.48-22.77-5.27-47.8-11.16-68.22a4.46 4.46 0 00-5.59-2.95c-19 5.74-38.79 10.43-59.09 12a4.4 4.4 0 00-4.15 4.32v55.11a4.4 4.4 0 004.47 4.32zM233.31 70.56c-15.42 8.57-29.17 24.43-41.47 46.37-1.91 3.41-4.19 8.11-6 11.67a4.31 4.31 0 002.76 6 225.42 225.42 0 0046.54 9.17 4.43 4.43 0 004.91-4.29V74.26a4.49 4.49 0 00-6.74-3.7zm2.61 105.7c-20.3-1.55-40.11-6.24-59.09-12a4.46 4.46 0 00-5.59 2.95c-5.89 20.42-9.68 45.45-11.16 68.22a4.39 4.39 0 004.46 4.58h71.06a4.4 4.4 0 004.47-4.34v-55.09a4.4 4.4 0 00-4.15-4.32z" } }, { "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM176.6 430.85a219.08 219.08 0 01-12.48-19.66c-2-3.69-4.84-9.26-6.73-13.13a7.29 7.29 0 00-10.31-3.16c-4.3 2.41-10 5.72-14.13 8.43a147.29 147.29 0 01-23.57-22.43 248.83 248.83 0 0130.41-18.36c1.86-1 2.77-2.14 2.18-4.18a374.8 374.8 0 01-14.09-82.17 4.36 4.36 0 00-4.3-4.17H66.84a2 2 0 01-2-1.7A98.28 98.28 0 0164 256a96.27 96.27 0 01.86-14.29 2 2 0 012-1.7h56.74c2.29 0 4.17-1.32 4.29-3.63a372.71 372.71 0 0114-81.83 4.36 4.36 0 00-2.19-5.11 260.63 260.63 0 01-29.84-17.9 169.82 169.82 0 0123.14-22.8c4.08 2.68 9.4 5.71 13.66 8.11a7.89 7.89 0 0011-3.42c1.88-3.87 4-8.18 6.06-11.88a221.93 221.93 0 0112.54-19.91A185 185 0 01256 64c28.94 0 55.9 7 80.53 18.46a202.23 202.23 0 0112 19c2.59 4.66 5.34 10.37 7.66 15.32a4.29 4.29 0 005.92 1.94c5.38-2.91 11.21-6.26 16.34-9.63a171.36 171.36 0 0123.2 23 244.89 244.89 0 01-29.06 17.31 4.35 4.35 0 00-2.18 5.12 348.68 348.68 0 0113.85 81.4 4.33 4.33 0 004.3 4.12l56.62-.07a2 2 0 012 1.7 117.46 117.46 0 010 28.62 2 2 0 01-2 1.72h-56.67a4.35 4.35 0 00-4.3 4.17 367.4 367.4 0 01-13.87 81.3 4.45 4.45 0 002.19 5.19c5 2.59 10.57 5.48 15.37 8.42s9.55 6.08 14.13 9.34a172.73 172.73 0 01-23 22.93c-2.44-1.61-5.34-3.44-7.84-4.94-1.72-1-4.89-2.77-6.65-3.76-3.82-2.14-7.88-.54-9.79 3.4s-4.83 9.59-6.87 13.25a212.42 212.42 0 01-12.35 19.53C310.91 442.37 284.94 448 256 448s-54.77-5.63-79.4-17.15z" } }] })(props);
}
function IoGolfOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 400V32l176 80-176 80" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 336c-87 0-175.3 43.2-191.64 124.74C62.39 470.57 68.57 480 80 480h352c11.44 0 17.62-9.43 15.65-19.26C431.3 379.2 343 336 256 336z" } }] })(props);
}
function IoGolfSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M240 16v304.47q8-.47 16-.47t16 .47V202.3L448 112z" } }, { "tag": "path", "attr": { "d": "M462.91 457.5c-8.54-42.85-35-78.74-76.62-103.8-32.43-19.55-72.53-31.3-114.29-33.7v95.79h-32V320c-41.79 2.4-81.89 14.15-114.32 33.7-41.59 25.06-68.08 60.95-76.62 103.8-2 9.81-.68 38.5-.68 38.5h415.21s1.28-28.69-.68-38.5z" } }] })(props);
}
function IoGolf(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M272 320.46V202.3l166.62-75.73a16 16 0 000-29.14l-176-80A16 16 0 00240 32v288.46q8-.45 16-.46t16 .46z" } }, { "tag": "path", "attr": { "d": "M463.33 457.5c-8.56-42.85-35.11-78.74-76.78-103.8-32.5-19.55-72.67-31.3-114.55-33.7v79.75a16 16 0 11-32 0V320c-41.88 2.4-82.05 14.15-114.55 33.7-41.67 25.06-68.22 60.95-76.78 103.8a32.49 32.49 0 006.44 27.08C61.13 492 70 496 80 496h352c10 0 18.88-4.05 24.9-11.42a32.49 32.49 0 006.43-27.08z" } }] })(props);
}
function IoGridOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "176", "height": "176", "x": "48", "y": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "20", "ry": "20" } }, { "tag": "rect", "attr": { "width": "176", "height": "176", "x": "288", "y": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "20", "ry": "20" } }, { "tag": "rect", "attr": { "width": "176", "height": "176", "x": "48", "y": "288", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "20", "ry": "20" } }, { "tag": "rect", "attr": { "width": "176", "height": "176", "x": "288", "y": "288", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "20", "ry": "20" } }] })(props);
}
function IoGridSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M240 240H32V32h208zm240 0H272V32h208zM240 480H32V272h208zm240 0H272V272h208z" } }] })(props);
}
function IoGrid(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z" } }] })(props);
}
function IoHammerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M277.42 247a24.68 24.68 0 00-4.08-5.47L255 223.44a21.63 21.63 0 00-6.56-4.57 20.93 20.93 0 00-23.28 4.27c-6.36 6.26-18 17.68-39 38.43C146 301.3 71.43 367.89 37.71 396.29a16 16 0 00-1.09 23.54l39 39.43a16.13 16.13 0 0023.67-.89c29.24-34.37 96.3-109 136-148.23 20.39-20.06 31.82-31.58 38.29-37.94a21.76 21.76 0 003.84-25.2zm201.01-46l-34.31-34a5.44 5.44 0 00-4-1.59 5.59 5.59 0 00-4 1.59h0a11.41 11.41 0 01-9.55 3.27c-4.48-.49-9.25-1.88-12.33-4.86-7-6.86 1.09-20.36-5.07-29a242.88 242.88 0 00-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.79 123.79 0 00-47-9.24c-26.35 0-46.61 11.76-54 18.51-5.88 5.32-12 13.77-12 13.77a91.29 91.29 0 0110.81-3.2 79.53 79.53 0 0123.28-1.49C241.19 76.8 259.94 84.1 270 92c16.21 13 23.18 30.39 24.27 52.83.8 16.69-15.23 37.76-30.44 54.94a7.85 7.85 0 00.4 10.83l21.24 21.23a8 8 0 0011.14.1c13.93-13.51 31.09-28.47 40.82-34.46s17.58-7.68 21.35-8.09a35.71 35.71 0 0121.3 4.62 13.65 13.65 0 013.08 2.38c6.46 6.56 6.07 17.28-.5 23.74l-2 1.89a5.5 5.5 0 000 7.84l34.31 34a5.5 5.5 0 004 1.58 5.65 5.65 0 004-1.58L478.43 209a5.82 5.82 0 000-8z" } }] })(props);
}
function IoHammerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M294.28 256.9l-54.42-54.41a12 12 0 00-17 0L12.45 401a12 12 0 00-.27 17.2l66.05 66.28a12 12 0 0017.22-.23l198.81-210.36a12 12 0 00.02-16.99zm205.05-57.57l-43.89-43.58a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 00176 86.17L192 96s8.06-2 13.86-3.39a62.73 62.73 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.2 4.23-9.52 21.35-24.16 39.84a8 8 0 00.61 10.62l45.37 45.37a8 8 0 0011 .25c12.07-11 30.49-28 34.67-30.59 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l43.95 43.68a8 8 0 0011.28 0l74.68-74.2a8 8 0 00.06-11.36z" } }] })(props);
}
function IoHammer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M280.16 242.79l-26.11-26.12a32 32 0 00-45.14-.12L27.38 384.08c-6.61 6.23-10.95 14.17-11.35 23.06a32.11 32.11 0 009.21 23.94l39 39.43a.46.46 0 00.07.07A32.29 32.29 0 0087 480h1.18c8.89-.33 16.85-4.5 23.17-11.17l168.7-180.7a32 32 0 00.11-45.34zM490 190l-.31-.31-34.27-33.92a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68a119.92 119.92 0 00-14.18 16.22 16 16 0 0018.65 24.34 74.45 74.45 0 018.58-2.63 63.46 63.46 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.18 3.82-7.72 18.14-20 34.48a16 16 0 001.45 21l34.41 34.41a16 16 0 0022 .62c9.73-8.69 24.55-21.79 29.73-25 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l34.26 33.91a21.45 21.45 0 0015.28 6.25 21.7 21.7 0 0015.22-6.2l55.5-54.82c.19-.19.38-.39.56-.59A21.87 21.87 0 00490 190z" } }] })(props);
}
function IoHandLeftOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M80 320V144a32 32 0 0132-32h0a32 32 0 0132 32v112m0 0V80a32 32 0 0132-32h0a32 32 0 0132 32v160m64 1V96a32 32 0 0132-32h0a32 32 0 0132 32v224m-128-80V48a32 32 0 0132-32h0a32 32 0 0132 32v192" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M80 320c0 117.4 64 176 152 176s123.71-39.6 144-88l52.71-144c6.66-18.05 3.64-34.79-11.87-43.6h0c-15.52-8.82-35.91-4.28-44.31 11.68L336 320" } }] })(props);
}
function IoHandLeftSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M429.58 209.08c-15.06-6.62-32.38 1.31-38.5 17.62L356 312h-11.27V80c0-17.6-13.3-32-29.55-32-16.26 0-29.55 14.4-29.55 32v151.75l-14.78.25V32c0-17.6-13.3-32-29.55-32s-29.55 14.4-29.55 32v199.75L197 232V64c0-17.6-13.3-32-29.55-32-16.26 0-29.55 14.4-29.55 32v183.75l-14.8.25V128c0-17.6-13.3-32-29.55-32S64 110.4 64 128v216c0 75.8 37.13 168 169 168 40.8 0 79.42-7 100.66-21a121.41 121.41 0 0033.72-33.31 138 138 0 0016-31.78l62.45-175.14c6.17-16.31-1.19-35.06-16.25-41.69z" } }] })(props);
}
function IoHandLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432.8 211.44c-15.52-8.82-34.91-2.28-43.31 13.68l-41.38 84.41a7 7 0 01-8.93 3.43 7 7 0 01-4.41-6.52V72c0-13.91-12.85-24-26.77-24s-26 10.09-26 24v156.64A11.24 11.24 0 01271.21 240 11 11 0 01260 229V24c0-13.91-10.94-24-24.86-24S210 10.09 210 24v204.64A11.24 11.24 0 01199.21 240 11 11 0 01188 229V56c0-13.91-12.08-24-26-24s-26 11.09-26 25v187.64A11.24 11.24 0 01125.21 256 11 11 0 01114 245V120c0-13.91-11.08-24-25-24s-25.12 10.22-25 24v216c0 117.41 72 176 160 176h16c88 0 115.71-39.6 136-88l68.71-169c6.62-18 3.6-34.75-11.91-43.56z" } }] })(props);
}
function IoHandRightOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M432 320V144a32 32 0 00-32-32h0a32 32 0 00-32 32v112m0 0V80a32 32 0 00-32-32h0a32 32 0 00-32 32v160m-64 1V96a32 32 0 00-32-32h0a32 32 0 00-32 32v224m128-80V48a32 32 0 00-32-32h0a32 32 0 00-32 32v192" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M432 320c0 117.4-64 176-152 176s-123.71-39.6-144-88L83.33 264c-6.66-18.05-3.64-34.79 11.87-43.6h0c15.52-8.82 35.91-4.28 44.31 11.68L176 320" } }] })(props);
}
function IoHandRightSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M82.42 209.08c15.06-6.62 32.38 1.31 38.5 17.62L156 312h11.27V80c0-17.6 13.3-32 29.55-32 16.26 0 29.55 14.4 29.55 32v151.75l14.78.25V32c0-17.6 13.3-32 29.55-32 16.3 0 29.55 14.4 29.55 32v199.75L315 232V64c0-17.6 13.3-32 29.55-32 16.26 0 29.55 14.4 29.55 32v183.75l14.78.25V128c0-17.6 13.3-32 29.55-32C434.7 96 448 110.4 448 128v216c0 75.8-37.13 168-169 168-40.8 0-79.42-7-100.66-21a121.41 121.41 0 01-33.72-33.31 138 138 0 01-16-31.78L66.16 250.77c-6.11-16.31 1.2-35.06 16.26-41.69z" } }] })(props);
}
function IoHandRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M79.2 211.44c15.52-8.82 34.91-2.28 43.31 13.68l41.38 84.41a7 7 0 008.93 3.43 7 7 0 004.41-6.52V72c0-13.91 12.85-24 26.77-24s26 10.09 26 24v156.64A11.24 11.24 0 00240.79 240 11 11 0 00252 229V24c0-13.91 10.94-24 24.86-24S302 10.09 302 24v204.64A11.24 11.24 0 00312.79 240 11 11 0 00324 229V56c0-13.91 12.08-24 26-24s26 11.09 26 25v187.64A11.24 11.24 0 00386.79 256 11 11 0 00398 245V120c0-13.91 11.08-24 25-24s25.12 10.22 25 24v216c0 117.41-72 176-160 176h-16c-88 0-115.71-39.6-136-88L67.33 255c-6.66-18-3.64-34.75 11.87-43.56z" } }] })(props);
}
function IoHappyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "184", "cy": "232", "r": "24" } }, { "tag": "path", "attr": { "d": "M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z" } }, { "tag": "circle", "attr": { "cx": "328", "cy": "232", "r": "24" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoHappySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM328 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm-144 0a24 24 0 11-24 24 23.94 23.94 0 0124-24zm72.05 176c-45.42 0-83.75-29.49-95.72-69.83C159.29 310.65 158 304 158 304h196s-1.31 6.69-2.33 10.17c-11.78 40.36-50.2 69.83-95.62 69.83z" } }] })(props);
}
function IoHappy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM184 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm167.67 106.17c-12 40.3-50.2 69.83-95.62 69.83s-83.62-29.53-95.72-69.83a8 8 0 017.83-10.17h175.69a8 8 0 017.82 10.17zM328 256a24 24 0 1124-24 23.94 23.94 0 01-24 24z" } }] })(props);
}
function IoHardwareChipOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "352", "height": "352", "x": "80", "y": "80", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "rect", "attr": { "width": "224", "height": "224", "x": "144", "y": "144", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 80V48m80 32V48M176 80V48m80 416v-32m80 32v-32m-160 32v-32m256-176h32m-32 80h32m-32-160h32M48 256h32m-32 80h32M48 176h32" } }] })(props);
}
function IoHardwareChipSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M160 160h192v192H160z" } }, { "tag": "path", "attr": { "d": "M480 198v-44h-32V88a24 24 0 00-24-24h-66V32h-44v32h-36V32h-44v32h-36V32h-44v32H88a24 24 0 00-24 24v66H32v44h32v36H32v44h32v36H32v44h32v66a24 24 0 0024 24h66v32h44v-32h36v32h44v-32h36v32h44v-32h66a24 24 0 0024-24v-66h32v-44h-32v-36h32v-44h-32v-36zm-352-70h256v256H128z" } }] })(props);
}
function IoHardwareChip(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M352 128H160a32 32 0 00-32 32v192a32 32 0 0032 32h192a32 32 0 0032-32V160a32 32 0 00-32-32zm0 216a8 8 0 01-8 8H168a8 8 0 01-8-8V168a8 8 0 018-8h176a8 8 0 018 8z" } }, { "tag": "rect", "attr": { "width": "192", "height": "192", "x": "160", "y": "160", "rx": "8", "ry": "8" } }, { "tag": "path", "attr": { "d": "M464 192a16 16 0 000-32h-16v-32a64.07 64.07 0 00-64-64h-32V48a16 16 0 00-32 0v16h-48V48a16 16 0 00-32 0v16h-48V48a16 16 0 00-32 0v16h-32a64.07 64.07 0 00-64 64v32H48a16 16 0 000 32h16v48H48a16 16 0 000 32h16v48H48a16 16 0 000 32h16v32a64.07 64.07 0 0064 64h32v16a16 16 0 0032 0v-16h48v16a16 16 0 0032 0v-16h48v16a16 16 0 0032 0v-16h32a64.07 64.07 0 0064-64v-32h16a16 16 0 000-32h-16v-48h16a16 16 0 000-32h-16v-48zm-80 160a32 32 0 01-32 32H160a32 32 0 01-32-32V160a32 32 0 0132-32h192a32 32 0 0132 32z" } }] })(props);
}
function IoHeadsetOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M108.39 270.13l-13.69 8h0c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12h0l13.69-8a16.16 16.16 0 005.78-21.87L130 276a15.74 15.74 0 00-21.61-5.87zm295.22 0l13.69 8h0c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12h0l-13.69-8a16.16 16.16 0 01-5.78-21.87L382 276a15.74 15.74 0 0121.61-5.87z" } }] })(props);
}
function IoHeadsetSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M411.16 97.45C368.43 55.85 311.88 32 256 32S143.57 55.85 100.84 97.45C56.45 140.67 32 196 32 256s26.84 118.49 45.42 152.25S121 480 144 480c32 0 96-32 96-32L128 240l-54.42 31.73a176.07 176.07 0 01-1-18.84c0-48.57 19.32-94.1 56.15-130C164.24 88.34 210 70 256 70s91.73 18.34 127.27 52.93c36.83 35.86 56.14 81.39 56.14 130a175.56 175.56 0 01-1 18.82L384 240 272 448s64 32 96 32c23 0 48-38 66.58-71.75S480 316 480 256s-24.45-115.33-68.84-158.55z" } }] })(props);
}
function IoHeadset(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M411.16 97.46C368.43 55.86 311.88 32 256 32S143.57 55.86 100.84 97.46C56.45 140.67 32 197 32 256c0 26.67 8.75 61.09 32.88 125.55S137 473 157.27 477.41c5.81 1.27 12.62 2.59 18.73 2.59a60.06 60.06 0 0030-8l14-8c15.07-8.82 19.47-28.13 10.8-43.35l-86.92-152.57a31.73 31.73 0 00-43.57-11.76l-13.69 8a56.49 56.49 0 00-14 11.59 4 4 0 01-7-2A114.68 114.68 0 0164 256c0-50.31 21-98.48 59.16-135.61C160 84.55 208.39 64 256 64s96 20.55 132.84 56.39C427 157.52 448 205.69 448 256a114.68 114.68 0 01-1.68 17.91 4 4 0 01-7 2 56.49 56.49 0 00-14-11.59l-13.69-8a31.73 31.73 0 00-43.57 11.76L281.2 420.65c-8.67 15.22-4.27 34.53 10.8 43.35l14 8a60.06 60.06 0 0030 8c6.11 0 12.92-1.32 18.73-2.59C375 473 423 446 447.12 381.55S480 282.67 480 256c0-59-24.45-115.33-68.84-158.54z" } }] })(props);
}
function IoHeartCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "d": "M256 360a16 16 0 01-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 008.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.28 27.1-9.31 52.13-29.3 76.5-9.38 11.44-26.4 29.73-65.7 56.41A16 16 0 01256 360z" } }] })(props);
}
function IoHeartCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.69 252.82c-8.5 10.36-39.69 38.48-74.69 63.51-35-25-66.19-53.15-74.69-63.51-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 22 0 37.3 12.41 46.19 22.76l2.27 2.75 2.27-2.75C267 180.29 282.42 168 304.46 168c30.31 0 55.22 25.27 55.53 56.33.28 27.09-9.31 52.12-29.3 76.49z" } }] })(props);
}
function IoHeartCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.69 252.82c-9.38 11.44-26.4 29.73-65.7 56.41a15.93 15.93 0 01-18 0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 008.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.3 27.1-9.29 52.13-29.28 76.5z" } }] })(props);
}
function IoHeartDislikeCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "d": "M333.2 297.69c18.28-23.39 27.06-47.43 26.79-73.37-.31-31.06-25.22-56.33-55.53-56.33-20.4 0-35 10.64-44.11 20.42a5.93 5.93 0 01-8.7 0c-9.11-9.78-23.71-20.42-44.11-20.42L206 168a4 4 0 00-2.75 6.84l124 123.21a3.92 3.92 0 005.95-.36zM158.84 221a4 4 0 00-6.82 2.72v.64c-.28 27.1 9.31 52.13 29.3 76.5 9.38 11.44 26.4 29.73 65.7 56.41a15.93 15.93 0 0018 0c5.15-3.49 9.9-6.84 14.31-10a4 4 0 00.46-6.07zM336 368a15.92 15.92 0 01-11.31-4.69l-176-176a16 16 0 0122.62-22.62l176 176A16 16 0 01336 368z" } }] })(props);
}
function IoHeartDislikeCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm63.73 310.36l-183.14-182.3 22.74-22.51 183.19 182.36zm-63.51 4.86c-35.36-25-66.31-51.92-74.91-62.4-20-24.37-29.58-49.4-29.3-76.5a58.27 58.27 0 01.85-9.31l130.21 129.4c-3.43 2.59-16.21 11.45-26.85 18.81zm74.47-62.4l-.31.38L197.33 169a53.8 53.8 0 0110.21-1 59.34 59.34 0 0144.1 19.41L256 192l4.36-4.6a59.34 59.34 0 0144.1-19.4c30.31 0 55.22 25.27 55.53 56.33.28 27.09-9.31 52.12-29.3 76.49z" } }] })(props);
}
function IoHeartDislikeCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm23.3 299.19c-4.41 3.2-9.16 6.55-14.31 10a15.93 15.93 0 01-18 0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5v-.64a4 4 0 016.82-2.72l120.95 120.2a4 4 0 01-.46 6.07zm68 16.12a16 16 0 01-22.62 0l-176-176a16 16 0 0122.62-22.62l176 176a16 16 0 01.01 22.62zm-14.1-65.62a3.92 3.92 0 01-6 .37l-124-123.21A4 4 0 01206 168h1.55c20.4 0 35 10.64 44.11 20.42a5.93 5.93 0 008.7 0c9.11-9.78 23.71-20.42 44.11-20.42 30.31 0 55.22 25.27 55.53 56.33.26 25.93-8.52 49.97-26.8 73.36z" } }] })(props);
}
function IoHeartDislikeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M417.84 448a15.94 15.94 0 01-11.35-4.72L40.65 75.26a16 16 0 0122.7-22.56l365.83 368a16 16 0 01-11.34 27.3zM364.92 80c-48.09 0-80 29.55-96.92 51-16.88-21.48-48.83-51-96.92-51a107.37 107.37 0 00-31 4.55L168 112c22.26 0 45.81 9 63.94 26.67a123 123 0 0121.75 28.47 16 16 0 0028.6 0 123 123 0 0121.77-28.51C322.19 121 342.66 112 364.92 112c43.15 0 78.62 36.33 79.07 81 .54 53.69-22.75 99.55-57.38 139.52l22.63 22.77c3-3.44 5.7-6.64 8.14-9.6 40-48.75 59.15-98.8 58.61-153C475.37 130.52 425.54 80 364.92 80zM268 432C180.38 372.51 91 297.6 92 193a83.69 83.69 0 012.24-18.39L69 149.14a115.1 115.1 0 00-9 43.49c-.54 54.22 18.63 104.27 58.61 153 18.77 22.87 52.8 59.45 131.39 112.8a31.84 31.84 0 0036 0c20.35-13.81 37.7-26.5 52.58-38.11l-22.66-22.81C300.25 409.6 284.09 421.05 268 432z" } }] })(props);
}
function IoHeartDislikeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 64.45l389.47 389.94 22.84-22.47L54.85 42 32 64.45zm30.67 128.46c-.56 55.63 19.77 106.94 62.16 156.88 40.25 47.42 94.56 79.67 137.47 108.21l9 6 9-6c18.49-12.3 39.1-25.3 59.79-39.89L71.74 149.28a114.62 114.62 0 00-9.07 43.63zm355.16 156.88c42.39-49.94 62.72-101.25 62.16-156.88-.63-62-50.61-112.54-111.43-112.54-48.26 0-80.35 28-97.23 48.17-16.88-20.2-49-48.17-97.23-48.17A108.24 108.24 0 00142.84 85l270 270.48c1.71-1.89 3.37-3.78 4.99-5.69z" } }] })(props);
}
function IoHeartDislike(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M417.84 448a16 16 0 01-11.35-4.72l-365.84-368a16 16 0 1122.7-22.56l365.83 368A16 16 0 01417.84 448zM364.92 80c-44.09 0-74.61 24.82-92.39 45.5a6 6 0 01-9.06 0C245.69 104.82 215.16 80 171.08 80a107.71 107.71 0 00-31 4.54l269.13 270.7c3-3.44 5.7-6.64 8.14-9.6 40-48.75 59.15-98.79 58.61-153C475.37 130.53 425.54 80 364.92 80zM69 149.15a115.06 115.06 0 00-9 43.49c-.54 54.21 18.63 104.25 58.61 153 18.77 22.87 52.8 59.45 131.39 112.8a31.88 31.88 0 0036 0c20.35-13.82 37.7-26.5 52.58-38.12z" } }] })(props);
}
function IoHeartHalfOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" } }] })(props);
}
function IoHeartHalfSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M352.92 64c-48.11 0-80.1 28-96.92 48.21C239.18 92 207.19 64 159.08 64 98.46 64 48.63 114.54 48 176.65c-.56 55.68 19.71 107 62 157 40.12 47.46 94.25 79.75 137 108.32l9 6 9-6c42.78-28.57 96.91-60.86 137-108.32 42.25-50 62.52-101.35 62-157C463.37 114.54 413.54 64 352.92 64zm24.67 249c-31.78 37.6-74.68 65.75-112.52 90.59l-9.07 6V162.23l24.59-29.54C294.53 116 318.38 96 352.92 96c43.15 0 78.62 36.32 79.07 81a178.63 178.63 0 01-12.69 68.59c-9.03 22.84-22.67 44.91-41.71 67.41z" } }] })(props);
}
function IoHeartHalf(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z" } }] })(props);
}
function IoHeartOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" } }] })(props);
}
function IoHeartSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65.56 55.68-19.71 107-62 157-40.09 47.49-94.22 79.78-137 108.35z" } }] })(props);
}
function IoHeart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" } }] })(props);
}
function IoHelpBuoyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "80", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M208 54l8 132m80 0l8-132m-96 404l8-132m80 0l8 132m154-250l-132 8m0 80l132 8M54 208l132 8m0 80l-132 8" } }] })(props);
}
function IoHelpBuoySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm-64 224a64 64 0 1164 64 64 64 0 01-64-64zm237.24-62.29L342.91 199a104.86 104.86 0 00-29.86-29.86l5.24-86.33a185 185 0 01111 111zm-303.35-67.82a183.44 183.44 0 0167.82-43.13l5.29 86.33A104.86 104.86 0 00169.09 199l-86.33-5.24a183.44 183.44 0 0143.13-67.87zm-43.13 192.4l86.33-5.24A104.86 104.86 0 00199 342.91l-5.24 86.33a185 185 0 01-111-110.95zm303.35 67.82a183.44 183.44 0 01-67.82 43.13l-5.24-86.33a104.86 104.86 0 0029.86-29.86l86.33 5.24a183.44 183.44 0 01-43.13 67.82z" } }] })(props);
}
function IoHelpBuoy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM192.13 260.18a64 64 0 1159.69 59.69 64.07 64.07 0 01-59.69-59.69zm240-66.64l-96.37 5.84a4.06 4.06 0 01-3.44-1.59 96 96 0 00-18.07-18.07 4.06 4.06 0 01-1.59-3.44l5.84-96.37a4 4 0 015.42-3.51A193 193 0 01435.6 188.12a4 4 0 01-3.51 5.42zM193.54 79.91l5.84 96.37a4.06 4.06 0 01-1.59 3.44 96 96 0 00-18.07 18.07 4.06 4.06 0 01-3.44 1.59l-96.37-5.84a4 4 0 01-3.51-5.42A193 193 0 01188.12 76.4a4 4 0 015.42 3.51zM79.91 318.46l96.37-5.84a4.06 4.06 0 013.44 1.59 96 96 0 0018.07 18.07 4.06 4.06 0 011.59 3.44l-5.84 96.37a4 4 0 01-5.42 3.51A193 193 0 0176.4 323.88a4 4 0 013.51-5.42zm238.55 113.63l-5.84-96.37a4.06 4.06 0 011.59-3.44 96 96 0 0018.07-18.07 4.06 4.06 0 013.44-1.59l96.37 5.84a4 4 0 013.51 5.42A193 193 0 01323.88 435.6a4 4 0 01-5.42-3.51z" } }] })(props);
}
function IoHelpCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 80a176 176 0 10176 176A176 176 0 00256 80z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "28", "d": "M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" } }, { "tag": "circle", "attr": { "cx": "250", "cy": "348", "r": "20" } }] })(props);
}
function IoHelpCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M288.55 150.84c-8.09-3.86-20-6-32.72-5.82-18 .22-33.13 5.2-45 14.78-23 18.48-24.55 40.37-24.77 42.8a61.69 61.69 0 00-.09 12 3 3 0 003 2.69h21.23a3 3 0 003-3A65.7 65.7 0 01214 204c0-.11 1.14-11.7 14.36-22.34 7-5.64 16.11-8.44 27.83-8.59 9.32-.11 16.93 1.47 20.34 3.09C291 183 298 192.31 298 204.57c0 18-10.9 26.23-30.18 39.18C247.08 257.68 237 275.1 237 297v11a3 3 0 003 3h22a3 3 0 003-3v-11c0-9.16 2.23-19.13 18.44-30 19.95-13.41 42.56-28.6 42.56-62.43 0-23.14-13.3-42.23-37.45-53.73z" } }, { "tag": "path", "attr": { "d": "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm10.44 302h-30.21a2.57 2.57 0 01-2.56-2.57v-30.2a2.57 2.57 0 012.56-2.57h30.21a2.57 2.57 0 012.56 2.57v30.2a2.57 2.57 0 01-2.56 2.57zm17-99C267.23 277.88 265 287.85 265 297v11a3 3 0 01-3 3h-22a3 3 0 01-3-3v-11c0-21.91 10.08-39.33 30.82-53.26C287.1 230.8 298 222.6 298 204.57c0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72.15-20.82 2.95-27.83 8.59C215.12 192.25 214 203.84 214 204a65.7 65.7 0 00-.84 10.28 3 3 0 01-3 3h-21.25a3 3 0 01-3-2.69 61.69 61.69 0 01.09-12c.22-2.43 1.8-24.32 24.77-42.8 11.91-9.58 27.06-14.56 45-14.78 12.7-.15 24.63 2 32.72 5.82 24.21 11.51 37.51 30.6 37.51 53.74 0 33.83-22.61 49.02-42.56 62.43z" } }] })(props);
}
function IoHelpCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm-6 304a20 20 0 1120-20 20 20 0 01-20 20zm33.44-102C267.23 276.88 265 286.85 265 296a14 14 0 01-28 0c0-21.91 10.08-39.33 30.82-53.26C287.1 229.8 298 221.6 298 203.57c0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72.15-20.82 2.95-27.83 8.59C215.12 191.25 214 202.83 214 203a14 14 0 11-28-1.35c.11-2.43 1.8-24.32 24.77-42.8 11.91-9.58 27.06-14.56 45-14.78 12.7-.15 24.63 2 32.72 5.82C312.7 161.34 326 180.43 326 203.57c0 33.83-22.61 49.02-42.56 62.43z" } }] })(props);
}
function IoHelpOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "40", "d": "M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324" } }, { "tag": "circle", "attr": { "cx": "248", "cy": "399.99", "r": "32" } }] })(props);
}
function IoHelpSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "40", "d": "M160 164c0-10 1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 290.36 248 316" } }, { "tag": "rect", "attr": { "width": "56", "height": "56", "x": "220", "y": "368", "rx": "3.5", "ry": "3.5" } }] })(props);
}
function IoHelp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "40", "d": "M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324" } }, { "tag": "circle", "attr": { "cx": "248", "cy": "399.99", "r": "32" } }] })(props);
}
function IoHomeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69" } }] })(props);
}
function IoHomeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z" } }] })(props);
}
function IoHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" } }, { "tag": "path", "attr": { "d": "M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" } }] })(props);
}
function IoHourglassOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M145.61 464h220.78c19.8 0 35.55-16.29 33.42-35.06C386.06 308 304 310 304 256s83.11-51 95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8 0-35.37 16.28-33.41 35.06C124.89 205 208 201 208 256s-82.06 52-95.8 172.94c-2.14 18.77 13.61 35.06 33.41 35.06z" } }, { "tag": "path", "attr": { "d": "M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.23 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z" } }] })(props);
}
function IoHourglassSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 32H96v112l108 112L96 368v112h320V368L308 256l108-112zM272 224v112l91 96H148l92-96V224l-80-80h192z" } }] })(props);
}
function IoHourglass(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M415.7 427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52 279 320 270.61 320 256c0-14.41 8.49-22.64 26.16-38.44 25.93-23.17 61.44-54.91 69.56-132.84a47 47 0 00-12-36.26A50.3 50.3 0 00366.39 32H145.61a50.34 50.34 0 00-37.39 16.46 47.05 47.05 0 00-11.94 36.26c8.09 77.68 43.47 109.19 69.3 132.19C183.42 232.8 192 241.09 192 256c0 15.1-8.6 23.56-26.5 39.75-25.5 23.1-60.5 54.73-69.2 131.38a46.59 46.59 0 0011.7 36.2A50.44 50.44 0 00145.61 480h220.78A50.44 50.44 0 00404 463.33a46.59 46.59 0 0011.7-36.2zM343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.22 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z" } }] })(props);
}
function IoIceCreamOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 256l-96 224-62-145" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M299.42 223.48C291.74 239.75 275.18 252 256 252c-13.1 0-27-5-33.63-9.76C216.27 237.87 208 240 208 250v62a24.07 24.07 0 01-24 24h0a24.07 24.07 0 01-24-24v-56h-2c-35.35 0-62-28.65-62-64a64 64 0 0164-64h8v-8a88 88 0 01176 0v8h8a64 64 0 010 128c-21.78 0-42-13-52.59-32.51z" } }] })(props);
}
function IoIceCreamSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M359.72 112.37a104 104 0 00-207.44 0A80.12 80.12 0 0080 192c0 39.36 26.37 71.23 62.38 78.46a2 2 0 011.62 2v38.83c0 21.84 17.2 40.22 39 40.74a40 40 0 0041-40v-47.84a2 2 0 012.72-1.86A83.47 83.47 0 00256 268a63.18 63.18 0 0042.24-16.59 2 2 0 012.74 0A74.63 74.63 0 00352 272a80 80 0 007.72-159.63z" } }, { "tag": "path", "attr": { "d": "M256 300v12a72.1 72.1 0 01-58.21 70.64L256 496l92.06-192.08a105.29 105.29 0 01-49.18-14.36A93.75 93.75 0 01256 300z" } }] })(props);
}
function IoIceCream(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M183 352c-21.84-.52-39-18.9-39-40.74v-34.07a8 8 0 00-6-7.74c-33.75-8.85-58-39.71-58-77.45a80.14 80.14 0 0166.27-78.82 8 8 0 006.62-6.83 104 104 0 01206.22 0 8 8 0 006.62 6.83A80 80 0 01352 272a74.33 74.33 0 01-47.45-17.41 7.93 7.93 0 00-9.92-.14A62.89 62.89 0 01256 268a80.47 80.47 0 01-21.8-3.18 8 8 0 00-10.2 7.69V312a40 40 0 01-41 40z" } }, { "tag": "path", "attr": { "d": "M263.39 299.7a8 8 0 00-7.39 7.91V312a72.11 72.11 0 01-50.69 68.76 8 8 0 00-4.91 10.78l40.91 94.8A16 16 0 00256 496a16 16 0 0014.69-9.7l73.78-172.15a8 8 0 00-6.2-11.07 106.31 106.31 0 01-35.9-11.59 8 8 0 00-7.13-.2 95 95 0 01-31.85 8.41z" } }] })(props);
}
function IoIdCardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "320", "height": "448", "x": "96", "y": "32", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M208 80h96" } }, { "tag": "path", "attr": { "d": "M333.48 284.51A39.65 39.65 0 00304 272c-11.6 0-22.09 4.41-29.54 12.43s-11.2 19.12-10.34 31C265.83 338.91 283.72 358 304 358s38.14-19.09 39.87-42.55c.88-11.78-2.82-22.77-10.39-30.94zM371.69 448H236.31a12.05 12.05 0 01-9.31-4.17 13 13 0 01-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 01-2.76 10.92 12.05 12.05 0 01-9.31 4.17z" } }] })(props);
}
function IoIdCardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M408 16H104a24 24 0 00-24 24v432a24 24 0 0024 24h304a24 24 0 0024-24V40a24 24 0 00-24-24zm-61.1 296.77a43 43 0 11-40.71-40.71 43 43 0 0140.71 40.71zM192 64h128v32H192zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21z" } }] })(props);
}
function IoIdCard(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 16H144a64.07 64.07 0 00-64 64v352a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V80a64.07 64.07 0 00-64-64zm-34.52 268.51c7.57 8.17 11.27 19.16 10.39 30.94C342.14 338.91 324.25 358 304 358s-38.17-19.09-39.88-42.55c-.86-11.9 2.81-22.91 10.34-31S292.4 272 304 272a39.65 39.65 0 0129.48 12.51zM192 80a16 16 0 0116-16h96a16 16 0 010 32h-96a16 16 0 01-16-16zm189 363.83a12.05 12.05 0 01-9.31 4.17H236.31a12.05 12.05 0 01-9.31-4.17 13 13 0 01-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 01-2.76 10.92z" } }] })(props);
}
function IoImageOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "352", "x": "48", "y": "80", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "circle", "attr": { "cx": "336", "cy": "176", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352m176 80l123.34-123.34a32 32 0 0143.11-2L464 368" } }] })(props);
}
function IoImageSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M456 64H56a24 24 0 00-24 24v336a24 24 0 0024 24h400a24 24 0 0024-24V88a24 24 0 00-24-24zm-124.38 64.2a48 48 0 11-43.42 43.42 48 48 0 0143.42-43.42zM76 416a12 12 0 01-12-12v-87.63L192.64 202l96.95 96.75L172.37 416zm372-12a12 12 0 01-12 12H217.63l149.53-149.53L448 333.84z" } }] })(props);
}
function IoImage(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 64H96a64.07 64.07 0 00-64 64v256a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V128a64.07 64.07 0 00-64-64zm-80 64a48 48 0 11-48 48 48.05 48.05 0 0148-48zM96 416a32 32 0 01-32-32v-67.63l94.84-84.3a48.06 48.06 0 0165.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 01-32 32H217.63l121.42-121.42a47.72 47.72 0 0161.64-.16L448 333.84z" } }] })(props);
}
function IoImagesOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M432 112V96a48.14 48.14 0 00-48-48H64a48.14 48.14 0 00-48 48v256a48.14 48.14 0 0048 48h16" } }, { "tag": "rect", "attr": { "width": "400", "height": "336", "x": "96", "y": "128", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "45.99", "ry": "45.99" } }, { "tag": "ellipse", "attr": { "cx": "372.92", "cy": "219.64", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "30.77", "ry": "30.55" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M342.15 372.17L255 285.78a30.93 30.93 0 00-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0141.46-1.87L496 402.91" } }] })(props);
}
function IoImagesSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "ellipse", "attr": { "cx": "373.14", "cy": "219.33", "fill": "none", "rx": "46.29", "ry": "46" } }, { "tag": "path", "attr": { "d": "M80 132v328a20 20 0 0020 20h392a20 20 0 0020-20V132a20 20 0 00-20-20H100a20 20 0 00-20 20zm293.14 41.33a46 46 0 11-46.28 46 46.19 46.19 0 0146.28-46zm-261.41 276v-95.48l122.76-110.2L328.27 337l-113 112.33zm368.27 0H259l144.58-144L480 370.59z" } }, { "tag": "path", "attr": { "d": "M20 32A20 20 0 000 52v344a20 20 0 0020 20h28V100a20 20 0 0120-20h380V52a20 20 0 00-20-20z" } }] })(props);
}
function IoImages(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M450.29 112H142c-34 0-62 27.51-62 61.33v245.34c0 33.82 28 61.33 62 61.33h308c34 0 62-26.18 62-60V173.33c0-33.82-27.68-61.33-61.71-61.33zm-77.15 61.34a46 46 0 11-46.28 46 46.19 46.19 0 0146.28-46.01zm-231.55 276c-17 0-29.86-13.75-29.86-30.66v-64.83l90.46-80.79a46.54 46.54 0 0163.44 1.83L328.27 337l-113 112.33zM480 418.67a30.67 30.67 0 01-30.71 30.66H259L376.08 333a46.24 46.24 0 0159.44-.16L480 370.59z" } }, { "tag": "path", "attr": { "d": "M384 32H64A64 64 0 000 96v256a64.11 64.11 0 0048 62V152a72 72 0 0172-72h326a64.11 64.11 0 00-62-48z" } }] })(props);
}
function IoInfiniteOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48m32-48s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48" } }] })(props);
}
function IoInfiniteSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M382 136c-40.87 0-73.46 20.53-93.6 37.76l-.71.61-11.47 12.47 25.32 41.61 18.74-18.79C339.89 193.1 361.78 184 382 184c40.8 0 74 32.3 74 72s-33.2 72-74 72c-62 0-104.14-81.95-104.56-82.78C275 240.29 221.56 136 130 136 62.73 136 8 189.83 8 256s54.73 120 122 120c32.95 0 65.38-13.11 93.79-37.92l.61-.54 11.38-12.38-25.33-41.61-18.83 18.88C172 319.4 151.26 328 130 328c-40.8 0-74-32.3-74-72s33.2-72 74-72c62 0 104.14 81.95 104.56 82.78C237 271.71 290.44 376 382 376c67.27 0 122-53.83 122-120s-54.73-120-122-120z" } }] })(props);
}
function IoInfinite(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32m48-64s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32" } }] })(props);
}
function IoInformationCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M220 220h32v116" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M208 340h88" } }, { "tag": "path", "attr": { "d": "M248 130a26 26 0 1026 26 26 26 0 00-26-26z" } }] })(props);
}
function IoInformationCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm64 226H200v-32h44v-88h-32v-32h64v120h44z" } }] })(props);
}
function IoInformationCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z" } }] })(props);
}
function IoInformationOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "40", "d": "M196 220h64v172" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "40", "d": "M187 396h138" } }, { "tag": "path", "attr": { "d": "M256 160a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoInformationSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "40", "d": "M196 220h64v172m-73 4h138" } }, { "tag": "path", "attr": { "d": "M256 160a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoInformation(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "40", "d": "M196 220h64v172" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "40", "d": "M187 396h138" } }, { "tag": "path", "attr": { "d": "M256 160a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoInvertModeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "d": "M256 176v160a80 80 0 010-160zm0-128v128a80 80 0 010 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48z" } }] })(props);
}
function IoInvertModeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 432v-96a80 80 0 010-160V80c97.05 0 176 79 176 176s-78.95 176-176 176z" } }, { "tag": "path", "attr": { "d": "M336 256a80 80 0 00-80-80v160a80 80 0 0080-80z" } }] })(props);
}
function IoInvertMode(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "d": "M256 176v160a80 80 0 000-160zm0-128v128a80 80 0 000 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48z" } }] })(props);
}
function IoJournalOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "320", "height": "416", "x": "96", "y": "48", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "60", "d": "M320 48v416" } }] })(props);
}
function IoJournalSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M290 32H104a24 24 0 00-24 24v400a24 24 0 0024 24h186zm118 0h-58v448h58a24 24 0 0024-24V56a24 24 0 00-24-24z" } }] })(props);
}
function IoJournal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M290 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h146zm78 0h-18v448h18a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64z" } }] })(props);
}
function IoKeyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z" } }] })(props);
}
function IoKeySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M218.1 167.2c0 13 0 25.6 4.1 37.4-43.1 50.6-167.5 194.5-167.5 194.5l2.9 36.3s34.8 33 40 28c15.4-15 24.8-25.2 24.8-25.2l7.24-43.35 47.11-3.47 3.78-46.8 49.63-.95.49-50.09 52.69 2.1 9-18.84c15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.4-121.9 119.2zM406.85 144A38.85 38.85 0 11368 105.15 38.81 38.81 0 01406.85 144z" } }] })(props);
}
function IoKey(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z" } }] })(props);
}
function IoKeypadOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "448", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "320", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M288 192a32 32 0 11-32-32 32 32 0 0132 32z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "64", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "384", "cy": "320", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "384", "cy": "192", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "384", "cy": "64", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "128", "cy": "320", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "128", "cy": "192", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "128", "cy": "64", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoKeypadSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "96", "height": "96", "x": "80", "y": "16", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "208", "y": "16", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "336", "y": "16", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "80", "y": "144", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "208", "y": "144", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "336", "y": "144", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "80", "y": "272", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "208", "y": "272", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "208", "y": "400", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "336", "y": "272", "rx": "8", "ry": "8" } }] })(props);
}
function IoKeypad(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 400a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm128 256a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zM128 272a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48zm0-128a48 48 0 1048 48 48 48 0 00-48-48z" } }] })(props);
}
function IoLanguageOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 112h288M192 64v48m80 336l96-224 96 224m-162.5-64h133M281.3 112S257 206 199 277 80 384 80 384" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 336s-35-27-72-75-56-85-56-85" } }] })(props);
}
function IoLanguageSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M363 176L246 464h47.24l24.49-58h90.54l24.49 58H480zm-26.69 186L363 279.85 389.69 362zM272 320c-.25-.19-20.59-15.77-45.42-42.67 39.58-53.64 62-114.61 71.15-143.33H352V90H214V48h-44v42H32v44h219.25c-9.52 26.95-27.05 69.5-53.79 108.36-32.68-43.44-47.14-75.88-47.33-76.22L143 152l-38 22 6.87 13.86c.89 1.56 17.19 37.9 54.71 86.57.92 1.21 1.85 2.39 2.78 3.57-49.72 56.86-89.15 79.09-89.66 79.47L64 368l23 36 19.3-11.47c2.2-1.67 41.33-24 92-80.78 24.52 26.28 43.22 40.83 44.3 41.67L255 362z" } }] })(props);
}
function IoLanguage(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M478.33 433.6l-90-218a22 22 0 00-40.67 0l-90 218a22 22 0 1040.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 00458 464a22 22 0 0020.32-30.4zM334.83 362L368 281.65 401.17 362zm-66.99-19.08a22 22 0 00-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 000-44H214V70a22 22 0 00-44 0v20H54a22 22 0 000 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 00-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1021.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0030.75-4.9z" } }] })(props);
}
function IoLaptopOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "304", "x": "48", "y": "96", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32.14", "ry": "32.14" } }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M16 416h480" } }] })(props);
}
function IoLaptopSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M477.29 400a27.75 27.75 0 002.71-12V108a28 28 0 00-28-28H60a28 28 0 00-28 28v280a27.75 27.75 0 002.71 12H0v32h512v-32z" } }] })(props);
}
function IoLaptop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 400h-28.34A47.92 47.92 0 00480 367.86V128.14A48.2 48.2 0 00431.86 80H80.14A48.2 48.2 0 0032 128.14v239.72A47.92 47.92 0 0044.34 400H16a16 16 0 000 32h480a16 16 0 000-32z" } }] })(props);
}
function IoLayersOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09zM160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48" } }] })(props);
}
function IoLayersSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 150L256 48 32 150l224 104 224-104zM255.71 392.95l-144.81-66.2L32 362l224 102 224-102-78.69-35.3-145.6 66.25z" } }, { "tag": "path", "attr": { "d": "M480 256l-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102 224-102z" } }] })(props);
}
function IoLayers(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256zm176.76-100.86z" } }, { "tag": "path", "attr": { "d": "M441.36 226.81L426.27 220l-38.77 17.74-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19z" } }, { "tag": "path", "attr": { "d": "M441.36 330.8l-15.09-6.8-38.77 17.73-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2z" } }] })(props);
}
function IoLeafOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147" } }] })(props);
}
function IoLeafSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M150.38 253.68l21.94-23.3 11.65 11c73.63 69.36 147.51 111.56 234.45 133.07 11.73-32 12.77-67.22 2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.25-26-76.6-32.09-115.09-38.54-21.12-3.54-43-7.2-66.85-14.43-43.78-13.28-89.69-52.74-90.15-53.13L33.4 30.15 32 63.33c-.1 2.56-2.42 63.57 14.22 147.77 17.58 89 50.24 155.85 97.07 198.63 38 34.69 87.62 53.9 136.93 53.9a185.88 185.88 0 0027.78-2.07c41.72-6.32 76.43-27.27 96-57.75-89.5-23.28-165.95-67.55-242-139.16z" } }, { "tag": "path", "attr": { "d": "M467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a158.49 158.49 0 01-12.13 25.68c-.74 1.25-1.51 2.49-2.29 3.71a583.43 583.43 0 0058.55 12l15.82 2.44 4.86-31.63z" } }] })(props);
}
function IoLeaf(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M161.35 242a16 16 0 0122.62-.68c73.63 69.36 147.51 111.56 234.45 133.07 11.73-32 12.77-67.22 2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.84-26.38-81.66-33.25-121.15-39.89-49.82-8.38-96.88-16.3-141.79-63.85-5-5.26-11.81-7.37-18.32-5.66-7.44 2-12.43 7.88-14.82 17.6-5.6 22.75-2 86.51 13.75 153.82 25.29 108.14 65.65 162.86 95.06 189.73 38 34.69 87.62 53.9 136.93 53.9a186 186 0 0027.77-2.04c41.71-6.32 76.43-27.27 96-57.75-89.49-23.28-165.94-67.55-242-139.16a16 16 0 01-.65-22.65zm306.08 142.19c-16.83-2.59-33.13-5.84-49-9.77a157.71 157.71 0 01-12.13 25.68c-.73 1.25-1.5 2.49-2.29 3.71a584.21 584.21 0 0058.56 12 16 16 0 104.87-31.62z" } }] })(props);
}
function IoLibraryOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "64", "height": "368", "x": "32", "y": "96", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 224h128M112 400h128" } }, { "tag": "rect", "attr": { "width": "128", "height": "304", "x": "112", "y": "160", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }, { "tag": "rect", "attr": { "width": "96", "height": "416", "x": "256", "y": "48", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89z" } }] })(props);
}
function IoLibrarySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M84 480H28a12 12 0 01-12-12V92a12 12 0 0112-12h56a12 12 0 0112 12v376a12 12 0 01-12 12zm156-272v-52a12 12 0 00-12-12H124a12 12 0 00-12 12v52zM112 416v52a12 12 0 0012 12h104a12 12 0 0012-12v-52zm0-176h128v144H112zm228 240h-72a12 12 0 01-12-12V44a12 12 0 0112-12h72a12 12 0 0112 12v424a12 12 0 01-12 12zm29-379.3l30 367.83a12 12 0 0013.45 10.92l72.16-9a12 12 0 0010.47-12.9L465 91.21a12 12 0 00-13.2-10.94l-72.13 7.51A12 12 0 00369 100.7z" } }] })(props);
}
function IoLibrary(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M64 480H48a32 32 0 01-32-32V112a32 32 0 0132-32h16a32 32 0 0132 32v336a32 32 0 01-32 32zm176-304a32 32 0 00-32-32h-64a32 32 0 00-32 32v28a4 4 0 004 4h120a4 4 0 004-4zM112 448a32 32 0 0032 32h64a32 32 0 0032-32v-30a2 2 0 00-2-2H114a2 2 0 00-2 2z" } }, { "tag": "rect", "attr": { "width": "128", "height": "144", "x": "112", "y": "240", "rx": "2", "ry": "2" } }, { "tag": "path", "attr": { "d": "M320 480h-32a32 32 0 01-32-32V64a32 32 0 0132-32h32a32 32 0 0132 32v384a32 32 0 01-32 32zm175.89-34.55l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85 3c-17.59 1.67-30.65 15.71-29.17 31.36l32.23 340c1.48 15.65 16.94 27 34.53 25.31l31.85-3c17.59-1.67 30.65-15.71 29.17-31.36z" } }] })(props);
}
function IoLinkOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "36", "d": "M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64m-140.71-96h187.42" } }] })(props);
}
function IoLinkSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M200.66 352H144a96 96 0 010-192h55.41m113.18 0H368a96 96 0 010 192h-56.66m-142.27-96h175.86" } }] })(props);
}
function IoLink(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M200.66 352H144a96 96 0 010-192h55.41m113.18 0H368a96 96 0 010 192h-56.66m-142.27-96h175.86" } }] })(props);
}
function IoListCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M224 184h128m-128 72h128m-128 71h128" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 258c0-106-86-192-192-192S64 152 64 258s86 192 192 192 192-86 192-192z" } }, { "tag": "circle", "attr": { "cx": "168", "cy": "184", "r": "8", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "168", "cy": "257", "r": "8", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "168", "cy": "328", "r": "8", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoListCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-64 287.5a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm0-71a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm0-72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm176 151H212.67v-32H368zm0-71H212.67v-32H368zm0-72H212.67v-32H368z" } }] })(props);
}
function IoListCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-88 302a24 24 0 1124-24 24 24 0 01-24 24zm0-71a24 24 0 1124-24 24 24 0 01-24 24zm0-73a24 24 0 1124-24 24 24 0 01-24 24zm184 135H224a16 16 0 010-32h128a16 16 0 010 32zm0-71H224a16 16 0 010-32h128a16 16 0 010 32zm0-72H224a16 16 0 010-32h128a16 16 0 010 32z" } }] })(props);
}
function IoListOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 144h288M160 256h288M160 368h288" } }, { "tag": "circle", "attr": { "cx": "80", "cy": "144", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "80", "cy": "256", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "80", "cy": "368", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoListSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M144 144h320M144 256h320M144 368h320" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 128h32v32H64zm0 112h32v32H64zm0 112h32v32H64z" } }] })(props);
}
function IoList(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M160 144h288M160 256h288M160 368h288" } }, { "tag": "circle", "attr": { "cx": "80", "cy": "144", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "80", "cy": "256", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "80", "cy": "368", "r": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoLocateOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M256 96V56m0 400v-40" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 112a144 144 0 10144 144 144 144 0 00-144-144z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M416 256h40m-400 0h40" } }] })(props);
}
function IoLocateSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M256 96V56m0 400v-40m0-304a144 144 0 10144 144 144 144 0 00-144-144zm160 144h40m-400 0h40" } }] })(props);
}
function IoLocate(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M256 96V56m0 400v-40m0-304a144 144 0 10144 144 144 144 0 00-144-144zm160 144h40m-400 0h40" } }] })(props);
}
function IoLocationOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "192", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoLocationSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" } }] })(props);
}
function IoLocation(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "192", "r": "32" } }, { "tag": "path", "attr": { "d": "M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" } }] })(props);
}
function IoLockClosedOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 208v-95a80 80 0 00-160 0v95" } }, { "tag": "rect", "attr": { "width": "320", "height": "272", "x": "96", "y": "208", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }] })(props);
}
function IoLockClosedSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M420 192h-68v-80a96 96 0 10-192 0v80H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V204a12 12 0 00-12-12zm-106 0H198v-80.75a58 58 0 11116 0z" } }] })(props);
}
function IoLockClosed(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 192h-16v-80a96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64zm-48 0H192v-80a64 64 0 11128 0z" } }] })(props);
}
function IoLockOpenOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 112a80 80 0 00-160 0v96" } }, { "tag": "rect", "attr": { "width": "320", "height": "272", "x": "96", "y": "208", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }] })(props);
}
function IoLockOpenSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M420 192H198v-80.75a58.08 58.08 0 0199.07-41.07A59.4 59.4 0 01314 112h38a96 96 0 10-192 0v80H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V204a12 12 0 00-12-12z" } }] })(props);
}
function IoLockOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 192H192v-80a64 64 0 11128 0 16 16 0 0032 0 96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64z" } }] })(props);
}
function IoLogInOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M288 336l80-80-80-80M80 256h272" } }] })(props);
}
function IoLogInSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 80H192a16 16 0 00-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 010 22.62L288 358.63 265.37 336l64-64H176v144a16 16 0 0016 16h240a16 16 0 0016-16V96a16 16 0 00-16-16zM64 240h112v32H64z" } }] })(props);
}
function IoLogIn(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M392 80H232a56.06 56.06 0 00-56 56v104h153.37l-52.68-52.69a16 16 0 0122.62-22.62l80 80a16 16 0 010 22.62l-80 80a16 16 0 01-22.62-22.62L329.37 272H176v104c0 32.05 33.79 56 64 56h152a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zM80 240a16 16 0 000 32h96v-32z" } }] })(props);
}
function IoLogOutOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256" } }] })(props);
}
function IoLogOutSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M160 240h160V96a16 16 0 00-16-16H64a16 16 0 00-16 16v320a16 16 0 0016 16h240a16 16 0 0016-16V272H160zm299.31 4.69L368 153.37 345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 000-22.62z" } }] })(props);
}
function IoLogOut(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M160 256a16 16 0 0116-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h160a56.06 56.06 0 0056-56V272H176a16 16 0 01-16-16zm299.31-11.31l-80-80a16 16 0 00-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1022.62 22.62l80-80a16 16 0 000-22.62z" } }] })(props);
}
function IoLogoAlipay(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M102.41 32C62.38 32 32 64.12 32 103.78v304.45C32 447.86 64.38 480 104.41 480h303.2c40 0 72.39-32.14 72.39-71.77v-3.11c-1.35-.56-115.47-48.57-174.5-76.7-39.82 48.57-91.18 78-144.5 78-90.18 0-120.8-78.22-78.1-129.72 9.31-11.22 25.15-21.94 49.73-28 38.45-9.36 99.64 5.85 157 24.61a309.41 309.41 0 0025.46-61.67H138.34V194h91.13v-31.83H119.09v-17.75h110.38V99s0-7.65 7.82-7.65h44.55v53H391v17.75H281.84V194h89.08a359.41 359.41 0 01-37.72 94.43c27 9.69 49.31 18.88 67.39 24.89 60.32 20 77.23 22.45 79.41 22.7V103.78C480 64.12 447.6 32 407.61 32h-305.2zM152 274.73q-5.81.06-11.67.63c-11.3 1.13-32.5 6.07-44.09 16.23-34.74 30-13.94 84.93 56.37 84.93 40.87 0 81.71-25.9 113.79-67.37-41.36-20-77-34.85-114.4-34.42z" } }] })(props);
}
function IoLogoAmazon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48.48 378.73a300.52 300.52 0 00152.89 95.92 262.57 262.57 0 00159.3-17.25 225.52 225.52 0 0066.79-47 6.36 6.36 0 00-2-8.53 11.76 11.76 0 00-8-.05 401.92 401.92 0 01-116.55 39.34 358.13 358.13 0 01-127.29-8.83 446.73 446.73 0 01-119.1-60.49 5 5 0 00-6.06 6.9z" } }, { "tag": "path", "attr": { "d": "M387.15 388.44a168.11 168.11 0 0148.94-2.23l.67.13a10 10 0 017.37 12.05A204.71 204.71 0 01429 444.47a2.55 2.55 0 001.66 3.18 2.51 2.51 0 002.23-.37A83.31 83.31 0 00464 382.86a12.44 12.44 0 00-10.22-13.22A95.75 95.75 0 00384.91 384a2.55 2.55 0 00-.57 3.55 2.52 2.52 0 002.81.89zm-82.91-63.52a164 164 0 01-28.92 25.3A135.16 135.16 0 01208.63 369a99.49 99.49 0 01-57.49-19.85 97.25 97.25 0 01-27.36-100.28 112.35 112.35 0 0165.3-69.06 367.67 367.67 0 01104.7-15.55V127A37.82 37.82 0 00261 94.72a59.9 59.9 0 00-31.17 4.08 48.89 48.89 0 00-27.13 34.67 12 12 0 01-12.58 6.72l-50.9-4.5a11.38 11.38 0 01-8.38-10.16 103.66 103.66 0 0136.61-63.45A143.86 143.86 0 01257.85 32a146.24 146.24 0 0184.27 27.67 86.82 86.82 0 0130.7 70.22V258.8a84.46 84.46 0 008 31.28l15.87 23.23a13 13 0 010 11.23l-46.99 39.71a12.5 12.5 0 01-12.68-.44 244.84 244.84 0 01-32.78-38.89zm-10.6-116.83a257.68 257.68 0 00-44 2.89A63 63 0 00208 242.54a63 63 0 003.07 54 40.6 40.6 0 0047.11 12.19 78.61 78.61 0 0035.46-55.58v-45.06" } }] })(props);
}
function IoLogoAmplify(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M112.31 268l40.36-68.69 34.65 59-67.54 115h135L289.31 432H16zm58.57-99.76l33.27-56.67L392.44 432h-66.68zM222.67 80h66.59L496 432h-66.68z" } }] })(props);
}
function IoLogoAndroid(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M380.91 199l42.47-73.57a8.63 8.63 0 00-3.12-11.76 8.52 8.52 0 00-11.71 3.12l-43 74.52c-32.83-15-69.78-23.35-109.52-23.35s-76.69 8.36-109.52 23.35l-43-74.52a8.6 8.6 0 10-14.88 8.64L131 199C57.8 238.64 8.19 312.77 0 399.55h512c-8.19-86.78-57.8-160.91-131.09-200.55zM138.45 327.65a21.46 21.46 0 1121.46-21.46 21.47 21.47 0 01-21.46 21.46zm235 0A21.46 21.46 0 11395 306.19a21.47 21.47 0 01-21.51 21.46z" } }] })(props);
}
function IoLogoAngular(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M213.57 256h84.85l-42.43-89.36L213.57 256z" } }, { "tag": "path", "attr": { "d": "M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z" } }] })(props);
}
function IoLogoAppleAppstore(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32C132.26 32 32 132.26 32 256s100.26 224 224 224 224-100.26 224-224S379.74 32 256 32zm-85 321.89a15.48 15.48 0 01-13.46 7.65 14.91 14.91 0 01-7.86-2.16 15.48 15.48 0 01-5.6-21.21l15.29-25.42a8.73 8.73 0 017.54-4.3h2.26c11.09 0 18.85 6.67 21.11 13.13zm129.45-50l-100.13.11h-66.55a15.46 15.46 0 01-15.51-16.15c.32-8.4 7.65-14.76 16-14.76h48.24l57.19-97.35-18.52-31.55C217 137 218.85 127.52 226 123a15.57 15.57 0 0121.87 5.17l9.9 16.91h.11l9.91-16.91A15.58 15.58 0 01289.6 123c7.11 4.52 8.94 14 4.74 21.22l-18.52 31.55-18 30.69-39.09 66.66v.11h57.61c7.22 0 16.27 3.88 19.93 10.12l.32.65c3.23 5.49 5.06 9.26 5.06 14.75a13.82 13.82 0 01-1.17 5.17zm77.75.11h-27.11v.11l19.82 33.71a15.8 15.8 0 01-5.17 21.53 15.53 15.53 0 01-8.08 2.27A15.71 15.71 0 01344.2 354l-29.29-49.86-18.2-31L273.23 233a38.35 38.35 0 01-.65-38c4.64-8.19 8.19-10.34 8.19-10.34L333 273h44.91c8.4 0 15.61 6.46 16 14.75A15.65 15.65 0 01378.23 304z" } }] })(props);
}
function IoLogoAppleAr(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M201.14 64L256 32l54.86 32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 32v80" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M310.86 448L256 480l-54.86-32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 480v-80" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 207.51V144l53.15-31.51" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M64 144l67.29 40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 304.49V368l-53.15 31.51" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 368l-67.29-40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M117.15 400L64 368v-63.51" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M64 368l66.64-40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M394.85 112.49L448 144v63.51" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 144l-67.29 40M256 320v-64l54.86-32M256 256l-54.86-32" } }] })(props);
}
function IoLogoApple(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z" } }, { "tag": "path", "attr": { "d": "M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z" } }] })(props);
}
function IoLogoBehance(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M344.1 233.6c-28.9 0-32.9 28.8-32.9 28.8h61.4s.4-28.8-28.5-28.8zm-139.3 28.8h-54.4v50h51.7c7.8-.2 22.4-2.4 22.4-24.3 0-26-19.7-25.7-19.7-25.7z" } }, { "tag": "path", "attr": { "d": "M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm47.2 137.6h77.1v23h-77.1v-23zm-39 120.8c0 57-59.4 55.2-59.4 55.2h-97.2v-187h97.2c29.6 0 52.9 16.3 52.9 49.8S229.2 244 229.2 244c37.6 0 35 46.4 35 46.4zm144.2-3.1h-96.9c0 34.7 32.9 32.5 32.9 32.5 31.1 0 30-20.1 30-20.1h32.9c0 53.4-64 49.7-64 49.7-76.7 0-71.8-71.5-71.8-71.5s-.1-71.8 71.8-71.8c75.7.1 65.1 81.2 65.1 81.2z" } }, { "tag": "path", "attr": { "d": "M218 211.3c0-19.4-13.2-19.4-13.2-19.4h-54.4v41.7h51c8.8 0 16.6-2.9 16.6-22.3z" } }] })(props);
}
function IoLogoBitbucket(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M483.13 32.23a19.65 19.65 0 00-2.54-.23h-449C23 31.88 16.12 38.88 16 47.75a11.44 11.44 0 00.23 2.8l65.3 411.25a22.52 22.52 0 007 12.95A20 20 0 00102 480h313.18a15.45 15.45 0 0015.34-13.42l38.88-247.91H325.19l-18.46 112H205.21l-25.73-148h295.58l20.76-132c1.27-8.75-4.38-17.04-12.69-18.44z" } }] })(props);
}
function IoLogoBitcoin(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M410.47 279.2c-5-11.5-12.7-21.6-28.1-30.1a98.15 98.15 0 00-25.4-10 62.22 62.22 0 0016.3-11 56.37 56.37 0 0015.6-23.3 77.11 77.11 0 003.5-28.2c-1.1-16.8-4.4-33.1-13.2-44.8s-21.2-20.7-37.6-27c-12.6-4.8-25.5-7.8-45.5-8.9V32h-40v64h-32V32h-41v64H96v48h27.87c8.7 0 14.6.8 17.6 2.3a13.22 13.22 0 016.5 6c1.3 2.5 1.9 8.4 1.9 17.5V343c0 9-.6 14.8-1.9 17.4s-2 4.9-5.1 6.3-3.2 1.3-11.8 1.3h-26.4L96 416h87v64h41v-64h32v64h40v-64.4c26-1.3 44.5-4.7 59.4-10.3 19.3-7.2 34.1-17.7 44.7-31.5s14-34.9 14.93-51.2c.67-14.5-.03-33.2-4.56-43.4zM224 150h32v74h-32zm0 212v-90h32v90zm72-208.1c6 2.5 9.9 7.5 13.8 12.7 4.3 5.7 6.5 13.3 6.5 21.4 0 7.8-2.9 14.5-7.5 20.5-3.8 4.9-6.8 8.3-12.8 11.1zm28.8 186.7c-7.8 6.9-12.3 10.1-22.1 13.8a56.06 56.06 0 01-6.7 1.9v-82.8a40.74 40.74 0 0111.3 3.4c7.8 3.3 15.2 6.9 19.8 13.2a43.82 43.82 0 018 24.7c-.03 10.9-2.83 19.2-10.33 25.8z" } }] })(props);
}
function IoLogoBuffer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M39.93 149.25l197.4 95.32c5.14 2.45 12 3.73 18.79 3.73s13.65-1.28 18.78-3.73l197.4-95.32c10.38-5 10.38-13.18 0-18.2L274.9 35.73c-5.13-2.45-12-3.73-18.78-3.73s-13.65 1.28-18.79 3.73l-197.4 95.32c-10.38 5.02-10.38 13.18 0 18.2z" } }, { "tag": "path", "attr": { "d": "M472.3 246.9s-36.05-17.38-40.83-19.72-6.07-2.21-11.09.12-145.6 70.23-145.6 70.23a45.71 45.71 0 01-18.78 3.74c-6.77 0-13.65-1.29-18.78-3.74 0 0-136.85-66-143.27-69.18C87 225 85 225 78.67 228l-39 18.78c-10.38 5-10.38 13.19 0 18.2L237.1 360.3c5.13 2.45 12 3.73 18.78 3.73s13.65-1.28 18.79-3.73l197.4-95.3c10.61-4.92 10.61-13.08.23-18.1z" } }, { "tag": "path", "attr": { "d": "M472.3 362.75s-36.05-17.38-40.83-19.75-6.07-2.21-11.09.12S274.9 413.5 274.9 413.5a45.74 45.74 0 01-18.78 3.73c-6.77 0-13.65-1.28-18.79-3.73 0 0-136.85-66-143.26-69.18-7-3.39-9-3.39-15.29-.35l-39 18.78c-10.39 5-10.39 13.18 0 18.2l197.4 95.32c5.13 2.56 12 3.73 18.78 3.73s13.65-1.28 18.78-3.73L472.18 381c10.5-5.07 10.5-13.23.12-18.25z" } }] })(props);
}
function IoLogoCapacitor(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 101.09L372.37 208.72l106.86 107.06-69.3 69.3-283.22-283.23L196 32.54l107.07 106.88L410.67 32zM32.55 196l69.3-69.31 283.22 283.24-69.3 69.3-107-106.87L101.08 480 32 410.67l107.42-107.61z" } }] })(props);
}
function IoLogoChrome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M188.8 255.93a67.2 67.2 0 1067.2-67.18 67.38 67.38 0 00-67.2 67.18z" } }, { "tag": "path", "attr": { "d": "M476.75 217.79v.05a206.63 206.63 0 00-7-28.84h-.11a202.16 202.16 0 017.07 29 203.5 203.5 0 00-7.07-29h-155.4c19.05 17 31.36 40.17 31.36 67.05a86.55 86.55 0 01-12.31 44.73L231 478.45a2.44 2.44 0 010 .27v.28-.26a224 224 0 0025 1.26c6.84 0 13.61-.39 20.3-1a222.91 222.91 0 0029.78-4.74C405.68 451.52 480 362.4 480 255.94a225.25 225.25 0 00-3.25-38.15z" } }, { "tag": "path", "attr": { "d": "M256 345.5c-33.6 0-61.6-17.91-77.29-44.79L76 123.05l-.14-.24A224 224 0 00207.4 474.55v-.05l77.69-134.6a84.13 84.13 0 01-29.09 5.6z" } }, { "tag": "path", "attr": { "d": "M91.29 104.57l77.35 133.25A89.19 89.19 0 01256 166h205.17a246.51 246.51 0 00-25.78-43.94l.12.08A245.26 245.26 0 01461.17 166h.17a245.91 245.91 0 00-25.66-44 2.63 2.63 0 01-.35-.26 223.93 223.93 0 00-344.19-17.4l.14.24z" } }] })(props);
}
function IoLogoClosedCaptioning(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M0 80v352h512V80zm464 175.78c0 25.74-1.6 45.32-3.77 77.22s-19.2 54.34-59.09 57.86-95.77 3.85-145.14 3.74c-49 .11-105.14-.11-145.14-3.74s-56.8-26-59.09-57.86S48 281.52 48 255.78s.11-42.46 3.77-77.22 23-54.12 59.09-57.64 98.28-3.52 145.14-3.52 109 0 145.14 3.52 55.43 23 59.09 57.64 3.77 51.59 3.77 77.22z" } }, { "tag": "path", "attr": { "d": "M367.57 282.84v.77c0 17.93-11.11 28.49-25.95 28.49s-24.84-11.88-26.27-28.49c0 0-1.31-8.69-1.31-26.29a229.5 229.5 0 011.53-28.6c2.64-18.7 11.77-28.49 26.6-28.49s26.49 12.76 26.49 32.12v.55h49.58c0-24.09-6.05-45.76-18.25-59.4S369.76 153 345.8 153a108.06 108.06 0 00-33 4.73 58.82 58.82 0 00-25.94 16.61c-7.23 7.96-12.86 18.52-16.86 31.83s-6 30-6 50.27c0 19.8 1.65 36.3 4.84 49.61s8 23.87 14.4 31.79a49.76 49.76 0 0024 16.5q14.5 4.62 34 4.62c27.47 0 47.26-7 59.13-20.57S418 305.06 418 279.1h-50.65c.22 0 .22 2.75.22 3.74zm-170.27 0v.77c0 17.93-11.1 28.49-25.94 28.49s-24.84-11.88-26.27-28.49c0 0-1.31-8.69-1.31-26.29a229.5 229.5 0 011.53-28.6c2.64-18.7 11.77-28.49 26.6-28.49S198.4 213 198.4 232.35v.55H248c0-24.09-6-45.76-18.25-59.4S199.5 153 175.54 153a108.06 108.06 0 00-33 4.73 58.82 58.82 0 00-25.94 16.61c-7.26 7.92-12.86 18.48-16.93 31.79s-6 30-6 50.27c0 19.8 1.65 36.3 4.84 49.61s8 23.87 14.4 31.79a49.76 49.76 0 0024 16.5q14.51 4.62 34 4.62c27.48 0 47.27-7 59.14-20.57s17.81-33.33 17.81-59.29h-50.78c.22.04.22 2.79.22 3.78z" } }] })(props);
}
function IoLogoCodepen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M241.24 303.94c-15.32-10.36-30.74-20.57-46.06-30.93-2-1.38-3.43-1.48-5.5 0l-38.88 26.12C182 319.9 244 361.32 244 361.32v-53.79c0-1.22-1.55-2.78-2.76-3.59zm-46.15-63.27q23.19-15.24 46.11-30.86a7.54 7.54 0 002.8-5.34v-51.7s-62 41.12-93.26 61.94c13.7 9.16 26.67 17.91 39.78 26.44 1.02.66 3.4.28 4.57-.48zm74.75-31.32q23.71 16.07 47.63 31.82a4.3 4.3 0 003.83 0l39.76-26.47L268 152.48v53.35a4.79 4.79 0 001.84 3.52zm-11.73 21.02a5.27 5.27 0 00-4.74.17c-4.82 3-9.47 6.2-14.17 9.35-8.25 5.53-25.35 17-25.35 17l38.84 25.86a6.18 6.18 0 006.26.11l39-26s-34.07-22.66-39.84-26.49zM141 237.12v39.61l29.62-19.84L141 237.12z" } }, { "tag": "path", "attr": { "d": "M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm139 265c0 5.78-2.65 9.86-7.51 13.09q-61.71 41-123.29 82.19c-5.85 3.92-11.17 3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14 2.52-10.34 7.62-13.72 40.91-27.13 81.94-54.36 122.73-81.68 5.82-3.89 11.09-4 16.94-.09q61.54 41.21 123.26 82.19c4.68 3.11 7.45 6.95 7.45 12.66z" } }, { "tag": "path", "attr": { "d": "M316.25 273.23q-22.59 15.34-45.39 30.34c-2.41 1.58-2.89 3.31-2.86 6.19v51.34l93-62-38.53-25.88c-2.3-1.61-3.89-1.57-6.22.01zm53.75 3.45v-39.62l-29.59 19.87L370 276.68z" } }] })(props);
}
function IoLogoCss3(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z" } }] })(props);
}
function IoLogoDesignernews(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M295.31 122.8L222.86 64l72.68 122.64-.23-63.84z" } }, { "tag": "path", "attr": { "d": "M339.43 64v195.6h-41.6L225.6 141.28l1.94 118.32h-45.83V131.2L139.09 96c1.14 1.44 2.28 2.88 3.31 4.44 11.43 16.68 17.14 36.6 17.14 60.6 0 59-35 98.52-87.88 98.52H0v.48L228.11 448H512V205.72z" } }, { "tag": "path", "attr": { "d": "M111.89 162.52c0-34.8-16.23-54.12-45.38-54.12H44.57v106.8h21.72c29.71 0 45.6-18.48 45.6-52.68z" } }] })(props);
}
function IoLogoDeviantart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M408 103.28V16h-89.31l-8.9 8.78-42.15 78.48-13.25 8.74H104v119.85h82.68l7.36 8.71L104 408.72V496h89.3l8.91-8.79 42.14-78.48 13.26-8.73H408V280.13h-82.68l-7.36-8.75L408 103.28z" } }] })(props);
}
function IoLogoDiscord(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z" } }, { "tag": "path", "attr": { "d": "M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zm88.38 0c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z" } }] })(props);
}
function IoLogoDocker(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M507 211.16c-1.42-1.19-14.25-10.94-41.79-10.94a132.55 132.55 0 00-21.61 1.9c-5.22-36.4-35.38-54-36.57-55l-7.36-4.28-4.75 6.9a101.65 101.65 0 00-13.06 30.45c-5 20.7-1.9 40.2 8.55 56.85-12.59 7.14-33 8.8-37.28 9H15.94A15.93 15.93 0 000 262.07a241.25 241.25 0 0014.75 86.83C26.39 379.35 43.72 402 66 415.74 91.22 431.2 132.3 440 178.6 440a344.23 344.23 0 0062.45-5.71 257.44 257.44 0 0081.69-29.73 223.55 223.55 0 0055.57-45.67c26.83-30.21 42.74-64 54.38-94h4.75c29.21 0 47.26-11.66 57.23-21.65a63.31 63.31 0 0015.2-22.36l2.14-6.18z" } }, { "tag": "path", "attr": { "d": "M47.29 236.37H92.4a4 4 0 004-4v-40.48a4 4 0 00-4-4H47.29a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4m62.21.04h45.12a4 4 0 004-4v-40.48a4 4 0 00-4-4H109.5a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4m63.4.04H218a4 4 0 004-4v-40.48a4 4 0 00-4-4h-45.1a4 4 0 00-4 4v40.44a3.87 3.87 0 004 4m62.46.04h45.12a4 4 0 004-4v-40.48a4 4 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4 4 0 004 4M109.5 178.57h45.12a4.16 4.16 0 004-4v-40.48a4 4 0 00-4-4H109.5a4 4 0 00-4 4v40.44a4.34 4.34 0 004 4m63.4.04H218a4.16 4.16 0 004-4v-40.48a4 4 0 00-4-4h-45.1a4 4 0 00-4 4v40.44a4 4 0 004 4m62.46.04h45.12a4.16 4.16 0 004-4v-40.48a4.16 4.16 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4m0-58h45.12a4 4 0 004-4V76a4.16 4.16 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4.17 4.17 0 004 4m62.92 115.93h45.12a4 4 0 004-4v-40.48a4 4 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4" } }] })(props);
}
function IoLogoDribbble(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224 224-100.22 224-224S379.67 32 256 32zm142.22 103.25a186.36 186.36 0 0144 108.38c-40.37-2.1-88.67-2.1-127.4 1.52-4.9-12.37-9.92-24.5-15.4-36.17 44.66-19.36 79.08-44.8 98.8-73.73zM256 69.33a185.81 185.81 0 01119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.51 187.51 0 0146-5.95zm-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0196.34-120.31zM69.68 247.13c10.62.47 21.35.7 32.2.59 58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.43 115.43 0 00-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0169.33 256c0-3 .12-5.95.35-8.87zM256 442.67a185.57 185.57 0 01-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27 5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 01322 430.42a185.06 185.06 0 01-66 12.25zm100.92-29.75a672.61 672.61 0 00-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22 36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 01-84.58 136.27z" } }] })(props);
}
function IoLogoDropbox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256.32 126.24l-120.16 78.25 120.16 78.24L136.16 361 16 282.08l120.16-78.24L16 126.24 136.16 48zm-120.8 259.52l120.16-78.25 120.16 78.25L255.68 464zm120.8-103.68l120.16-78.24-120.16-77.6L375.84 48 496 126.24l-120.16 78.25L496 282.73 375.84 361z" } }] })(props);
}
function IoLogoEdge(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M255.5 15c-132 0-240 108-240 240s108 240 240 240c85.4 0 160.8-45.2 203.3-112.9a6.87 6.87 0 00-9.1-9.7 108.64 108.64 0 01-18.4 8.6c-36.8 12.6-57.1 13.1-82.1 12-27.9-1.2-61.9-10.8-85.8-25s-43.5-34.6-54.1-52.3-17-39.9-14.1-68.3c2.9-29 29.4-52.6 60.4-52.6 33.5 0 60.8 26.6 60.8 60.1 0 17-8.1 31.7-18.5 43.5-2.3 2.1-7.6 9.7 5.8 20 15.9 12.2 51.6 18 79.9 16.6s59.1-12.6 80.2-34.8c16.8-17.7 31.8-46.1 31.8-77.4C495.5 97.7 379.5 15 255.5 15z" } }] })(props);
}
function IoLogoElectron(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M86.76 255a9.89 9.89 0 004.87-1.29 9.82 9.82 0 003.65-13.43c-16.46-28.56-17.81-52.12-7.45-70 14.26-24.57 53.61-33.65 105.27-24.29a9.86 9.86 0 0011.45-7.9 9.84 9.84 0 00-7.93-11.44c-29.19-5.28-56-5.18-77.39.3-22.3 5.71-39 17.28-48.45 33.48-14 24.19-12.7 54.73 7.42 89.62a9.85 9.85 0 008.56 4.95zm274.85-111.27c32.24.42 52.61 9.31 62.79 26.86 14.21 24.48 2.52 62.81-31.27 102.52a9.82 9.82 0 007.51 16.18 9.88 9.88 0 007.52-3.46c19.12-22.47 32.35-45.54 38.25-66.71 6.14-22 4.43-42.21-5-58.38-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83 9.83 0 00-.12 19.66zm-35.14 271.16a9.88 9.88 0 00-13.5 3.35c-16.41 27.15-36.57 42.1-56.77 42.1-28.49 0-56-29.31-73.73-78.42a9.87 9.87 0 00-12.59-5.92 9.83 9.83 0 00-6 12.58c10 27.77 23.47 50.75 39 66.46 16.11 16.34 34.55 25 53.32 25 27.38 0 53.54-18.33 73.65-51.61a9.81 9.81 0 00-3.38-13.5zm105.23-76.35a32.14 32.14 0 00-29.9 44.33c-41.8 19.5-119.8 4.79-191.87-36.62-32.91-18.9-62.16-41.86-84.6-66.39a9.9 9.9 0 00-13.91-.65 9.8 9.8 0 00-.65 13.9c23.79 26 54.68 50.28 89.33 70.18 40.28 23.13 82.27 38.63 121.43 44.81a225.54 225.54 0 0035 2.91c23.12 0 43-4.3 58.51-12.79a32.2 32.2 0 1016.7-59.68zm0 44.66a12.6 12.6 0 01-7.82-2.72 10 10 0 00-2.2-2.21 12.61 12.61 0 1110 4.93z" } }, { "tag": "path", "attr": { "d": "M82.09 338.59c.57-21.26 12.41-47 33.68-73.16 23.19-28.45 56.69-56 94.34-77.65 33.25-19.1 65.2-31.9 98.07-38.91a9.83 9.83 0 10-4.12-19.22c-34.85 7.43-68.78 21-103.79 41.09C116.09 219.09 59.9 289.88 62.46 343.9a32.32 32.32 0 1019.63-5.31zM80.3 383.2a12.5 12.5 0 1112.59-12.5 12.56 12.56 0 01-12.59 12.5z" } }, { "tag": "path", "attr": { "d": "M256.2 96.32a32.23 32.23 0 0026.53-13.81c17.89 11.69 34 35 45.81 66.12 13 34.39 19.84 75.38 19.84 118.54 0 37.18-5.19 72.35-15 103.6a9.72 9.72 0 00.66 7.49 9.82 9.82 0 005.8 4.84 9.89 9.89 0 0012.34-6.44c10.42-33.14 15.93-70.34 15.93-109.49 0-47.17-7.77-91.77-22.47-129-14.41-36.48-34.13-62.4-57.14-75.16a32.3 32.3 0 10-32.3 33.31zm0-44.66a12.5 12.5 0 11-12.59 12.5 12.56 12.56 0 0112.59-12.5zm-5.2 191.7a24.35 24.35 0 005.16 48.16 24.68 24.68 0 005.16-.55A24.36 24.36 0 10251 243.36z" } }] })(props);
}
function IoLogoEuro(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M231.8 272v-48H376l8-48H231.8v-8.12c0-38.69 16.47-62.56 87.18-62.56 28.89 0 61.45 2.69 102.5 9.42l10.52-70A508.54 508.54 0 00315.46 32C189.26 32 135 76.4 135 158.46V176H80v48h55v48H80v48h55v33.54C135 435.6 189.23 480 315.43 480a507.76 507.76 0 00116.44-12.78l-10.58-70c-41.05 6.73-73.46 9.42-102.35 9.42-70.7 0-87.14-20.18-87.14-67.94V320h128.47l7.87-48z" } }] })(props);
}
function IoLogoFacebook(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" } }] })(props);
}
function IoLogoFigma(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z" } }, { "tag": "circle", "attr": { "cx": "336", "cy": "256", "r": "80" } }] })(props);
}
function IoLogoFirebase(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M93.19 329.38l47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45zM432 400l-46.74-276.79a11 11 0 00-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0031.91 0zM302.36 158.93l-36.54-69.54a10.86 10.86 0 00-19.36 0L85.83 375.74z" } }] })(props);
}
function IoLogoFirefox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M471.46 194.62v-.07c-.22-.76-.45-1.52-.68-2.28-.05-.19-.11-.38-.17-.56-.43-1.44-.87-2.88-1.33-4.31l-.06-.2a223.24 223.24 0 00-10-25.56 191.77 191.77 0 00-12.9-23.8 225.15 225.15 0 00-74.74-73.74A222.9 222.9 0 00256 32c-7 0-14 .34-20.82 1-24.12 2.54-64.78 11.21-97.77 40.18C257.5 11.86 417.94 85.7 404.29 223c-4.86 49-46.46 82.67-85.19 88.35a73.73 73.73 0 01-20.8.21c-94.59-13.15-88.8-90.68-60.06-123.83-38-.24-67.47 46.79-53.15 93-32.95-61.18.35-157 70.93-186-82.95-12-160.71 28.2-185.7 98.07A330.23 330.23 0 0188.07 118s-45.22 35.74-54.44 110.9c-.14 1.16-.27 2.32-.39 3.49-.05.4-.09.8-.13 1.21q-.53 5.25-.8 10.57v.81c-.07 1.48-.13 3-.17 4.46v1.25c0 1.76-.07 3.52-.07 5.29 0 123.71 100.29 224 224 224S480 379.71 480 256a224 224 0 00-8.54-61.38z" } }] })(props);
}
function IoLogoFlickr(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm-82.16 280A56 56 0 11228 257.84 56 56 0 01173.84 312zm168 0A56 56 0 11396 257.84 56 56 0 01341.84 312z" } }] })(props);
}
function IoLogoFoursquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M376.76 32H138.54C105.67 32 96 56.8 96 72.41v379.64c0 17.59 9.42 24.12 14.72 26.27s19.91 4 28.67-6.17c0 0 112.47-130.89 114.4-132.83 2.92-2.93 2.92-2.93 5.84-2.93h72.77c30.58 0 35.49-21.87 38.69-34.75 2.65-10.79 32.48-164 42.45-212.56C421.14 52 411.74 32 376.76 32zm-5.67 269.64c2.65-10.79 32.48-164 42.45-212.56m-50.85 7.59l-10 51.73c-1.19 5.65-8.28 11.6-14.86 11.6h-95.92c-10.44 0-17.91 6.14-17.91 16.6v13.45c0 10.47 7.52 17.89 18 17.89h81.85c7.38 0 14.61 8.11 13 16s-9.09 46.57-10 50.89-5.84 11.72-14.61 11.72H248c-11.7 0-15.24 1.54-23.07 11.3s-78.26 94.59-78.26 94.59c-.71.82-1.41.58-1.41-.31V95.9c0-6.69 5.8-14.53 14.48-14.53h191.14a12.42 12.42 0 0111.81 15.3z" } }] })(props);
}
function IoLogoGithub(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" } }] })(props);
}
function IoLogoGitlab(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M494.07 281.6l-25.18-78.08a11 11 0 00-.61-2.1l-50.5-156.94a20.08 20.08 0 00-19.17-13.82 19.77 19.77 0 00-18.95 13.94l-48.14 149.55h-152L131.34 44.59a19.76 19.76 0 00-18.86-13.94h-.11a20.15 20.15 0 00-19.12 14L42.7 201.73c0 .14-.11.26-.16.4l-25.63 79.48a29.15 29.15 0 0010.44 32.46l221.44 162.41a11.25 11.25 0 0013.38-.07l221.48-162.34a29.13 29.13 0 0010.42-32.47m-331-64.51l61.73 191.76L76.63 217.09m209.64 191.8l59.19-183.84 2.55-8h86.52L300.47 390.44M398.8 59.31l43.37 134.83h-86.82M324.16 217l-43 133.58-25.66 79.56L186.94 217M112.27 59.31l43.46 134.83H69M40.68 295.58a6.19 6.19 0 01-2.21-6.9l19-59 139.61 180.59m273.26-114.69L313.92 410.22l.52-.69L453.5 229.64l19 59a6.2 6.2 0 01-2.19 6.92" } }] })(props);
}
function IoLogoGooglePlaystore(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z" } }] })(props);
}
function IoLogoGoogle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z" } }] })(props);
}
function IoLogoHackernews(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 32v448h448V32zm249.67 250.83v84H235v-84l-77-140h55l46.32 97.54 44.33-97.54h52.73z" } }] })(props);
}
function IoLogoHtml5(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z" } }] })(props);
}
function IoLogoInstagram(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" } }, { "tag": "path", "attr": { "d": "M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" } }] })(props);
}
function IoLogoIonic(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 153.9A102.1 102.1 0 10358.1 256 102.23 102.23 0 00256 153.9z" } }, { "tag": "circle", "attr": { "cx": "402.59", "cy": "116.45", "r": "46.52" } }, { "tag": "path", "attr": { "d": "M459.86 163.2l-1.95-4.28-3.11 3.52a70 70 0 01-28.06 19.32l-3 1.1 1.22 2.93A181.43 181.43 0 01439 256c0 100.92-82.1 183-183 183S73 356.92 73 256 155.08 73 256 73a180.94 180.94 0 0178.43 17.7l2.87 1.3 1.25-2.92A70.19 70.19 0 01359.21 62l3.67-2.93-4.17-2.07A221.61 221.61 0 00256 32C132.49 32 32 132.49 32 256s100.49 224 224 224 224-100.49 224-224a222.19 222.19 0 00-20.14-92.8z" } }] })(props);
}
function IoLogoIonitron(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M468.41 269.19c-2.64-33.39-11.76-58-31.44-57.39a1 1 0 00-.92 1.37c5.11 12.59 9.68 36.9 9.17 58.07a1 1 0 01-2 .08c-2.19-21.21-7.1-41.19-16.22-59.43a186.69 186.69 0 00-348.91 41 4 4 0 01-3.33 3.11l-8.65 1.22c-17.2 2.4-26.9 34.9-21.7 72.5s23.5 66.2 40.7 63.8l13.24-1.85a4 4 0 013.93 1.84 186.71 186.71 0 00339-56.07 4 4 0 013.68-3.08l4.4-.24c15.15-2.53 21.75-31.23 19.05-64.93zM94.5 270.42a1 1 0 011.59-1.19c9.63 10 20.25 27.65 23.32 49.86 3.24 23.05-2.24 45.2-9.13 57.87a1 1 0 01-1.84-.73c4.07-14.44 5.16-33.83 2.27-54.74-2.8-20.32-8.71-38.27-16.21-51.07zm178.77 109.79a15.53 15.53 0 01-15.41-13.83 15.48 15.48 0 1115.41 13.83zm81.84-4.72a15.37 15.37 0 1114.6-16.2 15.43 15.43 0 01-14.6 16.2z" } }, { "tag": "path", "attr": { "d": "M165.51 70a.31.31 0 01.1.2c.1.2.2.3.3.5v.1a5.78 5.78 0 002.3 2.7c2 1.5 5 2.4 8.6 3a63.69 63.69 0 0011.9.5 28.25 28.25 0 002.9-.2c-.4-.4-.8-.9-1.2-1.3h-1.3a52 52 0 01-11.6-.9 19.71 19.71 0 01-8.4-3.4 9.24 9.24 0 01-1.4-1.4 4.48 4.48 0 010-2.3c.5-2.3 2.4-4.8 5.5-7.4a57.25 57.25 0 0110.9-7c.9-.4 1.7-.9 2.6-1.3.1-.1.3-.1.5-.2a24.69 24.69 0 00-.2 10.5c2.3 11.9 11.6 20.3 23.2 20.6l4 24.3 12.7-3-4-23.3c10.8-4.6 16.3-16.1 14-28a25.8 25.8 0 00-3.9-9.5c-5.3-.8-15.6-.8-29.2 2.1 1.1-.3 2.1-.7 3.2-1a135.27 135.27 0 0121.5-4.2c.6-.1 1.2-.1 1.8-.2l3.5-.3h.6a61.83 61.83 0 0110.8.3 29 29 0 016.1 1.4 5.71 5.71 0 00-.9 3.2 6.12 6.12 0 004.3 5.8 25.53 25.53 0 01-2.1 2.8 26 26 0 01-2.9 2.8c-1.1.9-2.3 1.8-3.5 2.7l-6.5 3.8-.3 1.5a.35.35 0 00.2-.1l8.4-4.7c1.2-.8 2.4-1.6 3.4-2.4a29.15 29.15 0 003.2-2.8 29.86 29.86 0 002.4-2.8l.3-.6a6.14 6.14 0 005.4-6 6.06 6.06 0 00-6.1-6.1 6.81 6.81 0 00-2.8.7 24.6 24.6 0 00-8.2-2.7 63.48 63.48 0 00-15.5-.6 14.92 14.92 0 00-2.1.2 13.55 13.55 0 01-2 .2 25.15 25.15 0 00-18.7-3.7 25.86 25.86 0 00-17.8 13c-1.3.5-2.6 1.1-3.8 1.7-.7.3-1.3.6-2 .9a60.75 60.75 0 00-13.9 9.1c-3.1 2.9-4.9 5.7-5.3 8.3a6.14 6.14 0 00.7 4 2.19 2.19 0 01.3.5z" } }] })(props);
}
function IoLogoJavascript(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" } }] })(props);
}
function IoLogoLaravel(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M505.57 234.62c-3.28-3.53-26.82-32.29-39.51-47.79-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a39.78 39.78 0 00-5.41.44c-.37.05-.75.11-1.15.15-2.45.27-10.06 1.5-28.14 4.48-14 2.29-35.11 5.77-38.31 6.07l-.71.06-.69.13c-10 1.78-16.62 6.22-19.56 13.19-1.55 3.68-3.22 11.15 2.94 19.86 1.53 2.22 6.83 9.56 15.94 22.17 6.06 8.4 12.87 17.82 18.75 26L259.9 275 150.66 96.05l-.2-.34-.23-.33-.44-.65C145.32 88.17 139.76 80 123.7 80c-1.13 0-2.31 0-3.63.11-4.6.25-21.42 1.57-40.89 3.11-21.49 1.69-50.9 4-54.72 4.1h-.73l-.79.08c-9.14.89-15.77 4.6-19.7 11-6.55 10.69-1.42 22.69.26 26.63C6.87 133 37.56 197.7 64.63 254.81c18 37.94 36.58 77.17 38.1 80.65a34.85 34.85 0 0032.94 21.59 46.62 46.62 0 009.86-1.1h.21l.2-.05c13.86-3.38 57.83-14.54 89.2-22.59 1.9 3.32 3.9 6.83 6 10.44 21.93 38.5 37.9 66.35 43.16 73.46C287 421 295 432 310.06 432c5.46 0 10.46-1.4 15.74-2.89l1.53-.43h.12c10.53-3 150.69-52.16 157.87-55.35l.22-.1c5.44-2.41 13.66-6.05 16.18-15.4 1.65-6.12.18-12.33-4.38-18.46l-.07-.09-.07-.09c-.85-1.1-4-5.21-8.27-10.9-9.13-12.07-23.88-31.57-36.84-48.54 17.37-4.5 38.8-10.11 43.38-11.55 11.47-3.43 14.94-10.69 16-14.73.79-3.15 1.82-11.2-5.9-18.85zm-320 58.19c-17.81 4.17-30.22 7.08-37.89 8.9-6.67-13.34-19.74-39.65-32.5-65.33-29.74-59.92-45.1-90.77-53.18-106.9l8.15-.7c13.34-1.15 31.61-2.72 41.78-3.57 16.76 28.26 74.32 125.3 96.3 162.3zM427.58 172zM310.06 416.4zm53.67-56.95c-24.21 8-37.33 12.37-44.42 14.74-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5 6.81 14.57 19.72 33.46 44.93-18.07 6.04-48.2 16.02-72.27 24zm55.87-121.63l-23.76-31.53c13.67-2.39 21.54-3.77 26.15-4.6l12 14.88 11.94 14.82c-8.2 1.99-17.74 4.32-26.33 6.43z" } }] })(props);
}
function IoLogoLinkedin(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" } }] })(props);
}
function IoLogoMarkdown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M475 64H37C16.58 64 0 81.38 0 102.77v306.42C0 430.59 16.58 448 37 448h438c20.38 0 37-17.41 37-38.81V102.77C512 81.38 495.42 64 475 64zM288 368h-64V256l-48 64-48-64v112H64V144h64l48 80 48-80h64zm96 0l-80-112h48.05L352 144h64v112h48z" } }] })(props);
}
function IoLogoMastodon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 173.59c0-104.13-68.26-134.65-68.26-134.65C377.3 23.15 318.2 16.5 256.8 16h-1.51c-61.4.5-120.46 7.15-154.88 22.94 0 0-68.27 30.52-68.27 134.65 0 23.85-.46 52.35.29 82.59C34.91 358 51.11 458.37 145.32 483.29c43.43 11.49 80.73 13.89 110.76 12.24 54.47-3 85-19.42 85-19.42l-1.79-39.5s-38.93 12.27-82.64 10.77c-43.31-1.48-89-4.67-96-57.81a108.44 108.44 0 01-1-14.9 558.91 558.91 0 0096.39 12.85c32.95 1.51 63.84-1.93 95.22-5.67 60.18-7.18 112.58-44.24 119.16-78.09 10.42-53.34 9.58-130.17 9.58-130.17zm-80.54 134.16h-50V185.38c0-25.8-10.86-38.89-32.58-38.89-24 0-36.06 15.53-36.06 46.24v67h-49.66v-67c0-30.71-12-46.24-36.06-46.24-21.72 0-32.58 13.09-32.58 38.89v122.37h-50V181.67q0-38.65 19.75-61.39c13.6-15.15 31.4-22.92 53.51-22.92 25.58 0 44.95 9.82 57.75 29.48L256 147.69l12.45-20.85c12.81-19.66 32.17-29.48 57.75-29.48 22.11 0 39.91 7.77 53.51 22.92q19.79 22.72 19.75 61.39z" } }] })(props);
}
function IoLogoMedium(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M28 28v456h456V28H28zm378.83 108.04l-24.46 23.45a7.162 7.162 0 00-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55 60.35-150.55h84.66v5.16z" } }] })(props);
}
function IoLogoMicrosoft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M31.87 30.58H244.7v212.81H31.87zm235.02 0H479.7v212.81H266.89zM31.87 265.61H244.7v212.8H31.87zm235.02 0H479.7v212.8H266.89z" } }] })(props);
}
function IoLogoNoSmoking(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M360 256h16v48h-16zm-248 48h129.6l-48-48H112v48z" } }, { "tag": "path", "attr": { "d": "M364.5 60.1a8.79 8.79 0 01-1-.6 218.79 218.79 0 00-34.4-14.8l-5.4-1.8A223.2 223.2 0 00256 32C132.3 32 32 132.3 32 256a223.71 223.71 0 00115.4 195.8c.4.2.7.5 1.1.7a218.79 218.79 0 0034.4 14.8l5.4 1.8A222.7 222.7 0 00256 480c123.7 0 224-100.3 224-224A223.76 223.76 0 00364.5 60.1zM256 426.4a161.85 161.85 0 01-27.2-2.4 170.14 170.14 0 01-28.5-7.3c-1.9-.6-3.8-1.2-5.6-1.9a162.39 162.39 0 01-19-8.6 170.33 170.33 0 01-90.1-150.3c0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7zm137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6a162.79 162.79 0 0127.2 2.4 170.14 170.14 0 0128.5 7.3c1.8.6 3.7 1.2 5.6 1.9a162 162 0 0118 8.1 170.25 170.25 0 0191.2 150.8c-.1 37.2-12.5 71.3-32.7 99.3z" } }, { "tag": "path", "attr": { "d": "M352 256h-34l34 34v-34zm32 0h16v48h-16zm-23.9-43.3c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1-2.8-4.2-1-14.8 3.7-21.9a8 8 0 00.4-8.2 8.26 8.26 0 00-7-4.3 53.67 53.67 0 01-18.3-3.9c-10.6-4.5-15.6-12.1-15.6-23.1 0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7 0 17.5 9 31 25.7 38a66.58 66.58 0 0012 3.6c-3.3 9.8-3.6 20.9 1.7 28.7 9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3 5.7 2.6 6.8 7.5 6.6 15.7v1h16v-1c0-7.1.3-22.8-15.7-30.2z" } }, { "tag": "path", "attr": { "d": "M400 244c0-25.7-3-39.2-9.1-49.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7 2.5 14.5-6.8 32.1-6.9 32.3a8 8 0 00.1 7.9 8.06 8.06 0 006.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6 3.1 5.3 6.9 13.5 6.9 41.4h16z" } }] })(props);
}
function IoLogoNodejs(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M429.76 130.07L274.33 36.85a37 37 0 00-36.65 0L82.24 130.06A38.2 38.2 0 0064 162.83V349a38.26 38.26 0 0018.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53 32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 00-8.42-8.58h-22.38a8.51 8.51 0 00-8.42 8.58v180.51a15 15 0 01-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 01-.48-.92V165.46a1.32 1.32 0 01.59-1.06l151.84-93a.82.82 0 01.73 0l151.93 93a1.34 1.34 0 01.55 1.1V349a1.28 1.28 0 01-.45 1l-152.06 90.65a1.22 1.22 0 01-.8 0l-38.83-23.06a7.8 7.8 0 00-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0018.3 5.07h.58a35.87 35.87 0 0017.83-5.07l155.43-93.13A38.37 38.37 0 00448 349V162.83a38.21 38.21 0 00-18.24-32.76z" } }, { "tag": "path", "attr": { "d": "M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 00-8.22-7.32h-19.8a8.44 8.44 0 00-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17 24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89 0-5.47 0-18.28 35.46-18.28 25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 008.06 6.67h19.87a8.24 8.24 0 006.16-2.86 8.91 8.91 0 002.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06 0-73.55 20.75-73.55 55.5 0 38.1 28.49 48.87 71.29 53.33 50 5.17 50 12.71 50 19.37.03 10.38-4.28 24.23-41.55 24.23z" } }] })(props);
}
function IoLogoNpm(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M227.6 213.1H256v57.1h-28.4z" } }, { "tag": "path", "attr": { "d": "M0 156v171.4h142.2V356H256v-28.6h256V156zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8zm142.2 0h-56.9v28.6h-56.9V184.6h113.8zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3z" } }] })(props);
}
function IoLogoOctocat(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M172.86 290.12c-9.75 0-18.11 4.56-24.86 13.87s-10.07 20.58-10.07 34 3.43 24.91 10.07 34.12S163 386 172.86 386c9.1 0 17-4.66 23.68-13.87s10.07-20.58 10.07-34.12-3.43-24.81-10.07-34-14.54-13.89-23.68-13.89zm167.46 0c-9.64 0-18.11 4.56-24.86 13.87s-10.07 20.58-10.07 34 3.43 24.91 10.07 34.12S330.57 386 340.32 386c9.11 0 17-4.66 23.79-13.87s10.07-20.58 10.07-34.12-3.43-24.81-10.07-34-14.57-13.89-23.79-13.89z" } }, { "tag": "path", "attr": { "d": "M459.36 165c-.11 0 2.89-15.49.32-42.47-2.36-27-8-51.78-17.25-74.53 0 0-4.72.87-13.72 3.14S405 58 384.89 67.18c-19.82 9.2-40.71 21.44-62.46 36.29-14.79-4.23-36.86-6.39-66.43-6.39-28.18 0-50.25 2.16-66.43 6.39Q117.9 53.25 69.46 48q-13.81 34.13-17.14 74.75c-2.57 27 .43 42.58.43 42.58C26.71 193.82 16 234.88 16 268.78c0 26.22.75 49.94 6.54 71 6 20.91 13.6 38 22.6 51.14A147.49 147.49 0 0079 425.43c13.39 10.08 25.71 17.34 36.86 21.89 11.25 4.76 24 8.23 38.57 10.72a279.19 279.19 0 0032.68 4.34s30 1.62 69 1.62 68.89-1.62 68.89-1.62a285.25 285.25 0 0032.68-4.38 178.91 178.91 0 0038.46-10.72c11.15-4.66 23.47-11.81 37-21.89a145 145 0 0033.75-34.55c9-13.11 16.6-30.23 22.6-51.14s6.51-44.81 6.51-71.03c0-32.82-10.71-74.42-36.64-103.67zm-70.07 253.07C359.39 432.26 315.46 438 257.18 438h-2.25c-58.29 0-102.22-5.63-131.57-19.93s-44.25-43.45-44.25-87.43c0-26.32 9.21-47.66 27.32-64 7.93-7 17.57-11.92 29.57-14.84s22.93-3 33.21-2.71c10.08.43 24.22 2.38 42.11 3.79s31.39 3.25 44.79 3.25c12.53 0 29.14-2.17 55.82-4.33s46.61-3.25 59.46-1.09c13.18 2.17 24.65 6.72 34.4 15.93q28.44 25.67 28.5 64c-.11 43.98-15.22 73.24-45 87.43z" } }] })(props);
}
function IoLogoPaypal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M424.81 148.79c-.43 2.76-.93 5.58-1.49 8.48-19.17 98-84.76 131.8-168.54 131.8h-42.65a20.67 20.67 0 00-20.47 17.46l-21.84 137.84-6.18 39.07a10.86 10.86 0 009.07 12.42 10.72 10.72 0 001.7.13h75.65a18.18 18.18 0 0018-15.27l.74-3.83 14.24-90 .91-4.94a18.16 18.16 0 0118-15.3h11.31c73.3 0 130.67-29.62 147.44-115.32 7-35.8 3.38-65.69-15.16-86.72a72.27 72.27 0 00-20.73-15.82z" } }, { "tag": "path", "attr": { "d": "M385.52 51.09C363.84 26.52 324.71 16 274.63 16H129.25a20.75 20.75 0 00-20.54 17.48l-60.55 382a12.43 12.43 0 0010.39 14.22 12.58 12.58 0 001.94.15h89.76l22.54-142.29-.7 4.46a20.67 20.67 0 0120.47-17.46h42.65c83.77 0 149.36-33.86 168.54-131.8.57-2.9 1.05-5.72 1.49-8.48 5.7-36.22-.05-60.87-19.72-83.19z" } }] })(props);
}
function IoLogoPinterest(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0063.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z" } }] })(props);
}
function IoLogoPlaystation(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M399.77 203c-.8-17.1-3.3-34.5-10.8-50.1a82.45 82.45 0 00-16.5-23.2 105.59 105.59 0 00-21.3-16.3c-17.1-10.2-37.5-17-84.4-31S192 64 192 64v358.3l79.9 25.7s.1-198.8.1-299.5v-3.8c0-9.3 7.5-16.8 16.1-16.8h.5c8.5 0 15.5 7.5 15.5 16.8V278c11 5.3 29.2 9.3 41.8 9.1a47.79 47.79 0 0024-5.7 49.11 49.11 0 0018.4-17.8 78.64 78.64 0 009.9-27.3c1.87-10.8 1.97-22.1 1.57-33.3zM86.67 357.8c27.4-9.8 89.3-29.5 89.3-29.5v-47.2s-76.5 24.8-111.3 37.1c-8.6 3.1-17.3 5.9-25.7 9.5-9.8 4.1-19.4 8.7-28.1 14.8a26.29 26.29 0 00-9.2 10.1 17.36 17.36 0 00-.5 13.6c2 5.1 5.8 9.3 10.1 12.6 7.8 5.9 17.1 9.5 26.4 12.2a262.42 262.42 0 0088.4 13.3c14.5-.2 36-1.9 50-4.4v-42s-11 2.5-41.3 12.5c-4.6 1.5-9.2 3.3-14 4.3a104.87 104.87 0 01-21.6 2.2c-6.5-.3-13.2-.7-19.3-3.1-2.2-1-4.6-2.2-5.5-4.6-.8-2 .3-4 1.7-5.4 2.8-2.9 6.8-4.5 10.6-6z" } }, { "tag": "path", "attr": { "d": "M512 345.9c-.1-6-3.7-11.2-7.9-15-7.1-6.3-15.9-10.3-24.7-13.5-5.5-1.9-9.3-3.3-14.7-5-25.2-8.2-51.9-11.2-78.3-11.3-8 .3-23.1.5-31 1.4-21.9 2.5-67.3 15.4-67.3 15.4v48.8s67.5-21.6 96.5-31.8a94.43 94.43 0 0130.3-4.6c6.5.2 13.2.7 19.4 3.1 2.2.9 4.5 2.2 5.5 4.5.9 2.6-.9 5-2.9 6.5-4.7 3.8-10.7 5.3-16.2 7.4-41 14.5-132.7 44.7-132.7 44.7v47s117.2-39.6 170.8-58.8c8.9-3.3 17.9-6.1 26.4-10.4 7.9-4 15.8-8.6 21.8-15.3a19.74 19.74 0 005-13.1z" } }] })(props);
}
function IoLogoPwa(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M330.7 352l77.72-192H356.9l-53.16 124.07L265.93 160h-39.61l-40.58 124.07-28.63-56.53-25.9 79.46 26.3 45h50.7l36.68-111.27 35 111.27zM48.79 286.09h31.65a93.39 93.39 0 0025.62-3.21l8.18-25.19 22.88-70.39a55.75 55.75 0 00-6-7.82Q113.54 160 79.59 160H0v192h48.79zm41.9-81.92q6.89 6.92 6.88 18.52t-6 18.53q-6.64 7.62-24.44 7.61H48.79v-51.58h18.42q16.59 0 23.48 6.92zm286.16 113.44l14.79-37.25h42.69l-20.26-56.51L439.41 160 512 352h-53.53l-12.4-34.39z" } }] })(props);
}
function IoLogoPython(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09 311.09 0 00-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a162.91 162.91 0 003.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56.05 56.05 0 0015.06-2A52.48 52.48 0 00368 193.68V91.92c0-28.92-24.68-50.73-54-55.54zM194.93 105.5a20.37 20.37 0 1120.3-20.3 20.29 20.29 0 01-20.3 20.3z" } }, { "tag": "path", "attr": { "d": "M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.54 63.54 0 01-9.69.75H198.08a60 60 0 00-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31 34.21 9.95 71.48 11.75 112.42 0 27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.83 156.83 0 00480 256a160.64 160.64 0 00-4.72-39zM316.51 404a20.37 20.37 0 11-20.3 20.3 20.29 20.29 0 0120.3-20.3z" } }] })(props);
}
function IoLogoReact(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z" } }, { "tag": "path", "attr": { "d": "M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z" } }] })(props);
}
function IoLogoReddit(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M324 256a36 36 0 1036 36 36 36 0 00-36-36z" } }, { "tag": "circle", "attr": { "cx": "188", "cy": "292", "r": "36", "transform": "rotate(-22.5 187.997 291.992)" } }, { "tag": "path", "attr": { "d": "M496 253.77c0-31.19-25.14-56.56-56-56.56a55.72 55.72 0 00-35.61 12.86c-35-23.77-80.78-38.32-129.65-41.27l22-79 66.41 13.2c1.9 26.48 24 47.49 50.65 47.49 28 0 50.78-23 50.78-51.21S441 48 413 48c-19.53 0-36.31 11.19-44.85 28.77l-90-17.89-31.1 109.52-4.63.13c-50.63 2.21-98.34 16.93-134.77 41.53A55.38 55.38 0 0072 197.21c-30.89 0-56 25.37-56 56.56a56.43 56.43 0 0028.11 49.06 98.65 98.65 0 00-.89 13.34c.11 39.74 22.49 77 63 105C146.36 448.77 199.51 464 256 464s109.76-15.23 149.83-42.89c40.53-28 62.85-65.27 62.85-105.06a109.32 109.32 0 00-.84-13.3A56.32 56.32 0 00496 253.77zM414 75a24 24 0 11-24 24 24 24 0 0124-24zM42.72 253.77a29.6 29.6 0 0129.42-29.71 29 29 0 0113.62 3.43c-15.5 14.41-26.93 30.41-34.07 47.68a30.23 30.23 0 01-8.97-21.4zM390.82 399c-35.74 24.59-83.6 38.14-134.77 38.14S157 423.61 121.29 399c-33-22.79-51.24-52.26-51.24-83A78.5 78.5 0 0175 288.72c5.68-15.74 16.16-30.48 31.15-43.79a155.17 155.17 0 0114.76-11.53l.3-.21.24-.17c35.72-24.52 83.52-38 134.61-38s98.9 13.51 134.62 38l.23.17.34.25A156.57 156.57 0 01406 244.92c15 13.32 25.48 28.05 31.16 43.81a85.44 85.44 0 014.31 17.67 77.29 77.29 0 01.6 9.65c-.01 30.72-18.21 60.19-51.25 82.95zm69.6-123.92c-7.13-17.28-18.56-33.29-34.07-47.72A29.09 29.09 0 01440 224a29.59 29.59 0 0129.41 29.71 30.07 30.07 0 01-8.99 21.39z" } }, { "tag": "path", "attr": { "d": "M323.23 362.22c-.25.25-25.56 26.07-67.15 26.27-42-.2-66.28-25.23-67.31-26.27a4.14 4.14 0 00-5.83 0l-13.7 13.47a4.15 4.15 0 000 5.89c3.4 3.4 34.7 34.23 86.78 34.45 51.94-.22 83.38-31.05 86.78-34.45a4.16 4.16 0 000-5.9l-13.71-13.47a4.13 4.13 0 00-5.81 0z" } }] })(props);
}
function IoLogoRss(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M108.56 342.78a60.34 60.34 0 1060.56 60.44 60.63 60.63 0 00-60.56-60.44z" } }, { "tag": "path", "attr": { "d": "M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33z" } }, { "tag": "path", "attr": { "d": "M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48z" } }] })(props);
}
function IoLogoSass(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.58 3.58 0 00-.43-.44l-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5a3.5 3.5 0 00-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09-10.65-17.92-11.86-32.28-4.73-54.28 1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54 2.86-6.2 5.83-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38 1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62 1.93-13.72 19.82-21.65 41.24-2 5.39-3.72 10-4.75 12.15-2.45 5-4.79 10.7-7.27 16.75-5.6 13.69-11.91 29.1-20.93 38.78-3.28-7.25 1.88-18.68 6.89-29.77 5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 00-8.33-4.32 13.26 13.26 0 00-6.15 1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48 14.88-45.75 26.8-6.84 8-22 14.1-35.31 19.45-5.26 2.23-10.26 4.23-14.43 6.23-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11 42-65.14 79.88-84.43 28.71-14.6 53.67-24.28 76.31-29.57 31.8-7.43 58.66-5.93 79.82 4.44 11.58 5.67 17 18 13.56 30.68-9 32.95-46.29 55.53-78.18 65.69-19.21 6.12-35.56 8.68-50 7.84-18.1-1.05-32.88-10.13-39.2-14a21.18 21.18 0 00-3.2-1.8l-.29-.07a3.21 3.21 0 00-3.19 1c-1.3 1.55-.84 4-.37 5.24 6.15 16.07 18.85 26.22 37.74 30.17a92.09 92.09 0 0018.78 1.79c44.21 0 100.62-25.49 121.34-46.48 14.13-14.3 24.42-29 28.68-54.35 4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5 12.21-82.4 34.41-114.94 60.93-40.12 32.67-54.62 63-43.12 90.25 11.81 27.93 40.61 45.4 68.46 62.3 9 5.45 17.56 10.64 25.27 16-2.32 1.13-4.69 2.28-7.1 3.43-23.38 11.33-49.9 24.08-64.61 45.15-10.68 15.35-12.68 30.63-5.94 45.42 3.6 7.87 10 13.21 18.89 15.87A50 50 0 0053 432c17.31 0 36.36-7 46.73-13.47 18.32-11.5 30.19-26.94 35.29-45.89 4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36 3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55-.24 6.3.06 12.68 2.21 18.09 1.93 4.87 5.11 8.1 9.21 9.34 4.36 1.33 9.47.21 14.39-3.15 22.17-15.17 37.33-51.58 49.51-80.85 1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0012.5 31.07c1.18 2.14 1.08 3.08-.52 4.84-2.41 2.64-5.77 5.83-9.33 9.21-10.78 10.23-24.2 23-26 34.23-.7 4.5 2.4 8.6 7.21 9.53 14.47 2.88 31.9-1.33 46.64-11.25 13.4-9 18.44-21.55 15-37.19-3.33-15.06 4.27-33.76 22.59-55.62 3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 005.58 9.22 14.22 14.22 0 0011.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5 11.7 4 20.09 10.57 24.93 19.64 6.09 11.41 2.8 21.94-9.29 29.65-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 001 2.23c1.4 1.15 5.72 3.15 15.49-3 9-5.65 14.28-13.34 15.63-23a39 39 0 00-.01-8.01zm-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38-8.26 6.66-17.23 10.75-25.25 11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48 38.32-50.8 60.81-59.13a51.39 51.39 0 011.78 17.59zm102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69 6.59-13.42 16-22.31 26.52-25a5.29 5.29 0 011.34-.19 1.58 1.58 0 011 .27 1.64 1.64 0 01.19 1.33zm83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58zm67.37-14.91a14.07 14.07 0 01-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09 2.33 9.46-2.44 19.46-12.07 24.7z" } }] })(props);
}
function IoLogoSkype(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M467.16 303.6a205.69 205.69 0 004.9-45.15c0-116.32-95.69-210.7-213.79-210.7a221.83 221.83 0 00-36.52 3A123.58 123.58 0 00155.93 32C87.55 32 32 86.72 32 154.15A119.56 119.56 0 0049 216a211.16 211.16 0 00-4.32 42.35c0 116.44 95.69 210.7 213.67 210.7a214 214 0 0039.09-3.5A125.45 125.45 0 00356.07 480C424.57 480 480 425.28 480 357.85a118 118 0 00-12.84-54.25zM368 359c-9.92 13.76-24.51 24.73-43.41 32.43S283.36 403 257.69 403c-30.69 0-56.36-5.37-76.55-15.87a101 101 0 01-35.24-30.8c-9.11-12.83-13.66-25.66-13.66-38 0-7.7 3-14.35 8.87-19.95 5.84-5.37 13.42-8.17 22.29-8.17 7.35 0 13.65 2.1 18.79 6.42 4.9 4.08 9.1 10.15 12.48 18.08A108.09 108.09 0 00207 336.15q6.32 8.22 17.86 13.65c7.82 3.62 18.2 5.48 31 5.48 17.62 0 32.09-3.73 42.94-11.08 10.74-7.12 15.88-15.75 15.88-26.25 0-8.28-2.69-14.82-8.29-19.95-5.83-5.37-13.42-9.57-22.87-12.37-9.69-3-22.87-6.18-39.21-9.56-22.17-4.67-41-10.27-56-16.57-15.28-6.42-27.65-15.4-36.76-26.48-9.22-11.32-13.77-25.55-13.77-42.24a67.86 67.86 0 0114.47-42.58c9.57-12.25 23.46-21.82 41.55-28.35 17.74-6.53 38.86-9.8 62.66-9.8 19.14 0 35.83 2.22 49.83 6.42s25.91 10.15 35.36 17.38 16.34 14.93 20.77 23 6.66 16.22 6.66 24c0 7.46-2.92 14.35-8.76 20.3a29.65 29.65 0 01-21.94 9.1c-7.93 0-14.12-1.87-18.43-5.6-4-3.5-8.17-8.87-12.72-16.69-5.37-9.91-11.79-17.85-19.14-23.45-7.24-5.36-19.14-8.16-35.71-8.16-15.29 0-27.77 3-37 9-8.87 5.72-13.19 12.37-13.19 20.18a18.26 18.26 0 004.32 12.25 38.13 38.13 0 0012.72 9.57 90.14 90.14 0 0017.15 6.53c6 1.64 15.87 4.09 29.53 7.12 17.38 3.62 33.25 7.82 47.26 12.13 14.24 4.55 26.49 10 36.52 16.45a72.93 72.93 0 0124.16 25.09c5.72 10 8.64 22.63 8.64 37.1A75.09 75.09 0 01368 359z" } }] })(props);
}
function IoLogoSlack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M126.12 315.1A47.06 47.06 0 1179.06 268h47.06zm23.72 0a47.06 47.06 0 0194.12 0v117.84a47.06 47.06 0 11-94.12 0zm47.06-188.98A47.06 47.06 0 11244 79.06v47.06zm0 23.72a47.06 47.06 0 010 94.12H79.06a47.06 47.06 0 010-94.12zm188.98 47.06a47.06 47.06 0 1147.06 47.1h-47.06zm-23.72 0a47.06 47.06 0 01-94.12 0V79.06a47.06 47.06 0 1194.12 0zM315.1 385.88a47.06 47.06 0 11-47.1 47.06v-47.06zm0-23.72a47.06 47.06 0 010-94.12h117.84a47.06 47.06 0 110 94.12z" } }] })(props);
}
function IoLogoSnapchat(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 347.21a190.31 190.31 0 01-32.79-5.31c-27.28-6.63-54.84-24.26-68.12-52.43-6.9-14.63-2.64-18.59 11.86-24 14.18-5.27 29.8-7.72 36.86-23 5.89-12.76 1.13-27.76-10.41-35.49-15.71-10.53-30.35-.21-46.62 2.07 3.73-46.66 8.66-88.57-22.67-127.73C338.14 48.86 297.34 32 256.29 32s-81.86 16.86-107.81 49.33c-31.38 39.26-26.4 81.18-22.67 127.92-16.32-2.25-30.81-12.79-46.63-2.18-14.72 9.85-17 29.76-5.44 43s31.64 9.5 43.45 20.6c6.49 6.09 3.49 12.61-.35 20.14-14.48 28.4-39.26 45.74-69.84 51.56-4 .76-22.31 2.87-31 3.65 0 9.28.52 16.78 1.63 21.73 2.94 13.06 12.32 23.58 23.69 30.1 11.18 6.4 35.48 6.43 41.68 15.51 3 4.48 1.76 12.28 5.33 17.38a23.8 23.8 0 0015.37 9.75c18.61 3.61 37.32-7.2 56.42-2.1 14.85 3.95 26.52 15.87 39.26 24 15.51 9.85 32.34 16.42 50.83 17.49 38.1 2.21 59.93-18.91 90.58-36.42 19.5-11.14 38.15-3.86 58.88-2.68 20.1 1.15 23.53-9.25 29.62-24.88a27.37 27.37 0 001.54-4.85 10.52 10.52 0 002.28-1.47c2-1.57 10.55-2.34 12.76-2.86 10.28-2.44 20.34-5.15 29.17-11.2 11.31-7.76 17.65-18.5 19.58-32.64a93.73 93.73 0 001.38-15.67zM208 128c8.84 0 16 10.74 16 24s-7.16 24-16 24-16-10.74-16-24 7.16-24 16-24zm103.62 77.7c-15.25 15-35 23.3-55.62 23.3a78.37 78.37 0 01-55.66-23.34 8 8 0 0111.32-11.32A62.46 62.46 0 00256 213c16.39 0 32.15-6.64 44.39-18.7a8 8 0 0111.23 11.4zM304 176c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24z" } }] })(props);
}
function IoLogoSoundcloud(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M5.8 278a2.11 2.11 0 00-2 2L0 308.64l3.74 28.16a2.12 2.12 0 002.05 2 2.14 2.14 0 002-2l4.44-28.17L7.83 280a2.14 2.14 0 00-2-2zm21.05-15.68a2.13 2.13 0 00-4.26 0l-5 46.32 5 45.3a2.13 2.13 0 004.26 0l5.73-45.31-5.73-46.32zm79.32-42.73a4 4 0 00-3.87 3.87l-4 85.22 4 55.08a3.88 3.88 0 007.75 0l4.53-55.08-4.53-85.22a4 4 0 00-3.88-3.87zm-41.05 29.62a3.09 3.09 0 00-3 3l-4.52 56.45 4.51 54.63a3 3 0 006 0l5.13-54.63-5.13-56.48a3.1 3.1 0 00-2.99-2.97zm82.76 118.39a4.83 4.83 0 004.75-4.74l3.93-54.15-3.93-113.46a4.75 4.75 0 00-9.5 0l-3.49 113.45 3.49 54.17a4.81 4.81 0 004.75 4.73zm85.4.25a6.6 6.6 0 006.5-6.52l2.74-52.6-2.74-131a6.5 6.5 0 10-13 0l-2.45 131c0 .08 2.45 52.67 2.45 52.67a6.59 6.59 0 006.5 6.45zm-43.02-.2a5.67 5.67 0 005.62-5.64l3.34-53.33-3.34-114.28a5.63 5.63 0 10-11.25 0l-3 114.29 3 53.32a5.66 5.66 0 005.63 5.6zm-104.7-.5a3.53 3.53 0 003.44-3.41l4.83-55.09-4.83-52.4a3.44 3.44 0 00-6.88 0l-4.26 52.38 4.26 55.08a3.5 3.5 0 003.44 3.44zm-40.72-3.02a2.67 2.67 0 002.57-2.52l5.43-53-5.42-55a2.57 2.57 0 00-5.14 0l-4.78 55 4.78 53a2.62 2.62 0 002.56 2.53zm166.85-171.6a6.1 6.1 0 00-6.07 6.09l-2.71 110.11 2.71 53a6.07 6.07 0 0012.13 0l3-53-3-110.13a6.1 6.1 0 00-6.06-6.07zM127 367.71a4.41 4.41 0 004.31-4.3l4.23-54.71-4.28-104.7a4.32 4.32 0 00-8.63 0l-3.74 104.7 3.75 54.73a4.38 4.38 0 004.36 4.28zm47.17-5.17l3.63-53.8-3.63-117.28a5.19 5.19 0 10-10.37 0l-3.23 117.28 3.23 53.83a5.18 5.18 0 0010.36 0zM449 241.1a62.42 62.42 0 00-24.33 4.9c-5-57.18-52.61-102-110.66-102a111.92 111.92 0 00-40.28 7.58c-4.75 1.85-6 3.76-6.06 7.46V360.4a7.66 7.66 0 006.8 7.5l174.56.11c34.78 0 63-28.41 63-63.45s-28.2-63.46-63-63.46zm-194.21-82.23a7 7 0 00-6.94 7L245 308.75l2.85 51.87a6.94 6.94 0 1013.87-.06v.06l3.09-51.87-3.09-142.93a7 7 0 00-6.93-6.95z" } }] })(props);
}
function IoLogoStackoverflow(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M392 440V320h40v160H64V320h40v120z" } }, { "tag": "path", "attr": { "d": "M149.1 308.77l198.57 40.87 8.4-39.32-198.57-40.87zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84zm50.95-89l156 127.78 25.74-30.52-156-127.78zM328 32l-33.39 23.8 120.82 160.37L448 192zM144 400h204v-40H144z" } }] })(props);
}
function IoLogoSteam(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M478.8 208.2a36 36 0 11-36-36 36 36 0 0136 36zM442.6 139a69.42 69.42 0 00-69.4 68.7l-43.2 62a48.86 48.86 0 00-5.4-.3 51.27 51.27 0 00-26.4 7.3L102.4 198a51.8 51.8 0 10-50.6 62.9 51.27 51.27 0 0026.4-7.3L274 332.2a51.76 51.76 0 00102.1-5.9l66.5-48.6a69.35 69.35 0 100-138.7zm0 22.9a46.45 46.45 0 11-46.5 46.5 46.54 46.54 0 0146.5-46.5zm-390.8 9a38.18 38.18 0 0133.7 20.2l-18.9-7.6v.1a30.21 30.21 0 00-22.6 56v.1l16.1 6.4a36.8 36.8 0 01-8.2.9 38.05 38.05 0 01-.1-76.1zm272.8 112.2a38.1 38.1 0 11-33.7 55.9c6.3 2.5 12.5 5 18.8 7.6a30.27 30.27 0 1022.5-56.2l-15.9-6.4a46.83 46.83 0 018.3-.9z" } }] })(props);
}
function IoLogoStencil(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M188.8 334.07h197.33L279.47 448H83.2zM512 199H106.61L0 313h405.39zM232.2 64h196.6L322.62 177.93H125.87z" } }] })(props);
}
function IoLogoTableau(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M242.69 340.3h26.62v-72.6h67v-25.82h-67v-72.6h-26.62v72.6h-66.15v25.82h66.15zM119.26 445.18h22.59v-64.54h59.7v-20.17h-59.7v-65.34h-22.59v65.34h-59.7v20.17h59.7zM370.15 212h22.59v-64.5h60.5v-19.37h-60.5V62.79h-22.59v65.34h-59.7v19.37h59.7zM246.72 496h19.36v-46h41.15v-16.92h-41.15v-46h-19.36v46h-40.33V450h40.33zM120.07 212h21v-65.31h60.51v-18.56H141V62.79h-21v65.34H59.56v18.56h60.51zm315.65 96.84h19.36v-45.18H496v-17.74h-40.92v-45.18h-19.36v45.18h-40.33v17.74h40.33z" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M370.15 445.18h22.59v-64.54h60.5v-20.17h-60.5v-65.34h-22.59v65.34h-59.7v20.17h59.7z" } }, { "tag": "path", "attr": { "d": "M307 74.08V60.37h-40.34V16h-14.52v44.37h-40.33v13.71h40.33v44.37h14.52V74.08zM56.11 305.61h14.52v-44.37H111v-13.71H70.63V204H56.11v43.56H16v14.52l40.11-.08z" } }] })(props);
}
function IoLogoTiktok(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z" } }] })(props);
}
function IoLogoTumblr(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M390 32H120c-49.19 0-88 38.81-88 88v270c0 49.19 38.81 90 88 90h270c49.19 0 90-40.81 90-90V120c0-49.19-40.81-88-90-88zm-54 364h-52c-42.51 0-72-23.68-72-76v-80h-36v-48c42.51-11 57.95-48.32 60-80h44v72h52v56h-52l-.39 70.51c0 21.87 11 29.43 28.62 29.43L336 340z" } }] })(props);
}
function IoLogoTux(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M443.66 405.05c-1.46-.79-2.85-1.54-4-2.2-6.47-3.83-13-10.52-11.85-17.83 2.42-15.94 2.89-23.47-.49-28.79a15.61 15.61 0 00-7.67-6.2v-.06c1.41-2.56 2.26-5.66 2.83-10.12 1.44-11-5-44-13.7-70.7-8.08-24.68-29.24-50-44.7-68.56l-3.61-4.34c-23.88-28.93-24.34-38.19-26.55-82.67-.32-6.47-.69-13.8-1.17-22C329.87 41.43 304 16 256 16c-25.2 0-44.62 7.15-57.72 21.26C187.79 48.55 182 64 182 80.78c0 29.52 2 53 2.15 54.29 1.4 35.7 1 41.22-8.31 57.55-2.23 3.93-8.38 10.87-14.89 18.21-8.48 9.57-18.09 20.41-23.36 29.22-3.77 6.31-5.88 12.63-8.11 19.33-3.4 10.21-7.26 21.78-18.15 36.57-12.57 17.07-15.52 29.61-11 47.45-4.94 6.45-4.83 14.37-4.75 20.23a25.84 25.84 0 01-.3 6.09c-2.29 7.59-12.42 9.4-22 10.18-1.58.12-3.1.21-4.55.29-7.26.39-13.53.74-17.13 6.3-3.47 5.36-1.12 13.8 2.14 25.48.72 2.58 1.46 5.25 2.19 8.06 1.83 7-.16 10.48-2.68 14.84-2.44 4.21-5.21 9-5.21 17.55 0 14.67 20 18 43.05 21.94 7.36 1.24 15 2.53 22.63 4.24a225.58 225.58 0 0134.08 10.68c9.72 3.73 17.4 6.68 26.43 6.68 16.18 0 28.25-9.77 39.92-19.21l2.15-1.75c5.53-4.49 21.5-4 34.34-3.64 3.46.1 6.73.2 9.65.2h6.22c13.48-.08 31.94-.18 42.23 2.5 3.75 1 6.2 3.72 9.29 7.19 5.87 6.56 13.17 14.75 33.39 14.75 19.39 0 29.55-8.71 41.32-18.8 7.16-6.13 14.56-12.48 25.07-17.86 3.92-2 7.62-3.87 11.08-5.61 22.64-11.38 35.11-17.65 35.11-27.82 0-9.91-12.24-16.5-20.34-20.86zM211.11 88.38a13.91 13.91 0 0112.47 9c1.95 5.55 1.81 10.42.21 12.94 0 0-.22-1-.36-1.44a14.85 14.85 0 00-6.44-8.59 11.35 11.35 0 00-8.94-1.47c-4.26 1.13-8.41 5-8.91 18.79-5.16-10.47-2.31-18 .92-23 2.31-3.73 7.47-6.33 11.05-6.23zm-17.5 375C192 479.24 175.2 479 170.09 478.59c-9.81-.82-21.66-4.69-33.13-8.43-4.52-1.47-9.19-3-13.73-4.34-13.2-3.89-30.12-6.74-43.72-9-3.22-.55-6.27-1.06-9.05-1.55s-4.61-1.27-5.2-2.3c-1-1.65.38-5.25 1.93-9.41C69.27 438 72.11 430.34 72 421c0-3.91-1.47-8.3-2.84-12.56-1.62-5-3.28-10.17-1.93-12.62 1.23-2.23 6.75-2.49 11.6-2.49h2.26c3.55 0 6.62.06 8.75-.53 6.51-1.81 14.86-6.92 17.81-13.88.9-2.17 1.37-6.94 2-14 .37-4.12.74-8.37 1.22-10.58a3.55 3.55 0 012.11-2.55c1.65-.77 6.78-1.91 18.63 4.08 11.18 5.65 22.88 25.84 34.2 45.37 3.56 6.14 6.92 11.94 10.3 17.36 14.04 22.54 18.83 31.6 17.5 44.8zm128.84-31.56a68.74 68.74 0 01-4.55 10.9.58.58 0 01-1.08-.42 56.61 56.61 0 002.11-18.43c-.25-4.73-.4-7.59-2.66-8.51s-4.26.83-9.45 5.54c-1.1 1-2.36 2.14-3.78 3.4-10.8 9.47-26.88 20.68-55.61 23.37-16.84 1.59-27.59-4.63-30.92-8.14a2.16 2.16 0 00-3.07-.08 2.23 2.23 0 00-.51 2.29c2.12 6.84 1.2 12.26-.49 16.19-.95 2.2-1.85 2.05-2-.34-.25-4.64-1-9.88-3-14.19-3.11-6.94-7-14.34-8.89-17.88v-.05c3.24-1.49 8.86-4.83 11.37-10.88s4.48-18-9.82-31.74c-6.28-6.05-22.1-17.16-36.06-27-10.9-7.65-22.17-15.56-23.65-17.51-4.49-5.89-6.37-9.3-6.94-19.65.07-2.3.13-4.59.19-6.89l.27-2.49a.58.58 0 011.15 0 63.07 63.07 0 002 9.72c1.08 3.73 2.4 7.58 3.62 9.18 3.19 4.22 7.56 7.39 11.67 8.49a5.48 5.48 0 005-.72c2.93-2.33 2.65-7.6 2.19-16.34-.47-9-1.11-21.34 1.85-34.55 5.62-25 10.91-32.51 17.61-42 .86-1.22 1.75-2.47 2.65-3.79 1.44-2.08 3-4.1 4.67-6.23 7.47-9.61 15.93-20.49 13.92-40.95-.51-5.19-.76-8.83-.86-11.39a1 1 0 011.88-.59l.49.77 1.21 2c4.86 8 13.64 22.57 25.1 22.57a13.62 13.62 0 002.36-.21c23.39-3.93 51.9-30.25 52.17-30.51 3.12-3 2.84-6.14 1.64-7.91a5.18 5.18 0 00-6.45-1.72c-3.29 1.4-7.14 3.15-11.22 5-13.82 6.27-37 16.75-42.25 14.34a23.11 23.11 0 01-6.32-5.13 1 1 0 011.14-1.65c5.59 2.29 9.55 1.45 14.2-.08l1-.34c9.37-3.09 14.2-4.77 30.76-12.08a97.55 97.55 0 0116.26-5.93c4-1 6.42-1.63 7.71-4.34a6.65 6.65 0 00-.5-7.13c-1.53-1.87-4.07-2.57-7-1.9-3.22.75-4.7 3-6.41 4.49-2.4 2.05-5 4.16-17.19 8.65-27 10-34.58 10.61-45.21 3.43-9.84-6.69-15.15-13.23-15.15-16 0-2.13 5.45-5.7 8.71-7.84 1.33-.87 2.59-1.69 3.62-2.46 4.34-3.22 13-11.39 13.38-11.73 5.4-5.41 17.91-2.18 25 2.58a2.23 2.23 0 001.72.41 2.14 2.14 0 001.68-2.58c-4.2-17.46-.13-27.34 4-32.55a22.58 22.58 0 0117.48-8.48c12.81 0 21.76 10 21.76 24.42 0 11-2.82 16.79-5.48 20.3a1.73 1.73 0 01-2.58.18 1.78 1.78 0 01-.24-2.2A24.61 24.61 0 00290 114a16.58 16.58 0 00-16.84-16.67c-3.94 0-13.48 1.5-16.77 15.44a29.81 29.81 0 00-.34 11.07l.08.71c.9 7.38 15.3 12.51 27.23 15.51 11.36 2.85 13 6.22 8.84 19.63s3.11 26.23 5.7 29.57a78.3 78.3 0 018.31 12.47 93.8 93.8 0 016.62 16.48c2.17 6.79 4.05 12.65 10.63 21.22 11.07 14.4 17.66 48.64 15 78-.21 2.41-.53 4.29-.77 5.67-.43 2.53-.72 4.2.66 5.38s3.16.7 7.26-.63l3.43-1.09a109.33 109.33 0 0112.58-2.8 2.15 2.15 0 001.59-1.16c3.43-6.91 3.85-15.22 4-22.47q0-1.31.06-2.79c.19-7.77.45-18.93-2.95-32a1 1 0 011.93-.64 93 93 0 016.66 25.55c2.55 22.58-1.9 32.09-1.94 32.17a1.61 1.61 0 00.95 2.25 17.12 17.12 0 016.95 4.67c1.46 1.66.93 2.4-1.14 1.62a36.26 36.26 0 00-12.77-2.29c-10.4 0-18.09 4.95-21.51 9.19-3.19 3.94-3.7 7.67-3.83 11.27l-.06.05c-7.48-.75-12.94 1.21-17.47 6.21l-.08.09c-6.26 7.75-4 24.63-1.29 38.48 1.28 6.45 5.59 25.52 1.73 37.68zm96.1 10.07c-15.71 6.71-25.43 14.51-34 21.39-5.65 4.53-11 8.81-17.28 12.14-10.12 5.34-24.91 6.53-33.27-7.7-2.37-4-.71-9.86 1.58-17.95 3.05-10.75 7.23-25.46 3.71-44.65-.94-5.12-1.77-9.51-2.49-13.31C334 377 332.9 371.43 334 367c.63-2.45 3.43-3 5.87-3a20.83 20.83 0 012.63.19 29.51 29.51 0 007 12.1c5.7 5.86 13.63 8.83 23.56 8.85 2.1.17 25.94 1.55 36.54-22.4 1.46.18 3.65.7 4.3 2.3 1.28 3.19-.27 8.91-1.52 13.5-.9 3.31-1.68 6.16-1.63 8.37.31 16 11 22.78 25.83 32.16 1.79 1.13 3.66 2.31 5.55 3.54S445 425 445 426c-.52 4.79-20 13.16-26.45 15.91z" } }] })(props);
}
function IoLogoTwitch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M80 32l-32 80v304h96v64h64l64-64h80l112-112V32zm336 256l-64 64h-96l-64 64v-64h-80V80h304z" } }, { "tag": "path", "attr": { "d": "M320 143h48v129h-48zm-112 0h48v129h-48z" } }] })(props);
}
function IoLogoTwitter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" } }] })(props);
}
function IoLogoUsd(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M240 480v-36.42C160.53 439 112.25 398.06 112 336h72c1.77 26.34 23.86 46.45 56 50v-98l-26.77-7c-61-14.18-93.64-49.39-93.64-102.08C119.59 116.81 164.08 76.08 240 70V32h32v38c77.39 6.3 119 47.74 120 106h-72c-.76-24.06-15.83-43.39-48-46v92l30.82 7.28C367.61 243.46 400 277 400 332c0 64.34-43.74 105.88-128 111.32V480zm0-264v-86c-27.59 1.52-47.27 18.47-47.27 42.53 0 22.3 16.39 36.88 47.27 43.47zm32 78v92c38.15-1.54 56.38-18.92 56.38-45.77 0-24.58-18.23-41.13-56.38-46.23z" } }] })(props);
}
function IoLogoVenmo(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.6c0 20.31 17.85 38.4 38.28 38.4h373.78c20.54 0 35.94-18.2 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zM278 387H174.32l-41.57-248.56 90.75-8.62 22 176.87c20.53-33.45 45.88-86 45.88-121.87 0-19.62-3.36-33-8.61-44l82.63-16.72c9.56 15.78 13.86 32 13.86 52.57-.01 65.5-55.92 150.59-101.26 210.33z" } }] })(props);
}
function IoLogoVercel(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M256 48l240 416H16z" } }] })(props);
}
function IoLogoVimeo(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M476.9 114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12 16.79c-26.79 19.51-46.26 54.42-54 78.28a4 4 0 005.13 5c10.77-3.8 21.72-7.1 34-6.45 15 .8 24.51 12 24.91 25.29.3 9.79-.2 18.69-3.6 27.68-10.74 28.68-27.61 56.46-47.55 80.75a72.49 72.49 0 01-10 9.89c-10.21 8.29-18.81 6.1-25.41-5.2-5.4-9.29-9-18.88-12.2-29.08-12.4-39.67-16.81-80.84-23.81-121.52-3.3-19.48-7-39.77-18-56.86-11.6-17.79-28.61-24.58-50-22-14.7 1.8-36.91 17.49-47.81 26.39 0 0-56 46.87-81.82 71.35l21.2 27s17.91-12.49 27.51-18.29c5.7-3.39 12.4-4.09 17.2.2 4.51 3.9 9.61 9 12.31 14.1 5.7 10.69 11.2 21.88 14.7 33.37 13.2 44.27 25.51 88.64 37.81 133.22 6.3 22.78 13.9 44.17 28 63.55 19.31 26.59 39.61 32.68 70.92 21.49 25.41-9.09 46.61-26.18 66-43.87 33.11-30.18 59.12-65.36 85.52-101.14 20.41-27.67 37.31-55.67 51.41-86.95C478.5 179.74 484 147.26 476.9 114z" } }] })(props);
}
function IoLogoVk(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M484.7 132c3.56-11.28 0-19.48-15.75-19.48h-52.37c-13.21 0-19.31 7.18-22.87 14.86 0 0-26.94 65.6-64.56 108.13-12.2 12.3-17.79 16.4-24.4 16.4-3.56 0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14 0-13.22 6.15-13.22 12.3 0 12.81 18.81 15.89 20.84 51.76V254c0 16.91-3 20-9.66 20-17.79 0-61-66.11-86.92-141.44C105 117.64 99.88 112 86.66 112H33.79C18.54 112 16 119.17 16 126.86c0 13.84 17.79 83.53 82.86 175.77 43.21 63 104.72 96.86 160.13 96.86 33.56 0 37.62-7.69 37.62-20.5v-47.66c0-15.37 3.05-17.93 13.73-17.93 7.62 0 21.35 4.09 52.36 34.33C398.28 383.6 404.38 400 424.21 400h52.36c15.25 0 22.37-7.69 18.3-22.55-4.57-14.86-21.86-36.38-44.23-62-12.2-14.34-30.5-30.23-36.09-37.92-7.62-10.25-5.59-14.35 0-23.57-.51 0 63.55-91.22 70.15-122" } }] })(props);
}
function IoLogoVue(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z" } }, { "tag": "path", "attr": { "d": "M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z" } }] })(props);
}
function IoLogoWebComponent(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M179.9 388l-76.16-132 76.16 132zm0 0h152.21l76.15-132-76.15-132H179.9l-76.16 132 76.16 132zm-76.16-132l76.16-132-76.16 132z" } }, { "tag": "path", "attr": { "d": "M496 256L376 48H239.74l-43.84 76h136.21l76.15 132-76.15 132H195.9l43.84 76H376l120-208z" } }, { "tag": "path", "attr": { "d": "M179.9 388l-76.16-132 76.16-132 43.84-76H136L16 256l120 208h87.74l-43.84-76z" } }] })(props);
}
function IoLogoWechat(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M408.67 298.53a21 21 0 1120.9-21 20.85 20.85 0 01-20.9 21m-102.17 0a21 21 0 1120.9-21 20.84 20.84 0 01-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35 68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7 2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 018.13 2.34L454 462.83a11.62 11.62 0 003.48 1.17 5 5 0 004.65-4.66 14.27 14.27 0 00-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 01-.33-3.47 11.4 11.4 0 015-9.35" } }, { "tag": "path", "attr": { "d": "M246.13 178.51a24.47 24.47 0 010-48.94c12.77 0 24.38 11.65 24.38 24.47 1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 11147.45 154a24.57 24.57 0 01-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 01-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 005.8 5.83 7.15 7.15 0 003.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 015.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 01-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48" } }] })(props);
}
function IoLogoWhatsapp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" } }] })(props);
}
function IoLogoWindows(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 265H232v179l248 36V265zm-264 0H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z" } }] })(props);
}
function IoLogoWordpress(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M259 271.3L226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3a192.51 192.51 0 0049.5 6.5 157 157 0 0024.9-1.8 184.3 184.3 0 0032.5-7.1c2.6-.8 5.2-1.7 7.8-2.6-2.8-6-8.8-19.3-9.1-19.9zM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8 6.9 71.2 52.9 131 116.1 157.9 2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1z" } }, { "tag": "path", "attr": { "d": "M430.2 175.4a188 188 0 00-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193 193 0 00325.1 77a189.2 189.2 0 00-69.2-13 191.51 191.51 0 00-149.4 71.7A196 196 0 0089 161.3c14.2.1 31.8.1 33.8.1 18.1 0 46-2.2 46-2.2 9.4-.6 10.4 13.1 1.1 14.2 0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8 1-14.2 0 0 28.5 2.2 45.5 2.2 18.1 0 46-2.2 46-2.2 9.3-.6 10.5 13.1 1.1 14.2 0 0-9.3 1.1-19.7 1.6l62.3 185.6 17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7 0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4 0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8 0 17.4-3.3 37.1-13.1 61.8l-39 112.8-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5 56.7-27.4 98-82 106.7-146.7a172.07 172.07 0 001.9-26 191.11 191.11 0 00-17.8-80.8z" } }, { "tag": "path", "attr": { "d": "M256 48a208.06 208.06 0 0181 399.66A208.06 208.06 0 01175 64.34 206.7 206.7 0 01256 48m0-16C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32z" } }] })(props);
}
function IoLogoXbox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8A224.13 224.13 0 0077.2 391c0-4.4.6-70.3 49.6-142.7zM480 256a223.71 223.71 0 00-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7A222.8 222.8 0 00480 256zM201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5a224.06 224.06 0 00-253.8 0c7.2-1.8 35.2-7.1 72.1 9.5zm157.5 212C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8a224 224 0 00333.6 0l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8z" } }] })(props);
}
function IoLogoXing(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M313.8 303.9L469 32H365L209.4 303.8a1.35 1.35 0 000 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7a1.74 1.74 0 01.1-1.4zm-91.9-87.7L163 113a2 2 0 00-2-1H65l58.9 104.4a1.13 1.13 0 01.1.8L43 352h96.8a1.54 1.54 0 001.6-.9l80.5-133.7a2.44 2.44 0 000-1.2z" } }] })(props);
}
function IoLogoYahoo(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M410.32 37.13c-13.56 0-27-.93-39.12-5.13L256 218.67 140.8 32c-12.12 4.2-24.84 5.13-38.4 5.13-13.32 0-26.52-1.05-38.4-5.13l153.6 248.15V480c12-4.08 25-5.13 38.4-5.13s26.4 1.05 38.4 5.13V280.5L448 32c-11.88 4-24.36 5.13-37.68 5.13z" } }] })(props);
}
function IoLogoYen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 32h-80L256 253.13 144 32H64l112.37 208H128v48h73.56L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.89-31H384v-48h-48.29z" } }] })(props);
}
function IoLogoYoutube(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" } }] })(props);
}
function IoMagnetOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M421.83 293.82A144 144 0 00218.18 90.17m135.76 135.77a48 48 0 00-67.88-67.88" } }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M192 464v-48m-101.82 5.82l33.94-33.94M48 320h48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17m203.65 203.65L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89m67.88 67.88l67.89 67.88" } }] })(props);
}
function IoMagnetSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M191.98 463.58v-48M90.16 421.4l33.94-33.94m-76.12-67.88h48" } }, { "tag": "path", "attr": { "d": "M422.2 89.82a144 144 0 00-203.71-.07l-67.88 67.88 67.88 67.89 67.88-67.89a48 48 0 0168.46.59c18.3 18.92 17.48 49.24-1.14 67.86l-67.32 67.32 67.88 67.88 66.91-66.91c56.37-56.37 57.37-148.15 1.04-204.55zM82.718 225.517l45.255-45.254 67.883 67.882L150.6 293.4zM218.49 361.27l45.254-45.254 67.882 67.882-45.255 45.255z" } }] })(props);
}
function IoMagnet(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M191.98 463.79v-48m-101.82 5.82l33.94-33.94m-76.12-67.88h48" } }, { "tag": "path", "attr": { "d": "M267.56 312.32l-31.11 31.11a16 16 0 000 22.63l45.26 45.25a16 16 0 0022.62 0l31.12-31.11a4 4 0 000-5.66l-62.23-62.22a4 4 0 00-5.66 0zM131.8 176.55l-31.11 31.12a16 16 0 000 22.62l45.25 45.26a16 16 0 0022.63 0l31.11-31.11a4 4 0 000-5.66l-62.22-62.23a4 4 0 00-5.66 0zm297.05-93.27a144 144 0 00-203.71-.06l-65.06 65.05a4 4 0 000 5.66l62.23 62.22a4 4 0 005.66 0l65-65.05a48 48 0 0168.46.59c18.3 18.92 17.47 49.24-1.14 67.85L295.85 284a4 4 0 000 5.66l62.22 62.23a4 4 0 005.66 0l64.08-64.08c56.37-56.34 57.37-148.13 1.04-204.53z" } }] })(props);
}
function IoMailOpenOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M441.6 171.61L266.87 85.37a24.57 24.57 0 00-21.74 0L70.4 171.61A40 40 0 0048 207.39V392c0 22.09 18.14 40 40.52 40h335c22.38 0 40.52-17.91 40.52-40V207.39a40 40 0 00-22.44-35.78z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M397.33 368L268.07 267.46a24 24 0 00-29.47 0L109.33 368m200-73l136-103m-384 0l139 105" } }] })(props);
}
function IoMailOpenSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M471.05 168.36L263.24 65.69a16.37 16.37 0 00-14.48 0L41 168.36a16 16 0 00-9 14.31V432a16.09 16.09 0 0016.19 16h415.62A16.09 16.09 0 00480 432V182.67a16 16 0 00-8.95-14.31zM256 97.89l173 85.44-175.7 86.78-173-85.44z" } }] })(props);
}
function IoMailOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448.67 154.45L274.1 68.2a41.1 41.1 0 00-36.2 0L63.33 154.45A55.6 55.6 0 0032 204.53v184.61c0 30.88 25.42 56 56.67 56h334.66c31.25 0 56.67-25.12 56.67-56V204.53a55.6 55.6 0 00-31.33-50.08zM252.38 96.82a8.22 8.22 0 017.24 0L429 180.48l-172 85a8.22 8.22 0 01-7.24 0L80.35 181.81z" } }] })(props);
}
function IoMailOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "320", "x": "48", "y": "96", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "40", "ry": "40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 160l144 112 144-112" } }] })(props);
}
function IoMailSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z" } }] })(props);
}
function IoMailUnreadOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 96H88a40 40 0 00-40 40v240a40 40 0 0040 40h334.73a40 40 0 0040-40V239" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 160l144 112 87-65.67" } }, { "tag": "circle", "attr": { "cx": "431.95", "cy": "128.05", "r": "47.95" } }, { "tag": "path", "attr": { "d": "M432 192a63.95 63.95 0 1163.95-63.95A64 64 0 01432 192zm0-95.9a32 32 0 1031.95 32 32 32 0 00-31.95-32z" } }] })(props);
}
function IoMailUnreadSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M374.09 101c-.11.23-.21.46-.31.7-.34.75-.67 1.5-1 2.26l-.36.9c-.27.71-.54 1.42-.79 2.14-.12.35-.24.7-.35 1-.23.68-.44 1.37-.64 2.07l-.33 1.15q-.27 1-.51 2c-.1.41-.2.82-.28 1.23-.15.67-.28 1.36-.4 2-.08.42-.16.84-.23 1.27-.11.69-.2 1.4-.29 2.1-.05.42-.11.83-.16 1.25-.08.77-.13 1.54-.19 2.31 0 .36-.06.72-.08 1.09-.06 1.13-.09 2.27-.09 3.41 0 1 0 2 .07 2.94v.62c.05.95.12 1.89.21 2.83l.06.46c.09.87.2 1.72.32 2.57 0 .15 0 .31.07.46.14.92.31 1.84.49 2.75l.12.59c.2.92.4 1.84.64 2.75.23.92.5 1.82.77 2.71.06.19.12.38.17.57.28.88.57 1.74.88 2.59.05.15.11.29.16.43.29.78.6 1.55.92 2.32.05.14.11.28.17.42.35.83.73 1.65 1.11 2.47l.27.53c.4.82.81 1.64 1.24 2.44a64.21 64.21 0 0029.56 27.63l.37.17c1.78.8 3.59 1.53 5.45 2.17l.95.32 1.5.47c.45.14.9.26 1.36.39l1.92.5c.57.14 1.14.27 1.72.39l1.15.24 1.83.32.93.16c.9.13 1.81.24 2.72.34l.77.07c.73.07 1.47.13 2.22.17l.85.05c1 0 1.94.07 2.93.07 1.15 0 2.29 0 3.43-.09l1.09-.09c.77 0 1.54-.11 2.3-.19.42 0 .83-.1 1.25-.16.7-.08 1.41-.17 2.1-.28l1.27-.23c.68-.12 1.36-.25 2-.39l1.24-.29c.67-.16 1.35-.32 2-.51.39-.1.78-.21 1.16-.33.69-.2 1.37-.41 2.05-.63l1.07-.36c.7-.24 1.4-.5 2.1-.77l.94-.37c.74-.3 1.47-.62 2.19-.95l.77-.34c.8-.37 1.58-.77 2.36-1.17.17-.09.35-.17.52-.27.91-.48 1.8-1 2.68-1.5l.12-.07a63.95 63.95 0 10-89.21-84.88l-.21.39c-.3 1.03-.72 1.86-1.11 2.69z" } }, { "tag": "path", "attr": { "d": "M371.51 202.43l-105.69 82.2a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l94.36-73.39A95.81 95.81 0 01349 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V211.13a95.75 95.75 0 01-108.49-8.7z" } }] })(props);
}
function IoMailUnread(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 128.05A64 64 0 00389.62 80a64.52 64.52 0 00-12.71 15.3v.06c-.54.9-1.05 1.82-1.55 2.74l-.24.49c-.42.79-.81 1.59-1.19 2.4-.12.25-.23.5-.34.75-.33.73-.65 1.47-.95 2.22-.13.31-.25.62-.37.93-.27.7-.53 1.4-.78 2.11l-.36 1.06c-.22.68-.43 1.37-.63 2.06-.12.39-.23.77-.33 1.16-.19.67-.35 1.35-.51 2-.1.41-.2.82-.29 1.23-.14.68-.27 1.37-.39 2-.08.42-.16.84-.23 1.26-.11.7-.2 1.41-.29 2.12-.05.41-.11.82-.16 1.24-.08.77-.13 1.54-.19 2.32 0 .36-.06.72-.08 1.08-.06 1.14-.1 2.28-.1 3.44 0 1 0 2 .08 2.94v.64q.08 1.41.21 2.82l.06.48c.09.85.19 1.69.32 2.52 0 .17 0 .35.07.52.14.91.31 1.81.49 2.71 0 .22.09.43.13.65.18.86.38 1.72.6 2.57v.19c.23.89.48 1.76.75 2.63l.21.68c.27.85.55 1.68.85 2.51.06.18.13.36.2.54.27.71.55 1.42.84 2.12.08.21.16.41.25.61.34.79.69 1.58 1.06 2.36l.33.67c.35.7.7 1.4 1.07 2.09a64.34 64.34 0 0022.14 23.81 62.22 62.22 0 007.62 4.15l.39.18q2.66 1.2 5.43 2.16l.95.32 1.5.47c.45.14.9.26 1.36.39l1.92.5 1.73.4 1.15.23 1.83.33.94.15c.9.13 1.81.25 2.72.35l.77.07c.73.06 1.47.12 2.21.16l.86.05c1 0 1.94.08 2.92.08 1.16 0 2.3 0 3.44-.1l1.08-.08c.78-.06 1.55-.11 2.32-.19l1.25-.16c.7-.09 1.41-.18 2.11-.29l1.26-.23c.68-.12 1.37-.25 2-.39l1.23-.29c.68-.16 1.36-.32 2-.51.39-.1.77-.21 1.16-.33.69-.2 1.38-.41 2.06-.63l1.06-.36c.71-.25 1.41-.51 2.11-.78l.93-.37c.75-.3 1.49-.62 2.22-.95l.75-.34c.81-.38 1.61-.77 2.4-1.19l.49-.24c.92-.5 1.84-1 2.74-1.55h.06A64.52 64.52 0 00480 170.38a63.81 63.81 0 0016-42.33z" } }, { "tag": "path", "attr": { "d": "M371.38 202.53l-105.56 82.1a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l94.22-73.28A95.86 95.86 0 01348.81 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V211.19a95.85 95.85 0 01-108.62-8.66z" } }] })(props);
}
function IoMail(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" } }] })(props);
}
function IoMaleFemaleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "216", "cy": "200", "r": "136", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M216 352v128m56-64H160m272-304V32h-80m-16.72 96.72L432 32" } }] })(props);
}
function IoMaleFemaleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M330 16v44h42.89l-37.1 37.09A157.67 157.67 0 00216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-50v44h50v58h44v-58h50v-44h-50v-37.54c76.74-10.74 136-76.8 136-156.46a157.23 157.23 0 00-14-64.93l44-44V134h44V16zM216 314a114 114 0 11114-114 114.13 114.13 0 01-114 114z" } }] })(props);
}
function IoMaleFemale(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M426 16h-74a22 22 0 000 44h20.89l-37.1 37.09A157.68 157.68 0 00216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-28a22 22 0 000 44h28v36a22 22 0 0044 0v-36h28a22 22 0 000-44h-28v-37.54c76.74-10.74 136-76.8 136-156.46a157.15 157.15 0 00-14-64.92l44-44V112a22 22 0 0044 0V38a22 22 0 00-22-22zM216 314a114 114 0 11114-114 114.13 114.13 0 01-114 114z" } }] })(props);
}
function IoMaleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "216", "cy": "296", "r": "152", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 160V64h-96m-28 124L448 64" } }] })(props);
}
function IoMaleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M330 48v44h58.89l-60.39 60.39c-68.2-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 00246 0c62.57-62.58 67.43-161.34 14.57-229.54L420 123.11V182h44V48zm-16.08 333.92a130.13 130.13 0 01-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0 50.69 133.16 0 183.84z" } }] })(props);
}
function IoMale(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M442 48h-90a22 22 0 000 44h36.89l-60.39 60.39c-68.19-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 00246 0c62.57-62.58 67.43-161.35 14.57-229.54L420 123.11V160a22 22 0 0044 0V70a22 22 0 00-22-22zM313.92 381.92a130.13 130.13 0 01-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0 50.69 133.16 0 183.84z" } }] })(props);
}
function IoManOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M208 208v264a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 336v136a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V208" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M208 192v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88a48 48 0 0148-48h96a48 48 0 0148 48v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "56", "r": "40", "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoManSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "56", "r": "56" } }, { "tag": "path", "attr": { "d": "M336 128H176a32 32 0 00-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 00-32-32z" } }] })(props);
}
function IoMan(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "56", "r": "56" } }, { "tag": "path", "attr": { "d": "M304 128h-96a64.19 64.19 0 00-64 64v107.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 00184 300v-99.73a8.18 8.18 0 017.47-8.25 8 8 0 018.53 8V489a23 23 0 0023 23 23 23 0 0023-23V346.34a10.24 10.24 0 019.33-10.34A10 10 0 01266 346v143a23 23 0 0023 23 23 23 0 0023-23V200.27a8.18 8.18 0 017.47-8.25 8 8 0 018.53 8v99.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 00368 300V192a64.19 64.19 0 00-64-64z" } }] })(props);
}
function IoMapOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336" } }] })(props);
}
function IoMapSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M327.71 130.93L184 39 32 144v336l152.29-98.93L328 473l152-105V32zM312 421l-112-72V91l112 72z" } }] })(props);
}
function IoMap(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48.17 113.34A32 32 0 0032 141.24V438a32 32 0 0047 28.37c.43-.23.85-.47 1.26-.74l84.14-55.05a8 8 0 003.63-6.72V46.45a8 8 0 00-12.51-6.63zm164.19-74.03A8 8 0 00200 46v357.56a8 8 0 003.63 6.72l96 62.42A8 8 0 00312 466V108.67a8 8 0 00-3.64-6.73zm252.17 7.16a31.64 31.64 0 00-31.5-.88 12.07 12.07 0 00-1.25.74l-84.15 55a8 8 0 00-3.63 6.72v357.46a8 8 0 0012.52 6.63l107.07-73.46a32 32 0 0016.41-28v-296a32.76 32.76 0 00-15.47-28.21z" } }] })(props);
}
function IoMedalOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "352", "r": "112", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "352", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M147 323L41.84 159.32a32 32 0 01-1.7-31.61l31-62A32 32 0 0199.78 48h312.44a32 32 0 0128.62 17.69l31 62a32 32 0 01-1.7 31.61L365 323m6-179H37m391.74-91.4L305 250M140.55 144L207 250" } }] })(props);
}
function IoMedalSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M80 32L16 160h289.11l80.22-128H80z" } }, { "tag": "path", "attr": { "d": "M496 144L424 32 298 231.08a128 128 0 00-84 0L189.53 192H43.82l86.66 134.89a128 128 0 10251 0zM256 422a70 70 0 1170-70 70.08 70.08 0 01-70 70z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "352", "r": "32" } }] })(props);
}
function IoMedal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "352", "r": "32" } }, { "tag": "path", "attr": { "d": "M99.78 32a48 48 0 00-42.94 26.53l-31 62A48.26 48.26 0 0024.28 160h278.2a4 4 0 003.39-1.87l75.5-120A4 4 0 00378 32z" } }, { "tag": "path", "attr": { "d": "M486.17 120.56l-31-62a47.7 47.7 0 00-32.79-25.46L342.5 160 298 231.08a128 128 0 00-84 0l-23.32-37.2a4 4 0 00-3.39-1.88H51.14a4 4 0 00-3.36 6.16l82.7 128.73a128 128 0 10251 0L483.62 168a48.22 48.22 0 002.55-47.44zm-226 295.31a64 64 0 1159.69-59.69 64.08 64.08 0 01-59.68 59.69z" } }] })(props);
}
function IoMedicalOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M429.93 174.27l-16.47-28.59a15.49 15.49 0 00-21.15-5.7l-98.39 57a4 4 0 01-6-3.5L288 80a16 16 0 00-16-16h-32a16 16 0 00-16 16l.07 113.57a4 4 0 01-6 3.5l-98.39-57a15.49 15.49 0 00-21.15 5.7l-16.46 28.6a15.42 15.42 0 005.69 21.1l98.49 57.08a4 4 0 010 6.9l-98.49 57.08a15.54 15.54 0 00-5.69 21.1l16.47 28.59a15.49 15.49 0 0021.15 5.7l98.39-57a4 4 0 016 3.5L224 432a16 16 0 0016 16h32a16 16 0 0016-16l-.07-113.67a4 4 0 016-3.5l98.39 57a15.49 15.49 0 0021.15-5.7l16.47-28.59a15.42 15.42 0 00-5.69-21.1l-98.49-57.08a4 4 0 010-6.9l98.49-57.08a15.51 15.51 0 005.68-21.11z" } }] })(props);
}
function IoMedicalSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M351.9 256L460 193.6l-48-83.2-108 62.4V48h-96v124.8l-108-62.4-48 83.2L160.1 256 52 318.4l48 83.2 108-62.4V464h96V339.2l108 62.4 48-83.2L351.9 256z" } }] })(props);
}
function IoMedical(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M272 464h-32a32 32 0 01-32-32l.05-85.82a4 4 0 00-6-3.47l-74.34 43.06a31.48 31.48 0 01-43-11.52l-16.5-28.64-.06-.1a31.65 31.65 0 0111.56-42.8l74.61-43.25a4 4 0 000-6.92l-74.54-43.21a31.41 31.41 0 01-11.55-43l16.44-28.55a31.48 31.48 0 0119.27-14.74 31.14 31.14 0 0123.8 3.2l74.31 43a4 4 0 006-3.47L208 80a32 32 0 0132-32h32a32 32 0 0132 32v85.72a4 4 0 006 3.47l74.34-43.06a31.51 31.51 0 0143 11.52l16.49 28.64.06.09a31.52 31.52 0 01-11.64 42.86l-74.53 43.2a4 4 0 000 6.92l74.53 43.2a31.42 31.42 0 0111.56 43l-16.44 28.55a31.48 31.48 0 01-19.27 14.74 31.14 31.14 0 01-23.8-3.2l-74.31-43a4 4 0 00-6 3.46L304 432a32 32 0 01-32 32zm-93.56-197.48zm0-21zm155.1-.08zm0 0z" } }] })(props);
}
function IoMedkitOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "448", "height": "352", "x": "32", "y": "112", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32m-112 96v160m80-80H176" } }] })(props);
}
function IoMedkitSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M168 72h176v24H168z" } }, { "tag": "path", "attr": { "d": "M484 96H384V40a8 8 0 00-8-8H136a8 8 0 00-8 8v56H28a12 12 0 00-12 12v360a12 12 0 0012 12h456a12 12 0 0012-12V108a12 12 0 00-12-12zM168 72h176v24H168zm184 238h-74v74h-44v-74h-74v-44h74v-74h44v74h74z" } }] })(props);
}
function IoMedkit(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M336 64H176a16 16 0 00-16 16v16h192V80a16 16 0 00-16-16z" } }, { "tag": "path", "attr": { "d": "M432 96h-48V80a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v256a64 64 0 0064 64h352a64 64 0 0064-64V160a64.07 64.07 0 00-64-64zm-96 208h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32zm16-208H160V80a16 16 0 0116-16h160a16 16 0 0116 16z" } }] })(props);
}
function IoMegaphoneOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M407.94 52.22S321.3 160 240 160H80a16 16 0 00-16 16v96a16 16 0 0016 16h160c81.3 0 167.94 108.23 167.94 108.23 6.06 8 24.06 2.52 24.06-9.83V62c0-12.31-17-18.82-24.06-9.78zM64 256s-16-6-16-32 16-32 16-32m384 54s16-4.33 16-22-16-22-16-22m-192-42v128M112 160v128" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M144 288v168a8 8 0 008 8h53a16 16 0 0015.29-20.73C211.91 416.39 192 386.08 192 336h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16" } }] })(props);
}
function IoMegaphoneSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128 144v332a4 4 0 004 4h100.07a8 8 0 007.82-9.7L208.71 352H232a8 8 0 008-8V144zm324.18 42.55L448 185.5V36a4 4 0 00-4-4h-42.5a4 4 0 00-2.63 1L272 144v160l126.87 111a4 4 0 002.63 1H444a4 4 0 004-4V262.5l4.18-1.05C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45zM96 144H52a4 4 0 00-4 4v35.59a43 43 0 00-4.24 4.35C38.4 194.32 32 205.74 32 224c0 20.19 7.89 33.13 16 40.42V300a4 4 0 004 4h44z" } }] })(props);
}
function IoMegaphone(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 176v.66a17.38 17.38 0 01-4.2 11.23v.05C38.4 194.32 32 205.74 32 224c0 16.55 5.3 28.23 11.68 35.91A19 19 0 0148 272a32 32 0 0032 32h8a8 8 0 008-8V152a8 8 0 00-8-8h-8a32 32 0 00-32 32zm404.18 10.55l-.93-.17a4 4 0 01-3.25-3.93V62c0-12.64-8.39-24-20.89-28.32-11.92-4.11-24.34-.76-31.68 8.53a431.18 431.18 0 01-51.31 51.69c-23.63 20-46.24 34.25-67 42.31a8 8 0 00-5.15 7.47V299a16 16 0 009.69 14.69c19.34 8.29 40.24 21.83 62 40.28a433.74 433.74 0 0151.68 52.16 26.22 26.22 0 0021.1 9.87 33.07 33.07 0 0010.44-1.74C439.71 410 448 399.05 448 386.4V265.53a4 4 0 013.33-3.94l.85-.14C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45zM240 320V152a8 8 0 00-8-8h-96a8 8 0 00-8 8v304a24 24 0 0024 24h52.45a32.66 32.66 0 0025.93-12.45 31.65 31.65 0 005.21-29.05c-1.62-5.18-3.63-11-5.77-17.19-7.91-22.9-18.34-37.07-21.12-69.32A32 32 0 00240 320z" } }] })(props);
}
function IoMenuOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M80 160h352M80 256h352M80 352h352" } }] })(props);
}
function IoMenuSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" } }] })(props);
}
function IoMenu(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "48", "d": "M88 152h336M88 256h336M88 360h336" } }] })(props);
}
function IoMicCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M224 368h64m48-143.7v23.92c0 39.42-40.58 71.48-80 71.48h0c-39.42 0-80-32.06-80-71.48V224.3m80 95.7v48" } }, { "tag": "rect", "attr": { "width": "96", "height": "160", "x": "208", "y": "128", "rx": "48", "ry": "48" } }] })(props);
}
function IoMicCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-48 128a48.14 48.14 0 0148-48 48.14 48.14 0 0148 48v64a48.14 48.14 0 01-48 48 48.14 48.14 0 01-48-48zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.71 103.71 0 01272 334.26V352h32v32h-96v-32h32v-17.74a103.71 103.71 0 01-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208.3h32v39.92c0 25.66 28 55.48 64 55.48 29.6 0 64-24.23 64-55.48V208.3h32z" } }] })(props);
}
function IoMicCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-48 128a48.14 48.14 0 0148-48 48.14 48.14 0 0148 48v64a48.14 48.14 0 01-48 48 48.14 48.14 0 01-48-48zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.71 103.71 0 01272 334.26V352h16a16 16 0 010 32h-64a16 16 0 010-32h16v-17.74a103.71 103.71 0 01-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224.3a16 16 0 0132 0v23.92c0 25.66 28 55.48 64 55.48 29.6 0 64-24.23 64-55.48V224.3a16 16 0 1132 0z" } }] })(props);
}
function IoMicOffCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80z" } }, { "tag": "path", "attr": { "d": "M352 369a15.93 15.93 0 01-11.84-5.24l-192-210a16 16 0 0123.68-21.52l192 210A16 16 0 01352 369zm0-120.78v-23.8a16.3 16.3 0 00-13.64-16.24c-9.88-1.48-18.36 6.51-18.36 16.12v23.92a43.35 43.35 0 01-3.07 15.91 4 4 0 00.76 4.16l19.19 21.1a2 2 0 003.19-.3A77.12 77.12 0 00352 248.22zM304 240v-64a48.14 48.14 0 00-48-48 48.08 48.08 0 00-41 23.1 4 4 0 00.47 4.77l84.42 92.86a2 2 0 003.46-1A47.84 47.84 0 00304 240zm-57.43 45.2l-36.46-40.11a1 1 0 00-1.74.8 48.26 48.26 0 0037.25 41 1 1 0 00.95-1.69z" } }, { "tag": "path", "attr": { "d": "M287.55 352H272v-17.74a100.33 100.33 0 0012.53-3.06 2 2 0 00.89-3.26l-21.07-23.19a3.94 3.94 0 00-3.29-1.29c-1.69.15-3.39.24-5.06.24-36 0-64-29.82-64-55.48V224.4a16.26 16.26 0 00-15.61-16.4A15.91 15.91 0 00160 224v24.22c0 23.36 10.94 45.61 30.79 62.66A103.71 103.71 0 00240 334.26V352h-15.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00224 384h64a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z" } }] })(props);
}
function IoMicOffCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm64 200.22V208h32v40.22a77.53 77.53 0 01-13.37 43.11L316 266.4a44.11 44.11 0 004-18.18zM256 128a48.14 48.14 0 0148 48v64a48.07 48.07 0 01-1.44 11.64l-89-97.92A48.13 48.13 0 01256 128zm48 256h-96v-32h32v-17.74a103.71 103.71 0 01-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208h32v40.22c0 25.66 28 55.48 64 55.48a56.91 56.91 0 007-.45l24.52 27a99.57 99.57 0 01-15.5 4V352h32zm-95.91-141.13l40.5 44.55a48.2 48.2 0 01-40.5-44.55zm136.07 124.89l-200.5-218.5 23.68-21.52 200.5 218.5z" } }] })(props);
}
function IoMicOffCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 80a48.14 48.14 0 0148 48v64a47.84 47.84 0 01-.63 7.71 2 2 0 01-3.46 1l-84.42-92.86a4 4 0 01-.47-4.77A48.08 48.08 0 01256 128zm32 256h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01224 352h16v-17.74a103.71 103.71 0 01-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224a15.91 15.91 0 0116.39-16A16.26 16.26 0 01192 224.4v23.82c0 25.66 28 55.48 64 55.48 1.67 0 3.37-.09 5.06-.24a3.94 3.94 0 013.29 1.29l21.07 23.19a2 2 0 01-.89 3.26 100.33 100.33 0 01-12.53 3.06V352h15.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01288 384zm-77.89-138.91l36.46 40.11a1 1 0 01-.95 1.66 48.26 48.26 0 01-37.25-41 1 1 0 011.74-.77zm152.65 119.75a16 16 0 01-22.6-1.08l-192-210a16 16 0 0123.68-21.52l192 210a16 16 0 01-1.08 22.6zM352 248.22a77.12 77.12 0 01-11.93 40.87 2 2 0 01-3.19.3l-19.19-21.1a4 4 0 01-.76-4.16 43.35 43.35 0 003.07-15.91v-23.8a16.3 16.3 0 0113.64-16.24c9.88-1.48 18.36 6.51 18.36 16.12z" } }] })(props);
}
function IoMicOffOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M432 400L96 64" } }, { "tag": "path", "attr": { "d": "M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 208v32a111.58 111.58 0 01-2.45 23.31 4.05 4.05 0 001.07 3.69l21.82 21.81a2 2 0 003.29-.72A143.27 143.27 0 00400 240zM256 352a112.36 112.36 0 01-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 00320 432h-48v-48.89a143.08 143.08 0 0052-16.22 4 4 0 00.91-6.35L307 342.63a4 4 0 00-4.51-.78A110.78 110.78 0 01256 352zm0-272a47.18 47.18 0 0148 48v74.72a4 4 0 001.17 2.82L332.59 233a2 2 0 003.41-1.42V128.91C336 85 301 48.6 257.14 48a79.66 79.66 0 00-68.47 36.57 4 4 0 00.54 5l19.54 19.54a2 2 0 003.25-.63A47.44 47.44 0 01256 80z" } }, { "tag": "path", "attr": { "d": "M207.27 242.9L179.41 215a2 2 0 00-3.41 1.42V239a80.89 80.89 0 0023.45 56.9 78.55 78.55 0 0077.8 21.19 2 2 0 00.86-3.35l-24.91-24.91a4.08 4.08 0 00-2.42-1.15c-21.65-2.52-39.48-20.44-42.37-42.43a4 4 0 00-1.14-2.35z" } }] })(props);
}
function IoMicOffSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M432 400L96 64" } }, { "tag": "path", "attr": { "d": "M368 192v48a111.74 111.74 0 01-2.93 25.45L390.65 291a143.07 143.07 0 009.35-51v-48zm-96 240v-48.89a143.11 143.11 0 0056.65-18.83L305 340.65A112.13 112.13 0 01144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32zm64-195.63V128c0-44.86-35.14-80-80-80a79.68 79.68 0 00-69 39.34" } }, { "tag": "path", "attr": { "d": "M176 211.63V239a80.89 80.89 0 0023.45 56.9 78.55 78.55 0 0081 20.21z" } }] })(props);
}
function IoMicOff(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M432 400L96 64" } }, { "tag": "path", "attr": { "d": "M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 208v32a111.68 111.68 0 01-2.68 24.38 2 2 0 00.53 1.84l22.59 22.59a2 2 0 003.29-.72A143.27 143.27 0 00400 240zM256 352a112.36 112.36 0 01-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 00320 432h-48v-48.89a143.08 143.08 0 0052-16.22 4 4 0 00.91-6.35l-18.4-18.39a3 3 0 00-3.41-.58A111 111 0 01256 352zm1.14-304a79.66 79.66 0 00-68.47 36.57 4 4 0 00.54 5L332.59 233a2 2 0 003.41-1.42V128.91C336 85 301 48.6 257.14 48z" } }, { "tag": "path", "attr": { "d": "M179.41 215a2 2 0 00-3.41 1.42V239a80.89 80.89 0 0023.45 56.9 78.55 78.55 0 0077.8 21.19 2 2 0 00.86-3.35z" } }] })(props);
}
function IoMicOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 64a63.68 63.68 0 00-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64z" } }] })(props);
}
function IoMicSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80" } }, { "tag": "path", "attr": { "d": "M256 320a78.83 78.83 0 01-56.55-24.1A80.89 80.89 0 01176 239V128a79.69 79.69 0 0180-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81z" } }] })(props);
}
function IoMic(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80" } }, { "tag": "path", "attr": { "d": "M256 320a78.83 78.83 0 01-56.55-24.1A80.89 80.89 0 01176 239V128a79.69 79.69 0 0180-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81z" } }] })(props);
}
function IoMoonOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" } }] })(props);
}
function IoMoonSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z" } }] })(props);
}
function IoMoon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" } }] })(props);
}
function IoMoveOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 112l80-80 80 80m-80.02-80l.02 448m-80-80l80 80 80-80m64-224l80 80-80 80M112 176l-80 80 80 80m-80-80h448" } }] })(props);
}
function IoMoveSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M176 112l80-80 80 80m-80.02-80l.02 448m-80-80l80 80 80-80m64-224l80 80-80 80M112 176l-80 80 80 80m-80-80h448" } }] })(props);
}
function IoMove(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 112l80-80 80 80m-80.02-80l.02 448m-80-80l80 80 80-80m64-224l80 80-80 80M112 176l-80 80 80 80m-80-80h448" } }] })(props);
}
function IoMusicalNoteOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M240 343.31V424a32.28 32.28 0 01-21.88 30.65l-21.47 7.23c-25.9 8.71-52.65-10.75-52.65-38.32h0A34.29 34.29 0 01167.25 391l50.87-17.12A32.29 32.29 0 00240 343.24V92a16.13 16.13 0 0112.06-15.66L360.49 48.2A6 6 0 01368 54v57.76a16.13 16.13 0 01-12.12 15.67l-91.64 23.13A32.25 32.25 0 00240 181.91v39.39" } }] })(props);
}
function IoMusicalNoteSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M381.55 32.05c-18.13 4.28-126.57 31.07-156 38.19a2 2 0 00-1.55 1.94V353.3a2 2 0 01-1.32 1.88L182 369.88c-29.82 10.66-54 18.94-54 59.06 0 32.47 23.53 47.18 37.95 50a81.77 81.77 0 0015 1.08c8.89 0 31-3.59 47.52-14.24C256 448 256 448 256 415.93V169.16a2 2 0 011.49-1.94l125-33a2 2 0 001.49-1.94V34a2 2 0 00-2.43-1.95z" } }] })(props);
}
function IoMusicalNote(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M183.83 480a55.2 55.2 0 01-32.36-10.55A56.64 56.64 0 01128 423.58a50.26 50.26 0 0134.14-47.73L213 358.73a16.25 16.25 0 0011-15.49V92a32.1 32.1 0 0124.09-31.15l108.39-28.14A22 22 0 01384 54v57.75a32.09 32.09 0 01-24.2 31.19l-91.65 23.13A16.24 16.24 0 00256 181.91V424a48.22 48.22 0 01-32.78 45.81l-21.47 7.23a56 56 0 01-17.92 2.96z" } }] })(props);
}
function IoMusicalNotesOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M192 218v-6c0-14.84 10-27 24.24-30.59l174.59-46.68A20 20 0 01416 154v22" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 295.94v80c0 13.91-8.93 25.59-22 30l-22 8c-25.9 8.72-52-10.42-52-38h0a33.37 33.37 0 0123-32l51-18.15c13.07-4.4 22-15.94 22-29.85V58a10 10 0 00-12.6-9.61L204 102a16.48 16.48 0 00-12 16v226c0 13.91-8.93 25.6-22 30l-52 18c-13.88 4.68-22 17.22-22 32h0c0 27.58 26.52 46.55 52 38l22-8c13.07-4.4 22-16.08 22-30v-80" } }] })(props);
}
function IoMusicalNotesSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M429.46 32.07c-23.6 6.53-205.55 58.81-250.54 71.43a4 4 0 00-2.92 3.83v247a2 2 0 01-1.33 1.89l-27.85 9.55c-19 7.44-66.82 16.68-66.82 59.19 0 35.54 24.63 51.54 45.86 54.28a52.06 52.06 0 007.81.8c7.37 0 36.38-7.08 53.3-18.08C208 448.25 208 448 208 412V202c0-.9.62-.84 1.48-1.07l188-51.92a2 2 0 012.53 2v155.54a2 2 0 01-1.36 1.89c-8.9 3-19.23 6.5-26.48 9.12C341.39 328.68 304 335.65 304 376c0 38.51 28.26 54.58 46.3 55.83a87.37 87.37 0 0021.33-1c9-1.38 24.09-5.9 38.14-14.86C432 401.79 432 401.51 432 360V34a2 2 0 00-2.54-1.93z" } }] })(props);
}
function IoMusicalNotes(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z" } }] })(props);
}
function IoNavigateCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoNavigateCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48A208.23 208.23 0 0048 256c0 114.68 93.31 208 208 208a208.23 208.23 0 00208-208c0-114.69-93.31-208-208-208zm-8 361V264H103l259-114.11z" } }] })(props);
}
function IoNavigateCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zM351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 00-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 01351 175.24z" } }] })(props);
}
function IoNavigateOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 64L64 240.14h200a8 8 0 018 8V448z" } }] })(props);
}
function IoNavigateSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 32L32 240h240v240L480 32z" } }] })(props);
}
function IoNavigate(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M272 464a16 16 0 01-16-16.42V264.13a8 8 0 00-8-8H64.41a16.31 16.31 0 01-15.49-10.65 16 16 0 018.41-19.87l384-176.15a16 16 0 0121.22 21.19l-176 384A16 16 0 01272 464z" } }] })(props);
}
function IoNewspaperOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192" } }, { "tag": "path", "attr": { "d": "M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" } }] })(props);
}
function IoNewspaperSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "96", "height": "96", "x": "96", "y": "112", "fill": "none", "rx": "16", "ry": "16" } }, { "tag": "path", "attr": { "d": "M468 112h-52v304a32 32 0 0032 32 32 32 0 0032-32V124a12 12 0 00-12-12z" } }, { "tag": "path", "attr": { "d": "M431.15 477.75A64.11 64.11 0 01384 416V44a12 12 0 00-12-12H44a12 12 0 00-12 12v380a56 56 0 0056 56h342.85a1.14 1.14 0 00.3-2.25zM96 208v-96h96v96zm224 192H96v-32h224zm0-64H96v-32h224zm0-64H96v-32h224zm0-64h-96v-32h96zm0-64h-96v-32h96z" } }] })(props);
}
function IoNewspaper(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M439.91 112h-23.82a.09.09 0 00-.09.09V416a32 32 0 0032 32 32 32 0 0032-32V152.09A40.09 40.09 0 00439.91 112z" } }, { "tag": "path", "attr": { "d": "M384 416V72a40 40 0 00-40-40H72a40 40 0 00-40 40v352a56 56 0 0056 56h342.85a1.14 1.14 0 001.15-1.15 1.14 1.14 0 00-.85-1.1A64.11 64.11 0 01384 416zM96 128a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16h-64a16 16 0 01-16-16zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 400zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 336zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 272zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 208zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 144z" } }] })(props);
}
function IoNotificationsCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "d": "M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8 0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 01-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 01-6.33 6.68c-21.24 8.46-47 25.8-47 74.67 0 53.33-11.54 61.46-27.87 80.8-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313zm-144.96 39a4 4 0 00-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 00-4-4.48z" } }] })(props);
}
function IoNotificationsCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M295.68 351.43v.57h.32z" } }, { "tag": "path", "attr": { "fill": "none", "d": "M256 384c22.28 0 39.36-10.63 39.66-32H216c0 21.75 17.53 32 40 32zm39.67-32h.33l-.32-.57c0 .19-.01.38-.01.57z" } }, { "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 336c-22.48 0-40-10.25-40-32h80c-.3 21.37-17.71 32-40 32zm112-48H144v-28l28-36v-32.3c0-40.41 15.82-75.35 56-84.27l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36z" } }] })(props);
}
function IoNotificationsCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 336c-20.9 0-37.52-8.86-39.75-27.58a4 4 0 014-4.42h71.45a4 4 0 014 4.48C293.15 374.85 276.68 384 256 384zm98-48H158c-11.84 0-18-15-11.19-23 16.33-19.34 27.87-27.47 27.87-80.8 0-48.87 25.74-66.21 47-74.67a11.35 11.35 0 006.33-6.68C231.7 138.6 242.14 128 256 128s24.28 10.6 28 22.86a11.39 11.39 0 006.34 6.68c21.21 8.44 47 25.81 47 74.67 0 53.33 11.53 61.46 27.86 80.8 6.74 7.99.57 22.99-11.2 22.99z" } }] })(props);
}
function IoNotificationsOffCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "d": "M220.24 352a4 4 0 00-4 4.42C218.49 375.14 235.11 384 256 384s37.5-8.86 39.73-27.58a4 4 0 00-4-4.42zM352 378a15.93 15.93 0 01-11.84-5.24l-192-212a16 16 0 0123.68-21.52l192 212A16 16 0 01352 378zM174.68 232.21c0 53.33-11.54 61.46-27.87 80.8-6.77 8-.65 23 11.19 23h118.83a4 4 0 002.95-6.7l-98-106.87a4 4 0 00-6.94 2.52c-.1 2.33-.16 4.75-.16 7.25zM365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8 0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 01-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 01-6.33 6.68c-1.28.51-2.57 1.05-3.88 1.63a4 4 0 00-1.3 6.36L361 323.21a4 4 0 006.94-2.95 12 12 0 00-2.74-7.26z" } }] })(props);
}
function IoNotificationsOffCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zM144 308l28-36v-32.3a131.83 131.83 0 012.34-25.42L285.92 336H144zm112.18 76C233.6 384 216 373.75 216 352h80c-.3 21.37-17.45 32-39.82 32zm93.48-3.74l-211-227 23.68-21.52 211 227zM368 330.85l-.32-.38-155.5-169.63a73.4 73.4 0 0115.82-5.41l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36z" } }] })(props);
}
function IoNotificationsOffCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zM146.83 313c16.33-19.34 27.86-27.47 27.86-80.8q0-3.75.2-7.26a4 4 0 017-2.52l98 106.87a4 4 0 01-2.94 6.7H158C146.18 336 140.06 321 146.83 313zm148.93 43.41C293.53 375.14 276.92 384 256 384s-37.51-8.86-39.75-27.58a4 4 0 014-4.42h71.53a4 4 0 013.98 4.42zm67 17.42a16 16 0 01-22.6-1.08l-192-212a16 16 0 0123.68-21.52l192 212a16 16 0 01-1.08 22.61zM361 323.21L216.49 165.53a4 4 0 011.3-6.36c1.31-.58 2.61-1.12 3.89-1.63a11.33 11.33 0 006.32-6.68c3.72-12.26 14.15-22.86 28-22.86s24.29 10.6 28 22.86a11.34 11.34 0 006.34 6.68c21.21 8.44 47 25.81 47 74.67 0 53.33 11.54 61.46 27.87 80.8a12.09 12.09 0 012.76 7.25 4 4 0 01-6.97 2.95z" } }] })(props);
}
function IoNotificationsOffOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128.51 204.59q-.37 6.15-.37 12.76C128.14 304 110 320 84.33 351.43 73.69 364.45 83 384 101.62 384H320m94.5-48.7c-18.48-23.45-30.62-47.05-30.62-118 0-79.3-40.52-107.57-73.88-121.3-4.43-1.82-8.6-6-9.95-10.55C294.21 65.54 277.82 48 256 48s-38.2 17.55-44 37.47c-1.35 4.6-5.52 8.71-10 10.53a149.57 149.57 0 00-18 8.79M320 384v16a64 64 0 01-128 0v-16" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 448L64 64" } }] })(props);
}
function IoNotificationsOffSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M41.37 64l22.628-22.628L470.627 448l-22.628 22.627zM256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zM112 227.47V288l-48 64v48h268.12L115.87 183.75a236.75 236.75 0 00-3.87 43.72zM448 352l-48-64v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48a117.45 117.45 0 00-41.95 18.17l282 282z" } }] })(props);
}
function IoNotificationsOff(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 464a15.92 15.92 0 01-11.31-4.69l-384-384a16 16 0 0122.62-22.62l384 384A16 16 0 01448 464zm-7.92-122.69c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65 157.88 157.88 0 00-21.88 11 8 8 0 00-1.49 12.49l261.78 261.74a8 8 0 0013.6-6.63 35.39 35.39 0 00-7.84-18.5zM112.14 217.35c0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H312.8a8 8 0 005.66-13.66l-192-192a8 8 0 00-13.62 5q-.7 8.69-.7 18.04zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" } }] })(props);
}
function IoNotificationsOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" } }] })(props);
}
function IoNotificationsSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zm144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z" } }] })(props);
}
function IoNotifications(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" } }] })(props);
}
function IoNuclearOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "192", "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "64", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M224 192L171 85m117 107l53-107m-13.45 170.81l119.41.13m-147.87 57.19l72.25 95.06M184.45 255.81l-119.41.13m147.87 57.19l-72.25 95.06" } }] })(props);
}
function IoNuclearSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "48" } }, { "tag": "path", "attr": { "fill": "none", "d": "M223.47 335.59l-51.71 68a169.73 169.73 0 00168.48 0l-51.71-68" } }, { "tag": "path", "attr": { "d": "M403.08 108.92a208 208 0 00-294.16 294.16 208 208 0 00294.16-294.16zM342 256a86.13 86.13 0 01-53.47 79.59l51.71 68a169.73 169.73 0 01-168.48 0l51.71-68a86 86 0 01-50.56-101.77l-85.48.09a170.21 170.21 0 0173.83-119l37.94 76.59a85.78 85.78 0 01113.6 0l37.94-76.59a170.21 170.21 0 0173.83 119l-85.48-.09A85.87 85.87 0 01342 256z" } }] })(props);
}
function IoNuclear(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zM429 239.92l-93.08-.1a2 2 0 01-1.95-1.57 80.08 80.08 0 00-27.44-44.17 2 2 0 01-.54-2.43l41.32-83.43a2 2 0 012.87-.81A176.2 176.2 0 01431 237.71a2 2 0 01-2 2.21zm-220.8 20.46a48 48 0 1143.42 43.42 48 48 0 01-43.42-43.42zm-43.55-152.16L206 191.65a2 2 0 01-.54 2.43A80.08 80.08 0 00178 238.25a2 2 0 01-2 1.57l-93.08.1a2 2 0 01-2-2.21 176.2 176.2 0 0180.82-130.3 2 2 0 012.91.81zm-.37 295.34l56.31-74.09a2 2 0 012.43-.6 79.84 79.84 0 0066 0 2 2 0 012.43.6l56.31 74.09a2 2 0 01-.54 2.92 175.65 175.65 0 01-182.36 0 2 2 0 01-.58-2.92z" } }] })(props);
}
function IoNutritionOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160 0 80 64 192 111.2 192s51.94-24 80.8-24 33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160z" } }, { "tag": "path", "attr": { "d": "M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 01-9.1-8.73 97.6 97.6 0 0128.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 018.67 8.92 98 98 0 01-28.08 58.2z" } }, { "tag": "ellipse", "attr": { "cx": "216", "cy": "304", "rx": "24", "ry": "48" } }, { "tag": "ellipse", "attr": { "cx": "296", "cy": "304", "rx": "24", "ry": "48" } }] })(props);
}
function IoNutritionSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M438.71 159.43c-17.6-28.31-45.5-43.8-85.28-47.37-22.82-2-50.23 4.94-72.25 10.55C271.26 125.14 260 128 256 128s-15.18-2.86-25-5.39c-22.08-5.65-49.56-12.69-72.45-10.54-38.53 3.61-66 19.19-84 47.62S48 229 48 288c0 61.28 29.53 114.58 47.13 140.89C116.82 461.34 149.25 496 175.2 496c18.57 0 34.12-7.23 47.82-13.64C243 473 256 472 256 472s11 0 31.94 10.11C301.65 488.73 317.3 496 336.8 496c26.58 0 59.08-34.69 80.63-67.15C434.82 402.65 464 349.52 464 288c0-60-8-100.83-25.29-128.57zM216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48zm80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48z" } }, { "tag": "path", "attr": { "d": "M323.72 82.76C353.68 52.82 352 16.18 352 16.14s-35.77-3.76-67.23 27.67S256.06 112 256.06 112s37.68.71 67.66-29.24z" } }] })(props);
}
function IoNutrition(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M439 166.29c-18.67-32.57-47.46-50.81-85.57-54.23-20.18-1.8-39 3.37-57.23 8.38-14.15 3.89-27.52 7.56-40.2 7.56s-26-3.68-40.06-7.57c-18.28-5-37.18-10.26-57.43-8.36-36.39 3.41-65.51 22.11-84.31 54.08C56.82 195.76 48 236.76 48 288c0 40.4 15 90.49 40 134 12.82 22.25 47 74 87.16 74 30.77 0 47.15-9.44 59.11-16.33 8.3-4.78 13.31-7.67 21.69-7.67s13.39 2.89 21.69 7.67c12 6.89 28.35 16.33 59.15 16.33 40.17 0 74.34-51.76 87.16-74 25.07-43.5 40-93.59 40-134 .04-52.57-8.14-92.38-24.96-121.71zM216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48zm80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48z" } }, { "tag": "path", "attr": { "d": "M265.1 111.93c13.16-1.75 37.86-7.83 58.83-28.79a98 98 0 0028-58.2 8 8 0 00-8.55-8.94c-12.71.95-36.76 5.87-58.73 27.85A97.6 97.6 0 00256 103.2a8 8 0 009.1 8.73z" } }] })(props);
}
function IoOpenOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72" } }] })(props);
}
function IoOpenSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M201.37 288l176-176H48v352h352V134.63l-176 176L201.37 288z" } }, { "tag": "path", "attr": { "d": "M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48H320z" } }] })(props);
}
function IoOpen(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M224 304a16 16 0 01-11.31-27.31l157.94-157.94A55.7 55.7 0 00344 112H104a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V168a55.7 55.7 0 00-6.75-26.63L235.31 299.31A15.92 15.92 0 01224 304z" } }, { "tag": "path", "attr": { "d": "M448 48H336a16 16 0 000 32h73.37l-38.74 38.75a56.35 56.35 0 0122.62 22.62L432 102.63V176a16 16 0 0032 0V64a16 16 0 00-16-16z" } }] })(props);
}
function IoOptionsOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80" } }, { "tag": "circle", "attr": { "cx": "336", "cy": "128", "r": "32", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "176", "cy": "256", "r": "32", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "336", "cy": "384", "r": "32", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoOptionsSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M381.25 112a48 48 0 00-90.5 0H48v32h242.75a48 48 0 0090.5 0H464v-32zM176 208a48.09 48.09 0 00-45.25 32H48v32h82.75a48 48 0 0090.5 0H464v-32H221.25A48.09 48.09 0 00176 208zm160 128a48.09 48.09 0 00-45.25 32H48v32h242.75a48 48 0 0090.5 0H464v-32h-82.75A48.09 48.09 0 00336 336z" } }] })(props);
}
function IoOptions(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M64 144h226.75a48 48 0 0090.5 0H448a16 16 0 000-32h-66.75a48 48 0 00-90.5 0H64a16 16 0 000 32zm384 224h-66.75a48 48 0 00-90.5 0H64a16 16 0 000 32h226.75a48 48 0 0090.5 0H448a16 16 0 000-32zm0-128H221.25a48 48 0 00-90.5 0H64a16 16 0 000 32h66.75a48 48 0 0090.5 0H448a16 16 0 000-32z" } }] })(props);
}
function IoPaperPlaneOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285" } }] })(props);
}
function IoPaperPlaneSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 16L15.88 208 195 289 448 64 223 317l81 179L496 16z" } }] })(props);
}
function IoPaperPlane(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z" } }] })(props);
}
function IoPartlySunnyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384.8 271.4a80 80 0 10-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63m203.65-22.63l-22.63 22.63" } }] })(props);
}
function IoPartlySunnySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91 15.24-13.68 36.17-23.21 59-26.84.06 0 .08 0 .09-.05 6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 01232 160c30.23 0 58.48 9.39 81.71 27.17a142.69 142.69 0 0145.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zm19-232.18zm22.5-27.93a169.23 169.23 0 0145.44 19A96 96 0 00281 129.33q-2.85 2-5.54 4.2a162.47 162.47 0 0157.73 28.23 174.53 174.53 0 0148.31 58.13zM448 192h64v32h-64zM320 32h32v64h-32zm-64.65 97.63l12.45-12.45-44.62-44.63-22.63 22.63 33.17 33.17h.6a172 172 0 0121.03 1.28zm148.853-12.46l44.626-44.625 22.627 22.628-44.625 44.625z" } }] })(props);
}
function IoPartlySunny(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91 15.24-13.68 36.17-23.21 59-26.84.06 0 .08 0 .09-.05 6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 01232 160c30.23 0 58.48 9.39 81.71 27.17a142.24 142.24 0 0142.19 53.21 16 16 0 0011.19 9c26 5.61 48.4 17.29 65.17 34C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zm19-232.18zm28.89-26.14a168.8 168.8 0 0134.76 14.71 4 4 0 005.82-2.44 97 97 0 003.53-26.68c-.39-52.43-43.48-95.22-95.91-95.27A95.46 95.46 0 00281 129.33h-.06a3.38 3.38 0 001 6 162.45 162.45 0 0151.28 26.4 173.92 173.92 0 0145.32 52.51 16 16 0 009.35 7.44zM496 224h-32a16 16 0 010-32h32a16 16 0 010 32zM336 96a16 16 0 01-16-16V48a16 16 0 0132 0v32a16 16 0 01-16 16zm-90.51 37.49a15.92 15.92 0 01-11.31-4.69l-22.63-22.62a16 16 0 0122.63-22.63l22.62 22.63a16 16 0 01-11.31 27.31zm181.02 0a16 16 0 01-11.31-27.31l22.62-22.63a16 16 0 0122.63 22.63l-22.63 22.62a15.92 15.92 0 01-11.31 4.69z" } }] })(props);
}
function IoPauseCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M208 192v128m96-128v128" } }] })(props);
}
function IoPauseCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-32 288h-32V176h32zm96 0h-32V176h32z" } }] })(props);
}
function IoPauseCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-32 272a16 16 0 01-32 0V192a16 16 0 0132 0zm96 0a16 16 0 01-32 0V192a16 16 0 0132 0z" } }] })(props);
}
function IoPauseOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 96h16v320h-16zm144 0h16v320h-16z" } }] })(props);
}
function IoPauseSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M224 432h-80V80h80zm144 0h-80V80h80z" } }] })(props);
}
function IoPause(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zm144 0h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z" } }] })(props);
}
function IoPawOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M457.74 170.1a30.26 30.26 0 00-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76-14.23 34.18-7.68 69.15 14.74 78.14a30.21 30.21 0 0011.15 2.1c20.27 0 43.2-19 55.17-47.76 14.13-34.18 7.48-69.15-14.84-78.14zM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.91 50.91 0 00-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2 31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 00-3.7-19.25c-12-33.55-60-36.71-83.8-76.07zM192.51 196a26.53 26.53 0 004-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.53 26.53 0 00-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196zm174.41-59.85c5.26-36.32-9.23-68.48-32.44-71.85a26.53 26.53 0 00-4-.3c-21.73 0-42.47 25.61-47.43 59.85-5.26 36.32 9.23 68.48 32.44 71.85a26.53 26.53 0 004 .3c21.73 0 42.51-25.71 47.43-59.85zM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.21 30.21 0 00-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.21 30.21 0 0011.15-2.1z" } }] })(props);
}
function IoPawSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12-17.23-10.71-33.5-20.83-44.14-39-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08-19.8 12.31-40.27 25-49.1 50.05a78.06 78.06 0 00-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464 448 430.85 448 390.11a78.3 78.3 0 00-5.2-28.29z" } }, { "tag": "ellipse", "attr": { "cx": "72", "cy": "216", "rx": "56", "ry": "72" } }, { "tag": "ellipse", "attr": { "cx": "184", "cy": "120", "rx": "56", "ry": "72" } }, { "tag": "ellipse", "attr": { "cx": "328", "cy": "120", "rx": "56", "ry": "72" } }, { "tag": "ellipse", "attr": { "cx": "440", "cy": "216", "rx": "56", "ry": "72" } }] })(props);
}
function IoPaw(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M490.39 182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.46 46.46 0 00-17-3.2h-.64c-27.24.41-55.05 23.56-69.19 57.61-10.37 24.9-11.56 51.68-3.18 71.64 5.54 13.2 14.78 22.71 26.73 27.5l.13.05a46.53 46.53 0 0017 3.2c27.5 0 55.6-23.15 70-57.65 10.24-24.87 11.37-51.63 2.98-71.6zM381.55 329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53 250.8 298.37 224 256 224s-58.57 26.8-85.39 71.2c-9.72 16.06-24.6 25-40.36 34.48-18.07 10.86-36.74 22.08-44.8 44.16a66.93 66.93 0 00-4.65 25c0 35.95 28 65.2 62.4 65.2 17.75 0 36.64-6.15 56.63-12.66 19.22-6.26 39.09-12.73 56.27-12.73s37 6.47 56.15 12.73C332.2 457.85 351 464 368.8 464c34.35 0 62.3-29.25 62.3-65.2a67 67 0 00-4.75-25c-8.06-22.1-26.74-33.33-44.8-44.19zM150 188.85c11.9 14.93 27 23.15 42.52 23.15a42.88 42.88 0 006.33-.47c32.37-4.76 52.54-44.26 45.92-90C242 102.3 234.6 84.39 224 71.11 212.12 56.21 197 48 181.49 48a42.88 42.88 0 00-6.33.47c-32.37 4.76-52.54 44.26-45.92 90 2.76 19.2 10.16 37.09 20.76 50.38zm163.16 22.68a42.88 42.88 0 006.33.47c15.53 0 30.62-8.22 42.52-23.15 10.59-13.29 17.95-31.18 20.75-50.4 6.62-45.72-13.55-85.22-45.92-90a42.88 42.88 0 00-6.33-.47C315 48 299.88 56.21 288 71.11c-10.6 13.28-18 31.19-20.76 50.44-6.62 45.72 13.55 85.22 45.92 89.98zM111.59 308.8l.14-.05c11.93-4.79 21.16-14.29 26.69-27.48 8.38-20 7.2-46.75-3.15-71.65C120.94 175.16 92.85 152 65.38 152a46.4 46.4 0 00-17 3.2l-.14.05c-11.9 4.75-21.13 14.29-26.66 27.48-8.38 20-7.2 46.75 3.15 71.65C39.06 288.84 67.15 312 94.62 312a46.4 46.4 0 0016.97-3.2z" } }] })(props);
}
function IoPencilOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zm56.56-56.56l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z" } }] })(props);
}
function IoPencilSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M103 464H48v-55L358.14 98.09l55.77 55.78L103 464zm322.72-322L370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.91 25.91 0 0118.42 7.62l17 17A25.87 25.87 0 01464 91c0 7-2.71 14.45-7.62 19.36zm-7.52-70.83z" } }] })(props);
}
function IoPencil(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "44", "d": "M358.62 129.28L86.49 402.08 70 442l39.92-16.49 272.8-272.13-24.1-24.1zm54.45-54.44l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 000-23.34l-.75-.75a16.51 16.51 0 00-23.35 0z" } }] })(props);
}
function IoPeopleCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80z" } }, { "tag": "path", "attr": { "d": "M323.67 292c-17.4 0-34.21-7.72-47.34-21.73a83.76 83.76 0 01-22-51.32c-1.47-20.7 4.88-39.75 17.88-53.62S303.38 144 323.67 144c20.14 0 38.37 7.62 51.33 21.46s19.47 33 18 53.51a84 84 0 01-22 51.3C357.86 284.28 341.06 292 323.67 292zm55.81-74zm-215.66 77.36c-29.76 0-55.93-27.51-58.33-61.33-1.23-17.32 4.15-33.33 15.17-45.08s26.22-18 43.15-18 32.12 6.44 43.07 18.14 16.5 27.82 15.25 45c-2.44 33.77-28.6 61.27-58.31 61.27zm256.55 59.92c-1.59-4.7-5.46-9.71-13.22-14.46-23.46-14.33-52.32-21.91-83.48-21.91-30.57 0-60.23 7.9-83.53 22.25-26.25 16.17-43.89 39.75-51 68.18-1.68 6.69-4.13 19.14-1.51 26.11a192.18 192.18 0 00232.75-80.17zm-256.74 46.09c7.07-28.21 22.12-51.73 45.47-70.75a8 8 0 00-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88-23.82 0-49.11 6.45-68.14 18.17-5.4 3.33-10.7 4.61-14.78 5.75a192.84 192.84 0 0077.78 86.64l1.79-.14a102.82 102.82 0 013.16-20.02z" } }] })(props);
}
function IoPeopleCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm69.3 96.17a72.5 72.5 0 11-72.6 72.5 72.55 72.55 0 0172.6-72.5zm-155.1 26.36a59.32 59.32 0 11-59.4 59.32 59.35 59.35 0 0159.4-59.32zm-75.85 155c24.5-13.29 55.87-19.94 75.85-19.94 15 0 34.32 3 53.33 10.2a133.05 133.05 0 00-34 27.11c-13.19 15-20.76 32.92-20.76 50.83v15a177.06 177.06 0 01-74.42-83.15zM256 432a175.12 175.12 0 01-59.4-10.33v-27.05c0-52.59 85.75-79.09 128.7-79.09 23 0 58.38 7.63 86.21 22.81A176.14 176.14 0 01256 432z" } }] })(props);
}
function IoPeopleCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm-3.68 152.11c.21-1.2.44-2.4.71-3.59a66.46 66.46 0 0116.29-31.21c12.89-13.73 31.16-21.31 51.45-21.31a74.05 74.05 0 0125.06 4.26 66.69 66.69 0 0126.27 17.2 68.15 68.15 0 0118 42.14 78.46 78.46 0 010 11.4 86.19 86.19 0 01-8.2 31q-.76 1.59-1.59 3.15c-1.11 2.07-2.3 4.1-3.58 6.06a79.47 79.47 0 01-8.63 11c-13.12 14-29.92 21.73-47.31 21.73a59.61 59.61 0 01-19.17-3.18 63.47 63.47 0 01-6.1-2.43 70.76 70.76 0 01-22.07-16.12 83.76 83.76 0 01-22-51.32q-.27-3.88-.18-7.68a75.62 75.62 0 011.05-11.08zm-149.73 24.34a59.87 59.87 0 015.2-20.64 56.76 56.76 0 012.78-5.3 54.49 54.49 0 017.19-9.56 55.62 55.62 0 0114-10.82 56.84 56.84 0 018.11-3.64 63.85 63.85 0 0133.35-2.39 57 57 0 0130.78 17 57.86 57.86 0 0115.41 38.62c.05 2.11 0 4.23-.15 6.38a71.58 71.58 0 01-6 23.84 69.49 69.49 0 01-5.73 10.42 65.39 65.39 0 01-15.76 16.57c-1.5 1.07-3.06 2.07-4.67 3.07a54.21 54.21 0 01-10 4.65 49.31 49.31 0 01-16.2 2.76c-.93 0-1.86 0-2.78-.08a47.6 47.6 0 01-5.48-.62 51.19 51.19 0 01-5.35-1.23 53.54 53.54 0 01-7.72-2.89c-.84-.39-1.66-.8-2.48-1.23-18-9.49-31.57-29.16-34.23-52.12-.12-1.05-.22-2.1-.29-3.16a66.59 66.59 0 01.02-9.63zm53.92 178.6a177.27 177.27 0 01-61.94-70.65 4 4 0 011.62-5.26C117.67 316.69 141.4 311 163.82 311c17 0 30.7 2 42.69 5.88a8 8 0 012.59 13.77c-23.35 19-38.4 42.54-45.47 70.75a2.77 2.77 0 01-4.22 1.65zM256 432a175.12 175.12 0 01-65.7-12.72 4 4 0 01-2.4-4.46c.4-2.05.84-3.92 1.23-5.48 7.12-28.43 24.76-52 51-68.18 23.29-14.35 53-22.25 83.52-22.25 31.16 0 60 7.58 83.48 21.91a2.72 2.72 0 01.91 3.67A176.1 176.1 0 01256 432z" } }, { "tag": "path", "attr": { "d": "M161 295.28a47.6 47.6 0 01-5.48-.62 47.6 47.6 0 005.48.62zm-26.36-117.15a55.62 55.62 0 00-14 10.82 54.49 54.49 0 00-7.19 9.56 54.49 54.49 0 017.19-9.56 55.62 55.62 0 0114-10.82zm81.53 79.76a71.58 71.58 0 006-23.84c.15-2.15.2-4.27.15-6.38q.08 3.15-.15 6.38a71.58 71.58 0 01-6 23.84zm-81.53-79.76a56.84 56.84 0 018.11-3.64 56.84 56.84 0 00-8.11 3.64zm15.57 115.3a53.54 53.54 0 01-7.72-2.89 53.54 53.54 0 007.72 2.89zm-44.43-56.24c2.66 23 16.26 42.63 34.23 52.12-18.01-9.49-31.57-29.16-34.23-52.12zM254.34 219a83.76 83.76 0 0022 51.32 70.76 70.76 0 0022.07 16.12 70.76 70.76 0 01-22.07-16.12 83.76 83.76 0 01-22-51.32q-.27-3.88-.18-7.68-.09 3.75.18 7.68zm50.16 69.82a63.47 63.47 0 01-6.1-2.43 63.47 63.47 0 006.1 2.43zm-48.57-92.28a66.46 66.46 0 0116.29-31.21 66.46 66.46 0 00-16.29 31.21zM375 165.46a68.15 68.15 0 0118 42.14 68.15 68.15 0 00-18-42.14 66.69 66.69 0 00-26.27-17.2 66.69 66.69 0 0126.27 17.2zM393 219a86.19 86.19 0 01-8.2 31 86.19 86.19 0 008.2-31zm-138.84-7.73a75.62 75.62 0 011.06-11.14 75.62 75.62 0 00-1.06 11.14zm129.03 41.89zm-176.31-64.11a57.86 57.86 0 0115.41 38.62 57.86 57.86 0 00-15.41-38.62 57 57 0 00-30.78-17 57 57 0 0130.78 17zM190 288a54.21 54.21 0 01-10 4.65 54.21 54.21 0 0010-4.65zm-84.51-63.55a59.87 59.87 0 015.2-20.64 59.87 59.87 0 00-5.2 20.64zm89.19 60.43C193.17 286 191.61 287 190 288c1.61-1 3.17-2 4.68-3.12zm21.49-26.99a69.49 69.49 0 01-5.73 10.42 69.49 69.49 0 005.73-10.42zm-105.48-54.08a56.76 56.76 0 012.78-5.3 56.76 56.76 0 00-2.78 5.3zm83.99 81.07a65.39 65.39 0 0015.76-16.57 65.39 65.39 0 01-15.76 16.57z" } }] })(props);
}
function IoPeopleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" } }] })(props);
}
function IoPeopleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "152", "cy": "184", "r": "72" } }, { "tag": "path", "attr": { "d": "M234 296c-28.16-14.3-59.24-20-82-20-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93 11.17-12.68 26.81-24.45 46-34z" } }, { "tag": "path", "attr": { "d": "M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96z" } }, { "tag": "circle", "attr": { "cx": "340", "cy": "168", "r": "88" } }] })(props);
}
function IoPeople(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zm65.83 264H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zm65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z" } }] })(props);
}
function IoPersonAddOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M88 176v112m56-56H32" } }] })(props);
}
function IoPersonAddSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z" } }, { "tag": "circle", "attr": { "cx": "288", "cy": "144", "r": "112" } }, { "tag": "path", "attr": { "d": "M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" } }] })(props);
}
function IoPersonAdd(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M288 256c52.79 0 99.43-49.71 104-110.82 2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256zm207.38 183.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 00112 480h352a30.94 30.94 0 0024.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11zM104 288v-40h40a16 16 0 000-32h-40v-40a16 16 0 00-32 0v40H32a16 16 0 000 32h40v40a16 16 0 0032 0z" } }] })(props);
}
function IoPersonCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" } }, { "tag": "path", "attr": { "d": "M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" } }] })(props);
}
function IoPersonCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z" } }] })(props);
}
function IoPersonCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z" } }] })(props);
}
function IoPersonOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" } }] })(props);
}
function IoPersonRemoveOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M144 232H32" } }] })(props);
}
function IoPersonRemoveSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 214h144v36H16z" } }, { "tag": "circle", "attr": { "cx": "288", "cy": "144", "r": "112" } }, { "tag": "path", "attr": { "d": "M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" } }] })(props);
}
function IoPersonRemove(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M288 256c52.79 0 99.43-49.71 104-110.82 2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256zm207.38 183.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 00112 480h352a30.94 30.94 0 0024.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11zM144 216H32a16 16 0 000 32h112a16 16 0 000-32z" } }] })(props);
}
function IoPersonSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" } }] })(props);
}
function IoPerson(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z" } }] })(props);
}
function IoPhoneLandscapeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "256", "height": "480", "x": "128", "y": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48", "transform": "rotate(-90 256 256)" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M16 336v-24a8 8 0 018-8h0a16 16 0 0016-16v-64a16 16 0 00-16-16h0a8 8 0 01-8-8v-24" } }] })(props);
}
function IoPhoneLandscapeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M0 130v252a18 18 0 0018 18h476a18 18 0 0018-18V130a18 18 0 00-18-18H18a18 18 0 00-18 18zm448 234H64V148h384z" } }] })(props);
}
function IoPhoneLandscape(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M0 176v160a64 64 0 0064 64h384a64 64 0 0064-64V176a64 64 0 00-64-64H64a64 64 0 00-64 64zm448-32a32 32 0 0132 32v160a32 32 0 01-32 32H64a32 32 0 01-32-32v-11.35a7.94 7.94 0 014.75-7.3A32 32 0 0056 288v-64a32 32 0 00-19.25-29.35 7.94 7.94 0 01-4.75-7.3V176a32 32 0 0132-32z" } }, { "tag": "path", "attr": { "d": "M48 176a11.88 11.88 0 004.69 9.53A48 48 0 0172 224v64a48 48 0 01-19.31 38.47A11.88 11.88 0 0048 336a16 16 0 0016 16h384a16 16 0 0016-16V176a16 16 0 00-16-16H64a16 16 0 00-16 16z" } }, { "tag": "path", "attr": { "d": "M0 176v160a64 64 0 0064 64h384a64 64 0 0064-64V176a64 64 0 00-64-64H64a64 64 0 00-64 64zm448-32a32 32 0 0132 32v160a32 32 0 01-32 32H64a32 32 0 01-32-32v-11.35a7.94 7.94 0 014.75-7.3A32 32 0 0056 288v-64a32 32 0 00-19.25-29.35 7.94 7.94 0 01-4.75-7.3V176a32 32 0 0132-32z" } }] })(props);
}
function IoPhonePortraitOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "256", "height": "480", "x": "128", "y": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24" } }] })(props);
}
function IoPhonePortraitSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M382 0H130a18 18 0 00-18 18v476a18 18 0 0018 18h252a18 18 0 0018-18V18a18 18 0 00-18-18zM148 448V64h216v384z" } }] })(props);
}
function IoPhonePortrait(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z" } }, { "tag": "path", "attr": { "d": "M336 48a11.88 11.88 0 00-9.53 4.69A48 48 0 01288 72h-64a48 48 0 01-38.47-19.31A11.88 11.88 0 00176 48a16 16 0 00-16 16v384a16 16 0 0016 16h160a16 16 0 0016-16V64a16 16 0 00-16-16z" } }, { "tag": "path", "attr": { "d": "M336 0H176a64 64 0 00-64 64v384a64 64 0 0064 64h160a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H176a32 32 0 01-32-32V64a32 32 0 0132-32h11.35a7.94 7.94 0 017.3 4.75A32 32 0 00224 56h64a32 32 0 0029.35-19.25 7.94 7.94 0 017.3-4.75H336a32 32 0 0132 32z" } }] })(props);
}
function IoPieChartOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0189.12 330.65" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 48C141.12 48 48 141.12 48 256a207.29 207.29 0 0018.09 85L256 256z" } }] })(props);
}
function IoPieChartSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M58 362.09l-6.51-14.59A224 224 0 01256 32h16v234.37z" } }, { "tag": "path", "attr": { "d": "M304 66.46v220.65L94.62 380.78A208.31 208.31 0 00272 480c114.69 0 208-93.31 208-208 0-103.81-76.45-190.1-176-205.54z" } }] })(props);
}
function IoPieChart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M66.1 357a16 16 0 01-14.61-9.46A224 224 0 01256 32a16 16 0 0116 16v208a16 16 0 01-9.47 14.61l-189.9 84.95A15.93 15.93 0 0166.1 357z" } }, { "tag": "path", "attr": { "d": "M313.59 68.18A8 8 0 00304 76v180a48.07 48.07 0 01-28.4 43.82L103.13 377a8 8 0 00-3.35 11.81 208.42 208.42 0 0048.46 50.41A206.32 206.32 0 00272 480c114.69 0 208-93.31 208-208 0-100.45-71.58-184.5-166.41-203.82z" } }] })(props);
}
function IoPinOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "96", "r": "64", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "d": "M272 164a9 9 0 00-9-9h-14a9 9 0 00-9 9v293.56a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38z" } }, { "tag": "circle", "attr": { "cx": "280", "cy": "72", "r": "24" } }] })(props);
}
function IoPinSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M339 99a83 83 0 10-102 80.8V464l19 32 19-32V179.8A83.28 83.28 0 00339 99zm-59-6a21 21 0 1121-21 21 21 0 01-21 21z" } }] })(props);
}
function IoPin(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 96a80 80 0 10-96 78.39v283.17a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38V174.39A80.13 80.13 0 00336 96zm-56 0a24 24 0 1124-24 24 24 0 01-24 24z" } }] })(props);
}
function IoPintOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M132.43 162c-6.24-34-4.49-45.55-3.07-68.39L132.27 47a16 16 0 0115.94-15h215.57a16 16 0 0115.94 15l2.91 46.61c1.43 22.86 3.19 34.39-3.06 68.45-5.93 32.29-43.71 133.27-43.71 238.32V472a8 8 0 01-8 8H184.12a8 8 0 01-8-8v-71.63c.01-92.47-37.46-204.3-43.69-238.37zm2.78-66h241.58" } }] })(props);
}
function IoPintSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M399 99.29L394 16H118.45L113 99.26c-1.29 19.24-2.23 33.14 3.73 65.66 1.67 9.11 5.22 22.66 9.73 39.82 12.61 48 33.71 128.36 33.71 195.63V496h191.68v-95.62c0-77.09 21.31-153.29 34-198.81 4.38-15.63 7.83-28 9.41-36.62 6.01-32.51 5.07-46.42 3.74-65.66zM146.23 80l2-32h215.52l2 32z" } }] })(props);
}
function IoPint(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M399 99.29c-.15-2.13-.3-4.35-.44-6.68L395.69 46a32 32 0 00-31.91-30H148.21a32 32 0 00-31.91 30l-2.91 46.63c-.14 2.31-.29 4.51-.43 6.62-1.29 19.24-2.23 33.14 3.73 65.66 1.67 9.11 5.22 22.66 9.73 39.82 12.61 48 33.71 128.36 33.71 195.63V472a24 24 0 0024 24h143.74a24 24 0 0024-24v-71.62c0-77.09 21.31-153.29 34-198.81 4.38-15.63 7.83-28 9.41-36.62 5.99-32.51 5.05-46.42 3.72-65.66zm-35-47.54l1.5 24a4 4 0 01-4 4.25h-211a4 4 0 01-4-4.25l1.48-24A4 4 0 01152 48h208a4 4 0 014 3.75z" } }] })(props);
}
function IoPizzaOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M404.76 123.08C358.37 104.18 309.69 96 256 96s-106.1 9-148.9 26.68c-8.08 3.3-15.26 9-10.07 19.5C101.24 150.71 203 375 241.66 455a15.94 15.94 0 0028.72 0l144.05-312.22c3.19-6.9.9-15.4-9.67-19.7z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M436.38 82.68C384.31 62.08 320.17 48 256 48S128.65 60.78 75.48 82.08C70.79 84 62 88.43 64.41 95.88L74.09 120c4 8.2 8.67 8.2 15.06 8.2 1.79 0 4.29-1 7.28-2.18A442.46 442.46 0 01256 96c56.76 0 114.91 12 159.6 30 3.59 1.4 5.59 2.18 7.28 2.18 6.58 0 10.38 2.19 15-8.1L447.65 96c2.01-6-4.99-10.82-11.27-13.32z" } }, { "tag": "circle", "attr": { "cx": "192", "cy": "192", "r": "32" } }, { "tag": "circle", "attr": { "cx": "320", "cy": "208", "r": "32" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "320", "r": "32" } }] })(props);
}
function IoPizzaSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M442.3 67.82C383.92 44.72 317.78 32 256 32c-63.57 0-129.8 12.51-186.56 35.25C49.18 75.48 42 80 42 80l22 44 37.53-16.14C147.58 89.53 199.19 80 256.51 80c57.49 0 108.09 9.23 154.75 28.25L448 124l22-44s-7-4-27.7-12.18z" } }, { "tag": "ellipse", "attr": { "cx": "320.48", "cy": "207.99", "fill": "none", "rx": "31.97", "ry": "32.03", "transform": "rotate(-44.98 320.503 207.996)" } }, { "tag": "ellipse", "attr": { "cx": "192.48", "cy": "191.99", "fill": "none", "rx": "31.97", "ry": "32.03", "transform": "rotate(-44.98 192.49 191.992)" } }, { "tag": "ellipse", "attr": { "cx": "256.48", "cy": "319.99", "fill": "none", "rx": "31.97", "ry": "32.03", "transform": "rotate(-44.98 256.505 320)" } }, { "tag": "path", "attr": { "d": "M409.66 140.85C364.15 122.52 308.16 112 256 112a425 425 0 00-153.7 28.9c-.25.1-9.24 4.23-19 8.71 7.46 16.22 18 39.16 22.2 48.33L256 480l173.74-330.84-19.92-8.24zm-185.25 53.22a32 32 0 11-34-34 32.12 32.12 0 0134 34zm64 128a32 32 0 11-34-34 32.12 32.12 0 0134 34zm64-112a32 32 0 11-34-34 32.12 32.12 0 0134 34z" } }] })(props);
}
function IoPizza(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M441.82 67.83C383.44 44.73 317.3 32 255.56 32 192 32 125.76 44.53 69 67.26 48.7 75.49 45.21 90 48.71 100.82L52.78 111a16 16 0 0021.31 8.69c10.8-4.76 23.93-10.54 27-11.78C145.1 89.64 198.71 80 256 80c57.47 0 108.09 9.24 154.76 28.25 4.42 1.8 14.88 6.42 26.17 11.46a16 16 0 0021.35-8.59L462 102l.34-.9c3.45-10.21.14-25.05-20.52-33.27z" } }, { "tag": "path", "attr": { "d": "M409.18 140.86C363.67 122.53 307.68 112 255.56 112a425 425 0 00-153.74 28.89c-.53.21-2.06.88-4.29 1.88a16 16 0 00-8 21.27c4 8.71 9.42 20.58 15.5 33.89C137.94 270 199.21 404 227.26 462A31.74 31.74 0 00256 480a31.73 31.73 0 0028.76-18.06l.06-.13 137.3-297.57a15.94 15.94 0 00-8.31-21.45c-2.26-.95-3.85-1.61-4.5-1.87zm-215.1 83.07a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85zm64 128a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85zm64-112a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85z" } }] })(props);
}
function IoPlanetOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "160", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoPlanetSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M81 274.71C90.36 363 165.26 432 256 432a174.91 174.91 0 0071.49-15.19c-40.3-16.53-84.05-38.17-127.77-63.36C157 328.86 115.84 301.5 81 274.71zm411.72 64.8c-8.5-11.31-20-23.8-34-37a205.25 205.25 0 01-11 34c28.72 29.5 33.2 45.34 32.17 48.45-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46-6.76-2.08-13.79-4.49a176.76 176.76 0 0019.54-27.25c.17-.29.35-.58.52-.88A175.39 175.39 0 00432 256a178.87 178.87 0 00-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 00-106.4 35.89 177.4 177.4 0 00-45.83 51.84c-.16.29-.34.58-.51.87a175.48 175.48 0 00-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14-29.57-30.26-33.09-45.61-32.16-48.45 2.16-2.43 18.1-6.54 58.13 3.55a209.88 209.88 0 0124-26.56c-18.86-5.61-35.79-9.35-50.05-11C33.41 89.47 13.3 95.52 4.35 111c-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64 7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19 9.09-15.62 4.08-36.32-14.86-61.5z" } }] })(props);
}
function IoPlanet(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M96.85 286.62a8 8 0 00-12.53 8.25C102.07 373.28 172.3 432 256 432a175.31 175.31 0 0052.41-8 8 8 0 00.79-15 1120 1120 0 01-109.48-55.61 1126.24 1126.24 0 01-102.87-66.77zm395.87 52.89c-4.19-5.58-9.11-11.44-14.7-17.53a15.83 15.83 0 00-26.56 5.13c0 .16-.11.31-.17.47a15.75 15.75 0 003.15 16.06c22.74 25 26.42 38.51 25.48 41.36-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46-6.76-2.08-13.79-4.49a176.76 176.76 0 0019.54-27.25c.17-.29.35-.58.52-.88A175.39 175.39 0 00432 256a178.87 178.87 0 00-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 00-106.4 35.89 177.4 177.4 0 00-45.83 51.84c-.16.29-.34.58-.51.87a175.48 175.48 0 00-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14-29.57-30.26-33.09-45.61-32.16-48.45 2-2.23 15.54-5.87 48.62 1.31A15.82 15.82 0 0096.22 123l.36-.44a15.74 15.74 0 00-8.67-25.43A237.38 237.38 0 0064.13 93c-30.72-3.53-50.83 2.52-59.78 18-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64 7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19 9.09-15.62 4.08-36.32-14.86-61.5z" } }] })(props);
}
function IoPlayBackCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z" } }, { "tag": "path", "attr": { "d": "M117.23 246.7l114.45-69.14a10.78 10.78 0 0116.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0116.32 9.31v138.26a10.78 10.78 0 01-16.32 9.31L248 271.81v53.32a10.78 10.78 0 01-16.32 9.31L117.23 265.3a10.89 10.89 0 010-18.6z" } }] })(props);
}
function IoPlayBackCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm63.47 0L248 168v72.16l120-72.48v176.45l-120-72.32v71.44z" } }] })(props);
}
function IoPlayBackCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm69.23-9.3l114.45-69.14a10.78 10.78 0 0116.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0116.32 9.31v138.26a10.78 10.78 0 01-16.32 9.31L248 271.81v53.32a10.78 10.78 0 01-16.32 9.31L117.23 265.3a10.89 10.89 0 010-18.6z" } }] })(props);
}
function IoPlayBackOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M480 145.52v221c0 13.28-13 21.72-23.63 15.35L267.5 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113C467 123.8 480 132.24 480 145.52zm-228.57 0v221c0 13.28-13 21.72-23.63 15.35L38.93 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113c10.64-6.4 23.63 2.04 23.63 15.32z" } }] })(props);
}
function IoPlayBackSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 400L256 256l240-144v288zm-240 0L16 256l240-144v288z" } }] })(props);
}
function IoPlayBack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M30.71 229.47l188.87-113a30.54 30.54 0 0131.09-.39 33.74 33.74 0 0116.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0131.09-.39A33.74 33.74 0 01496 145.52v221A33.73 33.73 0 01479.24 396a30.54 30.54 0 01-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 01250.67 396a30.54 30.54 0 01-31.09-.39l-188.87-113a31.27 31.27 0 010-53z" } }] })(props);
}
function IoPlayCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "d": "M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z" } }] })(props);
}
function IoPlayCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z" } }] })(props);
}
function IoPlayCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.77 217.3l-114.45 69.14a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31l114.45 69.14a10.89 10.89 0 010 18.6z" } }] })(props);
}
function IoPlayForwardCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "d": "M394.77 246.7l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31L264 271.81v53.32a10.78 10.78 0 0016.32 9.31l114.45-69.14a10.89 10.89 0 000-18.6z" } }] })(props);
}
function IoPlayForwardCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm8 295.25v-71.44l-120 72.32V167.71l120 72.48V168l136.53 88z" } }] })(props);
}
function IoPlayForwardCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm138.77 217.3l-114.45 69.14a10.78 10.78 0 01-16.32-9.31v-53.32l-103.68 62.63a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31L264 240.19v-53.32a10.78 10.78 0 0116.32-9.31l114.45 69.14a10.89 10.89 0 010 18.6z" } }] })(props);
}
function IoPlayForwardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M32 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113C45 123.8 32 132.24 32 145.52zm228.57 0v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113c-10.64-6.47-23.63 1.97-23.63 15.25z" } }] })(props);
}
function IoPlayForwardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 400l240-144L16 112v288zm240 0l240-144-240-144v288z" } }] })(props);
}
function IoPlayForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M481.29 229.47l-188.87-113a30.54 30.54 0 00-31.09-.39 33.74 33.74 0 00-16.76 29.47v79.05L63.85 116.44a30.54 30.54 0 00-31.09-.39A33.74 33.74 0 0016 145.52v221A33.74 33.74 0 0032.76 396a30.54 30.54 0 0031.09-.39L244.57 287.4v79.08A33.74 33.74 0 00261.33 396a30.54 30.54 0 0031.09-.39l188.87-113a31.27 31.27 0 000-53z" } }] })(props);
}
function IoPlayOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" } }] })(props);
}
function IoPlaySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M96 448l320-192L96 64v384z" } }] })(props);
}
function IoPlaySkipBackCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z" } }, { "tag": "path", "attr": { "d": "M192 176a16 16 0 0116 16v53l111.68-67.46a10.78 10.78 0 0116.32 9.33v138.26a10.78 10.78 0 01-16.32 9.31L208 267v53a16 16 0 01-32 0V192a16 16 0 0116-16z" } }] })(props);
}
function IoPlaySkipBackCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm128-80h32v69l128-77.53v176.9L208 267v69h-32z" } }] })(props);
}
function IoPlaySkipBackCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm128-64a16 16 0 0132 0v53l111.68-67.46a10.78 10.78 0 0116.32 9.33v138.26a10.78 10.78 0 01-16.32 9.31L208 267v53a16 16 0 01-32 0z" } }] })(props);
}
function IoPlaySkipBackOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M400 111v290c0 17.44-17 28.52-31 20.16L121.09 272.79c-12.12-7.25-12.12-26.33 0-33.58L369 90.84c14-8.36 31 2.72 31 20.16z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M112 80v352" } }] })(props);
}
function IoPlaySkipBackSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z" } }] })(props);
}
function IoPlaySkipBack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M112 64a16 16 0 0116 16v136.43L360.77 77.11a35.13 35.13 0 0135.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 01-35.77-.45L128 295.57V432a16 16 0 01-32 0V80a16 16 0 0116-16z" } }] })(props);
}
function IoPlaySkipForwardCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "d": "M320 176a16 16 0 00-16 16v53l-111.68-67.44a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31L304 267v53a16 16 0 0032 0V192a16 16 0 00-16-16z" } }] })(props);
}
function IoPlaySkipForwardCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 288h-32v-69l-128 77.37V167.49L304 245v-69h32z" } }] })(props);
}
function IoPlaySkipForwardCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 272a16 16 0 01-32 0v-53l-111.68 67.44a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31L304 245v-53a16 16 0 0132 0z" } }] })(props);
}
function IoPlaySkipForwardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M400 80v352" } }] })(props);
}
function IoPlaySkipForwardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z" } }] })(props);
}
function IoPlaySkipForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M400 64a16 16 0 00-16 16v136.43L151.23 77.11a35.13 35.13 0 00-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0035.77-.45L384 295.57V432a16 16 0 0032 0V80a16 16 0 00-16-16z" } }] })(props);
}
function IoPlay(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z" } }] })(props);
}
function IoPodiumOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M32 160v296a8 8 0 008 8h136V160a16 16 0 00-16-16H48a16 16 0 00-16 16zM320 48H192a16 16 0 00-16 16v400h160V64a16 16 0 00-16-16zm144 160H352a16 16 0 00-16 16v240h136a8 8 0 008-8V224a16 16 0 00-16-16z" } }] })(props);
}
function IoPodiumSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M160 32h192v448H160zm224 160h112v288H384zM16 128h112v352H16z" } }] })(props);
}
function IoPodium(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M320 32H192a32 32 0 00-32 32v412a4 4 0 004 4h184a4 4 0 004-4V64a32 32 0 00-32-32zm144 160h-72a8 8 0 00-8 8v272a8 8 0 008 8h80a24 24 0 0024-24V224a32 32 0 00-32-32zM48 128a32 32 0 00-32 32v296a24 24 0 0024 24h80a8 8 0 008-8V136a8 8 0 00-8-8z" } }] })(props);
}
function IoPowerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M378 108a191.41 191.41 0 0170 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0169-148m123-44v192" } }] })(props);
}
function IoPowerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 464c-114.69 0-208-93.23-208-207.82a207.44 207.44 0 0174.76-160.13l16.9-14 28.17 33.72-16.9 14A163.72 163.72 0 0092 256.18c0 90.39 73.57 163.93 164 163.93s164-73.54 164-163.93a163.38 163.38 0 00-59.83-126.36l-17-14 28-33.82 17 14A207.13 207.13 0 01464 256.18C464 370.77 370.69 464 256 464z" } }, { "tag": "path", "attr": { "d": "M234 48h44v224h-44z" } }] })(props);
}
function IoPower(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 464c-114.69 0-208-93.47-208-208.35 0-62.45 27.25-121 74.76-160.55a22 22 0 1128.17 33.8C113.48 160.1 92 206.3 92 255.65 92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 00360.17 129a22 22 0 1128-33.92A207.88 207.88 0 01464 255.65C464 370.53 370.69 464 256 464z" } }, { "tag": "path", "attr": { "d": "M256 272a22 22 0 01-22-22V70a22 22 0 0144 0v180a22 22 0 01-22 22z" } }] })(props);
}
function IoPricetagOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M435.25 48h-122.9a14.46 14.46 0 00-10.2 4.2L56.45 297.9a28.85 28.85 0 000 40.7l117 117a28.85 28.85 0 0040.7 0L459.75 210a14.46 14.46 0 004.2-10.2v-123a28.66 28.66 0 00-28.7-28.8z" } }, { "tag": "path", "attr": { "d": "M384 160a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoPricetagSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M304 32L16 320l176 176 288-288V32zm80 128a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoPricetag(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M467 45.2A44.45 44.45 0 00435.29 32H312.36a30.63 30.63 0 00-21.52 8.89L45.09 286.59a44.82 44.82 0 000 63.32l117 117a44.83 44.83 0 0063.34 0l245.65-245.6A30.6 30.6 0 00480 199.8v-123a44.24 44.24 0 00-13-31.6zM384 160a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoPricetagsOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z" } }, { "tag": "path", "attr": { "d": "M352 144a32 32 0 1132-32 32 32 0 01-32 32z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M230 480l262-262a13.81 13.81 0 004-10V80" } }] })(props);
}
function IoPricetagsSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M288 16L0 304l176 176 288-288V16zm80 128a32 32 0 1132-32 32 32 0 01-32 32z" } }, { "tag": "path", "attr": { "d": "M480 64v144L216.9 471.1 242 496l270-272V64h-32z" } }] })(props);
}
function IoPricetags(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 183.8v-123A44.66 44.66 0 00403.29 16H280.36a30.62 30.62 0 00-21.51 8.89L13.09 270.58a44.86 44.86 0 000 63.34l117 117a44.84 44.84 0 0063.33 0l245.69-245.61A30.6 30.6 0 00448 183.8zM352 144a32 32 0 1132-32 32 32 0 01-32 32z" } }, { "tag": "path", "attr": { "d": "M496 64a16 16 0 00-16 16v127.37L218.69 468.69a16 16 0 1022.62 22.62l262-262A29.84 29.84 0 00512 208V80a16 16 0 00-16-16z" } }] })(props);
}
function IoPrintOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24" } }, { "tag": "rect", "attr": { "width": "256", "height": "208", "x": "128", "y": "240", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "24.32", "ry": "24.32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" } }, { "tag": "circle", "attr": { "cx": "392", "cy": "184", "r": "24" } }] })(props);
}
function IoPrintSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M400 96V56a8 8 0 00-8-8H120a8 8 0 00-8 8v40" } }, { "tag": "rect", "attr": { "width": "208", "height": "160", "x": "152", "y": "264", "fill": "none", "rx": "4", "ry": "4" } }, { "tag": "rect", "attr": { "width": "208", "height": "160", "x": "152", "y": "264", "fill": "none", "rx": "4", "ry": "4" } }, { "tag": "path", "attr": { "d": "M408 112H104a56 56 0 00-56 56v208a8 8 0 008 8h56v72a8 8 0 008 8h272a8 8 0 008-8v-72h56a8 8 0 008-8V168a56 56 0 00-56-56zm-48 308a4 4 0 01-4 4H156a4 4 0 01-4-4V268a4 4 0 014-4h200a4 4 0 014 4zm34-212.08a24 24 0 1122-22 24 24 0 01-22 22z" } }] })(props);
}
function IoPrint(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M408 112H106a58 58 0 00-58 58v158a56 56 0 0056 56h8v39.68A40.32 40.32 0 00152.32 464h207.36A40.32 40.32 0 00400 423.68V384h8a56 56 0 0056-56V168a56 56 0 00-56-56zm-40 311.68a8.35 8.35 0 01-8.32 8.32H152.32a8.35 8.35 0 01-8.32-8.32V264.32a8.35 8.35 0 018.32-8.32h207.36a8.35 8.35 0 018.32 8.32zm26-215.76a24 24 0 1122-22 24 24 0 01-22 22zM344 48H168a56.09 56.09 0 00-55.42 48h286.84A56.09 56.09 0 00344 48z" } }] })(props);
}
function IoPrismOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M229.73 45.88L37.53 327.79a31.79 31.79 0 0011.31 46L241 476.26a31.77 31.77 0 0029.92 0l192.2-102.51a31.79 31.79 0 0011.31-46L282.27 45.88a31.8 31.8 0 00-52.54 0zM256 32v448" } }] })(props);
}
function IoPrismSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 16L16 352l240 144 240-144zm-20 96.82v324.53L73.73 340z" } }] })(props);
}
function IoPrism(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M487.83 319.44L295.63 36.88a48 48 0 00-79.26 0L24.17 319.44a47.1 47.1 0 0016.93 68.13l192.2 102.75a48.05 48.05 0 0045.4 0l192.2-102.75a47.1 47.1 0 0016.93-68.13zm-431.26 41a16.12 16.12 0 01-8-10.38 16.8 16.8 0 012.37-13.62L232.66 69.26c2.18-3.21 7.34-1.72 7.34 2.13v374c0 5.9-6.54 9.63-11.87 6.78z" } }] })(props);
}
function IoPulseOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 320h64l64-256 64 384 64-224 32 96h64" } }, { "tag": "circle", "attr": { "cx": "432", "cy": "320", "r": "32", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoPulseSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M426 266a54.07 54.07 0 00-49.3 32h-24.84l-27-81a22 22 0 00-42 .92l-37.2 130.2-48-281.74a22 22 0 00-43-1.72L94.82 298H32v44h80a22 22 0 0021.34-16.66L171.69 172l46.61 273.62A22 22 0 00238.76 464H240a22 22 0 0021.15-16l44.47-149.62 9.51 28.62A22 22 0 00336 342h40.7a54 54 0 1049.3-76z" } }] })(props);
}
function IoPulse(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 272a48.09 48.09 0 00-45.25 32h-39.22l-28.35-85.06a16 16 0 00-30.56.66l-44.51 155.76-52.33-314a16 16 0 00-31.3-1.25L99.51 304H48a16 16 0 000 32h64a16 16 0 0015.52-12.12l45.34-181.37 51.36 308.12A16 16 0 00239.1 464h.91a16 16 0 0015.37-11.6l49.8-174.28 15.64 46.94A16 16 0 00336 336h50.75A48 48 0 10432 272z" } }] })(props);
}
function IoPushOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 336h40a40 40 0 0040-40V88a40 40 0 00-40-40H136a40 40 0 00-40 40v208a40 40 0 0040 40h40" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 240l80-80 80 80m-80 224V176" } }] })(props);
}
function IoPushSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M272 352V204.63l64 64L358.63 246 256 143.37 153.37 246 176 268.63l64-64V352H92a12 12 0 01-12-12V44a12 12 0 0112-12h328a12 12 0 0112 12v296a12 12 0 01-12 12zm-32 0h32v128h-32z" } }] })(props);
}
function IoPush(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M376 352H272V198.63l52.69 52.68a16 16 0 0022.62-22.62l-80-80a16 16 0 00-22.62 0l-80 80a16 16 0 0022.62 22.62L240 198.63V352H136a56.06 56.06 0 01-56-56V88a56.06 56.06 0 0156-56h240a56.06 56.06 0 0156 56v208a56.06 56.06 0 01-56 56zM272 464a16 16 0 01-32 0V352h32z" } }] })(props);
}
function IoQrCodeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "80", "height": "80", "x": "336", "y": "336", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "64", "height": "64", "x": "272", "y": "272", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "64", "height": "64", "x": "416", "y": "416", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "48", "height": "48", "x": "432", "y": "272", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "48", "height": "48", "x": "272", "y": "432", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "336", "y": "96", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "176", "height": "176", "x": "288", "y": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "96", "y": "96", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "176", "height": "176", "x": "48", "y": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }, { "tag": "rect", "attr": { "width": "80", "height": "80", "x": "96", "y": "336", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "176", "height": "176", "x": "48", "y": "288", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }] })(props);
}
function IoQrCodeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 336h80v80h-80zm-64-64h64v64h-64zm144 144h64v64h-64zm16-144h48v48h-48zM272 432h48v48h-48zm64-336h80v80h-80z" } }, { "tag": "path", "attr": { "d": "M480 240H272V32h208zm-164-44h120V76H316zM96 96h80v80H96z" } }, { "tag": "path", "attr": { "d": "M240 240H32V32h208zM76 196h120V76H76zm20 140h80v80H96z" } }, { "tag": "path", "attr": { "d": "M240 480H32V272h208zM76 436h120V316H76z" } }] })(props);
}
function IoQrCode(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "80", "height": "80", "x": "336", "y": "336", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "64", "height": "64", "x": "272", "y": "272", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "64", "height": "64", "x": "416", "y": "416", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "48", "height": "48", "x": "432", "y": "272", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "48", "height": "48", "x": "272", "y": "432", "rx": "8", "ry": "8" } }, { "tag": "path", "attr": { "d": "M448 32H304a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zM208 32H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zm32 104H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V304a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8z" } }] })(props);
}
function IoRadioButtonOffOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoRadioButtonOffSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoRadioButtonOff(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }] })(props);
}
function IoRadioButtonOnOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "144" } }] })(props);
}
function IoRadioButtonOnSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "144" } }] })(props);
}
function IoRadioButtonOn(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "144" } }] })(props);
}
function IoRadioOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256.02", "r": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M184.25 192.25a96 96 0 000 127.52m143.52 0a96 96 0 000-127.52m-194.49-50.97a168 168 0 000 229.44m245.44 0a168 168 0 000-229.44M435 416a240.34 240.34 0 000-320M77 96a240.34 240.34 0 000 320" } }] })(props);
}
function IoRadioSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "ellipse", "attr": { "cx": "256", "cy": "256", "rx": "36", "ry": "35.99" } }, { "tag": "path", "attr": { "d": "M188.4 350.8l-14.62-16.44a117.91 117.91 0 010-156.71l14.62-16.43 32.87 29.24-14.62 16.43a73.93 73.93 0 000 98.25l14.62 16.44zm135.2 0l-32.89-29.22 14.62-16.44a73.93 73.93 0 000-98.25l-14.62-16.43 32.87-29.24 14.62 16.43a117.91 117.91 0 010 156.71z" } }, { "tag": "path", "attr": { "d": "M138.24 401.76l-15-16.06a189.85 189.85 0 010-259.4l15-16.07 32.14 30.05-15 16.06a145.88 145.88 0 000 199.32l15 16.06zm235.52 0l-32.14-30 15-16.06a145.88 145.88 0 000-199.32l-15-16.06 32.14-30 15 16.07a189.85 189.85 0 010 259.4z" } }, { "tag": "path", "attr": { "d": "M430.73 447l-32.79-29.33 14.66-16.39a218.2 218.2 0 000-290.56l-14.67-16.38L430.72 65l14.67 16.39a262.18 262.18 0 010 349.22zm-349.46 0L66.6 430.61a262.18 262.18 0 010-349.22L81.28 65l32.79 29.34-14.68 16.38a218.2 218.2 0 000 290.56l14.66 16.39z" } }] })(props);
}
function IoRadio(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "36" } }, { "tag": "path", "attr": { "d": "M190.24 341.77a22 22 0 01-16.46-7.38 118 118 0 010-156.76 22 22 0 1132.87 29.24 74 74 0 000 98.29 22 22 0 01-16.43 36.61zm131.52 0a22 22 0 01-16.43-36.61 74 74 0 000-98.29 22 22 0 1132.87-29.24 118 118 0 010 156.76 22 22 0 01-16.44 7.38z" } }, { "tag": "path", "attr": { "d": "M139.29 392.72a21.92 21.92 0 01-16.08-7 190 190 0 010-259.49 22 22 0 1132.13 30.06 146 146 0 000 199.38 22 22 0 01-16.06 37zm233.42 0a22 22 0 01-16.06-37 146 146 0 000-199.38 22 22 0 1132.13-30.06 190 190 0 010 259.49 21.92 21.92 0 01-16.07 6.95z" } }, { "tag": "path", "attr": { "d": "M429 438a22 22 0 01-16.39-36.67 218.34 218.34 0 000-290.66 22 22 0 0132.78-29.34 262.34 262.34 0 010 349.34A22 22 0 01429 438zm-346 0a21.94 21.94 0 01-16.41-7.33 262.34 262.34 0 010-349.34 22 22 0 0132.78 29.34 218.34 218.34 0 000 290.66A22 22 0 0183 438z" } }] })(props);
}
function IoRainyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M114.61 162.85A16.07 16.07 0 00128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M144 384l-32 48m112-48l-64 96m144-96l-32 48m112-48l-64 96" } }] })(props);
}
function IoRainySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M364 336H130c-29.5 0-54.92-7.83-73.53-22.64C35.23 296.44 24 271.35 24 240.8c0-26.66 10.08-49.8 29.14-66.91 15.24-13.68 36.17-23.21 59-26.84.06 0 .08 0 .09-.05 6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 01256 16c30.23 0 58.48 9.39 81.71 27.17a142.69 142.69 0 0145.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C477 160.11 488 187.71 488 219.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zm19-232.18zM93.82 430.422l49.75-74.626 26.626 17.75-49.751 74.627zm47.996 48.007L223.568 355.8l26.625 17.75-81.751 122.628zm111.995-48.005l49.751-74.626 26.626 17.75-49.751 74.627zm47.997 48.006l81.752-122.627 26.625 17.75-81.751 122.628z" } }] })(props);
}
function IoRainy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 01-11.19-9 142.24 142.24 0 00-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 00-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 01-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28 23.84-21.65 37-51.67 37-84.52 0-31.49-11-59.09-31.74-79.83zM112 448a16 16 0 01-13.3-24.88l32-48a16 16 0 0126.62 17.76l-32 48A16 16 0 01112 448zm48 48a16 16 0 01-13.29-24.88l64-96a16 16 0 0126.62 17.76l-64 96A16 16 0 01160 496zm112-48a16 16 0 01-13.3-24.88l32-48a16 16 0 0126.62 17.76l-32 48A16 16 0 01272 448zm48 48a16 16 0 01-13.3-24.88l64-96a16 16 0 0126.62 17.76l-64 96A16 16 0 01320 496z" } }] })(props);
}
function IoReaderOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "320", "height": "416", "x": "96", "y": "48", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 128h160m-160 80h160m-160 80h80" } }] })(props);
}
function IoReaderSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M80 44v424a12 12 0 0012 12h328a12 12 0 0012-12V44a12 12 0 00-12-12H92a12 12 0 00-12 12zm192 260H160v-32h112zm80-80H160v-32h192zm0-80H160v-32h192z" } }] })(props);
}
function IoReader(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64zM256 304h-80a16 16 0 010-32h80a16 16 0 010 32zm80-80H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z" } }] })(props);
}
function IoReceiptOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 336V48l32 16 32-16 31.94 16 32.37-16L320 64l31.79-16 31.93 16L416 48l32.01 16L480 48v224" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M480 272v112a80 80 0 01-80 80h0a80 80 0 01-80-80v-48H48a15.86 15.86 0 00-16 16c0 64 6.74 112 80 112h288" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M224 144h192m-128 80h128" } }] })(props);
}
function IoReceiptSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 48l-32-16-32 16-32-16-32 16-32-16-32 16-32-16-32 16-48-16v256.05h224V424c0 30.93 33.07 56 64 56h12c30.93 0 52-25.07 52-56V32zM272.5 240l-.5-32h159.5l.5 32zm-64-80l-.5-32h223.5l.5 32z" } }, { "tag": "path", "attr": { "d": "M336 424V320H16v32c0 50.55 5.78 71.62 14.46 87.63C45.19 466.8 71.86 480 112 480h256s-32-20-32-56z" } }] })(props);
}
function IoReceipt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M483.82 32.45a16.28 16.28 0 00-11.23 1.37L448 46.1l-24.8-12.4a16 16 0 00-14.31 0l-25.11 12.41L359 33.7a16 16 0 00-14.36 0L320 46.07l-24.45-12.34a16 16 0 00-14.35-.06L256 46.12l-24.8-12.43a16.05 16.05 0 00-14.33 0L192 46.1l-24.84-12.41a16 16 0 00-19.36 3.94 16.25 16.25 0 00-3.8 10.65V288l.05.05H336a32 32 0 0132 32V424c0 30.93 33.07 56 64 56h12a52 52 0 0052-52V48a16 16 0 00-12.18-15.55zM416 240H288.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 01288 208h127.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 01416 240zm0-80H224.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 01224 128h191.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 01416 160z" } }, { "tag": "path", "attr": { "d": "M336 424v-88a16 16 0 00-16-16H48a32.1 32.1 0 00-32 32.05c0 50.55 5.78 71.57 14.46 87.57C45.19 466.79 71.86 480 112 480h245.68a4 4 0 002.85-6.81C351.07 463.7 336 451 336 424z" } }] })(props);
}
function IoRecordingOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "128", "cy": "256", "r": "96", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "384", "cy": "256", "r": "96", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128 352h256" } }] })(props);
}
function IoRecordingSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M384 138a117.93 117.93 0 00-91.84 192h-72.32A118 118 0 10128 374h256a118 118 0 000-236zM54 256a74 74 0 1174 74 74.09 74.09 0 01-74-74zm330 74a74 74 0 1174-74 74.09 74.09 0 01-74 74z" } }] })(props);
}
function IoRecording(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M380.79 144.05c-59.1 1.65-107.12 49.71-108.79 108.81a111.64 111.64 0 0030.36 79.77A2 2 0 01301 336h-90a2 2 0 01-1.44-3.37A111.64 111.64 0 00240 252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12 112.12 0 0016 255.53C15.75 317.77 67 368 129.24 368h253.52C445 368 496.25 317.77 496 255.53a112.12 112.12 0 00-115.21-111.48z" } }] })(props);
}
function IoRefreshCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "28", "d": "M288 193s12.18-6-32-6a80 80 0 1080 80" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "28", "d": "M256 149l40 40-40 40" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" } }] })(props);
}
function IoRefreshCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208 114.69 0 208-93.31 208-208 0-114.87-93.13-208-208-208zm94 219a94 94 0 11-94-94h4.21l-24-24L256 129.2l59.8 59.8-59.8 59.8-19.8-19.8 27.92-27.92c-2.4-.08-5.12-.08-8.12-.08a66 66 0 1066 66v-14h28z" } }] })(props);
}
function IoRefreshCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208 114.69 0 208-93.31 208-208 0-114.87-93.13-208-208-208zm0 313a94 94 0 010-188h4.21l-14.11-14.1a14 14 0 0119.8-19.8l40 40a14 14 0 010 19.8l-40 40a14 14 0 01-19.8-19.8l18-18c-2.38-.1-5.1-.1-8.1-.1a66 66 0 1066 66 14 14 0 0128 0 94.11 94.11 0 01-94 94z" } }] })(props);
}
function IoRefreshOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M320 146s24.36-12-64-12a160 160 0 10160 160" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 58l80 80-80 80" } }] })(props);
}
function IoRefreshSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M320 146s24.36-12-64-12a160 160 0 10160 160" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 58l80 80-80 80" } }] })(props);
}
function IoRefresh(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M320 146s24.36-12-64-12a160 160 0 10160 160" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 58l80 80-80 80" } }] })(props);
}
function IoReloadCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M341.54 197.85l-11.37-13.23a103.37 103.37 0 1022.71 105.84" } }, { "tag": "path", "attr": { "d": "M367.32 162a8.44 8.44 0 00-6 2.54l-59.54 59.54a8.61 8.61 0 006.09 14.71h59.54a8.62 8.62 0 008.62-8.62v-59.56a8.61 8.61 0 00-8.68-8.63z" } }] })(props);
}
function IoReloadCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm120 190.77h-89l36.88-36.88-5.6-6.51a87.38 87.38 0 10-62.94 148 87.55 87.55 0 0082.42-58.25l5.37-15.13 30.17 10.67-5.3 15.13a119.4 119.4 0 11-112.62-159.18 118.34 118.34 0 0186.36 36.95l.56.62 4.31 5L376 149.81z" } }] })(props);
}
function IoReloadCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm120 182.15a8.62 8.62 0 01-8.62 8.62h-59.54a8.61 8.61 0 01-6.09-14.71l22.17-22.17-5.6-6.51a87.38 87.38 0 10-62.94 148 87.55 87.55 0 0082.42-58.25A16 16 0 11368 295.8a119.4 119.4 0 11-112.62-159.18 118.34 118.34 0 0186.36 36.95l.56.62 4.31 5 14.68-14.68a8.44 8.44 0 016-2.54 8.61 8.61 0 018.68 8.63z" } }] })(props);
}
function IoReloadOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128" } }, { "tag": "path", "attr": { "d": "M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" } }] })(props);
}
function IoReloadSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128" } }, { "tag": "path", "attr": { "d": "M464 68.45V220a4 4 0 01-4 4H308.45a4 4 0 01-2.83-6.83L457.17 65.62a4 4 0 016.83 2.83z" } }] })(props);
}
function IoReload(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128" } }, { "tag": "path", "attr": { "d": "M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" } }] })(props);
}
function IoRemoveCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 256H176" } }] })(props);
}
function IoRemoveCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm96 224H160v-32h192z" } }] })(props);
}
function IoRemoveCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224H176a16 16 0 010-32h160a16 16 0 010 32z" } }] })(props);
}
function IoRemoveOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 256H112" } }] })(props);
}
function IoRemoveSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 256H112" } }] })(props);
}
function IoRemove(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 256H112" } }] })(props);
}
function IoReorderFourOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M96 304h320M96 208h320M96 112h320M96 400h320" } }] })(props);
}
function IoReorderFourSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "44", "d": "M102 304h308m-308-96h308m-308-96h308M102 400h308" } }] })(props);
}
function IoReorderFour(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "44", "d": "M102 304h308m-308-96h308m-308-96h308M102 400h308" } }] })(props);
}
function IoReorderThreeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M96 256h320M96 176h320M96 336h320" } }] })(props);
}
function IoReorderThreeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "44", "d": "M102 256h308m-308-80h308M102 336h308" } }] })(props);
}
function IoReorderThree(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "44", "d": "M102 256h308m-308-80h308M102 336h308" } }] })(props);
}
function IoReorderTwoOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 304h288m-288-96h288" } }] })(props);
}
function IoReorderTwoSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "44", "d": "M118 304h276m-276-96h276" } }] })(props);
}
function IoReorderTwo(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "44", "d": "M118 304h276m-276-96h276" } }] })(props);
}
function IoRepeatOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 120l48 48-48 48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 168H144a80.24 80.24 0 00-80 80v16m128 128l-48-48 48-48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 344h208a80.24 80.24 0 0080-80v-16" } }] })(props);
}
function IoRepeatSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M320 120l48 48-48 48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M352 168H64v96m128 128l-48-48 48-48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M160 344h288v-96" } }] })(props);
}
function IoRepeat(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 120l48 48-48 48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 168H144a80.24 80.24 0 00-80 80v16m128 128l-48-48 48-48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M160 344h208a80.24 80.24 0 0080-80v-16" } }] })(props);
}
function IoResizeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304" } }] })(props);
}
function IoResizeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304" } }] })(props);
}
function IoResize(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304" } }] })(props);
}
function IoRestaurantOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192m32 32l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112m-40-40l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328" } }] })(props);
}
function IoRestaurantSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M342.7 223.94h14.87a79.48 79.48 0 0056.58-23.44L496 118l-22.22-22.4-83.58 83.58-17.37-17.37 83.58-83.59-23-22.31-83.27 83.26-17.32-17.37 83.58-83.59L394 16l-82.5 81.85a79.49 79.49 0 00-23.44 56.59v14.86l-43.13 43.13L48 16C3.72 70.87 29.87 171.71 79.72 221.57l85.5 85.5c26.55 26.55 31.82 28.92 61.94 16.8 6.49-2.61 8.85-2.32 14.9 3.72l13 12.13c2.93 3 3 3.88 3 9.62v5.54c0 21.08 13.48 33.2 22.36 42.24L384 496l72-72-156.43-156.93z" } }, { "tag": "path", "attr": { "d": "M227.37 354.59c-29.82 6.11-48.11 11.74-83.08-23.23-.56-.56-1.14-1.1-1.7-1.66l-19.5-19.5L16 416l80 80 144-144z" } }] })(props);
}
function IoRestaurant(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M357.57 223.94a79.48 79.48 0 0056.58-23.44l77-76.95c6.09-6.09 6.65-16 .85-22.39a16 16 0 00-23.17-.56l-68.63 68.58a12.29 12.29 0 01-17.37 0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16 16 0 00-.56-23.16A15.62 15.62 0 00440.27 56a16.71 16.71 0 00-11.81 4.9l-68.27 68.26a12.29 12.29 0 01-17.37 0c-4.78-4.78-4.53-12.86.25-17.64l68.33-68.31a16 16 0 00-.56-23.16A15.62 15.62 0 00400.26 16a16.73 16.73 0 00-11.81 4.9L311.5 97.85a79.49 79.49 0 00-23.44 56.59v8.23a16 16 0 01-4.69 11.33l-35.61 35.62a4 4 0 01-5.66 0L68.82 36.33a16 16 0 00-22.58-.06C31.09 51.28 23 72.47 23 97.54c-.1 41.4 21.66 89 56.79 124.08l85.45 85.45A64.79 64.79 0 00211 326a64 64 0 0016.21-2.08 16.24 16.24 0 014.07-.53 15.93 15.93 0 0110.83 4.25l11.39 10.52a16.12 16.12 0 014.6 11.23v5.54a47.73 47.73 0 0013.77 33.65l90.05 91.57.09.1a53.29 53.29 0 0075.36-75.37L302.39 269.9a4 4 0 010-5.66L338 228.63a16 16 0 0111.32-4.69z" } }, { "tag": "path", "attr": { "d": "M211 358a97.32 97.32 0 01-68.36-28.25l-13.86-13.86a8 8 0 00-11.3 0l-85 84.56c-15.15 15.15-20.56 37.45-13.06 59.29a30.63 30.63 0 001.49 3.6C31 484 50.58 496 72 496a55.68 55.68 0 0039.64-16.44L225 365.66a4.69 4.69 0 001.32-3.72v-.26a4.63 4.63 0 00-5.15-4.27A97.09 97.09 0 01211 358z" } }] })(props);
}
function IoReturnDownBackOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 352l-64-64 64-64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 288h294c58.76 0 106-49.33 106-108v-20" } }] })(props);
}
function IoReturnDownBackSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M112 352l-64-64 64-64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M64 288h400V160" } }] })(props);
}
function IoReturnDownBack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 352l-64-64 64-64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 288h294c58.76 0 106-49.33 106-108v-20" } }] })(props);
}
function IoReturnDownForwardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 352l64-64-64-64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 288H154c-58.76 0-106-49.33-106-108v-20" } }] })(props);
}
function IoReturnDownForwardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M400 352l64-64-64-64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 288H48V160" } }] })(props);
}
function IoReturnDownForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 352l64-64-64-64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 288H154c-58.76 0-106-49.33-106-108v-20" } }] })(props);
}
function IoReturnUpBackOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 160l-64 64 64 64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 224h294c58.76 0 106 49.33 106 108v20" } }] })(props);
}
function IoReturnUpBackSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M112 160l-64 64 64 64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M64 224h400v128" } }] })(props);
}
function IoReturnUpBack(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 160l-64 64 64 64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 224h294c58.76 0 106 49.33 106 108v20" } }] })(props);
}
function IoReturnUpForwardOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 160l64 64-64 64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 224H154c-58.76 0-106 49.33-106 108v20" } }] })(props);
}
function IoReturnUpForwardSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M400 160l64 64-64 64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 224H48v128" } }] })(props);
}
function IoReturnUpForward(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 160l64 64-64 64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 224H154c-58.76 0-106 49.33-106 108v20" } }] })(props);
}
function IoRibbonOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "160", "r": "128", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M143.65 227.82L48 400l86.86-.42a16 16 0 0113.82 7.8L192 480l88.33-194.32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M366.54 224L464 400l-86.86-.42a16 16 0 00-13.82 7.8L320 480l-64-140.8" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "160", "r": "64", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoRibbonSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 336c-5.22 0-10.4-.24-15.51-.69a176.12 176.12 0 01-131.29-78.37L20 416h115l58 96 82.53-177.09A177.53 177.53 0 01256 336zm147-79.26a176.9 176.9 0 01-88.18 69.14L273.7 415.5 319 512l58-96h115z" } }, { "tag": "circle", "attr": { "cx": "256.02", "cy": "160", "r": "48" } }, { "tag": "path", "attr": { "d": "M256 16c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144S335.4 16 256 16zm0 224a80 80 0 1180-80 80.09 80.09 0 01-80 80z" } }] })(props);
}
function IoRibbon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M269 335.61q-6.33.47-12.78.47c-5.23 0-10.4-.24-15.51-.69a176.11 176.11 0 01-127.67-72.94 4 4 0 00-6.77.35l-72 129.4c-2.74 5-3.17 11-.28 15.88A16.78 16.78 0 0048.22 416h78a15.28 15.28 0 0113.62 7.33L178.5 488a16.26 16.26 0 0013.75 8c5.94-.33 12.09-4.19 14.56-9.6l66.11-145.15a4 4 0 00-3.92-5.64zm208.64 56.27l-71.53-129.17a4 4 0 00-6.74-.36 176.5 176.5 0 01-78.31 61.42 16.09 16.09 0 00-8.72 8.25l-36.86 81.1a7.92 7.92 0 000 6.6l30.27 66.59c2.45 5.41 8.59 9.36 14.52 9.69a16.3 16.3 0 0013.7-8.12l38.53-64.58c2.89-4.85 8.13-7.33 13.78-7.3h78.77c6.67 0 11.72-3.48 14-10a16.92 16.92 0 00-1.41-14.12z" } }, { "tag": "ellipse", "attr": { "cx": "256.26", "cy": "160", "rx": "48.01", "ry": "48" } }, { "tag": "path", "attr": { "d": "M256.26 16c-79.42 0-144 64.59-144 144s64.61 144 144 144 144-64.6 144-144-64.59-144-144-144zm0 224a80 80 0 1180-80 80.1 80.1 0 01-80 80z" } }] })(props);
}
function IoRocketOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32" } }] })(props);
}
function IoRocketSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z" } }, { "tag": "path", "attr": { "d": "M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z" } }] })(props);
}
function IoRocket(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M328.85 156.79a26.69 26.69 0 1018.88 7.81 26.6 26.6 0 00-18.88-7.81z" } }, { "tag": "path", "attr": { "d": "M477.44 50.06a.29.29 0 010-.09 20.4 20.4 0 00-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A320.7 320.7 0 00169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0027.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 009.9 20.72l31.39 31.41a34.27 34.27 0 0020.71 9.91l2.15.23-7 64.24v.13A25 25 0 00206 480a25.25 25.25 0 004.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a314.78 314.78 0 0033.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53zM370.38 224.94a58.77 58.77 0 110-83.07 58.3 58.3 0 010 83.07z" } }, { "tag": "path", "attr": { "d": "M161.93 386.44a16 16 0 00-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 00-15.16-24.91A61.25 61.25 0 0072 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A357.94 357.94 0 0048 447.59 16 16 0 0064 464h.4a359.87 359.87 0 0036.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.49 60.49 0 0017.39-35.74 16 16 0 00-13.93-17.82z" } }] })(props);
}
function IoRoseOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 128c-18.9 4.25-36.8 8.94-53.7 13.95-40.5 12-75.5 27.15-105.4 41.65-19.3 9.37-26.2 13.51-51.5 28.23-58.4 33.69-93.4 77.4-93.4 142.81C112 428.55 167.6 480 256 480s144-55.81 144-129.72S339 225.24 416 128z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M264 180.19c-19.69-27-38.2-38.69-52.7-46.59C162.6 107.1 96 96 96 96c41.5 43.7 37.2 90.1 32 128 0 0-3.87 32.88 1.91 58.41" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M372 139.15C356.55 102.6 336 64 336 64s-63.32 0-135.69 64m53.17-40.43C221.25 45.81 176 32 176 32c-15.3 20.8-28.79 51.58-34.87 74.17" } }] })(props);
}
function IoRoseSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 112s-17.62 0-30.51 1.39c-19 2-42.06 8-59.73 13.22-35.06 10.39-69.33 23.92-107.85 42.59-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.3C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.32 116-41.43 28.35-26.35 44-63.39 44-104.29 0-25-6.19-47-12.17-68.22-12.59-44.69-23.46-83.29 24.71-144.13C432.75 132.62 448 112 448 112zm-229 7.55C168.47 92.08 104.72 80 80 80c0 0 23.23 28.19 29.15 55.4s6.54 48.61 2.91 88.6c17.94-20.48 40.59-37.15 69.32-53.73l4.48-2.6C208 154.8 216.23 150 236 140.41c2.88-1.4 5.74-2.76 8.58-4.11A170.77 170.77 0 00219 119.55zM345.25 48s-42.53.36-86.12 21.3a280.36 280.36 0 00-32.27 18.27q3.73 1.89 7.4 3.88c3.44 1.87 7.09 4 10.9 6.29a189.7 189.7 0 0131.46 24.16c24.57-10.41 73-26.1 90.77-31.28-8-19.15-22.14-42.62-22.14-42.62zM176 16c-16 10.83-33.24 41.1-33.24 41.1a494.22 494.22 0 0148.92 15.25l17.65-11.56c8.18-5.35 16.55-10.29 25-14.77C234.31 46 202.59 24.17 176 16z" } }] })(props);
}
function IoRose(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M429.55 119.49a16 16 0 00-17.06-7.1c-18.64 4.19-37.06 9-54.73 14.22-35.06 10.39-69.33 23.92-107.85 42.59-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.29C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.33 116-41.43 28.35-26.35 44-63.39 44-104.29 0-25-6.19-47-12.17-68.22-12.59-44.69-23.46-83.29 24.71-144.13a16 16 0 001.01-18.44zm-210.55.06C168.46 92.08 101.46 80.69 98.63 80.22A16 16 0 0081 90.55a16.47 16.47 0 003.79 16.84c31.84 33.78 32.86 68.79 28.65 104.63a4.45 4.45 0 002.5 4.54 4.44 4.44 0 005.08-.9c16.39-16.51 36.37-31.52 60.4-45.39l4.48-2.6C208 154.8 216.23 150 236 140.41l2.69-1.3a4 4 0 00.64-6.83A178.59 178.59 0 00219 119.55zm15.26-28.1c3.44 1.87 7.09 4 10.9 6.29a189.31 189.31 0 0129.57 22.39 4 4 0 004.28.76 672 672 0 0169.65-25q7-2.07 14.08-4a4 4 0 002.53-5.62c-8.27-16.83-14.67-28.9-15.15-29.79A16 16 0 00336 48c-1.91 0-33.28.36-76.87 21.3a279 279 0 00-26.39 14.51 4 4 0 00.22 6.94zm-24.93-30.66c7.3-4.77 14.74-9.22 22.25-13.31a2 2 0 00.24-3.36c-26-19.57-49.73-27-51.15-27.42a16 16 0 00-17.56 5.82 217.63 217.63 0 00-19.28 32.38 2 2 0 001.29 2.81c13.61 3.57 29.4 8.29 45.61 14.29a2 2 0 001.79-.2z" } }] })(props);
}
function IoSadOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "184", "cy": "232", "r": "24" } }, { "tag": "path", "attr": { "d": "M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z" } }, { "tag": "circle", "attr": { "cx": "328", "cy": "232", "r": "24" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoSadSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM328 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm-144 0a24 24 0 11-24 24 23.94 23.94 0 0124-24zm72 80c45.42 0 83.75 29.49 95.72 69.83 1 3.52 2.33 10.17 2.33 10.17H158s1.31-6.69 2.33-10.17C172.11 317.47 210.53 288 256 288z" } }] })(props);
}
function IoSad(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM184 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm-23.67 149.83c12-40.3 50.2-69.83 95.62-69.83s83.62 29.53 95.71 69.83a8 8 0 01-7.82 10.17H168.15a8 8 0 01-7.82-10.17zM328 256a24 24 0 1124-24 23.94 23.94 0 01-24 24z" } }] })(props);
}
function IoSaveOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z" } }] })(props);
}
function IoSaveSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M380.44 32H64a32 32 0 00-32 32v384a32 32 0 0032 32h384a32.09 32.09 0 0032-32V131.56zM112 176v-64h192v64zm223.91 179.76a80 80 0 11-83.66-83.67 80.21 80.21 0 0183.66 83.67z" } }] })(props);
}
function IoSave(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "352", "r": "48" } }] })(props);
}
function IoScaleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "416", "x": "48", "y": "48", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "96" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M388.94 151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48 29.12-132.94 51.4a34.66 34.66 0 00-3.06 48.08l33.32 39.21a26.07 26.07 0 0033.6 5.21c15.92-9.83 40.91-21.64 69.1-21.64s53.18 11.81 69.1 21.64a26.07 26.07 0 0033.6-5.21L392 199.64a34.66 34.66 0 00-3.06-48.08z" } }] })(props);
}
function IoScaleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 32H80a48.05 48.05 0 00-48 48v352a48.05 48.05 0 0048 48h352a48.05 48.05 0 0048-48V80a48.05 48.05 0 00-48-48zm-16.71 165l-52.46 61.73a27.83 27.83 0 01-37.65 4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18 15.6-69.18 24.89a27.84 27.84 0 01-37.65-4.62L96.71 197a32.12 32.12 0 01.42-42c18.93-21.31 72.3-70.87 158.87-70.87S395.94 133.72 414.87 155a32.12 32.12 0 01.42 42z" } }] })(props);
}
function IoScale(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 32H144A112.12 112.12 0 0032 144v224a112.12 112.12 0 00112 112h224a112.12 112.12 0 00112-112V144A112.12 112.12 0 00368 32zm36.21 178l-33.32 39.21A41.76 41.76 0 01339 264.05a42.32 42.32 0 01-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47 10.47-60.69 19.25a41.86 41.86 0 01-54.2-8.46L107.79 210a50.48 50.48 0 014.49-70.27c27.84-25.35 75.37-55.57 143.72-55.57s115.88 30.22 143.72 55.57a50.48 50.48 0 014.49 70.27z" } }] })(props);
}
function IoScanCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M296 352h28a28 28 0 0028-28v-28m0-80v-28a28 28 0 00-28-28h-28m-80 192h-28a28 28 0 01-28-28v-28m0-80v-28a28 28 0 0128-28h28" } }] })(props);
}
function IoScanCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-24 320h-44a44.05 44.05 0 01-44-44v-44h32v44a12 12 0 0012 12h44zm0-192h-44a12 12 0 00-12 12v44h-32v-44a44.05 44.05 0 0144-44h44zm136 148a44.05 44.05 0 01-44 44h-44v-32h44a12 12 0 0012-12v-44h32zm0-92h-32v-44a12 12 0 00-12-12h-44v-32h44a44.05 44.05 0 0144 44z" } }] })(props);
}
function IoScanCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-40 320h-28a44.05 44.05 0 01-44-44v-28a16 16 0 0132 0v28a12 12 0 0012 12h28a16 16 0 010 32zm0-192h-28a12 12 0 00-12 12v28a16 16 0 01-32 0v-28a44.05 44.05 0 0144-44h28a16 16 0 010 32zm152 148a44.05 44.05 0 01-44 44h-28a16 16 0 010-32h28a12 12 0 0012-12v-28a16 16 0 0132 0zm0-108a16 16 0 01-32 0v-28a12 12 0 00-12-12h-28a16 16 0 010-32h28a44.05 44.05 0 0144 44z" } }] })(props);
}
function IoScanOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 448h56a56 56 0 0056-56v-56m0-160v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56m0-160v-56a56 56 0 0156-56h56" } }] })(props);
}
function IoScanSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M388 466h-68v-44h68a34 34 0 0034-34v-68h44v68a78.09 78.09 0 01-78 78zm78-274h-44v-68a34 34 0 00-34-34h-68V46h68a78.09 78.09 0 0178 78zM192 466h-68a78.09 78.09 0 01-78-78v-68h44v68a34 34 0 0034 34h68zM90 192H46v-68a78.09 78.09 0 0178-78h68v44h-68a34 34 0 00-34 34z" } }] })(props);
}
function IoScan(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "44", "d": "M342 444h46a56 56 0 0056-56v-46m0-172v-46a56 56 0 00-56-56h-46M170 444h-46a56 56 0 01-56-56v-46m0-172v-46a56 56 0 0156-56h46" } }] })(props);
}
function IoSchoolOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M32 192L256 64l224 128-224 128L32 192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 240v128l144 80 144-80V240m80 128V192M256 320v128" } }] })(props);
}
function IoSchoolSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z" } }, { "tag": "path", "attr": { "d": "M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z" } }] })(props);
}
function IoSchool(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 368a16 16 0 01-7.94-2.11L108 285.84a8 8 0 00-12 6.94V368a16 16 0 008.23 14l144 80a16 16 0 0015.54 0l144-80a16 16 0 008.23-14v-75.22a8 8 0 00-12-6.94l-140.06 80.05A16 16 0 01256 368z" } }, { "tag": "path", "attr": { "d": "M495.92 190.5v-.11a16 16 0 00-8-12.28l-224-128a16 16 0 00-15.88 0l-224 128a16 16 0 000 27.78l224 128a16 16 0 0015.88 0L461 221.28a2 2 0 013 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 00496 368V192a14.76 14.76 0 00-.08-1.5z" } }] })(props);
}
function IoSearchCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 80a176 176 0 10176 176A176 176 0 00256 80z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M232 160a72 72 0 1072 72 72 72 0 00-72-72z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M283.64 283.64L336 336" } }] })(props);
}
function IoSearchCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm80 294.63l-54.15-54.15a88.08 88.08 0 1122.63-22.63L358.63 336z" } }, { "tag": "circle", "attr": { "cx": "232", "cy": "232", "r": "56" } }] })(props);
}
function IoSearchCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z" } }, { "tag": "circle", "attr": { "cx": "232", "cy": "232", "r": "56" } }] })(props);
}
function IoSearchOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M338.29 338.29L448 448" } }] })(props);
}
function IoSearchSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z" } }] })(props);
}
function IoSearch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" } }] })(props);
}
function IoSendOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" } }] })(props);
}
function IoSendSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 464l480-208L16 48v160l320 48-320 48z" } }] })(props);
}
function IoSend(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z" } }] })(props);
}
function IoServerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "ellipse", "attr": { "cx": "256", "cy": "128", "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "192", "ry": "80" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 214c0 44.18-86 80-192 80S64 258.18 64 214m384 86c0 44.18-86 80-192 80S64 344.18 64 300" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M64 127.24v257.52C64 428.52 150 464 256 464s192-35.48 192-79.24V127.24" } }] })(props);
}
function IoServerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M409.43 389.87C362 410 305.4 421.05 256 421.05s-105.87-11.3-153.44-31.18S48 353.16 48 353.16v38.2c0 31.15 18 43.64 67.32 64.35C153.13 471.59 203.18 480 256 480s102.87-8.41 140.68-24.29C446 435 464 422.51 464 391.36v-38.2s-7.14 16.59-54.57 36.71zM63.69 173.22c11.23 9.84 27.82 19.49 48 27.92 42.48 17.76 96.45 28.37 144.36 28.37s101.88-10.61 144.36-28.37c20.13-8.43 36.72-18.08 47.95-27.92 6.06-5.31 10.85-10.12 13.47-12.85a8 8 0 002.22-5.54v-26.16c-.84-28.79-24.71-54.41-67.21-72.14C358.83 40.71 308.84 32 256 32s-102.83 8.71-140.74 24.53C72.85 74.22 49 99.78 48.05 128.5v26.33a8 8 0 002.21 5.54c2.58 2.73 7.36 7.54 13.43 12.85z" } }, { "tag": "path", "attr": { "d": "M409.43 221.91C365 241 305.4 253.09 256 253.09s-108.87-12.27-153.43-31.18S48 185.2 48 185.2v47.36c.08 7.52 5.5 16.2 15.69 25.13 11.24 9.84 27.82 19.5 48 27.92C154.12 303.38 208.09 314 256 314s101.88-10.6 144.36-28.37c20.13-8.42 36.72-18.08 47.95-27.92 10.25-9 15.68-17.71 15.69-25.27V185.2s-10.13 17.62-54.57 36.71z" } }, { "tag": "path", "attr": { "d": "M409.43 306.38C362 326 305.4 337.56 256 337.56s-109.87-12.8-153.43-31.18S48 269.67 48 269.67v46.25c0 7.55 5.44 16.28 15.69 25.26 11.23 9.84 27.81 19.5 48 27.92 42.48 17.77 96.44 28.37 144.36 28.37s101.88-10.6 144.36-28.37c20.13-8.43 36.72-18.08 47.95-27.92 10.19-8.93 15.61-17.61 15.69-25.13v-46.38s-7.18 17.09-54.62 36.71z" } }] })(props);
}
function IoServer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 428c-52.35 0-111.39-11.61-157.93-31-17.07-7.19-31.69-18.82-43.64-28a4 4 0 00-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28-46.54 19.39-105.57 31-157.92 31zm208-301.49c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73 11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144z" } }, { "tag": "path", "attr": { "d": "M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 00-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73 11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96z" } }, { "tag": "path", "attr": { "d": "M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 00-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71 11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 00-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98z" } }] })(props);
}
function IoSettingsOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" } }] })(props);
}
function IoSettingsSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" } }] })(props);
}
function IoSettings(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "48" } }, { "tag": "path", "attr": { "d": "M470.39 300l-.47-.38-31.56-24.75a16.11 16.11 0 01-6.1-13.33v-11.56a16 16 0 016.11-13.22L469.92 212l.47-.38a26.68 26.68 0 005.9-34.06l-42.71-73.9a1.59 1.59 0 01-.13-.22A26.86 26.86 0 00401 92.14l-.35.13-37.1 14.93a15.94 15.94 0 01-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 01-8.19-11.82l-5.59-39.59-.12-.72A27.22 27.22 0 00298.76 26h-85.52a26.92 26.92 0 00-26.45 22.39l-.09.56-5.57 39.67a16 16 0 01-8.13 11.82 175.21 175.21 0 00-10 5.82 15.92 15.92 0 01-14.43 1.27l-37.13-15-.35-.14a26.87 26.87 0 00-32.48 11.34l-.13.22-42.77 73.95a26.71 26.71 0 005.9 34.1l.47.38 31.56 24.75a16.11 16.11 0 016.1 13.33v11.56a16 16 0 01-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 00-5.9 34.06l42.71 73.9a1.59 1.59 0 01.13.22 26.86 26.86 0 0032.45 11.3l.35-.13 37.07-14.93a15.94 15.94 0 0114.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 018.19 11.82l5.56 39.59.12.72A27.22 27.22 0 00213.24 486h85.52a26.92 26.92 0 0026.45-22.39l.09-.56 5.57-39.67a16 16 0 018.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0114.43-1.27l37.13 14.95.35.14a26.85 26.85 0 0032.48-11.34 2.53 2.53 0 01.13-.22l42.71-73.89a26.7 26.7 0 00-5.89-34.11zm-134.48-40.24a80 80 0 11-83.66-83.67 80.21 80.21 0 0183.66 83.67z" } }] })(props);
}
function IoShapesOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 320H32L184 48l152 272zm-70.68-125.49A144 144 0 11192 320" } }] })(props);
}
function IoShapesSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M363.27 336H4.73L184 16z" } }, { "tag": "path", "attr": { "d": "M336 160a160.54 160.54 0 00-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160z" } }] })(props);
}
function IoShapes(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 336H32a16 16 0 01-14-23.81l152-272a16 16 0 0127.94 0l152 272A16 16 0 01336 336z" } }, { "tag": "path", "attr": { "d": "M336 160a161.07 161.07 0 00-32.57 3.32l74.47 133.27A48 48 0 01336 368H183.33A160 160 0 10336 160z" } }] })(props);
}
function IoShareOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 192h40a40 40 0 0140 40v192a40 40 0 01-40 40H136a40 40 0 01-40-40V232a40 40 0 0140-40h40m160-64l-80-80-80 80m80 193V48" } }] })(props);
}
function IoShareSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M272 176v161h-32V176H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V188a12 12 0 00-12-12zm0-83.37l64 64L358.63 134 256 31.37 153.37 134 176 156.63l64-64V176h32V92.63z" } }] })(props);
}
function IoShareSocialOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "128", "cy": "256", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "384", "cy": "112", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "384", "cy": "400", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M169.83 279.53l172.34 96.94m0-240.94l-172.34 96.94" } }] })(props);
}
function IoShareSocialSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M378 324a69.78 69.78 0 00-48.83 19.91L202 272.41a69.68 69.68 0 000-32.82l127.13-71.5A69.76 69.76 0 10308.87 129l-130.13 73.2a70 70 0 100 107.56L308.87 383A70 70 0 10378 324z" } }] })(props);
}
function IoShareSocial(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M384 336a63.78 63.78 0 00-46.12 19.7l-148-83.27a63.85 63.85 0 000-32.86l148-83.27a63.8 63.8 0 10-15.73-27.87l-148 83.27a64 64 0 100 88.6l148 83.27A64 64 0 10384 336z" } }] })(props);
}
function IoShare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M376 176H272v145a16 16 0 01-32 0V176H136a56.06 56.06 0 00-56 56v192a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V232a56.06 56.06 0 00-56-56zM272 86.63l52.69 52.68a16 16 0 0022.62-22.62l-80-80a16 16 0 00-22.62 0l-80 80a16 16 0 0022.62 22.62L240 86.63V176h32z" } }] })(props);
}
function IoShieldCheckmarkOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M336 176L225.2 304 176 255.8" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z" } }] })(props);
}
function IoShieldCheckmarkSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M479.07 111.36l-.79-12.53-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3-6.59 3C168.69 69.88 132.58 81.1 46.08 96.62l-12.36 2.21-.79 12.53c-3.85 61.11 4.36 118.05 24.43 169.24A349.47 349.47 0 00129 393.11c53.47 56.73 110.24 81.37 121.07 85.73l6 2.41 6-2.41c10.83-4.36 67.6-29 121.07-85.73a349.47 349.47 0 0071.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24zm-252.91 216L153.37 256l22.4-22.86 48.47 47.49 110.13-127.2 24.2 20.94z" } }] })(props);
}
function IoShieldCheckmark(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M479.07 111.36a16 16 0 00-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16 16 0 00-13.18 0C168.69 69.88 132.58 81.1 46.08 96.62a16 16 0 00-13.15 14.74c-3.85 61.11 4.36 118.05 24.43 169.24A349.47 349.47 0 00129 393.11c53.47 56.73 110.24 81.37 121.07 85.73a16 16 0 0012 0c10.83-4.36 67.6-29 121.07-85.73a349.47 349.47 0 0071.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24zm-131 75.11l-110.8 128a16 16 0 01-11.41 5.53h-.66a16 16 0 01-11.2-4.57l-49.2-48.2a16 16 0 1122.4-22.86l37 36.29 99.7-115.13a16 16 0 0124.2 20.94z" } }] })(props);
}
function IoShieldHalfOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z" } }, { "tag": "path", "attr": { "d": "M256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464z" } }] })(props);
}
function IoShieldHalfSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.86 348.86 0 0071.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08 23.11-6.68 77.68-34.42 127.28-87.08a348.86 348.86 0 0071.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64zm161.47 233.93a309.18 309.18 0 01-63.31 99.56C316 406 276.65 428.31 256 437.36V75.8c38.75 17 68.73 28.3 97.93 36.89a613.12 613.12 0 0085.6 18.52c-1.72 60.22-8.36 99.69-22.06 134.72z" } }] })(props);
}
function IoShieldHalf(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48.9 112.37C138.32 96.33 175.29 84.45 256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464c-15.42-6.21-223.3-94.87-207.1-351.63z" } }, { "tag": "path", "attr": { "d": "M256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464z" } }] })(props);
}
function IoShieldOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z" } }] })(props);
}
function IoShieldSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.86 348.86 0 0071.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08 23.11-6.68 77.68-34.42 127.28-87.08a348.86 348.86 0 0071.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64z" } }] })(props);
}
function IoShield(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M479.07 111.35a16 16 0 00-13.15-14.75C379.89 81.18 343.69 69.12 266 34.16c-7.76-2.89-12.57-2.84-20 0-77.69 35-113.89 47-199.92 62.44a16 16 0 00-13.15 14.75c-3.85 61.1 4.34 118 24.36 169.15a348.86 348.86 0 0071.43 112.41c44.67 47.43 94.2 75.12 119.74 85.6a20 20 0 0015.11 0c27-10.92 74.69-37.82 119.71-85.62a348.86 348.86 0 0071.43-112.39c20.02-51.14 28.21-108.05 24.36-169.15z" } }] })(props);
}
function IoShirtOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 00-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0121.29 24.58L112 464h288l-6.8-241.9a24 24 0 0121.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 00-10.57-1.8zm18.75 4.66a80 80 0 01-154.62 0" } }] })(props);
}
function IoShirtSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 42c-33.88 0-64-10-64-10v2a64 64 0 00128 0v-2s-30.12 10-64 10z" } }, { "tag": "path", "attr": { "d": "M352 44c-5.49 47.76-46.79 85-96 85s-90.51-37.24-96-85L16 94l18 114 61.71 7.42c7.08.9 7.1.9 7.1 8.19L96 480h320l-6.81-256.39c-.21-7-.21-7 7.1-8.19L478 208l18-114z" } }] })(props);
}
function IoShirt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 96c33.08 0 60.71-25.78 64-58 .3-3-3-6-6-6a13 13 0 00-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.21 16.21 0 00-5.3-.9h-.06a5.69 5.69 0 00-5.38 6c3.35 32.16 31 58 64 58z" } }, { "tag": "path", "attr": { "d": "M485.29 89.9L356 44.64a4 4 0 00-5.27 3.16 96 96 0 01-189.38 0 4 4 0 00-5.35-3.16L26.71 89.9A16 16 0 0016.28 108l16.63 88a16 16 0 0013.92 12.9l48.88 5.52a8 8 0 017.1 8.19l-7.33 240.9a16 16 0 009.1 14.94A17.49 17.49 0 00112 480h288a17.49 17.49 0 007.42-1.55 16 16 0 009.1-14.94l-7.33-240.9a8 8 0 017.1-8.19l48.88-5.52a16 16 0 0013.92-12.9l16.63-88a16 16 0 00-10.43-18.1z" } }] })(props);
}
function IoShuffleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 304l48 48-48 48m0-288l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416m0-192h-53.19a80 80 0 00-66.56 35.62L288 208" } }] })(props);
}
function IoShuffleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M400 304l48 48-48 48m0-288l48 48-48 48M64 352h128l60-92" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M64 160h128l128 192h96m0-192h-96l-32 48" } }] })(props);
}
function IoShuffle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 304l48 48-48 48m0-288l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416m0-192h-53.19a80 80 0 00-66.56 35.62L288 208" } }] })(props);
}
function IoSkullOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 225.64v99a64 64 0 01-40.23 59.42l-23.68 9.47A32 32 0 00364.6 417l-10 50.14A16 16 0 01338.88 480H173.12a16 16 0 01-15.69-12.86L147.4 417a32 32 0 00-19.49-23.44l-23.68-9.47A64 64 0 0164 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64z" } }, { "tag": "circle", "attr": { "cx": "168", "cy": "280", "r": "40", "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "344", "cy": "280", "r": "40", "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 336l-16 48h32l-16-48zm0 112v32m-48-32v32m96-32v32" } }] })(props);
}
function IoSkullSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 16C141.31 16 48 109.31 48 224v154.83l82 32.81L146.88 496H192v-64h32v64h16v-64h32v64h16v-64h32v64h45.12L382 411.64l82-32.81V224c0-114.69-93.31-208-208-208zm-88 320a56 56 0 1156-56 56.06 56.06 0 01-56 56zm51.51 64L244 320h24l24.49 80zM344 336a56 56 0 1156-56 56.06 56.06 0 01-56 56zm104 32z" } }] })(props);
}
function IoSkull(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M402 76.94C362.61 37.63 310.78 16 256 16h-.37A208 208 0 0048 224v100.67A79.62 79.62 0 0098.29 399l23.71 9.42a15.92 15.92 0 019.75 11.72l10 50.13A32.09 32.09 0 00173.12 496H184a8 8 0 008-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01224 448v40a8 8 0 008 8 8 8 0 008-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 448v40a8 8 0 008 8 8 8 0 008-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01320 448v40a8 8 0 008 8h10.88a32.09 32.09 0 0031.38-25.72l10-50.14a16 16 0 019.74-11.72l23.71-9.42A79.62 79.62 0 00464 324.67v-99c0-56-22-108.81-62-148.73zM171.66 335.88a56 56 0 1152.22-52.22 56 56 0 01-52.22 52.22zM281 397.25a16.37 16.37 0 01-9.3 2.75h-31.4a16.37 16.37 0 01-9.28-2.75 16 16 0 01-6.6-16.9l15.91-47.6C243 326 247.25 321 254 320.13c8.26-1 14 2.87 17.61 12.22l16 48a16 16 0 01-6.61 16.9zm66.68-61.37a56 56 0 1152.22-52.22 56 56 0 01-52.24 52.22z" } }] })(props);
}
function IoSnowOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 32v448m57.72-400A111.47 111.47 0 01256 96a111.47 111.47 0 01-57.72-16m0 352a112.11 112.11 0 01115.44 0m136.27-288L62.01 368m375.26-150a112.09 112.09 0 01-57.71-100M74.73 294a112.09 112.09 0 0157.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0057.71-100m304.83 176a112.09 112.09 0 00-57.71 100" } }] })(props);
}
function IoSnowSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M447.88 313.27l19.25-10.64-21.28-38.51-19.25 10.64a133.42 133.42 0 00-38.54 32.1L300 256l88.07-50.86a133.42 133.42 0 0038.54 32.1l19.25 10.64 21.28-38.51-19.25-10.64a89.27 89.27 0 01-20.93-16L480 152.05 458 114l-53 30.58a89.07 89.07 0 01-3.42-26.15l.41-22-44-.82-.41 22a133.62 133.62 0 008.49 49.39L278 217.89V116.18a133.52 133.52 0 0047.06-17.33L343.9 87.5l-22.71-37.69-18.84 11.35A89.5 89.5 0 01278 71.27V16h-44v55.27a89.5 89.5 0 01-24.35-10.11l-18.84-11.35L168.1 87.5l18.84 11.35A133.52 133.52 0 00234 116.18v101.71L145.93 167a133.62 133.62 0 008.53-49.43l-.41-22-44 .82.41 22a89.07 89.07 0 01-3.42 26.15L54 114l-22 38.1 53.05 30.64a89.27 89.27 0 01-20.93 16l-19.25 10.63 21.28 38.51 19.25-10.64a133.42 133.42 0 0038.54-32.1L212 256l-88.07 50.86a133.42 133.42 0 00-38.54-32.1l-19.24-10.64-21.28 38.51 19.25 10.64a89.27 89.27 0 0120.93 16L32 360l22 38.1 53.05-30.63a89.07 89.07 0 013.42 26.15l-.41 22 44 .82.41-22a133.62 133.62 0 00-8.54-49.44L234 294.11v101.71a133.52 133.52 0 00-47.06 17.33L168.1 424.5l22.71 37.69 18.84-11.35A89.5 89.5 0 01234 440.73V496h44v-55.27a89.5 89.5 0 0124.35 10.11l18.84 11.35 22.71-37.69-18.84-11.35A133.52 133.52 0 00278 395.82V294.11L366.07 345a133.62 133.62 0 00-8.53 49.43l.41 22 44-.82-.41-22a89.07 89.07 0 013.46-26.19l53 30.63L480 360l-53-30.69a89.27 89.27 0 0120.88-16.04z" } }] })(props);
}
function IoSnow(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M461 349l-34-19.64a89.53 89.53 0 0120.94-16 22 22 0 00-21.28-38.51 133.62 133.62 0 00-38.55 32.1L300 256l88.09-50.86a133.46 133.46 0 0038.55 32.1 22 22 0 1021.28-38.51 89.74 89.74 0 01-20.94-16l34-19.64A22 22 0 10439 125l-34 19.63a89.74 89.74 0 01-3.42-26.15A22 22 0 00380 96h-.41a22 22 0 00-22 21.59 133.61 133.61 0 008.5 49.41L278 217.89V116.18a133.5 133.5 0 0047.07-17.33 22 22 0 00-22.71-37.69A89.56 89.56 0 01278 71.27V38a22 22 0 00-44 0v33.27a89.56 89.56 0 01-24.36-10.11 22 22 0 10-22.71 37.69A133.5 133.5 0 00234 116.18v101.71L145.91 167a133.61 133.61 0 008.52-49.43 22 22 0 00-22-21.59H132a22 22 0 00-21.59 22.41 89.74 89.74 0 01-3.41 26.19L73 125a22 22 0 10-22 38.1l34 19.64a89.74 89.74 0 01-20.94 16 22 22 0 1021.28 38.51 133.62 133.62 0 0038.55-32.1L212 256l-88.09 50.86a133.62 133.62 0 00-38.55-32.1 22 22 0 10-21.28 38.51 89.74 89.74 0 0120.94 16L51 349a22 22 0 1022 38.1l34-19.63a89.74 89.74 0 013.42 26.15A22 22 0 00132 416h.41a22 22 0 0022-21.59 133.61 133.61 0 00-8.5-49.41L234 294.11v101.71a133.5 133.5 0 00-47.07 17.33 22 22 0 1022.71 37.69A89.56 89.56 0 01234 440.73V474a22 22 0 0044 0v-33.27a89.56 89.56 0 0124.36 10.11 22 22 0 0022.71-37.69A133.5 133.5 0 00278 395.82V294.11L366.09 345a133.61 133.61 0 00-8.52 49.43 22 22 0 0022 21.59h.43a22 22 0 0021.59-22.41 89.74 89.74 0 013.41-26.19l34 19.63A22 22 0 10461 349z" } }] })(props);
}
function IoSparklesOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M259.92 262.91L216.4 149.77a9 9 0 00-16.8 0l-43.52 113.14a9 9 0 01-5.17 5.17L37.77 311.6a9 9 0 000 16.8l113.14 43.52a9 9 0 015.17 5.17l43.52 113.14a9 9 0 0016.8 0l43.52-113.14a9 9 0 015.17-5.17l113.14-43.52a9 9 0 000-16.8l-113.14-43.52a9 9 0 01-5.17-5.17zM108 68L88 16 68 68 16 88l52 20 20 52 20-52 52-20-52-20zm318.67 49.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z" } }] })(props);
}
function IoSparklesSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M208 512l-52.38-139.62L16 320l139.62-52.38L208 128l52.38 139.62L400 320l-139.62 52.38zM88 176l-23.57-64.43L0 88l64.43-23.57L88 0l23.57 64.43L176 88l-64.43 23.57zm312 80l-31.11-80.89L288 144l80.89-31.11L400 32l31.11 80.89L512 144l-80.89 31.11z" } }] })(props);
}
function IoSparkles(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M208 512a24.84 24.84 0 01-23.34-16l-39.84-103.6a16.06 16.06 0 00-9.19-9.19L32 343.34a25 25 0 010-46.68l103.6-39.84a16.06 16.06 0 009.19-9.19L184.66 144a25 25 0 0146.68 0l39.84 103.6a16.06 16.06 0 009.19 9.19l103 39.63a25.49 25.49 0 0116.63 24.1 24.82 24.82 0 01-16 22.82l-103.6 39.84a16.06 16.06 0 00-9.19 9.19L231.34 496A24.84 24.84 0 01208 512zm66.85-254.84zM88 176a14.67 14.67 0 01-13.69-9.4l-16.86-43.84a7.28 7.28 0 00-4.21-4.21L9.4 101.69a14.67 14.67 0 010-27.38l43.84-16.86a7.31 7.31 0 004.21-4.21L74.16 9.79A15 15 0 0186.23.11a14.67 14.67 0 0115.46 9.29l16.86 43.84a7.31 7.31 0 004.21 4.21l43.84 16.86a14.67 14.67 0 010 27.38l-43.84 16.86a7.28 7.28 0 00-4.21 4.21l-16.86 43.84A14.67 14.67 0 0188 176zm312 80a16 16 0 01-14.93-10.26l-22.84-59.37a8 8 0 00-4.6-4.6l-59.37-22.84a16 16 0 010-29.86l59.37-22.84a8 8 0 004.6-4.6l22.67-58.95a16.45 16.45 0 0113.17-10.57 16 16 0 0116.86 10.15l22.84 59.37a8 8 0 004.6 4.6l59.37 22.84a16 16 0 010 29.86l-59.37 22.84a8 8 0 00-4.6 4.6l-22.84 59.37A16 16 0 01400 256z" } }] })(props);
}
function IoSpeedometerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 128v32m160 128h-32m-256 0H96m69.49-90.51l-22.63-22.63m203.65 22.63l22.63-22.63" } }] })(props);
}
function IoSpeedometerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C123.46 48 16 156.55 16 290.56a243.3 243.3 0 0060.32 160.87c1.18 1.3 2.25 2.6 3.43 3.79C89.2 464 92.07 464 99.57 464s12.43 0 19.93-8.88C152 416.64 202 400 256 400s104.07 16.71 136.5 55.12C400 464 404.82 464 412.43 464s11.3 0 19.82-8.78c1.22-1.25 2.25-2.49 3.43-3.79A243.3 243.3 0 00496 290.56C496 156.55 388.54 48 256 48zm-16 64h32v64h-32zm-96 192H80v-32h64zm21.49-83.88l-45.25-45.26 22.62-22.62 45.26 45.25zM278.6 307.4a31 31 0 01-7 7 30.11 30.11 0 01-35-49L320 224zm45.28-109.91l45.26-45.25 22.62 22.62-45.25 45.26zM432 304h-64v-32h64z" } }] })(props);
}
function IoSpeedometer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M425.7 118.25A240 240 0 0076.32 447l.18.2c.33.35.64.71 1 1.05.74.84 1.58 1.79 2.57 2.78a41.17 41.17 0 0060.36-.42 157.13 157.13 0 01231.26 0 41.18 41.18 0 0060.65.06l3.21-3.5.18-.2a239.93 239.93 0 00-10-328.76zM240 128a16 16 0 0132 0v32a16 16 0 01-32 0zM128 304H96a16 16 0 010-32h32a16 16 0 010 32zm48.8-95.2a16 16 0 01-22.62 0l-22.63-22.62a16 16 0 0122.63-22.63l22.62 22.63a16 16 0 010 22.62zm149.3 23.1l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14zm31.72-23.1a16 16 0 01-22.62-22.62l22.62-22.63a16 16 0 0122.63 22.63zm65.88 227.6zM416 304h-32a16 16 0 010-32h32a16 16 0 010 32z" } }] })(props);
}
function IoSquareOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M416 448H96a32.09 32.09 0 01-32-32V96a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v320a32.09 32.09 0 01-32 32z" } }] })(props);
}
function IoSquareSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M48 48h416v416H48z" } }] })(props);
}
function IoSquare(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z" } }] })(props);
}
function IoStarHalfOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" } }, { "tag": "path", "attr": { "d": "M256 48v316L118 464l54-160-140-96h172l52-160z" } }] })(props);
}
function IoStarHalfSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3zM274.63 347.82L256 334.49v-200.1l26 78.91 7.24 22h105.39l-67.32 47.2-19.69 13.81 7.78 22.75 26.26 76.75z" } }] })(props);
}
function IoStarHalf(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" } }, { "tag": "path", "attr": { "d": "M256 48v316L118 464l54-160-140-96h172l52-160z" } }] })(props);
}
function IoStarOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" } }] })(props);
}
function IoStarSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z" } }] })(props);
}
function IoStar(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" } }] })(props);
}
function IoStatsChartOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "48", "height": "160", "x": "64", "y": "320", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "48", "height": "256", "x": "288", "y": "224", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "48", "height": "368", "x": "400", "y": "112", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }, { "tag": "rect", "attr": { "width": "48", "height": "448", "x": "176", "y": "32", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "8", "ry": "8" } }] })(props);
}
function IoStatsChartSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128 496H48V304h80zm224 0h-80V208h80zm112 0h-80V96h80zm-224 0h-80V16h80z" } }] })(props);
}
function IoStatsChart(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zm224 0h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zm112 0h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zm-224 0h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z" } }] })(props);
}
function IoStopCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "d": "M310.4 336H201.6a25.62 25.62 0 01-25.6-25.6V201.6a25.62 25.62 0 0125.6-25.6h108.8a25.62 25.62 0 0125.6 25.6v108.8a25.62 25.62 0 01-25.6 25.6z" } }] })(props);
}
function IoStopCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 288H176V176h160z" } }] })(props);
}
function IoStopCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 262.4a25.62 25.62 0 01-25.6 25.6H201.6a25.62 25.62 0 01-25.6-25.6V201.6a25.62 25.62 0 0125.6-25.6h108.8a25.62 25.62 0 0125.6 25.6z" } }] })(props);
}
function IoStopOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "320", "height": "320", "x": "96", "y": "96", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "24", "ry": "24" } }] })(props);
}
function IoStopSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M80 80h352v352H80z" } }] })(props);
}
function IoStop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M392 432H120a40 40 0 01-40-40V120a40 40 0 0140-40h272a40 40 0 0140 40v272a40 40 0 01-40 40z" } }] })(props);
}
function IoStopwatchOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 232v-80" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M256 88V72m-124 60l-12-12" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "272", "r": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 96a176 176 0 10176 176A176 176 0 00256 96z" } }] })(props);
}
function IoStopwatchSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M280 81.5V48h-48v33.5a191 191 0 00-84.43 32.13L120 86l-34 34 25.59 25.59A191.17 191.17 0 0064 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5zM256 320a48 48 0 01-16-93.25V136h32v90.75A48 48 0 01256 320z" } }] })(props);
}
function IoStopwatch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "272", "r": "16" } }, { "tag": "path", "attr": { "d": "M280 81.5V72a24 24 0 00-48 0v9.5a191 191 0 00-84.43 32.13L137 103a24 24 0 00-34 34l8.6 8.6A191.17 191.17 0 0064 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5zM256 320a48 48 0 01-16-93.25V152a16 16 0 0132 0v74.75A48 48 0 01256 320z" } }] })(props);
}
function IoStorefrontOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 448V240m-384 0v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23 0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48zM32 464h448M136 288h80a24 24 0 0124 24v88h0-128 0v-88a24 24 0 0124-24zm152 176V312a24 24 0 0124-24h64a24 24 0 0124 24v152" } }] })(props);
}
function IoStorefrontSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 448V267.85a104.76 104.76 0 01-33.56 6.58c-1.18 0-2.3.05-3.4.05a108 108 0 01-56.86-16 108 108 0 01-56.85 16 106.16 106.16 0 01-56.51-16.2 107.84 107.84 0 01-57.2 16.2 106.14 106.14 0 01-56.85-16.42 106.14 106.14 0 01-56.85 16.42c-1.09 0-2.19 0-3.37-.05h-.06A104.66 104.66 0 0148 267.49V448H16v32h480v-32zm-240-64h-96v-76a4 4 0 014-4h88a4 4 0 014 4zm160 64h-80V308a4 4 0 014-4h72a4 4 0 014 4zm108.57-277.72L445.89 64C432 32 432 32 400 32H112c-32 0-32 0-45.94 32L19.38 170.28c-9 19.41 2.89 39.34 2.9 39.35l.41.66c.42.66 1.13 1.75 1.62 2.37.1.13.19.27.28.4l5.24 6.39 5.31 5.14.42.36a69.65 69.65 0 009.44 6.78v.05a74 74 0 0036 10.67h2.47a76.08 76.08 0 0051.89-20.31 72.38 72.38 0 005.77-6 74.18 74.18 0 005.78 6 76.08 76.08 0 0051.89 20.31c23.28 0 44.07-10 57.63-25.56a.11.11 0 01.15 0l5.66 5.26a76.09 76.09 0 0051.9 20.31c23.29 0 44.11-10 57.66-25.61 13.56 15.61 34.37 25.61 57.67 25.61h2.49a71.35 71.35 0 0035-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 00488 212.17l2-3c.9-2.04 11.21-20.3 2.57-38.89z" } }] })(props);
}
function IoStorefront(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 448h-12a4 4 0 01-4-4V273.51a4 4 0 00-5.24-3.86 104.92 104.92 0 01-28.32 4.78c-1.18 0-2.3.05-3.4.05a108.22 108.22 0 01-52.85-13.64 8.23 8.23 0 00-8 0 108.18 108.18 0 01-52.84 13.64 106.11 106.11 0 01-52.46-13.79 8.21 8.21 0 00-8.09 0 108.14 108.14 0 01-53.16 13.8 106.19 106.19 0 01-52.77-14 8.25 8.25 0 00-8.16 0 106.19 106.19 0 01-52.77 14c-1.09 0-2.19 0-3.37-.05h-.06a104.91 104.91 0 01-29.28-5.09 4 4 0 00-5.23 3.8V444a4 4 0 01-4 4H32.5c-8.64 0-16.1 6.64-16.48 15.28A16 16 0 0032 480h447.5c8.64 0 16.1-6.64 16.48-15.28A16 16 0 00480 448zm-256-68a4 4 0 01-4 4h-88a4 4 0 01-4-4v-64a12 12 0 0112-12h72a12 12 0 0112 12zm156 68h-72a4 4 0 01-4-4V316a12 12 0 0112-12h56a12 12 0 0112 12v128a4 4 0 01-4 4zm112.57-277.72l-42.92-98.49C438.41 47.62 412.74 32 384.25 32H127.7c-28.49 0-54.16 15.62-65.4 39.79l-42.92 98.49c-9 19.41 2.89 39.34 2.9 39.35l.28.45c.49.78 1.36 2 1.89 2.78.05.06.09.13.14.2l5 6.05a7.45 7.45 0 00.6.65l5 4.83.42.36a69.65 69.65 0 009.39 6.78v.05a74 74 0 0036 10.67h2.47a76.08 76.08 0 0051.89-20.31l.33-.31a7.94 7.94 0 0110.89 0l.33.31a77.3 77.3 0 00104.46 0 8 8 0 0110.87 0 77.31 77.31 0 00104.21.23 7.88 7.88 0 0110.71 0 76.81 76.81 0 0052.31 20.08h2.49a71.35 71.35 0 0035-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 00488 212.17l1.74-2.63q.26-.4.48-.84c1.66-3.38 10.56-20.76 2.35-38.42z" } }] })(props);
}
function IoSubwayOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "288", "height": "352", "x": "112", "y": "32", "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M208 80h96" } }, { "tag": "rect", "attr": { "width": "288", "height": "96", "x": "112", "y": "128", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32", "ry": "32" } }, { "tag": "circle", "attr": { "cx": "176", "cy": "320", "r": "16", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "circle", "attr": { "cx": "336", "cy": "320", "r": "16", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M144 464h224m-32-32l48 48m-208-48l-48 48" } }] })(props);
}
function IoSubwaySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M392 16H120a24 24 0 00-24 24v336a24 24 0 0024 24h272a24 24 0 0024-24V40a24 24 0 00-24-24zM208 64h95.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 96h-95.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01208 64zm-28.53 287.82a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zm160 0a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zM384 144v64H128v-64zm-86 272l31.37 32H182.63L214 416h-44l-80.57 80h45.2l16-16h210.74l16 16h45.3L343 416h-45z" } }] })(props);
}
function IoSubway(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M352 16H160a64.07 64.07 0 00-64 64v256a64.07 64.07 0 0064 64h192a64.07 64.07 0 0064-64V80a64.07 64.07 0 00-64-64zM208 64h96a16 16 0 010 32h-96a16 16 0 010-32zm-32 288a32 32 0 1132-32 32 32 0 01-32 32zm160 0a32 32 0 1132-32 32 32 0 01-32 32zm48-160a16 16 0 01-16 16H144a16 16 0 01-16-16v-32a16 16 0 0116-16h224a16 16 0 0116 16zm-36.69 228.69a16 16 0 00-22.62 22.62l4.68 4.69H182.63l4.68-4.69a16 16 0 00-22.62-22.62l-48 48a16 16 0 1022.62 22.62L150.63 480h210.74l11.32 11.31a16 16 0 0022.62-22.62z" } }] })(props);
}
function IoSunnyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "80", "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32" } }] })(props);
}
function IoSunnySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M234 26h44v92h-44zm0 368h44v92h-44zm104.025-251.143l65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zm-368 0h92v44H26zm312.029 135.14l31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" } }] })(props);
}
function IoSunny(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zm0 368a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zm113.14-321.14a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zm-368 0H48a22 22 0 010-44h48a22 22 0 010 44zm307.08 147.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" } }] })(props);
}
function IoSwapHorizontalOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 48l112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302" } }] })(props);
}
function IoSwapHorizontalSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M304 48l112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302" } }] })(props);
}
function IoSwapHorizontal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 48l112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302" } }] })(props);
}
function IoSwapVerticalOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M464 208L352 96 240 208m112-94.87V416M48 304l112 112 112-112m-112 94V96" } }] })(props);
}
function IoSwapVerticalSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M464 208L352 96 240 208m112-94.87V416M48 304l112 112 112-112m-112 94V96" } }] })(props);
}
function IoSwapVertical(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M464 208L352 96 240 208m112-94.87V416M48 304l112 112 112-112m-112 94V96" } }] })(props);
}
function IoSyncCircleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M351.82 271.87v-16A96.15 96.15 0 00184.09 192m-24.2 48.17v16A96.22 96.22 0 00327.81 320" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M135.87 256l23.59-23.6 24.67 23.6m192 0l-23.59 23.6-24.67-23.6" } }] })(props);
}
function IoSyncCircleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm0 320a112.19 112.19 0 01-111.27-98.23l-8.86 8.86L113.24 256l46-46 47.55 45.48-22.12 23.12-7.2-6.88a80.26 80.26 0 00138.48 37.5l23.77 21.41A112.82 112.82 0 01256 368zm96.79-66l-47.55-45.5 22.12-23.12 6.86 6.55A80.2 80.2 0 00196 202.64l-23.82-21.37A112.18 112.18 0 01367 242.49l9.11-9.12L398.76 256z" } }] })(props);
}
function IoSyncCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm83.69 282.65a112.24 112.24 0 01-195-61.29 16 16 0 01-20.13-24.67l23.6-23.6a16 16 0 0122.37-.25l24.67 23.6a16 16 0 01-18 26 80.25 80.25 0 00138.72 38.83 16 16 0 0123.77 21.41zm47.76-63.34l-23.6 23.6a16 16 0 01-22.37.25l-24.67-23.6a16 16 0 0117.68-26.11A80.17 80.17 0 00196 202.64a16 16 0 11-23.82-21.37 112.17 112.17 0 01194.88 61.57 16 16 0 0120.39 24.47z" } }] })(props);
}
function IoSyncOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 00-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 00140-66.92" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M32 256l44-44 46 44m358 0l-44 44-46-44" } }] })(props);
}
function IoSyncSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 00-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 00140-66.92" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M32 256l44-44 46 44m358 0l-44 44-46-44" } }] })(props);
}
function IoSync(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 00-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 00140-66.92" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M32 256l44-44 46 44m358 0l-44 44-46-44" } }] })(props);
}
function IoTabletLandscapeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "352", "height": "480", "x": "80", "y": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48", "transform": "rotate(-90 256 256)" } }] })(props);
}
function IoTabletLandscapeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M0 82v348a18 18 0 0018 18h476a18 18 0 0018-18V82a18 18 0 00-18-18H18A18 18 0 000 82zm448 330H64V100h384z" } }] })(props);
}
function IoTabletLandscape(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M512 128v256a64.07 64.07 0 01-64 64H64a64.07 64.07 0 01-64-64V128a64.07 64.07 0 0164-64h384a64.07 64.07 0 0164 64zM32 384a32 32 0 0032 32h384a32 32 0 0032-32V128a32 32 0 00-32-32H64a32 32 0 00-32 32z" } }, { "tag": "path", "attr": { "d": "M0 128a64.07 64.07 0 0164-64h384a64.07 64.07 0 0164 64v256a64.07 64.07 0 01-64 64H64a64.07 64.07 0 01-64-64V128m480 256V128a32 32 0 00-32-32H64a32 32 0 00-32 32v256a32 32 0 0032 32h384a32 32 0 0032-32m-16 0a16 16 0 01-16 16H64a16 16 0 01-16-16V128a16 16 0 0116-16h384a16 16 0 0116 16v256z" } }] })(props);
}
function IoTabletPortraitOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "352", "height": "480", "x": "80", "y": "16", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }] })(props);
}
function IoTabletPortraitSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M430 0H82a18 18 0 00-18 18v476a18 18 0 0018 18h348a18 18 0 0018-18V18a18 18 0 00-18-18zM100 448V64h312v384z" } }] })(props);
}
function IoTabletPortrait(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M384 512H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64zM128 32a32 32 0 00-32 32v384a32 32 0 0032 32h256a32 32 0 0032-32V64a32 32 0 00-32-32z" } }, { "tag": "path", "attr": { "d": "M384 0a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256M128 480h256a32 32 0 0032-32V64a32 32 0 00-32-32H128a32 32 0 00-32 32v384a32 32 0 0032 32m0-16a16 16 0 01-16-16V64a16 16 0 0116-16h256a16 16 0 0116 16v384a16 16 0 01-16 16z" } }] })(props);
}
function IoTelescopeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M39.93 327.56l-4.71-8.13A24 24 0 0144 286.64l86.87-50.07a16 16 0 0121.89 5.86l12.71 22a16 16 0 01-5.86 21.85l-86.85 50.07a24.06 24.06 0 01-32.83-8.79z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M170.68 273.72L147.12 233a24 24 0 018.8-32.78l124.46-71.75a16 16 0 0121.89 5.86l31.57 54.59a16 16 0 01-5.84 21.84L203.51 282.5a24 24 0 01-32.83-8.78zm171.17-71.51l-46.51-80.43a24 24 0 018.8-32.78l93.29-53.78A24.07 24.07 0 01430.27 44l46.51 80.43a24 24 0 01-8.8 32.79L374.69 211a24.06 24.06 0 01-32.84-8.79zM127.59 480l96.14-207.99m48.07-15.99L368.55 448" } }] })(props);
}
function IoTelescopeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M1.41 292.9l44.82 76.97 98.14-56.38-44.73-77.37L1.41 292.9z" } }, { "tag": "path", "attr": { "d": "M287.87 252.34l23.67-13.81-63.42-110-132.92 77C133.75 237.51 176 310 176 310l15.53-8.32c.24-.13.55 0 .83 0L102.65 496h35.16l99.05-214.25 23.24-13.4L358 464h36zM262.08 96c24.81 42.23 60.25 104.25 86.4 148.76L510.79 151 424.07 1.41z" } }] })(props);
}
function IoTelescope(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M107.56 250a16 16 0 00-21.85-5.86L36 272.81a39.71 39.71 0 00-18.8 24.91 40.9 40.9 0 004.55 30.35l4.36 7.54a40 40 0 0054.62 14.62l49.67-28.63a16 16 0 005.87-21.86z" } }, { "tag": "path", "attr": { "d": "M382.84 440.8L288.72 254a2 2 0 01.79-2.63l8.3-4.79a16 16 0 005.86-21.86l-47.53-82.33a16 16 0 00-21.86-5.87l-86.38 49.8a39.73 39.73 0 00-18.65 24.28 34.82 34.82 0 00-1.37 9.76c.06 7.6 9.2 22.7 18.12 38.28 9.59 16.75 19.24 33.88 26.34 38.15 4.52 2.72 12.5 4.9 19.21 4.9h.84l-79.32 171.6a16 16 0 1029.05 13.42l93.68-202.65a7.94 7.94 0 013.26-3.57l19.21-11.08a2 2 0 012.78.84l93.21 185a16 16 0 0028.58-14.4zm107.37-325.06L444.09 36a40.08 40.08 0 00-54.63-14.62l-93.34 53.78a39.69 39.69 0 00-18.65 24.28 32.76 32.76 0 00-1.27 13.25c1.74 12.62 13 30.4 26.41 53.89 13.58 23.73 28.91 50.48 36.93 56.27a40.18 40.18 0 0023.18 7.37 39.77 39.77 0 0019.92-5.34L476 171.07a39.72 39.72 0 0018.79-24.84 41 41 0 00-4.58-30.49z" } }] })(props);
}
function IoTennisballOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "208", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M461.43 271.44c-5.09.37-8.24.56-13.43.56-114.88 0-208-93.12-208-208 0-5.37.2-8.69.6-14M49.65 240.56S58.84 240 64 240c114.88 0 208 93.12 208 208 0 5.38-.61 14-.61 14" } }] })(props);
}
function IoTennisballSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M246.4 480a181 181 0 003.22-22.86c.35-4.61.53-9.31.53-14 0-100-81.34-181.32-181.32-181.32A181.72 181.72 0 0032 265.61 224.2 224.2 0 00246.4 480z" } }, { "tag": "path", "attr": { "d": "M284.63 227.37A222.73 222.73 0 01219 68.83a227.09 227.09 0 012.62-34.42A224.41 224.41 0 0034.41 221.58 227.09 227.09 0 0168.83 219a222.73 222.73 0 01158.54 65.67A222.73 222.73 0 01293 443.17c0 5.74-.22 11.54-.65 17.23s-1.11 11.51-2 17.2a224.42 224.42 0 00187.24-187.18 227.09 227.09 0 01-34.42 2.58 222.73 222.73 0 01-158.54-65.63z" } }, { "tag": "path", "attr": { "d": "M443.17 250.15a181.72 181.72 0 0036.83-3.76A224.2 224.2 0 00265.61 32a181.72 181.72 0 00-3.76 36.83c0 99.98 81.34 181.32 181.32 181.32z" } }] })(props);
}
function IoTennisball(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M448 256a192.55 192.55 0 0032-2.68A224 224 0 00258.68 32 192.55 192.55 0 00256 64c0 105.87 86.13 192 192 192zM253.35 480c.94-5.67 1.65-11.4 2.09-17.18.37-4.88.56-9.86.56-14.79 0-105.87-86.13-192-192-192a192.55 192.55 0 00-32 2.68A224 224 0 00253.35 480z" } }, { "tag": "path", "attr": { "d": "M289.61 222.39A222.53 222.53 0 01224 64a226.07 226.07 0 012-30A224.1 224.1 0 0034 226a226.07 226.07 0 0130-2 222.53 222.53 0 01158.39 65.61A222.53 222.53 0 01288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 00478 286a226.07 226.07 0 01-30 2 222.53 222.53 0 01-158.39-65.61z" } }] })(props);
}
function IoTerminalOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "448", "height": "416", "x": "32", "y": "48", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M96 112l80 64-80 64m96 0h64" } }] })(props);
}
function IoTerminalSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 44v424a12 12 0 0012 12h456a12 12 0 0012-12V44a12 12 0 00-12-12H28a12 12 0 00-12 12zm57.51 193.5l76.88-61.5-76.88-61.5 20-25 108.1 86.5L93.5 262.49zM272 256h-96v-32h96z" } }] })(props);
}
function IoTerminal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432 32H80a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h352a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64zM96 256a16 16 0 01-10-28.49L150.39 176 86 124.49a16 16 0 1120-25l80 64a16 16 0 010 25l-80 64A16 16 0 0196 256zm160 0h-64a16 16 0 010-32h64a16 16 0 010 32z" } }] })(props);
}
function IoTextOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M32 415.5l120-320 120 320m-42-112H74m252-64c12.19-28.69 41-48 74-48h0c46 0 80 32 80 80v144" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 358.5c0 36 26.86 58 60 58 54 0 100-27 100-106v-15c-20 0-58 1-92 5-32.77 3.86-68 19-68 58z" } }] })(props);
}
function IoTextSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M404.42 170c-41.23 0-78.07 24.06-93.85 61.3L304 246.52l40.33 17.18 6.56-15.22c8.9-21 29.91-34.55 53.53-34.55 34.55 0 57.76 23.27 57.76 57.91v2.3c-22.12.59-48.65 2.05-72.27 4.84-54.52 6.43-87.06 36.23-87.06 79.72 0 23.16 8.72 44 24.56 58.59C342.28 431 362.55 438 384.51 438c30.86 0 57.5-7.33 77.67-22.64V438H506V271.84C506 212.83 463.28 170 404.42 170zm-19.91 225.07c-17.46 0-37.85-9.84-37.85-36.37 0-10.65 3.82-18.11 12.38-24.19 8.34-5.92 21.12-10.15 36-11.9 21.78-2.57 46.31-3.95 67-4.52-2.16 51.49-27.57 76.98-77.53 76.98zm-291.26-69.2h125.5L260.94 438H308L155 48 4 438h47.06zM156 160.71L202.25 282h-92.5z" } }] })(props);
}
function IoText(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M292.6 407.78l-120-320a22 22 0 00-41.2 0l-120 320a22 22 0 0041.2 15.44l36.16-96.42a2 2 0 011.87-1.3h122.74a2 2 0 011.87 1.3l36.16 96.42a22 22 0 0041.2-15.44zm-185.84-129l43.37-115.65a2 2 0 013.74 0l43.37 115.67a2 2 0 01-1.87 2.7h-86.74a2 2 0 01-1.87-2.7zM400.77 169.5c-41.72-.3-79.08 23.87-95 61.4a22 22 0 0040.5 17.2c8.88-20.89 29.77-34.44 53.32-34.6 32.32-.22 58.41 26.5 58.41 58.85a1.5 1.5 0 01-1.45 1.5c-21.92.61-47.92 2.07-71.12 4.8-54.75 6.44-87.43 36.29-87.43 79.85 0 23.19 8.76 44 24.67 58.68C337.6 430.93 358 438.5 380 438.5c31 0 57.69-8 77.94-23.22h.06a22 22 0 1044 .19v-143c0-56.18-45-102.56-101.23-102.97zM380 394.5c-17.53 0-38-9.43-38-36 0-10.67 3.83-18.14 12.43-24.23 8.37-5.93 21.2-10.16 36.14-11.92 21.12-2.49 44.82-3.86 65.14-4.47a2 2 0 012 2.1C455 370.1 429.46 394.5 380 394.5z" } }] })(props);
}
function IoThermometerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M307.72 302.27a8 8 0 01-3.72-6.75V80a48 48 0 00-48-48h0a48 48 0 00-48 48v215.52a8 8 0 01-3.71 6.74 97.51 97.51 0 00-44.19 86.07A96 96 0 00352 384a97.49 97.49 0 00-44.28-81.73zM256 112v272" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "384", "r": "48" } }] })(props);
}
function IoThermometerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M320 291.24V80a64 64 0 10-128 0v211.24A113.39 113.39 0 00144 384a112 112 0 00224 0 113.39 113.39 0 00-48-92.76zM256 432a48 48 0 01-16-93.26V96h32v242.74A48 48 0 01256 432z" } }] })(props);
}
function IoThermometer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M320 287.18V81c0-35.12-27.89-64.42-63-64.95a64.08 64.08 0 00-65 64v207.13a8 8 0 01-3.18 6.37A113.48 113.48 0 00144 384a112 112 0 00224 0 113.48 113.48 0 00-44.82-90.45 8 8 0 01-3.18-6.37zM254.07 432a48 48 0 01-22-89.54 16 16 0 008-13.84V112.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 112v216.58a16.18 16.18 0 008.15 13.94A48 48 0 01254.07 432z" } }] })(props);
}
function IoThumbsDownOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M192 53.84S208 48 256 48s74 16 96 32h64a64 64 0 0164 64v48a64 64 0 01-64 64h-30a32.34 32.34 0 00-27.37 15.4S350 290.19 324 335.22 248 448 240 464c-29 0-43-22-34-47.71 10.28-29.39 23.71-54.38 27.46-87.09.54-4.78-3.14-12-8-12L96 307" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M96 241l80 2c20 1.84 32 12.4 32 30h0c0 17.6-14 28.84-32 30l-80 4c-17.6 0-32-16.4-32-34v-.17A32 32 0 0196 241zm-32-65l112 2c18 .84 32 12.41 32 30h0c0 17.61-14 28.86-32 30l-112 2a32.1 32.1 0 01-32-32h0a32.1 32.1 0 0132-32zm48-128l64 3c21 1.84 32 11.4 32 29h0c0 17.6-14.4 30-32 30l-64 2a32.09 32.09 0 01-32-32h0a32.09 32.09 0 0132-32zm-32 64l96 2c19 .84 32 12.4 32 30h0c0 17.6-13 28.84-32 30l-96 2a32.09 32.09 0 01-32-32h0a32.09 32.09 0 0132-32z" } }] })(props);
}
function IoThumbsDownSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M56 320l156.05 12-23 89.4c-6.08 26.6.7 41.87 22.39 48.62l34.69 9.85a4 4 0 004.4-1.72l129-202.34a8 8 0 016.81-3.81H496V64H378.39a48 48 0 01-15.18-2.46l-76.3-25.43a80 80 0 00-25.3-4.11H83.68c-19 0-31.5 13.52-35.23 32.16L16 206.42V280c0 22.06 18 38 40 40z" } }, { "tag": "path", "attr": { "fill": "none", "d": "M378.45 273.93A15.84 15.84 0 01386 272a15.93 15.93 0 00-7.51 1.91zm-40.59 69.29l-.13.22a2.53 2.53 0 01.13-.22c20.5-35.51 30.36-55 33.82-62-3.47 7.06-13.34 26.51-33.82 62z" } }, { "tag": "path", "attr": { "d": "M372.66 279.16l-1 2a16.29 16.29 0 016.77-7.26 16.48 16.48 0 00-5.77 5.26z" } }] })(props);
}
function IoThumbsDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M39.94 178l144.16 6.12c4.61.36 23.9 1.22 23.9 25.88 0 23.8-19.16 25.33-24.14 25.88L39.94 242C27.27 241.87 16 227.56 16 210s11.27-31.87 23.94-32zm141.45 131.66L74.65 318C62 318 48 301.31 48 284.12v-.33c0-16.33 11.14-29.63 24.88-29.79l108.45 1.72C208 259 208 275.16 208 282.12c0 22.88-21.8 27.14-26.61 27.54zM90.15 32l89.37 8.93C204 41.86 208 58.18 208 68.4c0 18.39-13.41 24.6-26.67 24.6l-91 3C75.78 95.78 64 81.51 64 64s11.68-31.66 26.15-32zm-34.36 71.5l126.4 6.22c9.39.63 25.81 3 25.81 26.36 0 12-4.35 25.62-25 27.53L55.79 167.5C42.65 167.35 32 154 32 136.08s10.65-32.43 23.79-32.58z" } }, { "tag": "path", "attr": { "fill": "none", "d": "M378.45 273.93A15.84 15.84 0 01386 272a15.93 15.93 0 00-7.51 1.91zm-40.59 69.29l-.13.22a2.53 2.53 0 01.13-.22c20.5-35.51 30.36-55 33.82-62-3.47 7.06-13.34 26.51-33.82 62z" } }, { "tag": "path", "attr": { "d": "M372.66 279.16l-1 2a16.29 16.29 0 016.77-7.26 16.48 16.48 0 00-5.77 5.26z" } }, { "tag": "path", "attr": { "d": "M195.94 459.38C205.37 472.67 221 480 240 480a16 16 0 0014.31-8.85c3-6.06 15.25-24 28.19-42.9 18-26.33 40.35-59.08 55.23-84.81l.13-.22c20.48-35.49 30.35-54.94 33.82-62l1-2a16.48 16.48 0 015.79-5.23A15.93 15.93 0 01386 272h25.32A84.7 84.7 0 00496 187.3v-38.6A84.7 84.7 0 00411.31 64h-48.79a17.46 17.46 0 01-9.58-2.89C330 46.13 286.66 32 240 32c-7.45 0-14.19.14-20.27.38a8 8 0 00-6.2 12.68l.1.14C222.2 57.59 224 71 224 80a61.16 61.16 0 01-5.19 24.77 17.38 17.38 0 000 14.06 63.81 63.81 0 010 50.39 17.32 17.32 0 000 14 62.13 62.13 0 010 49.58 18.13 18.13 0 000 14.68A60.41 60.41 0 01224 273c0 8.2-2 21.3-8 31.18a15.66 15.66 0 00-1.14 13.65c.38 1 .76 2.06 1.13 3.17a24.8 24.8 0 01.86 11.57c-3 19.35-9.67 36.3-16.74 54.16-3.08 7.78-6.27 15.82-9.22 24.27-6.14 17.56-4.3 35.2 5.05 48.38z" } }] })(props);
}
function IoThumbsUpOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M320 458.16S304 464 256 464s-74-16-96-32H96a64 64 0 01-64-64v-48a64 64 0 0164-64h30a32.34 32.34 0 0027.37-15.4S162 221.81 188 176.78 264 64 272 48c29 0 43 22 34 47.71-10.28 29.39-23.71 54.38-27.46 87.09-.54 4.78 3.14 12 7.95 12L416 205" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M416 271l-80-2c-20-1.84-32-12.4-32-30h0c0-17.6 14-28.84 32-30l80-4c17.6 0 32 16.4 32 34v.17A32 32 0 01416 271zm32 65l-112-2c-18-.84-32-12.41-32-30h0c0-17.61 14-28.86 32-30l112-2a32.1 32.1 0 0132 32h0a32.1 32.1 0 01-32 32zm-48 128l-64-3c-21-1.84-32-11.4-32-29h0c0-17.6 14.4-30 32-30l64-2a32.09 32.09 0 0132 32h0a32.09 32.09 0 01-32 32zm32-64l-96-2c-19-.84-32-12.4-32-30h0c0-17.6 13-28.84 32-30l96-2a32.09 32.09 0 0132 32h0a32.09 32.09 0 01-32 32z" } }] })(props);
}
function IoThumbsUpSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M456 192l-156-12 23-89.4c6-26.6-.78-41.87-22.47-48.6l-34.69-9.85a4 4 0 00-4.4 1.72l-129 202.34a8 8 0 01-6.81 3.81H16V448h117.61a48 48 0 0115.18 2.46l76.3 25.43a80 80 0 0025.3 4.11h177.93c19 0 31.5-13.52 35.23-32.16L496 305.58V232c0-22.06-18-38-40-40z" } }] })(props);
}
function IoThumbsUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M472.06 334l-144.16-6.13c-4.61-.36-23.9-1.21-23.9-25.87 0-23.81 19.16-25.33 24.14-25.88L472.06 270c12.67.13 23.94 14.43 23.94 32s-11.27 31.87-23.94 32zM330.61 202.33L437.35 194C450 194 464 210.68 464 227.88v.33c0 16.32-11.14 29.62-24.88 29.79l-108.45-1.73C304 253 304 236.83 304 229.88c0-22.88 21.8-27.15 26.61-27.55zM421.85 480l-89.37-8.93C308 470.14 304 453.82 304 443.59c0-18.38 13.41-24.6 26.67-24.6l91-3c14.54.23 26.32 14.5 26.32 32s-11.67 31.67-26.14 32.01zm34.36-71.5l-126.4-6.21c-9.39-.63-25.81-3-25.81-26.37 0-12 4.35-25.61 25-27.53l127.19-3.88c13.16.14 23.81 13.49 23.81 31.4s-10.65 32.43-23.79 32.58z" } }, { "tag": "path", "attr": { "fill": "none", "d": "M133.55 238.06A15.85 15.85 0 01126 240a15.82 15.82 0 007.51-1.92zm40.59-69.28l.13-.23-.13.23c-20.5 35.51-30.36 54.95-33.82 62 3.47-7.07 13.34-26.51 33.82-62z" } }, { "tag": "path", "attr": { "d": "M139.34 232.84l1-2a16.27 16.27 0 01-6.77 7.25 16.35 16.35 0 005.77-5.25z" } }, { "tag": "path", "attr": { "d": "M316.06 52.62C306.63 39.32 291 32 272 32a16 16 0 00-14.31 8.84c-3 6.07-15.25 24-28.19 42.91-18 26.33-40.35 59.07-55.23 84.8l-.13.23c-20.48 35.49-30.35 54.93-33.82 62l-1 2a16.35 16.35 0 01-5.79 5.22 15.82 15.82 0 01-7.53 2h-25.31A84.69 84.69 0 0016 324.69v38.61a84.69 84.69 0 0084.69 84.7h48.79a17.55 17.55 0 019.58 2.89C182 465.87 225.34 480 272 480c7.45 0 14.19-.14 20.27-.38a8 8 0 006.2-12.68l-.1-.14C289.8 454.41 288 441 288 432a61.2 61.2 0 015.19-24.77 17.36 17.36 0 000-14.05 63.81 63.81 0 010-50.39 17.32 17.32 0 000-14 62.15 62.15 0 010-49.59 18.13 18.13 0 000-14.68A60.33 60.33 0 01288 239c0-8.2 2-21.3 8-31.19a15.63 15.63 0 001.14-13.64c-.38-1-.76-2.07-1.13-3.17a24.84 24.84 0 01-.86-11.58c3-19.34 9.67-36.29 16.74-54.16 3.08-7.78 6.27-15.82 9.22-24.26 6.14-17.57 4.3-35.2-5.05-48.38z" } }] })(props);
}
function IoThunderstormOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M120 352l-24 48m40 32l-16 32m280-112l-24 48m40 32l-16 32M208 304l-16 96h48v80l80-112h-48l16-64m116.33-151.11H392.2C384.71 84.85 326.14 32 256 32a136.39 136.39 0 00-128.63 90.67h-4.57c-49.94 0-90.8 40.8-90.8 90.66h0C32 263.2 72.86 304 122.8 304h281.53C446 304 480 270 480 228.44h0c0-41.55-34-75.55-75.67-75.55z" } }] })(props);
}
function IoThunderstormSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M405.84 136.9a151.25 151.25 0 00-47.6-81.9 153 153 0 00-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h72.31L176 416h48v80l112-144h-43.51l8-32h103.84a91.56 91.56 0 001.51-183.1z" } }, { "tag": "path", "attr": { "d": "M74.53 407.177l38.32-76.622 28.62 14.313-38.32 76.623zm23.99 64.012l30.318-60.622 28.62 14.313-30.317 60.622zm256.021-64l38.32-76.623 28.62 14.314-38.32 76.622zm24.001 64.011l30.317-60.622 28.62 14.314-30.317 60.621z" } }] })(props);
}
function IoThunderstorm(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M96 416a16 16 0 01-14.3-23.16l24-48a16 16 0 0128.62 14.32l-24 48A16 16 0 0196 416zm24 64a16 16 0 01-14.3-23.16l16-32a16 16 0 0128.62 14.32l-16 32A16 16 0 01120 480zm256-64a16 16 0 01-14.3-23.16l24-48a16 16 0 0128.62 14.32l-24 48A16 16 0 01376 416zm24 64a16 16 0 01-14.3-23.16l16-32a16 16 0 0128.62 14.32l-16 32A16 16 0 01400 480z" } }, { "tag": "path", "attr": { "d": "M405.84 136.9a151.25 151.25 0 00-47.6-81.9 153 153 0 00-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h66.31l-12.89 77.37A16 16 0 00192 416h32v64a16 16 0 0029 9.3l80-112a16 16 0 00-13-25.3h-27.51l8-32h103.84a91.56 91.56 0 001.51-183.1z" } }] })(props);
}
function IoTicketOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M366.05 146a46.7 46.7 0 01-2.42-63.42 3.87 3.87 0 00-.22-5.26l-44.13-44.18a3.89 3.89 0 00-5.5 0l-70.34 70.34a23.62 23.62 0 00-5.71 9.24h0a23.66 23.66 0 01-14.95 15h0a23.7 23.7 0 00-9.25 5.71L33.14 313.78a3.89 3.89 0 000 5.5l44.13 44.13a3.87 3.87 0 005.26.22 46.69 46.69 0 0165.84 65.84 3.87 3.87 0 00.22 5.26l44.13 44.13a3.89 3.89 0 005.5 0l180.4-180.39a23.7 23.7 0 005.71-9.25h0a23.66 23.66 0 0114.95-15h0a23.62 23.62 0 009.24-5.71l70.34-70.34a3.89 3.89 0 000-5.5l-44.13-44.13a3.87 3.87 0 00-5.26-.22 46.7 46.7 0 01-63.42-2.32z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51" } }] })(props);
}
function IoTicketSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M426.24 127.72l-10.94 10.94a29.67 29.67 0 01-42-42l10.94-10.94L314.52 16l-88 88-4 12.09-12.09 4L16 314.52l69.76 69.76 10.94-10.94a29.67 29.67 0 0142 42l-10.94 10.94L197.48 496l194.4-194.4 4-12.09 12.09-4 88-88zm-208.56 5.43l21.87-21.87 33 33-21.88 21.87zm43 43l21.88-21.88 32.52 32.52-21.88 21.88zm42.56 42.56l21.88-21.88 32.52 32.52-21.84 21.93zm75.57 75.56l-33-33 21.87-21.88 33 33z" } }] })(props);
}
function IoTicket(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M490.18 181.4l-44.13-44.13a20 20 0 00-27-1 30.81 30.81 0 01-41.68-1.6 30.81 30.81 0 01-1.6-41.67 20 20 0 00-1-27L330.6 21.82a19.91 19.91 0 00-28.13 0l-70.35 70.34a39.87 39.87 0 00-9.57 15.5 7.71 7.71 0 01-4.83 4.83 39.78 39.78 0 00-15.5 9.58l-180.4 180.4a19.91 19.91 0 000 28.13L66 374.73a20 20 0 0027 1 30.69 30.69 0 0143.28 43.28 20 20 0 001 27l44.13 44.13a19.91 19.91 0 0028.13 0l180.4-180.4a39.82 39.82 0 009.58-15.49 7.69 7.69 0 014.84-4.84 39.84 39.84 0 0015.49-9.57l70.34-70.35a19.91 19.91 0 00-.01-28.09zm-228.37-29.65a16 16 0 01-22.63 0l-11.51-11.51a16 16 0 0122.63-22.62l11.51 11.5a16 16 0 010 22.63zm44 44a16 16 0 01-22.62 0l-11-11a16 16 0 1122.63-22.63l11 11a16 16 0 01.01 22.66zm44 44a16 16 0 01-22.63 0l-11-11a16 16 0 0122.63-22.62l11 11a16 16 0 01.05 22.67zm44.43 44.54a16 16 0 01-22.63 0l-11.44-11.5a16 16 0 1122.68-22.57l11.45 11.49a16 16 0 01-.01 22.63z" } }] })(props);
}
function IoTimeOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 128v144h96" } }] })(props);
}
function IoTimeSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256c0 114.69 93.32 208 208 208 114.86 0 208-93.14 208-208 0-114.69-93.31-208-208-208zm108 240H244a4 4 0 01-4-4V116a4 4 0 014-4h24a4 4 0 014 4v140h92a4 4 0 014 4v24a4 4 0 01-4 4z" } }] })(props);
}
function IoTime(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z" } }] })(props);
}
function IoTimerOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112.91 128A191.85 191.85 0 0064 254c-1.18 106.35 85.65 193.8 192 194 106.2.2 192-85.83 192-192 0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 00-4.5 4.37V152" } }, { "tag": "path", "attr": { "d": "M233.38 278.63l-79-113a8.13 8.13 0 0111.32-11.32l113 79a32.5 32.5 0 01-37.25 53.26 33.21 33.21 0 01-8.07-7.94z" } }] })(props);
}
function IoTimerSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208 208-93.12 208-208S370.88 48 256 48zm0 384c-97 0-176-78.95-176-176a174.55 174.55 0 0153.87-126.72L279 233l-19 30-125-91c-13 23-26.7 46-26.7 84 0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55h-28.3V79.89c4.24.07 8.94.11 14.15.11 97.05 0 176 79 176 176s-78.95 176-176 176z" } }] })(props);
}
function IoTimer(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208 208-93.12 208-208S370.88 48 256 48zm-82.33 114.34l105 71a32.5 32.5 0 01-37.25 53.26 33.21 33.21 0 01-8-8l-71-105a8.13 8.13 0 0111.32-11.32zM256 432c-97 0-176-78.95-176-176a174.55 174.55 0 0153.87-126.72 14.15 14.15 0 1119.64 20.37A146.53 146.53 0 00108.3 256c0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55a14.15 14.15 0 11-28.3 0V94.15A14.15 14.15 0 01256 80c97.05 0 176 79 176 176s-78.95 176-176 176z" } }] })(props);
}
function IoTodayOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "384", "x": "48", "y": "80", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128 48v32m256-32v32" } }, { "tag": "rect", "attr": { "width": "96", "height": "96", "x": "112", "y": "224", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "13" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M464 160H48" } }] })(props);
}
function IoTodaySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 456a24 24 0 0024 24h400a24 24 0 0024-24V176H32zm80-238.86a9.14 9.14 0 019.14-9.14h109.72a9.14 9.14 0 019.14 9.14v109.72a9.14 9.14 0 01-9.14 9.14H121.14a9.14 9.14 0 01-9.14-9.14zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448V87.77A23.8 23.8 0 00456 64z" } }] })(props);
}
function IoToday(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4v-12a64 64 0 00-64-64zm61 112H35a3 3 0 00-3 3v237a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3zM224 307.43A28.57 28.57 0 01195.43 336h-70.86A28.57 28.57 0 0196 307.43v-70.86A28.57 28.57 0 01124.57 208h70.86A28.57 28.57 0 01224 236.57z" } }] })(props);
}
function IoToggleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "368", "cy": "256", "r": "128", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "rect", "attr": { "width": "480", "height": "256", "x": "16", "y": "128", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "128", "ry": "128" } }] })(props);
}
function IoToggleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 112H144a144 144 0 000 288h224a144 144 0 000-288zm0 230a86 86 0 1186-86 85.88 85.88 0 01-86 86z" } }] })(props);
}
function IoToggle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M368 112H144C64.6 112 0 176.6 0 256s64.6 144 144 144h224c79.4 0 144-64.6 144-144s-64.6-144-144-144zm0 256a112 112 0 11112-112 112.12 112.12 0 01-112 112z" } }] })(props);
}
function IoTrailSignOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 400v64m0-256v64m0-224v32m160 128H102.63a16 16 0 01-11.32-4.69L32 144l59.31-59.31A16 16 0 01102.63 80H416a16 16 0 0116 16v96a16 16 0 01-16 16zM96 400h313.37a16 16 0 0011.32-4.69L480 336l-59.31-59.31a16 16 0 00-11.32-4.69H96a16 16 0 00-16 16v96a16 16 0 0016 16z" } }] })(props);
}
function IoTrailSignSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M502.63 336l-80-80H278v-32h170V64H278V32h-44v32H89.37l-80 80 80 80H234v32H64v160h170v64h44v-64h144.63z" } }] })(props);
}
function IoTrailSign(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M491.31 324.69L432 265.37a31.8 31.8 0 00-22.63-9.37H272v-32h144a32 32 0 0032-32V96a32 32 0 00-32-32H272V48a16 16 0 00-32 0v16H102.63A31.8 31.8 0 0080 73.37l-59.31 59.32a16 16 0 000 22.62L80 214.63a31.8 31.8 0 0022.63 9.37H240v32H96a32 32 0 00-32 32v96a32 32 0 0032 32h144v48a16 16 0 0032 0v-48h137.37a31.8 31.8 0 0022.63-9.37l59.31-59.32a16 16 0 000-22.62z" } }] })(props);
}
function IoTrainOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M344 48h-24a16 16 0 00-16-16h-96a16 16 0 00-16 16h-24a56.16 56.16 0 00-56 56v247c0 35.3 144 65 144 65s144-29.7 144-65V104a56 56 0 00-56-56zm-88 304a48 48 0 1148-48 48 48 0 01-48 48zm96-160a16 16 0 01-16 16H176a16 16 0 01-16-16v-64a16 16 0 0116-16h160a16 16 0 0116 16zM144 464h224m-32-32l48 48m-208-48l-48 48" } }] })(props);
}
function IoTrainSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M384 32h-64a16 16 0 00-16-16h-96a16 16 0 00-16 16h-64c-16 0-32 16-32 32v288c0 23.92 160 80 160 80s160-56.74 160-80V64c0-16-16-32-32-32zM256 352a48 48 0 1148-48 48 48 0 01-48 48zm112-152a8 8 0 01-8 8H152a8 8 0 01-8-8v-80a8 8 0 018-8h208a8 8 0 018 8z" } }, { "tag": "path", "attr": { "d": "M314 432l15.32 16H182.58L198 432l-32-13-76.62 77h45.2l16-16h210.74l16 16h45.3l-76.36-77.75L314 432z" } }] })(props);
}
function IoTrain(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "ellipse", "attr": { "cx": "256", "cy": "304", "rx": "32.05", "ry": "31.94", "transform": "rotate(-45 256.001 304)" } }, { "tag": "path", "attr": { "d": "M352 32h-15a10 10 0 01-7.87-3.78A31.94 31.94 0 00304 16h-96a32 32 0 00-26.11 13.52A6 6 0 01177 32h-17c-36.81 0-64 28.84-64 64v255c0 23.27 25.6 42.06 83 60.94a753 753 0 0073.77 19.73 16 16 0 006.46 0A753 753 0 00333 411.94c57.4-18.88 83-37.67 83-60.94V96a64 64 0 00-64-64zm-168 96h144a8 8 0 018 8v48a8 8 0 01-8 8H184a8 8 0 01-8-8v-48a8 8 0 018-8zm76.18 239.87a64 64 0 1159.69-59.69 64.07 64.07 0 01-59.69 59.69z" } }, { "tag": "path", "attr": { "d": "M395.31 468.69L347.63 421c-6.09-6.1-16-6.66-22.38-.86a16 16 0 00-.56 23.16l4.68 4.69H182.63l4.36-4.37c6.1-6.09 6.66-16 .86-22.38a16 16 0 00-23.16-.56l-48 48a16 16 0 1022.62 22.62l11.32-11.3h210.74l11.32 11.31a16 16 0 0022.62-22.62z" } }] })(props);
}
function IoTransgenderOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "256", "cy": "256", "r": "128", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M448 352l-96 96M176 80l-95.98 95.98M464 128V48h-80M48 128V48h80m336 0L346.5 165.5M48 48l117.49 117.49M464 464L346.65 346.37" } }] })(props);
}
function IoTransgenderSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M480 448.94l-48.94-49.08L464 366.92l-31.1-31.11-32.9 32.9-23.55-23.61a149.64 149.64 0 00-.1-178.45l59.55-59.56V144h44V32h-112v44h36.87l-59.55 59.55a149.65 149.65 0 00-178.59 0l-7.55-7.55 33-33L161 63.88l-33 33L107.09 76H144V32H32v112h44v-36.91L96.87 128l-33 33L95 192.05l33-33 7.56 7.57A149.18 149.18 0 00106 255.94c0 82.69 67.27 150 150 150a149.12 149.12 0 0089.44-29.67l23.51 23.58-33.14 33.05 31.11 31.1 33-33 48.9 49zm-330-193a106 106 0 11106 106 106.09 106.09 0 01-106-106z" } }] })(props);
}
function IoTransgender(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M458 32h-68a22 22 0 000 44h14.89l-59.57 59.57a149.69 149.69 0 00-178.64 0l-7.57-7.57 26.45-26.44a22 22 0 00-31.12-31.12L128 96.89 107.11 76H122a22 22 0 000-44H54a22 22 0 00-22 22v68a22 22 0 0044 0v-14.89L96.89 128l-26.42 26.42a22 22 0 1031.11 31.11L128 159.11l7.57 7.57A149.19 149.19 0 00106 256c0 82.71 67.29 150 150 150a149.2 149.2 0 0089.46-29.67L369 399.9l-26.54 26.54a22 22 0 0031.12 31.12l26.49-26.5 42.37 42.48a22 22 0 0031.16-31.08L431.17 400l26.39-26.39a22 22 0 00-31.12-31.12l-26.35 26.35-23.55-23.62a149.68 149.68 0 00-.11-178.49L436 107.11V122a22 22 0 0044 0V54a22 22 0 00-22-22zM150 256a106 106 0 11106 106 106.12 106.12 0 01-106-106z" } }] })(props);
}
function IoTrashBinOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M432 144l-28.67 275.74A32 32 0 01371.55 448H140.46a32 32 0 01-31.78-28.26L80 144" } }, { "tag": "rect", "attr": { "width": "448", "height": "80", "x": "32", "y": "64", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "16", "ry": "16" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M312 240L200 352m112 0L200 240" } }] })(props);
}
function IoTrashBinSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M337.46 240L312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z" } }, { "tag": "path", "attr": { "fill": "none", "d": "M337.46 240L312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z" } }, { "tag": "path", "attr": { "d": "M64 160l29.74 282.51A24 24 0 00117.61 464h276.78a24 24 0 0023.87-21.49L448 160zm248 217.46l-56-56-56 56L174.54 352l56-56-56-56L200 214.54l56 56 56-56L337.46 240l-56 56 56 56z" } }, { "tag": "rect", "attr": { "width": "448", "height": "80", "x": "32", "y": "48", "rx": "12", "ry": "12" } }] })(props);
}
function IoTrashBin(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "448", "height": "80", "x": "32", "y": "48", "rx": "32", "ry": "32" } }, { "tag": "path", "attr": { "d": "M74.45 160a8 8 0 00-8 8.83l26.31 252.56a1.5 1.5 0 000 .22A48 48 0 00140.45 464h231.09a48 48 0 0047.67-42.39v-.21l26.27-252.57a8 8 0 00-8-8.83zm248.86 180.69a16 16 0 11-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 01-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0122.63-22.62L256 273.37l44.68-44.68a16 16 0 0122.63 22.62L278.62 296z" } }] })(props);
}
function IoTrashOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" } }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M80 112h352" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40m-64 64v224m-72-224l8 224m136-224l-8 224" } }] })(props);
}
function IoTrashSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z" } }, { "tag": "path", "attr": { "fill": "none", "d": "M292 64h-72a4 4 0 00-4 4v28h80V68a4 4 0 00-4-4z" } }, { "tag": "path", "attr": { "d": "M447.55 96H336V48a16 16 0 00-16-16H192a16 16 0 00-16 16v48H64.45L64 136h33l20.09 314A32 32 0 00149 480h214a32 32 0 0031.93-29.95L415 136h33zM176 416l-9-256h33l9 256zm96 0h-32V160h32zm24-320h-80V68a4 4 0 014-4h72a4 4 0 014 4zm40 320h-33l9-256h33z" } }] })(props);
}
function IoTrash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z" } }, { "tag": "path", "attr": { "d": "M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z" } }] })(props);
}
function IoTrendingDownOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 368h112V256" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 144l121.37 121.37a32 32 0 0045.26 0l50.74-50.74a32 32 0 0145.26 0L448 352" } }] })(props);
}
function IoTrendingDownSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M352 368h112V256" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M48 144l144 144 96-96 160 160" } }] })(props);
}
function IoTrendingDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 368h112V256" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 144l121.37 121.37a32 32 0 0045.26 0l50.74-50.74a32 32 0 0145.26 0L448 352" } }] })(props);
}
function IoTrendingUpOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 144h112v112" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160" } }] })(props);
}
function IoTrendingUpSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M352 144h112v112" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M48 368l144-144 96 96 160-160" } }] })(props);
}
function IoTrendingUp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 144h112v112" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160" } }] })(props);
}
function IoTriangleOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M48 448L256 64l208 384H48z" } }] })(props);
}
function IoTriangleSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 32L20 464h472L256 32z" } }] })(props);
}
function IoTriangle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z" } }] })(props);
}
function IoTrophyOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 464h160m-80 0V336m128-112c0-50.64-.08-134.63-.12-160a16 16 0 00-16-16l-223.79.26a16 16 0 00-16 15.95c0 30.58-.13 129.17-.13 159.79 0 64.28 83 112 128 112S384 288.28 384 224z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112" } }] })(props);
}
function IoTrophySharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M399.9 80V32H112v48H32v38c0 32 9.5 62.79 26.76 86.61 13.33 18.4 34.17 31.1 52.91 37.21 5.44 29.29 20.2 57.13 50.19 79.83 22 16.66 48.45 28.87 72.14 33.86V436h-74v44h192v-44h-74v-80.49c23.69-5 50.13-17.2 72.14-33.86 30-22.7 44.75-50.54 50.19-79.83 18.74-6.11 39.58-18.81 52.91-37.21C470.5 180.79 480 150 480 118V80zM94.4 178.8c-10.68-14.68-17.17-34.4-18.24-54.8H112v67.37c-3.94-1.14-12.92-6.12-17.6-12.57zm323.2 0c-4.6 6.61-11.6 12.58-17.6 12.58 0-22.4 0-46.29-.05-67.38h35.9c-1.08 20.4-7.85 39.9-18.25 54.8z" } }] })(props);
}
function IoTrophy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 80h-60.1a4 4 0 01-4-4V63.92a32 32 0 00-32-31.92l-223.79.26a32 32 0 00-31.94 31.93V76a4 4 0 01-4 4H48a16 16 0 00-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 015.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61 20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 016.25 7.8V444a4 4 0 01-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 00336 448h-60a4 4 0 01-4-4v-86.86a8 8 0 016.25-7.8c22.42-5 47.36-16.65 68.27-32.48 27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 015.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 00-16-16zM112 198.22a4 4 0 01-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89-11.91-17.69-19-40.67-19.79-63.63a4 4 0 014-4.15h40a4 4 0 014 4c-.02 27.45-.07 58.87-.07 82.22zm316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 01-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 014-4h40a4 4 0 014 4.15c-.79 22.96-7.9 45.94-19.81 63.63z" } }] })(props);
}
function IoTvOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "448", "height": "272", "x": "32", "y": "96", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "32.14", "ry": "32.14" } }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M128 416h256" } }] })(props);
}
function IoTvSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M488 384H24a8 8 0 01-8-8V88a8 8 0 018-8h464a8 8 0 018 8v288a8 8 0 01-8 8z" } }, { "tag": "rect", "attr": { "width": "288", "height": "32", "x": "112", "y": "400", "rx": "4", "ry": "4" } }] })(props);
}
function IoTv(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M447.86 384H64.14A48.2 48.2 0 0116 335.86V128.14A48.2 48.2 0 0164.14 80h383.72A48.2 48.2 0 01496 128.14v207.72A48.2 48.2 0 01447.86 384z" } }, { "tag": "path", "attr": { "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M128 416h256" } }] })(props);
}
function IoUmbrellaOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 272v160a32 32 0 01-32 32h0a32 32 0 01-32-32m272-160c0-114.88-93.12-208-208-208S48 157.12 48 272h0a67.88 67.88 0 0196 0h0a78.28 78.28 0 01102.31-7.27L256 272l9.69-7.27A78.28 78.28 0 01368 272h0a67.88 67.88 0 0196 0zM256 64V48" } }] })(props);
}
function IoUmbrellaSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128.93 280l-.26-.3c-.9-.74-1.83-1.43-2.77-2.1zm254.15 0l2.62-2.12c-.79.58-1.57 1.17-2.34 1.79z" } }, { "tag": "path", "attr": { "d": "M463.14 186.44A224.55 224.55 0 00272 48.57V32h-32v16.57A223.58 223.58 0 0032 272v22.52l12.25-11.21a62.63 62.63 0 0181.43-5.88l.22.17c.94.67 1.87 1.36 2.77 2.1q2.09 1.69 4 3.61L144 294.63l11.31-11.32a62.59 62.59 0 0181.4-5.78L240 280v152a16 16 0 01-32 0v-16h-32v16a48 48 0 0096 0V280l3.29-2.47a62.59 62.59 0 0181.4 5.78L368 294.63l11.31-11.32q1.95-1.94 4.05-3.64c.77-.62 1.55-1.21 2.34-1.79l.26-.21c24.63-18.47 60-16.13 81.81 5.64l12.23 11.2V272a223.62 223.62 0 00-16.86-85.56z" } }] })(props);
}
function IoUmbrella(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.39 113.61a222.26 222.26 0 00-136.33-64.54 8.09 8.09 0 01-6.88-5.62 15.79 15.79 0 00-30.36 0 8.09 8.09 0 01-6.88 5.62A224 224 0 0032 271.52a16.41 16.41 0 007.24 13.87 16 16 0 0020.07-2.08 51.89 51.89 0 0173.31-.06 15.94 15.94 0 0022.6.15 62.59 62.59 0 0181.49-5.87 8.24 8.24 0 013.29 6.59v147.42c0 8.6-6.6 16-15.19 16.44A16 16 0 01208 432a16 16 0 00-16.29-16c-9 .16-15.9 8.11-15.7 17.1a48.06 48.06 0 0047.37 46.9c26.88.34 48.62-21.93 48.62-48.81V284.12a8.24 8.24 0 013.29-6.59 62.59 62.59 0 0181.4 5.78 16 16 0 0022.62 0 51.91 51.91 0 0173.38 0 16 16 0 0019.54 2.41 16.4 16.4 0 007.77-14.21 222.54 222.54 0 00-65.61-157.9z" } }] })(props);
}
function IoUnlinkOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "36", "d": "M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64" } }] })(props);
}
function IoUnlinkSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M200.66 352H144a96 96 0 010-192h55.41m113.18 0H368a96 96 0 010 192h-56.66" } }] })(props);
}
function IoUnlink(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "48", "d": "M200.66 352H144a96 96 0 010-192h55.41m113.18 0H368a96 96 0 010 192h-56.66" } }] })(props);
}
function IoVideocamOffOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M50.19 140.57A51.94 51.94 0 0032 180v152a52.15 52.15 0 0052 52h184a51.6 51.6 0 0022-4.9M208 128h60.48A51.68 51.68 0 01320 179.52V248m96 168L80 80" } }] })(props);
}
function IoVideocamOffSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M57.376 79.998l22.627-22.627 358.63 358.63-22.627 22.628zM32 112a16 16 0 00-16 16v256a16 16 0 0016 16h288a15.89 15.89 0 009.34-3l-285-285zm304 96v-80a16 16 0 00-16-16H179.63l245.44 245.44L496 400V112z" } }] })(props);
}
function IoVideocamOff(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 179.52A67.52 67.52 0 00268.48 112h-79.2a4 4 0 00-2.82 6.83l142.71 142.71a4 4 0 006.83-2.82zM16 180v152a68 68 0 0068 68h184a67.66 67.66 0 0042.84-15.24 4 4 0 00.33-6L54.41 122a4 4 0 00-4.87-.62A68 68 0 0016 180zm448 204.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M416 416L80 80" } }] })(props);
}
function IoVideocamOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" } }, { "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" } }] })(props);
}
function IoVideocamSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M336 208v-80a16 16 0 00-16-16H32a16 16 0 00-16 16v256a16 16 0 0016 16h288a16 16 0 0016-16v-80l160 96V112z" } }] })(props);
}
function IoVideocam(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z" } }] })(props);
}
function IoVolumeHighOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M126 192H56a8 8 0 00-8 8v112a8 8 0 008 8h69.65a15.93 15.93 0 0110.14 3.54l91.47 74.89A8 8 0 00240 392V120a8 8 0 00-12.74-6.43l-91.47 74.89A15 15 0 01126 192zm194 128c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160" } }] })(props);
}
function IoVolumeHighSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160" } }, { "tag": "path", "attr": { "d": "M125.65 176.1H32v159.8h93.65L256 440V72L125.65 176.1z" } }] })(props);
}
function IoVolumeHigh(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 01-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z" } }, { "tag": "path", "attr": { "d": "M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z" } }, { "tag": "path", "attr": { "d": "M416 432a16 16 0 01-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1127-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 01416 432z" } }] })(props);
}
function IoVolumeLowOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M189.65 192H120a8 8 0 00-8 8v112a8 8 0 008 8h69.65a16 16 0 0110.14 3.63l91.47 75a8 8 0 0012.74-6.46V119.83a8 8 0 00-12.74-6.44l-91.47 75a16 16 0 01-10.14 3.61zM384 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64" } }] })(props);
}
function IoVolumeLowSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M391.12 341.48l-28.6-14.36 7.18-14.3c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73L362.48 185 391 170.48l7.26 14.25C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18zM189.65 176.1H96v159.8h93.65L320 440V72L189.65 176.1z" } }] })(props);
}
function IoVolumeLow(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M296 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H120a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01320 119.83v272.34a24 24 0 01-24 24zM384 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01384 336z" } }] })(props);
}
function IoVolumeMediumOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M157.65 192H88a8 8 0 00-8 8v112a8 8 0 008 8h69.65a16 16 0 0110.14 3.63l91.47 75a8 8 0 0012.74-6.46V119.83a8 8 0 00-12.74-6.44l-91.47 75a16 16 0 01-10.14 3.61zM352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64m48 176c19.48-34 32-64 32-112s-12-77.7-32-112" } }] })(props);
}
function IoVolumeMediumSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M157.65 176.1H64v159.8h93.65L288 440V72L157.65 176.1z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64m48 176c19.48-34 32-64 32-112s-12-77.7-32-112" } }] })(props);
}
function IoVolumeMedium(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M264 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01288 119.83v272.34a24 24 0 01-24 24zM352 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01352 336z" } }, { "tag": "path", "attr": { "d": "M400 384a16 16 0 01-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 01413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 01-13.88 8z" } }] })(props);
}
function IoVolumeMuteOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M416 432L64 80" } }, { "tag": "path", "attr": { "d": "M224 136.92v33.8a4 4 0 001.17 2.82l24 24a4 4 0 006.83-2.82v-74.15a24.53 24.53 0 00-12.67-21.72 23.91 23.91 0 00-25.55 1.83 8.27 8.27 0 00-.66.51l-31.94 26.15a4 4 0 00-.29 5.92l17.05 17.06a4 4 0 005.37.26zm0 238.16l-78.07-63.92a32 32 0 00-20.28-7.16H64v-96h50.72a4 4 0 002.82-6.83l-24-24a4 4 0 00-2.82-1.17H56a24 24 0 00-24 24v112a24 24 0 0024 24h69.76l91.36 74.8a8.27 8.27 0 00.66.51 23.93 23.93 0 0025.85 1.69A24.49 24.49 0 00256 391.45v-50.17a4 4 0 00-1.17-2.82l-24-24a4 4 0 00-6.83 2.82zM125.82 336zM352 256c0-24.56-5.81-47.88-17.75-71.27a16 16 0 00-28.5 14.54C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 002.32 6.25l19.66 19.67a4 4 0 006.75-2A146.89 146.89 0 00352 256zm64 0c0-51.19-13.08-83.89-34.18-120.06a16 16 0 00-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 001.9 8.26l16.77 16.76a4 4 0 006.52-1.27C410.09 315.88 416 289.91 416 256z" } }, { "tag": "path", "attr": { "d": "M480 256c0-74.26-20.19-121.11-50.51-168.61a16 16 0 10-27 17.22C429.82 147.38 448 189.5 448 256c0 47.45-8.9 82.12-23.59 113a4 4 0 00.77 4.55L443 391.39a4 4 0 006.4-1C470.88 348.22 480 307 480 256z" } }] })(props);
}
function IoVolumeMuteSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M416 432L64 80" } }, { "tag": "path", "attr": { "d": "M352 256c0-24.56-5.81-47.88-17.75-71.27L327 170.47 298.48 185l7.27 14.25C315.34 218.06 320 236.62 320 256a112.91 112.91 0 01-.63 11.74l27.32 27.32A148.8 148.8 0 00352 256zm64 0c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82-27.64 16.12 8.06 13.82C373.07 184.44 384 211.83 384 256c0 25.93-3.89 46.21-11 65.33l24.5 24.51C409.19 319.68 416 292.42 416 256z" } }, { "tag": "path", "attr": { "d": "M480 256c0-74.26-20.19-121.11-50.51-168.61l-8.61-13.49-27 17.22 8.61 13.49C429.82 147.38 448 189.5 448 256c0 48.76-9.4 84-24.82 115.55l23.7 23.7C470.16 351.39 480 309 480 256zM256 72l-73.6 58.78 73.6 73.59V72zM32 176.1v159.8h93.65L256 440V339.63L92.47 176.1H32z" } }] })(props);
}
function IoVolumeMute(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M416 432L64 80" } }, { "tag": "path", "attr": { "d": "M243.33 98.86a23.89 23.89 0 00-25.55 1.82l-.66.51-28.52 23.35a8 8 0 00-.59 11.85l54.33 54.33a8 8 0 0013.66-5.66v-64.49a24.51 24.51 0 00-12.67-21.71zm8 236.43L96.69 180.69A16 16 0 0085.38 176H56a24 24 0 00-24 24v112a24 24 0 0024 24h69.76l92 75.31a23.9 23.9 0 0025.87 1.69A24.51 24.51 0 00256 391.45v-44.86a16 16 0 00-4.67-11.3zM352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 10-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 002.32 6.25l14.36 14.36a8 8 0 0013.55-4.31A146 146 0 00352 256zm64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 00-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 001.9 8.26L389 337.4a8 8 0 0013.13-2.79C411 311.76 416 287.26 416 256z" } }, { "tag": "path", "attr": { "d": "M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 10-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 001.59 9l11.92 11.92a8 8 0 0012.92-2.16C471.6 344.9 480 305 480 256z" } }] })(props);
}
function IoVolumeOffOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M237.65 192H168a8 8 0 00-8 8v112a8 8 0 008 8h69.65a16 16 0 0110.14 3.63l91.47 75a8 8 0 0012.74-6.46V119.83a8 8 0 00-12.74-6.44l-91.47 75a16 16 0 01-10.14 3.61z" } }] })(props);
}
function IoVolumeOffSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M237.65 176.1H144v159.8h93.65L368 440V72L237.65 176.1z" } }] })(props);
}
function IoVolumeOff(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M344 416a23.92 23.92 0 01-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 01-24-24V200.07a24 24 0 0124-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 01368 120v272a24 24 0 01-24 24z" } }] })(props);
}
function IoWalkOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M314.21 482.32l-56.77-114.74-44.89-57.39a72.82 72.82 0 01-10.13-37.05V144h15.67a40.22 40.22 0 0140.23 40.22v183.36M127.9 293.05v-74.52S165.16 144 202.42 144M370.1 274.42L304 231M170.53 478.36L224 400" } }, { "tag": "circle", "attr": { "cx": "258.32", "cy": "69.48", "r": "37.26", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoWalkSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M315.09 481.38l-56.95-115.12-45-57.56a73.11 73.11 0 01-10.16-37.17V142h15.73A40.36 40.36 0 01259 182.32v162.52" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M128.18 291.5v-74.77l64.95-65.1" } }, { "tag": "path", "attr": { "d": "M376.35 295.73l-83.95-56.38v-44.68l104.68 72.95-20.73 28.11zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07-74.43 76.38z" } }, { "tag": "circle", "attr": { "cx": "259.02", "cy": "67.21", "r": "37.38", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "16" } }] })(props);
}
function IoWalk(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M312.55 479.9l-56.42-114-44.62-57a72.37 72.37 0 01-10.06-36.9V143.64H217a40 40 0 0140 40v182.21" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M127.38 291.78v-74.07s37-74.07 74.07-74.07" } }, { "tag": "path", "attr": { "d": "M368.09 291.78a18.49 18.49 0 01-10.26-3.11L297.7 250a21.18 21.18 0 01-9.7-17.79v-23.7a5.65 5.65 0 018.69-4.77l81.65 54.11a18.52 18.52 0 01-10.29 33.93zM171.91 493.47a18.5 18.5 0 01-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0110.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09 5.24 9.95 6 16.11-1.68 25.7-8 10-52 67.44-52 67.44-2.62 2.98-7.23 3.7-11.09 3.7z" } }, { "tag": "circle", "attr": { "cx": "257", "cy": "69.56", "r": "37.04", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "16" } }] })(props);
}
function IoWalletOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "416", "height": "288", "x": "48", "y": "144", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "48", "ry": "48" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49" } }, { "tag": "path", "attr": { "d": "M368 320a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoWalletSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zm416 24h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z" } }, { "tag": "path", "attr": { "d": "M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z" } }] })(props);
}
function IoWallet(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zm320 24h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z" } }, { "tag": "path", "attr": { "d": "M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z" } }] })(props);
}
function IoWarningOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z" } }, { "tag": "path", "attr": { "d": "M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z" } }] })(props);
}
function IoWarningSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M479 447.77L268.43 56.64a8 8 0 00-14.09 0L43.73 447.77a8 8 0 007.05 11.79H472a8 8 0 007-11.79zm-197.62-36.29h-40v-40h40zm-4-63.92h-32l-6-160h44z" } }] })(props);
}
function IoWarning(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0080 446.25h340.89a32 32 0 0028.18-47.17zm-198.6-1.83a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.95a21.73 21.73 0 0121.5-22.69h.21a21.74 21.74 0 0121.73 22.7z" } }] })(props);
}
function IoWatchOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "288", "height": "288", "x": "112", "y": "112", "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "rx": "64", "ry": "64" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M176 112V40a8 8 0 018-8h144a8 8 0 018 8v72m0 288v72a8 8 0 01-8 8H184a8 8 0 01-8-8v-72" } }] })(props);
}
function IoWatchSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "240", "height": "240", "x": "136", "y": "136", "rx": "8", "ry": "8" } }, { "tag": "path", "attr": { "d": "M384 96h-48V16H176v80h-48a32 32 0 00-32 32v256a32 32 0 0032 32h48v80h160v-80h48a32 32 0 0032-32V128a32 32 0 00-32-32zm8 272a24 24 0 01-24 24H144a24 24 0 01-24-24V144a24 24 0 0124-24h224a24 24 0 0124 24z" } }] })(props);
}
function IoWatch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "rect", "attr": { "width": "240", "height": "240", "x": "136", "y": "136", "rx": "56", "ry": "56" } }, { "tag": "path", "attr": { "d": "M336 96V32a16 16 0 00-16-16H192a16 16 0 00-16 16v64a80.09 80.09 0 00-80 80v160a80.09 80.09 0 0080 80v64a16 16 0 0016 16h128a16 16 0 0016-16v-64a80.09 80.09 0 0080-80V176a80.09 80.09 0 00-80-80zm56 224a72.08 72.08 0 01-72 72H192a72.08 72.08 0 01-72-72V192a72.08 72.08 0 0172-72h128a72.08 72.08 0 0172 72z" } }] })(props);
}
function IoWaterOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M344 328a72 72 0 01-72 72" } }] })(props);
}
function IoWaterSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 43.91s-144 158.3-144 270.3c0 88.36 55.64 144 144 144s144-55.64 144-144c0-112-144-270.3-144-270.3zm16 362.3v-24a60.07 60.07 0 0060-60h24a84.09 84.09 0 01-84 84z" } }] })(props);
}
function IoWater(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M265.12 60.12a12 12 0 00-18.23 0C215.23 97.15 112 225.17 112 320c0 88.37 55.64 144 144 144s144-55.63 144-144c0-94.83-103.23-222.85-134.88-259.88zM272 412a12 12 0 01-11.34-16 11.89 11.89 0 0111.41-8A60.06 60.06 0 00332 328.07a11.89 11.89 0 018-11.41A12 12 0 01356 328a84.09 84.09 0 01-84 84z" } }] })(props);
}
function IoWifiOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M332.41 310.59a115 115 0 00-152.8 0m213.85-61.05a201.26 201.26 0 00-274.92 0m329.18-67.43a288 288 0 00-383.44 0" } }, { "tag": "path", "attr": { "d": "M256 416a32 32 0 1132-32 32 32 0 01-32 32z" } }] })(props);
}
function IoWifiSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "42", "d": "M332.69 320a115 115 0 00-152.8 0m213.85-61a201.26 201.26 0 00-274.92 0M448 191.52a288 288 0 00-383.44 0" } }, { "tag": "path", "attr": { "d": "M300.67 384L256 433l-44.34-49a56.73 56.73 0 0188.92 0z" } }] })(props);
}
function IoWifi(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M346.65 304.3a136 136 0 00-180.71 0 21 21 0 1027.91 31.38 94 94 0 01124.89 0 21 21 0 0027.91-31.4z" } }, { "tag": "path", "attr": { "d": "M256.28 183.7a221.47 221.47 0 00-151.8 59.92 21 21 0 1028.68 30.67 180.28 180.28 0 01246.24 0 21 21 0 1028.68-30.67 221.47 221.47 0 00-151.8-59.92z" } }, { "tag": "path", "attr": { "d": "M462 175.86a309 309 0 00-411.44 0 21 21 0 1028 31.29 267 267 0 01355.43 0 21 21 0 0028-31.31z" } }, { "tag": "circle", "attr": { "cx": "256.28", "cy": "393.41", "r": "32" } }] })(props);
}
function IoWineOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M398.57 80H113.43v16S87.51 272 256 272 398.57 96 398.57 96zM256 272v160" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M352 432H160" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M112 160h288" } }] })(props);
}
function IoWineSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M453 112V66.33H60.75V112l175.13 176v118H124.75v42H389v-42H277.88V288zm-336.65-3.67h281l-37.81 38H154.16z" } }] })(props);
}
function IoWine(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M414.56 94.92V80a16 16 0 00-16-16H113.44a16 16 0 00-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69 24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 000 32h192a16 16 0 000-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86 46.58-53.95 38.37-133.32 36.93-144.69zm-285.3 3.41a15.14 15.14 0 00.18-2.33h253.12a15.14 15.14 0 00.18 2.33 201.91 201.91 0 010 45.67H129.32a204.29 204.29 0 01-.06-45.67z" } }] })(props);
}
function IoWomanOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M208 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M256 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V368m-121-94a23.73 23.73 0 01-29.84 16.18h0a23.72 23.72 0 01-16.17-29.84l25-84.28A44.85 44.85 0 01205 144h102a44.85 44.85 0 0143 32.08l25 84.28a23.72 23.72 0 01-16.17 29.84h0a23.73 23.73 0 01-29.78-16.2" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "56", "r": "40", "fill": "none", "strokeLinecap": "round", "strokeMiterlimit": "10", "strokeWidth": "32" } }, { "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M208 192l-48 160h192l-48-160" } }] })(props);
}
function IoWomanSharp(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "255.75", "cy": "56", "r": "56" } }, { "tag": "path", "attr": { "d": "M310.28 191.4h.05l7.66-2.3 36.79 122.6 46-13.8-16.21-54.16c0-.12 0-.24-.07-.36l-16.84-56.12-4.71-15.74-.9-3H362l-2.51-8.45a44.84 44.84 0 00-43-32.08H195.24a44.84 44.84 0 00-43 32.08l-2.51 8.45h-.06l-.9 3-4.71 15.74-16.84 56.12c0 .12 0 .24-.07.36l-16.21 54.16 46 13.8 36.76-122.6 7.54 2.26L148.25 368h51.5v144h52V368h8v144h52V368h51.51z" } }] })(props);
}
function IoWoman(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "circle", "attr": { "cx": "255.75", "cy": "56", "r": "56" } }, { "tag": "path", "attr": { "d": "M394.63 277.9l-10.33-34.41v-.11l-22.46-74.86h-.05l-2.51-8.45a44.87 44.87 0 00-43-32.08h-120a44.84 44.84 0 00-43 32.08l-2.51 8.45h-.06l-22.46 74.86v.11l-10.37 34.41c-3.12 10.39 2.3 21.66 12.57 25.14a20 20 0 0025.6-13.18l25.58-85.25 2.17-7.23a8 8 0 0115.53 2.62 7.78 7.78 0 01-.17 1.61L155.43 347.4a16 16 0 0015.32 20.6h29v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h16v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h30a16 16 0 0015.33-20.6l-43.74-145.81a7.52 7.52 0 01-.16-1.59 8 8 0 0115.54-2.63l2.17 7.23 25.57 85.25A20 20 0 00382.05 303c10.27-3.44 15.69-14.71 12.58-25.1z" } }] })(props);
}
export {
  IoAccessibility,
  IoAccessibilityOutline,
  IoAccessibilitySharp,
  IoAdd,
  IoAddCircle,
  IoAddCircleOutline,
  IoAddCircleSharp,
  IoAddOutline,
  IoAddSharp,
  IoAirplane,
  IoAirplaneOutline,
  IoAirplaneSharp,
  IoAlarm,
  IoAlarmOutline,
  IoAlarmSharp,
  IoAlbums,
  IoAlbumsOutline,
  IoAlbumsSharp,
  IoAlert,
  IoAlertCircle,
  IoAlertCircleOutline,
  IoAlertCircleSharp,
  IoAlertOutline,
  IoAlertSharp,
  IoAmericanFootball,
  IoAmericanFootballOutline,
  IoAmericanFootballSharp,
  IoAnalytics,
  IoAnalyticsOutline,
  IoAnalyticsSharp,
  IoAperture,
  IoApertureOutline,
  IoApertureSharp,
  IoApps,
  IoAppsOutline,
  IoAppsSharp,
  IoArchive,
  IoArchiveOutline,
  IoArchiveSharp,
  IoArrowBack,
  IoArrowBackCircle,
  IoArrowBackCircleOutline,
  IoArrowBackCircleSharp,
  IoArrowBackOutline,
  IoArrowBackSharp,
  IoArrowDown,
  IoArrowDownCircle,
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowDownOutline,
  IoArrowDownSharp,
  IoArrowForward,
  IoArrowForwardCircle,
  IoArrowForwardCircleOutline,
  IoArrowForwardCircleSharp,
  IoArrowForwardOutline,
  IoArrowForwardSharp,
  IoArrowRedo,
  IoArrowRedoCircle,
  IoArrowRedoCircleOutline,
  IoArrowRedoCircleSharp,
  IoArrowRedoOutline,
  IoArrowRedoSharp,
  IoArrowUndo,
  IoArrowUndoCircle,
  IoArrowUndoCircleOutline,
  IoArrowUndoCircleSharp,
  IoArrowUndoOutline,
  IoArrowUndoSharp,
  IoArrowUp,
  IoArrowUpCircle,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoArrowUpOutline,
  IoArrowUpSharp,
  IoAt,
  IoAtCircle,
  IoAtCircleOutline,
  IoAtCircleSharp,
  IoAtOutline,
  IoAtSharp,
  IoAttach,
  IoAttachOutline,
  IoAttachSharp,
  IoBackspace,
  IoBackspaceOutline,
  IoBackspaceSharp,
  IoBag,
  IoBagAdd,
  IoBagAddOutline,
  IoBagAddSharp,
  IoBagCheck,
  IoBagCheckOutline,
  IoBagCheckSharp,
  IoBagHandle,
  IoBagHandleOutline,
  IoBagHandleSharp,
  IoBagOutline,
  IoBagRemove,
  IoBagRemoveOutline,
  IoBagRemoveSharp,
  IoBagSharp,
  IoBalloon,
  IoBalloonOutline,
  IoBalloonSharp,
  IoBan,
  IoBanOutline,
  IoBanSharp,
  IoBandage,
  IoBandageOutline,
  IoBandageSharp,
  IoBarChart,
  IoBarChartOutline,
  IoBarChartSharp,
  IoBarbell,
  IoBarbellOutline,
  IoBarbellSharp,
  IoBarcode,
  IoBarcodeOutline,
  IoBarcodeSharp,
  IoBaseball,
  IoBaseballOutline,
  IoBaseballSharp,
  IoBasket,
  IoBasketOutline,
  IoBasketSharp,
  IoBasketball,
  IoBasketballOutline,
  IoBasketballSharp,
  IoBatteryCharging,
  IoBatteryChargingOutline,
  IoBatteryChargingSharp,
  IoBatteryDead,
  IoBatteryDeadOutline,
  IoBatteryDeadSharp,
  IoBatteryFull,
  IoBatteryFullOutline,
  IoBatteryFullSharp,
  IoBatteryHalf,
  IoBatteryHalfOutline,
  IoBatteryHalfSharp,
  IoBeaker,
  IoBeakerOutline,
  IoBeakerSharp,
  IoBed,
  IoBedOutline,
  IoBedSharp,
  IoBeer,
  IoBeerOutline,
  IoBeerSharp,
  IoBicycle,
  IoBicycleOutline,
  IoBicycleSharp,
  IoBluetooth,
  IoBluetoothOutline,
  IoBluetoothSharp,
  IoBoat,
  IoBoatOutline,
  IoBoatSharp,
  IoBody,
  IoBodyOutline,
  IoBodySharp,
  IoBonfire,
  IoBonfireOutline,
  IoBonfireSharp,
  IoBook,
  IoBookOutline,
  IoBookSharp,
  IoBookmark,
  IoBookmarkOutline,
  IoBookmarkSharp,
  IoBookmarks,
  IoBookmarksOutline,
  IoBookmarksSharp,
  IoBowlingBall,
  IoBowlingBallOutline,
  IoBowlingBallSharp,
  IoBriefcase,
  IoBriefcaseOutline,
  IoBriefcaseSharp,
  IoBrowsers,
  IoBrowsersOutline,
  IoBrowsersSharp,
  IoBrush,
  IoBrushOutline,
  IoBrushSharp,
  IoBug,
  IoBugOutline,
  IoBugSharp,
  IoBuild,
  IoBuildOutline,
  IoBuildSharp,
  IoBulb,
  IoBulbOutline,
  IoBulbSharp,
  IoBus,
  IoBusOutline,
  IoBusSharp,
  IoBusiness,
  IoBusinessOutline,
  IoBusinessSharp,
  IoCafe,
  IoCafeOutline,
  IoCafeSharp,
  IoCalculator,
  IoCalculatorOutline,
  IoCalculatorSharp,
  IoCalendar,
  IoCalendarClear,
  IoCalendarClearOutline,
  IoCalendarClearSharp,
  IoCalendarNumber,
  IoCalendarNumberOutline,
  IoCalendarNumberSharp,
  IoCalendarOutline,
  IoCalendarSharp,
  IoCall,
  IoCallOutline,
  IoCallSharp,
  IoCamera,
  IoCameraOutline,
  IoCameraReverse,
  IoCameraReverseOutline,
  IoCameraReverseSharp,
  IoCameraSharp,
  IoCar,
  IoCarOutline,
  IoCarSharp,
  IoCarSport,
  IoCarSportOutline,
  IoCarSportSharp,
  IoCard,
  IoCardOutline,
  IoCardSharp,
  IoCaretBack,
  IoCaretBackCircle,
  IoCaretBackCircleOutline,
  IoCaretBackCircleSharp,
  IoCaretBackOutline,
  IoCaretBackSharp,
  IoCaretDown,
  IoCaretDownCircle,
  IoCaretDownCircleOutline,
  IoCaretDownCircleSharp,
  IoCaretDownOutline,
  IoCaretDownSharp,
  IoCaretForward,
  IoCaretForwardCircle,
  IoCaretForwardCircleOutline,
  IoCaretForwardCircleSharp,
  IoCaretForwardOutline,
  IoCaretForwardSharp,
  IoCaretUp,
  IoCaretUpCircle,
  IoCaretUpCircleOutline,
  IoCaretUpCircleSharp,
  IoCaretUpOutline,
  IoCaretUpSharp,
  IoCart,
  IoCartOutline,
  IoCartSharp,
  IoCash,
  IoCashOutline,
  IoCashSharp,
  IoCellular,
  IoCellularOutline,
  IoCellularSharp,
  IoChatbox,
  IoChatboxEllipses,
  IoChatboxEllipsesOutline,
  IoChatboxEllipsesSharp,
  IoChatboxOutline,
  IoChatboxSharp,
  IoChatbubble,
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
  IoChatbubbleOutline,
  IoChatbubbleSharp,
  IoChatbubbles,
  IoChatbubblesOutline,
  IoChatbubblesSharp,
  IoCheckbox,
  IoCheckboxOutline,
  IoCheckboxSharp,
  IoCheckmark,
  IoCheckmarkCircle,
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
  IoCheckmarkDone,
  IoCheckmarkDoneCircle,
  IoCheckmarkDoneCircleOutline,
  IoCheckmarkDoneCircleSharp,
  IoCheckmarkDoneOutline,
  IoCheckmarkDoneSharp,
  IoCheckmarkOutline,
  IoCheckmarkSharp,
  IoChevronBack,
  IoChevronBackCircle,
  IoChevronBackCircleOutline,
  IoChevronBackCircleSharp,
  IoChevronBackOutline,
  IoChevronBackSharp,
  IoChevronDown,
  IoChevronDownCircle,
  IoChevronDownCircleOutline,
  IoChevronDownCircleSharp,
  IoChevronDownOutline,
  IoChevronDownSharp,
  IoChevronForward,
  IoChevronForwardCircle,
  IoChevronForwardCircleOutline,
  IoChevronForwardCircleSharp,
  IoChevronForwardOutline,
  IoChevronForwardSharp,
  IoChevronUp,
  IoChevronUpCircle,
  IoChevronUpCircleOutline,
  IoChevronUpCircleSharp,
  IoChevronUpOutline,
  IoChevronUpSharp,
  IoClipboard,
  IoClipboardOutline,
  IoClipboardSharp,
  IoClose,
  IoCloseCircle,
  IoCloseCircleOutline,
  IoCloseCircleSharp,
  IoCloseOutline,
  IoCloseSharp,
  IoCloud,
  IoCloudCircle,
  IoCloudCircleOutline,
  IoCloudCircleSharp,
  IoCloudDone,
  IoCloudDoneOutline,
  IoCloudDoneSharp,
  IoCloudDownload,
  IoCloudDownloadOutline,
  IoCloudDownloadSharp,
  IoCloudOffline,
  IoCloudOfflineOutline,
  IoCloudOfflineSharp,
  IoCloudOutline,
  IoCloudSharp,
  IoCloudUpload,
  IoCloudUploadOutline,
  IoCloudUploadSharp,
  IoCloudy,
  IoCloudyNight,
  IoCloudyNightOutline,
  IoCloudyNightSharp,
  IoCloudyOutline,
  IoCloudySharp,
  IoCode,
  IoCodeDownload,
  IoCodeDownloadOutline,
  IoCodeDownloadSharp,
  IoCodeOutline,
  IoCodeSharp,
  IoCodeSlash,
  IoCodeSlashOutline,
  IoCodeSlashSharp,
  IoCodeWorking,
  IoCodeWorkingOutline,
  IoCodeWorkingSharp,
  IoCog,
  IoCogOutline,
  IoCogSharp,
  IoColorFill,
  IoColorFillOutline,
  IoColorFillSharp,
  IoColorFilter,
  IoColorFilterOutline,
  IoColorFilterSharp,
  IoColorPalette,
  IoColorPaletteOutline,
  IoColorPaletteSharp,
  IoColorWand,
  IoColorWandOutline,
  IoColorWandSharp,
  IoCompass,
  IoCompassOutline,
  IoCompassSharp,
  IoConstruct,
  IoConstructOutline,
  IoConstructSharp,
  IoContract,
  IoContractOutline,
  IoContractSharp,
  IoContrast,
  IoContrastOutline,
  IoContrastSharp,
  IoCopy,
  IoCopyOutline,
  IoCopySharp,
  IoCreate,
  IoCreateOutline,
  IoCreateSharp,
  IoCrop,
  IoCropOutline,
  IoCropSharp,
  IoCube,
  IoCubeOutline,
  IoCubeSharp,
  IoCut,
  IoCutOutline,
  IoCutSharp,
  IoDesktop,
  IoDesktopOutline,
  IoDesktopSharp,
  IoDiamond,
  IoDiamondOutline,
  IoDiamondSharp,
  IoDice,
  IoDiceOutline,
  IoDiceSharp,
  IoDisc,
  IoDiscOutline,
  IoDiscSharp,
  IoDocument,
  IoDocumentAttach,
  IoDocumentAttachOutline,
  IoDocumentAttachSharp,
  IoDocumentLock,
  IoDocumentLockOutline,
  IoDocumentLockSharp,
  IoDocumentOutline,
  IoDocumentSharp,
  IoDocumentText,
  IoDocumentTextOutline,
  IoDocumentTextSharp,
  IoDocuments,
  IoDocumentsOutline,
  IoDocumentsSharp,
  IoDownload,
  IoDownloadOutline,
  IoDownloadSharp,
  IoDuplicate,
  IoDuplicateOutline,
  IoDuplicateSharp,
  IoEar,
  IoEarOutline,
  IoEarSharp,
  IoEarth,
  IoEarthOutline,
  IoEarthSharp,
  IoEasel,
  IoEaselOutline,
  IoEaselSharp,
  IoEgg,
  IoEggOutline,
  IoEggSharp,
  IoEllipse,
  IoEllipseOutline,
  IoEllipseSharp,
  IoEllipsisHorizontal,
  IoEllipsisHorizontalCircle,
  IoEllipsisHorizontalCircleOutline,
  IoEllipsisHorizontalCircleSharp,
  IoEllipsisHorizontalOutline,
  IoEllipsisHorizontalSharp,
  IoEllipsisVertical,
  IoEllipsisVerticalCircle,
  IoEllipsisVerticalCircleOutline,
  IoEllipsisVerticalCircleSharp,
  IoEllipsisVerticalOutline,
  IoEllipsisVerticalSharp,
  IoEnter,
  IoEnterOutline,
  IoEnterSharp,
  IoExit,
  IoExitOutline,
  IoExitSharp,
  IoExpand,
  IoExpandOutline,
  IoExpandSharp,
  IoExtensionPuzzle,
  IoExtensionPuzzleOutline,
  IoExtensionPuzzleSharp,
  IoEye,
  IoEyeOff,
  IoEyeOffOutline,
  IoEyeOffSharp,
  IoEyeOutline,
  IoEyeSharp,
  IoEyedrop,
  IoEyedropOutline,
  IoEyedropSharp,
  IoFastFood,
  IoFastFoodOutline,
  IoFastFoodSharp,
  IoFemale,
  IoFemaleOutline,
  IoFemaleSharp,
  IoFileTray,
  IoFileTrayFull,
  IoFileTrayFullOutline,
  IoFileTrayFullSharp,
  IoFileTrayOutline,
  IoFileTraySharp,
  IoFileTrayStacked,
  IoFileTrayStackedOutline,
  IoFileTrayStackedSharp,
  IoFilm,
  IoFilmOutline,
  IoFilmSharp,
  IoFilter,
  IoFilterCircle,
  IoFilterCircleOutline,
  IoFilterCircleSharp,
  IoFilterOutline,
  IoFilterSharp,
  IoFingerPrint,
  IoFingerPrintOutline,
  IoFingerPrintSharp,
  IoFish,
  IoFishOutline,
  IoFishSharp,
  IoFitness,
  IoFitnessOutline,
  IoFitnessSharp,
  IoFlag,
  IoFlagOutline,
  IoFlagSharp,
  IoFlame,
  IoFlameOutline,
  IoFlameSharp,
  IoFlash,
  IoFlashOff,
  IoFlashOffOutline,
  IoFlashOffSharp,
  IoFlashOutline,
  IoFlashSharp,
  IoFlashlight,
  IoFlashlightOutline,
  IoFlashlightSharp,
  IoFlask,
  IoFlaskOutline,
  IoFlaskSharp,
  IoFlower,
  IoFlowerOutline,
  IoFlowerSharp,
  IoFolder,
  IoFolderOpen,
  IoFolderOpenOutline,
  IoFolderOpenSharp,
  IoFolderOutline,
  IoFolderSharp,
  IoFootball,
  IoFootballOutline,
  IoFootballSharp,
  IoFootsteps,
  IoFootstepsOutline,
  IoFootstepsSharp,
  IoFunnel,
  IoFunnelOutline,
  IoFunnelSharp,
  IoGameController,
  IoGameControllerOutline,
  IoGameControllerSharp,
  IoGift,
  IoGiftOutline,
  IoGiftSharp,
  IoGitBranch,
  IoGitBranchOutline,
  IoGitBranchSharp,
  IoGitCommit,
  IoGitCommitOutline,
  IoGitCommitSharp,
  IoGitCompare,
  IoGitCompareOutline,
  IoGitCompareSharp,
  IoGitMerge,
  IoGitMergeOutline,
  IoGitMergeSharp,
  IoGitNetwork,
  IoGitNetworkOutline,
  IoGitNetworkSharp,
  IoGitPullRequest,
  IoGitPullRequestOutline,
  IoGitPullRequestSharp,
  IoGlasses,
  IoGlassesOutline,
  IoGlassesSharp,
  IoGlobe,
  IoGlobeOutline,
  IoGlobeSharp,
  IoGolf,
  IoGolfOutline,
  IoGolfSharp,
  IoGrid,
  IoGridOutline,
  IoGridSharp,
  IoHammer,
  IoHammerOutline,
  IoHammerSharp,
  IoHandLeft,
  IoHandLeftOutline,
  IoHandLeftSharp,
  IoHandRight,
  IoHandRightOutline,
  IoHandRightSharp,
  IoHappy,
  IoHappyOutline,
  IoHappySharp,
  IoHardwareChip,
  IoHardwareChipOutline,
  IoHardwareChipSharp,
  IoHeadset,
  IoHeadsetOutline,
  IoHeadsetSharp,
  IoHeart,
  IoHeartCircle,
  IoHeartCircleOutline,
  IoHeartCircleSharp,
  IoHeartDislike,
  IoHeartDislikeCircle,
  IoHeartDislikeCircleOutline,
  IoHeartDislikeCircleSharp,
  IoHeartDislikeOutline,
  IoHeartDislikeSharp,
  IoHeartHalf,
  IoHeartHalfOutline,
  IoHeartHalfSharp,
  IoHeartOutline,
  IoHeartSharp,
  IoHelp,
  IoHelpBuoy,
  IoHelpBuoyOutline,
  IoHelpBuoySharp,
  IoHelpCircle,
  IoHelpCircleOutline,
  IoHelpCircleSharp,
  IoHelpOutline,
  IoHelpSharp,
  IoHome,
  IoHomeOutline,
  IoHomeSharp,
  IoHourglass,
  IoHourglassOutline,
  IoHourglassSharp,
  IoIceCream,
  IoIceCreamOutline,
  IoIceCreamSharp,
  IoIdCard,
  IoIdCardOutline,
  IoIdCardSharp,
  IoImage,
  IoImageOutline,
  IoImageSharp,
  IoImages,
  IoImagesOutline,
  IoImagesSharp,
  IoInfinite,
  IoInfiniteOutline,
  IoInfiniteSharp,
  IoInformation,
  IoInformationCircle,
  IoInformationCircleOutline,
  IoInformationCircleSharp,
  IoInformationOutline,
  IoInformationSharp,
  IoInvertMode,
  IoInvertModeOutline,
  IoInvertModeSharp,
  IoJournal,
  IoJournalOutline,
  IoJournalSharp,
  IoKey,
  IoKeyOutline,
  IoKeySharp,
  IoKeypad,
  IoKeypadOutline,
  IoKeypadSharp,
  IoLanguage,
  IoLanguageOutline,
  IoLanguageSharp,
  IoLaptop,
  IoLaptopOutline,
  IoLaptopSharp,
  IoLayers,
  IoLayersOutline,
  IoLayersSharp,
  IoLeaf,
  IoLeafOutline,
  IoLeafSharp,
  IoLibrary,
  IoLibraryOutline,
  IoLibrarySharp,
  IoLink,
  IoLinkOutline,
  IoLinkSharp,
  IoList,
  IoListCircle,
  IoListCircleOutline,
  IoListCircleSharp,
  IoListOutline,
  IoListSharp,
  IoLocate,
  IoLocateOutline,
  IoLocateSharp,
  IoLocation,
  IoLocationOutline,
  IoLocationSharp,
  IoLockClosed,
  IoLockClosedOutline,
  IoLockClosedSharp,
  IoLockOpen,
  IoLockOpenOutline,
  IoLockOpenSharp,
  IoLogIn,
  IoLogInOutline,
  IoLogInSharp,
  IoLogOut,
  IoLogOutOutline,
  IoLogOutSharp,
  IoLogoAlipay,
  IoLogoAmazon,
  IoLogoAmplify,
  IoLogoAndroid,
  IoLogoAngular,
  IoLogoApple,
  IoLogoAppleAppstore,
  IoLogoAppleAr,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoBitcoin,
  IoLogoBuffer,
  IoLogoCapacitor,
  IoLogoChrome,
  IoLogoClosedCaptioning,
  IoLogoCodepen,
  IoLogoCss3,
  IoLogoDesignernews,
  IoLogoDeviantart,
  IoLogoDiscord,
  IoLogoDocker,
  IoLogoDribbble,
  IoLogoDropbox,
  IoLogoEdge,
  IoLogoElectron,
  IoLogoEuro,
  IoLogoFacebook,
  IoLogoFigma,
  IoLogoFirebase,
  IoLogoFirefox,
  IoLogoFlickr,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoGoogle,
  IoLogoGooglePlaystore,
  IoLogoHackernews,
  IoLogoHtml5,
  IoLogoInstagram,
  IoLogoIonic,
  IoLogoIonitron,
  IoLogoJavascript,
  IoLogoLaravel,
  IoLogoLinkedin,
  IoLogoMarkdown,
  IoLogoMastodon,
  IoLogoMedium,
  IoLogoMicrosoft,
  IoLogoNoSmoking,
  IoLogoNodejs,
  IoLogoNpm,
  IoLogoOctocat,
  IoLogoPaypal,
  IoLogoPinterest,
  IoLogoPlaystation,
  IoLogoPwa,
  IoLogoPython,
  IoLogoReact,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSass,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoStackoverflow,
  IoLogoSteam,
  IoLogoStencil,
  IoLogoTableau,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTux,
  IoLogoTwitch,
  IoLogoTwitter,
  IoLogoUsd,
  IoLogoVenmo,
  IoLogoVercel,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoVue,
  IoLogoWebComponent,
  IoLogoWechat,
  IoLogoWhatsapp,
  IoLogoWindows,
  IoLogoWordpress,
  IoLogoXbox,
  IoLogoXing,
  IoLogoYahoo,
  IoLogoYen,
  IoLogoYoutube,
  IoMagnet,
  IoMagnetOutline,
  IoMagnetSharp,
  IoMail,
  IoMailOpen,
  IoMailOpenOutline,
  IoMailOpenSharp,
  IoMailOutline,
  IoMailSharp,
  IoMailUnread,
  IoMailUnreadOutline,
  IoMailUnreadSharp,
  IoMale,
  IoMaleFemale,
  IoMaleFemaleOutline,
  IoMaleFemaleSharp,
  IoMaleOutline,
  IoMaleSharp,
  IoMan,
  IoManOutline,
  IoManSharp,
  IoMap,
  IoMapOutline,
  IoMapSharp,
  IoMedal,
  IoMedalOutline,
  IoMedalSharp,
  IoMedical,
  IoMedicalOutline,
  IoMedicalSharp,
  IoMedkit,
  IoMedkitOutline,
  IoMedkitSharp,
  IoMegaphone,
  IoMegaphoneOutline,
  IoMegaphoneSharp,
  IoMenu,
  IoMenuOutline,
  IoMenuSharp,
  IoMic,
  IoMicCircle,
  IoMicCircleOutline,
  IoMicCircleSharp,
  IoMicOff,
  IoMicOffCircle,
  IoMicOffCircleOutline,
  IoMicOffCircleSharp,
  IoMicOffOutline,
  IoMicOffSharp,
  IoMicOutline,
  IoMicSharp,
  IoMoon,
  IoMoonOutline,
  IoMoonSharp,
  IoMove,
  IoMoveOutline,
  IoMoveSharp,
  IoMusicalNote,
  IoMusicalNoteOutline,
  IoMusicalNoteSharp,
  IoMusicalNotes,
  IoMusicalNotesOutline,
  IoMusicalNotesSharp,
  IoNavigate,
  IoNavigateCircle,
  IoNavigateCircleOutline,
  IoNavigateCircleSharp,
  IoNavigateOutline,
  IoNavigateSharp,
  IoNewspaper,
  IoNewspaperOutline,
  IoNewspaperSharp,
  IoNotifications,
  IoNotificationsCircle,
  IoNotificationsCircleOutline,
  IoNotificationsCircleSharp,
  IoNotificationsOff,
  IoNotificationsOffCircle,
  IoNotificationsOffCircleOutline,
  IoNotificationsOffCircleSharp,
  IoNotificationsOffOutline,
  IoNotificationsOffSharp,
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoNuclear,
  IoNuclearOutline,
  IoNuclearSharp,
  IoNutrition,
  IoNutritionOutline,
  IoNutritionSharp,
  IoOpen,
  IoOpenOutline,
  IoOpenSharp,
  IoOptions,
  IoOptionsOutline,
  IoOptionsSharp,
  IoPaperPlane,
  IoPaperPlaneOutline,
  IoPaperPlaneSharp,
  IoPartlySunny,
  IoPartlySunnyOutline,
  IoPartlySunnySharp,
  IoPause,
  IoPauseCircle,
  IoPauseCircleOutline,
  IoPauseCircleSharp,
  IoPauseOutline,
  IoPauseSharp,
  IoPaw,
  IoPawOutline,
  IoPawSharp,
  IoPencil,
  IoPencilOutline,
  IoPencilSharp,
  IoPeople,
  IoPeopleCircle,
  IoPeopleCircleOutline,
  IoPeopleCircleSharp,
  IoPeopleOutline,
  IoPeopleSharp,
  IoPerson,
  IoPersonAdd,
  IoPersonAddOutline,
  IoPersonAddSharp,
  IoPersonCircle,
  IoPersonCircleOutline,
  IoPersonCircleSharp,
  IoPersonOutline,
  IoPersonRemove,
  IoPersonRemoveOutline,
  IoPersonRemoveSharp,
  IoPersonSharp,
  IoPhoneLandscape,
  IoPhoneLandscapeOutline,
  IoPhoneLandscapeSharp,
  IoPhonePortrait,
  IoPhonePortraitOutline,
  IoPhonePortraitSharp,
  IoPieChart,
  IoPieChartOutline,
  IoPieChartSharp,
  IoPin,
  IoPinOutline,
  IoPinSharp,
  IoPint,
  IoPintOutline,
  IoPintSharp,
  IoPizza,
  IoPizzaOutline,
  IoPizzaSharp,
  IoPlanet,
  IoPlanetOutline,
  IoPlanetSharp,
  IoPlay,
  IoPlayBack,
  IoPlayBackCircle,
  IoPlayBackCircleOutline,
  IoPlayBackCircleSharp,
  IoPlayBackOutline,
  IoPlayBackSharp,
  IoPlayCircle,
  IoPlayCircleOutline,
  IoPlayCircleSharp,
  IoPlayForward,
  IoPlayForwardCircle,
  IoPlayForwardCircleOutline,
  IoPlayForwardCircleSharp,
  IoPlayForwardOutline,
  IoPlayForwardSharp,
  IoPlayOutline,
  IoPlaySharp,
  IoPlaySkipBack,
  IoPlaySkipBackCircle,
  IoPlaySkipBackCircleOutline,
  IoPlaySkipBackCircleSharp,
  IoPlaySkipBackOutline,
  IoPlaySkipBackSharp,
  IoPlaySkipForward,
  IoPlaySkipForwardCircle,
  IoPlaySkipForwardCircleOutline,
  IoPlaySkipForwardCircleSharp,
  IoPlaySkipForwardOutline,
  IoPlaySkipForwardSharp,
  IoPodium,
  IoPodiumOutline,
  IoPodiumSharp,
  IoPower,
  IoPowerOutline,
  IoPowerSharp,
  IoPricetag,
  IoPricetagOutline,
  IoPricetagSharp,
  IoPricetags,
  IoPricetagsOutline,
  IoPricetagsSharp,
  IoPrint,
  IoPrintOutline,
  IoPrintSharp,
  IoPrism,
  IoPrismOutline,
  IoPrismSharp,
  IoPulse,
  IoPulseOutline,
  IoPulseSharp,
  IoPush,
  IoPushOutline,
  IoPushSharp,
  IoQrCode,
  IoQrCodeOutline,
  IoQrCodeSharp,
  IoRadio,
  IoRadioButtonOff,
  IoRadioButtonOffOutline,
  IoRadioButtonOffSharp,
  IoRadioButtonOn,
  IoRadioButtonOnOutline,
  IoRadioButtonOnSharp,
  IoRadioOutline,
  IoRadioSharp,
  IoRainy,
  IoRainyOutline,
  IoRainySharp,
  IoReader,
  IoReaderOutline,
  IoReaderSharp,
  IoReceipt,
  IoReceiptOutline,
  IoReceiptSharp,
  IoRecording,
  IoRecordingOutline,
  IoRecordingSharp,
  IoRefresh,
  IoRefreshCircle,
  IoRefreshCircleOutline,
  IoRefreshCircleSharp,
  IoRefreshOutline,
  IoRefreshSharp,
  IoReload,
  IoReloadCircle,
  IoReloadCircleOutline,
  IoReloadCircleSharp,
  IoReloadOutline,
  IoReloadSharp,
  IoRemove,
  IoRemoveCircle,
  IoRemoveCircleOutline,
  IoRemoveCircleSharp,
  IoRemoveOutline,
  IoRemoveSharp,
  IoReorderFour,
  IoReorderFourOutline,
  IoReorderFourSharp,
  IoReorderThree,
  IoReorderThreeOutline,
  IoReorderThreeSharp,
  IoReorderTwo,
  IoReorderTwoOutline,
  IoReorderTwoSharp,
  IoRepeat,
  IoRepeatOutline,
  IoRepeatSharp,
  IoResize,
  IoResizeOutline,
  IoResizeSharp,
  IoRestaurant,
  IoRestaurantOutline,
  IoRestaurantSharp,
  IoReturnDownBack,
  IoReturnDownBackOutline,
  IoReturnDownBackSharp,
  IoReturnDownForward,
  IoReturnDownForwardOutline,
  IoReturnDownForwardSharp,
  IoReturnUpBack,
  IoReturnUpBackOutline,
  IoReturnUpBackSharp,
  IoReturnUpForward,
  IoReturnUpForwardOutline,
  IoReturnUpForwardSharp,
  IoRibbon,
  IoRibbonOutline,
  IoRibbonSharp,
  IoRocket,
  IoRocketOutline,
  IoRocketSharp,
  IoRose,
  IoRoseOutline,
  IoRoseSharp,
  IoSad,
  IoSadOutline,
  IoSadSharp,
  IoSave,
  IoSaveOutline,
  IoSaveSharp,
  IoScale,
  IoScaleOutline,
  IoScaleSharp,
  IoScan,
  IoScanCircle,
  IoScanCircleOutline,
  IoScanCircleSharp,
  IoScanOutline,
  IoScanSharp,
  IoSchool,
  IoSchoolOutline,
  IoSchoolSharp,
  IoSearch,
  IoSearchCircle,
  IoSearchCircleOutline,
  IoSearchCircleSharp,
  IoSearchOutline,
  IoSearchSharp,
  IoSend,
  IoSendOutline,
  IoSendSharp,
  IoServer,
  IoServerOutline,
  IoServerSharp,
  IoSettings,
  IoSettingsOutline,
  IoSettingsSharp,
  IoShapes,
  IoShapesOutline,
  IoShapesSharp,
  IoShare,
  IoShareOutline,
  IoShareSharp,
  IoShareSocial,
  IoShareSocialOutline,
  IoShareSocialSharp,
  IoShield,
  IoShieldCheckmark,
  IoShieldCheckmarkOutline,
  IoShieldCheckmarkSharp,
  IoShieldHalf,
  IoShieldHalfOutline,
  IoShieldHalfSharp,
  IoShieldOutline,
  IoShieldSharp,
  IoShirt,
  IoShirtOutline,
  IoShirtSharp,
  IoShuffle,
  IoShuffleOutline,
  IoShuffleSharp,
  IoSkull,
  IoSkullOutline,
  IoSkullSharp,
  IoSnow,
  IoSnowOutline,
  IoSnowSharp,
  IoSparkles,
  IoSparklesOutline,
  IoSparklesSharp,
  IoSpeedometer,
  IoSpeedometerOutline,
  IoSpeedometerSharp,
  IoSquare,
  IoSquareOutline,
  IoSquareSharp,
  IoStar,
  IoStarHalf,
  IoStarHalfOutline,
  IoStarHalfSharp,
  IoStarOutline,
  IoStarSharp,
  IoStatsChart,
  IoStatsChartOutline,
  IoStatsChartSharp,
  IoStop,
  IoStopCircle,
  IoStopCircleOutline,
  IoStopCircleSharp,
  IoStopOutline,
  IoStopSharp,
  IoStopwatch,
  IoStopwatchOutline,
  IoStopwatchSharp,
  IoStorefront,
  IoStorefrontOutline,
  IoStorefrontSharp,
  IoSubway,
  IoSubwayOutline,
  IoSubwaySharp,
  IoSunny,
  IoSunnyOutline,
  IoSunnySharp,
  IoSwapHorizontal,
  IoSwapHorizontalOutline,
  IoSwapHorizontalSharp,
  IoSwapVertical,
  IoSwapVerticalOutline,
  IoSwapVerticalSharp,
  IoSync,
  IoSyncCircle,
  IoSyncCircleOutline,
  IoSyncCircleSharp,
  IoSyncOutline,
  IoSyncSharp,
  IoTabletLandscape,
  IoTabletLandscapeOutline,
  IoTabletLandscapeSharp,
  IoTabletPortrait,
  IoTabletPortraitOutline,
  IoTabletPortraitSharp,
  IoTelescope,
  IoTelescopeOutline,
  IoTelescopeSharp,
  IoTennisball,
  IoTennisballOutline,
  IoTennisballSharp,
  IoTerminal,
  IoTerminalOutline,
  IoTerminalSharp,
  IoText,
  IoTextOutline,
  IoTextSharp,
  IoThermometer,
  IoThermometerOutline,
  IoThermometerSharp,
  IoThumbsDown,
  IoThumbsDownOutline,
  IoThumbsDownSharp,
  IoThumbsUp,
  IoThumbsUpOutline,
  IoThumbsUpSharp,
  IoThunderstorm,
  IoThunderstormOutline,
  IoThunderstormSharp,
  IoTicket,
  IoTicketOutline,
  IoTicketSharp,
  IoTime,
  IoTimeOutline,
  IoTimeSharp,
  IoTimer,
  IoTimerOutline,
  IoTimerSharp,
  IoToday,
  IoTodayOutline,
  IoTodaySharp,
  IoToggle,
  IoToggleOutline,
  IoToggleSharp,
  IoTrailSign,
  IoTrailSignOutline,
  IoTrailSignSharp,
  IoTrain,
  IoTrainOutline,
  IoTrainSharp,
  IoTransgender,
  IoTransgenderOutline,
  IoTransgenderSharp,
  IoTrash,
  IoTrashBin,
  IoTrashBinOutline,
  IoTrashBinSharp,
  IoTrashOutline,
  IoTrashSharp,
  IoTrendingDown,
  IoTrendingDownOutline,
  IoTrendingDownSharp,
  IoTrendingUp,
  IoTrendingUpOutline,
  IoTrendingUpSharp,
  IoTriangle,
  IoTriangleOutline,
  IoTriangleSharp,
  IoTrophy,
  IoTrophyOutline,
  IoTrophySharp,
  IoTv,
  IoTvOutline,
  IoTvSharp,
  IoUmbrella,
  IoUmbrellaOutline,
  IoUmbrellaSharp,
  IoUnlink,
  IoUnlinkOutline,
  IoUnlinkSharp,
  IoVideocam,
  IoVideocamOff,
  IoVideocamOffOutline,
  IoVideocamOffSharp,
  IoVideocamOutline,
  IoVideocamSharp,
  IoVolumeHigh,
  IoVolumeHighOutline,
  IoVolumeHighSharp,
  IoVolumeLow,
  IoVolumeLowOutline,
  IoVolumeLowSharp,
  IoVolumeMedium,
  IoVolumeMediumOutline,
  IoVolumeMediumSharp,
  IoVolumeMute,
  IoVolumeMuteOutline,
  IoVolumeMuteSharp,
  IoVolumeOff,
  IoVolumeOffOutline,
  IoVolumeOffSharp,
  IoWalk,
  IoWalkOutline,
  IoWalkSharp,
  IoWallet,
  IoWalletOutline,
  IoWalletSharp,
  IoWarning,
  IoWarningOutline,
  IoWarningSharp,
  IoWatch,
  IoWatchOutline,
  IoWatchSharp,
  IoWater,
  IoWaterOutline,
  IoWaterSharp,
  IoWifi,
  IoWifiOutline,
  IoWifiSharp,
  IoWine,
  IoWineOutline,
  IoWineSharp,
  IoWoman,
  IoWomanOutline,
  IoWomanSharp
};
//# sourceMappingURL=react-icons_io5.js.map
