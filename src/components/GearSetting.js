"use client";
import { useState } from "react";

export default function GearSetting() {
  const [selectedLetter, setSelectedLetter] = useState("D");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const getLetterStyle = (letter) => {
    return {
      backgroundColor: letter === selectedLetter ? "#3E8AFC" : "#27272D",
      color: letter === selectedLetter ? "#fff" : "#9DBADA",
    };
  };
  return (
    <>
      <span
        className="py-2 px-4 rounded-xl cursor-pointer"
        onClick={() => handleLetterClick("P")}
        style={getLetterStyle("P")}
      >
        P
      </span>
      <span
        className="py-2 px-4 rounded-xl cursor-pointer"
        onClick={() => handleLetterClick("N")}
        style={getLetterStyle("N")}
      >
        N
      </span>
      <span
        className="py-2 px-4 rounded-xl cursor-pointer"
        onClick={() => handleLetterClick("D")}
        style={getLetterStyle("D")}
      >
        D
      </span>
      <span
        className="py-2 px-4 rounded-xl cursor-pointer"
        onClick={() => handleLetterClick("R")}
        style={getLetterStyle("R")}
      >
        R
      </span>
    </>
  );
}
