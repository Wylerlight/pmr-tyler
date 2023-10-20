import Map from '../Map/Map';
import './CompanyInfo.css';

function CompanyInfo() {
  return (
    <section id="company-directory" className="company">
      <div className="company__wrapper">
        <h2 className="company__visit">Visit Us</h2>
        <p className="company__address">
          1758 Orange Tree Lane, Suite A, Redlands, CA 92374
        </p>
        <ul className="company__info">
          <li className="info company__hours-title">Hours:</li>
          <li className="info company__hours-week">Monday - Friday</li>
          <li className="info company__hours-time">8:30am - 5pm</li>
          <li className="info company__phone">Phone Number:</li>
          <a href="tel:9098634028" className="info company__phone-number">
            (909) 863 - 4028
          </a>
        </ul>
      </div>
      <div className="map__container">
        <Map />
      </div>
    </section>
  );
}

export default CompanyInfo;
