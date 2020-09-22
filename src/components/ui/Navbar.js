import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mg-4">
            <span className="navbar-brand">
                Maximo
            </span>
            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>
        </div>
    )
}
