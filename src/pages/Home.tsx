import EquipeListItem from '../components/EquipeListItem';
import { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [equipes, setEquipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://nba-production-b6b8.up.railway.app/getAllEquipe');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEquipes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const refresh = (e: CustomEvent) => {
    fetchData(); // Call fetchData function to refresh the data
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Equipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Equipes
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {equipes.map((e, index) => <EquipeListItem key={index} equipe={e} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
