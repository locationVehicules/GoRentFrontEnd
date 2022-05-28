export default class ContartAPIs {
  static ContratList() {
    return fetch(`http://127.0.0.1:8000/Contrat/ContratList/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  
  static ContratDetail(id) {
    return fetch(`http://127.0.0.1:8000/Contrat/ContratDetail/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static AddContrat() {
    return fetch(`http://127.0.0.1:8000/Contrat/AddContrat/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static ContratUpdate(id) {
    return fetch(`http://127.0.0.1:8000/Contrat/ContratUpdate/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static deleteContrat(id) {
    return fetch(`http://127.0.0.1:8000/Contrat/deleteContrat/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}
