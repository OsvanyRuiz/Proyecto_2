//VARIABLES GLOBALES
const formularioUI = document.querySelector(`#formulario`);
const boton = document.querySelector(`#btn`);
const lista_actividadesUI = document.querySelector(`#lista_actividades`);
let arrayActividades = [];
let item = {
  actividad: ` `,
  estado: false,
};

//funciones

const CrearItem = (actividad) => {
  let item = {
    actividad: actividad,
    estado: false,
  };
  arrayActividades.push(item);

  return item;
};
const GuardarDB = () => {
  localStorage.setItem(`rutina`, JSON.stringify(arrayActividades));
  PintarDB();
};

function eliminar(index) {
  const datos = JSON.parse(localStorage.getItem("rutina"));
  datos.splice(index, 1);
  PintarDB();
  localStorage.setItem(`rutina`, JSON.stringify(datos));
}

const PintarDB = () => {
  lista_actividadesUI.innerHTML = ``;

  arrayActividades = JSON.parse(localStorage.getItem(`rutina`));

  if (arrayActividades === null) {
    arrayActividades = [];
  } else {
    arrayActividades.forEach((element, index) => {
      if (element.estado) {
        lista_actividadesUI.innerHTML += `<div class="alert alert-success" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="16"
          height="16"
          fill="currentColor" class="bi bi-universal-access"
          viewBox="0 0 16 16">
          <path
              d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z" />
      </svg>
      <b>${element.actividad}</b> - ${element.estado}
      <span class="float-end">

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>

            <svg onClick="eliminar(${index})" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
      </span>
  </div>`;
      } else {
        lista_actividadesUI.innerHTML += `<div class="alert alert-danger" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="16"
      height="16"
      fill="currentColor" class="bi bi-universal-access"
      viewBox="0 0 16 16">
      <path
          d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z" />
  </svg>
  <b>${element.actividad}</b> - ${element.estado}
  <span class="float-end">

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>

        <svg onClick="eliminar(${index})" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
  </span>
</div>`;
      }
    });
  }
};
//EventListener

boton.addEventListener(`click`, (e) => {
  e.preventDefault();
  console.log(`click`);
  let actividadUI = document.querySelector(`#actividad`).value;

  CrearItem(actividadUI);
  GuardarDB();

  formularioUI.reset();
});

document.addEventListener(`DOMContentLoaded`, PintarDB);
