import React from 'react'
import Header from '../../../components/Header'

function ImportEmployee() {
    return (
        <>
            <Header />
            <div className='container' style={{ marginTop: "30px" }}>

                <h2 style={{
                    fontWeight: "700",
                    fontSize: "28px",
                    marginBottom: "25px"
                }}>
                    Import Employee
                </h2>

                <div className="card shadow-sm" style={{ padding: "20px", borderRadius: "10px" }}>

                    <h4 style={{ fontWeight: "600", marginBottom: "25px" }}>
                        Import Employee Data
                    </h4>

                    <div className="mb-3">
                        <label style={{ fontWeight: "600", display: "block", marginBottom: "8px" }}>
                            Download Template
                        </label>

                        <a href="#" style={{
                            textDecoration: "none",
                            color: "#0d6efd",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}>
                            Download MS Excel Template
                        </a>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" style={{ fontWeight: "600" }}>
                            MS Excel File
                        </label>
                        <input type="file" className="form-control" />
                    </div>

                    <div className="mb-4">
                        <label className="form-label" style={{ fontWeight: "600" }}>
                            Sheet
                        </label>
                        <select className="form-select">
                            <option value="">Select Sheet</option>
                            <option value="sheet1">Sheet 1</option>
                            <option value="sheet2">Sheet 2</option>
                        </select>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <button className="btn btn-success">Import</button>
                        <button className="btn btn-secondary">Cancel</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ImportEmployee
