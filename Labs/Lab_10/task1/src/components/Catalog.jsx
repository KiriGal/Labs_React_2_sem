import React, {useEffect, useState} from 'react';
import SliderImage from "./SliderImage";
import './CatalogStyle.css';
import store from "../store";

const tableHeader = ["Name", "Price", "Quantity", "Discount"];

const Catalog = () => {
    
    const [sortedWatches, setSortedWatches] = useState(store.getState().catalog);
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

    const handleSort = (key) => {
        setSortConfig({ key: key.target.value, direction: sortConfig.direction });
    };

    const handleSortDirection = (e) =>{
        setSortConfig({ key: sortConfig.key , direction: e.target.value});
    }

    return (
        <div className="catalog-watches">
            <div className="sorting">
                <select onChange={e => handleSort(e)}>
                    {tableHeader.map((colums) => (
                        <option value={colums}>{colums}</option>
                    ))}
                </select>
                <select onChange={e => handleSortDirection(e)}>
                    <option value="asc">По возрастанию</option>
                    <option value="desc">По убыванию</option>
                </select>
            </div>
            <div className="watches-list">
                {sortedWatches.map((watch, index) => {
                    return <div className="watch" key={index}>
                        <div className="watch-offer">
                            {watch.New === "Yes" ? (<div className="watch-new">Новинка</div>) : null}
                            {watch.Discount > 0 ? (<div className="watch-discount">{watch.Discount}%</div>) : null}
                        </div>
                        <div className="watch-slider">
                            <SliderImage slides={watch.Image}></SliderImage>
                        </div>
                        <div className="watch-description">
                            <p><h2>{watch.Name}</h2></p>
                            <p style={{display: "flex"}}><h4>{watch.Price * (100 - watch.Discount) / 100}</h4>{watch.Discount > 0 ? (<h4 style={{textDecoration: "line-through", marginLeft: "4%", color: "grey"}}>{watch.Price}</h4>) : null}</p>
                            <p><h4>Количество: {watch.Quantity} шт.</h4></p>
                            <p>{watch.Description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Catalog;