import Content from './components/AlquranList/Content'
import Footer from './components/Footer/Footer';
import Header from './components/Navbar/Header'

export default function Home() {
  return (
    <div className=" bg-gray-100 w-full h-screen">
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}
