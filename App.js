const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
        ]
    )
);
console.log(parent)        







/*const heading = React.createElement("h1", {}, "Hello world from React");   */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
