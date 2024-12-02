import './App.css'
import {useState} from "react";

function App() {
    //aarbeien
    const [fruitCounter,setFruitCounter] = useState(0);
    const increment = ()=>setFruitCounter((prev)=>prev+1);
    const decrement = ()=>setFruitCounter((prev)=>Math.max(0,prev-1));
    const eventHandler = (e)=>{const value = Math.max(0,e.target.value);
        setFruitCounter(value);}
    //bananen
    const [fruitCounterb,setFruitCounterb] = useState(0);
    const incrementb = ()=>setFruitCounterb((prev)=>prev+1);
    const decrementb = ()=>setFruitCounterb((prev)=>Math.max(0,prev-1));
    const eventHandlerb = (e)=>{const value = Math.max(0,e.target.value);
        setFruitCounterb(value);}
    //appels
    const [fruitCounterc,setFruitCounterc] = useState(0);
    const incrementc = ()=>setFruitCounterc((prev)=>prev+1);
    const decrementc = ()=>setFruitCounterc((prev)=>Math.max(0,prev-1));
    const eventHandlerc = (e)=>{const value = Math.max(0,e.target.value);
        setFruitCounterc(value);}
    //kiwi's
    const [fruitCounterd,setFruitCounterd] = useState(0);
    const incrementd = ()=>setFruitCounterd((prev)=>prev+1);
    const decrementd = ()=>setFruitCounterd((prev)=>Math.max(0,prev-1));
    const eventHandlerd = (e)=>{const value = Math.max(0,e.target.value);
        setFruitCounterd(value);}
    const resetCounter = ()=> {setFruitCounter(0);setFruitCounterb(0);setFruitCounterc(0);setFruitCounterd(0);};
    // state van de formulieer gegevens
    const [voorNaam, setVoorNaam] = useState("");
    const [achterNaam,setAchterNaam] = useState("");
    const [leeftijd,setLeeftijd] = useState(0);
    const [postcode,setPostcode] = useState("");


    //bijwerken van de formuliergegevens
    const formHandlerVoorNaam = (e) => {
        setVoorNaam(e.target.value);
    };
    const formHandlerAchterNaam = (e)=> {setAchterNaam(e.target.value);};
    const formHandlerLeeftijd = (e)=>{setLeeftijd(e.target.value);};
    const formHandlerPostcode = (e) =>{setPostcode(e.target.value);};

    //handler voor het verzenden van formulier



    return (
        <><header><h1>Fruitmand bezorgservice</h1></header>
            <main>
                <section>
                <article>
                    <label htmlFor="aarbeien">aardbeien</label>
                    <button type="button" name="minusButton" onClick={decrement}>-</button>
                    <input type="number" name="aarbeien" value={fruitCounter} onChange={eventHandler}/>
                    <button type="button" name="plusButton" onClick={increment}>+</button>
                </article>
                <article>
                    <label htmlFor="bananen">bananen</label>
                    <button type="button" name="minusButton" onClick={decrementb}>-</button>
                    <input type="number" name="bananen" value={fruitCounterb} onChange={eventHandlerb}/>
                    <button type="button" name="plusButton" onClick={incrementb}>+</button>
                </article>
                <article>
                    <label htmlFor="appels">appels</label>
                    <button type="button" name="minusButton" onClick={decrementc}>-</button>
                    <input type="number" name="appels" value={fruitCounterc} onChange={eventHandlerc}/>
                    <button type="button" name="plusButton" onClick={incrementc}>+</button>
                </article>
                <article>
                    <label htmlFor="kiwi's">kiwis</label>
                    <button type="button" name="minusButton" onClick={decrementd}>-</button>
                    <input type="number" name="appels" value={fruitCounterd} onChange={eventHandlerd}/>
                    <button type="button" name="plusButton" onClick={incrementd}>+</button>
                </article>
                <article><label htmlFor="reset>">Reset</label>
                <button type="button" name="reset" onClick={resetCounter}>Reset </button></article>
            </section>
            <section>
                <form type="submit">
                    <label htmlFor="voornaam">Voornaam</label>
                    <input type="text" name="voornaam" onChange={formHandlerVoorNaam} value={voorNaam}></input>
                    <label htmlFor="achternaam">Achternaam</label>
                    <input type="text" name="achternaam" onChange={formHandlerAchterNaam} value={achterNaam}></input>
                    <label htmlFor="leeftijd">Leeftijd</label>
                    <input type="number" name="leeftijd" onChange={formHandlerLeeftijd} value={leeftijd}></input>
                    <label htmlFor="postcode">Postcode</label>
                    <input type="text" name="postcode" onChange={formHandlerPostcode} value={postcode}></input>
                    {/*<label htmlFor="bezorgfrequentie">Bezorgfrequentie</label>*/}

                </form>
            </section>
            </main>

        </>
    )
}

export default App