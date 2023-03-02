import './Collapse.css';

import { useState } from 'react';

type CollapseProps = {
  title: string;
  body: React.ReactNode;
};

export function Collapse({ title, body }: CollapseProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className={'collapse ' + (open ? 'collapse--open' : '')}>
      <h2 className="collapse__title" onClick={() => setOpen(!open)}>
        {title}
      </h2>
      <div className="collapse__body">{body}</div>
    </div>
  );
}
