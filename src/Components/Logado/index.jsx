import {useParams} from 'react-router-dom'

function Logado(){

    const {name} = useParams()

    return(
        <div>
            Bem vindo {name}
        </div>
    )
}
export default Logado