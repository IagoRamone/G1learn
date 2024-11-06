import Image from 'next/image';

export default function HomePage() {
  return (
    <>      
      <div>
        <Home />
        <SectionTwo />
        <Sectionthree />
        <Sectionfour />
        <SectionFive />
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
        className="mt-[-50px] w-full max-w-7xl rounded-lg bg-cover bg-center p-10 shadow-lg" // Ajusta a posição vertical da div
        style={{
          backgroundImage: `url('/img/secaoprincipal.png')`,
        }}
      >
        <h1 className="text-3xl font-bold text-white">Dinamismo Corporativo</h1>
        <p className="mt-4 text-lg text-white">
          Domine completamente o treinamento de sua empresa. Um espaço que só quem precisa, tem acesso.
        </p>

        <p className="mt-2 text-lg text-white">
          Suba pequenos treinamentos internos. Convoque uma equipe para uma live. Não dependa de ninguém para isso.
        </p>

        <a href="#" className="mt-6 inline-block text-blue-400">
          Conheça nossa proposta.
        </a>

        <div className="mt-10 flex space-x-6">
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500">
              <span className="text-center text-white">Estúdio</span>
            </div>
            <p className="mt-2 text-center text-sm text-white">
              Um espaço preparado para atender sua empresa. Podcast, gravação de cursos e entrevistas.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-yellow-500">
              <span className="text-center text-white">Universidade Corporativa</span>
            </div>
            <p className="mt-2 text-center text-sm text-white">
              Produzimos e hospedamos seu curso.
            </p>
          </div>
        </div>
      </div>

      {/* Imagem da mão com celular */}
      <div className="items-right absolute bottom-0 mb-[-40px]">
        <img src="/img/secaoprincipal/celular.png" alt="Mão segurando celular" className="w-80" />
      </div>
    </div>
  ); 
}



function SectionTwo() {
  return (
    <div className='flex flex-col items-center justify-center bg-white p-10 md:flex-row'>
      <div className='flex flex-col items-center justify-center px-4 py-10'>
        <div className='grid grid-cols-2 gap-4'>
          <img src='/img/sectiontwo/dashboard1.png' alt='Dashboard 1' className='w-50 h-50 rounded-lg' />
          <img src='/img/sectiontwo/dashboard2.png' alt='Dashboard 2' className='w-50 h-50 rounded-lg' />
          <img src='/img/sectiontwo/Mask group.png' alt='Dashboard 3' className='w-50 h-50 rounded-lg' />
          <img src='/img/sectiontwo/mask group2.png' alt='Dashboard 4' className='w-50 h-50 rounded-lg' />
        </div>
      </div>

      <div className='max-w-md text-center md:text-left'>
        <h2 className='mb-4 ml-5 text-3xl font-bold text-gray-900'>Cursos online</h2>
        <p className='mb-6 ml-5 text-justify text-lg text-gray-600'>
          Agora ficou bem fácil criar e vender seu curso online. Cadastre-se na HubFy e comece a oferecer seus cursos para todo o mundo.
          <br/><br/>
          Não importa o formato.  Vídeo, áudio, HTML, Scorm, PDFs, Planilhas, jogos. Tudo pode. Até mesmo misturar.
          <br/><br/>
          Em um ambiente intuitivo e fácil de navegar, você organiza seu conhecimento e oferece para toda a internet. É fácil e completo. E o dinheiro cai direto em sua conta. Além disso, oferecemos diversas ferramentas para facilitar a divulgação de seus cursos em todas as redes sociais.
        </p>
      </div>
    </div>

  );
}

function Sectionthree() {
  return (
    <div className='relative bg-blue-500 px-4 py-16 md:px-20'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-50'
        style={{ backgroundImage: "url('/img/sectionthree/secaothree.png')" }}
      />
      <div className='relative z-10 mb-12 text-center'> 
        <h2 className='mb-4 text-3xl font-bold text-white'>Mais que uma plataforma</h2>
        <p className='mb-8 text-white'>
          Aqui você pode criar sua própria instância e oferecer seus cursos para toda a internet. São diversos planos pensando em você. Podemos crescer juntos. Não arrisque com ofertas mirabolantes. Junte-se a HubFy. Cadastre-se.
          Comece fazendo uma tour pelo nosso site. Conheça nossa proposta e compreenda como poderemos ajudá-lo. Cada ferramenta foi pensada para facilitar e integrar seu novo empreendimento.
          <br/><br/>
          Vamos começar?
        </p>
        <div className='ml-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {/* Cartões */}
          <div className='flex max-w-xs rounded-lg bg-white p-3 text-left shadow-lg'> 
            <Image
              src="/img/sectionthree/planner.png" 
              alt="Criar Site"
              width={80} 
              height={70}
              className='-ml-4 mr-4'
            />
            <div>
              <h3 className='mt-2 text-lg font-semibold text-blue-500'>Criar Site</h3>
              <p className='text-justify text-sm text-gray-600'>Seu site, seu espaço, sua cara. Faça do ambiente virtual uma sala de aulas sem fronteiras.</p>
            </div>
          </div>

          <div className='flex max-w-xs rounded-lg bg-white p-3 text-left shadow-lg'>
            <Image
              src="/img/sectionthree/rocket.png" 
              alt="Criar Link da Bio"
              width={80} 
              height={70}
              className='-ml-4 mr-4'
            />
            <div>
              <h3 className='mt-2 text-lg font-semibold text-blue-500'>Criar Link da Bio</h3>
              <p className='text-justify text-sm text-black'>Reúna suas redes sociais, portfólio e marketplace em um único local. Conecte todos os seus seguidores.</p>
            </div>
          </div>

          <div className='flex max-w-xs rounded-lg bg-white p-3 text-left shadow-lg'>
            <Image
              src="/img/sectionthree/academy.png" 
              alt="Criar Curso"
              width={80} 
              height={70}
              className='-ml-4 mr-4'
            />
            <div>
              <h3 className='mt-2 text-lg font-semibold text-blue-500'>Criar Curso</h3>
              <p className='text-justify text-sm text-gray-600'>Vídeo, jogo, HTML ou Scorm? Monte seu curso. Crie uma avaliação e certificação online. Está esperando o que?</p>
            </div>
          </div>

          <div className='flex max-w-xs rounded-lg bg-white p-3 text-left shadow-lg'>
            <Image
              src="/img/sectionthree/movie.png" 
              alt="Meu Estúdio"
              width={80} 
              height={50}
              className='-ml-4 mr-4'
            />
            <div>
              <h3 className='mt-2 text-lg font-semibold text-blue-500'>Meu Estúdio</h3>
              <p className='text-justify text-sm text-gray-600'>Estou no Rio de Janeiro e quero desenvolver um curso online profissional. A HubFy oferece os recursos necessários para desenvolver um projeto digital do zero.</p>
            </div>
          </div>

          <div className='flex max-w-xs rounded-lg bg-white p-3 text-left shadow-lg'>
            <Image
              src="/img/sectionthree/documents.png" 
              alt="Meus Serviços"
              width={80} 
              height={50}
              className='-ml-4 mr-4'
            />
            <div>
              <h3 className='mt-2 text-lg font-semibold text-blue-500'>Meus Serviços</h3>
              <p className='text-justify text-sm text-gray-600'>Com mais de dez anos de experiência no mercado corporativo, trabalhamos para desenvolver diversos projetos e treinamentos para grandes instituições.</p>
            </div>
          </div>

          <div className='flex max-w-xs rounded-lg bg-white p-3 text-left shadow-lg'>
            <Image
              src="/img/sectionthree/mail.png" 
              alt="E-mail Marketing"
              width={80} 
              height={70}
              className='-ml-4 mr-4'
            />
            <div>
              <h3 className='mt-2 text-lg font-semibold text-blue-500'>E-mail Marketing</h3>
              <p className='text-justify text-sm text-gray-600'>Oferecemos uma ferramenta que dispara mensagens para cada cadastrado ou grupo de usuários. Comunique-se com todos em um único clique.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


//Seção com subseções
function Sectionfour() {
  return (
    <div className='bg-white px-4 py-10 md:px-20'>
      <div className='grid gap-16'>

        {/* Seção 1 */}
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <img src='/img/sectionfour/spaces.png' alt='Spaces personalizáveis' className='w-full rounded-lg md:w-1/2' />
          <div className='text-center md:text-left'>
            <h2 className='mb-2 text-2xl font-bold text-black'>Spaces Personalizados</h2>
            <p className='mb-4 text-justify text-lg text-gray-600'>
              Criamos o conceito de Spaces para batizar as novas áreas onde organizarmos produtos e serviços oferecidos pela HubFy. Spaces representa os planos oferecidos. Uma área institucional ou a famosa FAQ.
              Existe um Space para cada um de nossos serviços. Um Space para e-mail marketing, market place, criação de cursos, nossos estúdios, criação de link da bio. Em breve Spaces vai se tornar muito mais. Pode ser tudo o que vocês imaginarem e nos contarem.
            </p>
            <button className='rounded-full bg-blue-500 px-6 py-2 text-white'>Saiba mais</button>
          </div>
        </div>

        {/* Seção 2 */}
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <div className='order-2 text-center md:order-1 md:text-left'>
            <h2 className='mb-2 text-2xl font-bold text-black'>Área de Podcast</h2>
            <p className='mb-4 text-justify text-lg text-gray-600'>
              No centro da cidade do Rio de Janeiro, disponibilizamos um espaço especial para nossos parceiros. Um estúdio montado por profissionais experientes, que vieram de produtoras de cinema e emissoras de televisão. Aqui podemos montar lives, podcasts e cursos com todo o rigor técnico de uma TV profissional. Venha conhecer.
            </p>
            <button className='rounded-full bg-blue-500 px-6 py-2 text-white'>Saiba mais</button>
          </div>
          <img src='/img/sectionfour/podcast.png' alt='Área exclusiva para Podcasts' className='order-1 w-full rounded-lg md:order-2 md:w-1/2' />
        </div>

        {/* Seção 3 */}
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <img src='/img/sectionfour/customize.png' alt='Crie e customize seu link' className='w-full rounded-lg md:w-1/2' />
          <div className='text-center md:text-left'>
            <h2 className='mb-2 text-2xl font-bold text-black'>Crie e Customize seu link na bio</h2>
            <p className='mb-4 text-justify text-lg text-gray-600'>
              A Bio é um link que pode reunir todas as suas redes sociais, portfólio e produtos digitais em um único espaço.
              A HubFy te ajuda a montar sua Bio. Sem custos. Sem adivinhação. É fácil. Só precisa se cadastrar e se logar na HubFy. Vem. A gente te ajuda.
            </p>
            <button className='rounded-full bg-blue-500 px-6 py-2 text-white'>Saiba mais</button>
          </div>
        </div>

        {/* Seção 4 */}
      <div className='flex flex-col items-center justify-between rounded-lg bg-blue-100 p-5 md:flex-row'>
         <div style={{ maxWidth: '700px' }} className='mb-4 ml-8 text-left'>
            <h2 className='mb-2 text-2xl font-bold text-black'>Cadastre-se e Faça Parte de Nossa Comunidade</h2>
            <p className='text-gray-600'>
            Cadastre-se na HubFy e troque ideias com profissionais que pensam como você. Estamos montando uma comunidade para que empreendedores na área de educação possam trocar ideias e desenvolver projetos em conjunto.
            </p>
        </div>
      <div className='mr-20 mt-4 md:mt-0'>
        <button className='rounded-full bg-blue-500 px-6 py-2 text-white'>Registre-se agora</button>
      </div>
      </div>


        {/* Seção 5 */}
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <img src='/img/sectionfour/ava.png' alt='AVA' className='w-full rounded-lg md:w-1/2' />
          <div className='text-center md:text-left'>
            <h2 className='mb-2 text-2xl font-bold text-black'>AVA - Ambiente Virtual de Aprendizagem</h2>
            <p className='mb-4 text-justify text-lg text-gray-600'>
              Garantimos as melhores ferramentas para facilitar a experiência do aluno em nosso ambiente virtual.
              Nossa sala de aula virtual é completa. Lives, chats, provas, certificados, bibliotecas e explicações em vídeo. Tudo para garantir um ambiente amigável e de fácil navegaçã
            </p>
            <button className='rounded-full bg-blue-500 px-6 py-2 text-white'>Saiba mais</button>
          </div>
        </div>

        {/* Seção 6 */}
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <div className='order-2 text-center md:order-1 md:text-left'>
            <h2 className='mb-2 text-2xl font-bold text-black'>HubFy Corporativo</h2>
            <p className='mb-5 text-justify text-lg text-gray-600'>
              A HubFy se orgulha de atender ao mercado corporativo com sucesso. São treinamentos especializados, jogos demonstrativos e universidades corporativas.
              São mais de dez anos de experiência, atendendo a diversas áreas, como saúde, transportes, seguros, energia, petróleo e gás.
            </p>
            <button className='rounded-full bg-blue-500 px-6 py-2 text-white'>Saiba mais</button>
          </div>
          <img src='/img/sectionfour/corporativo.png' alt='Hubfy Corporativo' className='order-1 w-3/4 rounded-lg md:order-2 md:w-2/3' />
        </div>

        {/* Seção 7 */}
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <img src='/img/sectionfour/gateway.png' alt='Gateway de pagamento' className='w-full rounded-lg md:w-1/2' />
          <div className='text-center md:text-left'>
            <h2 className='mb-2 text-2xl font-bold text-black'>Gateway de Pagamento?</h2>
            <p className='mb-4 text-justify text-lg text-gray-600'>
              Temos sim. Com as melhores taxas de mercado. O usuário paga e tudo vai direto para sua conta. Direto.
              O melhor é que você pode determinar o pagamento direto para seus colaboradores como conteudistas, professores, monitores, coordenadores e vendedores. Determine a porcentagem de cada um que providenciamos para que caia direto na conta deles.
            </p>
            <button className='rounded-full bg-blue-500 px-6 py-2 text-white'>Saiba mais</button>
          </div>
        </div>

      </div>
    </div>
  );
}

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </div>
      </div>
    </div>
  );
}


function SectionSix() {
  return (
    <div className="mb-0 mt-0 bg-white text-center">
      <div className="mb-4 flex items-center justify-center">
        <img src="/img/foto1faq.png" alt="faq1" className="w-15 h-15 mr-4 mt-5" />
        <h2 className="mb-2 mt-5 text-2xl font-bold text-blue-800">FAQ</h2>
        <img src="/img/foto2faq.png" alt="faq2" className="w-15 h-15 ml-4 mt-5" />
      </div>
      <div className="mx-auto w-full bg-white p-10 md:w-2/3">
        <div className="border-b border-gray-200 p-12">
          <details className="border-b border-gray-300 py-4">
            <summary className="cursor-pointer text-left font-semibold text-blue-800">
              <span className="font-bold text-purple-600">1. </span>
              Como posso criar e publicar meu curso na plataforma?
            </summary>
            <p className="mt-2 text-left text-gray-600">
              Após o cadastro, você terá acesso ao painel de criação de cursos, onde pode adicionar vídeos, textos, quizzes e outros formatos de conteúdo. Quando tudo estiver pronto, basta clicar em {"Publicar"} para disponibilizá-lo aos seus alunos.
            </p>
          </details>
          <details className="border-b border-gray-300 py-4">
            <summary className="cursor-pointer text-left font-semibold text-blue-800">
              <span className="font-bold text-purple-600">2. </span>
              Posso personalizar o layout do meu site de cursos?
            </summary>
            <p className="mt-2 text-left text-gray-600">
              Sim! Nossa plataforma oferece diversas opções de personalização, permitindo ajustar o design do seu site, adicionar a logo da sua marca e escolher cores e fontes que representem seu estilo.
            </p>
          </details>
          <details className="border-b border-gray-300 py-4">
            <summary className="cursor-pointer text-left font-semibold text-blue-800">
              <span className="font-bold text-purple-600">3. </span>
              A plataforma oferece suporte a diferentes formatos de conteúdo?
            </summary>
            <p className="mt-2 text-left text-gray-600">
              Sim, você pode inserir vídeos, áudios, PDFs, apresentações, quizzes e até transmissões ao vivo, garantindo que o curso seja dinâmico e interativo.
            </p>
          </details>
          <details className="border-b border-gray-300 py-4">
            <summary className="cursor-pointer text-left font-semibold text-blue-800">
              <span className="font-bold text-purple-600">4. </span>
              Quais formas de pagamento a plataforma suporta?
            </summary>
            <p className="mt-2 text-left text-gray-600">
              Nossa plataforma integra-se com os principais gateways de pagamento, aceitando cartões de crédito, débito, PIX, e outras opções populares. Você pode gerenciar facilmente todas as transações.
            </p>
          </details>
          <details className="border-b border-gray-300 py-4">
            <summary className="cursor-pointer text-left font-semibold text-blue-800">
              <span className="font-bold text-purple-600">5. </span>
              É possível gerenciar meus alunos e acompanhar o progresso deles?
            </summary>
            <p className="mt-2 text-left text-gray-600">
              Sim, você pode acompanhar o desempenho de cada aluno através de relatórios detalhados, visualizar o progresso nos cursos, notas em quizzes e outros dados que ajudam a monitorar o aprendizado.
            </p>
          </details>
          <details className="border-b border-gray-300 py-4">
            <summary className="cursor-pointer text-left font-semibold text-blue-800">
              <span className="font-bold text-purple-600">6. </span>
              É possível utilizar uma grade de curso presencial para a modalidade EAD?
            </summary>
            <p className="mt-2 text-left text-gray-600">
              Sim, é possível adaptar a grade de um curso presencial para a modalidade EAD, mas algumas mudanças podem ser necessárias. No ensino a distância, é importante garantir que o conteúdo seja interativo e acessível em formatos digitais, como vídeos, materiais para download e quizzes. Além disso, atividades que antes eram realizadas presencialmente podem ser transformadas em tarefas online ou fóruns de discussão, garantindo que os alunos tenham uma experiência rica e completa, mesmo a distância.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}