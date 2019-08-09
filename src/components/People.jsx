import React, { useState, useEffect } from 'react';

import swapi from '../dal/swapi';

const People = ({ match }) => {
  const [id, setId] = useState(match.params.id);
  const [person, setPerson] = useState({});

  useEffect(() => {
    console.log('mount');
    swapi
      .getPerson(id)
      .then(response => console.log(response));
    return () => console.log('unmount');
  }, []);

  return (
    <div>
      {id}
    </div>
  );
};

export default People;
