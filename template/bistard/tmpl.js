// import H_ from "./_h.js";
// import Menu from "./menu.js";
// import F_ from "./_f.js";

export default ({children}) => {
    return (
        <div>
            <H_ />
            <Menu />
            {children}
            <F_ />
        </div>
    );
}