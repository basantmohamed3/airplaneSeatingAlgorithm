function seatPassengers(flight, numPassengers) {
  const numRows = flight.length;
  const numCols = Math.max(...flight.map((row) => row.length));
  const seats = Array(numRows)
    .fill()
    .map(() => Array(numCols).fill(null));
  let aisleSeats = [];
  let windowSeats = [];
  let centerSeats = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < flight[row].length; col++) {
      const seat = { row, col };
      if (col === 0) {
        windowSeats.push(seat);
      } else if (col === flight[row].length - 1) {
        aisleSeats.unshift(seat);
      } else {
        centerSeats.push(seat);
      }
    }
  }
  for (let i = 0; i < numPassengers; i++) {
    let seat;
    if (aisleSeats.length > 0) {
      seat = aisleSeats.pop();
    } else if (windowSeats.length > 0) {
      seat = windowSeats.pop();
    } else if (centerSeats.length > 0) {
      seat = centerSeats.pop();
    } else {
      // Flight is fully booked
      return seats;
    }
    const { row, col } = seat;
    seats[row][col] = i + 1;
    const seatType =
      col === 0 ? "aisle" : col === numCols - 1 ? "window" : "center";
    console.log(
      `Passenger ${i + 1} seated in row ${row + 1}, seat ${
        col + 1
      } (${seatType})`
    );
  }
  console.log(seats);
  return seats;
}
console.log(
  seatPassengers(
    [
      [3, 4],
      [4, 5],
      [2, 3],
      [3, 4],
    ],
    30
  )
);
