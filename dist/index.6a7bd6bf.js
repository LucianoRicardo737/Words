import { r as react, R as React, a as reactDom } from "./vendor.552242f6.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var home = ".sectionDiv{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    width: 100%;\n    border-radius: 5px;\n    box-sizing: border-box;\n    align-items: center;\n    justify-content: space-between;\n    height: 90vh;\n    padding-top: 2em;\n    padding-bottom: 2em;\n\n}\n.divCont{    \n    display:flex;\n    flex-direction: row;\n    color: #cd4040d3;\n    box-sizing: border-box;\n    flex-wrap: wrap;\n    width: 100%;\n    overflow: hidden;\n    justify-content: center;\n\n}\n.divWords{\n    display:flex;\n    flex-direction: row;\n    box-sizing: border-box;\n    margin-top: -0.1em;\n    justify-content: center;\n\n\n}\n.sectionWords{\n  display: flex;\n  flex-direction: column;\n}\n.buttonWord{\n    font-family:  monospace;\n    border: none;\n    width: auto;\n    color: #cd4040d3;\n    height: auto;\n    font-size: 0.9em;\n    background: none;\n    cursor: pointer;\n    margin: auto;\n    user-select:none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select:none;\n    font-size: 1.5em;\n}\n.buttonWord:hover{\n    color: #6555559f;\n}\n.word{  \n    text-align: left;\n    font-family:  monospace;\n}\n.class7{\n margin-left:0.2em ;   \n}\n.divButton{\n    display:flex;\n    flex-direction: row;\n    box-sizing: border-box;\n    margin-top: -0.1em;\n    justify-content: center;\n}\n.modeButton{\n    background-color: none;\n    border: none;\n    background: none;\n    cursor: pointer;\n    color: #655555d6\n}\n.modeButtonDark{\n    color: white !important;\n}\n\n\n\n@media (max-width: 760px){\n    .divCont{\n        font-size: 0.8em;\n    }\n    .divWords{\n        font-size: 0.6em;\n    }\n}";
const Home = () => {
  const [indexWord, setIndexWord] = react.exports.useState(0);
  const [darkMode, setDarkMode] = react.exports.useState(false);
  const myMsj = "welcomehome";
  const data = [
    "wind",
    "end",
    "laugh",
    "crossword",
    "overwhelming",
    "magic",
    "empire",
    "happy",
    "outfit",
    "mother",
    "elephant"
  ];
  const changeTheme = () => {
    var _a, _b, _c;
    let $ = (selector) => document.querySelector(`.${selector}`);
    (_a = $("styleDiv")) == null ? void 0 : _a.classList.toggle("effect");
    setTimeout(() => {
      var _a2;
      (_a2 = $("styleDiv")) == null ? void 0 : _a2.classList.toggle("effect");
    }, 100);
    (_b = $("styleDiv")) == null ? void 0 : _b.classList.toggle("darkMode");
    (_c = $("modeButton")) == null ? void 0 : _c.classList.toggle("modeButtonDark");
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };
  const welcomeHome = () => {
    function getData(e) {
      setIndexWord(parseInt(e.target.id));
    }
    function component(res, index) {
      return /* @__PURE__ */ React.createElement("section", {
        className: "sectionWords"
      }, /* @__PURE__ */ React.createElement("button", {
        className: `buttonWord class${index}`,
        onClick: (e) => {
          getData(e);
        },
        id: index.toString()
      }, index === 0 ? res.toUpperCase() : res));
    }
    function styling(res, index) {
      switch (index) {
        case index:
          return component(res, index);
        default:
          return res;
      }
    }
    return myMsj.split("").map((res, index) => {
      return styling(res, index);
    });
  };
  const ShowWord = (index) => {
    let word = data[index].slice(0, 1).toUpperCase() + data[index].slice(1);
    return /* @__PURE__ */ React.createElement("span", {
      className: "word",
      id: `word` + index.toString()
    }, word);
  };
  return /* @__PURE__ */ React.createElement("section", {
    className: "sectionDiv"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "divButton"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      changeTheme();
    },
    className: "modeButton"
  }, darkMode === true ? "Change to WhiteMode" : "Change to DarkMode")), /* @__PURE__ */ React.createElement("div", {
    className: "divCont"
  }, welcomeHome()), /* @__PURE__ */ React.createElement("div", {
    className: "divWords"
  }, ShowWord(indexWord)));
};
var App$1 = "*{\n    margin:0;\n    padding: 0;\n}\n.styleDiv{\n    display: flex;\n    align-items: center;\n    color: rgba(0, 0, 0, 0.674);\n    background-color: rgba(208, 205, 205, 0.626);\n    width: 100%;\n    height:100vh;\n    box-sizing: border-box;\n    font-size: 5em;\n    transition: 0.1s;\n  \n}\n.darkMode {\n    background-color: rgba(0, 0, 0, 0.797) !important;\n    color: rgba(255, 255, 255, 0.729);\n    transition: 0.1s;\n}\n\n.effect{\n    filter: blur(3px);\n    -webkit-filter: blur(3px);\n}";
function App() {
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: "styleDiv"
  }, /* @__PURE__ */ react.exports.createElement(Home, null));
}
reactDom.exports.render(/* @__PURE__ */ react.exports.createElement(react.exports.StrictMode, null, /* @__PURE__ */ react.exports.createElement(App, null)), document.getElementById("root"));
