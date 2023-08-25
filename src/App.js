import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import "./App.css"; // or import './styles.scss';

const API_URL =
  "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="app-title">My React App</h1>
      <div className="card-list">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Modal
        isOpen={!!selectedItem}
        title={selectedItem?.title}
        content={selectedItem?.modalContent}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default App;
