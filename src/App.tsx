import { useEffect, useState } from 'react';
const dashSymbol = '-';
const hashtagSymbol = '#';

function App() {
  const [textInformation, setTextInformation] = useState<unknown>();

  const keyDownHandler = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setTextInformation(<br />);
    }
  };

  const handleTextChange = (textValue = '') => {
    //TODO Find a way to implement second point of the AC (see README for full info)
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
      <textarea
        onChange={(e: any) => handleTextChange(e.target.value)}
        rows={5}
        onKeyDown={keyDownHandler}
      />
      <>{textInformation}</>
    </div>
  );
}

export default App;
