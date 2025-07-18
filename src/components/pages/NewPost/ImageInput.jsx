import React from "react";

function ImageInput({aLabel=false}) {
  return (
    <div>
      
      {aLabel ? <label htmlFor="formPhoto1" className="form-label">  Изображения</label> : undefined}

      <input
        className="form-control is-invalid"
        type="file"
        accept="image/*"
        id="formPhoto1"
        name="photo1"
        aria-describedby="validationServerPhoto1Feedback"
        required=""
      />
      <div id="validationServerPhoto1Feedback" className="invalid-feedback">
        Проблема с изображением.
      </div>
    </div>
  );
}

export default ImageInput;
