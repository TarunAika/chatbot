import { createContext, useState } from "react";
import runChat from "../../config/config"; // Import the function

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const sentRequest = async (prompt) => {
        setResultData(''); 
        setShowResult(true);
        setLoading(true);
        setRecentPrompt(prompt || input);
        setPrevPrompts((prev) => prompt ? prev : [...prev, input]);
    
        try {
            const response = await (prompt ? runChat(prompt) : runChat(input));

            let typingData = response.split('');
            typingData.forEach((letter, index) => {
                setTimeout(() => {
                    setResultData((prev) => prev + letter);
                }, index * 10); // Adjust speed 
            });
    
            setLoading(false);
            setInput('');
            console.log(response);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const contextValue = { 
        prevPrompts,
        setPrevPrompts,
        sentRequest,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
     }; 

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;