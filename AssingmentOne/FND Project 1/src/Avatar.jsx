import React from 'react';

function Avatar({ person, size = 100 , color, relationship   }) {
    return (
        <div className='avatar'>
            <p style={{ color: color }}>{person.name}</p>
            
            <img
                src={person.image}
                alt={person.name}
                width={size}
                height={size}
            />
            <p id="rel">{relationship}</p>
        </div>
    )
}

export default function Profile() {
    
    return (
        <div id="avatarContainer">
            <Avatar
                size={250}
                person={{ name: 'David Faria', image: 'assets/IMG_0258.jpeg' }}
                color="orange"
                relationship="Myself"
            />
            <Avatar
                size={250}
                person={{ name: 'Audrey', image: '/assets/IMG_1788.jpeg' }}
                color="red"
                relationship="Girlfriend"
            />
            <Avatar
                size={250}
                person={{ name: 'Akeria', image: 'assets/IMG_6352.jpeg' }}
                color="yellow"
                relationship="Dog"
            />
        </div>
    );
}

