import H_ from "./_h.js";
import Menu from "./menu";
import F_ from "./_f.js";

const IlliaseTemplate = ({children}) => {
    return (
        <div id="illiase-body">
            <H_ />
            <Menu />
            <main>
                {children}
                <F_ />
            </main>
        </div>
    );
}
 
export default IlliaseTemplate;