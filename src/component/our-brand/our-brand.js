import image from "../../assets/images/mobile.gif";
class Ourbrand extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
    

    .our-brand{
    display: flex;
    width: 85%;
    margin:30px auto;
    justify-content: space-around;
    align-items: center;
    padding:30px;
    }
    .brand-text{
    width:40%;
    font-family:myriad pro;}
    .brand-img{
    height: 500px;
    width: 50%;
    box-sizing: border-box;
    }
    .brand-img img{
    width:100%;
    height: 100%;
    object-fit:contain;
    }
    .brand-text h3{
    color:#333333;
    font-weight: 700;
    font-size:3rem;
    margin:0px;
    }
    .brand-text h4{
    color: #333333;
    font-weight: 400;
    font-size:2rem;
    margin:0px;
    }
    .brand-text font{
    color:#8d83f9;
    }
    .brand-text p{
    font-size: 1rem;
    color:#bdbdbd;
    letter-spacing: 0.5px;
    }
    
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
    </style>
    <section class="our-brand" id="Book--">
    <!--text-->
    <div class="brand-text">
      <!--heading-->
      <h3>Our Picture</h3>
      <h4>add your picture now<font> interesting animated images</font>
      </h4>
      <!--details-->
      <p>image is a combination of dots, lines, areas and colors that are useful for imaging something. Around us
        today there are many pictures. As in comics, story books, and so forth. Images can also be interpreted
        as a display of an object into the media image.
      </p>
    </div>
    <!--img-->
    <div class="brand-img"><img src="${image}" /></div>
  </section>
    `;
  }
}

customElements.define("ourbrand-container", Ourbrand);
