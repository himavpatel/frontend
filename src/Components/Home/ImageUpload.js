import React, { useState } from 'react';
import './Image.css'
import Navbar from '../Navbar';
const ImageUpload = () => {
  const defaultImageURL = process.env.PUBLIC_URL + '/insert.jpg';
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [index, setIndex] = useState();
  const [label, setLabel] = useState();

  const labels = [
    'BA-cellulitis',
    'BA-impetigo',
    'FU-athlete-foot',
    'FU-nail-fungus',
    'FU-ringworm',
    'PA-cutaneous-larva-migrans',
    'VI-chickenpox',
    'VI-shingles',
  ];

  const handleImageClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.name = 'myImage';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };
    input.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleRemove = () => {
    setSelectedImage(null);
    setPredictions(null);
  };

  const handlePredict = () => {
    if (!selectedImage) return;
    const formData = new FormData();
    formData.append('file', selectedImage);

    fetch('http://localhost:3005/predict', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.predictions && data.predictions.length > 0) {
          let maxIndex = 0;
          let maxValue = data.predictions[0][0];

          for (let i = 1; i < data.predictions[0].length; i++) {
            if (data.predictions[0][i] > maxValue) {
              maxValue = data.predictions[0][i];
              maxIndex = i;
            }
          }

          setPredictions(data.predictions[0]);
          setIndex(maxIndex);
          setLabel(labels[maxIndex]);

          console.log('Label of the prediction is', labels[maxIndex]);
          console.log('Index of the maximum value:', maxIndex);
        } else {
          console.log('No predictions found in the response');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
    <Navbar />
    <h3>Insert Your Image Here..</h3>
    <div className="image-upload-container">
      {selectedImage && (
        <div className="selected-image">
          <img
            alt="not found"
            width={'400px'}
            height={'400px'}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}

      {!selectedImage && (
        <div className="default-image" onClick={handleImageClick}>
          <img
            alt="default"
            width={'400px'}
            height={'400px'}
            src={defaultImageURL}
          />
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      {selectedImage && (
        <div>
          <button className="predict" onClick={handlePredict}>
            Predict
          </button>
          <br></br>
          {predictions && (
            <div className="predictions">
              <h3>Predictions:</h3>
              {predictions.map((prediction, index) => (
                <p key={index}>
                  {labels[index]}: {prediction.toFixed(4)}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export default ImageUpload;
