import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, RefObject } from "react";
import { 
  Smartphone,
  Monitor,
  ArrowUpRight,
  Play,
  X
} from "lucide-react";

const companies = [
  {
    id: "koelho2000",
    name: "Koelho2000",
    subtitle: "Engenharia & Climatização",
    description: "Especialistas em Ar Condicionado, Projeto AVAC e RECS, Certificação Energética e Auditorias. Simulação energética aliada à modelação 3D.",
    url: "https://www.koelho2000.com",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb31b5?auto=format&fit=crop&q=80&w=1600",
    images: [
      "https://images.unsplash.com/photo-1581094288338-2314dddb31b5?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600"
    ]
  },
  {
    id: "k2000",
    name: "K2000",
    subtitle: "Aplicações de Engenharia",
    description: "Plataformas profissionais e ferramentas avançadas. Orçamentação com AI, simulação AQS e fotovoltaica, e apps para cinema de animação.",
    url: "https://www.k2000.pt",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1600",
    images: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1507238692062-548b2cb5d881?auto=format&fit=crop&q=80&w=1600"
    ]
  },
  {
    id: "eia",
    name: "EIA",
    subtitle: "Energy in Action",
    description: "Série educativa sobre eficiência energética e sustentabilidade. Descobre a energia do futuro com Sunny, Breezy e Splashy!",
    url: "https://www.eia.pt",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1600",
    youtubeId: "CkHk3qKle_A",
    videos: [
      "/EIA APOIO/Cena 62 - telemovel.mp4",
      "/EIA APOIO/Cena 63 - Secar Roupa.mp4",
      "/logo EIA limpo e com background.mp4"
    ]
  },
  {
    id: "bigkoelho",
    name: "Bigkoelho",
    subtitle: "Modelação 3D & Gráficos",
    description: "Estúdio criativo de modelação 3D de alta precisão, foto-realismo e animação. Transformamos conceitos em experiências visuais imersivas.",
    url: null,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
  }
];

function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-white text-black py-4 @md:py-6 border-y-4 @md:border-y-8 border-black z-20">
      <motion.div
        className="whitespace-nowrap flex gap-4 @md:gap-8 text-4xl @md:text-7xl font-display font-black uppercase tracking-tighter"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex items-center gap-4 @md:gap-8">
            <span>KOELHO2000</span>
            <span>•</span>
            <span>K2000</span>
            <span>•</span>
            <span>EIA</span>
            <span>•</span>
            <span>BIGKOELHO</span>
            <span>•</span>
            <span>THE K-BROTHERS</span>
            <span>•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Hero({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({ container: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 pointer-events-none">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[35cqw] @md:text-[25cqw] leading-none font-display font-black text-white tracking-tighter mix-blend-overlay"
        >
          K
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[6cqw] @md:text-5xl font-bold text-white uppercase tracking-widest mt-[-2cqw]"
        >
          Ecosystem
        </motion.p>
      </div>
    </section>
  );
}

function KBrothersVideo() {
  const videos = [
    "/APOIO_KBROTHERS/k-brothers-bg.mp4",
    "/APOIO_KBROTHERS/Buzinho curta.mp4"
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <section className="relative min-h-screen bg-black py-16 @md:py-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.video 
            key={videos[currentVideoIndex]}
            autoPlay 
            muted 
            playsInline 
            onEnded={() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </div>

      <div className="container mx-auto px-4 @md:px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-[11cqw] @md:text-[8rem] font-display font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            The K-Brothers
          </h2>
          <p className="text-[4.5cqw] @md:text-3xl text-gray-300 font-light max-w-3xl mx-auto drop-shadow-md">
            Filmes de Animação Digital com Conteúdo IA. A próxima geração de narrativas visuais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CompanyCard({ company, index, containerRef }: { key?: string, company: { id: string, name: string, subtitle: string, description: string, url: string | null, image: string, images?: string[], videos?: string[], youtubeId?: string, videoBg?: string }, index: number, containerRef: RefObject<HTMLDivElement | null> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  useEffect(() => {
    if (company.images && company.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % company.images!.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [company.images]);

  return (
    <>
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden group border-b border-white/10"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {company.videos && company.videos.length > 0 ? (
          <div className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-700">
            <AnimatePresence mode="wait">
              <motion.video 
                key={company.videos[currentVideoIndex]}
                style={{ y }}
                autoPlay 
                muted 
                playsInline 
                onEnded={() => setCurrentVideoIndex((prev) => (prev + 1) % company.videos!.length)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-[130%] object-cover origin-center"
              >
                <source src={company.videos[currentVideoIndex]} type="video/mp4" />
              </motion.video>
            </AnimatePresence>
          </div>
        ) : company.videoBg ? (
          <motion.video 
            style={{ y }}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-[130%] object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 origin-center"
          >
            <source src={company.videoBg} type="video/mp4" />
          </motion.video>
        ) : company.images && company.images.length > 0 ? (
          <div className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-700">
            {company.images.map((img, i) => (
              <motion.img 
                key={img}
                style={{ y }}
                initial={false}
                animate={{ opacity: i === currentImageIndex ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                src={img} 
                alt={`${company.name} - Imagem ${i + 1}`}
                className="absolute inset-0 w-full h-[130%] object-cover origin-center"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        ) : (
          <motion.img 
            style={{ y }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={company.image} 
            alt={company.name}
            className="w-full h-[130%] object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 origin-center"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col @md:flex-row items-start @md:items-end justify-between gap-6 @md:gap-8 pb-12 @md:pb-20 pt-32 @md:pt-40">
        <div className="flex-1">
          <h2 className="text-[12cqw] @md:text-8xl font-display font-black text-white uppercase tracking-tighter mb-2 @md:mb-4 leading-none">
            {company.name}
          </h2>
          <h3 className="text-[5cqw] @md:text-4xl text-gray-300 font-light mb-4 @md:mb-6">
            {company.subtitle}
          </h3>
          <p className="text-[4cqw] @md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            {company.description}
          </p>
        </div>
        
        <div className="flex gap-4 self-start @md:self-auto mt-4 @md:mt-0">
          {company.youtubeId && (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOpen(true)}
              className="flex-shrink-0 w-16 h-16 @md:w-32 @md:h-32 rounded-full bg-red-600 text-white flex flex-col items-center justify-center gap-1 @md:gap-2 hover:bg-red-700 transition-colors"
            >
              <span className="font-bold text-[10px] @md:text-base uppercase tracking-wider">Vídeo</span>
              <Play className="w-5 h-5 @md:w-8 @md:h-8" />
            </motion.button>
          )}
          {company.url && (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-16 h-16 @md:w-32 @md:h-32 rounded-full bg-white text-black flex flex-col items-center justify-center gap-1 @md:gap-2 hover:bg-gray-200 transition-colors"
            >
              <span className="font-bold text-[10px] @md:text-base uppercase tracking-wider">Visitar</span>
              <ArrowUpRight className="w-5 h-5 @md:w-8 @md:h-8" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>

    {/* Video Modal */}
    {isVideoOpen && company.youtubeId && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 @md:p-12">
        <button 
          onClick={() => setIsVideoOpen(false)}
          className="absolute top-4 right-4 @md:top-8 @md:right-8 text-white/70 hover:text-white transition-colors z-50 bg-black/50 rounded-full p-2"
        >
          <X className="w-6 h-6 @md:w-10 @md:h-10" />
        </button>
        <div className="w-full max-w-6xl aspect-video relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${company.youtubeId}?autoplay=1`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )}
    </>
  );
}

function Navigation({ isMobileView, setIsMobileView }: { isMobileView: boolean, setIsMobileView: (v: boolean) => void }) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 @md:px-6 py-4 @md:py-6 flex justify-between items-center mix-blend-difference text-white">
      <div className="text-3xl @md:text-4xl font-display font-black tracking-tighter">K</div>
      
      <button
        onClick={() => setIsMobileView(!isMobileView)}
        className="flex items-center gap-2 px-4 py-2 @md:px-6 @md:py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
        title="Alternar vista Desktop/Mobile"
      >
        {isMobileView ? <Monitor className="w-4 h-4 @md:w-5 @md:h-5" /> : <Smartphone className="w-4 h-4 @md:w-5 @md:h-5" />}
        <span className="text-xs @md:text-sm font-bold uppercase tracking-wider hidden @md:inline">
          {isMobileView ? "Desktop" : "Mobile"}
        </span>
      </button>
    </nav>
  );
}

export default function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-neutral-900 min-h-screen font-sans selection:bg-white selection:text-black flex justify-center">
      <div className={`w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative bg-black @container ${isMobileView ? 'max-w-[400px] border-x-8 border-neutral-800 shadow-2xl overflow-x-hidden my-8 rounded-[3rem]' : ''}`}>
        <Navigation isMobileView={isMobileView} setIsMobileView={setIsMobileView} />
        
        <div 
          ref={scrollContainerRef} 
          className={`overflow-y-auto overflow-x-hidden scroll-smooth ${isMobileView ? 'h-[calc(100vh-4rem)] rounded-[2.5rem]' : 'h-screen'}`}
        >
          <Hero containerRef={scrollContainerRef} />
          <Marquee />
          
          <div className="flex flex-col">
            {companies.map((company, index) => (
              <CompanyCard key={company.id} company={company} index={index} containerRef={scrollContainerRef} />
            ))}
          </div>

          <KBrothersVideo />
          
          <Marquee />

          <footer className="bg-black text-white py-16 @md:py-24 text-center border-t border-white/10">
            <div className="container mx-auto px-6">
              <div className="text-[25cqw] @md:text-[15cqw] leading-none font-display font-black tracking-tighter mb-4 @md:mb-8 opacity-20">
                K
              </div>
              <p className="text-[4cqw] @md:text-2xl font-light text-gray-400 mb-2 @md:mb-4 uppercase tracking-widest">
                Engenharia • Inovação • Multimédia
              </p>
              <p className="text-[2.5cqw] @md:text-sm text-gray-600 font-mono">
                &copy; {new Date().getFullYear()} GRUPO K. ALL RIGHTS RESERVED.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
