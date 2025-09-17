import React, { useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  const handleDrop = async (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", { method: "POST", body: formData });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{
        border: "2px dashed #999",
        width: 400,
        height: 200,
        margin: "50px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <p>ここに CSV ファイルをドロップしてください</p>
      <pre>{result && JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default App;
