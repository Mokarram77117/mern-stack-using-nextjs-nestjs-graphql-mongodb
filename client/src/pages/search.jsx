/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { withRouter } from "next/router";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { DELETE_USER_MUTATION } from "../graphql/Mutations";
import styles from "../styles/Home.module.css";


function Search({ router: { query } }) {
  const object = JSON.parse(query.object);
  console.log(object)
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [title, setTitle] = useState("");
  const [deleteUser] = useMutation(DELETE_USER_MUTATION);
  const onDelete = (_id) => {
    deleteUser({ variables: { id: _id }, _id, name, age, title });
  };

  const handleDelete = (_id) => {
    setUsers(object.filter((user) => user._id !== _id));
  };

  if (object.length === 0) {
    return <h1>There is no searched user</h1>;
  } else
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>Searched Users &rarr;</h1>

        <div>
          <Table striped bordered>
            <thead>
              <tr>
                <th> ID</th>
                <th> Name</th>
                <th> Age</th>
                <th> Title</th>
                <th>Action</th>
              </tr>
            </thead>

            {object.map((val) => {
              const { _id,image, name, age, title } = val;
              return (
                // eslint-disable-next-line react/jsx-key

                <tbody key={_id}>
                  <tr>
                    <td> {_id}</td>
                    <td><img src={image} height={100} width={100} /></td>
                    <td> {name}</td>
                    <td> {age}</td>
                    <td> {title}</td>
                    <td>
                      <Link
                        href={{
                          pathname: "/read",
                          query: val, // the data
                        }}
                      >
                        <Button className="action__btn m-2" variant="success">
                          Read
                        </Button>
                      </Link>

                      <Link
                        href={{
                          pathname: "/update",
                          query: val, // the data
                        }}
                      >
                        <Button className="action__btn m-2" variant="info">
                          Edit
                        </Button>
                      </Link>

                      <Link href={"/index/1"}>
                        <Button
                          className="action__btn m-2"
                          variant="danger"
                          onClick={(e) => {
                            e.preventDefault();
                            onDelete(_id);
                            handleDelete(_id);
                          }}
                        >
                          Delete
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </main>
    );
}
export default withRouter(Search);

