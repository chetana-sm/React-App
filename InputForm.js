import React, { Component } from 'react'
// import Calendar from 'react-calendar'
import Display from './Display'
import Table from './Table'
import * as ReactBootStrap from "react-bootstrap"


 class InputForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              firstname:'',
              lastname:'',
              emailId:'',
              DOB: '' , 
              arr:[],
              arrcollection:{}
                   
            }
              

                   }

     changeFirstNameHandler=(event) =>{
        // console.log(event)
         this.setState({
             firstname:event.target.value
         })
     }

     changeLastNameHandler =(event) =>{
        this.setState({
            lastname:event.target.value
        })
     }

     changeEmailIdHandler =(event) =>
     {
        this.setState({
            emailId:event.target.value
        })
     }
     

     submitHandler =event =>{
        
        event.preventDefault();
        let info={
            fname:this.state.firstname,
            lname:this.state.lastname,
            email:this.state.emailId,
            dob:this.state.DOB
        }
        //console.log(this.state);
        this.setState({
            
            arr:[...this.state.arr,info],
            //arrcollection:[...this.arrcollection,this.state.arr]
            })
        
            console.log(this.state.arrcollection)
        }

     changeDOBHandler =(event) =>
     {
        //  console.log('hey')
         this.setState({
             DOB:event.target.value
         })
     }

      renderInformation = (arr,index) => {
          return(
            
            <tr key={index}>
                <th>{arr.fname}</th>
                <th>{arr.lname}</th>
                <th>{arr.email}</th>
                <th>{arr.dob}</th>
            </tr>
        )   
      }

     
    
     
    render() {
         //console.log('in random')
        //console.log(this.state)
     //console.log(this.state.arrcollection)
        
        // const {fname,lname,email,dob,array}=this.state
        // console.log(lname)
        
        
        return (
            <div>
                <form onSubmit={this.submitHandler}>
               
                    
                    <div>
                        <label>First Name</label>
                        <input type='text' value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' value={this.state.lastname} onChange={this.changeLastNameHandler} />
                    </div>
                    <div>
                        <label>Email-ID</label>
                        <input type='text' value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                    </div>
                    <div>
                        <label>DateOfBirth</label>
                        <input type='date' value={this.state.DOB} onChange={this.changeDOBHandler} />
                        
                    </div>
                    <button type='submit' >Save</button>
                    
                </form> 

                <ReactBootStrap.Table striped bordered hover>
                
                    <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>EMailID</th>
                        <th>DoB</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.arr.map(this.renderInformation)
                        }
                   
                    </tbody>
               

                </ReactBootStrap.Table>
                </div>)   

    }   
    
}

export default InputForm
