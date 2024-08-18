import { useState } from 'react'
export function TwitterFollowCard({children, formatUserName,username='unknown', initialIsFollowing}){
    
    const [isFollowing, setIsFollowing]=useState(initialIsFollowing)
    const text= isFollowing?'Siguiendo':'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
   const handleCick = ()=>{
    setIsFollowing(!isFollowing)
   }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
              <img
                className='tw-followCard-avatar'
                alt='Avatar gummibear' 
                src={`https://unavatar.io/${children}`}
              />
              <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(username)}</span>
              </div>
            </header>  
            <aside>
                <button className={buttonClassName} onClick={handleCick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>

                </button>
            </aside>
        </article>
    )
}