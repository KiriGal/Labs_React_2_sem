import React, {useEffect, useState} from 'react';
import './SearchStyle.css'

const Search = ({ProductCatalog}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('exact');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    useEffect(() => {

    }, [searchTerm, searchType, ProductCatalog]);

    const handleClick = () => {
        if (searchType === 'exact') {
            setSearchResults(ProductCatalog.filter((product) =>
                product.name.toLowerCase() === searchTerm.toLowerCase()
            ));
        } else if (searchType === 'partial') {
            setSearchResults(ProductCatalog.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        }
    }

    return (
        <div className="search">
            <div className="search-input">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    placeholder="Enter search term"
                />
                <select value={searchType} onChange={handleSearchTypeChange}>
                    <option value="exact">Exact Match</option>
                    <option value="partial">Partial Match</option>
                </select>
                <button onClick={handleClick}>Search</button>
            </div>
            {searchResults.length > 0 ? (
                <div className="search-results">
                    {searchResults.map((product,index) => (
                        <div key={index}>
                            <p><h3>{product.name}</h3></p>
                            <p>Количество: {product.quantity}</p>
                            <p>Цена: {product.price}</p>
                            <p>Цена со скидкой: {product.price * (100 - product.discount) / 100}</p>
                            <p>Описание: {product.description}</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Search;