import { useState } from 'react';
import Display from './display/Display';

function App() {
    
    const[calc, setCalc] = useState("");
    const[result, setResult] = useState("");

    const operations = ['/', '*', '+', '-'];
    const values = ['1','2','3','4','5','6','7','8','9','0','.'];

    const[multipleDots, setMultipleDots] = useState(false);
    const[invalidOperatorUsage, setInvalidOperatorUsage] = useState(false);

    const resetMultipleDots = () => {
        if(multipleDots === true){
            setMultipleDots(false);
        }
    }

    const resetInvalidOperatorUsage = () => {
        if(invalidOperatorUsage ===  true){
            setInvalidOperatorUsage(false);
        }
    }

    const multipleDotsWarning = () => {
        setMultipleDots(true);
    }

    const invalidOperatorUsageWarning = () => {
        setInvalidOperatorUsage(true);
    }

    const isAddingDotValid = () => {
        for(let i = calc.length; i >= 0; i--){
            if(calc.charAt(i) === '.'){
                multipleDotsWarning();
                return false;
            }

            if(operations.includes(calc.charAt(i))){
                break;
            }
        }

        return true;
    }

    const updateCalc = (value) => {
        if(
            (operations.includes(value) && calc === '' ) ||
            (operations.includes(value) && operations.includes(calc.slice(-1)))
        ){
            invalidOperatorUsageWarning();
            return;
        }

        if(
            (value === '.' && !isAddingDotValid())
        ){
            return;
        }

        resetMultipleDots();
        resetInvalidOperatorUsage();

        setCalc(calc + value);

        if(!operations.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if(calc === ''){
            return;
        }

        resetMultipleDots();
        resetInvalidOperatorUsage();

        setCalc(calc.slice(0, -1));
    }

    const resetCalc = () => {
        resetMultipleDots();
        resetInvalidOperatorUsage();
        setCalc('')
        setResult('')
    }

    const generateButtons = (values) => {
        const buttons = [];

        for(let i = 0; i < values.length; i++){
            buttons.push(
                <button 
                onClick={() => updateCalc(values[i].toString())} 
                key={values[i]}>
                    {values[i]}
                </button>
            )
        }

        return buttons;
    }

    const digits = () => {
        const digits = generateButtons(values);

        return digits;
    } 

    const operators = () => {
        const operators = generateButtons(operations);

        return operators;
    }

    return ( 
        <div className = "App">
            <div className = 'calculator'>   
                
                <Display result={result} calc={calc} multipleDots={multipleDots} invalidOperatorUsage={invalidOperatorUsage}/>

                <div className = 'operators'>
                    { operators() }
                
                    <button onClick={() => deleteLast()}>DEL</button>
                    <button onClick={() => resetCalc()}>AC</button>
                </div>

                <div className='digits'>
                    { digits() }
                    
                    <button onClick={() => calculate()}>=</button>
                </div>

            </div> 
        </div>
    );
}

export default App;