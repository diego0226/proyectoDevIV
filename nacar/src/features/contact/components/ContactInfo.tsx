import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h1>Conversemos sobre su próximo apartamento</h1>
      <p>
        Cuéntenos qué apartamento le interesa y le ayudamos a coordinar una
        visita privada o a resolver sus dudas, sin compromiso.
      </p>

      <div className="contact-info__details">
        <p>
          <strong>Atención</strong>
          <br />
          Asesoría personalizada desde la primera consulta hasta la firma
        </p>
        <p>
          <strong>Visitas</strong>
          <br />
          Recorridos privados coordinados según su horario
        </p>
        <p>
          <strong>Ubicación</strong>
          <br />
          Costa Rica, del Valle Central a las playas del Pacífico
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
