import {getVinData} from '../js/api/getVinData';
import { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';

const SearhForm = () => {
    const [inputOne, setInputOne] = useState('');
    const [resultArr, setResultArr] = useState([]);
    const [history, setHistory] = useState([]);
    let results = [];

    const handleChange = (event) => {
        setInputOne(event)
    };

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    return (
        <div className="container">
            <div>
                <div className="search-wrap">
                    <div>
                        <div className="search-wrap__form">
                            <form onSubmit={handleSubmit(e => {
                                (async () => {
                                    results = await getVinData(inputOne);
                                    setResultArr(results)
                                })()

                                if(history.length === 5 && (!history.includes(inputOne))) {
                                    history.pop()
                                    setHistory([inputOne, ...history])
                                } else if (!history.includes(inputOne)) {
                                    setHistory([inputOne, ...history])
                                }
                            })}>
                                <input {
                                           ...register(
                                               "inputVin", {
                                                   required: "Required field",
                                                   maxLength: {
                                                       value: 17,
                                                       message: "No more than 17 characters",
                                                   }
                                               }
                                           )
                                       } value={inputOne}
                                       placeholder="enter your VIN"
                                       onChange={(event) => {
                                           handleChange(event.target.value);
                                       }}/>
                                <div className="error-form">
                                    {errors?.inputVin && <p>{errors?.inputVin?.message || "Error!"}</p>}
                                </div>
                                <button type="submit" value="Отправить">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="search-wrap__history">
                        <div>
                            <p>Search history:</p>
                        </div>
                        {history.length > 0 &&
                        history.map(function (i) {
                            return (
                                <div
                                    className="search-wrap__history-element"
                                    onClick={
                                    e => {
                                        e.preventDefault();
                                        (async () => {
                                            results = await getVinData(i);
                                            setResultArr(results)
                                            setInputOne(i)
                                        })()
                                    }}>{i}</div>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="vin-params">
                    <div className="">
                        {(Object.keys(resultArr).map(function(key, i) {
                            return (
                                <div>
                                    <p>{i+1}) {key}:</p><span>{this[key]}</span>
                                </div>
                            )
                        }, resultArr))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearhForm;
