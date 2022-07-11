export const getVinData = async (vin) => {

    let result = {};
    let relustsArr = [];
    let message =  '';

    try {

        result = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
            .then(response => response.json())
            .then(responseJson => {
                message = responseJson.Message;
                responseJson.Results.forEach((e) => {
                    if((e.Value !== null) && (e.Value !== "0") && (e.Value !== '') && (e.Value !== undefined)) {
                        relustsArr[e.Variable] = e.Value;
                    }
                })
            })
    } catch (error) {
        console.log(error);
    }

    return relustsArr;
}