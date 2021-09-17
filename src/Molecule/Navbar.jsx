import React from "react";
import "../style.css";
import Common from "../Main/Common";
import Nav from "../Atoms/Nav";

const Navbar=()=>{
        return(
<>
<div className=" bg-gray-900 min-h-full flex items-center justify-center pb-3 pt-3 sticky top-0 z-50">
      <div className="grid md:grid-cols-12 sm:grid-cols-3 grid-cols-3 center gap-3 mt-2">
      <div></div>
      <div></div>
      <div></div>
        <Nav data={Common[0].data}/>
        <Nav data={Common[1].data}/>
        <Nav data={Common[2].data}/>
        <Nav data={Common[3].data}/>
        <Nav data={Common[4].data}/>
        <Nav data={Common[5].data}/>
        <div></div>
      <div></div>
      <div></div>
        

</div>
</div>
</>
);
};
export default Navbar;