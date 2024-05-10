import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
 import * as Yup from 'yup';



function Addproducts() {

    const [admin, setadmin] = useState([])
  return (
    <div>
        
        <Formik
       initialValues={{ image: '', category: '', title: '' ,price:'' }}
       validationSchema={Yup.object({
        image: Yup.string().required('Required'),
           category: Yup.string().required('Required'), 
           title: Yup.string().required('Required'),
           price: Yup.string().required('Required') 
       })}
       onSubmit={(values) => {
        function addelements() {
            fetch("http://localhost:3000/products", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then((data) => setadmin(data));
          }
          addelements();
       }}
     >
       <Form>
         <label htmlFor="image">image</label>
         <br />
         <Field name="image" type="url" />
        <br />
         <label htmlFor="category"> category</label>
         <br />
         <Field name="category" type="text" />       
         <br />
         <label htmlFor="title"> title</label> 
         <br />
         <Field name="title" type="text" />
         <br />
        
         <label htmlFor="price">price </label>
         <br />
         <Field name="price" type="text" />
        
 
         <button  type="submit">Submit</button>
       </Form>
     </Formik>

    </div>
  )
}

export default Addproducts