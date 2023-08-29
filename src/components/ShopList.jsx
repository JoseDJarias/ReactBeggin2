import React, {useState} from 'react';

function ShopList() {
    //all items
    const [items,setItems] = useState([])
    //newItems
    const [newItem,setNewItem] = useState('')
    //contador de tareas terminadas
    const [taskCounter,setTaskCounter] = useState(0)

    const handleAddItem = () =>{
        //agregar items
        //{text: newItem, completed:false}
        //validar espacios en blanco
        if (newItem.trim() !== '') {
            //agregarlos el nuevo articulo
            //newItem -> manzanas
            setItems([...items, {text:newItem, completed:false}])
            //seteamos el newItem vacio para cuando queramos agregar mas 
            setNewItem('')
        }
    }

    const handleTaskCompleted = (index) =>{
        //completar tareas
        //deje la lista como lo tiene, pero en la posicion index cambie el valor de completed
        const updatedItems = [...items];
        updatedItems[index].completed = !updatedItems[index].completed  ;
        setItems(updatedItems);
        items[index].completed? setTaskCounter(taskCounter+1): setTaskCounter(taskCounter-1)

    }
    return (
        <div>
            <ul>

                {
                    items.map((item,index) =>(
                       <li key={index}
                       onClick={() =>handleTaskCompleted(index)}
                       style={{textDecoration: item.completed? 'line-through': 'none'}}>
                        
                            {item.text}
                       </li> 
                    ))
                }

            </ul>
            <p>Articulos Completados: {taskCounter}</p>
            <input 
            type='text' 
            value={newItem} onChange={(e) =>setNewItem(e.target.value)}
            placeholder='Agregar articulo nuevo'
            />
            <button onClick={handleAddItem}>Agregar</button>

        </div>
      );
}

export default ShopList;