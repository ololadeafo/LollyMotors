import {useEffect, useState } from 'react';

function SaleRecordList() {
    const [sales, setSaleRecord] = useState([])

    const getData = async() => {
        const response = await fetch('http://localhost:8090/sales/salerecord/');

        if (response.ok){
            const data = await response.json();
            setSaleRecord(data.sales)
        }
    }
    useEffect(()=>{
        getData()
    }, [])

    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Sales Person</th>
                    <th>Employee Number</th>
                    <th>Purchaser</th>
                    <th>Automobile VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(salesrecord=>{
                    return(
                        <tr key={salesrecord.automobile.vin}>
                            <td>{salesrecord.salesperson.name}</td>
                            <td>{salesrecord.salesperson.employee_number}</td>
                            <td>{salesrecord.customer.name}</td>
                            <td>{salesrecord.automobile.vin}</td>
                            <td>{salesrecord.price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default SaleRecordList
