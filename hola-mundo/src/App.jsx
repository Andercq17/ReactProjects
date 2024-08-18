
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    const formatUserName = (username) => `@${username}` //pasar funcion como prop
    const midudev={formatUserName:formatUserName, isFollowing:true, username:"midudev"}
    
    const users=[
        {
            username:'midudev',
            name:'Miguel Angel Duran',
            isFollowing:true
        },
        {
            username:'pheralb',
            name:'Pablo H.',
            isFollowing:false
        },
        {
            username:'PacoHdezs',
            name:'Paco Hdez',
            isFollowing:true
        },
        {
            username:'TMChein',
            name:'Tomas',
            isFollowing:false
        }
    ]
    
    
    //prop por defecto es true
    return (
        <section className='App'>
            <TwitterFollowCard { ... midudev }>
                Miguel Angel Duran
            </TwitterFollowCard>
            {
                users.map(({username, name,isFollowing})=>(
                    <TwitterFollowCard 
                        key={username}
                        formatUserName={formatUserName} 
                        username={username}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>  
                ))
            }
 
        </section>        
    )
}