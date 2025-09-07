import { workData } from "../utils/data";
import Hero from "./Hero";
import Project from "./Project";

function MainBoard() {
    return (
        <>
            <Hero />
            <div id="work">
            {
                workData.map((data) => <Project key={data.company} {...data} />)
            }
            </div>
        </>
    )
}

export default MainBoard;