class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

main {
  width: 90%;
  max-width: 800px;
  margin: 32px auto;
}

@media(max-width:1230px){
    .m-img img{
        height: 350px;
    }
    .m-text h1,h2{
        font-size:3.5rem;
    }
}
@media(max-width:1045px){
    .main{
        background-size: 600px;
    }
    .m-img{
        display:none;
    }
    .m-text{
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        
 
    }
.our-brand{
    flex-direction:column-reverse;
}
.brand-text,.brand-img{
    width:100%;
}
.brand-img{
    height:300px;
    margin:20px;
}
}
@media(max-width:600px){
    .social{
        display: none;
    }
    .logo{
    left: 40px;
    top:40px;
    }
    .logo a{
        font-size: 1.4rem;;
    }
    .side-box{
        right:30px;
        top:30px;
    }
    .m-text{
        overflow-wrap: break-word;
        display: flex;
        flex-direction: column;
        margin:auto;
    }
    .m-text h1,h2{
        font-size: 2.5rem;
        line-height:40px;
        margin:0px 20px;
        letter-spacing: 10px;
     }
     .m-text h2{
        font-size: 1.2rem;
     }
     .m-btn{
         margin:0px 20px;
     }
     .product{
         width:88%;
     }
     .p-box{
        margin:20px 10px;
        padding:10px 20px;
         width:100%;
         text-align: center;
     }
     .subcribe-input{
       
        width:95%;
    }
    .subcribe-container h3{
        font-size:1.4rem;
        text-align: center;
    }
     .footer-menu{
         width:100%;
         margin:20px;
         flex-wrap: wrap;
         background-color:none;
         box-shadow: none;
     }
     .footer-menu li a{
         background-color:#fff;
         border-radius: 20px;
         box-shadow:2px 2px 30px rgba(0, 0, 0, 0.1) ;
         padding:10px 30px !important;
     }
    .copyright {
         text-align: center;
     }
  }
.subcribe-container{
  width:100%;	
  height:250px;
  margin-bottom:30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgba(0,0,0,0.03);
  }
  .subcribe-container h3{
  font-size: 2rem;
  color: rgb(56, 56, 56);
  }
  .subcribe-input{
      width:500px;
      background-color: #fff;
      border-radius: 7% 7% 7% 7% / 50% 50% 50% 50%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding:20px;
      box-shadow: 2px 5px 30px rgba(0,0,0,0.1);
      margin-top:20px;
  }
  .subcribe-input input{
      width:100%;
      height: 40px;
      border: none;
      outline: none;
      background-color: transparent;
  }
  .subcribe-btn{
      width:120px;
      height: 40px;
      background-color: #202020;
      border-radius: 20px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-weight: bold;
      box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
      font-size: 1rem;
  }
  .subcribe-btn:hover{
      background-color:#6b60ec;
      transition: all  ease 0.5s;
  }

  .copyright{
      color:#e7e7e7;
      background-color: #141414;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
  }
  .copyright a {
      color: var(--side-nav);
      margin-left: 5px;
    }
    
    .copyright a:hover {
      color: var(--text-color);
      transform: scale(0.97);
    }
    .copyright:hover {
      font-weight: bold;
    }
    
    </style>
    <section class="subcribe-container" id="footer">
    <!--heading-->
    <h3>Subcribe For New Product Notification</h3>
    <!--Input-------->
    <div class="subcribe-input">
      <input placeholder="Eample@gmail.com" type="email" />
      <a class="subcribe-btn" href="#">Send</a>
    </div>
  </section>

  <!--copyright--------------->
  <p class="copyright">
    Dibuat dengan Banyak 💜 oleh<a href="https://github.com/nandasafiqalfiansyah" target="_blank"> nanda safiq
      alfiansyah.</a>
    &copy; 2022
  </p>
    `;
  }
}

customElements.define("footer-container", Footer);
