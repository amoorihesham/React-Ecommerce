import appstore from '../../../Assets/images/download-on-the-app-store-apple-logo-svgrepo-com.svg';
import playstore from '../../../Assets/images/google-play-download-android-app-logo-svgrepo-com.svg';
import mastercard from '../../../Assets/images/mastercard-svgrepo-com.svg';
import paypal from '../../../Assets/images/paypal-svgrepo-com.svg';
import amazonpay from '../../../Assets/images/amazon-pay-svgrepo-com.svg';

const Footer = () => {
  return (
    <div className='footer bg-main-light p-4 pb-0'>
      <div className='container'>
        <h3>Get The FreshCart App</h3>
        <p>We will send you a link, open it on your phone to download the app.</p>
        <div className='form  border-bottom pb-3'>
          <form className='d-flex mx-auto  justify-content-between'>
            <input
              type='email'
              placeholder='Email..'
              className='form-control me-2'
            />
            <button className='btn bg-main text-white font-sm'>Send</button>
          </form>
        </div>
        {/* <div className='payments py-3 '>
          <div className='container'>
            <div className='row justify-content-between align-items-center g-5'>
              <div className='col-md-6 text-center'>
                <div className='partners'>
                  <p>Payments Partners</p>
                  <div className='images d-flex align-items-center justify-content-center gap-2'>
                    <img
                      src={paypal}
                      alt='MasterCard Payment'
                      className='w-50p'
                    />
                    <img
                      src={mastercard}
                      alt='paypal Payment'
                      className='w-50p'
                    />
                    <img
                      src={amazonpay}
                      alt='Amexx Payment'
                      className='w-50p'
                    />
                  </div>
                </div>
              </div>
              <div className='col-md-6 text-center'>
                <div className='downloaod text-center'>
                  <p className='m-0'>Get deliviers with FreshCart </p>

                  <img
                    src={appstore}
                    alt='App Store Apple'
                    className='img-fluid'
                  />
                  <img
                    src={playstore}
                    alt='Play Store Android'
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <p className='m-0 text-center py-3'>All Copyrights Reserved . 2024</p>
      </div>
    </div>
  );
};

export default Footer;
