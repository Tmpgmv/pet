import {attr} from "../general/debugFunctions";


function ImageInput({
                      id,
                      required = false, // Только photo1 обязателено. Но есть еще photo2, photo3.
                      aLabel = false,
                      defaultValue = null,
                    }) {

  // Debug {
    required = attr({debugValue: false, prodValue: required});
    var accept = attr({debugValue: "*", prodValue: "image/png"});
  // } Debug

  return (
    <div>
      {aLabel ? (
        <label htmlFor={id} className="form-label">
          Изображения
        </label>
      ) : undefined}

      <input
        className="form-control"
        type="file"
        accept={accept}
        id={id}
        name={id}
        aria-describedby={`${id}Error`}
        required={required}
        defaultValue={defaultValue ? defaultValue : undefined}
      />
      <div id={`${id}Error`} className="invalid-feedback">
        Проблема с изображением.
      </div>
    </div>
  );
}

export default ImageInput;
