function myFunction() 
   {
      var d = 0;
   	  var fname = document.getElementById("fname").value;   /* first name Get Value By ID */
	    var lname = document.getElementById("lname").value;   /* Last name Get Value By ID */
	    var Phone = document.getElementById("Phone").value;   /* Phone Number Get Value By ID */
      var Email = document.getElementById("Email").value;   /* Email Adderss Get Value By ID */
      var Date1 = document.getElementById("Date1").value;   /* Departure Date Get Value By ID */
      var Date2 = document.getElementById("Date2").value;   /* Return Date Get Value By ID */
      var Select = document.getElementById("select").value;  /* Numer of passenger Get Value By ID */
      var Rad = document.getElementById("rad1").checked;     /* Radio first value Checked value */
      var Rad2 = document.getElementById("rad2").checked;    /* Radio second value Checked value */
      var Rad3 = document.getElementById("rad3").checked;    /* Radio thired value Checked value */
      var Rad4 = document.getElementById("rad4").checked;    /* Radio forth value Checked value */
      
      /* Validate First Name Field */


   	  if (fname == "")
   	  {
                d =d + 1;
                var fn = document.getElementById("fname");
     	          fn.classList.add("input-RED");
                document.getElementById("Required1").innerHTML = "This field is required.";
               
    	}
      else
      {
                var fn = document.getElementById("fname");
                fn.classList.remove("input-RED");
                fn.classList.add("input-normal");
                document.getElementById("Required1").innerHTML = "";
      }

      /* Validate Last Name Field */ 


	   if (lname == "")    
   	  {
                d =d + 1;
                var ln= document.getElementById("lname");
     	          ln.classList.add("input-RED");
                document.getElementById("Required1").innerHTML = "This field is required.";
    	}
      else
      {
                var ln = document.getElementById("lname");
                fn.classList.add("input-normal");
                ln.classList.remove("input-RED");
      }

      /* Validate Phone Field */ 


	   if (Phone == "")    
   	  {
                d =d + 1;
                var Ph = document.getElementById("Phone");
     	          Ph.classList.add("input-RED");
                document.getElementById("Required2").innerHTML = "This field is required.";
	     
    	}
      else 
      {
           var phoneno = /^\d{3}-\d{3}-\d{4}$/;
           if(Phone.match(phoneno))
           {
                var Ph = document.getElementById("Phone");
                Ph.classList.remove("input-RED");
                Ph.classList.add("input-normal");
                document.getElementById("Required2").innerHTML = "";
                 
            }
           else
           {

              var Ph = document.getElementById("Phone");
              Ph.classList.add("input-RED");
              document.getElementById("Required2").innerHTML = "Expected 3-3-4";
              d=d + 1
           }
      }

       /* Validate Email Address Field */


      if (Email == "")    
      {
                d =d + 1;
                var EM = document.getElementById("Email");
                EM.classList.add("input-RED");
                document.getElementById("Required3").innerHTML = "This field is required.";
      }
      else
      {
             var re = /\S+@\S+\.\S+/;
        if(re.test(Email) == true)
        {
           var EM = document.getElementById("Email");
           EM.classList.remove("input-RED");
           EM.classList.add("input-normal");
           document.getElementById("Required3").innerHTML = "";
        }
        else
           {
              var EM = document.getElementById("Email");
              EM.classList.add("input-RED");
              document.getElementById("Required3").innerHTML = "Expected input: email";
              d=d + 1
           }

      }

      /* Validate Departure Date Field */


      if (Date1 == "")    
      {
                d =d + 1;
                var DA1 = document.getElementById("Date1");
                DA1.classList.add("input-RED-Date");
                document.getElementById("Required4").innerHTML = "This field is required.";
               
      }
      else
      {
                var DA1 = document.getElementById("Date1");
                DA1.classList.remove("input-RED-Date");
                DA1.classList.add("normal-Date");
                document.getElementById("Required4").innerHTML = "";
      }

      /* Validate Return Date Field */ 


      if (Date2 == "")   
      {
                d =d + 1;
                var DA2 = document.getElementById("Date2");
                DA2.classList.add("input-RED-Date");
                document.getElementById("Required5").innerHTML = "This field is required.";
               
      }
      else
      {
                var DA2 = document.getElementById("Date2");
                DA2.classList.remove("input-RED-Date");
                DA2.classList.add("normal-Date");
                document.getElementById("Required5").innerHTML = "";
      }

      /* Validate Number of guests/passengers select menu */ 


      if (Select == "")
      {
                d =d + 1;
                var SEL = document.getElementById("select");
                SEL.classList.add("input-RED-Date");
                document.getElementById("Required6").innerHTML = "This field is required.";
      }
      else
      {
                var SEL = document.getElementById("select");
                SEL.classList.remove("input-RED-Date");
                SEL.classList.add("normal-Date");
                document.getElementById("Required6").innerHTML = "";
      }


      /* validate Type-of-room Radio check box */ 
      
      if(Rad == true || Rad2 == true || Rad3 == true || Rad4 == true)
      {
          document.getElementById("txt-RD1").classList.remove("text-RED");        
          document.getElementById("txt-RD1").classList.add("text-normal");
          document.getElementById("txt-RD2").classList.remove("text-RED");
          document.getElementById("txt-RD2").classList.add("text-normal");
          document.getElementById("txt-RD3").classList.remove("text-RED");
          document.getElementById("txt-RD3").classList.add("text-normal");
          document.getElementById("txt-RD4").classList.remove("text-RED");
          document.getElementById("txt-RD4").classList.add("text-normal");
          
          document.getElementById("circ-RD1").classList.remove("checkmark-RED");
          document.getElementById("circ-RD1").classList.add("checkmark-normal");
          document.getElementById("circ-RD2").classList.remove("checkmark-RED");
          document.getElementById("circ-RD2").classList.add("checkmark-normal");
          document.getElementById("circ-RD3").classList.remove("checkmark-RED");
          document.getElementById("circ-RD3").classList.add("checkmark-normal");
          document.getElementById("circ-RD4").classList.remove("checkmark-RED");
          document.getElementById("circ-RD4").classList.add("checkmark-normal");
          
         document.getElementById("Required7").innerHTML = "";
      }
      else
      {
          d =d + 1;
          document.getElementById("txt-RD1").classList.remove("text-normal");
          document.getElementById("txt-RD1").classList.add("text-RED");
          document.getElementById("txt-RD2").classList.remove("text-normal");
          document.getElementById("txt-RD2").classList.add("text-RED");
          document.getElementById("txt-RD3").classList.remove("text-normal");
          document.getElementById("txt-RD3").classList.add("text-RED");
          document.getElementById("txt-RD4").classList.remove("text-normal");
          document.getElementById("txt-RD4").classList.add("text-RED");

          document.getElementById("circ-RD1").classList.remove("checkmark-normal");
          document.getElementById("circ-RD1").classList.add("checkmark-RED");
          document.getElementById("circ-RD2").classList.remove("checkmark-normal");
          document.getElementById("circ-RD2").classList.add("checkmark-RED");
          document.getElementById("circ-RD3").classList.remove("checkmark-normal");
          document.getElementById("circ-RD3").classList.add("checkmark-RED");
          document.getElementById("circ-RD4").classList.remove("checkmark-normal");
          document.getElementById("circ-RD4").classList.add("checkmark-RED");
          
          document.getElementById("Required7").innerHTML = "Please Choose one.";
      }



      /* Validate Form before get action */ 

      if (d > 0)    
      {
            return false;
      }
              
    }


    
    
