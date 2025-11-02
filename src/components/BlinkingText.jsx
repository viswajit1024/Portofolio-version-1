import { useEffect,useState } from "react";

function BlinkingText(){
    const [currentText,setCurrentText]=useState('');
    const [currentWordIndex,setCurrentWordIndex]=useState(0);
    const [currentCharIndex,setCurrentCharIndex]=useState(0);
    const words=["Web-Developer","DevOps Enthusiast","Tech Enthusiast"]

    useEffect(()=>{
        const typeText=()=>{
            if(currentCharIndex<words[currentWordIndex].length){
                setCurrentText(words[currentWordIndex].substring(0,currentCharIndex+1));
                setCurrentCharIndex(currentCharIndex+1);
            }
            else{
                setTimeout(() => {
                    setCurrentWordIndex((currentWordIndex+1)%words.length);
                    setCurrentCharIndex(0);
                }, 1000);
            }
        }
        const typeTimeout=setTimeout(typeText,100);
        return ()=>clearTimeout(typeTimeout);
    },[currentCharIndex,currentWordIndex]);
    return(
        <div className="flex flex-col h-[700px] justify-center items-center font-black text-2xl">
            <div>Hi I am Viswajit</div>
            <div>I am a</div>
            <div className="flex">
               <div>{currentText}</div>
               <div className="animate-blink">|</div>
            </div>
        </div>
    )
}

export default BlinkingText