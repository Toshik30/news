import React, { useState } from 'react'
import styles from './style.module.scss';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { DATA_REVIEWS } from '../../selectors/dataReviews'


export default function DragAndDrop() {
    const [arr, setArr] = useState(DATA_REVIEWS);
    const handleDragEnd = (result) => {
        const items = Array.from(arr)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setArr(items)
    }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='characters'>
            {(provided) => (
                <ul  {...provided.droppableProps} ref={provided.innerRef}>
                    {arr.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                               <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                    <div  className={styles.test}>
                                        <img src={item.userPhoto} alt="img" />
                                        <p>{item.userName}</p>
                                        <p>{item.reviews}</p>
                                        <strong>{item.rating}</strong>
                                        <p>{item.aboutResource}</p>
                                    </div>
                               </li>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </ul>
            )}
        </Droppable>
   </DragDropContext>
  )
}
