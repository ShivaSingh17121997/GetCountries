import React, { useRef } from 'react'

export default function UseRef() {

    // useRef for each input field
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        const input1Value = input1Ref.current.value;
        const input2Value = input2Ref.current.value;
        const input3Value = input3Ref.current.value;
        const input4Value = input4Ref.current.value;
        const input5Value = input5Ref.current.value;
        console.log(input1Ref)

        if (!input1Value || !input2Value || !input3Value || !input4Value || !input5Value) {
            alert('Please fill out all fields.');
            return;
        }

        // Form is valid, submit the data
        console.log('Form submitted:', input1Value, input2Value, input3Value, input4Value, input5Value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Input 1:</label>
                <input type="text" ref={input1Ref} />
            </div>
            <div>
                <label>Input 2:</label>
                <input type="text" ref={input2Ref} />
            </div>
            <div>
                <label>Input 3:</label>
                <input type="text" ref={input3Ref} />
            </div>
            <div>
                <label>Input 4:</label>
                <input type="text" ref={input4Ref} />
            </div>
            <div>
                <label>Input 5:</label>
                <input type="text" ref={input5Ref} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );

}
