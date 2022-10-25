import { Serie } from './Serie.js'
import { dataSeries } from './data.js'

const seriesBody: HTMLElement = document.getElementById('Series')!; // Nodo tbody que tiene el id="Series"
const seriesAvarage: HTMLElement = document.getElementById('avarage')!;
const seriesImg: HTMLElement = document.getElementById('imgURL')!;

 renderCoursesInTable(dataSeries);

 seriesAvarage.innerHTML = `El promedio de temporadas es: ${avarageSeasons(dataSeries)}`;

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td> <a href="" id= "${s.imagenURL}">${s.nombre}</td>
                           <td>${s.canal}</td>
                           <td>${s.temporadas}</td>`;
    seriesBody.appendChild(trElement);
    let clicking: HTMLElement = document.getElementById(`${s.imagenURL}`)!;
    clicking.onclick = () => clickImage(s.nombre, s.imagenURL, s.descripcion, s.pagina);
  });
}

function avarageSeasons(dataSeries: Serie[]) {
    let avarage: number = 0;
    dataSeries.forEach((s) => avarage = avarage + s.temporadas);
    return avarage/dataSeries.length;
}

function clickImage(nombre: string, url: string, descripcion: string, pagina: string){
  console.log(url);
    seriesImg.innerHTML = `<img class="card-img-top" src="${url}" alt="">
        <div class="card-body">
        <h3>${nombre}</h3>
        <p class="card-text">${descripcion}</p>
        <a href="${pagina}">${pagina}</a>
        </div>`;
}