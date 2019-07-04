import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
class Login extends React.Component{

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

        fetch('http://localhost:3004/post/7', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            em: this.state.email,
            pass: this.state.pass
        })
        }).then(res => res.json()).then(
            (result) => {
             console.log("fix");
            },
            (error) => {
                console.log("error");
            }
          );

      }

    render() {
    return (
        <div className="container">
           
            <div className="row mt-4 content">

                <div className="col">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            Login
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
                                       <button onClick={this.handleClick}> Login </button>
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

export default Login;
