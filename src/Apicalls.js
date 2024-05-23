import Form from './Form.js'

function ApiCalls( {inputs} ){
    return(
        <>
            <h1> Gamename is: {inputs.name} </h1>
            <h2> Tag is: {inputs.tag} </h2>
        </>

    )
}

export default ApiCalls;