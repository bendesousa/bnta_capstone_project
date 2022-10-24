import "./User.css"

const User = ({user, loggedInUser}) => {

    const logOut = () => {
        loggedInUser({
            location:""
            //id
        })
        window.location.reload()
    }
    
    return (
        <div className="user">
            <div className="user-name">
                <h2>{user ? user.name : ""}</h2>
            </div>
            <h3>List of Pins</h3>
            <ul>
            {/* {user && user.favRecipes.length > 0 ? user.favRecipes.map(favRecipe => {
                
                return <li key={favRecipe.id}>{favRecipe.name}</li>
            }):<li></li>} */}
            </ul>
            <button onClick={logOut} id="log-out">Log Out</button>
        </div>
    )
}
export default User;

