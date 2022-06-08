export default class AdministrationAPIs {
  static UserDetail(id) {
    return fetch(`http://127.0.0.1:8000/staff/accountDetail/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static userUpdate(id) {
    return fetch(`http://127.0.0.1:8000/staff/accountUpdate/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static UserRegister() {
    return fetch(`http://127.0.0.1:8000/staff/register/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static userLogin() {
    return fetch(`http://127.0.0.1:8000/staff/login/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static userLogout() {
    return fetch(`http://127.0.0.1:8000/staff/logout/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static BlackList() {
    return fetch(`http://127.0.0.1:8000/staff/BlackList/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static BlackListDetail(id) {
    return fetch(`http://127.0.0.1:8000/staff/BlackListDetail/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static AddBlackList() {
    return fetch(`http://127.0.0.1:8000/staff/addBlackList/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static BlackListUpdate(id) {
    return fetch(`http://127.0.0.1:8000/staff/UpdateBlackList/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static blackListDelete(id) {
    return fetch(`http://127.0.0.1:8000/staff/deleteBlackList/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static RenterList() {
    return fetch(`http://127.0.0.1:8000/staff/RenterList/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static RenterDetail(id) {
    return fetch(`http://127.0.0.1:8000/staff/RenterDetail/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static AgencyDetail(id) {
    return fetch(`http://127.0.0.1:8000/staff/getAgencyDetail/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static DriverDetail(id) {
    return fetch(`http://127.0.0.1:8000/staff/DriverDetail/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static AddRenter() {
    return fetch(`http://127.0.0.1:8000/staff/addRenter/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static RenterUpdate(id) {
    return fetch(`http://127.0.0.1:8000/staff/UpdateRenter/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static deleteRenter(id) {
    return fetch(`http://127.0.0.1:8000/staff/deleteRenter/${id}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  static viewAllDriverDispo() {
    return fetch(`http://127.0.0.1:8000/staff/DriverDispo/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}
