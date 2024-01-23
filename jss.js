const parent = React.createElement(
    "h1", { id: "heading" },
    [React.createElement("h2", { id: "hi" }, "im a h2 1nd Sibing"),
    React.createElement("h2", { id: "no" }, "im a h2 2nd Sibling")]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
