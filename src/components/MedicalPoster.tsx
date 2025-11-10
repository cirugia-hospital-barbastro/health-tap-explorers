import InteractivePosterSection from "./InteractivePosterSection";
import anatomicalIllustration from "@/assets/anatomical-illustration.png";
import checkListIcon from "@/assets/check-list-icon.png";
import thyroidIcon from "@/assets/thyroid-icon.jpg";
import breastIcon from "@/assets/breast-icon.jpg";
import calendarIcon from "@/assets/calendar-icon.jpg";
import gallbladderIcon from "@/assets/gallbladder-icon.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      "Higiene general con esponja de clorhexidina.",
      "Si se ha programado cirugía laparoscópica, limpieza del ombligo con alcohol.",
      "Rasurado si es necesario con maquinilla eléctrica.",
      "Retirada de joyas, prótesis dentales, audífonos, gafas, piercings, sensores de glucemia, …",
      "Administrar premedicación, si procede.",
      "Toma de constantes y registro antes del traslado a unidad quirúrgica (TA, FC, Sat O2, Tª y glucemia capilar en pacientes diabéticos)",
      "Canalizar vía periférica (preferentemente 18G), según procedimiento con perfusión de Isofundin® de mantenimiento.",
      "Completar formulario Check-list quirúrgico.",
    ],
  };

  const postOperativeData = {
    title: "LLEGADA DE U.R.P.A.",
    content: [
      "Toma de constantes vitales, EVA.",
      "Vigilancia de apósitos. Si está ligeramente manchado, marcar con rotulador y vigilar progresión.",
      "Control de drenajes (cantidad, aspecto, vacío del receptal), SNG y ostomías si se da el caso. Ccomprobar lo cuantificado en URPA.",
      "Control de medicación administrada en URPA (horario y dosis de la última administración) y del tratamiento post-operatorio pautado.",
      "Vigilancia de la primera micción. Si el paciente no realiza micción espontánea en las primeras 6-8 horas, consultar a cirujanos de guardia para sondaje vesical.",
      "Iniciar tolerancia VO y movilización según orden médica, comunicación con TCAE y registro de horarios en díptico informativo.",
      "Si se indica tratamiento con hbpm. NO administrar hasta pasadas 12 horas de la intervención.",
      "Si porta ELASTÓMERO, mantener oxigenoterapia durante su curso.",
      "Si porta CATÉTER EPIDURAL (consultar protocolo específico):",
      "  • Comprobar sellado del apósito y fijación correcta.",
      "  • NUNCA administrar otra medicación por esta vía.",
      "  • Comprobar correcta programación de bomba de perfusión continua.",
      "  • Vigilar pérdida de movilidad de extremidades o sensación de pesadez excesiva.",
      "  • No manipular el catéter.",
      "  • En caso de mal control del dolor o incidencias con el catéter, avisar al anestesista de guardia.",
      "  • Mantener oxigenoterapia durante su curso.",
    ],
  };

  const procedures = [
    {
      title: "TIROIDECTOMÍA",
      content: [
        "ANTES DE LA INTERVENCIÓN:",
        "Canalizar vía venosa. El brazo donde colocar la vía es indiferente.",
        "Administración de dexametasona y antibiótico a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "DESPUÉS DE LA INTERVENCIÓN:",
        "Paciente en posición semifowler o fowler alta (30-45º).",
        "Reposo de la voz. Vigilar signos de hematoma cervical.",
        "Si se pauta perfusión IV de Calcio, comprobar ritmo de infusión en BPC",
        "Con frecuencia se solicita analítica de sangre para control de calcio y PTH a la mañana siguiente de la intervención (comprobar peticiones).",
        "Monitorizar la diuresis durante las primeras 24h.",
        "Evitar aplicar povidona yodada al realizar las curas.",
      ],
      icon: thyroidIcon,
    },
    {
      title: "CIRUGÍA DE MAMA",
      content: [
        "ANTES DE LA INTERVENCIÓN:",
        "Canalizar vía venosa en lado contrario al de la intervención.",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "DESPUÉS DE LA INTERVENCIÓN:",
        "No tomar constantes, realizar extracciones ni maniobras invasivas en el brazo de la mama intervenida.",
        "Mantener sujetador post-quirúrgico",
      ],
      icon: breastIcon,
    },
    {
      title: "COLECISTECTOMÍA",
      content: [
        "ANTES DE LA INTERVENCIÓN:",
        "Canalizar vía venosa en brazo izquierdo.",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "DESPUÉS DE LA INTERVENCIÓN:",
        "Monitorización de la diuresis durante las primeras 24 horas",
      ],
      icon: gallbladderIcon,
    },
    {
      title: "APENDICECTOMÍA",
      content: [
        "CIRUGÍA ABIERTA:",
        "Canalizar vía venosa en brazo izquierdo.",
        "",
        "CIRUGÍA LAPAROSCÓPICA:",
        "Canalizar vía periférica en brazo derecho.",
        "",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito)",
      ],
    },
    {
      title: "HERNIOPLASTIA-EVENTROPLASTIA",
      content: [
        "CIRUGÍA ABIERTA:",
        "Canalizar vía venosa en el lado contrario a la intervención.",
        "",
        "CIRUGÍA LAPAROSCÓPICA (TEP - ETEP):",
        "Canalizar vía venosa en el mismo lado de la intervención.",
        "",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
      ],
    },
    {
      title: "ESPLENECTOMÍA",
      content: [
        "ANTES DE LA INTERVENCIÓN:",
        "Canalizar vía venosa en brazo izquierdo.",
        "Colocar medias antitrombóticas elásticas.",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "DESPUÉS DE LA INTERVENCIÓN:",
        "Control de diuresis",
      ],
    },
    {
      title: "CIRUGÍA GÁSTRICA",
      content: [
        "ANTES DE LA INTERVENCIÓN:",
        "Canalizar vía venosa. El brazo donde colocar la vía es indiferente.",
        "Colocar medias antitrombóticas neumáticas.",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "DESPUÉS DE LA INTERVENCIÓN:",
        "Control de diuresis cada 6 horas",
      ],
    },
    {
      title: "CIRUGÍA DE COLON",
      content: [
        "ANTES DE LA INTERVENCIÓN:",
        "Canalizar vía venosa.",
        "En brazo izquierdo de forma general.",
        "En brazo derecho en hemicolectomía derecha.",
        "Colocar medias antitrombóticas.",
        "Elásticas de forma general.",
        "Neumáticas en resección anterior de recto.",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "DESPUÉS DE LA INTERVENCIÓN:",
        "Control de diuresis cada 6 horas.",
        "Si se realiza COLOSTOMÍA/ILEOSTOMÍA: vigilancia e inicio de cuidados según protocolo",
      ],
    },
    {
      title: "CIRUGÍA ANO-RECTAL",
      content: [
        "Canalizar vía venosa. El brazo donde colocar la vía es indiferente.",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
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
            icon={calendarIcon}
          />
        </div>

        {/* Main Content - Procedures */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 md:mb-12">
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

        {/* Discharge Recommendations Section */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/20 rounded-2xl p-6 md:p-8 shadow-lg border-2 border-pink-200 dark:border-pink-800 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            RECOMENDACIONES AL ALTA
          </h3>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="tiroidectomia" className="border-pink-200 dark:border-pink-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                TIROIDECTOMÍA
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 space-y-2">
                <p>Contenido de recomendaciones al alta para tiroidectomía.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mama" className="border-pink-200 dark:border-pink-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                CIRUGÍA DE MAMA
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 space-y-2">
                <p>Contenido de recomendaciones al alta para cirugía de mama.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="colecistectomia" className="border-pink-200 dark:border-pink-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                COLECISTECTOMÍA
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 space-y-2">
                <p>Contenido de recomendaciones al alta para colecistectomía.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="apendicectomia" className="border-pink-200 dark:border-pink-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                APENDICECTOMÍA
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 space-y-2">
                <p>Contenido de recomendaciones al alta para apendicectomía.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hernioplastia" className="border-pink-200 dark:border-pink-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                HERNIOPLASTIA-EVENTROPLASTIA
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 space-y-2">
                <p>Contenido de recomendaciones al alta para hernioplastia-eventroplastia.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="esplenectomia" className="border-pink-200 dark:border-pink-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                ESPLENECTOMÍA
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 space-y-2">
                <p>Contenido de recomendaciones al alta para esplenectomía.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gastrica" className="border-pink-200 dark:border-pink-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                CIRUGÍA GÁSTRICA
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 space-y-2">
                <p>Contenido de recomendaciones al alta para cirugía gástrica.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="colon" className="border-pink-200 dark:border-pink-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                CIRUGÍA DE COLON
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 space-y-2">
                <p>Contenido de recomendaciones al alta para cirugía de colon.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="anorectal" className="border-pink-200 dark:border-pink-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-primary/80">
                CIRUGÍA ANO-RECTAL
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 space-y-2">
                <p>Contenido de recomendaciones al alta para cirugía ano-rectal.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer */}
        <div className="text-center text-sm md:text-base text-muted-foreground mt-12">
          <p>Material informativo para personal sanitario • Servicio de Salud Pública</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalPoster;
