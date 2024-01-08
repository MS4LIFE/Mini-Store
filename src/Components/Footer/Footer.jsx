import React from 'react'

// Initialization for ES Users
import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Input });

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start">
            <div className="container p-4 pb-0">
                <form>
                    <div className="row justify-content-center">
                        <div className="col-auto mb-4 mb-md-0">
                            <p className="pt-1 text-light fs-5">
                                <strong>Sign up to receive our new Collections</strong>
                            </p>
                        </div>
                        <div className="col-md-5 col-12 mb-4 mb-md-0">
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="form5Example22" className="form-control shadow-none" />
                                <label className="form-label">Email address</label>
                            </div>
                        </div>
                        <div className="col-auto mb-4 mb-md-0">
                            <button data-mdb-ripple-init type="button" className="btn btn-dark mb-4">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </div>



            <div className="text-center fw-bold fs-5 text-light p-3">
                © 2024 Copyright: <a className="text-light" href="#/">  MS-Store.com</a>
            </div>

        </footer>
    )
}

export default Footer