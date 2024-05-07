import React from "react";
import FeaturesData from "../../data/features.json";

function Features() {
  const featuresData = FeaturesData;
  return (
    <section className="features">
      <h2>Features</h2>
      {featuresData.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img
            src={require("../../assets/img/" + feature.icon)}
            alt={feature.alt}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
