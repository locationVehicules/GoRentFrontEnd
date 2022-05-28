export default class ReservationAPIs {
  static reservationList() {
    return fetch(`http://127.0.0.1:8000/reservation/reservationList/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  static reservationDetail(id) {
    return fetch(`http://127.0.0.1:8000/reservation/reservationDetail/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  static reservationCar() {
    return fetch(`http://127.0.0.1:8000/reservation/reservationCar/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  static ExtendReservationDate(id) {
    return fetch(
      `http://127.0.0.1:8000/reservation/ExtendReservationDate/${id}`
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  static rcancelreservation(id) {
    return fetch(`http://127.0.0.1:8000/reservation/cancelreservation/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}
