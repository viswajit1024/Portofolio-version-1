import React from "react"

const Projects=React.forwardRef(function Projects(props,ref){
    
    return(
        <>
          <div ref={ref} className="flex flex-col justify-center items-center h-[700px]">
            <div className="p-6 text-2xl font-bold italic">
               Projects
            </div>
            <p className="text-center w-[275px] md:w-[700px] font-serif md:leading-loose">
            </p>
          </div>
          <div className="flex items-center my-6">
            <span className="flex-grow border-t border-white-700 mx-20 md:mx-[300px]"></span>
          </div>
        </>
    )
})

export default Projects