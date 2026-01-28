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
import saludAragonLogo from "@/assets/salud-aragon-logo.png";
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
      "- Valoración de enfermería, <u>pulsera identificativa</u>, comprobación de <u>alergias</u>, antecedentes personales, tratamiento domiciliario, <u>teléfono</u> de contacto.",
      "- Toma de constantes y registro en historia clínica.",
      "- Entrega de díptico informativo sobre Cirugía Programada.",
      "- En <u>cirugía de colon</u>, entrega del Tríptico de \"Recomendaciones para la Recuperación de Cirugía Abdominal\" y <strong>MARCAJE</strong> del estoma si se indica.",
      "- Comprobación de <u>órdenes pre-quirúrgicas</u> en <u>Informe de Evaluación Pre-anestésica</u> (formularios). <strong><u>Verificar suspensión de anticoagulantes, antidiabéticos, …</u></strong> .",
      "- Verificar en el parte de quirófano <u>reserva de hemoderivados</u>. En caso de estar indicada, el paciente deberá llevar <u>pulsera</u> de reserva de productos hemoderivados.",
      "- <u>Firma de vía clínica</u> y órdenes de tratamiento por el equipo médico.",
      "- <strong><u>Si se indica tratamiento con hbpm, NO se debe administrar en las 12 horas previas a la intervención quirúrgica.</u></strong>",
      "- <strong>Programar dieta</strong> para preparación intestinal:",
      "<span style='margin-left: 2rem; display: block;'>• Dieta habitual hasta 6-8 horas antes.</span>",
      "<span style='margin-left: 2rem; display: block;'>• En <u>cirugía de colon</u>, se programará dieta <u>sin residuos</u> el día previo a la intervención, debiendo ser <u>líquida sin residuos en la cena</u>; y además se administrarán <u>laxantes</u> y <u>antibióticos VO</u> según órdenes médicas.</span>",
      "<span style='margin-left: 2rem; display: block;'>• En todos los casos, se indicará <strong><u>dieta absoluta 6-8 horas antes de la intervención</u></strong>.</span>",
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
      "- Toma frecuente de <u>constantes vitales</u> (TA, FC, Sat O<sub>2</sub>, EVA).",
      "<img:pain-scale>",
      "- Vigilancia de <u>apósitos</u>. Si está ligeramente manchado, marcar con rotulador y vigilar progresión.",
      "- Control de <strong>DRENAJES</strong> (cantidad, aspecto, conservación del vacío del receptal). Comprobar lo cuantificado en URPA.",
      "<span style='margin-left: 2rem; display: block;'>⚠️ Un líquido <u>bilioso</u>, espeso y de color verdoso o amarillo intenso puede indicar una FUGA BILIAR.</span>",
        "<span style='margin-left: 2rem; display: block;'>⚠️ Si el líquido es cada vez más <u>rojo</u> y más <u>productivo</u>, puede indicar HEMORRAGIA. Se debe avisar al CIR de guardia si...</span>",
        "<span style='margin-left: 3rem; display: block;'>* > 200 cc de <u>sangre fresca</u> en las 2 horas siguientes tras vaciar el receptal en URPA.</span>",
        "<span style='margin-left: 3rem; display: block;'>* > 300 cc en las primeras 3 horas postIQ.</span>",
      "<span style='margin-left: 2rem; display: block;'>⚠️ Una secreción <u>purulenta</u> puede indicar INFECCION.</span>",
      "<span style='margin-left: 2rem; display: block;'>⚠️ Un contenido <u>fecaloideo</u> indica FUGA o PERFORACIÓN GASTROINTESTINAL.</span>",
      "- Control de <u>SNG</u> y <u>ostomías</u> si se da el caso. Comprobar lo cuantificado en URPA.",
      "- <u>Impresión de órdenes de tratamiento postoperatorio</u>.",
      "- <u>Control de medicación administrada</u> en URPA (horario y dosis de la última administración).",
      "- Vigilancia de la <u>primera micción</u>. Si el paciente no realiza micción espontánea en las primeras 6-8 horas, consultar con cirujano de guardia para sondaje vesical.",
      "- Iniciar tolerancia VO y movilización según orden médica. Comunicación con TCAE y registro de horarios en díptico informativo.",
      "<strong>- Si se indica tratamiento con hbpm, NO administrar hasta pasadas 12 horas de la intervención.</strong> La hora de fin de la IQ coincide con la hora de entrada en URPA (comprobar informe de URPA)",
      "- Si porta <strong>ELASTÓMERO</strong>, mantener oxigenoterapia durante su curso.",
      "- Si porta <strong>CATÉTER EPIDURAL</strong> (consultar protocolo específico):",
      "<span style='margin-left: 2rem; display: block;'>* Comprobar sellado del apósito y fijación correcta.</span>",
      "<span style='margin-left: 2rem; display: block;'>* <u>Tener en cuenta el horario de administración de la hbpm respecto a la colocación y retirada del catéter según los protocolos establecidos</u>.</span>",
      "<span style='margin-left: 2rem; display: block;'>* <u>NUNCA administrar otra medicación por esta vía</u>.</span>",
      "<span style='margin-left: 2rem; display: block;'>* Comprobar correcta programación de bomba de perfusión continua.</span>",
      "<span style='margin-left: 2rem; display: block;'>* Vigilar pérdida de movilidad de extremidades o sensación de pesadez excesiva.</span>",
      "<span style='margin-left: 2rem; display: block;'>* No manipular el catéter.</span>",
      "<span style='margin-left: 2rem; display: block;'>* En caso de mal control del dolor o incidencias con el catéter, comentar con <u>anestesista de guardia</u>.</span>",
      "<span style='margin-left: 2rem; display: block;'>* Mantener oxigenoterapia durante su curso.</span>",
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
        "- Paciente en <u>posición semifowler o fowler alta</u> (30-45º), para reducir el edema.",
        "- Evitar la extensión excesiva del cuello.",
        "- Reposo de la voz. Puede aparecer disfonía por irritación del nervio laríngeo",
        "- ⚠️ Si se detectan signos de HEMATOMA CERVICAL avisar de inmediato (urgencia quirúrgica): aumento rápido del volumen del cuello, dificultad respiratoria, ronquera progresiva, sensación de opresión cervical.",
        "- ⚠️ Vigilar signos de HIPOCALCEMIA: hormigueo en labios, manos y pies; calambres musculares, rigidez y dolor muscular",
        "- Con frecuencia se solicita analítica de sangre para control de calcio y/o PTH en las horas posteriores a la intervención (comprobar peticiones)",
        "- Se iniciará la tolerancia VO según indicación médica, procurando que sean <u>alimentos de fácil masticación y deglución</u> para reducir las molestias",
        "- Vigilar la aparición de náuseas y/o vómitos ya que pueden aumentar la tensión en la herida",
        "- Si se indica tratamiento con <u>levotiroxina</u>, se recomienda administrar <u>en ayunas (una hora antes del desayuno) para una mejor absorción</u>.",
        "- La sutura cutánea adhesiva \"steri-strip\" se debe caer sola. No debe tirar de ella.",
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
      largeIcon: true,
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
        "<div style='margin-left: 2rem;'>* En CIRUGÍA ABIERTA, brazo izquierdo.</div>",
        "<div style='margin-left: 2rem;'>* En LAPAROSCOPIA, brazo derecho.</div>",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito)",
        "",
        "<strong>POST-OPERATORIO:</strong>",
        "",
        "- Control de diuresis.",
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
        "- Canalizar vía venosa:",
        "<span style='margin-left: 2rem; display: block;'>* En CIRUGÍA ABIERTA, lado izquierdo.</span>",
        "<span style='margin-left: 2rem; display: block;'>* En LAPAROSCOPIA, el lado es indiferente.</span>",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "<b>POST-OPERATORIO:</b>",
        "- Control de <u>diuresis</u> por turno con SV:",
        "<span style='margin-left: 2rem; display: block;'>* En caso de sangrado excesivo durante la cirugía o necesidad de transfusión -> <u>control con urimeter cada 6 horas</u>.</span>",
        "- En caso de CIRUGÍA LAPAROSCÓPICA, la presencia de gases es habitual. Pueden provocar dolor irradiado hacia el hombro derecho, la mejor manera de disminuirlos es la incorporación y deambulación.",
        "- ⚠️ Se deben extremar las medidas de higiene, así como evitar patología infecciosa en la misma habitación dado el RIESGO AUMENTADO DE INFECCIONES por la falta del bazo para filtrar patógenos.",
      ],
      icon: spleenIcon,
      largeIcon: true,
    },
    {
      title: "CIRUGÍA GÁSTRICA (GASTRECTOMÍA - FUNDUPLICATURA)",
      content: [
        "<strong>ANTES DE LA INTERVENCIÓN:</strong>",
        "- Canalizar vía venosa. El lado donde canalizar la vía es indiferente.",
        "- En GASTRECTOMÍA, colocación de <u>medias antitrombóticas elásticas</u>. En caso de cirugía por NEOPLASIA MALIGNA, se colocarán <u>medias neumáticas</u>.",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "<strong>POST-OPERATORIO:</strong>",
        "- Control de <u>diuresis</u>. En GASTRECTOMIA, <u>control estricto de diuresis cada 6 horas</u> con urimeter (puede estar indicada la administración de <u>sobrecargas</u> en función de la cantidad).",
        "- Fisioterapia respiratoria con <u>inspirómetro incentivador</u> (unos 10 ejercicios a la hora, respetando el descanso nocturno)",
        "- En caso de CIRUGÍA LAPAROSCÓPICA, la presencia de gases es habitual. Pueden provocar dolor irradiado hacia el hombro derecho, la mejor manera de disminuirlos es la incorporación y deambulación.",
        "- ⚠️ Una vez se inicie la tolerancia oral, la DIETA deberá ser siempre <u>FRACCIONADA</u> y semiblanda/triturada las primeras semanas postoperatorias. <u>Evitar la leche</u>.",
        "<div style='margin-left: 2rem;'>* En GASTRECTOMÍA, se tomarán los <u>líquidos fuera de las ingestas</u>.</div>",
        "<div style='margin-left: 2rem;'>* En FUNDUPLICATURA, no es necesario.</div>",
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
        "<span style='margin-left: 2rem; display: block;'>* En RESECCIÓN ANTERIOR DE RECTO, <u>neumáticas</u>.</span>",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "<strong>DESPUÉS DE LA INTERVENCIÓN:</strong>",
        "- <u>Control estricto de diuresis cada 6 horas con urimeter</u> (puede estar indicada la administración de sobrecargas en función de la cantidad).",
        "- El mismo día de la IQ, suele indicarse A las 20h <u>sedestación</u>.",
        "- Se iniciará la tolerancia VO según indicación médica (generalmente se inician <u>sorbos de agua</u> a las 20 h). La dieta se progresará según orden médica <u>evitando la leche</u> durante las primeras 24 horas postIQ, pudiendo introducirla en la dieta con la dieta semiblanda, si no hay contraindicación.",
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
        "<strong>ANTES DE LA INTERVENCIÓN:</strong>",
        "- Canalizar vía venosa. El lado donde canalizar la vía es indiferente",
        "- Administración de <u>antibiótico</u> a la llamada de quirófano (según tratamiento prescrito).",
        "",
        "<strong>POST-OPERATORIO:</strong>",
        "- ⚠️ Generalmente se coloca un TAPÓN HEMOSTÁSICO que <u>NO se debe retirar</u>. Lo expulsará el propio paciente con la deposición.",
        "- La <u>higiene de la zona</u> se realizará desde el primer día postIQ con agua templada y jabón neutro. Se hará siempre después de cada deposición y, al menos dos veces al día.",
        "<span style='margin-left: 2rem; display: block;'>* En la ducha, dirija un chorro suave de agua sobre la zona anal durante 1-2 minutos.</span>",
        "<span style='margin-left: 2rem; display: block;'>* Baños de asiento, permaneciendo sentado en agua tibia durante 5-10 minutos.</span>",
        "- Se debe evitar el uso de papel higiénico.",
        "- Colocar una gasa limpia en la ropa interior para absorber la humedad. Ésta se debe cambiar con frecuencia.",
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
            CUIDADOS PERIOPERATORIOS EN CIRUGÍA PROGRAMADA
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#8B1538' }}>
            CIRUGÍA GENERAL Y DIGESTIVA del HOSPITAL DE BARBASTRO
          </h2>
          <div className="flex justify-center mt-6">
            <img 
              src={saludAragonLogo} 
              alt="Salud - Servicio Aragonés de Salud - Barbastro" 
              className="max-w-[150px] md:max-w-[200px] h-auto"
            />
          </div>
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
