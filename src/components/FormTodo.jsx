import React, { useState } from "react";

const FromTodo =props =>{
    const [description, setDescription]= useState("");//useState sirve para rastrear lo que el usuario hace en la pagina


    const{addItem}=props;

    // evita que se recargue la pagina
    const handleSubmit = e => {
        e.preventDefault();
        console.log(description);
        
        addItem({  
            done: false,
            id: (new Date()).toString(),
            description         
        });

        setDescription("");
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <div className="input">
                    <input 
                    type="text"
                    className="text"
                    value={description}
                    //cuando el usuario escriba -------- ↓↓↓↓ lo que el usuario escribe
                    onChange = { e => setDescription(e.target.value)}
                     />
                    <button
                        className="button pink"
                        //{description ? "" : "disabled"} es un if - else enuna sola linea
                        disabled={description ? "" : "disabled"}
                    >agregar tarea </button>
                </div>
            </div>
        </form>
    );
}
export default FromTodo;