import React, { useEffect, useState } from "react";
import "../../Components/Css/MCard.scss";
import axios from "axios";
import { toast } from "react-hot-toast";

const MCard = (props) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const Transporter = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:7000/api/v1/auth/getTransporter/${props.transporter}`
        );
        if (data && data.success) {
          let parse = data.transporter;
          setDatas([parse]);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    console.log(datas);
    Transporter();
  }, []);
  return (
    <div className="Mcard-main container col-3">
      <div className="Mcard-card">
        <img
          className="Mcard-img"
          src="https://s.yimg.com/ny/api/res/1.2/6.XmOxp0R5bs.rEpsShmBw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/Benzinga/2ee1581375ca12eb351993ffa9f877f6"
          alt=""
        />
        <div className="card-content">
          <h3 className="Mcard-h2">To : {props.to}</h3>
          <br />
          <h3 className="Mcard-h3">From : {props.from}</h3>
          <p className="Mcard-p">
            <span>Quantity : {props.quantity} Tons</span>
            <br />
            <span>Transporter : {props.transporter}</span>
          </p>
          <div className="Mcard-div row">
            <div className="col">
              <button className="btn btn-warning">UPDATE</button>
            </div>

            <div className="col">
              <button className="btn btn-danger" onClick={props.handleDelete}>DELETE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCard;
