
function ImageInput({id, aLabel=false}) {
  return (
    <div>
      
      {aLabel ? <label htmlFor={id} className="form-label">  Изображения</label> : undefined}

      <input
        className="form-control"
        type="file"
        accept="image/*"
        id={id}
        name={id}
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
