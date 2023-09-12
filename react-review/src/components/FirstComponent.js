import React, {useState} from 'react'

export const FirstComponent = () => {

    //let name = "Jose Hurtado Baeza";
    let web = "josehurtadobaeza.super.site";

    const [name, setName] = useState("Jose");

    let projects = [
        "JavaScrip project",
        "PHP project",
        "React project",
        "CSS project"
    ]

    const changeName = (newName) => {
        setName(newName);
    }

    return (
        <div>
            <h1>My first component</h1>
            <p>This is a text in my component</p>
            <p>My name is: <strong className={name.length >= 4 ? 'green' : 'red'}>{name}</strong></p>
            <p>My web is: {web}</p>

            <input type="text" onChange={e => changeName(e.target.value)} placeholder='Change the name'></input>

            <button onClick={e => {
                console.log("The saved value in your state is: ", name);
            }}>Show state value</button>

            <button onClick={ e => changeName("JOSE HURTADO BAEZA")}>
                Change name
            </button>

            <h2>Projects:</h2>
            <ul>
                {
                    projects.map((project, index) => {
                        return (<li key={index}>
                            {project}
                        </li>);
                    })
                }
            </ul>
        </div>
    )
}
