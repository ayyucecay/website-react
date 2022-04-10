import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../images/youtube.png";
const Footer = () => {
    return (
        <div
        className='footer-div md-pt-50 md-pb-0'>
        <div className='container'>
          <div className='row mb-3'>
          <div class="col-sm-6 col-12 col-lg-6 footer-title">
                <h1 class="footer-h1">Feel the excellent wet braking with Driveways!</h1>
            </div>
            <div class="col-sm-6 col-6 footer-button">
                <button type="button" class="btn footer-btn pull-right">Watch All Videos</button>
            </div>
          </div>
          <div className='row'>
              <img className="img-fluid" src={image}/>
        </div>
        <div className='row row-button'>
        <div class="col-sm-6 col-12">
                <button type="button" class="btn footer-btn pull-right">Watch All Videos</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;