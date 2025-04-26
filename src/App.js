import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Upload the PDF file.</h1>

      {/* 파일 선택 input */}
      <input 
        type="file" 
        accept="application/pdf" 
        style={{ marginTop: "1rem" }}
      />

      {/* Upload 버튼 */}
      <div style={{ marginTop: "2rem" }}>
        <button 
          onClick={() => alert('Upload 버튼 클릭!')} 
          style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default App;