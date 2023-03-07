import React, { useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css.map";
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";
import moment from "moment";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gdFirstName, setGDFirstName] = useState("");
  const [gdLastName, setGDLastName] = useState("");
  const [visit, setVisit] = useState("");
  const [medication, setMedication] = useState("");
  const [allegries, setAllegries] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [file, setFile] = useState(null);
  const [cookies, setCookie] = useCookies(["user"]);
  const [onSelect, setOnSelect] = useState("");

  const [ageLimit, setAgeLimit] = useState([
    {
      label: "Yes",
      isCheck: false,
    },
    {
      label: "No",
      isCheck: false,
    },
  ]);

  const onRadioButton = (index, label) => {
    let data = ageLimit.map((item, ind) => {
      if (index === ind) {
        item.isCheck = !item.isCheck;
      }
      return item;
    });
    setAge(label);
    setAgeLimit(data);
  };

  const onSave = () => {
    console.log("Inside the cookoo", lastName);
    if (firstName === "") {
      alert("Plase enter first name");
    } else if (lastName === "") {
      alert("Please enter last name");
    } else if (startDate === "mm-dd-yyyy") {
      alert("Please select your DOB");
    } else if (age === "") {
      alert("Please select your age limit");
    } else if (gdFirstName === "") {
      alert("Please enter guardian first name");
    } else if (gdLastName === "") {
      alert("Please enter guardian last name");
    } else if (visit === "") {
      alert("Please enter primary reason for visit");
    } else if (medication === "") {
      alert("Please enter current medification");
    } else if (allegries === "") {
      alert("Please enter allegries");
    } else if (onSelect === "") {
      alert("Please select your medical state");
    } else if (phone === "") {
      alert("Please enter your phone number");
    } else if (phone.length < 9 || phone.length > 11) {
      alert("Phone number must be contain 10 numbers only");
    } else if (file === "") {
      alert("Please upload image");
    } else {
      setCookie("firstName", firstName, { path: "/" });
      setCookie("lastName", lastName, { path: "/" });
      setCookie("startDate", startDate, { path: "/" });
      setCookie("age", age, { path: "/" });
      setCookie("gardinFirst", gdFirstName, { path: "/" });
      setCookie("gardinLast", gdLastName, { path: "/" });
      setCookie("visit", visit, { path: "/" });
      setCookie("medification", medication, { path: "/" });
      setCookie("allergies", allegries, { path: "/" });
      setCookie("state", onSelect, { path: "/" });
      setCookie("phone", phone, { path: "/" });
      setCookie("file", file, { path: "/" });
    }
  };

  const onSelectItem = (event) => {
    console.log("Value issss", event.target.value);
    setOnSelect(event.target.value);
  };

  return (
    <div className="container background">
      <div className="txt">
        <text>Patient Info</text>
      </div>
      <div className="descTxt">
        <text>Waiting room / patient info</text>
      </div>
      <div className="line" />
      <div class="row">
        <div class="col-xs-6 col-sm-6">
          <div id="text1">
            <div className="box1">
              <div>{/* <BiUser/> */}</div>
              <div className="textArea">
                <text className="titleTxt">Patient First Name</text>
                <div>
                  <input
                    placeholder=""
                    value={
                      cookies.firstName === "" ? firstName : cookies.firstName
                    }
                    className="input1"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6">
          <div id="navigation">
            <div className="box1">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Patient Last Name</text>
                <div>
                  <input
                    placeholder=""
                    value={
                      cookies.lastName === "" ? lastName : cookies.lastName
                    }
                    className="input1"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6">
          <div id="text1">
            <div className="box1">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Patient DOB</text>
                <div>
                  <DatePicker
                    dateFormat="mm-dd-yyyy"
                    placeholderText="MM-DD-YYYY"
                    selected={
                      // cookies.startDate === "" ? startDate : cookies.startDate
                      startDate
                    }
                    onChange={(d) => {
                      // let date = moment(d).format("MM-DD-YYYY");
                      console.log("Dateeeee", d);
                      setStartDate(d);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6">
          <div id="navigation">
            <div className="box1">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Above 18</text>
                {ageLimit.map((item, index) => {
                  return (
                    <>
                      <input
                        type="radio"
                        value={item.label}
                        className="radio"
                        checked={
                          cookies.age === "" ? item.isCheck : cookies.age
                        }
                        onChange={() => onRadioButton(index, item.label)}
                      />
                      {item.label}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6">
          <div id="text1">
            <div className="box1">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Guardian First Name</text>
                <div>
                  <input
                    placeholder=""
                    value={
                      cookies.gardinFirst === ""
                        ? gdFirstName
                        : cookies.gardinFirst
                    }
                    className="input1"
                    onChange={(e) => setGDFirstName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6">
          <div id="navigation">
            <div className="box1">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Guardian Last Name</text>
                <div>
                  <input
                    placeholder=""
                    value={
                      cookies.gardinLast === ""
                        ? gdLastName
                        : cookies.gardinLast
                    }
                    className="input1"
                    onChange={(e) => setGDLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6">
          <div id="text1">
            <div className="box2">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Primary Reason for Visit</text>
                <div>
                  <textarea
                    name="postContent"
                    value={cookies.visit === "" ? visit : cookies.visit}
                    onChange={(e) => setVisit(e.target.value)}
                    rows={4}
                    cols={40}
                    className="input1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6">
          <div id="text1">
            <div className="box2">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Current Medifications</text>
                <div>
                  <textarea
                    name="postContent"
                    value={
                      cookies.medification === ""
                        ? medication
                        : cookies.medification
                    }
                    onChange={(e) => setMedication(e.target.value)}
                    rows={4}
                    cols={40}
                    className="input1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6">
          <div id="text1">
            <div className="box2">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Allegries</text>
                <div>
                  <textarea
                    name="postContent"
                    value={
                      cookies.allergies === "" ? allegries : cookies.allergies
                    }
                    onChange={(e) => setAllegries(e.target.value)}
                    rows={4}
                    cols={40}
                    className="input1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6">
          <div id="navigation">
            <div className="box1">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">State</text>
                <div>
                  {/* <input
                    placeholder=""
                    value={gdLastName}
                    className="input1"
                    onChange={(e) => setGDLastName(e.target.value)}
                  /> */}
                  <select
                    className="select"
                    value={cookies.state ? onSelect : cookies.state}
                    onChange={(e) => onSelectItem(e)}
                  >
                    <option value="CA">CA</option>
                    <option value="PA">PA</option>
                    <option value="FA">FA</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6">
          <div id="text1">
            <div className="box1">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Pharmacy phone number</text>
                <div>
                  <input
                    placeholder=""
                    value={cookies.phone === "" ? phone : cookies.phone}
                    className="input1"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6">
          <div id="navigation">
            <div className="box1">
              <div className="icon"></div>
              <div className="textArea">
                <text className="titleTxt">Upload photos</text>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    // value={file}
                    onChange={(e) => {
                      console.log(
                        "????????????????",
                        URL.createObjectURL(e.target.files[0])
                      );
                      setFile(URL.createObjectURL(e.target.files[0]));
                    }}
                    // className="input1"
                    //onChange={(event) => onFileUpload(event)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div > */}
      <Button onClick={() => onSave()} variant="primary">
        Primary
      </Button>{" "}
      {/* </div> */}
    </div>
  );
}

export default App;
