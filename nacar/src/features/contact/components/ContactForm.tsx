import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../shared/hooks/useFetch";
import { isValidEmail } from "../../shared/utils/validators";
import type { Apartment } from "../../apartments/types/Apartments";
import type { ContactFormData } from "../types/Contact";
import "./ContactForm.css";

const MIN_MESSAGE_LENGTH = 20;

const EMPTY_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  propertyId: "",
  message: "",
};

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const propertyFromDetail = searchParams.get("propiedad") ?? "";

  const { data: apartments, isLoading } = useFetch<Apartment[]>(
    "/data/apartments.json",
  );

  const [isSent, setIsSent] = useState(false);
  const successTitleRef = useRef<HTMLHeadingElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({ defaultValues: EMPTY_FORM });

  // useWatch vuelve a renderizar con cada letra para mostrar el contador del mensaje
  const message = useWatch({ control, name: "message" });
  const hasMinLength = message.length >= MIN_MESSAGE_LENGTH;

  
  useEffect(() => {
    if (apartments && propertyFromDetail) {
      setValue("propertyId", propertyFromDetail);
    }
  }, [apartments, propertyFromDetail, setValue]);

  useEffect(() => {
    if (isSent) {
      successTitleRef.current?.focus();
    }
  }, [isSent]);

 
  function onSubmit() {
    setIsSent(true);
    reset(EMPTY_FORM);
  }

  if (isSent) {
    return (
      <div className="contact-form contact-form--sent">
        <h2 ref={successTitleRef} tabIndex={-1}>
          Solicitud recibida
        </h2>
        <p>
          Gracias por escribirnos. Este envío es simulado: los datos no se
          enviaron a ningún servidor.
        </p>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => setIsSent(false)}
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <h2>Solicite información o una visita</h2>
      <p>Complete el formulario y nos pondremos en contacto con usted.</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="contact-form__field">
          <label htmlFor="name">Nombre completo</label>
          <input
            id="name"
            type="text"
            placeholder="Digite su nombre"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", {
              required: "El nombre es obligatorio",
            })}
          />
          {errors.name && (
            <span className="contact-form__error">{errors.name.message}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "El correo es obligatorio",
              validate: (value) =>
                isValidEmail(value) || "Digite un correo válido",
            })}
          />
          {errors.email && (
            <span className="contact-form__error">{errors.email.message}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">Teléfono (opcional)</label>
          <input
            id="phone"
            type="tel"
            placeholder="8888-8888"
            {...register("phone")}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="propertyId">Apartamento de interés</label>
          <select
            id="propertyId"
            aria-invalid={errors.propertyId ? "true" : "false"}
            {...register("propertyId", {
              required: "Seleccione un apartamento",
            })}
          >
            <option value="">
              {isLoading ? "Cargando apartamentos..." : "Seleccione un apartamento"}
            </option>
            {(apartments ?? []).map((apartment) => (
              <option key={apartment.id} value={apartment.id}>
                {apartment.name} · {apartment.location}
              </option>
            ))}
          </select>
          {errors.propertyId && (
            <span className="contact-form__error">
              {errors.propertyId.message}
            </span>
          )}
        </div>

        <div className="contact-form__field contact-form__field--wide">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            placeholder="Cuéntenos qué desea saber..."
            rows={5}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-counter"
            {...register("message", {
              required: "El mensaje es obligatorio",
              minLength: {
                value: MIN_MESSAGE_LENGTH,
                message: `El mensaje debe tener al menos ${MIN_MESSAGE_LENGTH} caracteres`,
              },
            })}
          />
          <span
            id="message-counter"
            className={
              hasMinLength
                ? "contact-form__counter contact-form__counter--ok"
                : "contact-form__counter"
            }
          >
            {message.length} / {MIN_MESSAGE_LENGTH} caracteres mínimos
          </span>
          {errors.message && (
            <span className="contact-form__error">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          className="btn btn--primary btn--arrow contact-form__submit"
          type="submit"
        >
          Enviar solicitud
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
