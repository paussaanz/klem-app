import React from 'react';

const SearchBar = () => {
    return (
        <>
            <form className="form-inline pb-3">
                <div className="input-group w-100">
                    <input type="search" className="form-control" placeholder="Buscar" aria-label="Buscar" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SearchBar;