const setOfNumbers = new Map([
    [0,'zero'],
    [1,'one'],
    [2,'two'],
    [3,'three'],
    [4,'four'],
    [5,'five'],
    [6,'six'],
    [7,'seven'],
    [8,'eight'],
    [9,'nine'],
    [10,'ten'],
    [11,'eleven'],
    [12,'twelve'],
    [13,'thirteen'],
    [14,'fourteen'],
    [15,'fifteen'],
    [16,'sixteen'],
    [17,'seventeen'],
    [18,'eighteen'],
    [19,'nineteen'],
    [20,'twenty'],
    [30,'thirty'],
    [40,'forty'],
    [50,'fifty'],
    [60,'sixty'],
    [70,'seventy'],
    [80,'eighty'],
    [90,'ninety'],
    [100,'hundred'],
    [1000,'thousand']
]);

module.exports = function toReadable (number) {
    const strNumber = String(number);
    const dlina = String(number).length;
    str = "";
    for (let i = 0; i < dlina; i++){
        let spanNumber = parseInt(strNumber.substring(i, dlina));
        console.log(strNumber.substring(i, dlina));

        if(dlina === 1 && parseInt(strNumber) === 0 || number === undefined){
            str = str + `${setOfNumbers.get(spanNumber)} `;
            break;
        }

        if((dlina - i) === 3){
            let firstNumber = (Math.trunc(spanNumber / 100));
            str = str + `${setOfNumbers.get(firstNumber)} ${setOfNumbers.get(100)} `;
            continue;
        }
        if((dlina - i) >= 4 && (dlina - i) <= 6){
            let firstNumber = (Math.trunc(spanNumber / 1000));
            const strFirstNumber = String(firstNumber);
            const dlinaFirstNumber = String(firstNumber).length;
            console.log(strFirstNumber);
            console.log(dlinaFirstNumber);
            
            for (let i = 0; i < dlinaFirstNumber; i++){
                let spanFirstNumber = parseInt(strFirstNumber.substring(i, dlinaFirstNumber));
                if((strNumber.substring(i, dlinaFirstNumber))[0] === '0'){
                    console.log('exception');
                    continue;
                }
                spanFirstNumber = (Math.trunc(spanFirstNumber / Math.pow(10, dlinaFirstNumber - 1 - i))) * Math.pow(10, dlinaFirstNumber - 1 - i);
        
                if((dlinaFirstNumber - i) === 3){
                    let firstSubNumber = (Math.trunc(spanFirstNumber / 100));
                    str = str + `${setOfNumbers.get(firstSubNumber)} ${setOfNumbers.get(100)} `;
                    continue;
                }
                if (spanFirstNumber >= 20){
                    str = str + `${setOfNumbers.get(spanFirstNumber)} `;
                }else if(spanFirstNumber >= 10 && spanFirstNumber <= 19){
                    spanFirstNumber = parseInt(strNumber.substring(i, dlinaFirstNumber));
                    str = str + `${setOfNumbers.get(spanFirstNumber)} `;
                    break;
                }else{
                    str = str + `${setOfNumbers.get(spanFirstNumber)} `;
                }
            }


            str = str + `${setOfNumbers.get(1000)} `;
            i = i + (dlina - 4);
            continue;
        }

        if((strNumber.substring(i, dlina))[0] === '0'){
            console.log('exception');
            continue;
        }
        spanNumber = (Math.trunc(spanNumber / Math.pow(10, dlina - 1 - i))) * Math.pow(10, dlina - 1 - i);

        if (spanNumber >= 20){
            str = str + `${setOfNumbers.get(spanNumber)} `;
        }else if(spanNumber >= 10 && spanNumber <= 19){
            spanNumber = parseInt(strNumber.substring(i, dlina));
            str = str + `${setOfNumbers.get(spanNumber)} `;
            break;
        }else{
            str = str + `${setOfNumbers.get(spanNumber)} `;
        }
    }
    return str.trim();
}
