import '../App.css';

export default function() {

  const userData = JSON.parse(localStorage.getItem('userData')) || null;
  const renderTitle = () => {
    if (userData) {
        const DateNow = new Date();
        const Birthday = new Date(userData['date_de_naissance']);
        const readyPassed = DateNow.getMonth() > Birthday.getMonth();

        Birthday.setFullYear(DateNow.getFullYear());
        if (readyPassed) {
            Birthday.setFullYear(DateNow.getFullYear() + 1);
        }
        
        const diff = Birthday.getTime() - DateNow.getTime();
        const daysRemaining = Math.round(diff / 1000 / 60 / 60 / 24); 
        
        return (
            <div>
            <h3> Bonjour {userData.prenom} votre anniversaire est dans {daysRemaining} jours. </h3>
            <p>Si cela est incorrect vous pouvez modifier les informations sur votre page informations</p>
            </div>
        )
    }
    return <h3> Veuillez compléter vos informations sur la page informations </h3>
  }

  return (
    <div className="App">
      <main>
        <h1>Bienvenue sur Actual React Technical</h1>
        { renderTitle() }
      </main>
    </div>
  );
}

