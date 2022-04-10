import '../styles/Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Banner = () => {
    return (
        <div
        className='banner-div pt-9 pb-9'>
        <div className='container containerbanner'>
          <div className='row text-center'>
            <div className='col-lg-12 md-pb-0'>
              <h2 className='title banner-title'>Nothing can stop you</h2>
              <button className='banner-btn banner-button'>
                Find Out More
              </button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Banner;