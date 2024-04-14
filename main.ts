import { Serie } from './serie.js'; 
import { data as series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const averageElm: HTMLElement = document.getElementById("average")!;


function renderSeriesInTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    
    seriesTbody.appendChild(trElement);
  });
}



function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((s) => totalSeasons += s.seasons);
  const averageSeasons: number = series.length > 0 ? totalSeasons / series.length : 0;
  return averageSeasons;
}

renderSeriesInTable(series);
averageElm.innerHTML = `Average seasons: ${getAverageSeasons(series)}`;
