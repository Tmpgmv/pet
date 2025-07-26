
function ImageInput({id, required=false, aLabel=false}) {
  return (
    <div>
      
      {aLabel ? <label htmlFor={id} className="form-label">  Изображения</label> : undefined}

      <input
        className="form-control"
        type="file"
        accept="image/png"
        id={id}
        name={id}
        aria-describedby="validationServerPhoto1Feedback"
        required={required}
      />
      <div id="validationServerPhoto1Feedback" className="invalid-feedback">
        Проблема с изображением.
      </div>
    </div>
  );
}

export default ImageInput;
