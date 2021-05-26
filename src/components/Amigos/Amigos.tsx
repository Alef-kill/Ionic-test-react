import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonButton
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { trash, pencil, analytics } from 'ionicons/icons';
import './Amigos.css';
import { useState } from 'react';

interface TypeFriends {
    id: number,
    name: string,
    age: number,
    levelFriend: number,

}

const listAmigos: TypeFriends[] = [
    {
        id: 1,
        name: 'Goku',
        age: 90,
        levelFriend: 5
    },
    {
        id: 2,
        name: 'Naruto',
        age: 70,
        levelFriend: 4
    },
    {
        id: 3,
        name: 'Hinata',
        age: 70,
        levelFriend: 4
    },
    {
        id: 4,
        name: 'Homem Aranha',
        age: 70,
        levelFriend: 4
    },
];


const Amigos: React.FC = () => {
    const location = useLocation();

    const [listFriendsState, setListFriendState] = useState<TypeFriends[]>(listAmigos);

    function deleteFriend(item: TypeFriends) {
        
        alert('Em construção')
    }

    return (
        <IonContent  >
            <IonList lines="inset">
                <IonItem>
                    <IonLabel>Name</IonLabel>
                    <IonLabel>Level Friend</IonLabel>
                    <IonLabel>Age</IonLabel>
                    <IonLabel>Ações</IonLabel>
                </IonItem>
                {listAmigos.map(item => {
                    return (
                        <IonItem>
                            <IonLabel>{item.name}</IonLabel>
                            <IonLabel>{item.levelFriend}</IonLabel>
                            <IonLabel>{item.age}</IonLabel>
                            <IonButton size="default" color="danger" onClick={() => deleteFriend(item)} >
                                <IonIcon slot="start" ios={trash} md={trash} />
                                Deletar
                            </IonButton>
                            <IonButton size="default" color="warning" >
                                <IonIcon slot="start" ios={pencil} md={pencil} />
                                Alterar
                            </IonButton>
                        </IonItem>)
                })}
            </IonList>
        </IonContent>
    );
};

export default Amigos;
