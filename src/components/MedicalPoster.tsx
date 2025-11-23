import InteractivePosterSection from "./InteractivePosterSection";
import anatomicalIllustration from "@/assets/anatomical-illustration.png";
import checkListIcon from "@/assets/check-list-icon.png";
import hospitalIcon from "@/assets/hospital-icon.jpg";
import thyroidIcon from "@/assets/thyroid-icon.jpg";
import breastIcon from "@/assets/breast-icon.jpg";
import calendarIcon from "@/assets/calendar-icon.jpg";
import gallbladderIcon from "@/assets/gallbladder-icon.jpg";
import appendixIcon from "@/assets/appendix-icon.jpg";
import herniaIcon from "@/assets/hernia-icon.jpg";
import stomachIcon from "@/assets/stomach-icon.jpg";
import spleenIcon from "@/assets/spleen-icon.jpg";
import colonIcon from "@/assets/colon-icon.jpg";
import anorectalIcon from "@/assets/anorectal-icon.jpg";
import urpaIcon from "@/assets/urpa-icon.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MedicalPoster = () => {
  const preAdmissionData = {
    title: "INGRESO",
    content: [
      "Valoración de enfermería, pulsera identificativa, comprobación de alergias, antecedentes personales, tratamiento domiciliario, teléfono de contacto.",
      "Toma de constantes y registro en historia clínica.",
      "Entrega de díptico informativo sobre Cirugía Programada.",
      "En cirugía de colon, entrega de folleto ejercicios recuperación abdominal.",
      "Comprobación de órdenes pre-quirúrgicas en Informe de Evaluación Pre-anestésica (formularios). Verificar suspensión de anticoagulantes, antidiabéticos, … .",
      "Verificar en el parte de quirófano reserva de hemoderivados. En caso de estar indicada, el paciente deberá llevar pulsera de reserva de productos hemoderivados.",
      "Firma de vía clínica y órdenes de tratamiento por el equipo médico.",
      "Si se indica tratamiento con hbpm. NO se debe administrar en las 12 horas previas a la intervención quirúrgica.",
      "Programar dieta para preparación intestinal:",
      "  • Dieta habitual hasta 6-8 horas antes.",
      "  • En cirugía de colon, se programará dieta sin residuos hasta 6-8 horas antes, y además se administrarán laxantes y antibióticos VO según órdenes médicas.",
      "  • En todos los casos, se indicará dieta absoluta 6-8 horas antes de la intervención.",
    ],
  };

  const interventionDayData = {
    title: "PREPARACIÓN",
    content: [
      "Higiene general con esponja impregnada con clorhexidina.",
      "Si se programa cirugía laparoscópica, limpieza del ombligo con alcohol.",
      "Higiene bucal.",
      "En caso de ser necesario rasurar la zona quirúrgica, se hará inmediatamente antes de la cirugía y con rasuradora eléctrica.",
      "Retirada de objetos metálicos, joyas, prótesis dentales, audífonos, piercings, sensores de glucemia, …",
      "Retirada de maquillaje y esmalte de uñas.",
      "Administrar pre-medicación si está indicado.",
      "El paciente será trasladado a la zona quirúrgica únicamente vestido con un camisón del hospital (no llevará ropa interior).",
      "Toma de constantes vitales (TA, FC, Sat O2, Tª y glucemia capilar en pacientes diabéticos) y registro en historia clínica.",
      "Canalizar vía venosa (preferentemente 18G) según procedimiento con perfusión de Isofundin® de mantenimiento. El lugar donde canalizar la vía, dependerá del tipo de intervención.",
      "Completar formulario Check-list quirúrgico.",
    ],
  };

  const postOperativeData = {
    title: "LLEGADA DE U.R.P.A.",
    content: [
      "Toma de constantes vitales, EVA.",
      "Vigilancia de apósitos. Si está ligeramente manchado, marcar con rotulador y vigilar progresión",
      "Control de drenajes (cantidad, aspecto, conservación del vacío del receptal), SNG y ostomías si se da el caso. Comprobar lo cuantificado en URPA.",
      "Impresión de órdenes de tratamiento postoperatorio.",
      "Control de medicación administrada en URPA (horario y dosis de la última administración).",
      "Vigilancia de la primera micción. Si el paciente no realiza micción espontánea en las primeras 6-8 horas, consultar con cirujano de guardia para sondaje vesical.",
      "Iniciar tolerancia VO y movilización según orden médica. Comunicación con TCAE y registro de horarios en díptico informativo.",
      "Si se indica tratamiento con hbpm. NO administrar hasta pasadas 12 horas de la intervención.",
      "Si porta ELASTÓMERO, mantener oxigenoterapia durante su curso.",
      "Si porta CATÉTER EPIDURAL (consultar protocolo específico):",
      "- Comprobar sellado del apósito y fijación correcta.",
      "- NUNCA administrar otra medicación por esta vía.",
      "- Comprobar correcta programación de bomba de perfusión continua.",
      "- Vigilar pérdida de movilidad de extremidades o sensación de pesadez excesiva.",
      "- No manipular el catéter.",
      "- En caso de mal control del dolor o incidencias con el catéter, comentar con anestesista de guardia.",
      "- Mantener oxigenoterapia durante su curso.",
    ],
    icon: urpaIcon,
  };

  const procedures = [
    {
      title: "TIROIDECTOMÍA",
      content: [
        "ANTES DE LA INTERVENCIÓN:",
        "- Canalizar vía venosa. El brazo donde colocar la vía es indiferente",
        "- Administración de dexametasona y antibiótico a la llamada de quirófano (según tratamiento prescrito)",
        "",
        "POST-OPERATORIO:",
        "- Monitorizar diuresis durante las primeras 24 horas",
        "- Paciente en posición semifowler o fowler alta (30-45º), para reducir el edema",
        "- Evitar la extensión excesiva del cuello.",
        "- Reposo de la voz. Puede aparecer disfonía por irritación del nervio laríngeo",
        "- Si se detectan signos de HEMATOMA CERVICAL avisar de inmediato (urgencia quirúrgica): aumento rápido del volumen del cuello, dificultad respiratoria, ronquera progresiva, sensación de opresión cervical.",
        "- Vigilar signos de hipocalcemia: hormigueo en labios, manos y pies; calambres musculares, rigidez y dolor muscular",
        "- Con frecuencia se solicita analítica de sangre para control de calcio y/o PTH en las horas posteriores a la intervención (comprobar peticiones)",
        "- Se iniciará la tolerancia VO según indicación médica, procurando que sean alimentos de fácil masticación y deglución para reducir las molestias",
        "- Vigilar la aparición de náuseas y/o vómitos ya que pueden aumentar la tensión en la herida",
        "- Si se indica tratamiento con levotiroxina, se recomienda administrar en ayunas (una hora antes del desayuno) para una mejor absorción",
        "- La cura se realizará con clorhexidina, evitando la aplicación de povidona yodada",
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
        "En linfadenectomía no realizar acciones terapéuticas/diagnósticas en el brazo ipsilateral.",
        "Mantener sujetador post-quirúrgico.",
        "Control de diuresis durante las primeras 24 horas.",
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
      icon: appendixIcon,
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
      icon: herniaIcon,
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
      icon: spleenIcon,
    },
    {
      title: "CIRUGÍA GÁSTRICA (GASTRECTOMÍA - FUNDUPLICATURA)",
      content: [
        "ANTES DE LA INTERVENCIÓN:",
        "Canalizar vía venosa. El brazo donde colocar la vía es indiferente.",
        "Colocar medias antitrombóticas neumáticas.",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "DESPUÉS DE LA INTERVENCIÓN:",
        "Control de diuresis cada 6 horas",
      ],
      icon: stomachIcon,
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
      icon: colonIcon,
    },
    {
      title: "CIRUGÍA ANO-RECTAL",
      content: [
        "Canalizar vía venosa. El brazo donde colocar la vía es indiferente.",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
      ],
      icon: anorectalIcon,
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
            icon={hospitalIcon}
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
          icon={postOperativeData.icon}
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
