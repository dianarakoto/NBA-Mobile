import React, { useState, useEffect } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { useParams } from 'react-router';
import JoueurListItem from '../components/JoueurListItem';

function ViewEquipe() {
  const [equipe, setEquipe] = useState<Equipe>();
  const [joueurs, setJoueurs] = useState<Joueur[]>();

  const params = useParams<{ id_equipe: string }>();

  const fetchJoueursData = async () => {
    try {
      const response = await fetch(`https://example.com/api/equipes/${params.id_equipe}/joueurs`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const joueursData = await response.json();
      setJoueurs(joueursData);
    } catch (error) {
      console.error('Error fetching joueurs data:', error);
    }
  };

  useIonViewWillEnter(() => {
    const equipeData = getEquipe(params.id_equipe);
    setEquipe(equipeData);

    if (equipeData) {
      fetchJoueursData();
    }
  });

  return (
    <IonPage id="view-equipe-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Equipes" defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {equipe ? (
          <>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <h2>Nom de l'équipe: {equipe.nom_equipe}</h2>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>Statistiques des joueurs</h1>
              {joueurs ? (
                joueurs.map((j) => <JoueurListItem key={j.id_joueur} joueur={j} />)
              ) : (
                <div>Aucune statistique de joueur trouvée pour cette équipe.</div>
              )}
            </div>
          </>
        ) : (
          <div>Équipe non trouvée</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewEquipe;
