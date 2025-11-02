import React from "react";

const AboutMe=React.forwardRef(function AboutMe(props,ref){
    return(
        <>
          <div ref={ref} className="flex flex-col items-center min-h-[700px]">
            <div className="my-3 md:p-8 text-2xl font-bold italic">
               About Me
            </div>
            <p className="justify-center text-center w-[275px] md:w-[700px] font-serif md:leading-loose">
               Hello! I'm a <span className="text-sky-500">2nd-year Computer Science student</span> with a passion for full-stack web development and a knack for quickly mastering new skills. My journey in the tech world has equipped me with a diverse set of technologies including <span className="text-sky-500">Express, MongoDB, Prisma ORM, PostgreSQL, React, Node.js, HTML, CSS, JavaScript, C++, C, Python, and Java.</span>
               I have hands-on experience building robust applications. My portfolio includes a fully functional payment app, two engaging games—one developed with Phaser and the other using pure HTML and CSS—and a comprehensive full-stack website and many more. In addition, I've built my own portfolio website to showcase my work and skills.
               I'm also delving into the world of DevOps, continually expanding my knowledge to bridge the gap between development and operations. As a fast learner, I'm always eager to embrace new challenges and technologies.
               My projects reflect my dedication to creating efficient, user-friendly applications and my commitment to continuous learning and growth in the ever-evolving tech landscape.
            </p>
            <div className="flex flex-col">
              <div className="pt-8 mx-8 text-sky-600 text-2xl">Resume</div>
                <a href=/*file path in the project*/"" download=/*file name*/"">
                  <button className="mx-9 pt-5 hover:text-blue-500">Download</button>
                </a>
              <div className="pt-4 mx-8 text-sky-600 text-2xl">Certificates</div>
                <a href=/*file path in the project*/"" download=/*file name*/"">
                  <button className="mx-9 pt-2 hover:text-blue-500">Cert 1</button>
                </a>
                <a href=/*file path in the project*/"" download=/*file name*/"">
                  <button className="mx-9 pt-2 hover:text-blue-500">Cert 2</button>
                </a>
                <a href=/*file path in the project*/"" download=/*file name*/"">
                  <button className="mx-9 pt-2 hover:text-blue-500">Cert 3</button>
                </a>
            </div>
          </div>
          <div className="flex items-center my-[40px]">
            <span className="flex-grow border-t border-white-700 mx-20 md:mx-[300px]"></span>
          </div>
        </>
    )
})

export default AboutMe;