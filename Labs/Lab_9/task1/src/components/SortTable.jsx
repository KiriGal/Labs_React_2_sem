import React, {useEffect, useState} from 'react';
import "./SortTableStyle.css";

const tableHeader = ["№", "Name", "Price", "Quantity", "Image", "Description", "New", "Discount"];

const SortTable = ({watches}) => {
    const [sortedWatches, setSortedWatches] = useState(watches);
    const [sortConfig, setSortConfig] = useState({key: "Name", direction: 'asc'});

    useEffect(() => {
        const sorted = [...sortedWatches].sort((a, b) => {
            const valueA = a[sortConfig.key];
            const valueB = b[sortConfig.key];
            if (valueA < valueB) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (valueA > valueB) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
        setSortedWatches(sorted);
    }, [sortConfig]);

    useEffect(() => {
        setSortedWatches(watches);
    }, [watches]);

    const handleSort = (sort, header) => {
        if(sort === "▲"){
            setSortConfig({key: header, direction: "desc"});
        }else{
            setSortConfig({key: header, direction: "asc"});
        }
    }

    return (
        <div>
            <table>
                <tr>
                    {tableHeader.map((header, index) => {
                        return <th key={index}>
                            <h4>{header}</h4>
                            {(header !== "№" && header !== "Image" && header !== "Description" && header !== "New") ? (
                                <button
                                    onClick={() => handleSort((sortConfig.direction === "asc" && sortConfig.key === header.toLowerCase()) ? ("▲") : ("▼"), header.toLowerCase())}>{(sortConfig.direction === "asc" && sortConfig.key === header.toLowerCase()) ? ("▲") : ("▼")}
                                </button>
                            ) : null}
                        </th>
                    })}
                </tr>
                {sortedWatches.map((watch, index) => {
                    return <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{watch.name}</td>
                        <td>{watch.price} BYN</td>
                        <td>{watch.quantity}</td>
                        <td><img src={watch.image[0]} alt="No img"/></td>
                        <td>{watch.description}</td>
                        <td>{watch.new}</td>
                        <td>{watch.discount}</td>
                    </tr>
                })}
            </table>
        </div>
    );
};

export default SortTable;