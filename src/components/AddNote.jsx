import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

// Import Formik and Yup




const AddNote = (props) => {
 
  const initialValues = {
    title: '',
    content : ''
  }



  const handleSubmit = (values) => {
    // console.log(values);
    props.createNote(values);

  }
  // add form logic here

  return (
    <div className='flex flex-col flex-wrap p-20 justify-center items-center bg-slate-50 rounded-md'>
      <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        
      >
        <form className='w-full max-w-lg'>
          <div className='mb-5 space-y-5'>
            <Field 
            name="name"
            type="text"
            placeholder="Enter a note title"
            className="border border-gray-300 shadow p-3 w-full rounded"
            ></Field>
            <ErrorMessage name='title' className='text-red-400'/>
            <Field 
            name="content"
            type="text"
            placeholder="Enter a note description"
            className="border border-gray-300 shadow p-3 w-full rounded"
            ></Field>
          </div>
          <button
            type='submit'
            className='w-full text-center py-3 rounded bg-yellow-400 text-white hover:bg-green-400 focus:outline-none my-1'
          >
            Add Note
          </button>

        </form>

      </Formik>
      { /* Add here your form and style it with Tailwind */ }
    </div>
  );
};

export default AddNote;
