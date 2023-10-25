import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

type Section = 'GoodFood' | 'BadFood' | 'TravelStrategy' | 'Occasions' | 'Extra';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const toggleSection = (section: Section) => {
    if (activeSection === section) {
      // If the same section is clicked again, hide it
      setActiveSection(null);
    } else {
      // If a different section is clicked, show it
      setActiveSection(section);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fitness Information App</title>
        <meta name="description" content="Fitness Information App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Fitness Info App &rarr;</h2>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button onClick={() => toggleSection('GoodFood')} type="button" className="btn btn-secondary">Good Food</button>
              <button onClick={() => toggleSection('BadFood')} type="button" className="btn btn-secondary">Bad Food</button>
              <button onClick={() => toggleSection('TravelStrategy')} type="button" className="btn btn-secondary">Travel Strategy</button>
              <button onClick={() => toggleSection('Occasions')} type="button" className="btn btn-secondary">Occasions</button>
              <button onClick={() => toggleSection('Extra')} type="button" className="btn btn-secondary">Extra</button>
            </div>

            {activeSection === 'GoodFood' && 
            <ul className="list-group">
              <li className="list-group-item">
                Chicken Breast<br></br>
                Chicken Thigh (skinless)<br></br>
                Lean Beef (90% lean or better)<br></br>
                Low Fat Ghee (45 calories per 5g)<br></br>
                White Fish
              </li>
            </ul>}
            {activeSection === 'BadFood' && 
            <ul className="list-group">
              <li className="list-group-item">
                Olive Oil<br></br>
                Fatty Beef (80% lean or more)<br></br>
                Salmon<br></br>
                Fried food<br></br>
                Butter<br></br>
              </li>
            </ul>}
            {activeSection === 'TravelStrategy' && 
            <ul className="list-group">
              <li className="list-group-item">
                Get Steps/Workout in early in the day<br></br>
                Prioritize protein, then carbs, then fat for meals<br></br>
                Err on the side of caution, eat less than you think<br></br>
                Bring protein bars<br></br>
              </li>
            </ul>}
            {activeSection === 'Occasions' && 
            <ul className="list-group">
              <li className="list-group-item">
                Similar strategy to travel<br></br>
                Prioritize protein, then carbs, then fat for meals<br></br>
                Workout and get steps in before the event<br></br>
                Err on the side of caution, eat less than you think<br></br>
              </li>
            </ul>}
            {activeSection === 'Extra' && 
            <ul className="list-group">
              <li className="list-group-item">
                Extra 1<br></br>
                Extra 2<br></br>
                Extra 3
              </li>
            </ul>}
          </div>
        </div>
      </main>
    </div>
  );
}