import Image from 'next/image';


const Footer = () => {
    return (
  <footer className="bg-white text-white">
     <div className="flex min-h-screen items-center justify-center bg-black bg-white px-6 py-5">
      <div className="flex flex-col items-center space-y-6 text-center">

    <div className="flex justify-center">
      <Image 
        src="/img/g1learnlogo.png"
        alt="logo"
        width={150}
        height={50}
      />
    </div>

    {/* Redes sociais */}
    <div className="flex space-x-4">
      <Image src="/img/icons/facebook.png" alt="Facebook" width={40} height={40} />
      <Image src="/img/icons/insta.png" alt="Instagram" width={40} height={40} />
      <Image src="/img/icons/website.png" alt="Website" width={40} height={40} />
    </div>

    {/* Informações de CNPJ e contato lado a lado */}
    <div className="flex space-x-8 text-sm text-black">
      <div>
        <h2 className="text-lg font-semibold">Empresa</h2>
        <ul className="space-y-1">
          <li>CNPJ: 29.309.438/0001-38</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Entre em contato</h2>
        <ul className="space-y-1">
          <li>contato@g1learn.com</li>
        </ul>
      </div>
    </div>

    {/* Selo Microsoft Partner */}
    <div className="mt-4">
      <Image 
        src="/img/microsoftpartner.jpg"
        alt="Microsoft partner"
        width={200}
        height={50}
      />
    </div>

  </div>
</div>


    <div className="mt-8 border-t border-blue-700 bg-customGray pt-4 text-xs">
        <div className='ml-5 text-left text-black'>
        <p>Copyright © 1998 - 2024 <a href="#" className="underline">hubfy.space v4.0</a></p>
        </div>
        <div className="mr-5 mt-2 space-x-4 text-right text-black">
            <a href="#" className="underline">Contato</a>
            <a href="#" className="underline">Termos</a>
        </div>
    </div>
</footer>

  
  );
}
export default Footer;
