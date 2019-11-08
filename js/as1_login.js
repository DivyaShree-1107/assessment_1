		  var name = prompt('Username','')('Password','');
		  // var password = prompt('Password',null);
		
		  if(name == null && password == null)
		  	{
		  		debugger;
		  		document.getElementById("demo_1").innerHTML="Please enter all credentials";

		  	}
		  	else{
					document.getElementById("demo_1").innerHTML="You have entered " + name + " and password as " + password  ;
			}
		