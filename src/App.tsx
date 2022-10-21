import { useEffect, useState } from 'react';
const dashSymbol = '-';
const hashtagSymbol = '#';

function App () {

const [textInformation, setTextInformation] = useState<unknown>();

useEffect(() => {
  const keyDownHandler = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setTextInformation(<br />);
    }
  };
  document.addEventListener('keydown', keyDownHandler);

  return () => {
    document.removeEventListener('keydown', keyDownHandler);
  };
}, []);


  const handleTextChange = (textValue = '', code = '') => {
    //TODO Find a way to implement second point of the AC (see README for full info)
    console.log('hereee', code)
    if (textValue.length === 0) {
      setTextInformation(<br />);
      return;
    }
    if (textValue.split('')[0] === hashtagSymbol && textValue.split('')[1] !== hashtagSymbol) {
      setTextInformation(
        <h1>
          {textValue
            .split('')
            .filter((t) => t !== hashtagSymbol)
            .filter((t) => t !== `${hashtagSymbol}${hashtagSymbol}`)
            .join('')}
        </h1>,
      );

      return;
    }

    if (textValue.split('')[0] === hashtagSymbol && textValue.split('')[1] === hashtagSymbol) {
      setTextInformation(
        <h2>
          {textValue
            .split('')
            .filter((t) => t !== hashtagSymbol)
            .filter((t) => t !== `${hashtagSymbol}${hashtagSymbol}`)
            .join('')}
        </h2>,
      );
      return;
    }

    if (
      textValue.split('')[0] === dashSymbol &&
      textValue.split('')[1] === dashSymbol &&
      textValue.split('')[2] === dashSymbol
    ) {
      setTextInformation(<hr />);
      return;
    }

    return setTextInformation(<p>{textValue}</p>);
  };

  return (
    <div>
      <textarea onChange={(e: any) => handleTextChange(e.target.value, e.key)} rows={5} />
      <>{textInformation}</>
    </div>
  );
}

export default App;
