import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

type Section = 'GoodFood' | 'BadFood' | 'TravelStrategy' | 'Occasions' | 'Tips';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>('GoodFood'); // Set 'GoodFood' as the default
  const [buttonStyles, setButtonStyles] = useState<Record<Section, string>>({
    GoodFood: 'btn btn-success',
    BadFood: 'btn btn-secondary',
    TravelStrategy: 'btn btn-secondary',
    Occasions: 'btn btn-secondary',
    Tips: 'btn btn-secondary',
  });

  const toggleSection = (section: Section) => {
    if (activeSection === section) {
      // If the same section is clicked again, hide it and reset button style
      setActiveSection(null);
      setButtonStyles((prevStyles) => ({
        ...prevStyles,
        [section]: 'btn btn-secondary',
      }));
    } else {
      // If a different section is clicked, show it and update button style
      setActiveSection(section);
      setButtonStyles((prevStyles) => ({
        ...prevStyles,
        [section]: 'btn btn-success', // Change to the desired color when clicked
      }));
      // Reset style of previously active button if any
      if (activeSection) {
        setButtonStyles((prevStyles) => ({
          ...prevStyles,
          [activeSection]: 'btn btn-secondary',
        }));
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fitness Information App</title>
        <meta name="description" content="Things to keep in mind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Things to keep in mind &rarr;</h2>
            <div className="btn-group" role="group" aria-label="categories">
              <button onClick={() => toggleSection('GoodFood')} type="button" className={buttonStyles.GoodFood}>
                Good Food
              </button>
              <button onClick={() => toggleSection('BadFood')} type="button" className={buttonStyles.BadFood}>
                Bad Food
              </button>
              <button onClick={() => toggleSection('TravelStrategy')} type="button" className={buttonStyles.TravelStrategy}>
                Travel Strategy
              </button>
              <button onClick={() => toggleSection('Occasions')} type="button" className={buttonStyles.Occasions}>
                Occasions
              </button>
              <button onClick={() => toggleSection('Tips')} type="button" className={buttonStyles.Tips}>
                Tips
              </button>
            </div>

          {activeSection === 'GoodFood' && 
            <ol className="list-group">
              <li className="list-group-item">
                Chicken Breast
              </li>
              <li className="list-group-item">
                Chicken Thigh (skinless)
              </li>
              <li className="list-group-item">
                Lean Beef (90% lean or better)
              </li>
              <li className="list-group-item">
                Low Fat Ghee (45 calories per 5g)
              </li>
              <li className="list-group-item">
                White Fish
              </li>
              <li className="list-group-item">
                Hot Sauce (check nutrition info)
              </li>
              <li className="list-group-item">
                Spices
              </li>
              <li className="list-group-item">
                Vinaigrette (moderate amount)
              </li>
              <li className="list-group-item">
                Black Coffee
              </li>
              <li className="list-group-item">
                Sparkling Water (Flavored and unflavored)
              </li>
              <li className="list-group-item">
                0 Calorie and 0 Sugar soft drinks
              </li>
            </ol>}
            {activeSection === 'BadFood' && 
            <ol className="list-group">
              <li className="list-group-item">
                Sugar
              </li>
              <li className="list-group-item">
                Desserts
              </li>
              <li className="list-group-item">
                Olive Oil
              </li>
              <li className="list-group-item">
                Fatty Beef (80% lean or more)
              </li>
              <li className="list-group-item">
                Salmon
              </li>
              <li className="list-group-item">
                Fried food
              </li>
              <li className="list-group-item">
                Butter
              </li>
              <li className="list-group-item">
                Salad Dressing
              </li>
              <li className="list-group-item">
                Condiments like ketchup, mayo, mustard
              </li>
              <li className="list-group-item">
                Sodas
              </li>
              <li className="list-group-item">
                Juices
              </li>
            </ol>}
            {activeSection === 'TravelStrategy' && 
            <ol className="list-group">
              <li className="list-group-item">
                Get Steps/Workout in early in the day
              </li>
              <li className="list-group-item">
                Prioritize protein, then carbs, then fat for meals
              </li>
              <li className="list-group-item">
                Err on the side of caution, eat less than you think
              </li>
              <li className="list-group-item">
                Bring protein bars
              </li>
            </ol>}
            {activeSection === 'Occasions' && 
            <ol className="list-group">
              <li className="list-group-item">
                Similar strategy to travel
              </li>
              <li className="list-group-item">
                Prioritize protein, then carbs, then fat for meals
              </li>
              <li className="list-group-item">
                Workout and get steps in before the event
              </li>
              <li className="list-group-item">
                Err on the side of caution, eat less than you think
              </li>
            </ol>}
            {activeSection === 'Tips' && 
              <ol className="list-group">
                <li className="list-group-item">
                  If you know your week will get busy, front load your steps and workouts.
                </li>
                <li className="list-group-item">
                  Consider your daily step average and multiply by 7, get this total number of steps every week.
                </li>
                <li className="list-group-item">
                  Don't worry if you mess up, just know how to get back on track and do this immediately.
                </li>
                <li className="list-group-item">
                  Get obsessed with numbers and counting. Count everything, your steps, your workouts, your calories in and calories out.
                </li>
                <li className="list-group-item">
                  Thinking about your fitness as a game to win often helps push you further than you thought you could go. Let's win the game.
                </li>
                <li className="list-group-item">
                  Figure out what motivates and incentivizes you and expand upon it.
                </li>
              </ol>}
          </div>
        </div>
      </main>
    </div>
  );
}