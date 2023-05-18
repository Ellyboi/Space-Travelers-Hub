import React from 'react';
import { useSelector } from 'react-redux';
import { allMissions } from '../redux/mission/missionSlice';

const MyProfile = () => {
  const rocketList = useSelector((state) => state.rockets.rockets);
  const { dragons } = useSelector((store) => store.dragons);
  const rocketFiltered = rocketList.filter((rocket) => rocket.reserved === true);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved === true);
  const missions = useSelector(allMissions);
  const missionsArray = missions.filter((mission) => mission.joined);

  return (
    <>
      <div className="mainContainer">
        <section className="myMissions">
          <span className="sectionTitle">My Missions</span>
          {missionsArray.length > 0 ? (
            <ul className="myMissionsList">
              {missionsArray.map((mission) => {
                if (mission?.joined) {
                  return (
                    <li className="item" key={mission.id}>
                      {mission.missionName}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          ) : (
            <span className="item">No Missions Joined</span>
          )}
        </section>
      </div>
      <div>
        <h2 className="rocketTitle"> My Rockects</h2>
        <ul className="reservedRockets">
          { rocketFiltered.length > 0 ? (
            rocketFiltered.map((rocket) => (
              <li key={rocket.id}>
                {rocket.rocketName}
              </li>
            ))
          ) : (
            <li>
              <p className="noReserve">No Rocket booked </p>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h2 className="rocketTitle"> My Dragons</h2>
        <ul className="reservedRockets">
          { filteredDragons.length > 0 ? (
            filteredDragons.map((dragon) => (
              <li key={dragon.id}>
                {dragon.name}
              </li>
            ))
          ) : (
            <li>
              <p className="noReserve">No Dragon booked </p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default MyProfile;
