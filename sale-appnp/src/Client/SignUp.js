import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
class SignUp extends React.Component{

    constructor(p){
        super(p);
        this.state = {
            email: null,
            pass: null
          };
      
    }

    handleEmailChange = (e)=>{
        this.setState({email: e.target.value});
    }

    handlePassChange = (e)=>{
        this.setState({pass: e.target.value});
    }

    handleClick = () => {
        console.log("EMail: " + this.state.email);
        console.log("Password: " + this.state.pass);
      }

    render() {
    return (
        <div className="container">
           
            <div className="row mt-4 content">

                <div className="col">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            Sign Up
                        </div>
                        <div className="card-body p-0">
                            <table className="table employee-details-table mb-0">
                                <tr>
                                    <td className="bg-light label">User name</td>
                                    <td ><input type="text" id="userName" value={this.state.email} onChange={this.handleEmailChange} /></td>
                                </tr>
                                <tr>
                                    <td className="bg-light label">Password</td>
                                    <td><input type="password" id="pass" value={this.state.pass} onChange={this.handlePassChange} /></td>
                                </tr>
                               
                                <tr>
                                    <td className="bg-light label"></td>
                                    <td className="text-success">
                                       <button onClick={this.handleClick}> Sign Up </button>
                                    </td>
                                </tr>

                                

                            </table>
                        </div>
                    </div>
                </div>
                </div >
        </div >
    );
}
}

export default SignUp;
