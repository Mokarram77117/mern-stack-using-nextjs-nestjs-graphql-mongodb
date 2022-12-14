import { useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "../components/Form";
import GoHome from "../components/GoHome";
import TextInput from "../components/TextInput";
import { UPDATE_USER_MUTATION } from "../graphql/Mutations";
import styles from "../styles/Home.module.css";


function Update() {
  const router = useRouter();
  const query = router.query;
  const _id = query?._id;
  
  
  const [updateUser] = useMutation(UPDATE_USER_MUTATION);
  const [name, setName] = useState(query?.name);
  const [age, setAge] = useState(query?.age);
  const [title, setTitle] = useState(query?.title);
  const [image,setImage]=useState(query?.image);

  const editName = (e) => {
    setName(e.target.value);
    // const edited_name = name;
    // name = edited_name;
  };
  const editImage = (e) => {
      setImage(e.target.files[0]);  
  };

  const editAge = (e) => {
    setAge(e.target.value);
    // const edited_age = age;
    // age = edited_age;
    
  };
  const editTitle = (e) => {
    setTitle(e.target.value);
    // const edited_title = title;
    // title = edited_title;
  };
  const editUser = (e) => {
    updateUser({
      variables: {
        id: _id,
        updateUserInput: {
          image,
          name,
          age: Number(age),
          title,
        },
      },
    });
    alert("User info Successfully updated");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Update a User </title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="column">
        <Form  className={`${styles.create}`}>
          <h1>Update a User</h1>

          <p>Image</p>
          <TextInput
            type="file" 
            onChange={editImage}
            icon=" "
          /> 

          <p>Name</p>
          <TextInput
            type="text"
            defaultValue={name}
            onChange={editName}
            value={name}
            icon=" "
          />

          <p>Age</p>
          <TextInput
            type="number"
            defaultValue={age}
            onChange={editAge}
            value={age}
            icon=" "
          />

          <p>Title</p>
          <TextInput
            type="text"
            defaultValue={title}
            onChange={editTitle}
            value={title}
            icon=" "
          />
          <Button  onClick={editUser}>Update User</Button>
          <GoHome/>
        </Form> 
      </div>
    </div>
  );
}

export default Update;
