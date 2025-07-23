import { useState, useEffect } from 'react';
import './App.css';
import sary from './assets/image.jpg';



function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputHeight, setInputHeight] = useState(60);
  const minHeight = 60;
  const maxHeight = 200;
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, from: 'user' }]);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      setInputHeight(prevHeight => Math.min(prevHeight + 30, maxHeight));
      return;
    }

    if ((e.key === 'Backspace' || e.key === 'Delete') && message.length > 0) {
      if (message.length === 1) {
        setInputHeight(prevHeight => Math.max(prevHeight - 30, minHeight));
      }
    }
  };

  useEffect(() => {
    const rows = message.split('\n').length;
    const newHeight = Math.max(minHeight, Math.min(rows * 30, maxHeight));
    setInputHeight(newHeight);
  }, [message]);

  return (
    <div className=" bg-gray-50 min-h-screen flex flex-col text-gray-100 relative">
    <div className="md:grid lg:flex flex-1 sm:grid w-full">
      {/* Côté gauche - Texte d'introduction */}
      
      <div className="flex-1 w-full relative bg-gradient-to-br from-indigo-300  via-gray-400 to-teal-200 flex flex-col justify-center text-white bg-opacity-80 rounded-e-xl">
        <div ><img className='rounded-full w-56 h-56 m-10' src={sary} alt=""  /></div> 
        <div className="bg-gray-50 relative w-auto h-auto text-cyan-950 p-8 rounded-e-3xl
        before:absolute before:content-[''] before:bg-transparent before:w-10 before:h-10 before:rounded-bl-full before:-top-10 before:left-0 before:shadow-[-10px_14px_0px_5px_rgba(255,255,255,1)]
        after:absolute after:content-[''] after:bg-transparent after:w-10 after:h-10 after:rounded-ss-full after:-bottom-10 after:left-0 after:shadow-[-10px_-14px_0px_5px_rgba(255,255,255,1)]
        sm:w-auto">
          <h1 className="text-3xl font-extrabold mb-4 leading-tight">
            Bienvenue dans le portfolio de NIRIMIHAMINA Fanomezantsoa Patrick
          </h1>
          <p className="text-xl mb-6 tracking-wide opacity-90">
            Salut ! Je suis **NIRIMIHAMINA Fanomezantsoa Patrick**, un développeur web passionné par
            la création de solutions innovantes et fonctionnelles. Dans ce portfolio, tu peux découvrir
            mes projets récents, mes compétences techniques, ainsi que mon parcours professionnel.
          </p>
          <p className="text-lg opacity-80">
            Si tu veux en savoir plus sur moi ou sur mon travail, pose tes questions dans le chat à droite !
          </p>
        </div>
       
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="sm:w-auto lg:w-1/4 bottom-8  m-10 px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition duration-300 ease-in-out"
        >
          {isChatOpen ? 'Fermer le Chat' : 'Ouvrir le Chat'}
        </button>
      </div>

      {/* Côté droit - Section "CV" */}
      <div className="bg-gray-50 p-8 overflow-y-scroll overflow-x-hidden  h-screen rounded-lg  flex flex-col space-y-6 ">
        <div className="flex flex-col bg-gradient-to-r  from-indigo-500 via-gray-500 to-teal-300 text-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">

          {/* Expériences */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              <i className="fas fa-briefcase mr-3"></i> <span>Mes Expériences</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center bg-gray-700 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <i className="fas fa-laptop-code mr-4 text-indigo-400 text-3xl"></i>
                <div>
                  <h4 className="text-xl font-semibold">Développeur Front-End </h4>
                  <p>2022 - Présent</p>
                  <p className="text-gray-300 mt-2">Développement d'interfaces utilisateur en React et gestion de projet agile.</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-700 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <i className="fas fa-laptop mr-4 text-indigo-400 text-3xl"></i>
                <div>
                  <h4 className="text-xl font-semibold">Stagiaire Développement Web </h4>
                  <p>2021 - 2022</p>
                  <p className="text-gray-300 mt-2">Participation à la création de sites web responsives et optimisation SEO.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diplômes */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              <i className="fas fa-graduation-cap mr-3"></i> <span>Mes Diplômes</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center bg-gray-700 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <i className="fas fa-university mr-4 text-teal-600 text-3xl"></i>
                <div>
                  <h4 className="text-xl font-semibold">Baccaloreat serie D</h4>
                  <p>LSJO Tanambao Fianarantsoa</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-700 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <i className="fas fa-university mr-4 text-teal-600 text-3xl"></i>
                <div>
                  <h4 className="text-xl font-semibold">Licence en Informatique</h4>
                  <p>Ecole de Management et d'Innovation Technologique EMIT Fianarantsoa - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Compétences */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Mes Compétences</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-lg">Développement Front-End (React, Vue.js, HTML/CSS/JS)</li>
            <li className="text-lg">Gestion de projet agile</li>
            <li className="text-lg">Optimisation SEO et performances web</li>
            <li className="text-lg">Création d'APIs avec Node.js et Express</li>
            <li className="text-lg">Versionnement Git, GitHub</li>
          </ul>
        </div>
        {/* <div className="bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Mes Compétences</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-lg">Développement Front-End (React, Vue.js, HTML/CSS/JS)</li>
            <li className="text-lg">Gestion de projet agile</li>
            <li className="text-lg">Optimisation SEO et performances web</li>
            <li className="text-lg">Création d'APIs avec Node.js et Express</li>
            <li className="text-lg">Versionnement Git, GitHub</li>
          </ul>
        </div> */}
      </div>
    </div>

      {/* Modal - Chat avec Backdrop */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-4/5 max-w-4xl h-4/5 flex flex-col transition-all duration-300 ease-in-out transform scale-105">
            <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">Chat avec NIRIMIHAMINA</h2>

            {/* Conteneur des messages */}
            <div className="flex-grow mb-4 p-4 bg-gray-800 rounded-lg overflow-y-auto border border-gray-600 space-y-4 max-h-full">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${msg.from === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-600 text-white'}`}>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulaire d'envoi de message (en bas de la modal) */}
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2 mt-auto">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="text-black flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-950 resize-none transition-all duration-300 ease-in-out"
                placeholder="Écrivez un message..."
                style={{ height: `${inputHeight}px` }}
                rows="1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition duration-300 ease-in-out"
              >
                Envoyer
              </button>
            </form>

            {/* Bouton pour fermer la modal */}
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-4 right-4 text-gray-100 bg-red-600 hover:bg-red-700 p-2 rounded-full"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-6 mt-auto">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p className="text-lg opacity-90">
            Pour me contacter, envoyez-moi un message ou visitez mes profils sur les réseaux sociaux.
          </p>
          <div className="mt-4">
            <a href="mailto:patrick@example.com" className="text-lg underline hover:text-teal-300">
              patrick@example.com
            </a>
          </div>
        </div>
      </footer>

      
    </div>
  );
}

export default App;
