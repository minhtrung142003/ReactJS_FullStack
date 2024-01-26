import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";

const Search = () => {
    const [cartItemCount, setCartItemCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearchChange = async (event) => {
        const input = event.target.value;
        setSearchQuery(input);

        try {
            if (!input.trim()) {
                setSearchResults([]);
                setDropdownOpen(false);
            } else {
                const productResponse = await axios.get(`http://localhost:8080/api/products`);
                const products = productResponse.data;
                setSearchResults(products.filter((item) =>
                    item.title?.toLowerCase().includes(input.toLowerCase())
                ));
                setDropdownOpen(true);
            }
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById('search-dropdown');
            if (dropdown && !dropdown.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="col-xl-6 col-lg-5 col-md-6">
            {isDropdownOpen && (
                <div
                    id="search-dropdown"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        zIndex: 100,
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                >   
                    <SearchResults results={searchResults} />
                </div>
            )}
            <div className="input-group w-100">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-dark" type="submit">
                        <i className="fa fa-search"></i> Tìm kiếm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;
