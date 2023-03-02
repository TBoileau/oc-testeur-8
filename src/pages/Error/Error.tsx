import './Error.css';

import { Link } from 'react-router-dom';

export function Error(): JSX.Element {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retour sur la page d&apos;accueil</Link>
    </div>
  );
}
