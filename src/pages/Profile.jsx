import "../style/Profile.css";
import React /*, { useEffect, useState }*/ from "react";
import DailyActivitiesGraph from "../components/DailyActivitiesGraph";
import ScoreGraph from "../components/ScoreGraph";
import RadarGraph from "../components/RadarGraph";
import AverageLineGraph from "../components/AverageLineGraph";

function Profile() {
  /*
  // UserId search in Url bar
  const queryString = window.location.search;
  const userId = new URLSearchParams(queryString).get("id");

  // Fetch Use to load data user
  const loadData = `http://localhost:3000/user/${userId}`;

  const [users, setUsers] = useState();
  // PROBLEME NIBVEAU DU FECTH RENVOI UNE ERREUR LORSQUE QU'ON LANCE LE YARN START
  // JE DOIS ENLEVER LES ENDPOINTS POUR CHARGER LA PAGE ET LES DATA ET ENSUITES LES REMETTRES
  // IMPOSSIBLE DE LE FAIRE AU CHARGEMENT DE LA PAGE

  useEffect(() => {
    fetch(loadData)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [loadData]);*/
  const users = {
    data: {
      id: 18,
      userInfos: { firstName: "Cecilia", lastName: "Ratorez", age: 34 },
      score: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120,
      },
    },
  };

  //const keyData = users.data.keyData;
  const userInfos = users.data.userInfos;

  return (
    <main className="profile-page">
      <h1 className="profile-page__title">
        Bonjour <span className="userName-title">{userInfos.firstName}</span>
      </h1>
      <p className="profile-page__message">
        Félicitation vous avez explosez vos objectifs hier !
      </p>
      <div className="profile-row">
        <div className="profile-row__graphic">
          <DailyActivitiesGraph />
          <AverageLineGraph />
          <RadarGraph />
          <ScoreGraph />
        </div>
        <div className="profile-row__info">
          <div className="info-1">info 1</div>
          <div className="info-2">info 2</div>
          <div className="info-3">info 3</div>
          <div className="info-4">info 4</div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
