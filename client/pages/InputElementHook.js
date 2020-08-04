import React, { useState } from "react";

const InputElementHook = () => {
    const [inputText, setInputText] = useState("");

    return (
        <div>
            <input
                onChange={e => {
                    setInputText(e.target.value)
                }}
                placeholder="Enter Some Test"
            />
            <br />
            {inputText}
        </div>
    );
};

export default InputElementHook;