import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1); // 1=업로드화면, 2=선택화면
  const [data, setData] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);

  const handleUpload = async () => {
    // 가짜 데이터 (mock)
    const apiData = [
      {
        "chapter": "Electric Charge and Coulomb’s Law",
        "sessions": [
          { "section": "Electromagnetism: A Preview", "page_number": 582 },
          { "section": "Electric Charge", "page_number": 584 },
          { "section": "Conductors and Insulators", "page_number": 587 },
          { "section": "Coulomb’s Law (Part 1)", "page_number": 588 },
          { "section": "Coulomb’s Law (Part 2)", "page_number": 590 },
          { "section": "Continuous Charge Distributions", "page_number": 594 },
          { "section": "Conservation of Charge", "page_number": 597 }
        ]
      },
      {
        "chapter": "The Electric Field",
        "sessions": [
          { "section": "What is a Field?", "page_number": 602 },
          { "section": "The Electric Field", "page_number": 604 },
          { "section": "The Electric Field of Point Charges", "page_number": 606 },
          { "section": "Electric Field of Continuous Charge Distributions", "page_number": 610 },
          { "section": "Electric Field Lines", "page_number": 614 },
          { "section": "A Point Charge in an Electric Field", "page_number": 618 },
          { "section": "A Dipole in an Electric Field", "page_number": 621 },
          { "section": "The Nuclear Model of the Atom (Optional)", "page_number": 624 }
        ]
      }
    ];
    setData(apiData);
    setStep(2);
  };

  const handleCheckboxChange = (sectionTitle) => {
    if (selectedSections.includes(sectionTitle)) {
      setSelectedSections(selectedSections.filter(item => item !== sectionTitle));
    } else {
      setSelectedSections([...selectedSections, sectionTitle]);
    }
  };

  const handleBack = () => {
    setStep(1); // Step 1로 돌아감
    setData([]); // 데이터 초기화 (필수는 아니지만 깔끔하게)
    setSelectedSections([]);
  };

  return (
    <div className="App" style={{ padding: "2rem", textAlign: "center" }}>
      
      {/* Step 1 : 파일 업로드 화면 */}
      {step === 1 && (
        <>
          <h1>Upload the PDF file.</h1>

          <input 
            type="file" 
            accept="application/pdf" 
            style={{ marginTop: "1rem" }}
          />

          <div style={{ marginTop: "2rem" }}>
            <button 
              onClick={handleUpload}
              style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
            >
              Upload and Ask
            </button>
          </div>
        </>
      )}

      {/* Step 2 : 챕터/세션 선택 화면 */}
      {step === 2 && (
        <div style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
          {/* 뒤로가기 버튼 */}
          <div style={{ marginBottom: "2rem" }}>
            <button 
              onClick={handleBack}
              style={{ 
                padding: "0.5rem 1rem", 
                fontSize: "1rem", 
                backgroundColor: "lightgray", 
                border: "none", 
                cursor: "pointer",
                borderRadius: "5px"
              }}
            >
              ← Back
            </button>
          </div>

          {data.map((chapter, index) => (
            <div key={index} style={{ marginBottom: "2rem" }}>
              <h2>{chapter.chapter}</h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {chapter.sessions.map((session, idx) => (
                  <li key={idx} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      checked={selectedSections.includes(session.section)}
                      onChange={() => handleCheckboxChange(session.section)}
                      style={{ marginRight: "1rem" }}
                    />
                    {session.section} (p. {session.page_number})
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <button 
              onClick={() => alert(`선택한 세션:\n${selectedSections.join("\n")}`)}
              style={{ 
                padding: "0.75rem 2rem", 
                fontSize: "1rem", 
                backgroundColor: "black", 
                color: "white", 
                border: "none",
                cursor: "pointer",
                borderRadius: "5px"
              }}
            >
              Start
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;
