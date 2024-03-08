import React, {useEffect, useState} from 'react';
import './ProductCatalogStyle.css';

const products = [
    { line: 1, name: "Ноутбук", price: 1000, quantity: 2 },
    { line: 2, name: "Смартфон", price: 500, quantity: 3 },
    { line: 3, name: "Наушники", price: 100, quantity: 5 },
    { line: 4, name: "Телевизор", price: 2000, quantity: 1 },
];

const tableOfContents = [
    { heading: "Номер строки", key: "line" },
    { heading: "Название товара", key: "name" },
    { heading: "Цена", key: "price" },
    { heading: "Количество", key: "quantity" },
];

const ProductCatalog = () => {
    const [sortedProducts, setSortedProducts] = useState(products);
    const [sortConfig, setSortConfig] = useState({key: "line", direction: 'asc'});
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const sorted = [...sortedProducts].sort((a, b) => {
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
        setSortedProducts(sorted);
    }, [sortConfig]);

    useEffect(() => {
        let quantity = 0;
        let cost = 0;

        sortedProducts.forEach((product) => {
            quantity += product.quantity;
            cost += product.price * product.quantity;
        });

        setTotalQuantity(quantity);
        setTotalCost(cost);
    }, [sortedProducts]);

    const handleSort = (key) => {
        setSortConfig({ key: key.target.value, direction: sortConfig.direction });
    };

    const handleSortDirection = (e) =>{
        setSortConfig({ key: sortConfig.key , direction: e.target.value});
    }

    return (
        <div>
            <table className="product-table">
                <tr>
                    {tableOfContents.map((colums) => (
                        <td key={colums.key}>{colums.heading}</td>
                    ))}
                </tr>
                {sortedProducts.map((product) => (
                    <tr>
                        <td>{product.line}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <td>{totalCost}</td>
                    <td>{totalQuantity}</td>
                </tr>
            </table>
            <h3>Сортировать по:</h3>
            <select onChange={e => handleSort(e)}>
                {tableOfContents.map((colums) => (
                    <option value={colums.key}>{colums.heading}</option>
                ))}
            </select>
            <select onChange={e => handleSortDirection(e)}>
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
            </select>
        </div>
    );
};

export default ProductCatalog;