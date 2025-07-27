import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Main from "../New/Main"; // Reuse the form
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_PETS_URL } from "../../../general/constants";
import $ from "jquery";

function EditPet() {
  const { petId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    $.ajax({
      url: `${API_PETS_URL}/${petId}`,
      method: "GET",
      dataType: "json",
    })
      .done((dataJson) => {
        const pet = dataJson.data.pet;
        setFormData({
          id: pet.id,
          kind: pet.kind,
          mark: pet.mark,
          district: pet.district,
          description: pet.description,
          phone: pet.phone,
          email: pet.email,
          name: pet.name,
          photo0: pet.photos[0],
          photo1: pet.photos[1],
          photo2: pet.photos[2],
        });
      })
      .fail(() => {
        navigate("/error");
      });
  }, [petId]);

  if (!formData) return <p>Загрузка...</p>;

  return (
    <>
      <Header />
      <Main formId="edit-post-form" defaultData={formData} isEditMode={true} />
      <Footer />
    </>
  );
}

export default EditPet;