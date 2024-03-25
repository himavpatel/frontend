import React, { useState } from 'react';
import './Details.css'; // Import your CSS file 
import Navbar from '../Navbar';
import image from "../Assets/1.jpg"; 

const Details = () => {
  const diseases = [
    {
      name: 'BA- cellulitis ',
      symptoms: 'You may have cellulitis if you have an area of skin that is warm, red, tender and very painful with fever and nausea.',
      causes: 'Cellulitis is caused when bacteria, most commonly streptococcus and staphylococcus, enter through a crack or break in the skin. ',
      image:'https://tse3.mm.bing.net/th?id=OIP.BTfyyoIznQJK2YP7t4Fz5AHaFI&pid=Api&P=0&h=180'
    },
    {
      name: 'BA-impetigo',
      symptoms: 'Impetigo starts as a red, itchy sore. As it heals, a crusty, yellow or “honey-colored” scab forms over the sore.',
      causes: 'Bacteria like Staphylococcus aureus or Streptococcus pyogenes infect the outer layers of your skin, called the epidermis. Your face, arms, and legs are most often affected.',
      image:'https://tse1.explicit.bing.net/th?id=OIP.Y45tyoc53whxyj4JgkaCCwHaF6&pid=Api&P=0&h=180',
    },
    {
      name: 'FU-athlete-foot',
      symptoms: 'Scaly, peeling or cracked skin between the toes,Inflamed skin,Itchiness,burning or stinging especially right after taking off shoes and socks',
      causes: 'Athletefoot is caused by fungi that normally live on the skin, hair, and nails called dermatophytes.',
      image:'https://tse4.explicit.bing.net/th?id=OIP.8JnK08sOcKNkHPWPAN9JYwHaD-&pid=Api&P=0&h=180',
    },
    {
      name: 'FU-nail-fungus',
      symptoms: 'Fungal nail infections may cause nails to become discolored, thick, fragile, or cracked.',
      causes: 'Most fungal nail infections occur as a result of the fungi that cause athletefoot infecting the nails. ',
      image:'https://tse1.explicit.bing.net/th?id=OIP.LGya0VD_qbXALWOTqGjfaQHaEz&pid=Api&P=0&h=180',
    },
    {
      name: 'FU-ringworm',
      symptoms: 'Itchy skin. Ring-shaped rash. Red, scaly, cracked skin. Hair loss.',
      causes: 'Ringworm is a contagious fungal infection caused by common mold-like parasites that live on the cells in the outer layer of your skin.Ringworm often spreads by direct, skin-to-skin contact with an infected person.',
      image:'https://tse1.explicit.bing.net/th?id=OIP.ggbmK6PW3c6XEgZ7AvB77wHaE8&pid=Api&P=0&h=180',
    },
    {
      name: 'PA-cutaneous-larva-migrans',
      symptoms: 'Typically, a serpiginous, erythematous track appears in the skin and is associated with intense itching and mild swelling. Usual locations are the feet, lower legs, and buttocks, but any skin surface that contacts contaminated soil can be affected.',
      causes: 'Cutaneous larva migrans (CLM), also having been termed for the clinical sign of creeping eruption, is an infectious syndrome caused by multiple types of hookworms. This is most commonly transmitted by animal feces depositing eggs in the soil, with larvae entering humans through direct contact with skin.',
      image:'https://tse2.explicit.bing.net/th?id=OIP.FPZY8bzq9gR8h_65xtQhvwHaLV&pid=Api&P=0&h=180',
    },
    {
      name: 'VI-chickenpox',
      symptoms: ' Chickenpox often starts without the classic rash, with a fever, headache, sore throat, or stomachache. These symptoms may last for a few days, with the fever in the 101°–102°F (38.3°–38.8°C) range. ',
      causes: 'Chickenpox is caused by the varicella-zoster virus. It is a member of the herpesvirus family. The same virus also causes shingles in adults.',
      image:'https://tse1.mm.bing.net/th?id=OIP.8YhPxQg5DSqqBYZX9KzW2wAAAA&pid=Api&P=0&h=180',
    },
    {
      name: 'VI-shingles',
      symptoms: 'People can have pain, itching, or tingling in the area where the rash will develop. This can happen several days before the rash appears. People can also have a fever before the rash appears.',
      causes: 'Shingles is caused by varicella-zoster virus (VZV), the same virus that causes chickenpox. Once a person has chickenpox, the virus stays in their body. The virus can reactivate later in life and cause shingles.',
      image:'https://tse3.mm.bing.net/th?id=OIP.yFwnsNpRZPdgdMrgjDE8ewHaFj&pid=Api&P=0&h=180',
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
    <div className='details'  style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" ,height:"680px", width:"1518px"}}>
    <div className="component">
      <h1 className="heading">Skin Diseases</h1>
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
    </div>
    </>
  );
};


export default Details;