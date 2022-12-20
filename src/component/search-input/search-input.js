import image from "../../assets/images/img.gif";

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `

    <style>
    .bacground{
        height: 100vh;
        width: 100%;
        background: url('${image}') no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        font-family: "Ubuntu", sans-serif;
        text-align: center;
      }
      
      a{
          text-decoration:none;
      }
      ul{
          list-style:none;
      }
      .main{
          width:100%;
          height: 100vh;
          background-size:800px;
          background-position: center;
          position: relative;
      }
      .logo{
          position: absolute;
          left: 90px;
          top: 50px;
      }
      .logo:hover{
          transform: scale(0.97);
      }
      .logo a{
          font-family:poppins;
          font-weight: bold;
          color: #2f2e41;
          font-size:2rem;
          text-shadow: 2px 2px 30px rgba(0,0,0,0.2);
          letter-spacing: 1px;
          text-shadow: 5px 3px 2px rgb(255, 255, 255);
      }
      .logo font{
          color:#7A72FF;
      }
      
      .m-text{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-90%,-50%);
      }
      
      .m-text h1:hover,h2:hover{
          transform: scale(0.97);
      }
      
      .m-text h1,h2{
          font-family:Roboto;
          font-weight: bold;
          margin: 0px;
          line-height: 60px;
          font-size: 4rem;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.08);
          letter-spacing: 3px;
          text-shadow: 5px 3px 2px rgb(255, 255, 255);
          
      }.m-text h1{
          letter-spacing:28px;
      }
      
      h1,h2{
          color: #2f2e41;
          
      }
      .m-btn{
          width:150px;
          height: 40px;
          background-color: #2f2e41;
          box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10% 10% 10% 10% / 50% 50% 50% 50%;
          margin-top: 20px;
          color:#fff;
          font-family: calibri;
          font-weight: 600;
          letter-spacing: 0.5px;
          font-size: 1rem;
      }
      .m-btn:hover{
          color:#FFFFFF;
          background-color: #6e64ff;
          transition: all ease 0.5s;
          transform: scale(0.97);
          
      }
      .social a{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px 15px;
      }
      .social{
          position:fixed;
          left: 30px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 20px;
          background-color: #FFFFFF;
          box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
          padding: 5px 0px;
          z-index: 1;
      }
      .social a i{
          color:rgba(39,39,39,0.80);
      }
       
      .social a:hover .fa-home{
          color: #3b5998;
          transform: scale(1.3);
          transition: all ease 0.5s;
      }
      .social a:hover .fa-shopping-bag{
          color: #3b5998;
          transform: scale(1.3);
          transition: all ease 0.5s;
      }
      .social a:hover .fa-clock{
          color:  #3b5998 ;
          transform: scale(1.3);
          transition: all ease 0.5s;
      }
      .social a:hover .fa-search{
          transform: scale(1.3);
          color: 	#3b5998;
          transition: all ease 0.5s;
      }
       
.search-container {
    max-width: 500px;
    padding: 30px;
  
    display: flex;
    position: sticky;
    top: 10px;
  }
  
  .search-container > input {
    width: 150px;
    padding: 14px;
    border-radius: 10px;
    border-bottom: 1px solid #2f2e41;
    font-weight: bold;
    border: 0;
    background-color: transparent;
  }
  
  .search-container > input:focus {
    outline: 0;
   
  }
  
  .search-container > input:focus::placeholder {
    font-weight: bold;
  }
  
  .search-container > input::placeholder {
    color: #2f2e41;
    font-weight: normal;
  }
  
  .search-container > button {
    width: 30%;
    cursor: pointer;
    border-radius: 50px;
    border: 0;
  background-color: transparent;
    text-transform: uppercase;
  }
  
  
  .search-container button:hover{
      transform: scale(1.3);
    transition: all ease 0.5s;
  }
  
  .side-box{
      position: absolute;
      right: 90px;
      top: 50px;
      width:200px;
      height: 45px;
      display: flex;
      justify-content:center;
      align-items: center;
      border-radius: 10% 10% 10% 10% / 50% 50% 50% 50%;
      box-shadow: 2px 2px 30px rgba(167, 158, 245, 0.2);
      box-sizing: border-box;
      z-index: 1;
      position:fixed;
      background-color: white;
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



    <header>
    <div class="bacground">
      <!--main-section--------------->
      <section class="main">
        <!--logo------------->
        <div class="logo ">
          <a href="#">
            <font>PIC</font>Shop
          </a>
        </div>
        <!--side-menu------------->

        <!--search------------->

        
        <div class="side-box">

          <div class="search-container" id="search-container">
           <!--icon----------->
          <input placeholder="Search picture....." id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">🔍</button>
          </div>
          </div>
          
        <!-- search -->

        <div class="m-text">
          <h1>
            <font>PI</font>CTURE
          </h1>
          <h2>Collection
          </h2>
          <!--btn------------>
          <a class="m-btn" href="#">Details</a>
        </div>
    </div>

    <!--social-------->

    <div class="social">
      <a href="#"><i class="fa fa-home"></i></a>
      <a href="#product"><i class="fa fa-shopping-bag"></i></a>
      <a href="#Book--"><i class="fas fa-clock"></i></a>
      <a href="#"><i class="fa fa-search"></i></a>
    </div>
  </header>

  <!--social-------->
  <div class="social">
    <a href="#"><i class="fa fa-home"></i></a>
    <a href="#product"><i class="fa fa-shopping-bag"></i></a>
    <a href="#footer"><i class="fas fa-clock"></i></a>
    <a href="#"><i class="fa fa-search"></i></a>

  </div>

  </section>
      `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-input", SearchBar);
