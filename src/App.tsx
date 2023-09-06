import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "75%",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFsJvXjvOI&#x2F;view?embed"
          allowFullScreen={true}
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFsJvXjvOI&#x2F;view?utm_content=DAFsJvXjvOI&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener"
      ></a>
    </div>
  );
}

export default App;
