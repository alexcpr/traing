const apiKey = "46bb7fe8-44d8-482d-9cb5-eadba28a5209";
const scheduleContainer = document.querySelector(".schedule-container");
let apiUrl = "";

function formatCountdown(countdown) {
  const hours = Math.floor(countdown / 3600000);
  const minutes = Math.floor((countdown % 3600000) / 60000);
  const seconds = Math.floor((countdown % 60000) / 1000);

  let result = "";

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

function padZero(num) {
  return num.toString().padStart(2, "0");
}

function fetchTrainDepartures(apiUrl, stationName) {
  fetch(apiUrl, { method: "GET", headers: { Authorization: apiKey } })
    .then(handleResponse)
    .then((data) => {
      displayDepartures(data.departures, stationName);
      const moreDeparturesButton = document.getElementById("more-departures");
      moreDeparturesButton.style.display =
        data.departures.length > 0 ? "block" : "none";
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
  console.error("Error:", error);
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

function displayDepartures(departures, stationName) {
  departures.forEach((departure) => {
    const displayInfo = departure.display_informations;
    const stopDateTime = departure.stop_date_time;
    const trainId = departure.links[1].id;
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
    trainCode.textContent =
      departure.display_informations.network +
      " " +
      departure.display_informations.headsign;

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
    ); // Replace with your path data
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

    const viewStopsButton = document.createElement("button");
    viewStopsButton.textContent = "Voir les arrêts en gare";
    viewStopsButton.addEventListener("click", () => {
      const trainId = hiddenInput.value;
      fetchTrainStops(trainId, trainStops, stationName);
      viewStopsButton.remove();
    });

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.value = trainId;

    timeBlock.appendChild(svgSncf);

    scheduleItem.appendChild(scheduleHeader);
    scheduleItem.appendChild(viewStopsButton);
    scheduleItem.appendChild(timeBlock);

    scheduleContainer.appendChild(scheduleItem);
    const trainStops = document.createElement("div");
    trainStops.classList.add("train-stops");
    scheduleItem.appendChild(trainStops);
  });
  const lastTrainDeparture =
    departures[departures.length - 1].stop_date_time.departure_date_time;
  const hiddenInput = document.getElementById("lastTrainDepartureInput");
  if (hiddenInput) {
    hiddenInput.value = lastTrainDeparture;
  }
}

function fetchTrainStops(trainId, destinationCell, departureStation) {
  fetch(`https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/${trainId}`, {
    method: "GET",
    headers: { Authorization: apiKey },
  })
    .then(handleResponse)
    .then((data) => {
      const stops = data.vehicle_journeys[0].stop_times.map((stop) =>
        stop.stop_point.name.replace(/\s*-\s*/g, "-")
      );
      const departureIndex = stops.findIndex(
        (stop) =>
          stop.replace(/\s*-\s*/g, "") ===
          departureStation.replace(/\s*-\s*/g, " ")
      );
      if (departureIndex !== -1) {
        const stopsAfterDeparture = stops.slice(departureIndex + 1);
        destinationCell.innerHTML = stopsAfterDeparture.join(" - ");
      } else {
        destinationCell.innerHTML = "Erreur lors du chargement des arrêts.";
      }
    })
    .catch((error) => {
      destinationCell.innerHTML = "Erreur lors du chargement des arrêts.";
    });
}

const stationCodes = {
  Strasbourg: "87212027",
  Sélestat: "87214056",
  "Strasbourg-Roethig": "87212191",
};

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const chooseStationBtn = document.getElementById("chooseStationBtn");
const closeModalBtn = document.getElementById("closeModal");

chooseStationBtn.addEventListener("click", () => {
  openModal();
});

closeModalBtn.addEventListener("click", () => {
  closeModal();
});

function openModal() {
  modal.style.display = "flex";
  document.getElementById("modal-content").innerHTML = "";
  renderNonFavoriteStationButtons();
  renderCloseButton();
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

function renderCloseButton() {
  const closeButton = document.createElement("button");
  closeButton.innerText = "Fermer";
  closeButton.addEventListener("click", closeModal);
  document.getElementById("modal-content").appendChild(closeButton);
}

function renderStationButton(stationName, isFavorite) {
  const button = document.createElement("button");
  button.className = isFavorite ? "station-btn favorite" : "station-btn";
  button.setAttribute("data-station", stationName);
  button.innerHTML = isFavorite
    ? `<span class="star">&#9733;</span> ${stationName}`
    : `<span class="star">&#9734;</span> ${stationName}`;
  button.addEventListener("click", (event) => {
    const star = event.target.closest(".star");
    if (star) {
      toggleFavorite(stationName);
      updateStationButtons();
      closeModal();
    } else {
      closeModal();
      console.log(stationCodes[stationName]);
      apiUrl = `https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:${stationCodes[stationName]}/departures`;
      scheduleContainer.innerHTML = "";
      fetchTrainDepartures(apiUrl, stationName);
    }
  });
  !isFavorite
    ? document.getElementById("modal-content").appendChild(button)
    : document.getElementById("station-selector").appendChild(button);
}

function renderNonFavoriteStationButtons() {
  for (const stationName in stationCodes) {
    if (!favorites.includes(stationName)) {
      renderStationButton(stationName, false);
    }
  }
}

function updateStationButtons() {
  const stationSelector = document.getElementById("station-selector");
  stationSelector.innerHTML = "";
  renderFavoriteStationButtons();
}

function toggleFavorite(stationName) {
  const index = favorites.indexOf(stationName);
  if (index !== -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(stationName);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function renderFavoriteStationButtons() {
  favorites.forEach((stationName) => {
    renderStationButton(stationName, true);
  });
}

window.addEventListener("load", () => {
  renderFavoriteStationButtons();
});

window.addEventListener("click", closeOnOutsideClick);
window.addEventListener("touchstart", closeOnOutsideClick);

function closeOnOutsideClick(event) {
  const modal = document.querySelector(".modal");
  if (event.target === modal) {
    closeModal();
  }
}

const moreDeparturesButton = document.getElementById("more-departures");

moreDeparturesButton.addEventListener("click", () => {
  const lastTrainDepartureTime = document.querySelector(
    '.more-departures input[type="hidden"]'
  ).value;
  const stationName = document.querySelector(
    ".schedule-container .schedule-item:last-child .departure-station"
  ).textContent;

  const apiUrlWithDatetime = `${apiUrl}?from_datetime=${lastTrainDepartureTime}`;
  fetchTrainDepartures(apiUrlWithDatetime, stationName);
});

window.onscroll = function () {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
};

document
  .getElementById("back-to-top-btn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
