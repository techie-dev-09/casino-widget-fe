import React, { useEffect, useState } from 'react';

function LoadingScreen({
  widgetTheme,
  myWallet = false,
  paramsImages,
  paramsValue = '',
  funMode
}) {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    if (
      paramsImages &&
      paramsImages['funModeLoadingURLs'] &&
      paramsImages['funModeLoadingURLs'].length > 0
    ) {
      const imagesArr = paramsImages['funModeLoadingURLs'];
      const randomIndex = Math.floor(Math.random() * imagesArr.length);
      setRandomImage(imagesArr[randomIndex]);
    }
  }, [paramsImages]);

  const letters = ['1', 'b', 'u', 'y', '.', 'i', 'o'];

  return (
    <div
      className={`text-center d-flex align-items-center justify-content-center flex-column ${
        !myWallet && ' min-height-90vh'
      }`}>
      {randomImage && paramsValue && funMode ? (
        <img src={randomImage} alt="" className="mb-2" width={'200px'} />
      ) : (
        <lord-icon
          src="https://cdn.lordicon.com/lfhykuxv.json"
          trigger="loop"
          colors={`outline:#121331,primary:${
            widgetTheme === 'dark' ? '#fff' : '#000'
          },secondary:#ffc738`}
          style={{ width: '100px', height: '100px' }}></lord-icon>
      )}

      <div className="waviy">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="font-weight-medium"
            style={{
              '--i': index + 1,
              color: `var(--${widgetTheme}-primary-text-color)`
            }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;
