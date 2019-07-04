import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

function App() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand" href="#">Sales App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <i className="fa fa-user"></i>&nbsp;&nbsp;John Doe
          </form>
                </div>
            </nav>

            <div className="row mt-4 content">
                <div className="col-3 text-left">
                    <div className="card text-center profile">
                        <img className="card-img-top profile-pic" src={process.env.PUBLIC_URL + '/assets/img_avatar3.png'} alt="Card image"></img>
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text"><i className="fa fa-cog"></i>Sales Representative</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            Employee Details
                        </div>
                        <div className="card-body p-0">
                            <table className="table employee-details-table mb-0">
                                <tr>
                                    <td className="bg-light label">Employee#</td>
                                    <td id="root1">12345567</td>
                                </tr>
                                <tr>
                                    <td className="bg-light label">Manager</td>
                                    <td>Will Smith</td>
                                </tr>
                                <tr>
                                    <td className="bg-light label">Location</td>
                                    <td>Trivandrum</td>
                                </tr>
                                <tr>
                                    <td className="bg-light label">Department</td>
                                    <td>Sales</td>
                                </tr>
                                <tr>
                                    <td className="bg-light label">Experience</td>
                                    <td>8 years</td>
                                </tr>
                                <tr>
                                    <td className="bg-light label">Rating</td>
                                    <td className="text-success">
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="bg-light label">Reportees</td>
                                    <td className="text-success">
                                        <a href="#" className="pr-2"><i className="fa fa-user"></i> Angelina Jolie</a>
                                        <a href="#" className="pr-2"><i className="fa fa-user"></i> Jenifer Lawrence</a>
                                        <a href="#" className="pr-3"><i className="fa fa-user"></i> Tom Cruise</a>
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-header text-white bg-primary">
                            Unit Target
  </div>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-primary text-white p-2">
                            Target Details
            </div>
                        <div className="card-body p-0">
                            <table className="table">
                                <tr>
                                    <td className="bg-light">
                                        Target 1
                  </td>
                                    <td className="w-75 text-left pr-0">
                                        <div className="row pr-0">
                                            <div className="col-11">
                                                <div className="progress">
                                                    <div className="progress-bar w-75 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-1 p-0">
                                                <button className="btn btn-secondary"><i className="fa fa-pencil"></i></button>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="bg-light">
                                        Target 2
                  </td>
                                    <td className="w-75 text-left pr-0">
                                        <div className="row pr-0">
                                            <div className="col-11">
                                                <div className="progress">
                                                    <div className="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-1 p-0">
                                                <button className="btn btn-secondary"><i className="fa fa-pencil"></i></button>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="bg-light">
                                        Target 3
                  </td>
                                    <td className="w-75 text-left pr-0">
                                        <div className="row pr-0">
                                            <div className="col-11">
                                                <div className="progress">
                                                    <div className="progress-bar w-50 bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-1 p-0">
                                                <button className="btn btn-secondary"><i className="fa fa-pencil"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bg-light">
                                        Target 4
                  </td>
                                    <td className="w-75 text-left pr-0">
                                        <div className="row pr-0">
                                            <div className="col-11">
                                                <div className="progress">
                                                    <div className="progress-bar w-100 bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-1 p-0">
                                                <button className="btn btn-secondary"><i className="fa fa-pencil"></i></button>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default App;
