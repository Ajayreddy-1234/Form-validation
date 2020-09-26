import React,{ Component } from 'react'
const IS ={
	Username:"",
     Email:"",
     PhoneNumber:"",
     UsernameError:"",
     EmailError:"",
     PhoneNumberError:"",
     x:""
}
class FormV1 extends Component {
	state=IS;
	Forchange = event => {
    const makeC = event.target.type === "checkbox";
    this.setState({
    	[event.target.name]: makeC
    	?event.target.checked
    	: event.target.value
    });
	};
	
	validate = () =>{
		let UsernameError="";
     let EmailError="";
     let PhoneNumberError="";
     const regex= /^([0-9])+$/;
     if(!this.state.Username)
     {
         UsernameError='Your username cannot be Empty';
     }else if(this.state.Username.length<3){
          UsernameError='Your username should be atleast 3 characters';
     }
     if(!this.state.Email.includes("@"))
     {
     	EmailError='Your Email is not Valid';
     }
     if(!this.state.PhoneNumber)
     {
         UsernameError='Your PhoneNumber cannot be Empty';
     }else if(this.state.PhoneNumber.length<10)
     {
     	PhoneNumberError='Your PhoneNumber should have atleast 10 digits';
     }else if(!regex.test(this.state.PhoneNumber))
     {
     	PhoneNumberError='Your PhoneNumber does not contain numbers';
     }
     if(EmailError||UsernameError||PhoneNumberError)
     {
     	this.setState({UsernameError,EmailError,PhoneNumberError});
     	return false;
     }
     return true;
	}

	Forsubmit = event => {
      event.preventDefault();
      const isV= this.validate();
      if(isV){
      console.log(this.state);
      this.setState(IS);this.x="blue";
      alert("You have successfully submitted the form");

  }
	};
	
	render()
	{
	   return(
     <form onSubmit={this.Forsubmit}>
     <div>
     <p><label style={{color:this.x}}>Username: <input name="Username" placeholder="John" 
            value={this.state.Username}
            onChange={this.Forchange}
      /></label></p>
      <div style={{color:"red",fontSize:15}}>
      {this.state.UsernameError}
      </div>
     </div>
     <div><p>
     <label style={{color:this.x}}>Email ID : <input name="Email" placeholder="John@gmail.com" 
            value={this.state.Email}
            onChange={this.Forchange}/></label></p>
       <div style={{color:"red",fontSize:15}}>
      {this.state.EmailError}
      </div>
     </div>
     <div>
     <p><label style={{color:this.x}}>PhoneNumber: <input name="PhoneNumber" placeholder="9848012345" 
            value={this.state.PhoneNumber}
            onChange={this.Forchange}/></label></p>
       <div style={{color:"red",fontSize:15}}>
      {this.state.PhoneNumberError}
      </div>
     </div>
     <button type="submit">Submit</button>
     </form>
	   	);
	}
}
export default FormV1;