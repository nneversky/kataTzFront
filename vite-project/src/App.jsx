import {Button} from 'react-bootstrap'
import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState('')
  const [res, setRes] = useState('')

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const handleClick = () => {
    encodeFunc(data)
    setData('')
  }

  const encodeFunc = (input) => {
    let result = "";
    let count = 1;

    input.split("").forEach((char, i, arr) => {
        if (char === arr[i + 1]) {
            count++;
        } else {
            result += (count > 1 ? count : "") + char;
            count = 1;
        }
    });

    setRes(result);
}

  const buffFunc = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setRes('')
    })
  }

  return (
    <div className='container'>
      <h2>Кодирование строки</h2>
      <textarea value={data} onChange={(e) => handleChange(e)} className='textarea' name="" id=""></textarea>
      <Button onClick={() => handleClick()} variant='primary'>Кодировать</Button>
      <div>
      <span>Результат: {res}</span>
      </div>
      <Button onClick={() => buffFunc(res)} variant='primary'>Скопировать в буфер обмена</Button>
    </div>
  )
}

export default App