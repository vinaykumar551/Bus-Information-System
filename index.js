import React from "react";
import ReactDOM from "react-dom/client";
import Bookstore from "./book";
// const Greeting=()=>{
//     return <h2>My First Component</h2>;
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Bookstore />);
export default Bookstore;