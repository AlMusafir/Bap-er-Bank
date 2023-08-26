  // 1 first add the event hadnler 
      
  document.getElementById('btn-login').addEventListener('click' , function(){
        
    // set email to get the value when login / submit clicked 

    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
   // console.log(email)

     
    // set the password feild 

    const passFeild = document.getElementById('user-pass');
    const pass = passFeild.value;
    //console.log(email , pass)





    //now the conditionals

        if(email === 'loveumusafir' && pass === 'musafir+munni' ){
            window.location.href = 'homepage.html'
        }

        else{
            alert('musafir k biye korar joggota tor nei. tui hege haga kha')
        }

    })
