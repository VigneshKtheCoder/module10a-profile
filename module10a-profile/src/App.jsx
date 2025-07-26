import Profile from "./Profile";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "black"}}>
      <h1 style={{ textAlign: "center" }}>Our Team</h1>
      <Profile
        name="Vignesh K"
        occupation="Math Tutor and Web Developer"
        funFact="I can remember what I did when I was 7 but not what I had for breakfast."
        quote="Never Judge a Book by its Cover"
      />
    </div>
  );
}

export default App;