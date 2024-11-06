"use client";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

    return (
        <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white p-6 text-white">
            <div className="text-2xl font-bold">
                <Link href="/">
                    <Image
                        className="xxl:ml-60 ml-20 xl:ml-40"
                        src="/img/g1learnlogo.png"
                        alt="logo"
                        width={150}
                        height={50}
                    />
                </Link>
            </div>
        </header>
    );
}

export default Header;
