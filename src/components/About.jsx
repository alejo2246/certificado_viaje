import CardStep from "./CardStep";
import { useInView } from "react-intersection-observer";
import "animate.css";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activar una vez cuando el componente entra en la vista
    threshold: 0.2, // Porcentaje de visibilidad del elemento para considerarse "en la vista"
  });
  return (
    <section
      className={`w-full mx-auto ${
        inView
          ? "animate__animated animate__fadeInUp animate__delay-1s"
          : "animate__animated animate__fadeOut"
      }`}
      id="about"
      style={{ paddingTop: "20px" }}
    >
      <div className="text-center" ref={ref}>
        <h1 className="text-4xl font-semibold mb-2">
          ¿Cómo funciona tu código de viaje?
        </h1>
        <p className="text-gray-500">
          Válido solo para clientes con un código de Vip Vacaciones.
        </p>
      </div>
      <div
        className="flex justify-center items-center flex-wrap p-5 flex-row gap-4 flex-1"
        style={{ height: "680px" }}
      >
        <CardStep
          step={1}
          subtitle={"Verifica tu código"}
          image={"/img/iconinputpass.png"}
          description={
            "Utiliza tu código para verificar que eres cliente activo. Si tu código es válido, podrás ver el tiempo restante de activación y el producto adquirido. Además, tendras la opción de generar tu certificado de viaje."
          }
        />

        <CardStep
          step={2}
          subtitle={"Genera tu certificado"}
          image={"/img/documenticon.png"}
          description={
            "Cuando generas tu certificado de viaje, estás activando una reserva con VIP VACACIONES para el destino presente en tu código de viaje. Este certicado es personal. Recibirás una notificación con las vías de comunicación con nuestro departamento de reservas, donde podrás activar tu reserva. Una vez generado el certificado, tú código de viaje deja de ser válido."
          }
        />

        <CardStep
          step={3}
          subtitle={"Reserva tu viaje"}
          image={"/img/reservaicon.png"}
          description={
            "Nuestros certificados tienen un tiempo de validez, generalmente de un año o más, asegúrate de realizar tu reserva antes del vencimiento de la fecha presente en el certificado."
          }
        />
      </div>
    </section>
  );
};

export default About;
