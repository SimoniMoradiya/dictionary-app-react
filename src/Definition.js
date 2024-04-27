import React, { useState } from "react";

function Definition({ data }) {

    

    

  return (
    <div className="showResults">
        <div className="container">
            <h2 className="title">
                {data.word}{" "}
            </h2>
            <div className="info">
                <h4>Definition:</h4> 
                <ul>
                    {data.meanings[0].definitions.map((definition, index) => (
                    <li key={index}>{definition.definition}</li>
                    ))}
                </ul>
            </div>
            <div className="example">
                <h4>Example:</h4>
                <ul>
                    {data.meanings[0].synonyms.map((synonym, index) => (
                    <li key={index}>{synonym}</li>
                    ))}
                </ul>
            </div>
            <div className="link">
                <h4>Click to More Information</h4>
                <a href={data.sourceUrls[0]} target="_blank">{data.sourceUrls[0]}</a>
            </div>
    </div>
    </div>
  );
}

export default Definition;
