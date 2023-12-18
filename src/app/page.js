import Image from 'next/image';
import Content from './components/AlquranList/Content'
import Footer from './components/Footer/Footer';
import BgHeader from './components/Navbar/BgHeader'
import Logo from './components/Navbar/Logo';
import MenuNavbar from "./components/Navbar/MenuNavbar";
import Search from './components/Navbar/Search';

export default function Home() {
  return (
    <div className=" ">
      <BgHeader />
      <div className="flex flex-col justify-center items-center relative px-4 py-6">
        <div className="w-full flex flex-col justify-center items-center">
          <Logo />
          <Search />
        </div>
        <MenuNavbar />
      </div>
      <Content />
      <Footer />
    </div>
  );
}
