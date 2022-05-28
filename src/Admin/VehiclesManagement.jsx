import { useState, useEffect } from "react";
import { Main } from "../components/Main";
import "../css/gerer_vehicules_style.css";
import QrReader from "react-qr-scanner";
import Select from "react-select";
import { ImgUploadComponent } from "../publicPages/LogPages";

export const VehiclesManagement = () => {
  const renters = [];
  const renter = [
    "/car1.png",
    "123456 115 25",
    "Mercedes",
    "Sport",
    "garage",
    "Constantine",
    "2000DA",
    "8000DA",
  ];
  for (let i = 0; i < 30; i++) {
    renters.push(renter);
  }
  const vehicles = [];
  for (let i = 0; i < 3; i++) {
    vehicles.push(`bus/${i + 1}.png`);
    vehicles.push(`moto/${i + 1}.png`);
    vehicles.push(`van/${i + 1}.png`);
    vehicles.push(`car/${i + 1}.png`);
  }
  const [display, setDisplay] = useState(false);
  const displayChangeParkingForm = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  const [displayAdd, setDisplayAdd] = useState(false);
  const displayAddVehicleForm = () => {
    displayAdd ? setDisplayAdd(false) : setDisplayAdd(true);
  };
  return (
    <Main title={"Vehicles Management"}>
      <div>
        <div className="d-flex flex-wrap justify-content-between align-items-center ">
          <div id="search" className="d-flex m-1 mx-lg-2 px-3">
            <form className="d-flex">
              <i className="bi bi-search fs-5"></i>
              <input
                className="form-control form-control-sm ml-3 fs-6"
                type="text"
                placeholder="by registration number"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="d-flex m-1 mx-lg-2">
            <button
              type="button"
              className="btn w-100 d-flex justify-content-center align-items-center btns rounded-circle"
              onClick={displayAddVehicleForm}
            >
              <i className="bi bi-plus-lg fs-6"></i> Add New Vehicle
            </button>
          </div>
        </div>
        <div
          className="p-3 d-flex flex-wrap justify-content-center"
          id="filterd"
        >
          <div
            className="card m-1 my-auto"
            style={{
              maxHeight: "250px",
              maxWidth: "250px",
              borderRadius: "10px",
            }}
          >
            <ParkingQRscanner
              displayChangeParkingForm={displayChangeParkingForm}
            />
            {display && (
              <ChangeParkingForm
                displayChangeParkingForm={displayChangeParkingForm}
              />
            )}
            {displayAdd && (
              <AddVehicleForm displayAddVehicleForm={displayAddVehicleForm} />
            )}
          </div>
          {vehicles.map((v, i) => (
            <button
              key={i}
              style={{
                height: "300px",
                width: "240px",
                borderRadius: "10px",
              }}
              onClick={displayChangeParkingForm}
              className="card p-3 m-1 border d-flex flex-column justify-content-between"
            >
              <div
                className="img-containe d-flex"
                style={{
                  maxHeight: "55%",
                  maxWidth: "100%",
                }}
              >
                <img
                  className=" p-2"
                  src={require(`../img/vehicles/${v}`)}
                  alt="accent2016"
                />
              </div>

              <ul
                className="info d-flex flex-column"
                style={{
                  maxHeight: "45%",
                  maxWidth: "100%",
                }}
              >
                <li className="d-flex">123456 124 25</li>
                <li className="d-flex">Peugeot 3008 | white</li>
                <li className="d-flex">Family</li>
                <li className="d-flex">State</li>
                <li className="d-flex flew-wrap">
                  <b>Parking:</b> Touggourt
                </li>
              </ul>
            </button>
          ))}
        </div>
      </div>
    </Main>
  );
};

const ParkingQRscanner = ({ displayChangeParkingForm }) => {
  const delay = 100;
  const [result, setResult] = useState();

  useEffect(() => {
    result !== undefined && displayChangeParkingForm();
  }, [result]);

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <>
      <QrReader
        style={{
          width: "100%",
          height: "100%",
          border: "3px solid var(--bg_icon_color)",
          borderRadius: "10px",
        }}
        delay={delay}
        onError={handleError}
        onScan={(result) => setResult(result?.text)}
      />
    </>
  );
};

const ChangeParkingForm = ({ displayChangeParkingForm }) => {
  const parkingLocation = [
    { value: "Adrar", label: "Adrar" },
    { value: "Chlef", label: "Chlef" },
    { value: "Laghouat", label: "Laghouat" },
    { value: "Oum El Bouaghi", label: "Oum El Bouaghi" },
    { value: "Batna", label: "Batna" },
    { value: "Béjaïa", label: "Béjaïa" },
    { value: "Biskra", label: "Biskra" },
    { value: "Béchar", label: "Béchar" },
    { value: "Blida", label: "Blida" },
    { value: "Bouira", label: "Bouira" },
    { value: "Tamanrasset", label: "Tamanrasset" },
    { value: "Tébessa", label: "Tébessa" },
    { value: "Tlemcen", label: "Tlemcen" },
    { value: "Tiaret", label: "Tiaret" },
    { value: "Tizi Ouzou", label: "Tizi Ouzou" },
    { value: "Alger", label: "Alger" },
    { value: "Djelfa", label: "Djelfa" },
    { value: "Jijel", label: "Jijel" },
    { value: "Sétif", label: "Sétif" },
    { value: "Saïda", label: "Saïda" },
    { value: "Skikda", label: "Skikda" },
    { value: "Sidi Bel Abbès", label: "Sidi Bel Abbès" },
    { value: "Annaba", label: "Annaba" },
    { value: "Guelma", label: "Guelma" },
    { value: "Constantine", label: "Constantine" },
    { value: "Médéa", label: "Médéa" },
    { value: "Mostaganem", label: "Mostaganem" },
    { value: "M'Sila", label: "M'Sila" },
    { value: "Mascara", label: "Mascara" },
    { value: "Ouargla", label: "Ouargla" },
    { value: "Oran", label: "Oran" },
    { value: "El Bayadh", label: "El Bayadh" },
    { value: "Illizi", label: "Illizi" },
    { value: "Bordj Bou Arreridj", label: "Bordj Bou Arreridj" },
    { value: "Boumerdès", label: "Boumerdès" },
    { value: "El Tarf", label: "El Tarf" },
    { value: "Tindouf", label: "Tindouf" },
    { value: "Tissemsilt", label: "Tissemsilt" },
    { value: "El Oued", label: "El Oued" },
    { value: "Khenchela", label: "Khenchela" },
    { value: "Souk Ahras", label: "Souk Ahras" },
    { value: "Tipaza", label: "Tipaza" },
    { value: "Mila", label: "Mila" },
    { value: "Aïn Defla", label: "Aïn Defla" },
    { value: "Naâma", label: "Naâma" },
    { value: "Aïn Témouchent", label: "Aïn Témouchent" },
    { value: "Ghardaïa", label: "Ghardaïa" },
    { value: "Relizane", label: "Relizane" },
    { value: "Timimoun", label: "Timimoun" },
    { value: "Bordj Badji Mokhtar", label: "Bordj Badji Mokhtar" },
    { value: "Ouled Djellal", label: "Ouled Djellal" },
    { value: "Béni Abbès", label: "Béni Abbès" },
    { value: "In Salah", label: "In Salah" },
    { value: "In Guezzam", label: "In Guezzam" },
    { value: "Touggourt", label: "Touggourt" },
    { value: "Djanet", label: "Djanet" },
    { value: "El Meghaier", label: "El Meghaier" },
    { value: "El Menia", label: "El Menia" },
  ];

  const [parkingID, setParkingID] = useState();
  const getParkingID = (selectedOption) => {
    let p = [];
    for (let i = 1; i < 10; i++) {
      p.push({ value: `${i}`, label: `${i}` });
    }
    setParkingID(p);
  };

  return (
    <div
      className="modal fade show d-block"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered  modal-lg"
        role="dialog"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="Ckeck Form">
              Change Vehicle Parking
            </h4>
          </div>
          <div className="modal-body">
            <div className="vehicle-info d-flex flex-md-row flex-column m-2 p-3 border ">
              <div className="w-100">
                <div className="d-flex flex-md-row flex-column ">
                  <div className="w-100 m-1 d-flex flex-column fs-6">
                    <div className="m-1">
                      <label
                        htmlFor="renter-name"
                        className="fs-6"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        Registration Number
                      </label>
                      <p
                        className="form-control fs-6"
                        id="renter-name"
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                        }}
                      >
                        123456 124 25
                      </p>
                    </div>
                    <div className="m-1">
                      <label
                        htmlFor="renter-name"
                        className="fs-6"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        Model and Color
                      </label>
                      <p
                        className="form-control fs-6"
                        id="renter-name"
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                        }}
                      >
                        Peugeot 3008 | white
                      </p>
                    </div>
                    <div className="m-1">
                      <label
                        htmlFor="renter-name"
                        className="fs-6"
                        style={{ color: "var(--font-color-2)" }}
                      >
                        Type
                      </label>
                      <p
                        className="form-control fs-6"
                        id="renter-name"
                        style={{
                          border: 0,
                          borderBottom: "2px solid var(--font-color-2)",
                        }}
                      >
                        Family
                      </p>
                    </div>
                  </div>
                  <div className="w-100 m-1 d-flex flex-column fs-5 ">
                    <label
                      htmlFor="photo-permit"
                      className="fs-5"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Vehicle Photo
                    </label>
                    <div className="m-auto mt-1 w-100 h-100 border rounded">
                      {" "}
                      photo{" "}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="m-1 w-100">
                    <label
                      htmlFor="parkingLocation"
                      className="fs-5"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Parking Location
                    </label>
                    <Select
                      classNamePrefix="select"
                      name="parkingLocation"
                      id="parkingLocation"
                      options={parkingLocation}
                      onChange={getParkingID}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <label
                      className="fs-5"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Parking ID
                    </label>
                    <Select
                      className="permit-category"
                      classNamePrefix="select"
                      name="parkingID"
                      options={parkingID}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                data-dismiss="modal"
                onClick={displayChangeParkingForm}
                style={{ background: "var(--bg_icon_color)", color: "black" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn"
                onClick={displayChangeParkingForm}
                style={{ background: "var(--btn_color1)", color: "white" }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddVehicleForm = ({ displayAddVehicleForm }) => {
  const parkingLocation = [
    { value: "Adrar", label: "Adrar" },
    { value: "Chlef", label: "Chlef" },
    { value: "Laghouat", label: "Laghouat" },
    { value: "Oum El Bouaghi", label: "Oum El Bouaghi" },
    { value: "Batna", label: "Batna" },
    { value: "Béjaïa", label: "Béjaïa" },
    { value: "Biskra", label: "Biskra" },
    { value: "Béchar", label: "Béchar" },
    { value: "Blida", label: "Blida" },
    { value: "Bouira", label: "Bouira" },
    { value: "Tamanrasset", label: "Tamanrasset" },
    { value: "Tébessa", label: "Tébessa" },
    { value: "Tlemcen", label: "Tlemcen" },
    { value: "Tiaret", label: "Tiaret" },
    { value: "Tizi Ouzou", label: "Tizi Ouzou" },
    { value: "Alger", label: "Alger" },
    { value: "Djelfa", label: "Djelfa" },
    { value: "Jijel", label: "Jijel" },
    { value: "Sétif", label: "Sétif" },
    { value: "Saïda", label: "Saïda" },
    { value: "Skikda", label: "Skikda" },
    { value: "Sidi Bel Abbès", label: "Sidi Bel Abbès" },
    { value: "Annaba", label: "Annaba" },
    { value: "Guelma", label: "Guelma" },
    { value: "Constantine", label: "Constantine" },
    { value: "Médéa", label: "Médéa" },
    { value: "Mostaganem", label: "Mostaganem" },
    { value: "M'Sila", label: "M'Sila" },
    { value: "Mascara", label: "Mascara" },
    { value: "Ouargla", label: "Ouargla" },
    { value: "Oran", label: "Oran" },
    { value: "El Bayadh", label: "El Bayadh" },
    { value: "Illizi", label: "Illizi" },
    { value: "Bordj Bou Arreridj", label: "Bordj Bou Arreridj" },
    { value: "Boumerdès", label: "Boumerdès" },
    { value: "El Tarf", label: "El Tarf" },
    { value: "Tindouf", label: "Tindouf" },
    { value: "Tissemsilt", label: "Tissemsilt" },
    { value: "El Oued", label: "El Oued" },
    { value: "Khenchela", label: "Khenchela" },
    { value: "Souk Ahras", label: "Souk Ahras" },
    { value: "Tipaza", label: "Tipaza" },
    { value: "Mila", label: "Mila" },
    { value: "Aïn Defla", label: "Aïn Defla" },
    { value: "Naâma", label: "Naâma" },
    { value: "Aïn Témouchent", label: "Aïn Témouchent" },
    { value: "Ghardaïa", label: "Ghardaïa" },
    { value: "Relizane", label: "Relizane" },
    { value: "Timimoun", label: "Timimoun" },
    { value: "Bordj Badji Mokhtar", label: "Bordj Badji Mokhtar" },
    { value: "Ouled Djellal", label: "Ouled Djellal" },
    { value: "Béni Abbès", label: "Béni Abbès" },
    { value: "In Salah", label: "In Salah" },
    { value: "In Guezzam", label: "In Guezzam" },
    { value: "Touggourt", label: "Touggourt" },
    { value: "Djanet", label: "Djanet" },
    { value: "El Meghaier", label: "El Meghaier" },
    { value: "El Menia", label: "El Menia" },
  ];
  const modelOptions = [
    { value: "SUV", label: "Sport Utility Vehicle" },
    { value: "Hatchback", label: "Hatchback" },
    { value: "Crossover", label: "Crossover" },
    { value: "Convertible", label: "Convertible" },
    { value: "Sedan", label: "Sedan" },
    { value: "Sports ", label: "Sports " },
    { value: "Coupe", label: "Coupe" },
    { value: "Minivan", label: "Minivan" },
    { value: "Wagon", label: "Station Wagon" },
    { value: "Pickup", label: "Pickup Truck " },
  ];
  const Brand = [
    { value: "Toyota Runner", label: "Toyota Runner" },
    { value: "Toyota Auris", label: "Toyota Auris" },
    { value: "Toyota Avalon", label: "Toyota Avalon" },
    { value: "Toyota Avensis", label: "Toyota Avensis" },
    { value: "Toyota Corolla", label: "Toyota Corolla" },
    { value: "Toyota Landcruiser", label: "Toyota Landcruiser" },
    { value: "Toyota Yaris", label: "Toyota Yaris" },
    { value: "Toyota Camry", label: "Toyota Camry" },
    { value: "Toyota Supra", label: "Toyota Supra" },
    { value: "Suzuki Across", label: "Suzuki Across" },
    { value: "Suzuki Celerio", label: "Suzuki Celerio" },
    { value: "Suzuki s-cross", label: "Suzuki s-cross" },
    { value: "Suzuki swift", label: "Suzuki swift" },
    { value: "Suzuki sx4-s-cross", label: "Suzuki sx4-s-cross" },
    { value: "Skoda fabia", label: "Skoda fabia" },
    { value: "Seat ibiza", label: "Seat ibiza" },
    { value: "Seat leon", label: "Seat leon" },
    { value: "Seat tarraco", label: "Seat tarraco" },
    { value: "Rolls-royce cullinan", label: "Rolls-royce cullinan" },
    { value: "Rolls-royce phantom", label: "Rolls-royce phantom" },
  ];
  const colourOptions = [
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "gray", label: "Grau" },
    { value: "green", label: "Green" },
  ];
  const gearBox = [
    { value: "m", label: "Manual" },
    { value: "a", label: "Automatic" },
  ];
  const engine = [
    { value: "e", label: "Essence" },
    { value: "d", label: "Diesel" },
    { value: "h", label: "Hybride" },
    { value: "el", label: "Electric" },
  ];
  const place = [
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 7, label: "7" },
    { value: 12, label: "12" },
    { value: 30, label: "30" },
  ];
  const mobility = [
    { value: "false", label: "unsupportive" },
    { value: "true", label: "supportive" },
  ];
  const vehicleCategory = [
    { value: "Car", label: "Car" },
    { value: "Bus", label: "Bus" },
    { value: "Moto", label: "Moto" },
  ];
  // const [type, setType] = useState("port");
  const [parkingID, setParkingID] = useState();
  const getParkingID = (selectedOption) => {
    let p = [];
    for (let i = 1; i < 10; i++) {
      p.push({ value: `${i}`, label: `${i}` });
    }
    setParkingID(p);
  };
  // const ChangeCategory = (selectedOption) => {
  //   const category = selectedOption.value;
  //   switch (category) {
  //     case "Car":
  //     case "Bus":
  //       setType("port");
  //       break;
  //     case "Moto":
  //       setType("wheel");
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const addVehicule = () => {
    console.log(
      document.querySelector('input[name="registration-number"]').value
    );
    console.log(document.querySelector('input[name="year-of-purchase"]').value);
    console.log(document.querySelector('input[name="modelOptions"]').value);
    console.log(document.querySelector('input[name="Brand"]').value);
    console.log(document.querySelector('input[name="colourOptions"]').value);
    console.log(document.querySelector('input[name="gearBox"]').value);
    console.log(document.querySelector('input[name="engine"]').value);
    console.log(document.querySelector('input[name="place"]').value);
    console.log(document.querySelector('input[name="mobility"]').value);
    console.log(document.querySelector('input[name="vehicle-categor"]').value);
    console.log(document.querySelector('input[name="parkingLocation"]').value);
    console.log(document.querySelector('input[name="parkingID"]').value);
  };
  return (
    <div
      className="modal fade show d-block"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered  modal-lg"
        role="dialog"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="Ckeck Form">
              Add Vehicle
            </h5>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-md-row flex-column ">
              <div className="w-100 m-1 d-flex flex-column fs-6">
                <div className="d-flex flex-column flex-md-row">
                  <div className="m-1 w-100">
                    <label
                      htmlFor="last-Name"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Registration Number
                    </label>
                    <input
                      type="text"
                      name="registration-number"
                      className="form-control"
                      id="registration-number"
                      placeholder=""
                      required
                      style={{
                        border: 0,
                        borderBottom: "2px solid var(--font-color-2)",
                        height: "40px",
                      }}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <label
                      htmlFor="year-of-purchase"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Year of purchase
                    </label>
                    <input
                      type="date"
                      name="year-of-purchase"
                      className="form-control"
                      id="year of purchase"
                      placeholder=""
                      required
                      style={{
                        border: 0,
                        borderBottom: "2px solid var(--font-color-2)",
                        height: "40px",
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="m-1 w-100">
                    <label
                      htmlFor="model"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Model
                    </label>
                    <Select
                      classNamePrefix="select"
                      name="modelOptions"
                      id="modelOptions"
                      options={modelOptions}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <label
                      htmlFor="type"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Brand
                    </label>
                    <Select
                      classNamePrefix="select"
                      name="Brand"
                      id="Brand"
                      options={Brand}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="m-1 w-100">
                    <label
                      htmlFor="color"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Color
                    </label>
                    <Select
                      classNamePrefix="select"
                      name="colourOptions"
                      id="colourOptions"
                      options={colourOptions}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <label
                      htmlFor="gearbox-type"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Gearbox type
                    </label>
                    <Select
                      classNamePrefix="select"
                      name="gearBox"
                      id="gearBox"
                      options={gearBox}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="m-1 w-100">
                    <label
                      htmlFor="type-of-ngine"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Type of Engine
                    </label>
                    <Select
                      classNamePrefix="select"
                      name="engine"
                      id="engine"
                      options={engine}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <label
                      htmlFor="number-seat"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Number Seat
                    </label>
                    <Select
                      classNamePrefix="select"
                      name="place"
                      id="place"
                      options={place}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="m-1 w-100">
                    <label
                      htmlFor="number-seat"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Reduced Mobility
                    </label>
                    <Select
                      classNamePrefix="select"
                      name="mobility"
                      id="mobility"
                      options={mobility}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <label
                      htmlFor="vehicle-category"
                      className="fs-6"
                      style={{ color: "var(--font-color-2)" }}
                    >
                      Vehicle Category
                    </label>
                    <Select
                      className="vehicle-category"
                      classNamePrefix="select"
                      defaultValue={vehicleCategory[0]}
                      name="vehicle-categor"
                      options={vehicleCategory}
                    />
                  </div>
                </div>
                {/* <div className="d-flex flex-column flex-md-row">
                      <div className="m-1 w-100">
                        <label
                          htmlFor="photo"
                          className="fs-5"
                          style={{ color: "var(--font-color-2)" }}
                        >
                          Vehicle photo
                        </label>
                        <div className="m-auto mt-1 upload-img">
                          <ImgUploadComponent />
                        </div>
                      </div>
                    </div> */}
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row">
              <div className="m-1 w-100">
                <label
                  htmlFor="parkingLocation"
                  className="fs-6"
                  style={{ color: "var(--font-color-2)" }}
                >
                  Parking Location
                </label>
                <Select
                  classNamePrefix="select"
                  name="parkingLocation"
                  id="parkingLocation"
                  options={parkingLocation}
                  onChange={getParkingID}
                />
              </div>
              <div className="m-1 w-100">
                <label
                  className="fs-6"
                  style={{ color: "var(--font-color-2)" }}
                >
                  Parking ID
                </label>
                <Select
                  className="permit-category"
                  classNamePrefix="select"
                  name="parkingID"
                  options={parkingID}
                />
              </div>
            </div>
          </div>

          <div className="modal-footer p-0 px-4">
            <button
              type="button"
              className="btn"
              data-dismiss="modal"
              onClick={displayAddVehicleForm}
              style={{ background: "var(--bg_icon_color)", color: "black" }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => addVehicule()}
              style={{ background: "var(--btn_color1)", color: "white" }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
