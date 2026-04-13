import { series } from "./data";
import { Serie } from "./serie";

const tableBody = document.getElementById("series-table")!;
const average = document.getElementById("average")!;
const detail = document.getElementById("detail")!;

/* =========================
   1. RENDER TABLA
========================= */
function renderSeries(seriesList: Serie[]): void {
  seriesList.forEach((serie) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${serie.id}</td>
      <td class="text-primary" style="cursor:pointer;">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    // CLICK (Taller 2)
    row.addEventListener("click", () => showDetail(serie));

    tableBody.appendChild(row);
  });
}

/* =========================
   2. PROMEDIO (Taller 1)
========================= */
function calculateAverage(seriesList: Serie[]): void {
  let total = 0;

  seriesList.forEach((s) => (total += s.seasons));

  const avg = total / seriesList.length;

  average.innerHTML = `Seasons average: ${avg.toFixed(2)}`;
}

/* =========================
   3. CARD DETALLE (Taller 2)
========================= */
function showDetail(serie: Serie): void {
  detail.innerHTML = `
    <div class="card">
      <img src="${serie.image}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank" class="btn btn-primary">
          Go to website
        </a>
      </div>
    </div>
  `;
}

/* =========================
   INIT
========================= */
renderSeries(series);
calculateAverage(series);