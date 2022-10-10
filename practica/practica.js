/* web components se utiliza para reutilizar codigo  */
class holaMundo extends HTMLElement { //crear clase que va a se la extencion de htmlelement
    constructor(){
        super();
        this.name;//nuevo variable
        this.surname;//variable
    }

    static get observedAttributes(){//observa todos los attributos
        return ['name', 'surname'];//nombre de los atributos
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){//aqui van a llegar los atributos(name, valor anterior, nuevoValor)
        switch(nameAtr){
            case "name":
                this.name = newValue; //la nueva variable va a ser igual al nuevoValor
                break;
            case "surname":
                this.surname = newValue;
                break;
        }

    }

    connectedCallback(){// despues de crear el componente se conecta para poder editarlo
        this.innerHTML = `<div>
        <h1>Hola ${this.name} ${this.surname}</h1>
        <p>feliz dia</p>
        </div>`;
        this.style.color = "blue";
    }
}

window.customElements.define('hola-mundo', holaMundo);//defino el nombre de la clase Usando la API de customElements
