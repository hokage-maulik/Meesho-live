import React, { useEffect, useState } from 'react';
import '../Style/Navbar1.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Navbar1() {
    const [state, setState] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchdata();
    }, []);

    async function fetchdata() {
        const res = await axios.get("https://meesho-live2.onrender.com/data");
        setState(res.data);
    }

    function searchdata(e) {
        setSearch(e.target.value);
    }

    const filterproducts = state.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" style={{ fontSize: "36px", color: "#9f2089", fontWeight: "bold" }}>
                    meesho
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                        <li className="nav-item me-3 position-relative">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search for products"
                                value={search}
                                onChange={searchdata}
                                style={{
                                    width: "320px",
                                    borderRadius: "20px",
                                    padding: "10px 20px",
                                    border: "2px solid #9f2089"
                                }}
                            />
                            {search && (
                                <div className="search-results"style={{ position: 'absolute', background: 'white', zIndex: 1 }}>
                                    {filterproducts.length > 0 ? (
                                        filterproducts.map((el) => (
                                            <Link key={el.id} to={`/${el.type}`} className="dropdown-item text-dark py-2 px-3">
                                                {el.name}
                                            </Link>
                                        ))
                                    ) : (
                                        <p className="dropdown-item py-2 px-3">No results found</p>
                                    )}
                                </div>
                            )}
                        </li>

                        <li className="nav-item">
                            <Link to="/supplier" className="nav-link text-dark">
                                <h6 className="mb-0">Become a Supplier</h6>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/newsroom" className="nav-link text-dark">
                                <h6 className="mb-0">Newsroom</h6>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Signin" className="nav-link text-dark d-flex align-items-center">
                                <i className="far fa-user me-2"></i>
                                <h6 className="mb-0">Profile</h6>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link text-dark d-flex align-items-center">
                                <i className="fas fa-shopping-cart me-2"></i>
                                <h6 className="mb-0">Cart</h6>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

