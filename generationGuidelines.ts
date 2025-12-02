// FEATURE: Novo "cérebro de conteúdo" da IA.
// Este arquivo mapeia cada seção do plano de negócios para as exigências
// específicas do SEBRAE e BRDE, conforme detalhado pelo usuário.
// A IA usará isso como um roteiro obrigatório para gerar texto.

export interface SectionGuideline {
  title: string;
  // Para geração estruturada simples
  sebrae?: string[];
  brde?: string[];
  keywords?: string[];
  // FEATURE: Para geração complexa de alta fidelidade
  fullPrompt?: string; 
}

// FIX: A `generationGuidelines` agora usa a interface `SectionGuideline` mais flexível.
export const generationGuidelines: Record<string, SectionGuideline> = {
  // --- TÓPICO 2: ANÁLISE DE MERCADO ---

  '2.0': {
    title: 'Introdução à Análise de Mercado',
    fullPrompt: `
      Role:
      You are the AI responsible for writing sub-chapter 2.0 – Introduction to Market Analysis for the SCine Business Plan, following the SEBRAE Methodology and BRDE requirements.

      1. Objective of sub-chapter 2.0

      In the final text, you must:

      - Explain why Market Analysis is critical for the SCine plan: demand validation, risk reduction, support for financial projections, and strategic decisions.
      - Contextualize which market dimensions will be analyzed in the following sub-items (2.1, 2.2, 2.3, etc.): segments, customer profile, needs, competition, market size, trends, risks.
      - Make it clear, in general terms, that the analysis is built upon: research conducted with the target audience, secondary market data, internal planning information (without mentioning file or matrix names).
      - Connect the Market Analysis with: the Marketing Plan, the Financial Plan (associating market ↔ subscriber and revenue projections), and the credit risk assessment made by a financier like BRDE.
      - The text must be explanatory, objective, and technical, without appearing like a draft and without going into numerical details (those are for the sub-items).

      2. SEBRAE Requirements for 2.0

      In this introduction, you must make it clear to the reader that:

      - The Market Analysis exists to provide structured answers to:
        - Who is SCine's customer?
        - What is the size and potential of this market?
        - Who are the competitors?
        - What trends and risks affect the business?
      - Chapter 2 is built upon:
        - market research,
        - reference data and studies,
        - and internal analyses.
      - Do not detail methodologies here; just frame what the reader will find in the sub-items.

      3. BRDE Requirements for 2.0

      You must explicitly state, in simple language, that:

      - This section serves to support the credit request because it shows that:
        - there is real demand,
        - the target audience has the capacity to pay,
        - the competition has been analyzed,
        - the financial projections are supported by data.
      - From this analysis, the financier will be able to assess if:
        - the subscriber goals are reasonable,
        - SCine's positioning finds a competitive space,
        - the project's risk is acceptable.
      - Without using excessive banking jargon – just make this function clear.

      4. Information Search Order (For internal use, not to be mentioned in the text)

      To construct the text for 2.0, follow this internal order:

      - First, use the STRATEGIC_MATRIX_SCINE, primarily reading:
        - customerSegments
        - valueProposition
        - channels
        - swot
        - any marketContext field or similar, if it exists.
      - Use these fields only as an internal basis for understanding:
        - who the customers are,
        - what pains and needs exist,
        - what opportunities and risks have already been identified.
      - Then, consult the internal documents (market analysis, marketing plan, SCine research) to refine this vision.
      - In the final text:
        - DO NOT mention "STRATEGIC_MATRIX_SCINE", "file X", or PDF names.
        - You can speak generically about "conducted research", "market studies", "internal analyses".
      - If, after analyzing the Matrix + documents, you notice that there are still gaps in certain points of the analysis:
        - do not invent data,
        - do not promise details that are not described,
        - just keep the introduction at a general level, without going into details that are not supported.

      5. Suggested Structure of the Final Text (2.0)

      Organize the final text into 3 or 4 paragraphs:

      - Paragraph 1 – Explain, in general terms, the role of the Market Analysis within the SCine plan.
      - Paragraph 2 – Present, in broad strokes, which aspects will be analyzed (segments, profile, competition, size, trends, risks).
      - Paragraph 3 – Indicate, generically, that the analysis was built based on research with the audience, market data, and internal studies.
      - Optional Paragraph – Connect this analysis with the financial plan and the risk perspective of a financier.
      
      Final Instruction: Based on all the rules above and the user-provided context (documents, notes), generate the final text for section 2.0 in Brazilian Portuguese.
    `,
  },
  '2.1': {
  title: 'Segmentação de Mercado',
  fullPrompt: `
      Papel:
      Você é a IA responsável por escrever o subcapítulo 2.1 – Segmentação de Mercado do Plano de Negócios da SCine, seguindo a Metodologia SEBRAE e as exigências do BRDE.

      1. Objetivo do subcapítulo 2.1

      No texto final, você deve:

      - Descrever claramente como o mercado da SCine foi segmentado em grupos de clientes (por exemplo: público final/assinantes, empresas, prefeituras, festivais, instituições parceiras, etc.).
      - Apresentar, em termos qualitativos, os principais dados demográficos, geográficos e comportamentais de cada segmento (faixa etária, localização, hábitos de consumo de mídia, uso de internet/streaming, etc.).
      - Explicar resumidamente a frequência de consumo, hábitos digitais e capacidade/poder de compra dos segmentos mais relevantes.
      - Indicar, em nível geral, que o tamanho de cada segmento é suficiente para sustentar o modelo de negócio da SCine (sem entrar ainda em números detalhados de TAM/SAM/SOM, que serão tratados no item 2.5).
      - Deixar claro quem paga, quanto paga em média (faixa de preço/assinatura) e por quais motivos estaria disposto a pagar pela SCine (motivações e percepções de valor).

      O texto deve ser descritivo, coeso e técnico, mas escrito em linguagem clara, sem listas excessivamente técnicas ou só “checagem de requisitos”.

      2. Exigências SEBRAE para o item 2.1

      Nesta seção, você deve deixar evidente que:

      - Os grupos de clientes foram identificados de forma clara (por exemplo: assinantes pessoa física, prefeituras contratantes de transmissões, empresas que usam brand channel, festivais, produtores parceiros, etc.).
      - Existem informações sobre:
        - dados demográficos (idade, renda aproximada, perfil socioeconômico),
        - dados geográficos (cidades, regiões, foco em Santa Catarina e expansão prevista),
        - dados comportamentais (como consomem conteúdo, quais plataformas utilizam, quanto tempo passam em streaming, interesse por cultura regional).
      - Há uma visão sobre:
        - frequência de consumo (quantas vezes por semana/mês consomem esse tipo de conteúdo),
        - hábitos digitais (uso de celular, smart TV, redes sociais),
        - e poder de compra (capacidade básica de pagar uma assinatura ou contratar serviços B2B/B2G).
      - Fica implícito ou explícito que o(s) segmento(s) escolhido(s) são grandes o suficiente para sustentar o modelo de negócio, sem ainda apresentar as contas detalhadas (que virão nos itens 2.4, 2.5 e 2.9).

      3. Exigências BRDE para o item 2.1

      Você deve atender às seguintes necessidades do financiador:

      - Mostrar que há evidência de que o mercado segmentado é suficientemente amplo para justificar o pedido de crédito, ainda que em termos qualitativos.
      - Indicar que a segmentação se apoia em:
        - dados concretos de pesquisa própria (questionários, entrevistas, formulários, etc.),
        - e dados externos (relatórios de mercado, dados oficiais, estudos setoriais),
        sem citar nomes de arquivos específicos.
      - Deixar claro:
        - quem efetivamente paga (assinantes, prefeituras, empresas, patrocinadores),
        - quanto está disposto a pagar em média (faixas de preço/assinatura ou contratação),
        - e por quê (quais benefícios, diferenciais e percepções de valor justificam o gasto).
      - Construir o texto de forma a ajudar o BRDE a enxergar que:
        - a segmentação é coerente com a realidade econômica dos clientes,
        - e que existe base para projeções futuras de assinantes e receitas.

      4. Ordem de busca de informações (uso interno, não deve aparecer no texto)

      Para construir o texto do item 2.1, siga esta ordem interna:

      - Primeiro, consulte a STRATEGIC_MATRIX_SCINE, principalmente:
        - customerSegments (segmentos de clientes, personas),
        - valueProposition (proposta de valor para cada segmento),
        - revenueStreams (como cada segmento gera receita),
        - quaisquer campos relacionados a perfis de clientes, público-alvo ou mercado.
      - Use esses campos apenas como base interna para entender:
        - quais segmentos já foram definidos,
        - que tipo de informação demográfica, geográfica e comportamental já está descrita,
        - e como cada segmento se conecta à proposta de valor da SCine.
      - Em seguida, refine essa visão consultando os documentos internos:
        - análise de mercado,
        - resultados de pesquisas com o público,
        - plano de marketing,
        - e outros estudos de apoio.
      - No texto final:
        - NÃO mencione “STRATEGIC_MATRIX_SCINE”, nomes de arquivos, planilhas ou PDFs.
        - Fale apenas em termos genéricos, como “pesquisas realizadas com o público-alvo”, “estudos de mercado” e “análises internas”.
      - Se, após analisar a Matriz + documentos, você perceber lacunas (por exemplo, falta de dados comportamentais ou de capacidade de pagamento):
        - não invente números,
        - não detalhe o que não está suportado,
        - mantenha a descrição em nível geral, deixando claro apenas o que está fundamentado.

      5. Estrutura sugerida para o texto final (2.1)

      Organize o texto final em 3 a 5 parágrafos:

      - Parágrafo 1 – Apresente, em termos gerais, como o mercado foi segmentado (principais grupos de clientes da SCine).
      - Parágrafo 2 – Descreva os principais traços demográficos, geográficos e comportamentais dos segmentos prioritários.
      - Parágrafo 3 – Explique os hábitos de consumo de conteúdo e os hábitos digitais, destacando a relação com streaming, cultura regional e uso de internet.
      - Parágrafo 4 – Aborde, de forma qualitativa, o poder de compra e a capacidade de pagamento dos segmentos, conectando isso à lógica de planos de assinatura e serviços B2B/B2G.
      - Parágrafo 5 (opcional) – Reforce que a segmentação aponta para um mercado suficientemente amplo e coerente com o modelo de negócio e com o pedido de crédito, sem ainda entrar em cálculos numéricos detalhados.

      Instrução final:
      Com base em todas as regras acima, no contexto fornecido pelo usuário (documentos, notas) e nas informações consolidadas para a SCine, gere o texto final da seção 2.1 em português brasileiro, descrevendo a segmentação de mercado de forma clara, coerente e alinhada às exigências do SEBRAE e do BRDE.
    `,
},
  '2.2': {
  title: 'Perfil do Cliente/Persona',
  fullPrompt: `
      Papel:
      Você é a IA responsável por escrever o subcapítulo 2.2 – Perfil do Cliente/Persona do Plano de Negócios da SCine, seguindo a Metodologia SEBRAE e as exigências do BRDE.

      1. Objetivo do subcapítulo 2.2

      No texto final, você deve:

      - Descrever, em profundidade, quem é o cliente típico da SCine em seus principais segmentos (persona(s) prioritárias).
      - Explicar o comportamento desse cliente: motivadores, barreiras, objeções e fatores que influenciam a decisão de assinar a plataforma ou contratar serviços da SCine.
      - Mostrar como essa persona descobre, avalia, compara e decide entre plataformas de streaming e outras opções de entretenimento/cultura.
      - Evidenciar o ajuste cliente–produto (product–market fit): por que a proposta da SCine faz sentido para esse perfil, considerando identidade regional, catálogo, preço, acessibilidade, eventos ao vivo, etc.
      - Descrever a capacidade econômica e a coerência entre o perfil da persona e a manutenção de uma assinatura recorrente (ou contratação de serviços B2B/B2G).

      O texto deve ser narrativo, técnico e claro, evitando apenas listas de checklist. A ideia é “contar” o perfil do cliente de forma aplicada ao negócio.

      2. Exigências SEBRAE para o item 2.2

      Nesta seção, você deve deixar evidente que:

      - O comportamento do cliente foi analisado, incluindo:
        - motivadores (o que leva a buscar cultura, streaming, conteúdo regional, eventos ao vivo, etc.),
        - barreiras (preço, confiança, usabilidade, concorrência, falta de hábito),
        - objeções típicas (mais uma assinatura, qualidade do catálogo, estabilidade técnica, etc.).
      - Estão descritos os fatores de decisão do cliente, como:
        - preço,
        - qualidade do catálogo,
        - identificação com o conteúdo regional,
        - facilidade de uso,
        - possibilidade de ver eventos locais, festivais e produções catarinenses.
      - Fica claro como o produto se ajusta às expectativas e às dores desse cliente (ajuste cliente–produto), e não apenas como uma descrição genérica de público-alvo.

      3. Exigências BRDE para o item 2.2

      Você deve construir o texto de forma a ajudar o financiador a avaliar:

      - Se o cliente-alvo descrito é coerente com as metas de vendas/assinantes apresentadas em outras partes do plano.
      - Se esse cliente tem, em termos gerais, capacidade econômica para:
        - pagar a assinatura mensal,
        - manter a assinatura ao longo do tempo,
        - ou contratar/justificar serviços B2B/B2G (no caso de prefeituras, empresas, festivais).
      - Se o comportamento e os motivadores da persona tornam razoável a hipótese de adoção e permanência (churn aceitável) no modelo da SCine.
      - Se o perfil de cliente descrito é compatível com:
        - a precificação,
        - o posicionamento,
        - e a proposta de valor que serão aprofundados nos capítulos de Marketing e Finanças.

      Não use jargão bancário excessivo; apenas deixe clara a lógica de “cliente certo para o modelo proposto”.

      4. Ordem de busca de informações (uso interno, não deve aparecer no texto)

      Para construir o texto do item 2.2, siga esta ordem interna:

      - Primeiro, consulte a STRATEGIC_MATRIX_SCINE, principalmente:
        - customerSegments (definição de segmentos e personas),
        - valueProposition (quais benefícios são prometidos a cada tipo de cliente),
        - customerRelationships (como a SCine se relaciona com esses clientes),
        - revenueStreams (como cada persona contribui para a receita).
      - Use esses campos para entender:
        - quem são as personas prioritárias,
        - o que elas valorizam,
        - quais dores aparecem com mais frequência,
        - como se relacionam com a marca e com o serviço.
      - Em seguida, refine o perfil consultando os documentos internos:
        - resultados da pesquisa de mercado com o público,
        - análises qualitativas de entrevistas,
        - registros de planejamento de marketing e estudos sobre comportamento de consumo de streaming.
      - No texto final:
        - NÃO mencione “STRATEGIC_MATRIX_SCINE”, nomes de arquivos, planilhas ou PDFs.
        - Fale apenas de forma genérica: “pesquisas realizadas com o público-alvo”, “entrevistas e estudos internos”, “análises de comportamento de consumo”.
      - Se você notar lacunas (por exemplo, ausência de dados sobre objeções ou poder de compra):
        - não invente detalhes,
        - mantenha a descrição em nível compatível com as informações disponíveis,
        - e não prometa análises que não estejam embasadas.

      5. Estrutura sugerida para o texto final (2.2)

      Organize o texto final em 3 a 5 parágrafos:

      - Parágrafo 1 – Apresente a(s) persona(s) principal(is) da SCine (por exemplo, assinante típico B2C, gestor público que contrata transmissões, empresa interessada em brand channel), em linguagem descritiva.
      - Parágrafo 2 – Detalhe o comportamento: como esse cliente busca entretenimento/cultura, quais plataformas utiliza, como descobre conteúdos, que papel a identidade regional e os eventos locais desempenham na decisão.
      - Parágrafo 3 – Descreva motivadores, barreiras e objeções, mostrando por que a SCine é ou pode ser percebida como solução adequada para esse perfil.
      - Parágrafo 4 – Explique, de forma qualitativa, a capacidade econômica e a coerência entre o perfil descrito, o preço dos planos/serviços e a possibilidade de manter a assinatura ao longo do tempo.
      - Parágrafo 5 (opcional) – Reforce o ajuste cliente–produto, conectando a persona com o posicionamento da SCine e com as metas de crescimento apresentadas no plano.

      Instrução final:
      Com base em todas as regras acima, no contexto fornecido pelo usuário (documentos, notas) e nas informações consolidadas para a SCine, gere o texto final da seção 2.2 em português brasileiro, descrevendo o perfil do cliente/persona de forma clara, aplicada e alinhada às exigências do SEBRAE e do BRDE.
    `,
},
  '2.3': {
  title: 'Necessidades, Problemas e Oportunidades',
  fullPrompt: `
      Papel:
      Você é a IA responsável por escrever o subcapítulo 2.3 – Necessidades, Problemas e Oportunidades do Plano de Negócios da SCine, seguindo a Metodologia SEBRAE e as exigências do BRDE.

      1. Objetivo do subcapítulo 2.3

      No texto final, você deve:

      - Explicar quais são as principais necessidades e problemas do mercado que a SCine pretende resolver (do ponto de vista dos diferentes segmentos de clientes).
      - Descrever as dores atuais relacionadas a acesso à cultura, visibilidade de produções regionais, transmissão de eventos, falta de vitrine para produtores locais, etc.
      - Apontar oportunidades ainda pouco exploradas pelos grandes players (ex.: regionalização, economia criativa catarinense, serviços B2B/B2G ligados a eventos e festivais).
      - Conectar essas necessidades e oportunidades com a proposta de valor da SCine (OTT + HUB + Van 4K) sem ainda entrar em detalhes de produto (isso será aprofundado no capítulo 3).

      O texto deve mostrar claramente “por que” a SCine faz sentido como resposta a um conjunto de problemas reais, e não apenas como uma ideia genérica de plataforma.

      2. Exigências SEBRAE para o item 2.3

      Nesta seção, você deve deixar explícito que:

      - Foram identificadas **dores concretas** do público e dos parceiros, por exemplo:
        - dificuldade de encontrar conteúdo catarinense em plataformas nacionais/globais,
        - baixa visibilidade de produções independentes,
        - pouca cobertura de eventos culturais locais,
        - barreiras de custo e estrutura para transmissões profissionais.
      - Foram mapeadas **oportunidades ignoradas ou subexploradas**, como:
        - demanda por streaming regionalizado,
        - busca por conteúdos que reforcem identidade local,
        - interesse de prefeituras/festivais em transmissões com qualidade broadcast,
        - necessidade de um HUB para profissionalizar a produção audiovisual regional.
      - Sempre que possível, essas dores/oportunidades estão apoiadas em:
        - dados de pesquisa,
        - relatos de produtores e gestores culturais,
        - tendências de mercado já indicadas em outros trechos da análise.

      Não transforme o texto em uma lista solta de dores; organize a narrativa por grupos de clientes ou eixos de necessidade.

      3. Exigências BRDE para o item 2.3

      Você deve estruturar o texto de modo que:

      - Fique claro **por que a SCine é necessária** do ponto de vista de política de crédito:
        - há um problema bem definido (lacuna de oferta/estrutura),
        - há uma oportunidade consistente (mercado e demanda reais),
        - a solução proposta é adequada ao contexto regional.
      - Fique evidente que existe **espaço de mercado não ocupado** (ou mal atendido) pelos grandes players de streaming:
        - especialmente na combinação de OTT regional, HUB físico, Van 4K e foco em economia criativa de Santa Catarina.
      - Aponte que essas necessidades e oportunidades ajudam a:
        - reduzir o risco de inadimplência (porque existe demanda estruturada),
        - justificar as projeções de assinantes, eventos e contratos B2B/B2G que sustentam o plano financeiro.

      Evite linguagem excessivamente promocional; o foco é mostrar lógica de mercado e aderência da solução.

      4. Ordem de busca de informações (uso interno, não deve aparecer no texto)

      Para construir o texto do item 2.3, siga esta ordem interna:

      - Primeiro, leia a STRATEGIC_MATRIX_SCINE, principalmente:
        - valueProposition (quais dores e benefícios já foram mapeados),
        - customerSegments (quem são os públicos afetados por essas dores),
        - swot.strengths e swot.opportunities (oportunidades mapeadas e como a SCine se posiciona).
      - Use esses campos para entender:
        - quais problemas são citados com mais frequência,
        - quais oportunidades estratégicas já foram identificadas,
        - como a proposta de valor se conecta a estes pontos.
      - Em seguida, refine a análise consultando os documentos internos:
        - análise de mercado,
        - resultados de pesquisa com público/gestores/produtores,
        - documentos de “revisão e novas ideias”,
        - plano de marketing antigo (como referência histórica).
      - No texto final:
        - NÃO mencione “STRATEGIC_MATRIX_SCINE”, nomes de arquivos, planilhas ou PDFs.
        - Fale genericamente em “pesquisas realizadas”, “estudos de mercado” e “análises internas”.
      - Se perceber lacunas (por exemplo, não há dados concretos para uma dor citada):
        - não invente números ou fatos,
        - descreva apenas aquilo que está embasado,
        - mantenha o texto em nível de análise qualitativa, sem prometer dados que não existem.

      5. Estrutura sugerida para o texto final (2.3)

      Organize o texto final em 3 a 5 parágrafos:

      - Parágrafo 1 – Apresente, de forma geral, quais são os grandes problemas/necessidades do mercado em que a SCine atua (público final, produtores, prefeituras, festivais).
      - Parágrafo 2 – Detalhe as principais dores dos clientes B2C (assinantes): acesso a conteúdo regional, identificação cultural, preço, experiência de uso, distância entre produção e público.
      - Parágrafo 3 – Detalhe as dores e necessidades dos clientes B2B/B2G (prefeituras, festivais, empresas): visibilidade de eventos, estrutura técnica para transmissão, registro audiovisual profissional, estímulo à economia criativa.
      - Parágrafo 4 – Apresente as oportunidades pouco exploradas que surgem a partir dessas dores (regionalização, HUB, Van 4K, acessibilidade, políticas culturais), mostrando por que a SCine se encaixa nesse espaço.
      - Parágrafo 5 (opcional) – Faça a ponte com os próximos tópicos, indicando que essas necessidades e oportunidades serão quantificadas e conectadas a concorrência, tamanho de mercado e projeções.

      Instrução final:
      Com base em todas as regras acima, no contexto fornecido pelo usuário (documentos, notas) e nas informações consolidadas para a SCine, gere o texto final da seção 2.3 em português brasileiro, descrevendo as necessidades, problemas e oportunidades de forma clara, fundamentada e alinhada às exigências do SEBRAE e do BRDE.
    `,
},
  '2.4': {
    title: 'Pesquisa de Mercado Primária',
    sebrae: [
      'Dados coletados diretamente com o público-alvo.',
      'Conclusões claras sobre interesse, preço, barreiras, hábitos, taxa de adoção.',
      'Amostra robusta (BRDE exige coerência entre amostra e projeção).',
    ],
    brde: [
      'Prova de que as projeções financeiras são realistas.',
      'Evidência de que existe demanda suficiente para sustentar o crescimento previsto.',
      'Validação real das hipóteses (preço, assinaturas, interesse por lives, etc.).',
    ],
    keywords: ['pesquisa de mercado', 'pesquisa primária', 'questionário', 'entrevista', 'amostra', 'validação']
  },
  '2.5': {
    title: 'Mercado Potencial – Quantificação',
    sebrae: [
      'Tamanho total do mercado (TAM)',
      'Tamanho do mercado disponível (SAM)',
      'Tamanho do mercado atendível (SOM).',
    ],
    brde: [
      'Cálculo transparente que mostre: quantas pessoas realmente podem assinar, quantas devem assinar, qual proporção é viável economicamente.',
      'Coerência com o tamanho da população, renda média, penetração digital etc.',
    ],
    keywords: ['tam', 'sam', 'som', 'mercado potencial', 'quantificação', 'tamanho de mercado', 'cálculo']
  },
  '2.6': {
    title: 'Análise da Concorrência',
    sebrae: [
      'Quem são os concorrentes diretos e indiretos.',
      'O que oferecem, quanto custam, como atendem (ou não) o público.',
      'Comparação objetiva (benchmarking) entre SCine e players (GloboPlay, Netflix, Looke, plataformas locais).',
      'Pontos fortes, fracos e brechas estratégicas.',
    ],
    brde: [
      'Que você demonstre conhecimento real do setor e riscos de competição.',
      'Que deixe claro que a SCine não disputa catálogo, mas sim identidade e regionalidade.',
      'Que mostre por que o público pagaria por mais uma plataforma.',
    ],
    keywords: ['concorrência', 'concorrentes', 'competidores', 'benchmarking', 'comparativo', 'players']
  },
  '2.7': {
    title: 'Análise de Tendências de Mercado',
    sebrae: [
      'Crescimento do streaming no Brasil (Kantar, DataReportal, Nielsen).',
      'Consumo de vídeo sob demanda e consumo móvel.',
      'Crescimento de transmissões ao vivo.',
      'Tendências de regionalização e economia criativa.',
    ],
    brde: [
      'Prova de que o setor é crescente, estável e seguro para financiamento.',
      'Dados atualizados e fontes confiáveis.',
      'Fundamentação para projeções de receita.',
    ],
    keywords: ['tendências', 'crescimento', 'streaming', 'vod', 'lives', 'regionalização', 'fontes']
  },
  '2.8': {
    title: 'Análise do Ambiente Externo – Fatores PESTEL',
    sebrae: [
      'Análise objetiva dos fatores: Político, Econômico, Social, Tecnológico, Ambiental e Legal.',
      'Impactos no streaming, cultura, publicidade e produção audiovisual.',
    ],
    brde: [
      'Identificação clara de riscos externos.',
      'Entendimento de regulamentações importantes (ANCINE, LGPD, ISS, IVA digital).',
      'Avaliação de como políticas públicas influenciam o projeto (PIC, SIMDEC, FSA).',
    ],
    keywords: ['pestel', 'ambiente externo', 'político', 'econômico', 'social', 'tecnológico', 'legal', 'regulamentação']
  },
  '2.9': {
    title: 'Análise Setorial',
    sebrae: [
      'Como funciona o setor audiovisual e de streaming no Brasil.',
      'Volume de produções, circulação, plataformas, estrutura de custos.',
      'Dados reais sobre monetização, publicidade, modelos híbridos e B2B.',
    ],
    brde: [
      'Clareza sobre custos reais, ciclos de produção e sazonalidade.',
      'Coerência entre capacidade produtiva da SCine e o setor.',
    ],
    keywords: ['setor', 'setorial', 'audiovisual', 'streaming', 'monetização', 'custos do setor']
  },
  '2.10': {
    title: 'Barreiras de Entrada e Riscos de Mercado',
    sebrae: [
      'Barreiras tecnológicas',
      'Barreiras de catálogo',
      'Barreiras regulatórias',
      'Barreiras financeiras',
    ],
    brde: [
      'Maturidade na identificação de riscos.',
      'Planos de mitigação sólidos.',
      'Transparência sobre limitações (concorrência, churn, dependência de conteúdo).',
    ],
    keywords: ['barreiras de entrada', 'riscos de mercado', 'mitigação', 'ameaças']
  },
  '2.11': {
    title: 'Oportunidades Competitivas',
    sebrae: [
      'Por que a SCine tem vantagem competitiva frente ao mercado.',
      'Fatores diferenciadores: identidade local, Van 4K, HUB, acessibilidade, coproduções.',
    ],
    brde: [
      'Que você prove que existe um espaço real onde a SCine domina.',
      'Que a vantagem é sustentável e não baseada em moda ou sorte.',
    ],
    keywords: ['vantagem competitiva', 'diferenciais', 'oportunidades', 'posicionamento']
  },
  '2.12': {
    title: 'Síntese da Análise de Mercado',
    sebrae: [
      'Conclusão lógica conectando dados → oportunidades → público → viabilidade.',
      'Evidência de que o negócio é financeiramente plausível no mercado identificado.',
    ],
    brde: [
      '“Uma síntese lógica, fundamentada e compatível com as projeções financeiras.”',
      'Essa síntese é o que reduz o risco percebido e aumenta a pontuação do crédito.',
    ],
    keywords: ['síntese', 'conclusão', 'veredito', 'viabilidade de mercado', 'resumo do mercado']
  },
  // --- TÓPICO 3: PRODUTO/SERVIÇO ---
  '3.1': {
    title: 'Produto/Serviço',
    sebrae: ['Descrição clara do produto', 'Benefícios', 'Diferenciais', 'Portfólio de serviços', 'Como funciona'],
    brde: ['Prova técnica de que o produto pode ser entregue', 'Pipeline operacional documentado', 'Padrões de qualidade', 'Acessibilidade (AD, Libras, CC) como processo', 'Conexão entre produto → equipe → custos', 'Roadmap de evolução técnica'],
    keywords: ['produto', 'serviço', 'plataforma', 'ott', 'hub', 'van 4k', 'funcionalidades', 'pipeline', 'roadmap']
  },
  // --- TÓPICO 4: PLANO DE MARKETING ---
  '4.1': {
    title: 'Estratégia de Posicionamento e Canais',
    sebrae: ['Definição dos 4 Ps (Produto, Preço, Praça, Promoção).', 'Estratégia de posicionamento da marca no mercado.', 'Descrição dos canais de comunicação e distribuição.'],
    brde: ['Coerência do preço com a capacidade de pagamento do público-alvo (verificado na Análise de Mercado).'],
    keywords: ['marketing', '4p', 'produto', 'preço', 'praça', 'promoção', 'posicionamento', 'marca', 'canais', 'comunicação', 'distribuição']
  },
  '4.2': {
    title: 'Estratégia de Aquisição e Métricas Financeiras',
    sebrae: ['Descrição clara da estratégia de aquisição de clientes.', 'Funil de aquisição por fase (atração, conversão, retenção).'],
    brde: ['Cálculo e projeção do Custo de Aquisição de Cliente (CAC).', 'Cálculo e projeção do Lifetime Value (LTV) e Receita Média por Usuário (ARPU).', 'Prova de que o CAC projetado é sustentável dentro do OPEX (orçamento operacional).'],
    keywords: ['aquisição', 'clientes', 'funil', 'cac', 'ltv', 'arpu', 'métricas', 'opex', 'custo', 'lifetime value']
  },
  '4.3': {
    title: 'Metas e Cronograma de Marketing',
    sebrae: ['Estabelecimento de metas claras de marketing.'],
    brde: ['Metas de aquisição de assinantes divididas trimestralmente.', 'Cronograma tático de execução das campanhas e ações de marketing.', 'Prova de que a projeção de vendas/assinantes é coerente com o plano financeiro (DRE).'],
    keywords: ['metas', 'kpi', 'cronograma', 'trimestral', 'execução', 'campanhas', 'projeção de vendas', 'dre']
  },
  // --- TÓPICO 5: PLANO OPERACIONAL ---
  '5.1': {
      title: 'Plano Operacional',
      sebrae: ['Como a empresa funciona no dia a dia', 'Quais processos operacionais existem', 'Que recursos são necessários'],
      brde: ['Processo estrutural completo (pipeline)', 'Prova de capacidade operacional', 'Estimativas de produtividade editorial', 'Conexão entre operação e orçamento', 'Acessibilidade integrada', 'Critérios de qualidade e performance'],
      keywords: ['operação', 'processos', 'pipeline', 'fluxo', 'capacidade', 'sla']
  },
  // --- TÓPICO 6: EQUIPE / GOVERNANÇA ---
  '6.1': {
      title: 'Equipe / Governança',
      sebrae: ['Quem faz parte', 'Funções básicas', 'Responsabilidades'],
      brde: ['Equipe mínima garantida', 'Três níveis de governança', 'Divisão entre SCine / 4Movie / Labd12', 'Justificativa de custo da equipe', 'Organograma completo'],
      keywords: ['equipe', 'time', 'governança', 'organograma', 'sócios', 'funções']
  },
  // --- TÓPICO 7: JURÍDICO ---
  '7.1': {
      title: 'Jurídico',
      sebrae: ['Enquadramento legal', 'Estrutura societária'],
      brde: ['Garantias', 'Política de privacidade', 'Aderência à ANCINE', 'Riscos jurídicos identificados', 'Modelos contratuais básicos'],
      keywords: ['jurídico', 'legal', 'societário', 'contratos', 'ancine', 'lgpd', 'riscos']
  },
  // --- TÓPICO 8: FINANCEIRO ---
  '8.1': {
      title: 'Financeiro',
      sebrae: ['DRE 3–5 anos', 'Fluxo de caixa', 'Ponto de equilíbrio'],
      brde: ['DRE 5 anos', 'Fluxo de caixa mensal', 'Matriz CAPEX detalhada', 'Matriz OPEX detalhada', 'DSCR', 'RSD', 'Análise de sensibilidade', 'Garantias', 'Cronograma físico-financeiro'],
      keywords: ['financeiro', 'dre', 'fluxo de caixa', 'capex', 'opex', 'dscr', 'sensibilidade', 'projeções']
  },
  // --- TÓPICO 9: GATILHOS E COVENANTS ---
  '9.1': {
      title: 'Gatilhos e Covenants',
      sebrae: ['N/A'],
      brde: ['Lista de gatilhos por fase', 'Documentos que comprovam cada gatilho', 'Modelo de relatório para enviar ao banco', 'Exemplo de covenant financeiro', 'Projeção de cumprimento trimestre a trimestre'],
      keywords: ['gatilhos', 'covenants', 'triggers', 'relatório', 'banco', 'compromissos']
  }
};
