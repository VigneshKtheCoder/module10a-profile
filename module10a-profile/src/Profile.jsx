import { useState } from "react";

function Profile({ name, occupation, funFact, quote }) {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const cardStyle = {
    border: "2px solid #444",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "350px",
    margin: "auto",
    backgroundColor: "#fefefe",
    textAlign: "center"
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#0066cc",
    color: "#fff",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Occupation:</strong> {occupation}</p>
      <p><strong>Fun Fact:</strong> {funFact}</p>
      {showDetail && <p style={{ fontStyle: "italic", marginTop: "10px" }}>{quote}</p>}
      <button style={buttonStyle} onClick={toggleDetail}>
        {showDetail ? "Hide Quote" : "Show Quote"}
      </button>
    </div>
  );
}

export default Profile;