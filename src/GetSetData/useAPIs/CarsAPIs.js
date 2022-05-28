export default class CarsAPIs {
  static carsList() {
    return fetch(`http://127.0.0.1:8000/cars/carsList/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  static carDetail(id) {
    return fetch(`http://127.0.0.1:8000/cars/carDetail/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  static ViewCarsDispo(rentDate, returnDate) {
    return fetch("http://127.0.0.1:8000/cars/ViewCarsDispo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ issue_date: rentDate, return_date: returnDate }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  static ViewToolDispo(rentDate, returnDate) {
    return fetch("http://127.0.0.1:8000/cars/ViewToolDispo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ issue_date: rentDate, return_date: returnDate }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  static UpdateCarPriceate(id, priceDay, priceHour) {
    console.log(JSON.stringify({ priceD: priceDay, priceH: priceHour }));
    return fetch(`http://127.0.0.1:8000/cars/UpdateCarPrice/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceD: priceDay, priceH: priceHour }),
    })
      .then((response) => console.log(response.json()))
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}
