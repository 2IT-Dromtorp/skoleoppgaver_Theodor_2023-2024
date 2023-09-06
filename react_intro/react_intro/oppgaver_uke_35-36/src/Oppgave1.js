

function DeloppgaveA() {

    return (
        <div className="deloppgave">
            <h2> Deloppgave a</h2>
            <p> Hva skriver du i javascript dersom du vil gi variabelen test verdien 8? Hvilken datatype er dette? </p>
            <p> Svar: let test = 8 </p>
            <p> Svar: Se console loggen nå {console.log(typeof(8))} </p>
            <p> som du kan se så er denne verdien number</p>

        </div>
    )
}

function DeloppgaveB() {

    return(
    <div className="deloppgave">
            <h2> Deloppgave a</h2>
            <p> Hva skriver du dersom du vil gi variabelen test verdien "testverdi"? Hvilken datatype er dette? </p>
            <p> Svar: let test = 'testverdi' </p>
            <p> Svar: Se console loggen nå {console.log(typeof(testverdi))} </p>
            <p> som du kan se så er denne verdien en string</p>
        </div>
        )

}

function DeloppgaveC() {

    return(
    <div className="deloppgave">
            <h2> Deloppgave a</h2>
            <p> Hva skriver du dersom du vil regne ut 2 * 3 og sette resultatet inn i variabelen produkt? </p>
            <p> Svar: let a = 2 </p>
            <p>    let b = 3 </p>
            <p>    let produkt = a * b </p>
            <P> console.log(produkt) </p>
    </div>
    )

}
function DeloppgaveD() {

    return(
    <div className="deloppgave">
            <h2> Deloppgave a</h2>
            <p> Hva skriver du dersom du vil regne ut verdien av brøken 2/3 og sette resultatet inn i variabelen broek? </p>
            <p> Svar: let a = 2 </p> 
            <p> let b = 3 </p> 
            <p> let produkt = a / b </p> 
            <p>   console.log(broek) </p>
    </div>
    )

}


function Oppgave1() {

    return (
        <>
            <h1> Dette er oppgave 1 </h1>
            <DeloppgaveA />
            <DeloppgaveB />
            <DeloppgaveC />
            <DeloppgaveD />
        </>
    )

}
export default Oppgave1;