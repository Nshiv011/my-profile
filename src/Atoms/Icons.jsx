import React from "react";

function Icon(props){
        return(
          <>
<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 p-4  shadow-sm  hover:bg-blue-400 icons-effect" viewBox="0 0 20 20">
<path d={props.d}/>
</svg>
          </>
        );
      };

export default Icon;