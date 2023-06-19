import React from 'react';
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <div className="container p-5">
                <div className="row p-5 bg-dark">
                    <div className="col-6 text-center">
                        <button type="button">
                            <Link to="/signin">Sign In</Link>
                        </button>
                    </div>
                    <div className="col-6 text-center">
                        <button type="button">
                            <Link to="/loginin">Login</Link>
                        </button>
                    </div>
                </div><br /><br />
            </div>

        </>
    )
}