import { motion } from 'framer-motion';
import { ExternalLink, Film, MonitorPlay } from 'lucide-react';
import AnimatedElement from '../components/utils/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';

type VideoItem = {
  id: string;
  title: string;
  link?: string;
};

const AmbienteAudiovisual = () => {
  const videos: VideoItem[] = [
    {
      id: 'subjetividade-epistemologia-qualitativa',
      title: 'Subjetividade e Epistemologia Qualitativa - Prof. Dr. Fernando González Rey',
      link: 'https://youtu.be/bcRLKKI2D6A'
    },
    {
      id: 'contexto-delimitado',
      title: 'Contexto Delimitado',
      link: 'https://www.youtube.com/watch?v=OMVXSD_HQDk'
    },
    {
      id: 'matriz-amarra-qualitativa',
      title: 'Matriz de Amarração Teórica',
      link: 'https://www.youtube.com/watch?v=Uo2OI6s2h8Y'
    },
    {
      id: 'tipos-revisao-literatura',
      title: 'Tipos de Revisão da Literatura',
      link: 'https://www.youtube.com/watch?v=nbX78PUIC60'
    },
    {
      id: 'padronizando-referencias',
      title: 'Padronizando as Referências',
      link: 'https://www.youtube.com/watch?v=ThcB65kcuiM'
    },
    {
      id: 'epistemologia-qualitativa-1',
      title: 'Epistemologia Qualitativa - Prof. Dr. Fernando González',
      link: 'https://www.youtube.com/watch?v=ARPmaa4Hk-Y'
    },
    {
      id: 'saturacao-pesquisa-qualitativa',
      title: 'Saturação na Pesquisa Qualitativa',
      link: 'https://www.youtube.com/watch?v=lcykd8ADhSg'
    },
    {
      id: 'teoria-critica-qualitativa',
      title: 'Teoria Crítica e a Pesquisa Qualitativa',
      link: 'https://www.youtube.com/watch?v=EfqLjEdlGpk'
    },
    {
      id: 'coleta-dados-fase',
      title: 'Coleta de dados: Como definir esta fase na pesquisa?',
      link: 'https://www.youtube.com/watch?v=Qd5ay69rBSU&t=34s'
    },
    {
      id: 'variaveis-qualitativas',
      title: 'Variáveis Qualitativas de Pesquisa | Metodologia Científica',
      link: 'https://www.youtube.com/watch?v=3csetGhNiV0'
    },
    {
      id: 'tecnicas-entrevista',
      title: 'Técnicas de Entrevista',
      link: 'https://www.youtube.com/watch?v=UHfyNqPN1C8&t=129s'
    },
    {
      id: 'transcricao-audios',
      title: 'Transcrição de Áudios',
      link: 'https://cloud.google.com/https://cloud.google.com/'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Ambiente Audiovisual de Formação em Pesquisa Qualitativa
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
              className="text-xl font-light"
            >
              Espaço pedagógico com vídeos e recursos interativos para desenvolver competências teórico-metodológicas
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

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Sobre o Ambiente Audiovisual"
              subtitle="Aproxima teoria e prática, favorece o engajamento na EaD e contribui para o pensamento crítico"
              center
            />
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={150}>
            <div className="max-w-4xl mx-auto p-8 rounded-xl bg-light border border-primary/10 shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed">
                O Ambiente Audiovisual de Formação em Pesquisa Qualitativa é um espaço pedagógico que utiliza vídeos
                e recursos interativos para desenvolver competências teórico-metodológicas de forma prática e reflexiva.
                Ele aproxima teoria e prática, favorece o engajamento na EaD e contribui para o desenvolvimento do
                pensamento crítico, da análise interpretativa e da formação de pesquisadores com rigor científico e
                sensibilidade social.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Video List */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedElement>
            <SectionTitle
              title="Videos Pedagogicos"
              subtitle="Conteudos selecionados para a Plataforma LAPQ"
              center
            />
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {videos.map((video, index) => (
              <AnimatedElement key={video.id} animation="slide-up" delay={index * 60}>
                <div className="h-full p-6 rounded-xl bg-white border border-gray-100 shadow-md flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                        {video.link ? <MonitorPlay size={20} /> : <Film size={20} />}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-dark leading-snug">
                        {video.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4">
                    {video.link ? (
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
                      >
                        Acessar video <ExternalLink size={16} className="ml-2" />
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500">Sem link cadastrado</span>
                    )}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmbienteAudiovisual;
