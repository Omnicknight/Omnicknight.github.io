import {getVehicleVariablesList} from '../js/api/getVehicleVariablesList';
import {useState, useEffect} from "react";

const Variables = () => {
    const [resultArr, setResultArr] = useState('');

    useEffect(() => {
        async function getResult() {
            let result = await getVehicleVariablesList()
            setResultArr(result);
        }
        getResult();
    }, [])

    return (

        <div className="container">

            {
                Object.keys(resultArr).map(function(key) {
                    return (
                        <div className="variables">
                            <span className="variables-name">{key}</span>: <span dangerouslySetInnerHTML={{ __html: `${resultArr[key]}` }}></span>
                        </div>
                    )
                }, resultArr)
            }
        </div>
    )
}

export default Variables;