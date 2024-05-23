import './CSS/TodoItems.css'
import cross2 from './Assets/cross2.png'
import not_tick2 from "./Assets/not_tick2.png";
import ticked from "./Assets/ticked.png";

//http://localhost:5173/

const TodoItems = ({no,display,text, setTodos}) => {

    const deleteTodo =(no)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data= data.filter((todo)=> todo.no!==no);
        setTodos(data);

    }

    const toggle=()=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i =0; i< data.length; i++){
            if(data[i].no===no){
                if (data[i].display==="") {
                    data[i].display= "line-through";
                    
                }
                else{
                    data[i].display= "";

                }
                break;
            }
        }
        setTodos(data);
    }



  return (
    <div>
      <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img src={not_tick2} alt="" />: <img src={ticked} alt="" />}
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={cross2} alt="" />
        
      </div>
    </div>
  )
}

export default TodoItems
