


import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand m-2">
                Berni
            </span>
            <button className="btn btn-primary m-3">
                <i className="fas fa-sign-out-alt"/>
                <span className="m-3">Salir</span>
            </button>
        </div>
    )
}

export default Navbar;
