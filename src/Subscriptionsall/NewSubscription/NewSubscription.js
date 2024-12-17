import './NewSubscription.css'
import FormSubscription from './FormSubscription'
import { useState } from 'react'

const NewSubscription = (props) => {
    const [showForm, setshowForm] = useState(false)
    const onSaveHandler = (data) => {
        const subscriptionData = { ...data, id: Math.random().toString() };
        props.onAddSubscription(subscriptionData);
        console.log("on save", subscriptionData)
        setshowForm(false);

    }
    const showFormHandler = () => {

        setshowForm(true)
        console.log('show form', showForm)
    }
    return (
        <div className='new_subscription'>
            {showForm &&<FormSubscription onSave={onSaveHandler} />}
            <button type="button" id="addnew"  onClick={showFormHandler}>Add New</button>

        </div>
    )
}

export default NewSubscription; 