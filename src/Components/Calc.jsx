import React, { useState } from 'react'

const Calc = () => {

    const [val, setVal] = useState('');
    const [histResult, setHistResult] = useState('');

    const handleAutoEval = (txt) => {
        let inputTxt = val + txt;
        setVal(inputTxt);

        try {
            const res = eval(inputTxt);
            if (inputTxt.length > 1) {
                setHistResult(res)
            }
        }
        catch (err) {
            setHistResult(val)
        }
    }

    let handleClick = (e) => {
        const txt = e.target.innerText;
        setVal(val + txt)

        handleAutoEval(txt)
    }

    let handleEval = () => {
        let ans = eval(val)
        setVal(ans)
        setHistResult('')
    }

    const handleAllClear = () => {
        setVal('')
        setHistResult('')
    }

    const handleClear = () => {
        if (typeof val === 'string' && val.length > 0) {
            setVal(val.slice(0, -1));
            setHistResult(val.slice(0, -1));
        }
    }

    return (
        <div>
            <div className="calcBox">
                <div className="calculator">
                    <div className="input">
                        <input value={val} type="text" />
                        <div className='empty'>{histResult}</div>
                    </div>
                    <div className="buttonBox">
                        <button className='symbol' onClick={handleAllClear}>AC</button>
                        <button className='symbol' onClick={handleClick}>%</button>
                        <button className='symbol' onClick={handleClear}>CL</button>
                        <button className='symbol' onClick={handleClick}>/</button>
                        <button onClick={handleClick}>7</button>
                        <button onClick={handleClick}>8</button>
                        <button onClick={handleClick}>9</button>
                        <button className='symbol' onClick={handleClick}>*</button>
                        <button onClick={handleClick}>4</button>
                        <button onClick={handleClick}>5</button>
                        <button onClick={handleClick}>6</button>
                        <button className='symbol' onClick={handleClick}>-</button>
                        <button onClick={handleClick}>1</button>
                        <button onClick={handleClick}>2</button>
                        <button onClick={handleClick}>3</button>
                        <button className='symbol' onClick={handleClick}>+</button>
                        <button onClick={handleClick}>00</button>
                        <button onClick={handleClick}>0</button>
                        <button onClick={handleClick}>.</button>
                        <button className='symbol' onClick={handleEval}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calc;