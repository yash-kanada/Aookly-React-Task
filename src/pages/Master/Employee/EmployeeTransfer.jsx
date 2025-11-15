import React from "react";
import Header from "../../../components/Header";

function EmployeeTransfer() {
    return (
        <>
            <Header />
            <div className="container mt-4">

                <h3 className="mb-4 fw-bold">Employee Transfer</h3>

                <div className="card shadow-sm">
                    <div className="card-header fw-semibold text-white" style={{ backgroundColor: "#009688" }}>
                        Employee Transfer
                    </div>

                    <div className="card-body">

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Employee Name</label>
                            <input type="text" className="form-control" placeholder="Enter employee name" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Old Zone</label>
                            <select className="form-select">
                                <option value="">Select old zone</option>
                                <option>Zone 1</option>
                                <option>Zone 2</option>
                                <option>Zone 3</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">New Zone</label>
                            <select className="form-select">
                                <option value="">Select new zone</option>
                                <option>Zone 1</option>
                                <option>Zone 2</option>
                                <option>Zone 3</option>
                            </select>
                        </div>

                        <button className="btn btn-success px-4 ">Update</button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeTransfer;
