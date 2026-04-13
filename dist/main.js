console.log("main cargó bien");
import { series } from "./data.js";
const tableBody = document.getElementById("series-body");
const averageElement = document.getElementById("average");
const card = document.getElementById("detail-card");
const title = document.getElementById("detail-title");
const description = document.getElementById("detail-description");
const image = document.getElementById("detail-image");
const link = document.getElementById("detail-link");
renderSeries(series);
showAverage(series);
function renderSeries(seriesList) {
    seriesList.forEach((serie) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td class="clickable">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        const nameCell = row.querySelector(".clickable");
        nameCell.addEventListener("click", () => {
            showDetail(serie);
        });
        tableBody.appendChild(row);
    });
}
function showDetail(serie) {
    title.textContent = serie.name;
    description.textContent = serie.description;
    image.src = serie.poster;
    link.href = serie.webpage;
    card.classList.remove("d-none");
}
function getAverage(seriesList) {
    let total = 0;
    seriesList.forEach(s => total += s.seasons);
    return total / seriesList.length;
}
function showAverage(seriesList) {
    averageElement.textContent = getAverage(seriesList).toString();
}
