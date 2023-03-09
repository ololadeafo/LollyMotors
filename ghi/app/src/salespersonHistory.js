import React, { useState, useEffect } from "react";

function SalespersonHistory() {
    const [sales, setSaleRecord] = useState([]);
    const [filterTerm, setFilterTerm] = useState("");
    const [salesperson, setSalesperson] = useState([]);

    const getData = async () => {
        const resp = await fetch("http://localhost:8090/sales/salerecord/");

    if (resp.ok) {
    const data = await resp.json();
    const salerecord = data.sales.map((sale) => {
        return {
            salesPerson: sale.salesperson.name,
            purchaser: sale.customer.name,
            VIN: sale.automobile.vin,
            price: sale.price,
            };
        });
        setSaleRecord(salerecord);
        }
    };

    const getsalespersonData = async () => {
        const url = "http://localhost:8090/sales/salesperson/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSalesperson(data.salesperson);
        }
    };

    useEffect(() => {
        getData();
        getsalespersonData();
    }, []);

    const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
    };

    return (
        <div className="row">
        <h1>Sales Person History</h1>
        <div className="mb-3">
            <select onChange={handleFilterChange} value={filterTerm}>
            <option value="">Choose a Sales Person</option>
            {salesperson.map((salespersons) => {
                return (
                <option
                    key={salespersons.employee_number}
                    value={salespersons.name}
                >
                    {salespersons.name}
                </option>
                );
            })}
            </select>
        </div>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Sales Person</th>
                <th>Purchaser</th>
                <th>Automobile VIN</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {sales
                .filter((sale) =>
                filterTerm ? sale.salesPerson === filterTerm : true
                )
                .map((s) => {
                return (
                    <tr key={`${s.salesPerson}-${s.VIN}`}>
                    <td>{s.salesPerson}</td>
                    <td>{s.purchaser}</td>
                    <td>{s.VIN}</td>
                    <td>{s.price}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
        </div>
    );
}

export default SalespersonHistory;
