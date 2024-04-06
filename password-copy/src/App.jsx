import { useCallback, useEffect, useReducer, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);


  // Copy Password function

  return (
    <>
      <div className='text-orange'>

        <h1 className='m-b-2 my-4 py-4 text-white text-4xl text-center'>Copy Password</h1>
        <div>
          <input type="text" value={password} className='text-center rounded-lg px-4 py-2 w-full max-w-md' readOnly placeholder="password" />
          <button ref={passwordRef} onClick={copyPassword} className='text-white bg-orange-500 text-center rounded-lg px-4 py-2 outline-none'>copy</button>
        </div>

        <div>
          <div>
            <input value={length} className='text-black' onChange={(e) => setLength(e.target.value)} type="range" min={6} max={50} />
            <label>length {length}</label>
          </div>

          <input type="checkbox" checked={numberAllowed} onChange={() => setNumberAllowed(!numberAllowed)} />
          <label className='text-white text-center rounded-lg px-4 py-2 w-full max-w-md'>Number</label>

          <input type="checkbox" checked={charAllowed} onChange={() => setCharAllowed(!charAllowed)} />
          <label className='text-center text-white rounded-lg px-4 py-2 w-full max-w-md'>Character</label>

        </div>
      </div>
    </>
  )
}

export default App
