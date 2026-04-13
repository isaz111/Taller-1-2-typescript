import { series } from "./data.js";
import { Serie } from "./serie.js";

const tableBody = document.getElementById("series-body")!;
const averageElement = document.getElementById("average")!;

const card = document.getElementById("detail-card")!;
const title = document.getElementById("detail-title")!;
const description = document.getElementById("detail-description")!;
const image = document.getElementById("detail-image") as HTMLImageElement;
const link = document.getElementById("detail-link") as HTMLAnchorElement;

renderSeries(series);
showAverage(series);

function renderSeries(seriesList: Serie[]): void {
  seriesList.forEach((serie) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${serie.id}</td>
      <td class="clickable">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    const nameCell = row.querySelector(".clickable") as HTMLElement;

    nameCell.addEventListener("click", () => {
      showDetail(serie);
    });

    tableBody.appendChild(row);
  });
}

function showDetail(serie: Serie): void {
  title.textContent = serie.name;
  description.textContent = serie.description;
  image.src = serie.poster;
  link.href = serie.webpage;

  card.classList.remove("d-none");
}

function getAverage(seriesList: Serie[]): number {
  let total = 0;
  seriesList.forEach(s => total += s.seasons);
  return total / seriesList.length;
}

function showAverage(seriesList: Serie[]): void {
  averageElement.textContent = getAverage(seriesList).toString();
}