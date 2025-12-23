import InteractivePosterSection from "./InteractivePosterSection";
import anatomicalIllustration from "@/assets/anatomical-illustration.png";
import preparationIcon from "@/assets/preparation-icon-new.png";
import hospitalIcon from "@/assets/hospital-icon-new.png";
import medicalBackground from "@/assets/medical-background.jpg";
import thyroidIcon from "@/assets/thyroid-icon.png";
import breastIcon from "@/assets/breast-icon.jpg";
import calendarIcon from "@/assets/calendar-icon.jpg";
import gallbladderIcon from "@/assets/gallbladder-new-icon.png";
import appendixIcon from "@/assets/appendix-icon-new.png";
import herniaIcon from "@/assets/hernia-icon.jpg";
import stomachIcon from "@/assets/stomach-icon-new.png";
import spleenIcon from "@/assets/spleen-icon-new.png";
import colonIcon from "@/assets/colon-icon-new.png";
import anorectalIcon from "@/assets/anorectal-icon-new.png";
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
      "Valoración de enfermería, <u>pulsera identificativa</u>, comprobación de <u>alergias</u>, antecedentes personales, tratamiento domiciliario, <u>teléfono</u> de contacto.",
      "Toma de constantes y registro en historia clínica.",
      "Entrega de díptico informativo sobre Cirugía Programada.",
      "En <u>cirugía de colon</u>, entrega de folleto ejercicios recuperación abdominal.",
      "Comprobación de <u>órdenes pre-quirúrgicas</u> en <u>Informe de Evaluación Pre-anestésica</u> (formularios). <strong><u>Verificar suspensión de anticoagulantes, antidiabéticos, …</u></strong> .",
      "Verificar en el parte de quirófano <u>reserva de hemoderivados</u>. En caso de estar indicada, el paciente deberá llevar <u>pulsera</u> de reserva de productos hemoderivados.",
      "<u>Firma de vía clínica</u> y órdenes de tratamiento por el equipo médico.",
      "<strong><u>Si se indica tratamiento con hbpm, NO se debe administrar en las 12 horas previas a la intervención quirúrgica.</u></strong>",
      "<strong>Programar dieta</strong> para preparación intestinal:",
      "      • Dieta habitual hasta 6-8 horas antes.",
      "      • En <u>cirugía de colon</u>, se programará dieta <u>sin residuos</u> hasta 6-8 horas antes, y además se administrarán laxantes y antibióticos VO según órdenes médicas.",
      "      • En todos los casos, se indicará <strong><u>dieta absoluta 6-8 horas antes de la intervención</u></strong>.",
    ],
  };

  const interventionDayData = {
    title: "PREPARACIÓN",
    content: [
      "- <u>Higiene general</u> con esponja impregnada con <u>clorhexidina</u>.",
      "- Si se programa cirugía laparoscópica, limpieza del ombligo con alcohol.",
      "- Higiene bucal.",
      "- En caso de ser necesario <u>rasurar</u> la zona quirúrgica, se hará inmediatamente antes de la cirugía y con rasuradora eléctrica.",
      "- Retirada de objetos metálicos, joyas, prótesis dentales, audífonos, piercings, sensores de glucemia, …",
      "- Retirada de maquillaje y esmalte de uñas.",
      "- Administrar <u>pre-medicación</u> si está indicado.",
      "- El paciente será trasladado a la zona quirúrgica únicamente vestido con un camisón del hospital (no llevará ropa interior).",
      "- Toma de constantes vitales (TA, FC, Sat O2, Tª y glucemia capilar en pacientes diabéticos) y registro en historia clínica.",
      "- <u>Canalizar vía venosa</u> (preferentemente 18G) según procedimiento con perfusión de <u>Isofundin® de mantenimiento</u>. <u>El lugar dependerá del tipo de intervención</u>.",
      "- Completar formulario <u>Check-list</u> quirúrgico.",
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
        "<strong>ANTES DE LA INTERVENCIÓN:</strong>",
        "- Canalizar vía venosa. El brazo donde colocar la vía es indiferente",
        "- Administración de <u>dexametasona</u> y <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito)",
        "",
        "<strong>POST-OPERATORIO:</strong>",
        "- Monitorizar diuresis durante las primeras 24 horas",
        "- Paciente en <u>posición semifowler o fowler alta</u> (30-45º), para reducir el edema",
        "- Evitar la extensión excesiva del cuello.",
        "- Reposo de la voz. Puede aparecer disfonía por irritación del nervio laríngeo",
        "- ⚠️ Si se detectan signos de HEMATOMA CERVICAL avisar de inmediato (urgencia quirúrgica): aumento rápido del volumen del cuello, dificultad respiratoria, ronquera progresiva, sensación de opresión cervical.",
        "- ⚠️ Vigilar signos de HIPOCALCEMIA: hormigueo en labios, manos y pies; calambres musculares, rigidez y dolor muscular",
        "- Con frecuencia se solicita analítica de sangre para control de calcio y/o PTH en las horas posteriores a la intervención (comprobar peticiones)",
        "- Se iniciará la tolerancia VO según indicación médica, procurando que sean <u>alimentos de fácil masticación y deglución</u> para reducir las molestias",
        "- Vigilar la aparición de náuseas y/o vómitos ya que pueden aumentar la tensión en la herida",
        "- Si se indica tratamiento con <u>levotiroxina</u>, se recomienda administrar <u>en ayunas (una hora antes del desayuno) para una mejor absorción</u>",
      ],
      icon: thyroidIcon,
      largeIcon: true,
    },
    {
      title: "CIRUGÍA DE MAMA",
      content: [
        "<strong>ANTES DE LA INTERVENCIÓN:</strong>",
        "- Canalizar vía venosa en lado contrario al de la intervención.",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "<strong>POST-OPERATORIO:</strong>",
        "- Control de diuresis durante las primeras 24 horas.",
        "- La sutura cutánea adhesiva \"steri-strip\", se debe caer sola. Nunca debe tirar de ella.",
        "- Mantener el sujetador post-quirúrgico. Este ayuda a evitar seromas y a reducir el edema.",
        "- ⚠️ En LINFADENECTOMÍA, <u>no realizar acciones terapéuticas/diagnósticas en el brazo ipsilateral</u>. Se recomienda mantener el brazo apoyado y en alto mientras esté sentada y no dormir sobre él. Evitar objetos que compriman (anillos, pulseras, ropa ajustada).",
      ],
      icon: breastIcon,
      roundIcon: true,
    },
    {
      title: "COLECISTECTOMÍA",
      content: [
        "<strong>ANTES DE LA INTERVENCIÓN:</strong>",
        "- Canalizar vía venosa en brazo izquierdo.",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "<strong>POST-OPERATORIO:</strong>",
        "- Monitorización de la diuresis durante las primeras 24 horas",
        "- En caso de CIRUGÍA LAPAROSCÓPICA, la presencia de gases puede producir dolor irradiado hacia el hombro derecho, la mejor manera de disminuirlos es la incorporación y deambulación.",
        "- Se iniciará la tolerancia VO según indicación médica (generalmente se inician líquidos a las 21 h). La dieta siempre será de <u>PROTECCIÓN HEPÁTICA</u>",
      ],
      icon: gallbladderIcon,
      largeIcon: true,
    },
    {
      title: "APENDICECTOMÍA",
      content: [
        "<strong>ANTES DE LA INTERVENCIÓN:</strong>",
        "",
        "- Canalizar vía venosa",
        "",
        "En CIRUGÍA ABIERTA, brazo izquierdo.",
        "",
        "En LAPAROSCOPIA, brazo derecho.",
        "",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito)",
        "",
        "<strong>POST-OPERATORIO:</strong>",
        "",
        "- En caso de CIRUGÍA LAPAROSCÓPICA, la presencia de gases es habitual. Pueden provocar dolor irradiado hacia el hombro derecho, la mejor manera de disminuirlos es la incorporación y deambulación.",
      ],
      icon: appendixIcon,
      roundIcon: true,
      largeIcon: true,
    },
    {
      title: "HERNIOPLASTIA-EVENTROPLASTIA",
      content: [
        "<strong>ANTES DE LA INTERVENCIÓN:</strong>",
        "- Canalizar vía venosa",
        "<span style='margin-left: 2rem; display: block;'>* En CIRUGÍA ABIERTA, lado contrario a la intervención.</span>",
        "<span style='margin-left: 2rem; display: block;'>* En LAPAROSCOPIA (TEP-ETEP), mismo lado.</span>",
        "<span style='margin-left: 2rem; display: block;'>* Si es BILATERAL, es indiferente.</span>",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito)",
        "<strong>POST-OPERATORIO:</strong>",
        "- En caso de CIRUGÍA LAPAROSCÓPICA, la presencia de gases es habitual. Pueden provocar dolor irradiado hacia el hombro derecho, la mejor manera de disminuirlos es la incorporación y deambulación.",
        "- En HERNIOPLASTIA INGUINAL, es recomendable que lleve <u>ropa interior</u> de algodón (bragas o calzoncillos), elásticos, tipo boxer <u>ligeramente apretados</u>, para evitar la aparición de hematoma e inflamación.",
        "- En EVENTROPLASTIA LAPAROSCÓPICA (ETEP), suele estar indicada la <u>faja abdominal</u>. Se debe colocar <u>antes de levantarse</u> del sillón o la cama y al salir a caminar; no es necesario usarla mientras duerme.",
      ],
      icon: herniaIcon,
      roundIcon: true,
      largeIcon: true,
    },
    {
      title: "ESPLENECTOMÍA",
      content: [
        "<b>ANTES DE LA INTERVENCIÓN:</b>",
        "- Canalizar vía venosa en brazo izquierdo.",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito).",
        "- Colocación de <u>medias antitrombóticas</u> elásticas.",
        "",
        "<b>POST-OPERATORIO:</b>",
        "- Control de diuresis.",
        "- En caso de CIRUGÍA LAPAROSCÓPICA, la presencia de gases es habitual. Pueden provocar dolor irradiado hacia el hombro derecho, la mejor manera de disminuirlos es la incorporación y deambulación.",
        "- ⚠️ Se deben extremar las medidas de higiene, así como evitar patología infecciosa en la misma habitación dado el RIESGO AUMENTADO DE INFECCIONES por la falta del bazo para filtrar patógenos.",
        "- Las medias antitrombóticas se mantendrán hasta el inicio de la movilización activa.",
      ],
      icon: spleenIcon,
      largeIcon: true,
    },
    {
      title: "CIRUGÍA GÁSTRICA (GASTRECTOMÍA - FUNDUPLICATURA)",
      content: [
        "<strong>ANTES DE LA INTERVENCIÓN:</strong>",
        "- Canalizar vía venosa. El lado donde canalizar la vía es indiferente.",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito).",
        "- En GASTRECTOMIA, colocación de <u>medias antitrombóticas neumáticas</u>.",
        "",
        "<strong>POST-OPERATORIO:</strong>",
        "- Control de <u>diuresis</u>. En GASTRECTOMIA, <u>control estricto diuresis cada 6 horas</u> con urimeter (puede estar indicada la administración de <u>sobrecargas</u> en función de la cantidad).",
        "- Fisioterapia respiratoria con <u>inspirómetro incentivador</u> (unos 10 ejercicios a la hora, respetando el descanso nocturno)",
        "- En caso de CIRUGÍA LAPAROSCÓPICA, la presencia de gases es habitual. Pueden provocar dolor irradiado hacia el hombro derecho, la mejor manera de disminuirlos es la incorporación y deambulación.",
        "- ⚠️ Al iniciar la tolerancia oral, la DIETA deberá ser <u>fraccionada inicialmente</u>, tomando los líquidos fuera de las ingestas. <u>Evitar la leche</u>.",
        "Se aconseja reposar 30-45 minutos sentado o semisentado post-ingesta para evitar el reflujo.",
        "- Las medias antitrombóticas se mantendrán hasta el inicio de la movilización activa.",
      ],
      icon: stomachIcon,
      extraLargeIcon: true,
    },
    {
      title: "CIRUGÍA DE COLON",
      content: [
        "<strong>DIA PREVIO A LA INTERVENCIÓN:</strong>",
        "- <u>Preparación intestinal</u> con laxantes y antibióticos.",
        "- <u>Marcaje del estoma</u> si está indicado.",
        "",
        "<strong>ANTES DE LA INTERVENCIÓN:</strong>",
        "- Canalizar vía venosa.",
        "<span style='margin-left: 2rem; display: block;'>* De forma general, en el brazo izquierdo.</span>",
        "<span style='margin-left: 2rem; display: block;'>* En HEMICOLECTOMIA DCHA, en el brazo derecho.</span>",
        "- Colocar <u>medias antitrombóticas</u>.",
        "<span style='margin-left: 2rem; display: block;'>* De forma general, <u>elásticas</u>.</span>",
        "<span style='margin-left: 2rem; display: block;'>* En RECTO, <u>neumáticas</u>.</span>",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "<strong>DESPUÉS DE LA INTERVENCIÓN:</strong>",
        "- <u>Control estricto de diuresis cada 6 horas con urimeter</u> (puede estar indicada la administración de sobrecargas en función de la cantidad).",
        "- El mismo día de la IQ, suele indicarse A las 20h <u>sedestación</u>.",
        "- Se iniciará la tolerancia VO según indicación médica (generalmente se inician <u>sorbos de agua</u> a las 20 h). La dieta se progresará según orden médica <u>evitando la leche</u>.",
        "- Fisioterapia respiratoria con <u>inspirómetro incentivador</u> (unos 10 ejercicios a la hora, respetando el descanso nocturno)",
        "- Ejercicios de recuperación abdominal (tríptico entregado al ingreso) - con apoyo del personal de RHB.",
        "- Si se realiza COLOSTOMÍA/ILEOSTOMÍA: vigilancia e inicio de cuidados según protocolo",
        "- Las medias antitrombóticas se mantendrán hasta el inicio de la movilización activa.",
      ],
      icon: colonIcon,
      largeIcon: true,
    },
    {
      title: "CIRUGÍA ANO-RECTAL",
      content: [
        "Canalizar vía venosa. El brazo donde colocar la vía es indiferente.",
        "Administración de antibiótico a la llamada de quirófano (según tratamiento prescrito).",
        "- Se debe evitar el uso de papel higiénico.",
      ],
      icon: anorectalIcon,
      extraLargeIcon: true,
      fadeRight: true,
    },
  ];

  return (
    <div 
      className="min-h-screen py-6 md:py-12 px-4 md:px-6 relative"
    >
      {/* Background with watermark effect */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${medicalBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 0.15,
          filter: 'brightness(1.2)',
        }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight" style={{ color: '#8B1538' }}>
            CUIDADOS PRE-POST EN CIRUGÍA PROGRAMADA
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#8B1538' }}>
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
            largeIcon={true}
          />
          <InteractivePosterSection
            title={interventionDayData.title}
            content={interventionDayData.content}
            variant="pink"
            icon={preparationIcon}
            largeIcon={true}
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
                roundIcon={procedure.roundIcon}
                largeIcon={procedure.largeIcon}
                extraLargeIcon={procedure.extraLargeIcon}
                fadeRight={procedure.fadeRight}
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
                roundIcon={procedure.roundIcon}
                largeIcon={procedure.largeIcon}
                extraLargeIcon={procedure.extraLargeIcon}
                fadeRight={procedure.fadeRight}
              />
            ))}
          </div>
        </div>

        <InteractivePosterSection
          title={postOperativeData.title}
          content={postOperativeData.content}
          variant="pink"
          className="mb-8"
          icon={postOperativeData.icon}
          roundIcon={true}
          largeIcon={true}
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
