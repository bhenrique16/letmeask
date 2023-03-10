import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';

import { Button } from '../components/Button';


import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';


export function Home () { 
    const history = useHistory()
    const {user,signInWithGoogle} = useAuth()
    const [roomCode,setRoomCode]= useState('')

   async function handleCreateRoom(){
        if(!user){
         await signInWithGoogle()
        }
        
    history.push('/rooms/new')
}

    async function handleJoinRoom(event:FormEvent){
        event.preventDefault()
        if(roomCode.trim()===''){
            return
        }
        const roomRef = await database.ref(`rooms/${roomCode}`).get()
        if(!roomRef.exists()){
            alert('room does not exists.')
            return
        }
        if(roomRef.val().endedAt){
            alert('room already closed')
            return
        }

        history.push(`/rooms/${roomCode}`)
    }    
    

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
                    <button  onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="log do google"/>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                        type="text"
                        placeholder="digite o código da sala"
                        onChange={event=>setRoomCode(event.target.value)}
                        value={roomCode}
                        />
                        <Button>
                            Entrar na sala
                        </Button>

                    </form>
                </div>
            </main>
        </div>
    )
}

//typeof é type="submit"
