import React, { useState } from 'react';
import Card from './Card';
import styles from './Searchbar.module.css';

const SearchBar = ()  => {
  const [input, setInput] = useState('');
  const [cards, setCards] = useState<string[]>([]);
  const [data, setData] = useState<string[]>([]);

  // the logic behind the OK button. when the function is called POST the new message from input to the server.
  // the post then returns an array of messages and replaces the data array with the array full of messages
  const handleSearch = () => {
    if (input.trim() !== '') {
      fetch('/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })
        .then((res) => res.json())
        .then((responseData) => {
          setCards([...cards, input]);
          setInput('');
          setData(responseData.messages);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  //the first fetch to get the initial message displayed on screen
  React.useEffect(() => {
    fetch('/hello')
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData.messages);
      })
      .catch((error) => {
        console.error('Error in fetching the responsedata:', error);
      });
  }, []);
  
  return (
    <div className={styles.searchcontainer}>
      <div className={styles.inputxcontainer}>
        <input
          type="text"
          placeholder="Input..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} disabled={input.trim() === ''}>
          OK
        </button>
      </div>
      <div className={styles.cardcontainer}>
        {data.length > 0 ? (
          data.map((content, index) => (
            <Card key={index} content={content} />
          ))
        ) : (
          <Card content="Laden..." />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
