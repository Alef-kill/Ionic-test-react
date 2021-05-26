import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import Amigos from '../components/Amigos/Amigos';
import ExploreContainer from '../components/ExploreContainer';
import Viagens from '../components/Viagens/viagens';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {name === 'Home'?
        <ExploreContainer name={name} ></ExploreContainer>
        : name === 'Amigos'? 
        <Amigos></Amigos> 
        : <Viagens></Viagens>}
        
      </IonContent>
    </IonPage>
  );
};

export default Page;
