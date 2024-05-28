import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

const NewProject = ({onAddProject,onCancel}) => {
    const modal = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    
    const handleSave = () => {
        const enteredTitle = titleRef.current.value;
        const enteredDescription= descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }
        onAddProject({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate,
        })
    }
  
    return <>
    <Modal ref={modal} buttonCaption="Okey">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... looks like forget to enter a value</p>
        <p className="text-stone-600 mb-4">please make sure you provide a valid for every input field.</p>
    </Modal>
    <div className="w-[36rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
          <Input label="title" type="text" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef}/>
          <Input label="Due Date" type="date" ref={dueDateRef}/>
        </div> 
    </div>
    </>
  
}
export default NewProject;