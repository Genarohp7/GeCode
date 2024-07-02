import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.companyName) {
      valid = false;
      formErrors.companyName = "Nombre de empresa es requerido";
    }
    if (!formData.email) {
      valid = false;
      formErrors.email = "Correo es requerido";
    }
    if (!formData.phone) {
      valid = false;
      formErrors.phone = "Teléfono es requerido";
    }
    if (!formData.message) {
      valid = false;
      formErrors.message = "Mensaje es requerido";
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Enviar el correo con la información del formulario
      emailjs
        .send(
          "service_0wkvhk2", // Reemplaza con tu Service ID de EmailJS
          "template_vd2bvkw", // Reemplaza con tu Template ID de EmailJS
          formData,
          "7j2rp-8eJJRoNlCUs" // Reemplaza con tu User ID de EmailJS
        )
        .then((response) => {
          console.log("Correo enviado:", response.status, response.text);

          // Enviar el correo de respuesta automática
          emailjs
            .send(
              "service_0wkvhk2", // Reemplaza con tu Service ID de EmailJS
              "template_vyfcurd", // Reemplaza con tu Template ID de la respuesta en EmailJS
              { email: formData.email }, // Solo necesitamos el email del usuario
              "7j2rp-8eJJRoNlCUs" // Reemplaza con tu User ID de EmailJS
            )
            .then((response) => {
              console.log(
                "Respuesta automática enviada:",
                response.status,
                response.text
              );
            })
            .catch((error) => {
              console.error("Error al enviar la respuesta automática:", error);
            });

          setSuccessMessage("¡Información enviada exitosamente!");
          setFormData({ companyName: "", email: "", phone: "", message: "" });
          setErrors({});
        })
        .catch((error) => {
          console.error("Error al enviar el correo:", error);
        });
    }
  };

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">Nombre de Empresa:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          {errors.companyName && (
            <span className="error">{errors.companyName}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Enviar Información</button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </section>
  );
};

export default Contact;
