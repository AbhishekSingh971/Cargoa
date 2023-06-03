import React, { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import TForm from "./TForm";

const THome = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  }, []);
  return (
    <Layout title={"Cargoa - Home"}>
      <div>
        <img
          src="./Images/transporter.png"
          alt="img.jpeg"
          style={{
            maxWidth: "600px",
            position: "absolute",
            top: "20%",
            right: "10%",
          }}
        />
        <div
          style={{
            maxWidth: "40%",
            maxHeight: "70%",
            textAlign: "justify",
            position: "absolute",
            top: "25%",
            left: "5%",
            fontFamily: "'Open Sans', sans-serif",
            backgroundColor: "rgba(0,0,0,0.2)",
            color: "azure",
            padding: "10px",
            boxShadow:
              "5px 5px 10px 5px rgba(0,0,0,0.9),5px 5px 10px 2px rgba(0,0,0,01)",
            letterSpacing: "2px",
            borderRadius: "20px"
          }}
        >
          <h1 className="text-danger">Transporter</h1>
          <p>
            <b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sodales nunc non odio lacinia, non tincidunt justo ornare. Etiam
              eu ultrices lorem. Fusce posuere felis magna, id pretium metus
              imperdiet quis. Maecenas ante turpis, finibus et luctus quis,
              tincidunt at diam. Aenean in condimentum felis. Maecenas sodales
              nunc non odio lacinia, non tincidunt justo ornare. Etiam eu
              ultrices lorem. Fusce posuere felis magna, id pretium metus
              imperdiet quis. Maecenas ante turpis, finibus et luctus quis,
              tincidunt at diam. Aenean in condimentum felis.
            </b>
          </p>
        </div>
      </div>
      <div style={{ height: "100vh" }}>
        <TForm />
      </div>
    </Layout>
  );
};

export default THome;
