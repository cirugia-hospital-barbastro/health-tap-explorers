import InteractivePosterSection from "./InteractivePosterSection";
import anatomicalIllustration from "@/assets/anatomical-illustration.png";
import checkListIcon from "@/assets/check-list-icon.png";
import thyroidIcon from "@/assets/thyroid-icon.jpg";

const MedicalPoster = () => {
  const preAdmissionData = {
    title: "DÍA DEL INGRESO",
    content: [
      "Valoración de enfermería.",
      "Comprobación de pulsera identificativa, alergias, antecedentes personales, teléfono de contacto.",
      "Toma de constantes.",
      "Entrega del folleto informativo.",
      "En caso de cirugía de colon, entrega del folleto sobre ejercicios de recuperación abdominal.",
      "Comprobación de órdenes pre-quirúrgicas en el Informe de Evaluación Pre-anestésica.",
      "Verificar reserva de hemoderivados si es necesario (pulsera).",
      "Firma de vía clínica y órdenes de tratamiento por el equipo médico.",
      "Programar la dieta:",
      "  • Dieta habitual hasta 6-8 horas antes de la intervención.",
      "  • En cirugía de colon, programar dieta SIN RESIDUOS hasta 6-8 horas antes de la intervención y administración de laxantes y antibióticos vía oral en función del tratamiento prescrito.",
      "Si se programa tratamiento con hbpm NO administrarla en las 12 horas previas a la intervención.",
    ],
  };

  const interventionDayData = {
    title: "DÍA DE LA INTERVENCIÓN",
    content: [
      "Higiene general con jabón antiséptico",
      "Retirada de prendas de vestir",
      "Retirada de joyas, piercings",
      "Retirada de objetos metálicos",
      "Ayunas desde medianoche, excepto fármacos con un sorbo de agua indicados (ni agua a partir de las 8h)",
      "El cirujano os dará indicaciones concretas durante una visita la tarde anterior al ingreso, o si ya se encuentra ingresado o si recomendará antibioterapia pre o post ingreso",
      "Completar las listas de verificación de seguridad del paciente previo ingreso",
      "Completar formulario Check-list",
    ],
  };

  const postOperativeData = {
    title: "ACTUACIONES EN EL POST-OPERATORIO INMEDIATO",
    content: [
      "Toma de constantes vitales, RVM",
      "Vigilancia de náuseas",
      "Control de medicación administrada vía URPA",
      "Control de drenajes (comprobar la validez de la URPA)",
      "Valorar primera micción, si no micción espontánea en las primeras 6-8 horas consultar con anestesia de guardia",
      "Iniciar tolerancia VO y movilización según orden médica, comunicando con TOBE",
    ],
  };

  const procedures = [
    {
      title: "TIROIDECTOMÍA",
      content: [
        "Intervención para extraer total o parcialmente la glándula tiroides",
        "Requiere anestesia general",
        "Monitorización postoperatoria de calcio y hormona paratiroidea",
        "Control de voz y signos de hematoma cervical",
      ],
      icon: thyroidIcon,
    },
    {
      title: "RAMA - VP TRONCO CONTRALATERAL",
      content: [
        "Antibioterapia a la llamada de quirófano",
        "Vigilancia estrecha de la zona intervenida",
        "Control de sangrado",
      ],
    },
    {
      title: "COLECISTECTOMÍA",
      content: [
        "VP en EE España",
        "Antibioterapia profiláctica a la llamada de quirófano",
        "Control del sitio quirúrgico",
        "Movilización precoz",
      ],
    },
    {
      title: "APENDICECTOMÍA",
      content: [
        "Intervención urgente o programada",
        "Antibioterapia según protocolo",
        "Vigilancia de signos de infección",
        "Iniciar tolerancia oral progresiva",
      ],
    },
    {
      title: "HERNIA/EVENTRACIÓN",
      content: [
        "Si hernia Inguinal/Recurrente, TCO, estudio VP en bola",
        "En cirugía abierta, estudio VP en bola contralateral",
        "Si hernia estrangulada, antibioterapia",
        "Control del sitio quirúrgico",
      ],
    },
    {
      title: "ESPLENECTOMÍA",
      content: [
        "Extirpación del bazo",
        "Vacunación previa recomendada",
        "Control hematológico postoperatorio",
        "Vigilancia de complicaciones infecciosas",
      ],
    },
    {
      title: "CIRUGÍA GÁSTRICA",
      content: [
        "VP en EE España???",
        "Medias neumáticas",
        "Protocolo de manejo nutricional específico",
        "Control de náuseas y vómitos",
      ],
    },
    {
      title: "CIRUGÍA COLORRECTAL",
      content: [
        "Preparación intestinal según protocolo",
        "Antibioterapia profiláctica",
        "Vestido antiembólico",
        "Medias neumáticas (medias con inyección de aire en rect)",
      ],
    },
    {
      title: "CIRUGÍA ANAL",
      content: [
        "Procedimientos proctológicos diversos",
        "Control del dolor postoperatorio",
        "Cuidados locales específicos",
        "Dieta y medidas de higiene",
      ],
    },
    {
      title: "TOMA DE MUESTRAS PARA BIOPSIA",
      content: [
        "Procedimiento diagnóstico",
        "Correcta identificación de la muestra",
        "Envío al laboratorio de anatomía patológica",
        "Seguimiento de resultados",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--gradient-soft)] py-6 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary mb-4 tracking-tight">
            CUIDADOS PRE-POST EN CIRUGÍA PROGRAMADA
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-primary/80">
            CIRUGÍA GENERAL Y DIGESTIVA del HOSPITAL DE BARBASTRO
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4">
            Haz clic en cada sección para ver más información
          </p>
        </div>

        {/* Pre and Post Admission Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 md:mb-12">
          <InteractivePosterSection
            title={preAdmissionData.title}
            content={preAdmissionData.content}
            variant="pink"
            icon={checkListIcon}
          />
          <InteractivePosterSection
            title={interventionDayData.title}
            content={interventionDayData.content}
            variant="pink"
          />
        </div>

        {/* Main Content with Anatomical Illustration */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8 md:mb-12">
          {/* Left Column */}
          <div className="space-y-6">
            {procedures.slice(0, 5).map((procedure, index) => (
              <InteractivePosterSection
                key={index}
                title={procedure.title}
                content={procedure.content}
                variant="green"
                icon={procedure.icon}
              />
            ))}
          </div>

          {/* Center - Anatomical Illustration */}
          <div className="flex items-center justify-center lg:col-span-1">
            <div className="relative w-full max-w-md aspect-[2/3] rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] bg-gradient-to-b from-primary/10 to-primary/5">
              <img
                src={anatomicalIllustration}
                alt="Ilustración anatómica del sistema digestivo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {procedures.slice(5).map((procedure, index) => (
              <InteractivePosterSection
                key={index}
                title={procedure.title}
                content={procedure.content}
                variant="green"
                icon={procedure.icon}
              />
            ))}
          </div>
        </div>

        {/* Post-Operative Section */}
        <InteractivePosterSection
          title={postOperativeData.title}
          content={postOperativeData.content}
          variant="pink"
          className="mb-8"
        />

        {/* Footer */}
        <div className="text-center text-sm md:text-base text-muted-foreground mt-12">
          <p>Material informativo para personal sanitario • Servicio de Salud Pública</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalPoster;
