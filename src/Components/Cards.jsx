import React from 'react'
import ProfileCard from './ProfileCard'


const Cards = ({ item }) => {
    return (
        <div>
            <ProfileCard
                name={item.title}
                title="Software Engineer"
                // handle="javicodes"
                // status="Online"
                contactText={price}
                avatarUrl={imageURL}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
            />
        </div>
    )
}

export default Cards