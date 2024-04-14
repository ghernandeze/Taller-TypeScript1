import { data as series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageElm = document.getElementById("average");
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td>").concat(s.name, "</td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (s) { return totalSeasons += s.seasons; });
    var averageSeasons = series.length > 0 ? totalSeasons / series.length : 0;
    return averageSeasons;
}
renderSeriesInTable(series);
averageElm.innerHTML = "Average seasons: ".concat(getAverageSeasons(series));
