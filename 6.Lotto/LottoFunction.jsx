import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import Ball from './Ball';


function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}

const LottoFunction = () => {
    const [redo, setRedo] = useState(false);
    const lottoNumbers = useMemo(() => getWinNumbers(), [redo]);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const timeouts = useRef([]);

    useEffect(() => {
        if (winBalls.length === 0) {
            runTimeouts();
        }
        return () => {
            if (redo === true)
                timeouts.current.forEach(v => clearTimeout(v));
        }
    }, [winBalls])

    ///////////////////////////////////////////////
    // componentDidUpdate만, componentDidMount (X)
    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            //ajax
        }
    })
    /////////////////////////////////////////////////

    const runTimeouts = () => {
        console.log('runTimeouts');
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls(prevWinBalls => [...prevWinBalls, winNumbers[i]])
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
    }

    const onClickRedo = useCallback(() => {
        setWinNumbers(lottoNumbers);
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers, lottoNumbers]);

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
}

export default LottoFunction;
