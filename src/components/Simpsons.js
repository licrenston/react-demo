import {simpsons} from "./data";
import Simpson from "./Simpson";

function Simpsons() {
    return(
        <div>
            {
                simpsons.map(simpson => <Simpson simpson={simpson}/>)
            }
        </div>
    );
}
export default Simpsons;