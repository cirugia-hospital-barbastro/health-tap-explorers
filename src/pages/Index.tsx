import MedicalPoster from "@/components/MedicalPoster";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cuidados Pre-Post Cirugía General | Póster Interactivo Médico</title>
        <meta 
          name="description" 
          content="Póster interactivo con información médica sobre cuidados pre y post operatorios en cirugía general. Incluye protocolos de tiroidectomía, colecistectomía, apendicectomía y más procedimientos quirúrgicos." 
        />
        <meta name="keywords" content="cirugía general, cuidados preoperatorios, cuidados postoperatorios, enfermería quirúrgica, protocolos médicos" />
      </Helmet>
      <MedicalPoster />
    </>
  );
};

export default Index;
