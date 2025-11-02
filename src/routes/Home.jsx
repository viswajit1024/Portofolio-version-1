import React from "react";
import Background from "../components/Background";

const Home=React.forwardRef(function Home(props,ref){
    return(
        <>
          <div ref={ref}>
             <Background/>
             <div className="flex item-center my-2">
              <span className="flex-grow border-t border-white-700 mx-20 md:mx-[300px]"></span>
            </div>
          </div>
        </>
    )
})

export default Home;