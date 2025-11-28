export type Language = 'en' | 'pt';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      work: 'Work',
      pricing: 'Pricing',
      howItWorks: 'How it works',
      faq: 'FAQ',
      blog: 'Blog',
      bookCall: 'Book a Call',
    },
    hero: {
      headline: 'AI-powered ad content, delivered twice as fast at half the cost.',
      subhead: 'AI Cinematic Content. Automated.',
      primaryCta: 'Book a Call',
      secondaryCta: 'See Packages',
      trustLine: 'Built for founder-led e-commerce brands',
      badges: {
        fast: 'Fast turnaround',
        noSub: 'No subscription',
        bilingual: 'EN & PT',
      },
    },
    socialProof: {
      title: 'What your campaign kit can look like in 7–14 days',
    },
    valueProps: {
      title: 'Why Choose Us?',
      subtitle: 'Stop Wasting Time. Start Creating Value.',
      faster: {
        title: 'We save you time',
        description: 'Launch campaigns in days, not weeks.',
      },
      polish: {
        title: 'Agency-level polish',
        description: '18 years of VFX eye for detail.',
      },
      budget: {
        title: 'We save you money',
        description: 'Smaller teams creating even more content.',
      },
    },
    offer: {
      title: 'Everything You Need to Launch, Scale, and Automate Creative',
      subtitle: 'Check out our deliverables.',
      cinematicAd: {
        title: 'Cinematic AI Ad',
        description: 'Scroll-stopping UGC, short-form, and static ads tailored to your brand.',
      },
      automation: {
        title: 'Done-for-You Automation',
        description: 'We automate your creative pipeline — from blogs to posts to visuals.',
      },
      direction: {
        title: 'Creative Direction',
        description: 'Every asset is guided by 18 years of VFX and storytelling experience.',
      },
      customSystems: {
        title: 'Custom Systems, Yours to Control',
        description: 'Want in-house control? We build and hand over your own AI workflows.',
      },
    },
    pricing: {
      title: 'Pricing Packages',
      subtitle: 'Choose the right fit for your brand',
      cta: 'Get This Package',
      starter: {
        name: 'Starter',
        price: '$500',
        features: [
          '5 assets (UGC, static, or short video mix)',
          '1 platform',
          '7-day delivery',
          '2 revisions per asset',
          'Brand styling + AI-generated captioning',
        ],
        bestFor: 'Testing AI content creation before scaling',
      },
      scale: {
        name: 'Scale',
        price: '$2,000',
        badge: 'Recommended',
        features: [
          '30 assets (UGC, product shots, 2D/3D short videos)',
          'Up to 3 platforms',
          '14-day delivery',
          '3 revisions (within scope)',
          '1 hr starter strategy call',
          'Automated posting setup (1 platform)',
        ],
        bestFor: 'Brands ready to scale their content production',
      },
      bespokeAI: {
        name: 'Bespoke AI',
        price: 'Custom',
        features: [
          'Brand-voiced automation across socials',
          'AI content repurposing system',
          'Full AI blogging & SEO pipeline',
          'Lead-generation & newsletter automations',
          'AI-powered influencer research & outreach',
          'Dedicated account manager',
        ],
        bestFor: 'Agencies or brands ready to integrate automation',
      },
      bespokeVFX: {
        name: 'Bespoke VFX',
        price: 'Custom',
        features: [
          'Script breakdowns & budgeting',
          'On-set VFX supervision',
          'Full VFX shots & sequences',
          'Digital Matte Painting (DMP)',
          'High-end compositing',
          'Cleanup & finishing',
        ],
        bestFor: 'Production companies and film projects',
      },
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to transform your content',
      step1: {
        title: 'Discovery',
        description: '30 min call to understand your goals, products, and platforms.',
      },
      step2: {
        title: 'Production',
        description: 'We create and iterate over 7–14 days.',
      },
      step3: {
        title: 'Launch & Learn',
        description: 'Deliverables + guidance; optional automation retainer.',
      },
    },
    icp: {
      title: 'Who We Work With',
      description: 'Small e-commerce brands (2–20 people) in UK/EU/PT/BR. Founder or marketing manager. Want done-for-you content, quick wins, clear pricing.',
    },
    founder: {
      title: 'Meet the Founder',
      description: 'Caroline Pires is a senior VFX compositor and supervisor with nearly two decades of experience in film, television, and advertising. Her portfolio spans multi–Oscar-winning productions such as Martin Scorsese\'s Hugo 3D and globally recognized campaigns like ASICS Gellyfish.\n\nHaving worked with world-class studios including Framestore, Cinesite, and Pixomondo, Caroline combined her creative expertise with her computer science background to launch Nerdeo—an innovative online collaboration platform connecting professionals across independent film, TV, and gaming.\n\nDriven by a lifelong passion for technology and visual storytelling, Caroline founded NU Studios as the next evolution of that vision—bringing together creativity, AI, and automation to redefine how brands create and scale content in the digital age.',
    },
    faq: {
      title: 'What do we need from you?',
      questions: [
        {
          q: 'How fast is delivery?',
          a: '7–14 days depending on package.',
        },
        {
          q: 'What do you need from us?',
          a: 'Brand assets, product links, and examples of styles you like.',
        },
        {
          q: 'How do revisions work?',
          a: 'Each package includes a set number of revision rounds. See package details above.',
        },
        {
          q: 'Do you handle media buying?',
          a: 'Not at launch; we focus on creative + automation.',
        },
        {
          q: 'What languages do you support?',
          a: 'English and Portuguese (Brazil supported).',
        },
        {
          q: 'Can we add automation later?',
          a: 'Yes, as a retainer once your creative is performing.',
        },
      ],
    },
    ctaBanner: {
      title: 'Ready to launch faster for less?',
      primaryCta: 'Book a Call',
      secondaryCta: 'Email Us',
    },
    footer: {
      contact: 'Contact',
      location: 'Lisbon, PT',
      links: {
        work: 'Work',
        pricing: 'Pricing',
        howItWorks: 'How it works',
        faq: 'FAQ',
        blog: 'Blog',
        privacy: 'Privacy',
        terms: 'Terms',
      },
    },
    form: {
      title: 'Get Started',
      name: 'Name',
      email: 'Email',
      website: 'Website/Store URL',
      package: 'Package',
      message: 'Message',
      submit: 'Send Message',
      success: 'Thanks! We\'ll be in touch soon.',
      selectPackage: 'Select a package',
    },
  },
  pt: {
    nav: {
      services: 'Serviços',
      work: 'Trabalhos',
      pricing: 'Preços',
      howItWorks: 'Como funciona',
      faq: 'FAQ',
      blog: 'Blog',
      bookCall: 'Marcar Chamada',
    },
    hero: {
      headline: 'Conteúdo publicitário com IA, duas vezes mais rápido e por metade do custo.',
      subhead: 'Conteúdo Cinematográfico com IA. Automatizado.',
      primaryCta: 'Marcar Chamada',
      secondaryCta: 'Ver Pacotes',
      trustLine: 'Feito para marcas de e-commerce lideradas por fundadores',
      badges: {
        fast: 'Entrega rápida',
        noSub: 'Sem subscrição',
        bilingual: 'EN & PT',
      },
    },
    socialProof: {
      title: 'Como o seu kit de campanha pode ficar em 7–14 dias',
    },
    valueProps: {
      title: 'Porquê Escolher-nos?',
      subtitle: 'Pare de Desperdiçar Tempo. Comece a Criar Valor.',
      faster: {
        title: 'Poupamos o seu tempo',
        description: 'Lance campanhas em dias, não semanas.',
      },
      polish: {
        title: 'Qualidade profissional',
        description: '18 anos de experiência em VFX com atenção aos detalhes.',
      },
      budget: {
        title: 'Poupamos o seu dinheiro',
        description: 'Equipas mais pequenas criando ainda mais conteúdo.',
      },
    },
    offer: {
      title: 'Tudo o Que Precisa para Lançar, Escalar e Automatizar Criatividade',
      subtitle: 'Confira os nossos entregáveis.',
      cinematicAd: {
        title: 'Anúncio Cinematográfico com IA',
        description: 'UGC impactante, formato curto e anúncios estáticos personalizados para a sua marca.',
      },
      automation: {
        title: 'Automação Feita para Si',
        description: 'Automatizamos o seu pipeline criativo — de blogs a posts a visuais.',
      },
      direction: {
        title: 'Direção Criativa',
        description: 'Cada recurso é guiado por 18 anos de experiência em VFX e storytelling.',
      },
      customSystems: {
        title: 'Sistemas Personalizados, Seu Controle',
        description: 'Quer controle interno? Construímos e entregamos os seus próprios workflows de IA.',
      },
    },
    pricing: {
      title: 'Pacotes de Preços',
      subtitle: 'Escolha o mais adequado para a sua marca',
      cta: 'Obter Este Pacote',
      starter: {
        name: 'Inicial',
        price: '$500',
        features: [
          '5 recursos (UGC, estático ou mix de vídeo curto)',
          '1 plataforma',
          'Entrega em 7 dias',
          '2 revisões por recurso',
          'Estilização de marca + legendagem gerada por IA',
        ],
        bestFor: 'Testar criação de conteúdo com IA antes de escalar',
      },
      scale: {
        name: 'Escala',
        price: '$2.000',
        badge: 'Recomendado',
        features: [
          '30 recursos (UGC, fotos de produto, vídeos 2D/3D)',
          'Até 3 plataformas',
          'Entrega em 14 dias',
          '3 revisões (dentro do escopo)',
          'Chamada de estratégia de 1 hora',
          'Configuração de publicação automatizada (1 plataforma)',
        ],
        bestFor: 'Marcas prontas para escalar a produção de conteúdo',
      },
      bespokeAI: {
        name: 'Bespoke AI',
        price: 'Sob consulta',
        features: [
          'Automação com voz de marca em redes sociais',
          'Sistema de reaproveitamento de conteúdo com IA',
          'Pipeline completo de blog e SEO com IA',
          'Automações de geração de leads e newsletters',
          'Pesquisa e divulgação de influenciadores com IA',
          'Gestor de conta dedicado',
        ],
        bestFor: 'Agências ou marcas prontas para integrar automação',
      },
      bespokeVFX: {
        name: 'Bespoke VFX',
        price: 'Sob consulta',
        features: [
          'Análise de roteiro e orçamentação',
          'Supervisão de VFX no set',
          'Shots e sequências VFX completas',
          'Digital Matte Painting (DMP)',
          'Compositing de alto nível',
          'Limpeza e finalização',
        ],
        bestFor: 'Produtoras e projetos cinematográficos',
      },
    },
    howItWorks: {
      title: 'Como Funciona',
      subtitle: 'Três passos simples para transformar o seu conteúdo',
      step1: {
        title: 'Descoberta',
        description: 'Chamada de 30 min para entender seus objetivos, produtos e plataformas.',
      },
      step2: {
        title: 'Produção',
        description: 'Criamos e iteramos ao longo de 7–14 dias.',
      },
      step3: {
        title: 'Lançamento e Aprendizagem',
        description: 'Entregáveis + orientação; retentor de automação opcional.',
      },
    },
    icp: {
      title: 'Com Quem Trabalhamos',
      description: 'Pequenas marcas de e-commerce (2–20 pessoas) no Reino Unido/UE/PT/BR. Fundador ou gestor de marketing. Querem conteúdo feito para si, vitórias rápidas, preços claros.',
    },
    founder: {
      title: 'Conheça a Fundadora',
      description: 'Caroline Pires é compositora e supervisora sénior de VFX com quase duas décadas de experiência em cinema, televisão e publicidade. O seu portfólio abrange produções premiadas com vários Óscares, como Hugo 3D de Martin Scorsese, e campanhas reconhecidas globalmente como ASICS Gellyfish.\n\nTendo trabalhado com estúdios de classe mundial incluindo Framestore, Cinesite e Pixomondo, Caroline combinou a sua expertise criativa com o seu background em ciência da computação para lançar Nerdeo—uma plataforma inovadora de colaboração online que conecta profissionais de cinema independente, TV e gaming.\n\nImpulsionada por uma paixão de longa data por tecnologia e narrativa visual, Caroline fundou NU Studios como a próxima evolução dessa visão—unindo criatividade, IA e automação para redefinir como as marcas criam e escalam conteúdo na era digital.',
    },
    faq: {
      title: 'O que precisamos de si?',
      questions: [
        {
          q: 'Quão rápida é a entrega?',
          a: '7–14 dias dependendo do pacote.',
        },
        {
          q: 'O que precisam de nós?',
          a: 'Recursos da marca, links de produtos e exemplos de estilos que gosta.',
        },
        {
          q: 'Como funcionam as revisões?',
          a: 'Cada pacote inclui um número definido de rodadas de revisão. Veja os detalhes do pacote acima.',
        },
        {
          q: 'Fazem compra de mídia?',
          a: 'Não no lançamento; focamos em criativo + automação.',
        },
        {
          q: 'Que línguas suportam?',
          a: 'Inglês e Português (Brasil suportado).',
        },
        {
          q: 'Podemos adicionar automação mais tarde?',
          a: 'Sim, como retentor assim que o seu criativo estiver a ter performance.',
        },
      ],
    },
    ctaBanner: {
      title: 'Pronto para lançar mais rápido por menos?',
      primaryCta: 'Marcar Chamada',
      secondaryCta: 'Enviar Email',
    },
    footer: {
      contact: 'Contacto',
      location: 'Lisboa, PT',
      links: {
        work: 'Trabalhos',
        pricing: 'Preços',
        howItWorks: 'Como funciona',
        faq: 'FAQ',
        blog: 'Blog',
        privacy: 'Privacidade',
        terms: 'Termos',
      },
    },
    form: {
      title: 'Começar',
      name: 'Nome',
      email: 'Email',
      website: 'Website/URL da Loja',
      package: 'Pacote',
      message: 'Mensagem',
      submit: 'Enviar Mensagem',
      success: 'Obrigado! Entraremos em contacto em breve.',
      selectPackage: 'Selecione um pacote',
    },
  },
};

export function useTranslation(lang: Language) {
  return translations[lang];
}
