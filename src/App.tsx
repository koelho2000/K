import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, RefObject } from "react";
import { 
  ArrowUpRight,
  Play,
  X,
  Youtube,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const companies = [
  {
    id: "koelho2000",
    name: "Koelho2000",
    subtitle: "Engenharia & Climatização",
    description: "Especialistas em Ar Condicionado, Projeto AVAC e RECS, Certificação Energética e Auditorias. Simulação energética aliada à modelação 3D.",
    url: "https://www.koelho2000.com",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600"
    ],
    portfolio: [
      {
        type: 'mosaic',
        images: [
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9397.jpg',
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9402.jpg',
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9433.jpg',
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9499.jpg',
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9517.jpg'
        ],
        desc: "IEFP Castelo Branco - Certificação Energética após obra (Classe B)"
      },
      {
        type: 'mosaic',
        images: [
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/Capa.jpg',
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9528.jpg',
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9535.jpg',
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9544.jpg',
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9548.jpg',
          'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9552.jpg'
        ],
        desc: "IEFP Seixal - Certificação Energética de edifício existente devoluto (Classe C)"
      },
      {
        img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1600",
        desc: "EB1 de Ribafria - Certificação Energética"
      },
      {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
        desc: "Lar Oliveira do Conde - Certificação Energética"
      },
      {
        img: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1600",
        desc: "Intermarche Moncarapacho - Certificação Energética"
      },
      {
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
        desc: "Entreposto Nissan Expo - Certificação Energética"
      },
      {
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
        desc: "IPO Porto - Certificação Energética"
      },
      {
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
        desc: "Kidzania DV Tejo - Certificação Energética"
      },
      {
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600",
        desc: "Edifício Vodafone Expo - Certificação Energética"
      },
      {
        img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1600",
        desc: "Banco de Portugal - Certificação Energética"
      }
    ]
  },
  {
    id: "k2000",
    name: "K2000",
    subtitle: "Aplicações de Engenharia",
    description: "Plataformas profissionais e ferramentas avançadas. Orçamentação com AI, simulação AQS e fotovoltaica, e apps para cinema de animação.",
    url: "https://www.k2000.pt",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    applications: [
      {
        "url": "https://k-boqproai-50850505662.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000003-7876378765/BOQPROAI.gif?ph=af822648e7",
        "desc": "Criação de orçamentação profissional com tecnologia AI e gravação em CLOUD"
      },
      {
        "url": "https://k-aqspro-50850505662.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000004-2516b2516d/Logo%20K-AQSPRO.gif?ph=af822648e7",
        "desc": "A plataforma profissional para projeto, simulação e otimização de sistemas de Águas Quentes Sanitárias (AQS)"
      },
      {
        "url": "https://k-scefieldreport-50850505662.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000005-53d3453d36/Logo%20K-SCEFR.gif?ph=af822648e7",
        "desc": "Geração de reatorio de campo no ambito do SCE - Portugal"
      },
      {
        "url": "https://k-chbcselect-50850505662.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000006-744c6744c8/K-CHBCSELECT.gif?ph=af822648e7",
        "desc": "Ferramenta de selecção de Chillers e Bombas de Calor"
      },
      {
        "url": "https://k-start-eng-50850505662.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000000-8638386385/K-START-ENG_logo.gif?ph=af822648e7",
        "desc": "Aplicação para selecção de sistemas tecnicos e geração em fase inicial de memorias e estimativas"
      },
      {
        "url": "https://k-aircimprove-50850505662.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000007-281f7281f8/K-AIRCIMPROVE_logo.gif?ph=af822648e7",
        "desc": "Aplicação de geração de relatorio de medidas de eficiencia energética nos sistemas de Ar Comprimido"
      },
      {
        "url": "https://k-dataelect-50850505662.us-west1.run.app/",
        "img": "https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/K2000/K2000_K-DATAELECTANALYSE.jpeg",
        "desc": "Ferramenta profissional de análise de telecontagem elétrica e geração de relatórios, agora com módulo de análise de integração de baterias."
      },
      {
        "url": "https://k-pvprosim-50850505662.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000009-7695a7695c/K-PVSIMPRO.gif?ph=af822648e7",
        "desc": "Simulação de sistemas fotovoltaicos profissional"
      },
      {
        "url": "https://k-simsace-50850505662.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000001-72a3172a33/K-SIMSACE.gif?ph=af822648e7",
        "desc": "Simulador de lista de pontos de GTC"
      },
      {
        "url": "https://k-hovensim-pro-961784513318.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000010-3c4263c428/Logo%20-%20K-HOVENSIM.gif?ph=af822648e7",
        "desc": "Aplicação para simulação de alteração de fornos industriais e cálcuo energético"
      },
      {
        "url": "https://koelho2000.github.io/K-CLIMEPWCREATE/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000011-44a1244a14/Logo-3.gif?ph=af822648e7",
        "desc": "Importação de ficheiros climáticos EPW, análise e conversão para CSV."
      },
      {
        "url": "https://koelho2000.github.io/PMP_GeradorRelatorio/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000012-78d9378d96/K-PMP.gif?ph=af822648e7",
        "desc": "Gerador de relatório de PMP com familias e periodicidades"
      },
      {
        "url": "https://k-anepcassis-386479569212.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000013-7caee7caf1/Logo-5.gif?ph=af822648e7",
        "desc": "A K-ANEPCASSIS é uma ferramenta profissional de apoio ao projeto de Segurança Contra Incêndio em Edifícios (SCIE), desenvolvida para arquitetos, engenheiros e projetistas."
      },
      {
        "url": "https://koelho2000.github.io/K-PUMPSELECT/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000014-1e9b51e9b6/Logo-9.gif?ph=af822648e7",
        "desc": "Aplicação de selecção de bombas de circulação"
      },
      {
        "url": "https://gemini.google.com/share/d1564d9a04b8",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000002-b26cdb26cf/logo.gif?ph=af822648e7",
        "desc": "Simulação de sistemas adiabáticos com base em equipamentos da France Air"
      },
      {
        "url": "https://k-costestimate-50850505662.us-west1.run.app",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000015-56b5f56b60/Logo-Costestimate.gif?ph=af822648e7",
        "desc": "Aplicação para geração de orçamentos detalhados de engenharia com suporte a IA para estimativas e leitura de PDFs"
      },
      {
        "url": "https://k-animakerprostudio-50850505662.us-west1.run.app/",
        "img": "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000016-4d8304d831/Logo.jpeg?ph=af822648e7",
        "desc": "App para apoio de realizador de cinema de animação. Gera scripts, personagens, cenários, cenas, takes, imagens e vídeos usando IA."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
    ]
  },
  {
    id: "eia",
    name: "EIA",
    subtitle: "Energy in Action",
    description: "Série educativa sobre eficiência energética e sustentabilidade. Descobre a energia do futuro com Sunny, Breezy e Splashy!",
    url: "https://www.eia.pt",
    image: "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/Episódio 1 A Luz Certa PT-Cover.jpg",
    youtubePlaylist: "https://www.youtube.com/playlist?list=PLHHMjSyJQeBCFjuuPaqrhqMic374sFIkG",
    youtubeVideos: ['CkHk3qKle_A', 'B1F8Er1F6sc', 'GRcdf_OZZ20', 'axSu_LYZKIw', 'f321tNWXbVM', 'tGJEOlb_rj0', 'mfe_koaW6wY', '50cWuFnTF20', 'IR-KT26Plwo', 'ux7nVCk1HLA', '-78WqSJ5bEI'],
    images: [
      "https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/EIA/EIA_Livro.jpeg",
      "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/Episódio 1 A Luz Certa PT-Cover.jpg",
      "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/[S1E2] Close the door PT-Cover.jpg",
      "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/[S1E3] Smart Washes PT-Cover.jpg",
      "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/[S1E4] - Cooking Efficiently (PT)-Cover.jpg",
      "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/[S1E6] - Fresh Air, Energy Saved.jpg",
      "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/Episódio 7 Build it Smart-Cover 16-9.jpg",
      "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/S1E8 - Smart appliances.jpg",
      "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/[S1E9] - Chasing the Sun-Cover.jpg",
      "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_EIA/[S1E10] - The temple of energy-Cover.jpg"
    ]
  },
  {
    id: "bigkoelho",
    name: "Bigkoelho",
    subtitle: "Modelação 3D & Gráficos",
    description: "Estúdio criativo de modelação 3D de alta precisão, foto-realismo e animação. Transformamos conceitos em experiências visuais imersivas.",
    url: null,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
    youtubePlaylist: "https://www.youtube.com/playlist?list=PLHHMjSyJQeBBGNl9dIn1VrLImEdc_1HnY",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600"
    ]
  }
];

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
          className="w-full h-full object-cover"
        >
          <source src="https://raw.githubusercontent.com/koelho2000/K/c2a426af3f4ce3ca85ee35d53bc22f17470b0776/Banner K.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}

function NewsSection() {
  const newsItems = [
    {
      id: 9,
      type: 'mosaic',
      images: [
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9397.jpg',
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9402.jpg',
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9433.jpg',
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9499.jpg',
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Castelo%20Branco/IMG_9517.jpg'
      ],
      title: 'Certificação Energética IEFP Castelo Branco',
      description: 'Certificação Energética após obra e com PCE de referência do edifício do IEFP de Castelo Branco com uma área de 1500m2 e classe B.',
      date: 'Abril 2026'
    },
    {
      id: 10,
      type: 'mosaic',
      images: [
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/Capa.jpg',
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9528.jpg',
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9535.jpg',
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9544.jpg',
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9548.jpg',
        'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/KOELHO2000/IEFP%20Seixal/IMG_9552.jpg'
      ],
      title: 'Certificação Energética IEFP Seixal',
      description: 'Certificação Energética de edifício existente devoluto do edifício do IEFP do Seixal com uma área de 1500m2 e classe C.',
      date: 'Abril 2026'
    },
    {
      id: 1,
      type: 'image',
      src: 'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/K2000/K2000_K-DATAELECTANALYSE.jpeg',
      title: 'Atualização K-DATA ELECTANALYSE',
      description: 'Atualização da ferramenta de análise de telecontagem com novo módulo de análise de integração de baterias.',
      date: 'Abril 2026'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/EIA/EIA_Livro.jpeg',
      title: 'Energy In Action nas Escolas',
      description: 'Distribuição gratuita e apresentação do livro da EIA Energy In action nas escolas primárias. 2ª edição com 1000 exemplares.',
      date: 'Abril 2026'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/EIA/EIA_Livro_Gassy.mp4',
      title: 'O Caderno dos Super-Heróis da Energia!',
      description: 'Preparativos a todo o gás no armazém! 1000 exemplares prontos para chegar às mãos dos pequenos leitores.',
      date: 'Abril 2026'
    },
    {
      id: 4,
      type: 'video',
      src: 'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/K-BROTHERS/K-BROTHERS_A%20Amizade%20video%20final%20(online-video-cutter.com).mp4',
      title: 'The K-Brothers: A Amizade',
      description: 'Novo vídeo de animação The K-Brothers explorando o tema da amizade com a nossa tecnologia de IA.',
      date: 'Abril 2026'
    },
    {
      id: 5,
      type: 'video',
      src: 'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/K-BROTHERS/K-BROTHERS_ZUM%20(online-video-cutter.com).mp4',
      title: 'The K-Brothers: ZUM',
      description: 'Mais uma incrível aventura animada da série The K-Brothers.',
      date: 'Abril 2026'
    },
    {
      id: 6,
      type: 'video',
      src: 'https://raw.githubusercontent.com/koelho2000/K/main/IMAGENS_NOVIDADES/K-BROTHERS/K-BROTHERS_buzinho%20a%20aventura%20(online-video-cutter.com).mp4',
      title: 'The K-Brothers: Buzinho a Aventura',
      description: 'Acompanhe o Buzinho nesta nova e emocionante aventura animada.',
      date: 'Abril 2026'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600',
      title: 'Nova Plataforma de Simulação',
      description: 'Brevemente lançaremos a nossa nova plataforma de simulação energética com IA integrada.',
      date: '15 Maio 2026'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600',
      title: 'Atualização K-AQSPRO',
      description: 'A nova versão da ferramenta K-AQSPRO trará suporte para novos sistemas híbridos.',
      date: 'Junho 2026'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextNews = () => setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  const prevNews = () => setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);

  return (
    <div className="w-full bg-black py-24 border-t border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-12 text-center tracking-tighter">
          NOVIDADES
        </h2>
        
        <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video md:aspect-[21/9] w-full flex items-center justify-center bg-black"
            >
              {newsItems[currentIndex].type === 'video' ? (
                <video 
                  src={newsItems[currentIndex].src} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              ) : newsItems[currentIndex].type === 'mosaic' ? (
                <div className="absolute inset-0 w-full h-full grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-1 opacity-60">
                  {newsItems[currentIndex].images?.map((img, i) => (
                    <img 
                      key={i}
                      src={img} 
                      alt=""
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              ) : (
                <img 
                  src={newsItems[currentIndex].src} 
                  alt={newsItems[currentIndex].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                <div className="inline-block bg-red-600 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 md:mb-6 w-fit shadow-lg">
                  {newsItems[currentIndex].date}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {newsItems[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-base md:text-xl max-w-3xl drop-shadow-md">
                  {newsItems[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prevNews}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/80 transition-colors z-10 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextNews}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/80 transition-colors z-10 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {newsItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-red-600 w-8' : 'bg-white/50 w-2 hover:bg-white/80'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KBrothersVideo() {
  const mediaItems = [
    { type: 'video', src: "https://raw.githubusercontent.com/koelho2000/K/d3aa8933055bddd75a6d65547dd2c1405eb62827/The K -Brothers Logo Video preto fundo (video).mp4" },
    { type: 'image', src: "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_K-BROTHERS/A Amizade video final-Cover.jpg" },
    { type: 'image', src: "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_K-BROTHERS/buzinho a aventura-Cover.jpg" },
    { type: 'image', src: "https://raw.githubusercontent.com/koelho2000/K/61376feeed3334a822f3a9aa0e89410d213b11e2/IMAGENS_K-BROTHERS/ZUM-Cover.jpg" }
  ];
  const youtubeVideos = ['R7Oir3i8R_4'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);
  const [currentYoutubeIndex, setCurrentYoutubeIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (mediaItems[currentIndex].type === 'image') {
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    if (youtubeVideos.length > 1) {
      const interval = setInterval(() => {
        setCurrentYoutubeIndex((prev) => (prev + 1) % youtubeVideos.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  const nextYoutubeVideo = () => {
    setCurrentYoutubeIndex((prev) => (prev + 1) % youtubeVideos.length);
  };

  const prevYoutubeVideo = () => {
    setCurrentYoutubeIndex((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length);
  };

  return (
    <section className="relative min-h-screen bg-black py-16 @md:py-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/10">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          {mediaItems[currentIndex].type === 'image' ? (
            <img 
              key={mediaItems[currentIndex].src}
              src={mediaItems[currentIndex].src}
              alt="The K-Brothers"
              className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-1000"
              referrerPolicy="no-referrer"
            />
          ) : (
            <motion.video
              key={mediaItems[currentIndex].src}
              src={mediaItems[currentIndex].src}
              autoPlay
              muted
              playsInline
              onEnded={() => setCurrentIndex((prev) => (prev + 1) % mediaItems.length)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </div>

      <div className="container mx-auto px-4 @md:px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <h2 className="text-[11cqw] @md:text-[8rem] font-display font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            The K-Brothers
          </h2>
          <p className="text-[4.5cqw] @md:text-3xl text-gray-300 font-light max-w-3xl mx-auto drop-shadow-md mb-8">
            Filmes de Animação Digital com Conteúdo IA. A próxima geração de narrativas visuais.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.youtube.com/playlist?list=PLHHMjSyJQeBBmOTRLOZ_BlQcc2PBzo3dJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold uppercase tracking-wider transition-colors shadow-lg mb-12"
          >
            <Youtube className="w-6 h-6" />
            <span>Ver Playlist no YouTube</span>
          </motion.a>

          {youtubeVideos.length > 0 && (
            <div className="w-full max-w-5xl relative rounded-xl overflow-hidden border border-white/10 group">
              <AnimatePresence mode="wait">
                <motion.button
                  key={youtubeVideos[currentYoutubeIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => { setActiveYoutubeId(youtubeVideos[currentYoutubeIndex]); setIsVideoOpen(true); }}
                  className="relative w-full aspect-video block"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${youtubeVideos[currentYoutubeIndex]}/mqdefault.jpg`} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </motion.button>
              </AnimatePresence>
              
              {youtubeVideos.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevYoutubeVideo(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextYoutubeVideo(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {youtubeVideos.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentYoutubeIndex ? 'bg-red-600' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && activeYoutubeId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 @md:p-12">
          <button 
            onClick={() => { setIsVideoOpen(false); setActiveYoutubeId(null); }}
            className="absolute top-4 right-4 @md:top-8 @md:right-8 text-white/70 hover:text-white transition-colors z-50 bg-black/50 rounded-full p-2"
          >
            <X className="w-6 h-6 @md:w-10 @md:h-10" />
          </button>
          <div className="w-full max-w-6xl aspect-video relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

function CompanyCard({ company, index, containerRef }: { key?: string, company: { id: string, name: string, subtitle: string, description: string, url: string | null, image: string, images?: string[], videos?: string[], youtubeId?: string, youtubePlaylist?: string, videoBg?: string, youtubeVideos?: string[], applications?: { url: string, img: string, desc: string }[], portfolio?: { img?: string, images?: string[], type?: string, desc: string }[] }, index: number, containerRef: RefObject<HTMLDivElement | null> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentYoutubeIndex, setCurrentYoutubeIndex] = useState(0);
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);

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

  useEffect(() => {
    if (company.youtubeVideos && company.youtubeVideos.length > 1) {
      const interval = setInterval(() => {
        setCurrentYoutubeIndex((prev) => (prev + 1) % company.youtubeVideos!.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [company.youtubeVideos]);

  useEffect(() => {
    if (company.applications && company.applications.length > 1) {
      const interval = setInterval(() => {
        setCurrentAppIndex((prev) => (prev + 1) % company.applications!.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [company.applications]);

  useEffect(() => {
    if (company.portfolio && company.portfolio.length > 1) {
      const interval = setInterval(() => {
        setCurrentPortfolioIndex((prev) => (prev + 1) % company.portfolio!.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [company.portfolio]);

  const nextYoutubeVideo = () => {
    if (!company.youtubeVideos) return;
    setCurrentYoutubeIndex((prev) => (prev + 1) % company.youtubeVideos!.length);
  };

  const prevYoutubeVideo = () => {
    if (!company.youtubeVideos) return;
    setCurrentYoutubeIndex((prev) => (prev - 1 + company.youtubeVideos!.length) % company.youtubeVideos!.length);
  };

  const nextApp = () => {
    if (!company.applications) return;
    setCurrentAppIndex((prev) => (prev + 1) % company.applications!.length);
  };

  const prevApp = () => {
    if (!company.applications) return;
    setCurrentAppIndex((prev) => (prev - 1 + company.applications!.length) % company.applications!.length);
  };

  const nextPortfolio = () => {
    if (!company.portfolio) return;
    setCurrentPortfolioIndex((prev) => (prev + 1) % company.portfolio!.length);
  };

  const prevPortfolio = () => {
    if (!company.portfolio) return;
    setCurrentPortfolioIndex((prev) => (prev - 1 + company.portfolio!.length) % company.portfolio!.length);
  };

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
              <img 
                key={img}
                src={img} 
                alt={`${company.name} - Imagem ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover origin-center transition-opacity duration-1000 ${i === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        ) : (
          <img 
            src={company.image} 
            alt={company.name}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 origin-center"
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
        
        <div className="flex flex-col items-start @md:items-end gap-6 @md:gap-8 w-full @md:w-auto mt-4 @md:mt-0">
          <div className="flex flex-wrap gap-4">
            {company.youtubeId && (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setActiveYoutubeId(company.youtubeId!); setIsVideoOpen(true); }}
                className="flex-shrink-0 w-16 h-16 @md:w-32 @md:h-32 rounded-full bg-red-600 text-white flex flex-col items-center justify-center gap-1 @md:gap-2 hover:bg-red-700 transition-colors"
              >
                <span className="font-bold text-[10px] @md:text-base uppercase tracking-wider">Vídeo</span>
                <Play className="w-5 h-5 @md:w-8 @md:h-8" />
              </motion.button>
            )}
            {company.youtubePlaylist && (
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={company.youtubePlaylist}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-16 h-16 @md:w-32 @md:h-32 rounded-full bg-red-600 text-white flex flex-col items-center justify-center gap-1 @md:gap-2 hover:bg-red-700 transition-colors"
              >
                <span className="font-bold text-[10px] @md:text-base uppercase tracking-wider">Playlist</span>
                <Youtube className="w-5 h-5 @md:w-8 @md:h-8" />
              </motion.a>
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

          {(company.youtubeVideos?.length || company.applications?.length || company.portfolio?.length) ? (
            <div className="flex flex-col gap-6 w-full @md:w-[350px] @lg:w-[500px] @xl:w-[650px] @2xl:w-[800px] max-w-full">
              {company.youtubeVideos && company.youtubeVideos.length > 0 && (
                <div className="w-full relative rounded-xl overflow-hidden border border-white/10 group">
                  <AnimatePresence mode="wait">
                    <motion.button
                      key={company.youtubeVideos[currentYoutubeIndex]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => { setActiveYoutubeId(company.youtubeVideos![currentYoutubeIndex]); setIsVideoOpen(true); }}
                      className="relative w-full aspect-video block"
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${company.youtubeVideos[currentYoutubeIndex]}/mqdefault.jpg`} 
                        alt="Video thumbnail" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </motion.button>
                  </AnimatePresence>
                  
                  {company.youtubeVideos.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevYoutubeVideo(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextYoutubeVideo(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {company.youtubeVideos.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentYoutubeIndex ? 'bg-red-600' : 'bg-white/50'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {company.applications && company.applications.length > 0 && (
                <div className="w-full relative rounded-xl overflow-hidden border border-white/10 group bg-black/40">
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={company.applications[currentAppIndex].url}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      href={company.applications[currentAppIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full aspect-video flex flex-col items-center justify-center p-6 text-center hover:bg-white/5 transition-colors"
                    >
                      <div className="h-24 w-auto mb-4 flex items-center justify-center">
                        <img 
                          src={company.applications[currentAppIndex].img} 
                          alt="App Logo" 
                          className="max-h-full max-w-full object-contain drop-shadow-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-sm @md:text-base text-gray-300 line-clamp-3">
                        {company.applications[currentAppIndex].desc}
                      </p>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2">
                          <span>Abrir Aplicação</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.a>
                  </AnimatePresence>
                  
                  {company.applications.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevApp(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextApp(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 z-10 w-full px-8">
                        {company.applications.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentAppIndex ? 'bg-red-600' : 'bg-white/30'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {company.portfolio && company.portfolio.length > 0 && (
                <div className="w-full relative rounded-xl overflow-hidden border border-white/10 group bg-black/40">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPortfolioIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full aspect-video overflow-hidden"
                    >
                      {company.portfolio[currentPortfolioIndex].type === 'mosaic' ? (
                        <div className="absolute inset-0 w-full h-full grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-1">
                          {company.portfolio[currentPortfolioIndex].images?.map((img, i) => (
                            <img 
                              key={i}
                              src={img} 
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                          ))}
                        </div>
                      ) : (
                        <img 
                          src={company.portfolio[currentPortfolioIndex].img} 
                          alt={company.portfolio[currentPortfolioIndex].desc} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-12 text-center">
                        <p className="text-sm @md:text-base text-white font-medium drop-shadow-md">
                          {company.portfolio[currentPortfolioIndex].desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {company.portfolio.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevPortfolio(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextPortfolio(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 z-10 px-4 w-full">
                        {company.portfolio.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentPortfolioIndex ? 'bg-red-600' : 'bg-white/50'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>

    {/* Video Modal */}
    {isVideoOpen && activeYoutubeId && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 @md:p-12">
        <button 
          onClick={() => { setIsVideoOpen(false); setActiveYoutubeId(null); }}
          className="absolute top-4 right-4 @md:top-8 @md:right-8 text-white/70 hover:text-white transition-colors z-50 bg-black/50 rounded-full p-2"
        >
          <X className="w-6 h-6 @md:w-10 @md:h-10" />
        </button>
        <div className="w-full max-w-6xl aspect-video relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=1`} 
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

function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 @md:px-6 py-4 @md:py-6 flex justify-between items-center mix-blend-difference text-white">
      <div className="text-3xl @md:text-4xl font-display font-black tracking-tighter">K</div>
    </nav>
  );
}

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-neutral-900 min-h-screen font-sans selection:bg-white selection:text-black flex justify-center">
      <div className="w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative bg-black @container">
        <Navigation />
        
        <div 
          ref={scrollContainerRef} 
          className="overflow-y-auto overflow-x-hidden scroll-smooth h-screen"
        >
          <Hero containerRef={scrollContainerRef} />
          
          <div className="flex flex-col">
            {companies.map((company, index) => (
              <CompanyCard key={company.id} company={company} index={index} containerRef={scrollContainerRef} />
            ))}
          </div>

          <KBrothersVideo />
          
          <NewsSection />

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
