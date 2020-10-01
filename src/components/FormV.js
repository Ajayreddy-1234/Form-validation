import React,{ Component } from 'react'
const IS ={
	Username:"",
     Email:"",
     PhoneNumber:"",
     UsernameError:"",
     EmailError:"",
     PhoneNumberError:"",
     col:"orange"
}
class FormV1 extends Component {
	state=IS;
	Forchange = event => {
    const makeC = event.target.type === "checkbox";let fun=event.target.name;
    this.setState({
    	[event.target.name]: makeC
    	?event.target.checked
    	: event.target.value,col:"orange"
    },()=>{if(fun==="Username")this.Forvalidate()
    else if(fun==="Email")this.Forvalidate1()
      else this.Forvalidate2()});
	};
	validate = () =>{
     
     if(!this.state.Username||!this.state.Email||!this.state.PhoneNumber||this.state.EmailError||this.state.UsernameError||this.state.PhoneNumberError)
     { this.Forvalidate1();this.Forvalidate2();this.Forvalidate();
       this.setState({col:"red"});
     	return false;
     }
     return true;
	}
	Forsubmit = event => {
      event.preventDefault();
      const isV= this.validate();
      if(isV){
      console.log(this.state);
      this.setState(IS);
      alert("You have successfully submitted the form");

  }
	};
  Forvalidate = event => {
        let UsernameError="";
        if(!this.state.Username)
     {
         UsernameError='Your username cannot be Empty';
     }else if(this.state.Username.length<3){
          UsernameError='Your username doesnot have atleast 3 characters';
     }
     this.setState({UsernameError});
  };
  Forvalidate1 = event => {
        let EmailError="";
        if(!this.state.Email)
     {
         EmailError='Your Email cannot be Empty';
     }else if(!this.state.Email.includes("@"))
     {
      EmailError='Your Email is not Valid';
     }
     this.setState({EmailError});
  };
Forvalidate2 = event =>{
   let PhoneNumberError="";
  const regex= /^([0-9])+$/;
  if(!this.state.PhoneNumber)
     {
         PhoneNumberError='Your PhoneNumber cannot be Empty';
     }else if(this.state.PhoneNumber.length<10)
     {
      PhoneNumberError='Your PhoneNumber doesnot contain atleast 10 digits';
     }else if(!regex.test(this.state.PhoneNumber))
     {
      PhoneNumberError='Your PhoneNumber doesnot contain numbers';
     }
     this.setState({PhoneNumberError});
     
};
ForValidColor = () =>{
if(this.state.Username && this.state.PhoneNumber && this.state.Email && !this.state.UsernameError && !this.state.PhoneNumberError&& !this.state.EmailError )
      {return true;}else{return false;}
}
	render()
	{
	   return(
     <form onSubmit={this.Forsubmit}>
     <div>
     <p><label style={{color:this.ForValidColor()?"blue":"black"}}>Username: <input name="Username" placeholder="John" 
            value={this.state.Username} 
            onChange={this.Forchange}
      /></label></p>
      <div style={{color:this.state.col,fontSize:15}}>
      {this.state.UsernameError}
      </div>
     </div>
     <div><p>
     <label style={{color:this.ForValidColor()?"blue":"black"}}>Email ID : <input name="Email" placeholder="John@gmail.com" 
            value={this.state.Email}
            onChange={this.Forchange}/></label></p>
       <div style={{color:this.state.col,fontSize:15}}>
      {this.state.EmailError}
      </div>
     </div>
     <div>
     <p><label style={{color:this.ForValidColor()?"blue":"black"}}>PhoneNumber: <input name="PhoneNumber" placeholder="9848012345" 
            value={this.state.PhoneNumber}
            onChange={this.Forchange}/></label></p>
       <div style={{color:this.state.col,fontSize:15}}>
      {this.state.PhoneNumberError}
      </div>
     </div>
     <button type="submit">Submit</button>
     </form>
	   	);
	}
}
export default FormV1;
