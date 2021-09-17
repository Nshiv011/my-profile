import React from "react";
import Icon from "./Icons";

      function Nav(props){
        return(
                <>
<a href="#" className="transform focus:scale-75  shadow-3xl shadow-inner "> 
                <div className=" text-2xl text-center  ">
                <Icon d={props.data} />
                </div></a>


                </>
        );
};


export default Nav;



