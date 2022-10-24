/**
 * Reglas de nuestra clase
 * 1) Que debemos recibir 3 parametros cuando instaciemos esta
 * 2) Tendemos 3 estados
 *    * status 1 = create
 *    * status 2 = done
 *    * status 3 = delete
 * 3) Tendremos una function para poder renderizar nuestra tarea
 * 4) Tendremos una function para actualizar nuestra tarea
 * 5) Tendremos una function para eleminar nuestra tarea
 * CRUD => CREATE - READ - UPDATE - DELETE
 */

//* Esta es la forma en la que instanciamos a la clase Task
//* const task = new Task("Tarea1", new Date(), 1);

export class Task {
    // Estos parametros
    constructor(name, date, status) {
      this._name = name;
      this._date = date;
      this._status = status;
    }

    render(){
        return `
        <div class="item__task">
        <input type="checkbox" />
        <h6>${this._name}</h6>
        <button onclick="destroy()">
          <img src="./images/edit.png" width="15" alt="" />
        </button>
        <button>
          <img src="./images/delete.png" width="15" alt="" />
        </button>
      </div>`
    }
}a112|