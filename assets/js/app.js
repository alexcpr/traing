const stationCodes = {
  "Munster Badischhof": "87386540",
  "Krimmeri Meinau": "87338525",
  Diemeringen: "87215665",
  Berthelming: "87215335",
  Saales: "87214783",
  Mullerhof: "87214643",
  "Heiligenberg - Mollkirch": "87214627",
  Mutzig: "87214585",
  Bischoffsheim: "87214296",
  Gertwiller: "87214254",
  Eichhoffen: "87214239",
  Matzenheim: "87214130",
  Kogenheim: "87214114",
  Ingwiller: "87213785",
  "Obermodern-Zutzendorf": "87213165",
  Kilstett: "87212324",
  Bischheim: "87212308",
  Limersheim: "87212274",
  Geispolsheim: "87212258",
  "Strasbourg Roethig": "87212191",
  Schwindratzheim: "87212159",
  Strasbourg: "87212027",
  Belfort: "87184002",
  Bantzenheim: "87182840",
  Ranspach: "87182402",
  "Gunsbach - Griesbach": "87182386",
  Illfurth: "87182204",
  "Mulhouse Dornach": "87534321",
  "Saint-Gilles Lycée Haut-Rhin": "87181552",
  Flaxlanden: "87181040",
  "Hoenheim Tram": "87338517",
  Sarrebourg: "87215012",
  Dachstein: "87214551",
  Rosheim: "87214320",
  Scherwiller: "87214205",
  Sélestat: "87214056",
  Marienthal: "87213603",
  Riedseltz: "87213462",
  Mertzwiller: "87213207",
  Munchhausen: "87212449",
  Roeschwoog: "87212407",
  Clerval: "87184622",
  "L'Isle-sur-le-Doubs": "87184572",
  "Montreux-Vieux": "87184275",
  "Muhlbach-sur-Munster": "87182733",
  Wesserling: "87182618",
  "Saint-Amarin": "87182600",
  "Willer-sur-Thur": "87182584",
  "Wihr-au-Val - Soultzbach": "87182378",
  "Saint-Louis": "87182139",
  Colmar: "87182014",
  "Vieux-Thann Zone Industrielle": "87181289",
  Walheim: "87181065",
  "Saint-Louis La Chaussée": "87181016",
  "Thann Centre": "87472605",
  "Colmar Mésanges": "87402297",
  "Ingersheim Cité Scolaire": "87303875",
  Rothau: "87214726",
  Obernai: "87214288",
  "Dambach-la-Ville": "87214213",
  Benfeld: "87214122",
  Kurtzenhouse: "87213660",
  "Soultz-sous-Forêts": "87213421",
  Hoelschloch: "87213413",
  "Niederbronn-les-Bains": "87213256",
  Haguenau: "87213058",
  Mothern: "87212456",
  Steinbourg: "87212209",
  Brumath: "87212134",
  Héricourt: "87184507",
  "Petit-Croix": "87184267",
  Raedersheim: "87182717",
  Lutterbach: "87182667",
  Breitenbach: "87534347",
  Oderen: "87182634",
  Fellering: "87182626",
  Thann: "87182568",
  Turckheim: "87182352",
  Logelbach: "87182345",
  Rouffach: "87182337",
  Zillisheim: "87182196",
  Bartenheim: "87182113",
  Habsheim: "87182089",
  "Colmar Saint-Joseph": "87181222",
  "Mulhouse Musées": "87534339",
  "Mulhouse Zu Rhein": "87472639",
  Oermingen: "87215632",
  Lutzelbourg: "87215160",
  Réding: "87215079",
  Fouday: "87214734",
  "Schirmeck - La Broque": "87214692",
  "Russ Hersbach": "87214684",
  Duppigheim: "87214536",
  Goxwiller: "87214270",
  "Wingen-sur-Moder": "87213744",
  Hoerdt: "87213686",
  Weyersheim: "87213678",
  Bischwiller: "87213611",
  Hoffen: "87213447",
  Reichshoffen: "87213249",
  "Schweighouse-sur-Moder": "87213108",
  Seltz: "87212431",
  Roppenheim: "87212415",
  Rountzenheim: "87212373",
  Sessenheim: "87212365",
  Drusenheim: "87212357",
  "La Wantzenau": "87212316",
  Graffenstaden: "87212241",
  Hochfelden: "87212167",
  Mommenheim: "87212142",
  Vendenheim: "87212118",
  Mundolsheim: "87212100",
  Montbéliard: "87184523",
  Metzeral: "87182816",
  Kruth: "87182642",
  "Cernay (Haut-Rhin)": "87182410",
  Munster: "87182394",
  Dannemarie: "87182253",
  Sierentz: "87182105",
  Mulhouse: "87182063",
  "Mulhouse Dornach": "87182055",
  "Tieffenbach - Struth": "87215699",
  "Bourg-Bruche": "87214775",
  "Saint-Blaise-la-Roche Poutay": "87214742",
  Wisches: "87214676",
  Lutzelhouse: "87214650",
  Urmatt: "87214635",
  Gresswiller: "87214593",
  Molsheim: "87214577",
  Duttlenheim: "87214544",
  "Entzheim Aéroport": "87214528",
  Lingolsheim: "87214502",
  Dorlisheim: "87214338",
  Barr: "87214247",
  Epfig: "87214221",
  Erstein: "87214148",
  Ebersheim: "87214106",
  Wissembourg: "87213470",
  Walbourg: "87213405",
  Gundershoffen: "87213223",
  Lauterbourg: "87212464",
  Herrlisheim: "87212340",
  Gambsheim: "87212332",
  "Fegersheim - Lipsheim": "87212266",
  Saverne: "87212225",
  Dettwiller: "87212183",
  Wilwisheim: "87212175",
  Stephansfeld: "87212126",
  "Colombier-Fontaine": "87184556",
  Voujeaucourt: "87184531",
  "Trois Chênes": "87184242",
  "Bas Évette": "87184200",
  "Thann Saint-Jacques": "87182881",
  Merxheim: "87182725",
  Bollwiller: "87182709",
  Staffelfelden: "87182691",
  Moosch: "87182592",
  "Bitschwiller-lès-Thann": "87182576",
  "Vieux-Thann": "87182550",
  "Luttenbach-près-Munster": "87182543",
  Walbach: "87182360",
  "Herrlisheim-près-Colmar": "87182329",
  Altkirch: "87182238",
  Rixheim: "87182071",
  Graffenwald: "87181131",
  Hasenrain: "87181024",
};

const apiKey = "46bb7fe8-44d8-482d-9cb5-eadba28a5209";
let apiUrl = "";

const scheduleContainer = document.querySelector(".schedule-container");
const moreDeparturesButton = document.getElementById("more-departures");
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const chooseStationBtn = document.getElementById("chooseStationBtn");
const closeModalBtn = document.getElementById("closeModal");
const htmlElement = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const searchJourneyBtn = document.getElementById("searchJourneyBtn");
const favoriteJourneyBtn = document.getElementById("favoriteJourneyBtn");
const backToTopBtn = document.getElementById("back-to-top-btn");
const invertStationsBtn = document.querySelector(".invertStations");
let toastTimeout;

function initialize() {
  renderFavoriteStationButtons();
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-theme", savedTheme);

  const journeyDepartureStationSelect = document.getElementById(
    "journeyDepartureStation"
  );
  const journeyArrivalStationSelect = document.getElementById(
    "journeyArrivalStation"
  );

  for (const stationName in stationCodes) {
    if (stationCodes.hasOwnProperty(stationName)) {
      const option = document.createElement("option");
      option.value = stationCodes[stationName];
      option.text = stationName;
      journeyDepartureStationSelect.appendChild(option);
      journeyArrivalStationSelect.appendChild(option.cloneNode(true));
    }
  }
  initializeSelect2(
    "#journeyDepartureStation",
    "Choississez une gare de départ"
  );
  initializeSelect2("#journeyArrivalStation", "Choississez une gare d'arrivée");

  $(document).on("select2:open", () => {
    document.querySelector(".select2-search__field").focus();
  });

  const currentDate = new Date();
  const timezoneOffset = currentDate.getTimezoneOffset();
  currentDate.setMinutes(currentDate.getMinutes() - timezoneOffset);
  const formattedDate = currentDate.toISOString().slice(0, 16);
  document.getElementById("journeyDate").value = formattedDate;
  document.getElementById("journeyDate").min = formattedDate;
}

function handleFavoriteJourney() {
  const selectedJourneyDepartureStation = $("#journeyDepartureStation").find(
    "option:selected"
  );
  const journeyArrivalStationSelect = $("#journeyArrivalStation").find(
    "option:selected"
  );

  const departureStationVal = selectedJourneyDepartureStation.val();
  const departureStationText = selectedJourneyDepartureStation.text();
  const arrivalStationVal = journeyArrivalStationSelect.val();
  const arrivalStationText = journeyArrivalStationSelect.text();

  if (!departureStationVal || !arrivalStationVal) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une gare de départ et une gare d'arrivée",
      "danger"
    );
    return;
  }

  if (
    !stationCodes.hasOwnProperty(departureStationText) ||
    !stationCodes.hasOwnProperty(arrivalStationText)
  ) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une gare valide",
      "danger"
    );
    return;
  }

  if (departureStationText === arrivalStationText) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner deux gares différentes",
      "danger"
    );
    return;
  }

  toggleFavorite(departureStationText, arrivalStationText);
  updateStationButtons();
}

function handleSearchJourney() {
  const selectedJourneyDepartureStation = $("#journeyDepartureStation").find(
    "option:selected"
  );
  const journeyArrivalStationSelect = $("#journeyArrivalStation").find(
    "option:selected"
  );

  const departureStationVal = selectedJourneyDepartureStation.val();
  const departureStationText = selectedJourneyDepartureStation.text();
  const arrivalStationVal = journeyArrivalStationSelect.val();
  const arrivalStationText = journeyArrivalStationSelect.text();

  if (!departureStationText || !arrivalStationText) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une gare de départ et une gare d'arrivée",
      "danger"
    );
    return;
  }

  if (
    !stationCodes.hasOwnProperty(departureStationText) ||
    !stationCodes.hasOwnProperty(arrivalStationText)
  ) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une gare valide",
      "danger"
    );
    return;
  }

  if (departureStationText === arrivalStationText) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner deux gares différentes",
      "danger"
    );
    return;
  }

  const journeyDate = document.getElementById("journeyDate").value;

  const currentDateTime = new Date();
  currentDateTime.setHours(0, 0, 0, 0);
  const journeyDateTime = new Date(journeyDate);
  journeyDateTime.setHours(0, 0, 0, 0);

  if (journeyDateTime < currentDateTime) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une date ultérieure",
      "danger"
    );
    return;
  }

  const formattedJourneyDate = journeyDate.replace(/[-:]/g, "");

  scheduleContainer.innerHTML = "";
  apiUrl = `https://api.sncf.com/v1/coverage/sncf/journeys?from=stop_area%3ASNCF%3A${departureStationVal}&to=stop_area%3ASNCF%3A${arrivalStationVal}&count=10`;
  fetchJourneys(
    `${apiUrl}&datetime=${formattedJourneyDate}`,
    departureStationText,
    arrivalStationText
  );
}

function handleMoreDepartures() {
  let lastTrainDepartureTime = document.querySelector(
    '.more-departures input[type="hidden"]'
  ).value;

  lastTrainDepartureTime = lastTrainDepartureTime.slice(0, -1) + "1";

  let apiUrlWithDatetime;

  if (apiUrl.includes("journeys")) {
    const departureStationName = document.querySelector(
      ".schedule-container .schedule-item:last-child .departure-station"
    ).textContent;

    const allDepartureStations = document.querySelectorAll(
      ".schedule-container .schedule-item:last-child .departure-station"
    );
    const arrivalStationName = allDepartureStations[1].textContent;
    apiUrlWithDatetime = `${apiUrl}&datetime=${lastTrainDepartureTime}`;
    fetchJourneys(apiUrlWithDatetime, departureStationName, arrivalStationName);
  } else {
    const stationName = document.querySelector(
      ".schedule-container .schedule-item:last-child .departure-station"
    ).textContent;
    apiUrlWithDatetime = `${apiUrl}?from_datetime=${lastTrainDepartureTime}`;
    fetchTrainDepartures(apiUrlWithDatetime, stationName);
  }
}

function initializeSelect2(elementId, placeholderText) {
  $(elementId).select2({
    allowClear: true,
    placeholder: placeholderText,
    sorter: (data) => data.sort((a, b) => a.text.localeCompare(b.text)),
  });
  $(elementId).val(null).trigger("change");
}

function toggleTheme() {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  themeToggle.textContent = newTheme === "light" ? "🌙" : "☀️";
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

function showToast(message, className) {
  const toastElement = document.getElementById("toast");
  toastElement.innerHTML = message;
  toastElement.className = className + " show";

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toastElement.className = "";
  }, 3000);
}

function formatCountdown(countdown) {
  const days = Math.floor(countdown / 86400000);
  const hours = Math.floor((countdown % 86400000) / 3600000);
  const minutes = Math.floor((countdown % 3600000) / 60000);
  const seconds = Math.floor((countdown % 60000) / 1000);

  let result = "";

  if (days > 0) {
    result += `${days} jour${days > 1 ? "s" : ""} et `;
  }

  if (hours > 0) {
    result += `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds} heures`;
  } else if (minutes > 0) {
    result += `${minutes}:${seconds < 10 ? "0" : ""}${seconds} minutes`;
  } else {
    result += `${seconds} secondes`;
  }

  return result;
}

function formatDuration(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let result = "";

  if (days > 0) {
    result += `${days} jour${days > 1 ? "s" : ""} et `;
  }

  if (hours > 0) {
    result += `${hours}h:${minutes < 10 ? "0" : ""}${minutes}min`;
  } else if (minutes > 0) {
    result += `${minutes}min`;
  } else {
    result += `${remainingSeconds}secondes`;
  }

  return result;
}

function calculateDelayInMinutes(realTime, baseTime) {
  const realTimeParts = realTime.split(":");
  const baseTimeParts = baseTime.split(":");

  const realHours = parseInt(realTimeParts[0], 10);
  const realMinutes = parseInt(realTimeParts[1], 10);

  const baseHours = parseInt(baseTimeParts[0], 10);
  const baseMinutes = parseInt(baseTimeParts[1], 10);

  const delayMinutes =
    (realHours - baseHours) * 60 + (realMinutes - baseMinutes);
  return delayMinutes;
}

function parseAndFormatDateTime(dateTimeString) {
  const year = parseInt(dateTimeString.slice(0, 4), 10);
  const month = parseInt(dateTimeString.slice(4, 6), 10) - 1;
  const day = parseInt(dateTimeString.slice(6, 8), 10);
  const hour = parseInt(dateTimeString.slice(9, 11), 10);
  const minute = parseInt(dateTimeString.slice(11, 13), 10);

  const date = new Date(year, month, day, hour, minute);
  return `${padZero(date.getHours())}:${padZero(date.getMinutes())}`;
}

function convertToSeconds(timeHHMMSS) {
  const hours = parseInt(timeHHMMSS.slice(0, 2));
  const minutes = parseInt(timeHHMMSS.slice(2, 4));
  const seconds = parseInt(timeHHMMSS.slice(4, 6));

  return hours * 3600 + minutes * 60 + seconds;
}

function parseAndFormatDateTimeJourney(
  dateTimeString,
  disruptions,
  departureTime = false,
  delayToAdd = 0
) {
  let correctedDateTime = dateTimeString;
  let hour, minute;
  let delay = 0;
  let delayCause = null;

  if (departureTime) {
    for (const disruption of disruptions) {
      const impactedObjects = disruption.impacted_objects;
      if (impactedObjects && impactedObjects.length > 0) {
        for (const impactedObject of impactedObjects) {
          const impactedStops = impactedObject.impacted_stops;
          if (impactedStops && impactedStops.length > 0) {
            for (const stop of impactedStops) {
              if (stop.base_departure_time === dateTimeString.slice(9)) {
                correctedDateTime = stop.amended_departure_time;

                const originalTimeInSeconds = convertToSeconds(
                  dateTimeString.slice(9)
                );
                const amendedTimeInSeconds =
                  convertToSeconds(correctedDateTime);

                const delayInSeconds =
                  amendedTimeInSeconds - originalTimeInSeconds;
                delay = delayInSeconds / 60;

                delayCause = stop.cause;

                break;
              }
            }
          }
        }
      }
    }
  }

  if (correctedDateTime.length === 15) {
    hour = parseInt(correctedDateTime.slice(9, 11), 10);
    minute = parseInt(correctedDateTime.slice(11, 13), 10);
  } else if (correctedDateTime.length === 6) {
    hour = parseInt(correctedDateTime.slice(0, 2), 10);
    minute = parseInt(correctedDateTime.slice(2, 4), 10);
  }

  hour += Math.floor(delayToAdd / 60);
  minute += delayToAdd % 60;

  if (minute >= 60) {
    minute -= 60;
    hour += 1;
  }

  const formattedTime = `${padZero(hour)}:${padZero(minute)}`;

  let hourWithoutDelay = hour;
  let minuteWithoutDelay = minute;

  hourWithoutDelay -= Math.floor(delay / 60);
  minuteWithoutDelay -= delay % 60;

  hourWithoutDelay -= Math.floor(delayToAdd / 60);
  minuteWithoutDelay -= delayToAdd % 60;

  if (minuteWithoutDelay < 0) {
    minuteWithoutDelay += 60;
    hourWithoutDelay -= 1;
  }

  const formattedTimeWithoutDelay = `${padZero(hourWithoutDelay)}:${padZero(
    minuteWithoutDelay
  )}`;

  return { formattedTime, formattedTimeWithoutDelay, delay, delayCause };
}

function padZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  return minutes;
}

function fetchTrainDepartures(apiUrl, stationName) {
  fetch(apiUrl, { method: "GET", headers: { Authorization: apiKey } })
    .then(handleResponse)
    .then((data) => {
      displayDepartures(data.departures, stationName);
      moreDeparturesButton.style.display =
        data.departures.length > 0 ? "block" : "none";
    })
    .catch(handleError);
}

function fetchJourneys(apiUrl, fromName, toName) {
  fetch(apiUrl, { method: "GET", headers: { Authorization: apiKey } })
    .then(handleResponse)
    .then((data) => {
      const disruptions = data.disruptions;
      const journeys = data.journeys;
      displayJourneys(journeys, disruptions, fromName, toName);
      moreDeparturesButton.style.display =
        data.journeys.length > 0 ? "block" : "none";
    })
    .catch(handleError);
}

function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

function handleError(error) {
  showToast(
    "<strong>Erreur:</strong> Une erreur inattendue s'est produite.",
    "danger"
  );
  console.error("Error:", error);
}

function addDelayToDateTime(dateTime, delayInMinutes) {
  const year = parseInt(dateTime.slice(0, 4), 10);
  const month = parseInt(dateTime.slice(4, 6), 10) - 1;
  const day = parseInt(dateTime.slice(6, 8), 10);
  const hours = parseInt(dateTime.slice(9, 11), 10);
  const minutes = parseInt(dateTime.slice(11, 13), 10);
  const seconds = parseInt(dateTime.slice(13, 15), 10);

  const originalDateTime = new Date(year, month, day, hours, minutes, seconds);
  const delayedDateTime = new Date(
    originalDateTime.getTime() + delayInMinutes * 60000
  );

  const formatResult = (date) => {
    const pad = (num) => num.toString().padStart(2, "0");
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(
      date.getDate()
    )}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(
      date.getSeconds()
    )}`;
  };

  return formatResult(delayedDateTime);
}

function updateTrainCode(departure, trainCodeElement) {
  const baseDepartureTime = parseAndFormatDateTime(
    departure.stop_date_time.base_departure_date_time
  );
  const realDepartureTime = parseAndFormatDateTime(
    departure.stop_date_time.departure_date_time
  );

  if (
    trainCodeElement.textContent === "À l'heure" ||
    trainCodeElement.textContent.includes("Retardé")
  ) {
    trainCodeElement.textContent = `${departure.display_informations.network} ${departure.display_informations.headsign}`;
  } else {
    const delayMinutes =
      realDepartureTime > baseDepartureTime
        ? calculateDelayInMinutes(realDepartureTime, baseDepartureTime)
        : 0;
    trainCodeElement.textContent =
      delayMinutes > 0 ? `Retardé de ${delayMinutes} minutes` : "À l'heure";
  }
}

function updateJourneyTrainCode(trainCodeElement, trainName, trainStatus) {
  if (
    trainCodeElement.textContent === "À l'heure" ||
    trainCodeElement.textContent.includes("Retardé")
  ) {
    trainCodeElement.textContent = trainName;
  } else {
    trainCodeElement.innerHTML = trainStatus;
  }
}

function displayDepartures(departures, stationName) {
  departures.forEach((departure) => {
    const displayInfo = departure.display_informations;
    const stopDateTime = departure.stop_date_time;
    const trainId = departure.links[1].id;
    const trainHeadSign = departure.display_informations.headsign;
    const trainName =
      departure.display_informations.network +
      " N°" +
      departure.display_informations.headsign;
    let isDelayed = false;
    const baseDepartureTime = parseAndFormatDateTime(
      stopDateTime.base_departure_date_time
    );
    const realDepartureTime = parseAndFormatDateTime(
      stopDateTime.departure_date_time
    );

    const scheduleItem = document.createElement("div");
    scheduleItem.classList.add("schedule-item");

    const scheduleHeader = document.createElement("div");
    scheduleHeader.classList.add("schedule-header");

    const departureInfo = document.createElement("div");
    departureInfo.classList.add("departure-info");

    const departureTimeBase = document.createElement("div");
    departureTimeBase.classList.add("departure-time");

    const departureDirection = document.createElement("div");
    departureDirection.classList.add("departure-direction");

    const delayedInfo = document.createElement("div");
    delayedInfo.classList.add("delayed-info");

    const realDepartureTimeEl = document.createElement("span");
    realDepartureTimeEl.textContent = realDepartureTime;

    if (realDepartureTime > baseDepartureTime) {
      isDelayed = true;
      const delayedSpan = document.createElement("span");
      delayedSpan.classList.add("delayed");
      delayedSpan.textContent = baseDepartureTime;
      departureTimeBase.appendChild(delayedInfo);
      delayedInfo.appendChild(delayedSpan);
      delayedInfo.appendChild(realDepartureTimeEl);
    } else {
      departureTimeBase.appendChild(realDepartureTimeEl);
    }

    const departureStation = document.createElement("span");
    departureStation.classList.add("departure-station");
    departureStation.textContent = stationName;

    const arrivalStation = document.createElement("span");
    arrivalStation.classList.add("departure-station");
    arrivalStation.textContent = displayInfo.direction.split(" (")[0];

    departureDirection.appendChild(departureStation);

    departureInfo.appendChild(departureTimeBase);

    var svgArrow = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgArrow.setAttribute("class", "departure-arrow");
    svgArrow.setAttribute("viewBox", "0 0 24 24");
    svgArrow.setAttribute("width", "24px");
    svgArrow.setAttribute("height", "24px");
    svgArrow.setAttribute("stroke", "none");
    svgArrow.setAttribute("fill", "currentColor");
    svgArrow.setAttribute("fill-rule", "evenodd");

    var pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute(
      "d",
      "M6.5,12.6 L10,16.2 L10,3 C10,1.9 10.9,1 12,1 C13.1,1 14,1.9 14,3 L14,16.2 L17.5,12.7 C17.9,12.3 18.4,12 19,12 C20.1,12 21,12.9 21,14 C21,14.5 20.8,15 20.5,15.3 L13.6,22.2 C13.1,22.8 12.6,23 12,23 C11.4,23 10.9,22.7 10.5,22.3 L3.7,15.5 C3.3,15.2 3,14.6 3,14 C3,12.9 3.9,12 5,12 C5.5,12 6,12.2 6.3,12.5 L6.5,12.6 C6.4,12.6 6.4,12.6 6.5,12.6"
    );

    svgArrow.appendChild(pathElement);

    departureDirection.appendChild(svgArrow);

    departureDirection.appendChild(arrivalStation);

    departureInfo.appendChild(departureDirection);

    scheduleHeader.appendChild(departureInfo);

    const trainCode = document.createElement("span");
    trainCode.classList.add("train-code");
    trainCode.textContent = trainName;

    scheduleHeader.appendChild(trainCode);

    setInterval(() => {
      updateTrainCode(departure, trainCode);
    }, 2000);

    const timeBlock = document.createElement("div");
    timeBlock.classList.add("time-block");

    const timeLeft = document.createElement("div");
    timeLeft.classList.add("time-left");
    timeLeft.textContent = "Part dans : ...";

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const departureTimeFormatted = stopDateTime.departure_date_time.replace(
        /(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/,
        "$1-$2-$3T$4:$5:$6"
      );
      const departureTimeMillis = Date.parse(departureTimeFormatted);
      const timeUntilDeparture = departureTimeMillis - now;

      if (timeUntilDeparture >= 0) {
        timeLeft.textContent =
          "Part dans : " + formatCountdown(timeUntilDeparture - 1000);

        if (timeUntilDeparture <= 0) {
          clearInterval(countdownInterval);
        }
      } else {
        timeLeft.textContent = "Le train est parti.";
        clearInterval(countdownInterval);
      }
    }, 1000);

    var svgSncf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgSncf.setAttribute("data-testid", "SNCF");
    svgSncf.setAttribute("class", "icons1");
    svgSncf.setAttribute("viewBox", "0 0 32 18");
    svgSncf.setAttribute("width", "32px");
    svgSncf.setAttribute("height", "18px");
    svgSncf.setAttribute("role", "img");
    svgSncf.setAttribute("id", "SNCF");

    var titleElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title"
    );
    titleElement.textContent = "SNCF";
    svgSncf.appendChild(titleElement);

    var descElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "desc"
    );
    descElement.textContent = "SNCF";
    svgSncf.appendChild(descElement);

    var pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("fill-rule", "evenodd");
    pathElement.setAttribute("clip-rule", "evenodd");
    pathElement.setAttribute(
      "d",
      "M0 1.54469C0 1.20918 0.220729 1.0523 0.560312 1.03803C1.08259 1.01698 1.78213 1 2.62905 1C8.53577 1 21.5404 1.80957 30.2372 7.38213C30.5102 7.556 30.5754 7.71832 30.4749 8.0382C30.4273 8.19102 27.7209 16.6609 27.7209 16.6609C27.6081 16.9774 27.4166 16.9991 27.1769 16.9991H0.474737C0.186771 16.9991 0 16.7635 0 16.5027V1.54469ZM16.7274 13.2793C17.2232 13.8593 18.0993 14.1195 19.1935 14.1195C19.7015 14.1195 20.1878 14.0706 20.581 13.9714L22.4351 8.17607H27.897L27.5581 9.25052H23.6699L23.1068 11.0075H26.3702L26.0381 12.0439H22.7754L21.9258 14.7198C21.5998 14.8944 20.2896 15.2747 18.8403 15.2747C16.5984 15.2747 15.0166 14.2057 14.7701 12.6151C14.7667 12.5913 14.7483 12.5839 14.7198 12.5839C14.6926 12.5839 14.675 12.5893 14.6662 12.6151L13.8552 15.1484H12.2157C11.6805 13.1489 10.6822 11.2554 9.67631 9.81626L8.6793 12.9085C8.67183 12.933 8.65824 12.9397 8.6304 12.9397C8.60255 12.9397 8.58421 12.9343 8.57539 12.9085C8.42529 12.4698 8.24327 12.1614 7.6687 11.7342L8.81174 8.17607H10.3405C11.5882 9.72458 12.6083 11.6215 13.1041 13.064L14.6621 8.17607H16.0856L15.5986 9.70352C15.5905 9.73001 15.6109 9.73544 15.6408 9.73544L15.6419 9.73544C15.661 9.73546 15.6916 9.73548 15.7216 9.70352C16.6935 8.65692 18.1931 8.06333 19.9175 8.06333C20.4744 8.06333 21.0422 8.0939 21.5108 8.16589L21.1264 9.29262C20.7474 9.2444 20.3256 9.2186 19.9161 9.2186C17.9717 9.2186 16.5182 10.1626 16.2982 11.6561C16.2058 12.2823 16.3539 12.844 16.7274 13.2793ZM7.52109 9.24576C7.15366 9.16087 6.83242 9.10314 6.38077 9.09227C5.48767 9.0719 4.5022 9.28583 4.31203 9.84954C4.16908 10.2724 4.68018 10.5147 5.48283 10.8952L5.48317 10.8953C5.58421 10.9432 5.68986 10.9933 5.7994 11.0462L5.86795 11.0793C7.10705 11.6771 8.59838 12.3966 7.98157 13.6929C7.45046 14.8081 6.12405 15.3236 4.07568 15.2768C2.98494 15.2516 1.70675 14.8604 1.08667 14.5725L1.58789 13.4885C2.43074 13.913 3.50042 14.1589 4.35821 14.1792C5.34844 14.2016 6.02964 13.9925 6.23747 13.5517C6.50506 12.9832 5.74439 12.5492 4.78201 12.0928C3.5697 11.5183 2.17062 10.8207 2.66369 9.58059C3.08002 8.53467 4.69847 8.04092 6.48876 8.08235C7.04567 8.09525 7.37915 8.1394 7.84573 8.22497L7.52109 9.24576Z"
    );
    pathElement.setAttribute("fill", "url(#paint0_linear_16_4013)");
    svgSncf.appendChild(pathElement);

    var linearGradientElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient"
    );
    linearGradientElement.setAttribute("id", "paint0_linear_16_4013");
    linearGradientElement.setAttribute("x1", "-0.0000747083");
    linearGradientElement.setAttribute("y1", "25.9233");
    linearGradientElement.setAttribute("x2", "30.4809");
    linearGradientElement.setAttribute("y2", "25.9233");
    linearGradientElement.setAttribute("gradientUnits", "userSpaceOnUse");

    var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("stop-color", "#7C2270");
    linearGradientElement.appendChild(stop1);

    var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "0.247191");
    stop2.setAttribute("stop-color", "#AA147E");
    linearGradientElement.appendChild(stop2);

    var stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0.814607");
    stop3.setAttribute("stop-color", "#E41D25");
    linearGradientElement.appendChild(stop3);

    var stop4 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop4.setAttribute("offset", "1");
    stop4.setAttribute("stop-color", "#E41D25");
    linearGradientElement.appendChild(stop4);

    var defsElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "defs"
    );
    defsElement.appendChild(linearGradientElement);
    svgSncf.appendChild(defsElement);

    timeBlock.appendChild(timeLeft);

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.value = trainId;

    timeBlock.appendChild(svgSncf);

    scheduleItem.appendChild(scheduleHeader);
    scheduleItem.appendChild(timeBlock);

    scheduleContainer.appendChild(scheduleItem);

    departureInfo.innerHTML += `<a title="Plus d'infos" href="#${trainHeadSign}" id="trainLink_${trainHeadSign}"><svg class="train-info" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"/></svg></a>`;

    let stopsHTML;
    let trainStopsModal;
    let trainStatus;
    document
      .getElementById(`trainLink_${trainHeadSign}`)
      .addEventListener("click", () => {
        if (!document.getElementById(trainHeadSign)) {
          fetchTrainStops(trainId)
            .then((trainStops) => {
              const departureIndex = trainStops.findIndex(
                (stop) => stop.name === stationName
              );
              const arrivalIndex = trainStops.findIndex(
                (stop) => stop.name === displayInfo.direction.split(" (")[0]
              );

              const filteredStops = trainStops.slice(
                departureIndex + 1,
                arrivalIndex
              );
              stopsHTML = filteredStops
                .map((stop) => {
                  return `
            <div class="step">
              <p class="step-title">
                <strong>${stop.name}</strong>
              </p>
            </div>
          `;
                })
                .join("");

              trainStopsModal = document.createElement("a");
              trainStopsModal.href = "#close";
              trainStatus = isDelayed
                ? `Retardé de ${delayMinutes} minutes`
                : "À l'heure ✅";
              trainStopsModal.innerHTML = `
          <div id="${trainHeadSign}" class="modal-window">
            <div>
              <a href="#close" title="Fermer" class="modal-close">&times;</a>
              <h1>${trainName}</h1>
              <p>Statut: ${trainStatus}</p>
              <div class="path-container">
                <div class="path">
                  <div class="step">
                    <p class="step-title">
                      <strong>${stationName}</strong>
                    </p>
                  </div>
                  ${stopsHTML}
                  <div class="step">
                    <p class="step-title">
                      <strong>${displayInfo.direction.split(" (")[0]}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

              scheduleItem.appendChild(trainStopsModal);
              window.location = `#${trainHeadSign}`;
            })
            .catch((error) => {
              showToast(
                "<strong>Erreur</strong>: Impossible de récupérer les arrêts du train.",
                "danger"
              );
            });
        }
      });
  });
  const lastTrainDeparture =
    departures[departures.length - 1].stop_date_time.departure_date_time;
  const hiddenInput = document.getElementById("lastTrainDepartureInput");
  if (hiddenInput) {
    hiddenInput.value = lastTrainDeparture;
  }
}

function displayJourneys(journeys, disruptions, from, to) {
  journeys.forEach((journey, index) => {
    const departureDateTime = journey.departure_date_time;
    const arrivalDateTime = journey.arrival_date_time;
    const isCancelled = journey.status == "NO_SERVICE";
    const trainHeadSign = journey.sections[1].display_informations.headsign;
    const trainNetwork = journey.sections[1].display_informations.network;
    const trainDuration = formatDuration(journey.duration);

    const scheduleItem = document.createElement("div");
    scheduleItem.classList.add("schedule-item");

    const scheduleHeader = document.createElement("div");
    scheduleHeader.classList.add("schedule-header");

    const departureInfo = document.createElement("div");
    departureInfo.classList.add("departure-info");
    departureInfo.classList.add("journey");

    const departureTimeBase = document.createElement("div");
    departureTimeBase.classList.add("departure-time");

    const arrivalTimeBase = document.createElement("div");
    arrivalTimeBase.classList.add("departure-time");
    arrivalTimeBase.style.order = "3";

    const departureDirection = document.createElement("div");
    departureDirection.classList.add("journey-direction");

    const departureDelayedInfo = document.createElement("div");
    departureDelayedInfo.classList.add("delayed-info");

    const arrivalDelayedInfo = document.createElement("div");
    arrivalDelayedInfo.classList.add("delayed-info");

    const realDepartureTimeEl = document.createElement("span");
    const realArrivalTimeEl = document.createElement("span");
    if (isCancelled) {
      realDepartureTimeEl.classList.add("delayed");
      realArrivalTimeEl.classList.add("delayed");
    }

    const departureTimeJourney = parseAndFormatDateTimeJourney(
      departureDateTime,
      disruptions,
      true
    );

    let isDelayed = departureTimeJourney["delay"] > 0 ? true : false;

    realDepartureTimeEl.textContent = departureTimeJourney["formattedTime"];

    if (isDelayed) {
      const delayedSpan = document.createElement("span");
      delayedSpan.classList.add("delayed");
      delayedSpan.textContent =
        departureTimeJourney["formattedTimeWithoutDelay"];
      departureTimeBase.appendChild(departureDelayedInfo);
      departureDelayedInfo.appendChild(delayedSpan);
      departureDelayedInfo.appendChild(realDepartureTimeEl);
    } else {
      departureTimeBase.appendChild(realDepartureTimeEl);
    }

    const arrivalTimeJourney = parseAndFormatDateTimeJourney(
      arrivalDateTime,
      disruptions,
      false,
      departureTimeJourney["delay"]
    );

    realArrivalTimeEl.textContent = arrivalTimeJourney["formattedTime"];

    if (isDelayed) {
      const delayedSpan = document.createElement("span");
      delayedSpan.classList.add("delayed");
      delayedSpan.textContent = arrivalTimeJourney["formattedTimeWithoutDelay"];
      arrivalTimeBase.appendChild(arrivalDelayedInfo);
      arrivalDelayedInfo.appendChild(delayedSpan);
      arrivalDelayedInfo.appendChild(realArrivalTimeEl);
    } else {
      arrivalTimeBase.appendChild(realArrivalTimeEl);
    }

    const departureStation = document.createElement("span");
    departureStation.classList.add("departure-station");
    departureStation.textContent = from;

    const arrivalStation = document.createElement("span");
    arrivalStation.classList.add("departure-station");
    arrivalStation.textContent = to;

    departureDirection.appendChild(departureStation);

    departureInfo.appendChild(departureTimeBase);
    departureInfo.appendChild(arrivalTimeBase);

    var svgArrow = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgArrow.setAttribute("class", "journey-arrow");
    svgArrow.setAttribute("viewBox", "0 0 24 24");
    svgArrow.setAttribute("width", "24px");
    svgArrow.setAttribute("height", "24px");
    svgArrow.setAttribute("stroke", "none");
    svgArrow.setAttribute("fill", "currentColor");
    svgArrow.setAttribute("fill-rule", "evenodd");

    var pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute(
      "d",
      "M6.5,12.6 L10,16.2 L10,3 C10,1.9 10.9,1 12,1 C13.1,1 14,1.9 14,3 L14,16.2 L17.5,12.7 C17.9,12.3 18.4,12 19,12 C20.1,12 21,12.9 21,14 C21,14.5 20.8,15 20.5,15.3 L13.6,22.2 C13.1,22.8 12.6,23 12,23 C11.4,23 10.9,22.7 10.5,22.3 L3.7,15.5 C3.3,15.2 3,14.6 3,14 C3,12.9 3.9,12 5,12 C5.5,12 6,12.2 6.3,12.5 L6.5,12.6 C6.4,12.6 6.4,12.6 6.5,12.6"
    );

    svgArrow.appendChild(pathElement);

    departureDirection.appendChild(svgArrow);

    departureDirection.appendChild(arrivalStation);

    departureInfo.appendChild(departureDirection);

    scheduleHeader.appendChild(departureInfo);

    const trainCode = document.createElement("span");
    trainCode.classList.add("train-code");
    if (isCancelled) {
      trainCode.textContent = "Annulé";
    } else {
      const trainStatus =
        departureTimeJourney && departureTimeJourney.delay > 0
          ? "Retardé de " +
            departureTimeJourney.delay +
            ' minutes<br><span class="delay-cause">(' +
            departureTimeJourney.delayCause +
            ")</span>"
          : "À l'heure";
      trainCode.innerHTML = trainStatus;

      setInterval(() => {
        updateJourneyTrainCode(
          trainCode,
          `${trainNetwork} N°${trainHeadSign}`,
          trainStatus
        );
      }, 2000);
    }
    scheduleHeader.appendChild(trainCode);

    const timeBlock = document.createElement("div");
    timeBlock.classList.add("time-block");

    const timeLeft = document.createElement("div");
    timeLeft.classList.add("time-left");
    if (isCancelled) {
      timeLeft.textContent = "Le train est annulé.";
    } else {
      timeLeft.textContent = trainDuration + ", Part dans : ...";

      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();

        const year = parseInt(departureDateTime.substring(0, 4));
        const month = parseInt(departureDateTime.substring(4, 6)) - 1;
        const day = parseInt(departureDateTime.substring(6, 8));
        const hours = parseInt(departureDateTime.substring(9, 11));
        const minutes = parseInt(departureDateTime.substring(11, 13));

        const correctDepartureDateTime = new Date(
          year,
          month,
          day,
          hours,
          minutes
        );

        const formattedHours = parseInt(
          departureTimeJourney["formattedTime"].substring(0, 2)
        );
        const formattedMinutes = parseInt(
          departureTimeJourney["formattedTime"].substring(3, 5)
        );

        correctDepartureDateTime.setHours(formattedHours);
        correctDepartureDateTime.setMinutes(formattedMinutes);

        const departureTimeMillis = Date.parse(correctDepartureDateTime);
        const timeUntilDeparture = departureTimeMillis - now;

        if (timeUntilDeparture >= 0) {
          timeLeft.textContent =
            trainDuration +
            ", Part dans : " +
            formatCountdown(timeUntilDeparture - 1000);

          if (timeUntilDeparture <= 0) {
            clearInterval(countdownInterval);
          }
        } else {
          timeLeft.textContent = "Le train est parti.";
          clearInterval(countdownInterval);
        }
      }, 1000);
    }

    var svgSncf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgSncf.setAttribute("data-testid", "SNCF");
    svgSncf.setAttribute("class", "icons1");
    svgSncf.setAttribute("viewBox", "0 0 32 18");
    svgSncf.setAttribute("width", "32px");
    svgSncf.setAttribute("height", "18px");
    svgSncf.setAttribute("role", "img");
    svgSncf.setAttribute("id", "SNCF");

    var titleElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title"
    );
    titleElement.textContent = "SNCF";
    svgSncf.appendChild(titleElement);

    var descElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "desc"
    );
    descElement.textContent = "SNCF";
    svgSncf.appendChild(descElement);

    var rectElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    rectElement.setAttribute("width", "100%");
    rectElement.setAttribute("height", "100%");
    rectElement.setAttribute("fill", "var(--background)");

    svgSncf.appendChild(rectElement);

    var pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("fill-rule", "evenodd");
    pathElement.setAttribute("clip-rule", "evenodd");
    pathElement.setAttribute(
      "d",
      "M0 1.54469C0 1.20918 0.220729 1.0523 0.560312 1.03803C1.08259 1.01698 1.78213 1 2.62905 1C8.53577 1 21.5404 1.80957 30.2372 7.38213C30.5102 7.556 30.5754 7.71832 30.4749 8.0382C30.4273 8.19102 27.7209 16.6609 27.7209 16.6609C27.6081 16.9774 27.4166 16.9991 27.1769 16.9991H0.474737C0.186771 16.9991 0 16.7635 0 16.5027V1.54469ZM16.7274 13.2793C17.2232 13.8593 18.0993 14.1195 19.1935 14.1195C19.7015 14.1195 20.1878 14.0706 20.581 13.9714L22.4351 8.17607H27.897L27.5581 9.25052H23.6699L23.1068 11.0075H26.3702L26.0381 12.0439H22.7754L21.9258 14.7198C21.5998 14.8944 20.2896 15.2747 18.8403 15.2747C16.5984 15.2747 15.0166 14.2057 14.7701 12.6151C14.7667 12.5913 14.7483 12.5839 14.7198 12.5839C14.6926 12.5839 14.675 12.5893 14.6662 12.6151L13.8552 15.1484H12.2157C11.6805 13.1489 10.6822 11.2554 9.67631 9.81626L8.6793 12.9085C8.67183 12.933 8.65824 12.9397 8.6304 12.9397C8.60255 12.9397 8.58421 12.9343 8.57539 12.9085C8.42529 12.4698 8.24327 12.1614 7.6687 11.7342L8.81174 8.17607H10.3405C11.5882 9.72458 12.6083 11.6215 13.1041 13.064L14.6621 8.17607H16.0856L15.5986 9.70352C15.5905 9.73001 15.6109 9.73544 15.6408 9.73544L15.6419 9.73544C15.661 9.73546 15.6916 9.73548 15.7216 9.70352C16.6935 8.65692 18.1931 8.06333 19.9175 8.06333C20.4744 8.06333 21.0422 8.0939 21.5108 8.16589L21.1264 9.29262C20.7474 9.2444 20.3256 9.2186 19.9161 9.2186C17.9717 9.2186 16.5182 10.1626 16.2982 11.6561C16.2058 12.2823 16.3539 12.844 16.7274 13.2793ZM7.52109 9.24576C7.15366 9.16087 6.83242 9.10314 6.38077 9.09227C5.48767 9.0719 4.5022 9.28583 4.31203 9.84954C4.16908 10.2724 4.68018 10.5147 5.48283 10.8952L5.48317 10.8953C5.58421 10.9432 5.68986 10.9933 5.7994 11.0462L5.86795 11.0793C7.10705 11.6771 8.59838 12.3966 7.98157 13.6929C7.45046 14.8081 6.12405 15.3236 4.07568 15.2768C2.98494 15.2516 1.70675 14.8604 1.08667 14.5725L1.58789 13.4885C2.43074 13.913 3.50042 14.1589 4.35821 14.1792C5.34844 14.2016 6.02964 13.9925 6.23747 13.5517C6.50506 12.9832 5.74439 12.5492 4.78201 12.0928C3.5697 11.5183 2.17062 10.8207 2.66369 9.58059C3.08002 8.53467 4.69847 8.04092 6.48876 8.08235C7.04567 8.09525 7.37915 8.1394 7.84573 8.22497L7.52109 9.24576Z"
    );
    pathElement.setAttribute("fill", "url(#paint0_linear_16_4013)");
    svgSncf.appendChild(pathElement);

    var linearGradientElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient"
    );
    linearGradientElement.setAttribute("id", "paint0_linear_16_4013");
    linearGradientElement.setAttribute("x1", "-0.0000747083");
    linearGradientElement.setAttribute("y1", "25.9233");
    linearGradientElement.setAttribute("x2", "30.4809");
    linearGradientElement.setAttribute("y2", "25.9233");
    linearGradientElement.setAttribute("gradientUnits", "userSpaceOnUse");

    var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("stop-color", "#7C2270");
    linearGradientElement.appendChild(stop1);

    var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "0.247191");
    stop2.setAttribute("stop-color", "#AA147E");
    linearGradientElement.appendChild(stop2);

    var stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0.814607");
    stop3.setAttribute("stop-color", "#E41D25");
    linearGradientElement.appendChild(stop3);

    var stop4 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop4.setAttribute("offset", "1");
    stop4.setAttribute("stop-color", "#E41D25");
    linearGradientElement.appendChild(stop4);

    var defsElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "defs"
    );
    defsElement.appendChild(linearGradientElement);
    svgSncf.appendChild(defsElement);

    timeBlock.appendChild(timeLeft);
    timeBlock.appendChild(svgSncf);
    scheduleItem.appendChild(scheduleHeader);
    departureInfo.innerHTML += `<a title="Plus d'infos" href="#${trainHeadSign}"><svg class="train-info" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"/></svg></a>`;

    scheduleItem.appendChild(timeBlock);

    scheduleContainer.appendChild(scheduleItem);

    let stopsHTML;

    if (journey.nb_transfers === 0) {
      if (journey.sections[1] && journey.sections[1]["stop_date_times"]) {
        stopsHTML = journey.sections[1]["stop_date_times"]
          .slice(1, -1)
          .map((stop) => {
            const departureDateTime = isDelayed
              ? addDelayToDateTime(
                  stop.departure_date_time,
                  departureTimeJourney.delay
                )
              : stop.departure_date_time;

            const delayIndicator = isDelayed
              ? `<span class="delayed">${parseAndFormatDateTime(
                  stop.departure_date_time
                )}</span>`
              : "";

            return `
          <div class="step step-journey">
            <p class="step-title">
              <strong>${stop.stop_point.name}</strong>
              <span class="step-time">${delayIndicator}${parseAndFormatDateTime(
              departureDateTime
            )}</span>
            </p>
          </div>`;
          })
          .join("");
      }
    } else {
      stopsHTML = journey.sections
        .flatMap((section) => {
          if (section.type === "waiting") {
            const waitingDuration = section.duration;
            return `
          <div class="step step-journey">
            <p class="step-title">
              <strong>Attente en gare</strong>
              <span class="step-time">${formatDuration(waitingDuration)}</span>
            </p>
          </div>`;
          } else if (section["stop_date_times"]) {
            return section["stop_date_times"].map((stop) => {
              if (
                stop.stop_point.name === from ||
                stop.stop_point.name === to
              ) {
                return "";
              }
              const departureDateTime = isDelayed
                ? addDelayToDateTime(
                    stop.departure_date_time,
                    departureTimeJourney.delay
                  )
                : stop.departure_date_time;

              const delayIndicator = isDelayed
                ? `<span class="delayed">${parseAndFormatDateTime(
                    stop.departure_date_time
                  )}</span>`
                : "";

              return `
              <div class="step step-journey">
                <p class="step-title">
                  <strong>${stop.stop_point.name}</strong>
                  <span class="step-time">${delayIndicator}${parseAndFormatDateTime(
                departureDateTime
              )}</span>
                </p>
              </div>`;
            });
          }
        })
        .join("");
    }

    let trainStatusModal;
    let trainName = `<h1>${trainNetwork} N°${trainHeadSign}</h1>`;
    if (isCancelled) {
      trainStatusModal = "Annulé ❌";
      trainName = `<h1 class="delayed">${trainNetwork} N°${trainHeadSign}</h1>`;
    } else if (isDelayed === false) {
      trainStatusModal = "À l'heure ✅";
    } else {
      trainStatusModal =
        "Retardé de " + departureTimeJourney["delay"] + " minutes";
    }
    const trainStopsModal = document.createElement("a");
    trainStopsModal.href = "#close";
    const modalDepartureTimeJourney = isDelayed
      ? `<span class="delayed">${departureTimeJourney["formattedTimeWithoutDelay"]}</span>${departureTimeJourney["formattedTime"]}`
      : departureTimeJourney["formattedTime"];
    const modalArrivalTimeJourney = isDelayed
      ? `<span class="delayed">${arrivalTimeJourney["formattedTimeWithoutDelay"]}</span>${arrivalTimeJourney["formattedTime"]}`
      : arrivalTimeJourney["formattedTime"];

    trainStopsModal.innerHTML = `
    <div id="${trainHeadSign}" class="modal-window">
      <div>
          <a href="#close" title="Fermer" class="modal-close">&times;</a>
          ${trainName}
          <p>Statut: ${trainStatusModal}</p>
          <p>Durée: ${trainDuration}</p>
          <div class="path-container">
            <div class="path">
              <div class="step step-journey">
                <p class="step-title">
                  <strong>${from}</strong>
                  <span class="step-time">${modalDepartureTimeJourney}</span>
                </p>
              </div>
              ${stopsHTML}
              <div class="step step-journey">
                <p class="step-title">
                 <strong>${to}</strong>
                 <span class="step-time">${modalArrivalTimeJourney}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>`;
    scheduleItem.appendChild(trainStopsModal);
  });
  const lastTrainDeparture = journeys[journeys.length - 1].departure_date_time;
  const hiddenInput = document.getElementById("lastTrainDepartureInput");
  if (hiddenInput) {
    hiddenInput.value = lastTrainDeparture;
  }
}

function fetchTrainStops(trainId) {
  return fetch(
    `https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/${trainId}`,
    {
      method: "GET",
      headers: { Authorization: apiKey },
    }
  )
    .then(handleResponse)
    .then((data) => {
      const stops = data.vehicle_journeys[0].stop_times.map((stop) => ({
        name: stop.stop_point.name.replace(/\s*-\s*/g, "-"),
      }));
      return stops;
    })
    .catch((error) => {
      console.error(error);
    });
}

function openModal() {
  modal.style.display = "flex";
  document.getElementById("modal-content").innerHTML = "";
  renderNonFavoriteStationButtons();
  modal.classList.add("fade-in");
}

function closeModal() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 300);
}

function renderStationButton(stationName, isFavorite) {
  const button = document.createElement("button");
  button.className = isFavorite ? "station-btn favorite" : "station-btn";
  button.setAttribute("data-station", stationName);
  button.innerHTML = isFavorite
    ? `<span class="star">&#9733;</span> <span class="station-name">${stationName}</span>`
    : `<span class="star">&#9734;</span> <span class="station-name">${stationName}</span>`;
  button.addEventListener("click", (event) => {
    const star = event.target.closest(".star");
    if (star) {
      if (stationName.includes("➡️")) {
        const stationNames = stationName.split("➡️");
        const stationName1 = stationNames[0].trim();
        const stationName2 = stationNames[1].trim();
        toggleFavorite(stationName1, stationName2);
        updateStationButtons();
      } else {
        toggleFavorite(stationName);
        updateStationButtons();
        closeModal();
      }
    } else {
      closeModal();
      if (stationName.includes("➡️")) {
        const stationNames = stationName.split("➡️");
        const departureStationText = stationNames[0].trim();
        const arrivalStationText = stationNames[1].trim();
        if (!departureStationText || !arrivalStationText) {
          showToast(
            "<strong>Erreur:</strong> Veuillez sélectionner une gare de départ et une gare d'arrivée",
            "danger"
          );
          return;
        }

        if (
          !stationCodes.hasOwnProperty(departureStationText) ||
          !stationCodes.hasOwnProperty(arrivalStationText)
        ) {
          showToast(
            "<strong>Erreur:</strong> Veuillez sélectionner une gare valide",
            "danger"
          );
          return;
        }

        if (departureStationText === arrivalStationText) {
          showToast(
            "<strong>Erreur:</strong> Veuillez sélectionner deux gares différentes",
            "danger"
          );
          return;
        }

        const journeyDate = document.getElementById("journeyDate").value;

        const currentDateTime = new Date();
        currentDateTime.setHours(0, 0, 0, 0);
        const journeyDateTime = new Date(journeyDate);
        journeyDateTime.setHours(0, 0, 0, 0);

        if (journeyDateTime < currentDateTime) {
          showToast(
            "<strong>Erreur:</strong> Veuillez sélectionner une date ultérieure",
            "danger"
          );
          return;
        }

        const formattedJourneyDate = journeyDate.replace(/[-:]/g, "");

        scheduleContainer.innerHTML = "";
        apiUrl = `https://api.sncf.com/v1/coverage/sncf/journeys?from=stop_area%3ASNCF%3A${stationCodes[departureStationText]}&to=stop_area%3ASNCF%3A${stationCodes[arrivalStationText]}&count=10`;
        fetchJourneys(
          `${apiUrl}&datetime=${formattedJourneyDate}`,
          departureStationText,
          arrivalStationText
        );
      } else {
        apiUrl = `https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:${stationCodes[stationName]}/departures`;
        scheduleContainer.innerHTML = "";
        fetchTrainDepartures(apiUrl, stationName);
      }
    }
  });
  !isFavorite
    ? document.getElementById("modal-content").appendChild(button)
    : document.getElementById("station-selector").appendChild(button);
}

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-/g, "");
}

function renderNonFavoriteStationButtons() {
  const searchBar = document.createElement("input");
  searchBar.setAttribute("type", "text");
  searchBar.setAttribute("id", "search-bar");
  searchBar.setAttribute("placeholder", "Chercher une gare...");

  document.getElementById("modal-content").appendChild(searchBar);

  searchBar.addEventListener("input", function () {
    const searchTerm = removeAccents(searchBar.value.toLowerCase());
    const stationButtons = document.querySelectorAll(
      ".modal-content .station-btn"
    );

    stationButtons.forEach(function (button) {
      const stationName = removeAccents(
        button.getAttribute("data-station").toLowerCase()
      );
      if (stationName.includes(searchTerm)) {
        button.style.display = "flex";
      } else {
        button.style.display = "none";
      }
    });
  });

  const stationNames = Object.keys(stationCodes);
  stationNames.sort();

  for (const stationName of stationNames) {
    if (!favorites.includes(stationName)) {
      renderStationButton(stationName, false);
    }
  }
  searchBar.focus();
}

function updateStationButtons() {
  const stationSelector = document.getElementById("station-selector");
  stationSelector.innerHTML = "";
  renderFavoriteStationButtons();
}

function toggleFavorite(stationName, stationName2 = null) {
  if (stationName && stationName2) {
    const existingIndex = favorites.findIndex(
      (fav) => fav[stationName] === stationName2
    );
    if (existingIndex !== -1) {
      showToast(
        "<strong>Succès :</strong> Le trajet <strong>" +
          stationName +
          " ➡️ " +
          stationName2 +
          "</strong> a bien été supprimé des favoris.",
        "success"
      );
      favorites.splice(existingIndex, 1);
    } else {
      let favoriteObject = {};
      favoriteObject[stationName] = stationName2;
      showToast(
        "<strong>Succès :</strong> Le trajet <strong>" +
          stationName +
          " ➡️ " +
          stationName2 +
          "</strong> a bien été ajouté en favoris.",
        "success"
      );
      favorites.push(favoriteObject);
    }
  } else {
    const index = favorites.findIndex((fav) => fav === stationName);
    if (index !== -1) {
      showToast(
        "<strong>Succès :</strong> La gare <strong>" +
          stationName +
          "</strong> a bien été supprimée des favoris.",
        "success"
      );
      favorites.splice(index, 1);
    } else {
      showToast(
        "<strong>Succès :</strong> La gare <strong>" +
          stationName +
          "</strong> a bien été ajoutée en favoris.",
        "success"
      );
      favorites.push(stationName);
    }
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function renderFavoriteStationButtons() {
  favorites.forEach((favorite) => {
    if (typeof favorite === "object") {
      const stationName = Object.keys(favorite)[0];
      const stationName2 = favorite[stationName];
      const buttonLabel = `${stationName} ➡️ ${stationName2}`;
      renderStationButton(buttonLabel, true);
    } else {
      renderStationButton(favorite, true);
    }
  });
}

function closeOnOutsideClick(event) {
  const modal = document.querySelector(".modal");
  if (event.target === modal) {
    closeModal();
  }
}
function handleScroll() {
  const scrollThreshold = 350;
  const scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollPosition > scrollThreshold) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function handleInvertStations() {
  const departureValue = $("#journeyDepartureStation").val();
  const arrivalValue = $("#journeyArrivalStation").val();

  $("#journeyDepartureStation").val(arrivalValue).trigger("change");
  $("#journeyArrivalStation").val(departureValue).trigger("change");
}

window.onscroll = handleScroll;
window.addEventListener("click", closeOnOutsideClick);
backToTopBtn.addEventListener("click", scrollToTop);
chooseStationBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
moreDeparturesButton.addEventListener("click", handleMoreDepartures);
themeToggle.addEventListener("click", toggleTheme);
searchJourneyBtn.addEventListener("click", handleSearchJourney);
favoriteJourneyBtn.addEventListener("click", handleFavoriteJourney);
invertStationsBtn.addEventListener("click", handleInvertStations);
document.addEventListener("DOMContentLoaded", initialize);
