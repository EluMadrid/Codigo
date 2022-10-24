class myCard extends HTMLElement{
    constructor(){
        super();
        this.addclass = "card my-5 p-3 col-12 col-md-6 col-lg-4";
        this.title = ""; 
        this.message ="";
        this.img ="";
    }

     static get observedAttributes(){
        return["tittle","message","img"];
     }
  
     attributeChangedCallback(name, oldvalue, newvalue) {
		this[name] = newvalue;
	}

    connectedCallback(){
        if (this.addclass) {
			const lista_de_clases = this.addclass.split(" ");
			lista_de_clases.forEach((xclass) => {
				this.classList.add(xclass);
			});
		}

     this.innerHTML = `
        <div stye="width:18 rem">
        <img class="card-img-top" src="${this.img}" width="100%" alt="">
        <div class="card-body">
        <h4>Cupcakes de vainilla</h4>
        <p>${this.message}</p>
        <button class="btn btn-primary">Comprar</button>
        </div></div>`
    };
}

customElements.define("my-card",myCard);