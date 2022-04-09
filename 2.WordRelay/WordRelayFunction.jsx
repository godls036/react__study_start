const React = require('react');
const { useState, useRef } = React;


const WordRelayFunction = () => {
    const [word, setWord] = useState('조해인');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setWord(value);
            setValue('');
            setResult('success');
        } else {
            setValue('');
            setResult("fail");
        }
        inputRef.current.focus();
    }

    const onChangeInput = e => {
        setValue(e.target.value);
    }

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label>
                <input id="wordInput" className="wordInput" type="text" ref={inputRef} onChange={onChangeInput} value={value} />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelayFunction;
