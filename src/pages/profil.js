import '../App.css';

export default function() {

  const userData = JSON.parse(localStorage.getItem('userData')) || {};
  const handleInput = (inputName) => {
    const inp = document.querySelector(`[data-input="${inputName}"]`);
    userData[inputName] = inp.value;
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  return (
    <div className="App">
      <main>
        <h1>Page de profil</h1>

        <input type="text" data-input="prenom" onChange={() => handleInput('prenom')} placeholder='Prénom'></input>
        <input type="text" data-input="nom" onChange={() => handleInput('nom')} placeholder='Nom'></input>
        <input type="date" data-input="date_de_naissance" onChange={() => handleInput('date_de_naissance')} placeholder='Date de naissance'></input>
      </main>
    </div>
  );
}

