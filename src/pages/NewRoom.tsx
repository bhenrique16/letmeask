import {Link} from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';




export function NewRoom () {


    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustracao simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência dem tempo-real</p>

            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logo letmeask"/>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                        type="text"
                        placeholder="nome da sala"
                        />
                        <Button typeof='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>Que entrar em um sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

//typeof é type="submit"
