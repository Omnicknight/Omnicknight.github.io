export const getVehicleVariablesList = async () => {
    let relustsArr = []

    try {
       let result = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
        let res = await result.json();
        res.Results.forEach((e) => {
            relustsArr[e.Name] = e.Description
        });

        return relustsArr

    } catch (error) {
        console.log(error)
    }
}