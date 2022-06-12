import logo from "./logo.svg";
import "./App.css";
import imageInSrc from "./imageInSrc.jpg";
import "./style.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }} />

        <h1 className="titleRed">Hasnaoui Jihen</h1>

        <br />

        <img
          src="/imageInPublic.jpg"
          alt="myImagepublic"
          width="560"
          height="315"
        />

        <br />

        <img src={imageInSrc} alt="myImagesrc" width="560" height="315" />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TmP1ohts41w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </header>
    </div>
  );
}

export default App;
