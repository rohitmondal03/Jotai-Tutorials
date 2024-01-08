import { useState } from 'react';
import { useAtom } from 'jotai'

import { counterAtom, detailsAtom, themeAtom, getReadOnly, readOnlyAtom } from './jotai/atoms';
import './App.css'


function App() {
  const [counter, setCounter] = useAtom(counterAtom);
  const [details, setDetails] = useAtom(detailsAtom);
  const [appTheme, setAppTheme]= useAtom(themeAtom);
  const [lowercase]= useAtom(readOnlyAtom);
  const [uppercase]= useAtom(getReadOnly());
  const [name, setName] = useState<string>("")


  const toggleAppTheme= () => {
    setAppTheme(appTheme === "light" ? "dark" : "light")
  }


  return (
    <>
      <section className={appTheme}>
        <div>
          <p>Theme: {appTheme}</p>
          <button onClick={toggleAppTheme}>Change theme</button>
        </div>

        <hr />

        <div>
          <h1>Readonly Atom</h1>
          <p>{lowercase}</p>
          <p>{uppercase}</p>
        </div>

        <hr />

        <div>
          <h2>Count</h2>
          <p>{counter}</p>
          <button onClick={() => setCounter((c) => c + 1)}>+1</button>
        </div>

        <hr />

        <div>
          <h2>Name: {details.name}</h2>
          <h2>Age: {details.age}</h2>

          <input
            type="text"
            placeholder='change name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={() => setDetails((prev) => ({
            ...prev,
            name: name,
          }))}>
            Change name
          </button>
        </div>
      </section>
    </>
  )
}

export default App
