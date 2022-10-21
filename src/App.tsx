import { useState } from 'react';

function App () {
  
const [textInformation, setTextInformation] = useState<unknown>();

  const handleTextChange = (textValue = '') => {
    //TODO Find a way to implement second point of the AC (see README for full info)
    if (!textValue) {
      setTextInformation(<br />);
      return;
    }
    if (textValue.split('')[0] === '#' && textValue.split('')[1] !== '#') {
      setTextInformation(
        <h1>
          {textValue
            .split('')
            .filter((t) => t !== '#')
            .filter((t) => t !== '##')
            .join('')}
        </h1>,
      );

      return;
    }

    if (textValue.split('')[0] === '#' && textValue.split('')[1] === '#') {
      setTextInformation(
        <h2>
          {textValue
            .split('')
            .filter((t) => t !== '#')
            .filter((t) => t !== '##')
            .join('')}
        </h2>,
      );
      return;
    }

    if (
      textValue.split('')[0] === '-' &&
      textValue.split('')[1] === '-' &&
      textValue.split('')[2] === '-'
    ) {
      setTextInformation(<hr />);
      return;
    }

    return setTextInformation(<p>{textValue}</p>);
  };

  return (
    <div>
      <textarea onChange={(e: any) => handleTextChange(e.target.value)} rows={5} />
      <>{textInformation}</>
    </div>
  );
}

export default App;
