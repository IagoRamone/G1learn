import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white text-white">
            <div className="flex items-center justify-center bg-white px-6 py-5">
                <div className="flex flex-col items-center space-y-4 text-center">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <Image 
                            src="/img/g1learnlogo.png"
                            alt="logo"
                            width={120}
                            height={40}
                        />
                    </div>

                    {/* Redes sociais */}
                    <div className="flex space-x-3">
                        <Image src="/img/icons/facebook.png" alt="Facebook" width={30} height={30} />
                        <Image src="/img/icons/insta.png" alt="Instagram" width={30} height={30} />
                        <Image src="/img/icons/website.png" alt="Website" width={30} height={30} />
                    </div>

                    {/* Informações de CNPJ e contato */}
                    <div className="flex space-x-6 text-sm text-black">
                        <div>
                            <ul className="space-y-1">
                                <li>CNPJ: 29.309.438/0001-38</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-1">
                                <li>contato@g1learn.com</li>
                            </ul>
                        </div>
                    </div>

                    {/* Selo Microsoft Partner */}
                    <div className="mt-2">
                        <Image 
                            src="/img/microsoftpartner.jpg"
                            alt="Microsoft partner"
                            width={160}
                            height={40}
                        />
                    </div>
                </div>
            </div>

            {/* Linha de rodapé com copyright e links */}
            <div className="mt-4 border-t  bg-customGray pt-3 text-xs">
                <div className="flex justify-between mx-5 text-black">
                    <p>Copyright © 1998 - 2024 <a href="#" className="underline">hubfy.space v4.0</a></p>
                    <div className="space-x-4">
                        <a href="#" className="underline">Contato</a>
                        <a href="#" className="underline">Termos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
