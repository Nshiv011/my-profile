import React, { useCallback } from "react";
import Common from "../Main/Common";
import Icon from "./Icons";

const Call=()=>{
        return(
                <>
                <a href="#"> 
                <div className=" bg-blue-400 rounded-full absolute bottom-5 left-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 p-3" viewBox="0 0 20 20" fill="white" >
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg>
                </div></a>

                </>    
        );
};

export default Call;