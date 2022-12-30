import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Select from "../Select";
import { useNavigate } from "react-router-dom";

const Ticket = (movieData) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // modal / jumlah
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="bg">
        <div className="flex column">
          <img src={movieData.image} alt="" />
        </div>
        <hr />
        <div className="jadwal">
          <h2 className="tgl">14 November 2022</h2>
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="info"
          >
            12.03
          </Button>
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="info"
          >
            13.10
          </Button>{" "}
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            17.00
          </Button>{" "}
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            19.10
          </Button>{" "}
        </div>
        <hr />
        <div className="jadwal">
          <h2 className="tgl">15 November 2022</h2>
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            11.10
          </Button>{" "}
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            13.00
          </Button>{" "}
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            14.40
          </Button>{" "}
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            16.00
          </Button>{" "}
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            17.10
          </Button>{" "}
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            18.40
          </Button>{" "}
        </div>
        <hr />
        <div className="jadwal">
          <h2 className="tgl">16 November 2022</h2>
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            12.20
          </Button>{" "}
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            18.10
          </Button>{" "}
          <Button
            className="jam"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            19.50
          </Button>{" "}
        </div>
        <hr />
        <div className="jadwal">
          <h2 className="tgl">17 November 2022</h2>
          <Button
            className="jam1"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            10.05
          </Button>{" "}
          <Button
            className="jam1"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            16.40
          </Button>{" "}
          <Button
            className="jam1"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            17.50
          </Button>{" "}
          <Button
            className="jam1"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            18.40
          </Button>{" "}
          <Button
            className="jam1"
            onClick={() => navigate("/select")}
            variant="secondary"
          >
            20.10
          </Button>{" "}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .bg {
    // background-color: lightsteelblue;
    background-color: rgba(10, 9, 9, 0.56);
  }
  
  img {
    height: 35rem;
  }
  .flex {
    font-size: 2rem;
    font-family: sans-serif;
  }
  hr {
    height: 12px;
  }
  .jadwal {
    margin: 30px;
    // margin-top: 15px;
    font-size: 1.1rem;
    margin-bottom: 30px;
    align-items: center;

    .tgl {
      font-size: 1.5rem;
      // color: black;
    }

    .jam {
      margin-top: 12px;
      font-size: 25px;
      width: 90px;
      height: 40px;
      margin-right: 20px;
    }

    .jam1 {
      margin-top: 12px;
      font-size: 25px;
      width: 90px;
      height: 40px;
      margin-right: 20px;
      margin-bottom: 5rem;
  }
`;

export default Ticket;

// import Form from 'react-bootstrap/Form';

// function SelectBasicExample() {
//   return (
//     <Form.Select aria-label="Default select example">
//       <option>Open this select menu</option>
//       <option value="1">One</option>
//       <option value="2">Two</option>
//       <option value="3">Three</option>
//     </Form.Select>
//   );
// }

// export default SelectBasicExample;
