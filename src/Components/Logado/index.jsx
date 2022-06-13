import {useParams,Link} from 'react-router-dom'

import './style2.css'

function Logado(){

    const {name} = useParams()

    return(
        <div className='logado'>
           <h1>Bem vindo {name.split(":")} </h1>
           <Link className='link' to={"/"}><button>Voltar</button></Link>
           
        </div>
    )
}
export default Logado