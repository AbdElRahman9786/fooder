'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export const ImagePacker = () => {
  const imagepick = useRef();
  const [pickedImage, setPickedImage] = useState('');


  function openImagePicker() {
    imagepick.current.click();
  }

  function handlePickImage(event) {
    const file = event.target.files[0];

    if (!file) return;

    


    
  

   
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
     
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <>
      
      {!pickedImage && <p>No image picked</p>}
      {pickedImage && (
        <div className="relative w-[300px] h-[300px] my-4 border rounded-md overflow-hidden">
          <Image
            src={pickedImage}
            alt="Picked image"
            required
            fill
            className="object-cover"
          />
        </div>
      )}
      <input
        type="file"
        className="hidden"
        ref={imagepick}
        onChange={handlePickImage}
        accept="image/*" 
        required
        name="image"
      />
      <button
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" type='button'
        onClick={openImagePicker}
      >
        Choose image
      </button>
    </>
  );
};
