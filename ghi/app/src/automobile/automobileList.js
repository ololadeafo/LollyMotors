import { useEffect, useState } from 'react';

function AutomobileList() {
    const [autos, setAutomobiles] = useState([])

    const getData = async() => {
        const response = await fetch('http://localhost:8100/api/automobiles/');

        if (response.ok) {
            const automobileData = await response.json();
            setAutomobiles(automobileData.autos)

        }
    }
        useEffect(()=>{
            getData()
        }, [])

        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>vin</th>
                        <th>color</th>
                        <th>year</th>
                        <th>model</th>
                        <th>manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map(automobile=>{
                        return(
                            <tr key={automobile.id}>
                                <td>{ automobile.vin }</td>
                                <td>{ automobile.color} </td>
                                <td>{ automobile.year }</td>
                                <td>{ automobile.model.name }</td>
                                <td>{ automobile.model.manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
}

export default AutomobileList
