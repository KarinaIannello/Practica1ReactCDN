const app = document.getElementById("root");

const h1 = React.createElement("h1", null, "Con lo visto hasta ahora");
const h2 = React.createElement("h2", null, "Replica este HTML");
const h3 = React.createElement("h3", null, "Usando");
const h4 = React.createElement("h4",null, "React");
const footer = React.createElement("footer",null, "Suerte!");
const div = () => {
   return React.createElement("div", null, [h1, h2, h3, h4, footer]);
}

const root = ReactDOM.createRoot(app);
root.render(React.createElement(div));