import './card.css'

import main from'../assets/me.jpg'
const Card = ({username,age,Hobby,Skill,Address,Pincode,Email,Contact}) => {

    return(
        <div>
        <h1>User Profile Card</h1>
        <div className='main-item'>
           <div className='Card'>
            <div className='img'>
                <img src={main} alt="" height="200px" width="200px"/>
            </div>
               <p className="na"><span>Username:-</span>{username}</p>
                <p><span>Age:-</span>{age}</p>
                <p><span>Email:-</span>{Email}</p>
                <p><span>Address:-</span>{Address}</p>
                <p><span>Contact:-</span>&nbsp;{Contact}</p>
                <p><span>Hobby:-</span>{Hobby}</p>
                <p><span>Skill:-</span>{Skill}</p>
                <p><span>Pincode:-</span>{Pincode}</p>
           </div>
        </div>
        </div>
    )
}
export default Card;