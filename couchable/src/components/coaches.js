import React from 'react';

function Coaches(props) {
  return <div>
        <h1>These Coaches are from the APi</h1>
        {props.coaches.map((coach) => {
            return (
                <div key={coach.id}>
                    <h2>{coach.title}</h2>
                    <p>{coach.body}</p>
                </div>

            );
        })}
    </div>
}

export default Coaches
