populateUI();

//save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

//get data from local storage and populate the UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//from function updateSelectedCount
//copy selected seats into array (spread operator)
//map through array
//return a new array of the seat indexes (from the node list)
const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

//inital count and total on page load
updateSelectedCount();
