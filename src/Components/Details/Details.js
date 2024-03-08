import React, { useState } from 'react';
import './Details.css'; // Import your CSS file 
import Navbar from '../Navbar';

const Details = () => {
  const diseases = [
    {
      name: 'BA- cellulitis ',
      symptoms: 'Small, dark spots with a water-soaked appearance on leaves. Lesions may have a yellow halo. Infected fruits may have raised lesions.',
      causes: 'Bacterial infection that spreads through splashing water. Warm and humid conditions favor the disease.',
      image:'https://www.growingproduce.com/wp-content/uploads/2019/08/bacterial_spot_tomato.jpg'
    },
    {
      name: 'BA-impetigo',
      symptoms: 'Circular, dark lesions with concentric rings on lower leaves. Leaves may turn yellow, with premature defoliation. Affects both foliage and fruits.',
      causes: 'Fungus overwinters in infected plant debris. Warm and moist conditions encourage its development.',
    },
    {
      name: 'FU-athlete-foot',
      symptoms: 'Yellowing and wilting of lower leaves. Fuzzy white to yellowish-brown mold on the undersides of leaves.',
      causes: 'Fungal infection favored by high humidity. Spreads rapidly in crowded or poorly ventilated conditions.',
    },
    {
      name: 'FU-nail-fungus',
      symptoms: 'Dark, water-soaked lesions on leaves, spreading rapidly. White fungal growth on the undersides of leaves in humid conditions.',
      causes: 'Fungal infection that thrives in cool and wet conditions. Can cause severe crop damage.',
    },
    {
      name: 'FU-ringworm',
      symptoms: 'Small, circular lesions with dark centers and lighter borders on leaves. Lesions may coalesce, leading to defoliation.',
      causes: 'Fungal infection favored by warm and humid weather. Survives on infected plant debris.',
    },
    {
      name: 'PA-cutaneous-larva-migrans',
      symptoms: 'Fine stippling on leaves, yellowing, and webbing. Leaves may become bronzed and distorted.',
      causes: 'Infestation by tiny spider mites. Thrives in hot and dry conditions.',
    },
    {
      name: 'VI-chickenpox',
      symptoms: 'Circular lesions with a target-like appearance on leaves. Lesions may have concentric rings of alternating colors.',
      causes: 'Fungal infection favored by warm and humid conditions. Spreads through wind-driven rain.',
    },
    {
      name: 'VI-shingles',
      symptoms: 'Yellowing and upward curling of leaves, stunted growth, and reduced fruit production. Infected plants may exhibit a characteristic "V" shape.',
      causes: 'Viral infection transmitted by whiteflies. Affects tomato plants globally.',
    },
    // Add similar objects for other diseases
  ];

  const [expandedDisease, setExpandedDisease] = useState(null);

  const toggleExpand = (index) => {
    setExpandedDisease(expandedDisease === index ? null : index);
  };

  return (
    <>
    <Navbar />
    <div className="component">
      <h2 className="heading">Skin Diseases</h2>
      {diseases.map((disease, index) => (
        <div key={index} className="disease-container" onClick={() => toggleExpand(index)}>
          <h3 className="disease-name">{disease.name}</h3>
          
          <div className={`disease-details ${expandedDisease === index ? 'show' : ''}`}>
          {disease.image && <img src={disease.image} alt={disease.name} className="disease-image" />}
            <p><strong>Symptoms:</strong> {disease.symptoms}</p>
            <p><strong>Causes:</strong> {disease.causes}</p>
          </div> 
        </div>
      ))}
    </div>
    </>
  );
};


export default Details;