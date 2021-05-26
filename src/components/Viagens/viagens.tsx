import {
    IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle
} from '@ionic/react';

interface TypeViagens {
    id: number,
    name: string,
    date: string,
    url: string,
}

const listViagens: TypeViagens[] = [
    {
        id: 1,
        name: 'Brasil',
        date: '12/09',
        url: 'https://static7.depositphotos.com/1004841/738/i/600/depositphotos_7381892-stock-photo-flag-of-brazil.jpg'
    },
    {
        id: 2,
        name: 'Paris',
        date: '04/04',
        url: 'https://besthqwallpapers.com/Uploads/1-7-2018/57771/thumb2-flag-of-paris-4k-silk-texture-coat-of-arms-of-paris-france.jpg'
    },

];


const Viagens: React.FC = () => {

    return (
        <IonApp>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>Card</ IonTitle>
                </ IonToolbar>
            </IonHeader>,
            <IonContent>

                {
                    listViagens.map(item => {
                        return (
                            <IonCard>
                                <img src={item.url} />
                                <IonCardHeader>
                                    <IonCardSubtitle>{item.name}</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                   {item.date}
                                </IonCardContent>
                            </IonCard>
                        )
                    })
                }

            </IonContent>
        </IonApp>
    );
};

export default Viagens;
