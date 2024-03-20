import "./About.css";
import "./Management.css";
function Management(props) {
  return (
    <div className="about-management">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#B80000",
          fontFamily: "Domine",
        }}
      >
        Management Of HIMCOFED
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "50px 0px 10px 0px",
        }}
      >
        {/* <h3
          style={{
            fontFamily: "Domine",
            backgroundColor: "#0034B8",
            color: "white",
            width: "250px",
            padding: "5px 0px",
          }}
        >
          <center>Chairman</center>
        </h3> */}
        <div
          className="about-management-paragraph"
          style={{
            margin: "30px 0px",
            textAlign: "justify",
            fontFamily: "Domine",
          }}
        >
          Due to Election Petition pend before the Hon'ble High Court from 2018,
          Registrar Cooperative Societies H.P. constitute a Committee vide their
          office letter No. 7-33/2007-Coop (A & S) dated 15th Jan,2024 of
          following Memebrs to manage the day affairs of Federation for a peroid
          of one year or till election are held which ever is earlier:-
        </div>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name and address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>
                Sh. Santosh Kumar Sharma, S/o Sh. Khada Ram GPO Dhaneta,
                Tehsil-Nadaun, Distt. Hamirpur
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>
                Sh. Vikramjeet Singh,Chairman, Law College Badehra Tehsil Haroli
                Distt.,Una{" "}
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>
                Sh. Raghuvir Singh Pathania S/o Sh. Bally Ram P.O. Sunet Tehsil
                Fatehpur, Distt. Kangra{" "}
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>
                Sh. Kheshav Nayak S/o Sh. Narayan Dass Nayak Village Bhaur, P.O.
                Kanid,Tehsil Sundernagar, Distt. Mandi
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td>
                Sh. Daulat Ram, HILLCO Building Village-Sharu,P.O. Prini, Tehsil
                Manali,Distt. Kullu
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "10px 0px 25px 0px",
        }}
      >
        <h3
          style={{
            fontFamily: "Domine",
            backgroundColor: "#0034B8",
            color: "white",
            width: "250px",
            padding: "5px 0px",
          }}
        >
          <center>Secretary</center>
        </h3>
        <div
          className="about-management-paragraph"
          style={{
            margin: "30px 0px",
            textAlign: "justify",
            fontFamily: "Domine",
          }}
        >
          The Secretary shall be the Chief Executive of the Federation ltd
          subject to the Control of the President and Executive Committees.
          After the Retirement of Sh. Mehar Chand Thakur during the year 2014 ,
          there is no regular Secretary of Himcofed due to no employees fall the
          feeder category of the post of the Secretary. As per merit cum
          seniority list Sh. Gaurav Jarial Lecturer as holding & act the Post of
          Secretary without any consequential benefit since September, 2019
        </div>
      </div>
    </div>
  );
}

export default Management;
