import React from 'react';
import { Joueur } from '../data/joueurs';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

interface JoueurListItemProps {
  joueur: Joueur;
}

const JoueurListItem: React.FC<JoueurListItemProps> = ({ joueur }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{joueur.nom_joueur}</IonCardTitle>
        <IonCardSubtitle>Player Stats</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <table>
          <thead>
            <tr>
              <th>Stat Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {/* Example player stats; replace with actual player stats */}
            <tr>
              <td>Points</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Assists</td>
              <td>30</td>
            </tr>
            {/* Add more rows for other stats as needed */}
          </tbody>
        </table>
      </IonCardContent>
    </IonCard>
  );
};

export default JoueurListItem;
