
export default function HomePage() {
  return (
    <>      
      <div>
        <Home />
        <Sectionfour />
        <SectionSix />
      </div>
    </>
  )
}

// Principal Section
function Home() {
  return (
    <div className="relative flex min-h-[75vh] items-center justify-center bg-white">
      {/* Div principal com conteúdo e imagem de fundo */}
      <div
        className="mt-20 w-full max-w-7xl rounded-lg bg-cover bg-center p-10 shadow-lg"
        style={{
          backgroundImage: `url('/img/secaoprincipal.png')`,
        }}
      >
        <div className="text-left max-w-2xl">
          <h1 className="text-3xl font-bold text-white">Dinamismo Corporativo</h1>
          <p className="mt-4 text-lg text-white text-justify">
            Domine completamente o treinamento de sua empresa. Um espaço que só quem precisa, tem acesso.
          </p>

          <p className="mt-2 text-lg text-white text-justify">
            Suba pequenos treinamentos internos. Convoque uma equipe para uma live. Não dependa de ninguém para isso.
          </p>

          <p className="mt-6  text-lg inline-block text-white">
            Conheça nossa proposta.
          </p>
        </div>

        {/* Imagens Estúdio e Universidade Corporativa lado a lado */}
        <div className="ml-40 mt-10 flex space-x-6">
          {/* Card Estúdio */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500">
              <span
                className="text-white text-center w-full h-full flex items-center justify-center"
                style={{
                  backgroundImage: `url('/img/fundocardla.png')`, 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '50%',
                }}
              >
                Estúdio
              </span>
            </div>
          </div>

          {/* Card Universidade Corporativa */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-40 items-center justify-center rounded-lg bg-yellow-500">
              <span
                className="text-white text-center w-full h-full flex items-center justify-center"
                style={{
                  backgroundImage: `url('/img/background')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px', 
                }}
              >
                Universidade Corporativa
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-40 mb-[-40px] mr-[-20px]">
        <img src="/img/secaoprincipal/celular.png" alt="Mão segurando celular" className="w-80" />
      </div>
    </div>
  );
}



//Seção com subseções
function Sectionfour() {
  return (
    <div className='bg-customGray px-4 py-10 md:px-20'>
      <div className='grid gap-16'>

      {/* Seção -1 */}
      <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Imagem à esquerda */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/img/business-woman.png" 
            alt="Imagem de inovação"
            className="w-3/4 md:w-full  object-cover"
          />
        </div>

        {/* Texto à direita */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Inovação CILearn</h2>
          <p className="text-gray-600 mb-4">
            Nosso espaço é diferenciado. Estamos prontos para oferecer os mais diversos formatos para os treinamentos corporativos.
          </p>
          <p className="text-gray-600 mb-6">
            O conteúdo atende à sua necessidade. Cursos de aprimoramento empresarial, normas regulamentadoras, segurança, meio ambiente, marketing, finanças, soft e hard skills. Oferecemos pós-graduações direcionadas para o seu negócio. Venha conhecer.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
            Saiba mais
          </button>
        </div>
      </div>
    </section>


        {/* Seção 1 */}
<section className="bg-white py-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Experiência Comprovada</h2>
    <p className="text-gray-600 mb-8">
      São mais de dez anos atendendo ao mercado educacional e corporativo. Essa experiência nos faz mudar o tempo todo, para acompanhar todos os novos paradigmas dos tempos atuais.
    </p>
    <p className="text-gray-600 mb-12">
      Queremos ajudar a preparar e unir sua equipe e transformá-los no grande diferencial do seu negócio. Venha para a CILearn.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1: Alunos */}
      <div className="text-white p-6 rounded-lg shadow-md" style={{ backgroundImage: "url('/img/fundo_azul.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="text-4xl font-semibold">72.1K</div>
        <div className="mt-2">Alunos</div>
        <p className="mt-2 text-sm">Que em alguma etapa utilizam nossa plataforma</p>
      </div>

      {/* Card 2 */}
      <div className="text-white p-6 rounded-lg shadow-md" style={{ backgroundImage: "url('/img/background_amarelo.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="text-4xl font-semibold">363.9K</div>
        <div className="mt-2">Horas de vídeo aulas gravadas</div>
        <p className="mt-2 text-sm">Conteúdo de vídeo aulas desenvolvido internamente</p>
      </div>

      {/* Card 3: Cursos */}
      <div className="text-white p-6 rounded-lg shadow-md" style={{ backgroundImage: "url('/img/fundocardla.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="text-4xl font-semibold">190+</div>
        <div className="mt-2">Cursos</div>
        <p className="mt-2 text-sm">Totalmente desenvolvidos em nossos laboratórios</p>
      </div>
    </div>
  </div>
</section>


        {/* Seção 2 */}
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <div className='order-2 text-center md:order-1 md:text-left'>
            <h2 className='mb-2 text-2xl font-bold text-black'>Conhecimento e Engajamento</h2>
            <p className='mb-4 text-justify text-lg text-gray-600'>
            Palavras de efeito podem produzir euforia por um curto espaço de tempo. O que realmente mantém uma empresa funcionando e caminhando sempre para o sucesso é o conhecimento e muito trabalho sério.

Invista e engaje seu colaborador. Uma universidade corporativa com cursos próprios mostra que sua empresa se preocupa com a inovação. O sucesso da empresa está ligada com a preparação de sua equipes. Com a difusão precisa da missão e da filosofia de uma empresa.
            </p>
            <button className='rounded-full bg-blue-500 px-6 py-2 text-white'>Saiba mais</button>
          </div>
          <img src='/img/conhecimento_de_engajamento.png' alt='Área exclusiva para Podcasts' className='order-1 w-full rounded-lg md:order-2 md:w-1/2' />
        </div>

        {/* Seção 3 */}
        <div className="flex items-center justify-center">
  {/* Seção com o fundo e texto */}
  <div 
    className="relative flex flex-col items-center gap-6 p-8 bg-cover bg-center rounded-3xl md:p-12 w-full md:w-9/10" 
    style={{ backgroundImage: "url('/img/secao2.png')" }}
  >
    {/* Texto ocupando toda a div */}
    <div className="text-center md:text-left max-w-full">
      <h2 className="mb-2 text-2xl font-bold text-white">Treinamentos corporativos nos formatos:</h2>
      <p className="mb-5 text-justify text-lg text-white">
        Presencial ou Online. Ao vivo ou Gravado. Personalizado ou Plataformado.
      </p>
      <button className="rounded-full bg-[#FE6C16] px-6 py-2 text-white">Agende uma conversa</button>
    </div>
  </div>
</div>


        {/* Seção 4 */}
        <section className="flex flex-col md:flex-row items-stretch gap-6 p-6 bg-gray-100">
      {/* Card da Esquerda */}
      <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-md md:w-1/3 h-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quero Conhecer</h2>
        <p className="text-gray-600 mb-6">
          Entre em contato e peça uma avaliação. Criamos uma instância para sua empresa e deixamos um curso à disposição de seus colaboradores.
          Não perca tempo.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
          Agende uma conversa
        </button>
      </div>

      {/* Cards da Direita */}
      <div className="flex flex-col md:flex-row gap-4 md:w-2/3 h-full">
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 h-full">
          <img src="/img/asian-yo" alt="Normas Regulamentadoras" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Normas Regulamentadoras</h3>
            <p className="text-gray-600 text-sm">Segurança e Saúde no Trabalho (subtítulo)</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 h-full">
          <img src="/img/asian-young.jpg" alt="Tecnologia e Comunicação" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Tecnologia e Comunicação</h3>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 h-full">
          <img src="/img/speech.jpg" alt="Habilidades Comportamentais" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Habilidades Comportamentais</h3>
          </div>
        </div>
      </div>
    </section>


        {/* Seção 5 */}
        <div className="flex flex-col items-center justify-center md:flex-row gap-8 p-8 bg-[#F7F7F7]">
  
  <div className="w-full md:w-1/2 flex justify-center">
    <img src="/img/dashboard.png" alt="Relatórios Personalizados" className="w-full rounded-lg " />
  </div>

  
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-2xl font-bold text-black mb-4">Relatórios Personalizados</h2>
    <p className="text-lg text-gray-600 mb-6">
      Saiba como está o seu colaborador. Escolha as informações mais pertinentes e gere um relatório com a periodicidade que desejar.
    </p>
    <p className="text-lg text-gray-600 mb-8">
      Qual o funcionário? Setor? Local? Que horas entrou? Quanto tempo ficou em cada sessão? Qual foi o aproveitamento?
      Precisa de outra informação? Qual?
    </p>
    <button className="flex items-center justify-center rounded-full bg-blue-500 px-6 py-2 text-white">
      Saiba mais
      <span className="ml-2">➔</span>
    </button>
  </div>
</div>


        {/* Seção 6 */}
        <div className="flex items-center justify-center">
  {/* Seção com o fundo e texto */}
  <div 
    className="relative flex flex-col items-center gap-6 p-8 bg-cover bg-center rounded-3xl md:flex-row md:p-12 w-full md:w-9/10" 
    style={{ backgroundImage: "url('/img/secao2.png')" }}
  >
    {/* Texto ocupando toda a div */}
    <div className="text-center md:text-left max-w-full">
      <h2 className="mb-2 text-2xl font-bold text-white">Treinamentos corporativos nos formatos:</h2>
      <p className="mb-5 text-justify text-lg text-white">
        Presencial ou Online. Ao vivo ou Gravado. Personalizado ou Plataformado.
      </p>
      <button className="rounded-full bg-[#FE6C16] px-6 py-2 text-white">Agende uma conversa</button>
    </div>

    {/* Imagem à direita, maior e com mais margem à esquerda */}
    <div className="w-full md:w-1/3 ml-10">
      <img src="/img/hand.png" alt="Hubfy Corporativo" className="w-2/3 rounded-lg" />
    </div>
  </div>
</div>

        {/* Seção 7 */}
        <div className="flex flex-col items-center justify-center gap-6 bg-[#F7F7F7] p-8 md:flex-row">

        <div className="relative w-full md:w-1/2">
         <img
          src="/img/dados.png"
          alt="Estúdio com texto sobreposto"
          className="w-full h-full object-cover rounded-lg"
          />
    
         </div>

  {/* Imagem da direita */}
  <div className="w-full md:w-1/2">
    <img
      src="/img/dados2.png"
      alt=""
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>

      </div>
    </div>
  );
}

{/* 
function SectionFive() {
  return (
    <div className='relative bg-blue-100 px-8 py-16 md:px-20'>
      <div
        className='absolute inset-0 bg-cover bg-center' 
        style={{ backgroundImage: "url('/img/sectionthree/secaothree.png')" }} 
      />
      <div className='relative z-10 flex flex-col items-center gap-8 md:flex-row'> 
        <div className='w-full md:w-1/2'>
          <div className='aspect-video rounded-lg bg-black'>
            <video
              className="h-full w-full rounded-lg object-cover"
              controls
              muted
            >
              <source src="https://www.youtube.com/watch?v=7X8II6J-6mU" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
        <div className='w-full text-center md:w-1/2 md:text-left'>
          <h2 className='mb-4 text-2xl font-bold text-blue-800'>Aprenda a como montar seu curso</h2>
          <p className='mb-4 text-gray-600'>
            
          </p>
        </div>
      </div>
    </div>
  );
}
*/}

function SectionSix() {
  return (
    <section className="bg-gray-100 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Nosso mercado e alguns de nossos parceiros</h2>
      <p className="text-center text-gray-500 mb-8">
        Preparatórios | Técnicos | Acadêmicos | Educação Continuada | Corporativo
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
          <img src="/clients/estacio-logo.png" alt="Estácio" className="h-12 mx-auto" />
          <img src="/clients/estacio-logo.png" alt="Anoreg" className="h-12 mx-auto" />
          <img src="/clients/oabrj.png" alt="OAB" className="h-12 mx-auto" />
          <img src="/clients/.png" alt="White Martins" className="h-12 mx-auto" />
          <img src="/clients/uni-candido.png" alt="Candido Mendes" className="h-12 mx-auto" />
          <img src="/images/iqcs.png" alt="IQCS" className="h-12 mx-auto" />
          <img src="/images/karoon_energy.png" alt="Karoon Energy" className="h-12 mx-auto" />
          <img src="/images/cma_cgm.png" alt="CMA CGM" className="h-12 mx-auto" />
          <img src="/images/bw_energy.png" alt="BW Energy" className="h-12 mx-auto" />
          <img src="/images/petrobras.png" alt="Petrobras" className="h-12 mx-auto" />
          <img src="/images/vertix.png" alt="Vertix Telecom" className="h-12 mx-auto" />
          <img src="/images/hoffmann.png" alt="Hoffmann" className="h-12 mx-auto" />
          <img src="/images/sh.png" alt="SH" className="h-12 mx-auto" />
        </div>
      </div>
    </div>
  </section>
  );
}