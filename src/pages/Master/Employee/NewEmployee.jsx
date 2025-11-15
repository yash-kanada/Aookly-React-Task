import React, { useState } from "react";
import Header from "../../../components/Header";

function NewEmployee() {
    
    return (
        <>
        <Header/>
            <div className="container my-4">

                <h2 className="fw-bold mb-4">
                    Employee – <span style={{color:"#009688"}}>New Mode</span>
                </h2>

                <div className="card shadow-sm">
                    <div className="card-header text-white fw-semibold" style={{backgroundColor:"#009688"}}>
                        Employee - Entry
                    </div>

                    <div className="card-body">

                        <form className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Employee Name</label>
                                <input type="text" className="form-control" placeholder="Enter employee name" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Mobile Number</label>
                                <input type="number" className="form-control" placeholder="Enter mobile number" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Designation</label>
                                <input type="text" className="form-control" placeholder="Enter designation" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Department</label>
                                <select className="form-select">
                                    <option value="">Select department</option>
                                    <option>HR</option>
                                    <option>Sales</option>
                                    <option>IT</option>
                                    <option>Management</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Qualification</label>
                                <input type="text" className="form-control" placeholder="Enter qualification" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Joining Date</label>
                                <input type="date" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Upload Photo</label>
                                <input type="file" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="col-12 mt-3 d-flex gap-3">
                                <button type="submit" className="btn btn-success px-4" >OK</button>
                                <button type="button" className="btn btn-secondary px-4">Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default NewEmployee;
