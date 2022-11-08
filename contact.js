document.querySelector('button').addEventListener('click', (e)=>{
    e.preventDefault();
    const contactForm = document.querySelector('#form');
    console.log(contactForm)
    const name = document.querySelector('[name="name"]');
    console.log(name)
    const email = document.querySelector('[name="email"]');
    console.log(email)
    const message = document.querySelector('[name="content"]');
    console.log(message)

   
    // validation before sending the data
    if(name.value.length===0 || email.value.length===0 || message.value.length===0){
      alert('please fill the inputs')
    }else{
      let data = new FormData(contactForm);  
      fetch("_url_here", { method: "POST", body: data });
      alert('Thank you. your form was submited');
      contactForm.reset()
    }
  })