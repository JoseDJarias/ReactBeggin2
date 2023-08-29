import React,{useState,useEffect} from 'react';
function TitleChanger() {
    const [title,setTitle] =useState('Titulo Inicial');
    const [inputValue,setInputValue] =useState('')

    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTitle(inputValue);
        setInputValue('');
    }

    useEffect(() =>{
        document.title = title;
        console.log(title);
    },[title])

    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                value={inputValue}
                onChange={handleChange}
                placeholder='Ingrese el titulo nuevo'
                />
                <button type='submit'>Cambiar</button>
            </form>
        </div>
      );
}

export default TitleChanger;