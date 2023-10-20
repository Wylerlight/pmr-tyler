import Carousel from '../Carousel/Carousel';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import ApplyButton from '../ApplyButton/ApplyButton';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {
  return (
    <>
      <header className="header">
        <h1 className="header__info-title">Purchase | Refinance</h1>
      </header>
      <main className="main">
        <div className="main__vision" id="vision">
          <h2 className="main__vision_title">Our Vision</h2>
          <p className="main__vision-description">
            Here at Primary Mortgage Resource Corporation, our team strives to
            make the home financing process smooth and effortless. Whether
            you’re a first time homebuyer, an investor, or an existing
            homeowner, our goal is to help you with your home financing needs.
          </p>
        </div>
        <div className="main__vision" id="services">
          <h2 className="main__vision_title" id="services-title">
            Our Services
          </h2>
          <Carousel />
        </div>
      </main>
      <ApplyButton />
      <CompanyInfo />
      <Footer />
    </>
  );
}

export default Home;
