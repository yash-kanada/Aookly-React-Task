import React from "react";
import Header from "../../../components/Header";

function EmployeeFilter() {
  return (
    <>
    <Header/>
      <div className="container my-4">

        <h2 className="fw-bold mb-4">
          Employee – <span style={{color:"#009688"}}>Filter</span>
        </h2>

        <div className="card shadow-sm mb-4">
          <div className="card-header text-white fw-semibold" style={{backgroundColor:"#009688"}}>
            Filter
          </div>

          <div className="card-body">
            <form className="row g-3">

              <div className="col-md-6">
                <label className="form-label fw-semibold">Name</label>
                <input type="text" className="form-control" placeholder="Enter name" />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Employee Number</label>
                <input type="text" className="form-control" placeholder="Enter employee number" />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Campus</label>
                <select className="form-select">
                  <option value="">Select campus</option>
                  <option>Main Campus</option>
                  <option>Satellite Campus</option>
                  <option>Extension Center</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Department</label>
                <select className="form-select">
                  <option value="">Select department</option>
                  <option>HR</option>
                  <option>IT</option>
                  <option>Finance</option>
                  <option>Admin</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Section</label>
                <select className="form-select">
                  <option value="">Select section</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Zone</label>
                <select className="form-select">
                  <option value="">Select zone</option>
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                </select>
              </div>

              <div className="col-12 mt-3 d-flex gap-3">
                <button className="btn btn-primary px-4">Filter</button>
                <button className="btn btn-success px-4">Report</button>
                <button className="btn btn-warning px-4">Check Rights</button>
              </div>

            </form>
          </div>
        </div>

        <div className="card shadow-sm mb-5">
          <div className="card-header bg-dark text-white fw-semibold">
            Employee List
          </div>

          <div className="card-body">

            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle">

                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Employee Name</th>
                    <th>Number</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Campus</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>EMP001</td>
                    <td>IT</td>
                    <td>Developer</td>
                    <td>Main Campus</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default EmployeeFilter;
