import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';
import TeamMemberCard from '../components/ui/TeamMemberCard';

const SubcoordenacaoPosGraduacao = () => {
  const atribuicoes = [
    'Articular redes de pesquisa entre programas de pós-graduação parceiros',
    'Fomentar projetos colaborativos e orientação acadêmica integrada',
    'Promover seminários e encontros de formação avançada',
    'Apoiar a produção científica e a divulgação qualificada',
    'Estimular ações de internacionalização e cooperação interinstitucional'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-orange-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Coordenação Adjunta de Pós-Graduação
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 w-24 bg-white mx-auto mb-8"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl font-light text-white/90"
            >
              Integração acadêmica e fortalecimento da pesquisa na pós-graduação
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: 'white', width: '100%', height: 60 }}
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* Coordenadora Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Coordenadora"
              subtitle="Conheça a responsável pela subcoordenação"
              center
            />
          </AnimatedElement>

          <div className="max-w-md mx-auto mt-12">
            <TeamMemberCard
              nome="Profa. Dra. Rute Abreu"
              titulo="Coordenadora Adjunta de Pós-Graduação"
              instituicao="Instituto Politécnico da Guarda (IPG) - Portugal"
              tipo="coordenador"
            />
          </div>
        </div>
      </section>

      {/* Objetivo Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Objetivo da Subcoordenação"
              subtitle="Articular redes e elevar o rigor científico"
              center
            />
          </AnimatedElement>

          <div className="max-w-3xl mx-auto mt-12">
            <AnimatedElement
              className="p-8 rounded-xl bg-white border-l-4 border-orange-600 shadow-md"
              animation="slide-up"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Fortalecer a pós-graduação vinculada ao LAPQ por meio da integração de programas,
                da promoção de pesquisas colaborativas e da consolidação de práticas acadêmicas
                de alto nível. A subcoordenação atua na articulação entre instituições parceiras
                e na ampliação das oportunidades de formação avançada.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Atribuicoes Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Atribuições da Subcoordenação"
              subtitle="Responsabilidades e frentes de trabalho"
              center
            />
          </AnimatedElement>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-4">
              {atribuicoes.map((atrib, index) => (
                <AnimatedElement
                  key={index}
                  className="p-4 rounded-lg bg-orange-50 border-l-4 border-orange-600 flex items-start"
                  animation="slide-up"
                  delay={index * 50}
                >
                  <CheckCircle size={24} className="text-orange-600 mr-4 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{atrib}</p>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 bg-light">
        <div className="container-custom">
          <Link
            to="/subcoordenacoes"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronRight size={18} className="mr-2 rotate-180" />
            Voltar às Subcoordenações
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SubcoordenacaoPosGraduacao;
