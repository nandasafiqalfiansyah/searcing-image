import image from "../../assets/images/poduct.png";

class Product extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
    .product{
      width: 85%;
      background-color: #FFFFFF;
      box-shadow: 2px 2px 30px rgba(167, 158, 245, 0.2);
      display: flex;
      margin:30px auto;
      flex-direction: column;
      align-items: center;
      padding:40px 20px;
      margin-top: -60px;
      position: relative;
      background-image: url("${image}");
      background-size:1000px;
      background-position: center;
      border-radius: 10px;
     
    }
     
    p-heading{
      margin:20px;
      text-shadow: 2px 2px 10px rgba(0,0,0,0.05);
    }
    p-heading:hover{
      transform: scale(0.97);
    }
    .p-heading h3{
      font-family: myriad pro;
      font-weight: 700;
      letter-spacing: 2px;
      text-align: center;
      font-size:2rem;
      color:#323543;
     
    }
    .p-heading h3 font{
      color:#8c84f9;
    }
    .product-container{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 10px 0px;
      width:100%;
    }
    .p-box{
      width:300px;
      height: 330px;
      overflow: hide;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 4px;
      position: relative;
      margin: 10px 30px;
    }
    .p-box img{
      width: 100%;;
      border-radius: 10px;
    }
    .p-box img:hover {
        transform: scale(1.1);
      transition: all ease 1s;
    }
    .p-box p{
      color:#4d4d4d70;
      font-family: myriad pro;
      font-size: 0.9rem;
      letter-spacing: 0.5;
        margin: 20px;
    }
    .price{
      color:#2c2c2c;
      font-family: poppins;
      font-size: 1rem;;
    }
    .buy-btn{
      position: absolute;
      width:140px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family:calibri;
      left: 50%;
      bottom: -20px;
      transform: translateX(-50%);
      border-radius: 15% 15% 15% 15% / 50% 50% 50% 50%;
      background:linear-gradient(120deg,#6b60ec 20%,#a166f4);
      color:#FFFFFF;
      display: none;
      animation: fade 0.2s;
    }
    .buy-btn:hove{
      transform: scale(0.97);
    }
    .p-box:hover .buy-btn{
      display: flex;
        transition: all ease 1s;
    }
    .p-box:hover{
      box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
      background-color:#FFFFFF;
    }
    .p-box:hover .price{
      color:#6b60ec;
      transition: all ease 0.2s;
    }
     
    @keyframes fade{
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
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
    <section class="product" id="product">
    <!--heading------------>
    <div class="p-heading">
      <h3>Trendy <font>Arri</font>vals</h3>
    </div>
    <!--product-container----------------->
    <div class="product-container">
      <!--box-1------------>
      <div class="p-box">
        <img alt="1" src="https://i.pinimg.com/originals/5e/89/3f/5e893f046dbc35285c1e411f9820ec50.gif" />
        <!--details--------->
        <p>Black Gpicture Leather .</p>
        <!--price--->
        <a class="price" href="#">$23.3</a>
        <!--buy-btn-->
        <a class="buy-btn" href="#">Add To Cart</a>
      </div>
      <!--box-2------------>
      <div class="p-box">
        <img alt="2" src="https://i.pinimg.com/originals/d4/1f/9d/d41f9d596799e030c536ada49ed9e267.gif" />
        <!--details--------->
        <p>Black Gpicture Leather .</p>
        <!--price--->
        <a class="price" href="#">$30.3</a>
        <!--buy-btn-->
        <a class="buy-btn" href="#">Add To Cart</a>
      </div>
      <!--box-3------------>
      <div class="p-box">
        <img alt="3" src="https://i.pinimg.com/originals/d8/75/ef/d875ef215747f44518e124fa8ead8e6b.gif" />
        <!--details--------->
        <p>Black Gpicture Leather.</p>
        <!--price--->
        <a class="price" href="#">$13.3</a>
        <!--buy-btn-->
        <a class="buy-btn" href="#">Add To Cart</a>
      </div>
      <!--box-4------------>
      <div class="p-box">
        <img alt="4" src="https://i.pinimg.com/originals/96/ac/0d/96ac0d507e1855c117cfd489d903efa4.gif" />
        <!--details--------->
        <p>Gpicture Leather.</p>
        <!--price--->
        <a class="price" href="#">$33.3</a>
        <!--buy-btn-->
        <a class="buy-btn" href="#">Add To Cart</a>
      </div>
      <!--box-5------------>
      <div class="p-box">
        <img alt="5" src="https://i.pinimg.com/originals/9c/fe/3a/9cfe3a022445694dfd90f89cb6e29fd5.gif" />
        <!--details--------->
        <p>Black Gpicture Leather.</p>
        <!--price--->
        <a class="price" href="#">$11.3</a>
        <!--buy-btn-->
        <a class="buy-btn" href="#">Add To Cart</a>
      </div>
      <!--box-6------------>
      <div class="p-box">
        <img alt="6" src="https://i.pinimg.com/originals/ec/76/a5/ec76a54012da8f6486ea5cc999d1335a.gif" />
        <!--details--------->
        <p>Black Gpicture .</p>
        <!--price--->
        <a class="price" href="#">$43.3</a>
        <!--buy-btn-->
        <a class="buy-btn" href="#">Add To Cart</a>
      </div>
      </div>
      </section>`;
  }
}

customElements.define("product-container", Product);
