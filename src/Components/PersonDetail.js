import React from 'react';


function PersonDetail(props) {
    console.log(props)
    let moreInfoPerson =
        props.list.find(user => user.login.uuid === props.match.params.id)

    console.log(moreInfoPerson)




    return (


        <div>
            <img src={moreInfoPerson.picture.medium}></img>
            <p>{moreInfoPerson.name.first}</p>
            <p>{moreInfoPerson.location.city}</p>
            <p>{moreInfoPerson.dob.age}</p>
        </div>
    )
}

export default PersonDetail;