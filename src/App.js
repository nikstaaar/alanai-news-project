import React, {useState, useEffect} from "react";      
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = "2274e5d6934e6a48bee60b6e94f584fd2e956eca572e1d8b807a3e2338fdd0dc/stage";
const [newsArticles, setNewsArticles] = useState([])

const App = () => {
useEffect(()=>{
    alanBtn({
        key: alanKey,
        onCommand: ({command, articles}) => {
            if(command === "newHeadlines"){
                setNewsArticles(articles);
            }
        }
    })
},[])
    return (<div>
        <h1>Alan AI News Application</h1>
    </div>)
}

export default App;