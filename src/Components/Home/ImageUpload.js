// import React, { useState } from 'react'
// import './Image.css' // Import the CSS

// const ImageUpload = () => {
//   const defaultImageURL = process.env.PUBLIC_URL + '/insert.jpg' // Replace with the actual path
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [predictions, setPredictions] = useState(null)

//   const handleImageClick = () => {
//     const input = document.createElement('input')
//     input.type = 'file'
//     input.name = 'myImage'
//     input.accept = 'image/*'
//     input.onchange = (event) => {
//       const file = event.target.files[0]
//       setSelectedImage(file)
//     }
//     input.click()
//   }

//   const handleImageChange = (event) => {
//     const file = event.target.files[0]
//     setSelectedImage(file)
//   }

//   const handleRemove = () => {
//     setSelectedImage(null)
//     setPredictions(null) // Clear predictions when removing image
//   }

//   const handlePredict = () => {
//     if (!selectedImage) return
//     const formData = new FormData()
//     formData.append('file', selectedImage)
//     fetch('http://localhost:3005/predict', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.predictions)
//         const arr = data.predictions.map((prediction, index) => {
//           return prediction
//         })
//         console.log(arr)
//         const maxValue = Math.max(...arr)
//         console.log(maxValue)
//         setPredictions(data.predictions)
//       })
//       .catch((error) => console.error('Error:', error))
//   }

//   return (
//     <div className="image-upload-container">
//       {selectedImage && (
//         <div className="selected-image">
//           <img
//             alt="not found"
//             width={'400px'}
//             height={'400px'}
//             src={URL.createObjectURL(selectedImage)}
//           />
//           <br />
//           <button onClick={handleRemove}>Remove</button>
//         </div>
//       )}

//       {!selectedImage && (
//         <div className="default-image" onClick={handleImageClick}>
//           <img
//             alt="default"
//             width={'400px'}
//             height={'400px'}
//             src={defaultImageURL}
//           />
//         </div>
//       )}

//       <br />
//       <br />

//       <input
//         type="file"
//         name="myImage"
//         onChange={handleImageChange}
//         style={{ display: 'none' }}
//       />

//       {selectedImage && (
//         <div >
//           <button className="predict" onClick={handlePredict}>Predict</button>
//           {predictions && (
//             <div className="predictions">
//               <h3>Predictions:</h3>
//               <ul>
//                 {predictions.map((prediction, index) => (
//                   <li key={index}>{prediction}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           <br></br>
//           <br></br>
//           Skin Disease Class: FU-ringworm
//           <br></br>
          
//         </div>
//       )}
     
//     </div>
//   )
// }

// export default ImageUpload

import React, { useState } from 'react'


const ImageUpload = () => {
  const defaultImageURL = process.env.PUBLIC_URL + '/insert.jpg' // Replace with the actual path
  const [selectedImage, setSelectedImage] = useState(null)
  const [predictions, setPredictions] = useState(null)
  const [index, setIndex] = useState()
  const [lable, setLabel] = useState()

  const handleImageClick = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.name = 'myImage'
    input.accept = 'image/*'
    input.onchange = (event) => {
      const file = event.target.files[0]
      setSelectedImage(file)
    }
    input.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  const handleRemove = () => {
    setSelectedImage(null)
    setPredictions(null) // Clear predictions when removing image
  }

   const handlePredict = () => {
     if (!selectedImage) return
     const formData = new FormData()
     formData.append('file', selectedImage)
     fetch('http://localhost:3005/predict', {
       method: 'POST',
       body: formData,
     })
       .then((response) => response.json())
       .then((data) => {
         if (data.predictions && data.predictions.length > 0) {
           let maxIndex = 0
           let maxValue = data.predictions[0][0]
           for (let i = 1; i < data.predictions[0].length; i++) {
             if (data.predictions[0][i] > maxValue) {
               maxValue = data.predictions[0][i]
               maxIndex = i
             }
           }
           let lable = ''
           if (maxIndex == 0) {
             lable = 'BA-cellulities'
           } else if (maxIndex == 1) {
             lable = 'BA-impetigo'
           } else if (maxIndex == 2) {
             lable = 'FU-athlete-foot'
           } else if (maxIndex == 3) {
             lable = 'FU-nail-fungus'
           } else if (maxIndex == 4) {
             lable = 'FU-ringworn'
           } else if (maxIndex == 5) {
             lable = 'PA-cutaneous-larva-migrans'
           } else if (maxIndex == 6) {
             lable = 'VI-chicken-pox'
           } else if (maxIndex == 7) {
             lable = 'VI-shingles'
           } 
           console.log('Lable of the predection is ', lable)
           console.log('Index of the maximum value:', maxIndex)
           setPredictions(data.predictions[0])
           setIndex(maxIndex)
           setLabel(lable)
         } else {
           console.log('No predictions found in the response')
         }
       })
       .catch((error) => console.error('Error:', error))
   }
  // Update label assignment based on model's output index
  
// const handlePredict = () => {
//   if (!selectedImage) return;
//   const formData = new FormData();
//   formData.append('file', selectedImage);
//   fetch('http://localhost:3005/predict', {
//     method: 'POST',
//     body: formData,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.predictions && data.predictions.length > 0) {
//         const maxIndex = data.predictions.indexOf(Math.max(...data.predictions));
//         let label = '';
//         switch (maxIndex) {
//           case 0:
//             label = 'BA-cellulitis';
//             break;
//           case 1:
//             label = 'BA-impetigo';
//             break;
//           case 2:
//             label = 'FU-athlete-foot';
//             break;
//           case 3:
//             label = 'FU-nail-fungus';
//             break;
//           case 4:
//             label = 'FU-ringworm';
//             break;
//           case 5:
//             label = 'PA-cutaneous-larva-migrans';
//             break;
//           case 6:
//             label = 'VI-chicken-pox';
//             break;
//           case 7:
//             label = 'VI-shingles';
//             break;
//           default:
//             label = 'Unknown';
//         }
//         console.log('Label of the prediction:', label);
//         console.log('Index of the maximum value:', maxIndex);
//         setPredictions(data.predictions);
//         setIndex(maxIndex);
//         setLabel(label);
//       } else {
//         console.log('No predictions found in the response');
//       }
//     })
//     .catch((error) => console.error('Error:', error));
// };


  return (
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
          <button onClick={handlePredict}>Predict</button>
          {predictions && (
            <div className="predictions">
              <h3>Predictions:</h3>
              <ul>
                {/* {predictions.map((prediction, index) => (
                  <li key={index}>{prediction}</li>
                ))} */}
                {lable}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ImageUpload
