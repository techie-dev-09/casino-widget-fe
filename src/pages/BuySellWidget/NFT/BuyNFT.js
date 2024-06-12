import React, { useEffect, useState } from 'react';
import WertModule from '@wert-io/module-react-component';
import {
  GetMyProfileAPI,
  ProductDetailsFetch,
  UserWidgetLoginEmailCheckAPI
} from '../../../services/Auth';
import { useHistory, useLocation } from 'react-router-dom';
import { createParamsData } from '../../../services/params';
import PageLoader from '../../../components/Common/CustomLoader/loader';
import { useAddress } from '@thirdweb-dev/react-core';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/images/icons/arrow-left.svg';

const BuyNFT = ({ isWidget }) => {
  const history = useHistory();
  const location = useLocation();
  const address = useAddress();
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  let paramsValue = createParamsData(location.search);

  const emailLoginCheck = () => {
    UserWidgetLoginEmailCheckAPI({ email: localStorage.getItem('email') })
      .then(async (res) => {
        if (res && res.data && res.data.data && res.data.data.accessToken) {
          localStorage.setItem('authAccessToken', res.data.data.accessToken);
        }
      })
      .catch((err) => {});
  };

  const productDetails = () => {
    setIsLoading(true);

    ProductDetailsFetch(paramsValue['product_id'], paramsValue['api_key'])
      .then((res) => {
        setIsLoading(false);
        console.log('------res-------', res);
        setProductDetail(res.data.data.data);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    productDetails();
  }, []);

  const myProfileFunction = () => {
    GetMyProfileAPI()
      .then((res) => {
        setUserData(res.data.data.data);
      })
      .catch((err) => {
        history.push({
          pathname: `${isWidget ? '/buy-sell/login' : '/login'}`,
          search: `${location.search}`
        });
      });
  };

  useEffect(() => {
    myProfileFunction();
    emailLoginCheck();
  }, []);

  const privateKey = '0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3';

  const signedData = signSmartContractData(
    {
      address: '0x0E976df9bb3ac63F7802ca843C9d121aE2Ef22ee', // user's address
      commodity: 'MATIC',
      commodity_amount: 14.62, // the crypto amount that should be sent to the contract method
      network: 'amoy',
      sc_address: '0x6af35a72b2490a44c0e88ae635b9b38516544db1', // your SC address
      sc_input_data:
        '0x3c168eab0000000000000000000000000e976df9bb3ac63f7802ca843c9d121ae2ef22ee0000000000000000000000000000000000000000000000000000000000000001'
    },
    privateKey
  );

  const options = {
    partner_id: '01HE2KXEGTAT7XDRGFW3WSQQAR',
    origin: 'https://sandbox.wert.io',
    address: '0x0E976df9bb3ac63F7802ca843C9d121aE2Ef22ee',
    commodity: 'MATIC',
    commodity_amount: 14.62,
    network: 'amoy',
    sc_address: '0x6af35a72b2490a44c0e88ae635b9b38516544db1',
    sc_input_data:
      '0x3c168eab0000000000000000000000000e976df9bb3ac63f7802ca843c9d121ae2ef22ee0000000000000000000000000000000000000000000000000000000000000001',
    extra: {
      item_info: {
        author:
          productDetail && productDetail.author_name ? productDetail.author_name : 'Wert',
        author_image_url:
          productDetail && productDetail.author_image
            ? productDetail.author_image
            : 'https://partner-sandbox.wert.io/sample_nft.png',
        image_url:
          productDetail && productDetail.product_image
            ? productDetail.product_image
            : 'https://partner-sandbox.wert.io/sample_nft.png',
        name:
          productDetail && productDetail.product_name
            ? productDetail.product_name
            : 'Wert Sample NFT',
        category:
          productDetail && productDetail.category ? productDetail.category : 'Wert Sample'
      }
    },
    ...signedData
  };

  useEffect(() => {
    const iframe = document.querySelectorAll('iframe');
    if (iframe) {
      iframe.forEach((elem) => (elem.style.borderRadius = '24px'));
    }
  }, [productDetail, userData]);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          {/* */}
          {productDetail &&
          Object.keys(productDetail).length > 0 &&
          userData &&
          Object.keys(userData).length > 0 ? (
            <>
              {/* <button
                type="button"
                className="btn btn-light p-1 mt-2 position-absolute"
                style={{
                  marginLeft: '10px',
                  height: 36,
                  width: 36,
                  backgroundColor: '#F0F1F266'
                }}
                onClick={() =>
                  history.push({
                    pathname: `${isWidget ? '/buy-sell/casino' : '/casino'}`,
                    search: `${location.search}`
                  })
                }>
                <ArrowLeftIcon width={18} height={18} />
              </button> */}
              <WertModule
                options={{
                  ...options,
                  click_id: `${userData.user_id}_${productDetail.product_id}`
                }}
                className="wert-container"
              />
            </>
          ) : (
            <span className="p-3 text-left font-size-32 font-weight-bold text-black "></span>
          )}
        </>
      )}
    </>
  );
};

export default BuyNFT;
