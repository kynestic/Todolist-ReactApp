const Note = ({message, state, deleting, changeState}) => {
    return(
        <>
            <li >
                <input type="checkbox" checked = {state} onChange= {changeState}/>
                <p style = {(state)? {textDecorationLine: "line-through", display: "inline-block"} : {display: "inline-block"}}>
                    {message}
                </p>
                <span onClick={deleting}><i className="fa-solid fa-x"></i></span>
            </li>
        </>
    )
}

export default Note