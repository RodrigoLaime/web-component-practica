class productCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["img", "title", "price", "description", "collection"];
  }
  attributeChangedCallback(atribute, oldVal, newVal) {
    if (atribute === "img") {
      this.img = newVal;
    }
    if (atribute === "title") {
      this.title = newVal;
    }
    if (atribute === "price") {
      this.price = newVal;
    }
    if (atribute === "description") {
      this.description = newVal;
    }
    if (atribute === "collection") {
      this.collection = newVal;
    }
  }

  /* ingresar html5 */
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <main>
          <img class="img" src="${this.img}"></img>
          <div class="container-element">
            <h1>${this.title}</h1>
            <p>${this.description}</p>
            <section class="section-top">
              <div class="icon-left">
                <a class="icono"><i class="fa-solid fa-music"></i></a>
                <a class="price">Annual PLan<br><span>${this.price}</span></a>
              </div>
              <a class="change">Change</a>
            </section>
            <section class="section-bottom">
              <button class="button-color">Proceed to Payment</button>
              <button class="button-white">Cancel Order</button>
            </section>
          </div>
        </main>
        ${this.getStyles()}
        `;
    return template;
  }
  /* ingresar los stylos */
  getStyles() {
    return `
        <style>
        :host {
            background: white;
        }
        main {
            width: 100%;
            max-width: 450px;
            min-width: 300px;
            background-color: #fff;;
            border-radius: 20px;
        }
        .img{
            border-radius: 20px 20px 0 0;
        }
        .container-element{
            width: 80%;
            margin: 0px auto;
            padding: 30px 0;
        }
        .container-element h1{
            font-size: 3rem;
            color:#22345C;
           
        }
        .container-element p{
            font-size: 1.7rem;
            line-height: 2.5rem;
            color:#7E84A4;  
        }
        .section-top{
            padding: 5px 20px;
            background-color: #F8F9FE;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.4rem;
            
            border-radius: 10px;
        }
        .icon-left{
            display: flex;
            align-items: center;
        }
        .icon-left .icono{
            font-size: 2rem;
            border-radius: 50%;
            padding: 15px;
            tex-allign: center;
            background-color: #D9E4F6;
            color: #737D98;
        }
        .icon-left .price{
            margin: 20px 10px;
            font-size: 1.6rem;
            font-weight: bold;
            line-height: 2.5rem;
            color:#222F51;
        }
        .icon-left span{
            color: #9397B0;
            font-weight: 400;
        }
        .section-top .change{
            padding: 20px 0;
            color: #3E30C1;
            font-weight: 700;
        }

        .section-bottom{
            display:flex;
            flex-direction: column
        }
        .button-color{
            background-color: #382AE1;
            padding: 15px 0;
            border:none;
            border-radius: 10px;
            font-size: 1.6rem;
            font-weight: 700;
            margin: 30px 0;
            color: lightgray;
        }
        .button-white{
            border: none;
            background: none;
            font.size: 1.6rem;
            font-weight: 800;
            color:#676C7F;
        }

        @media (max-width: 480px){
            .img{
                width: 300px;
            }
            .container-element{
              width: 300px;
            }
            .container-element h1{
              font-size: 2.4rem;  
            }
            .container-element p{
            font-size: 1.6rem; 
            font-weight: 500;
            width: 80%;
            margin: 0 auto;
            margin-bottom: 20px
            }
            .section-top{
              padding: 5px 10px;
              width: 80%;
              margin: 0 auto;
            }
            .icon-left .price{
              margin: 10px 10px;
              font-size: 1.5rem;
            }
            .section-top .change{
              padding: 10px 0;
              font-size: 1.3rem;
            }
            .button-color{
              width: 80%;
              margin: 25px auto;
            }
        }
        </style>
        `;
  }
  /* renderizar */
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}
customElements.define("product-card", productCard);
