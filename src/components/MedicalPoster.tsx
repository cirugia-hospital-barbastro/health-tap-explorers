import InteractivePosterSection from "./InteractivePosterSection";
import anatomicalIllustration from "@/assets/anatomical-illustration.png";
import checkListIcon from "@/assets/check-list-icon.png";
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
      "Vigilancia de apósitos.",
      "Control de drenajes (comprobar lo vaciado en URPA), SNG y ostomías si se da el caso.",
      "Impresión de órdenes de tratamiento postoperatorio.",
      "Control de medicación administrada en URPA.",
      "Valorar primera micción, si no micción espontánea en las primeras 6-8 h consultar para SV.",
      "Iniciar tolerancia VO y movilización según orden medica, comunicación con TCAE y registro de horarios en díptico informativo.",
      "Si se indica tratamiento con hbpm. NO administrar hasta pasadas 12 horas tras la intervención.",
    ],
    icon: urpaIcon,
  };

  const procedures = [
    {
      title: "TIROIDECTOMÍA",
      content: [
        "ANTES DE LA INTERVENCIÓN:",
        "Canalizar vía venosa. El brazo donde colocar la vía es indiferente.",
        "Administración de dexametasona y antibiótico a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "POST-OPERATORIO:",
        "Paciente en posición semifowler o fowler alta (30-45º).",
        "Reposo de la voz. Vigilar signos de hematoma cervical.",
        "Vigilar signos de hipocalcemia: hormigueo en labios, manos y pies; calambres musculares, rigidez y dolor muscular",
        "Si se pauta perfusión IV de Calcio, comprobar ritmo de infusión en BPC",
        "Con frecuencia se solicita analítica de sangre para control de calcio y PTH a la mañana siguiente de la intervención (comprobar peticiones).",
        "Monitorizar la diuresis durante las primeras 24h.",
        "Evitar aplicar povidona yodada al realizar las curas.",
        "",
        "RECOMENDACIONES AL ALTA:",
        "*Consejos dietéticos:*",
        "*Los primeros días tome una dieta blanda y fácil de tragar (purés, sopas, yogures, batidos).*",
        "*Evite alimentos muy calientes, picantes o irritantes si hay molestias al tragar.*",
        "*Mantenga una buena hidratación con agua o infusiones suaves.*",
        "*Procure que la dieta sea variada y rica en proteínas (carnes, huevos, legumbres) para favorecer la cicatrización.*",
        "",
        "*Cuidados de la herida:*",
        "*La herida debe estar siempre limpia y seca.*",
        "*Durante su higiene diaria, lave alrededor de la herida con agua y jabón neutro.*",
        "*Secar la zona dando toques suaves con una toalla limpia.*",
        "*Aplique clorhexidina con una gasa estéril, evite la povidona yodada.*",
        "*No retirar puntos o tiras de aproximación hasta indicación médica.*",
        "*Evite la exposición directa al sol durante al menos 6 meses. Use protector solar o cubra la zona con ropa liviana.*",
        "*Evite los roces y la presión sobre la herida. Use ropa suave y holgada alrededor del cuello.*",
        "",
        "*Recomendaciones:*",
        "*Tome la medicación prescrita (analgésicos, antibióticos, hormona tiroidea si aplica) exactamente como lo indicó el médico.*",
        "*Guarde Reposo relativo durante los primeros 7 a 10 días.*",
        "*Debe pasear a diario.*",
        "*Duerma con la cabeza ligeramente elevada (2 almohadas) para reducir inflamación y molestias.*",
        "*Realice movimientos suaves de cuello para evitar rigidez (girar despacio de lado a lado, mirar hacia arriba y abajo).*",
        "*Evite esfuerzos físicos intensos, levantar objetos pesados o movimientos bruscos de cuello durante al menos 2 a 4 semanas.*",
        "*No practique deportes de contacto durante al menos 4 semanas o según indicación médica.*",
        "*Es común tener ligera ronquera o molestias al hablar los primeros días.*",
        "*No forzar la voz ni gritar.*",
        "",
        "*Signos de alarma:*",
        "*Enrojecimiento excesivo, aumento de dolor, supuración, hemorragia, mal olor.*",
        "*Dificultad para respirar o tragar.*",
        "*Inflamación súbita en cuello.*",
        "*Fiebre mayor a 38 °C.*",
        "*Hormigueo en labios, lengua, manos o pies.*",
        "*Cambios bruscos en la voz.*",
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
