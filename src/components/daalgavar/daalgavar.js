import React from "react";
import Leftbox from "./leftbox";
import Topbox from "./topbox";
import './container1.css'
import './container2.css'
import './contain.css'
import './bottomcon.css'
import Bottombox from "./bottombox";
import Bottombo from "./bottombox2";

const Daalgavar = () => {
    return (
        <div className="contain">
            <div className="container1">
                <Leftbox/>
            </div>
            <div className="container2">
                <Topbox/>
                <div className="bottomcon">
                    <Bottombox/>
                    <Bottombo/>
                </div>
            </div>
        </div>
    )
}
export default Daalgavar