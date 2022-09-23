
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { QUERY_BY_USERNAME } from '../graphql/Queries';



function SearchBar() {
  const [_id,set_id] = useState("");
  
  const [searchName, setSearchName] = useState(""); 
  const [searchedUser, setSearchedUser] = useState([]);
  const { data } = useQuery(QUERY_BY_USERNAME, {
    variables: { name: searchName },
  });
  
  const createSearch = (e) => {
  e.preventDefault();
  setSearchName(e.target.value);
      };
               
  useEffect(() => {
          if (data) {
            setSearchedUser(data.usersbyname);
          }
        }, [data]);

     
                 
    return (    
       <Form className="d-flex">
            <Form.Control 
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={createSearch}
                  />
                  
          <Link href={{  
                        pathname: "/search",
                        query: {object: JSON.stringify(searchedUser)}
                           }}>  
                                            
              <Button variant="outline-success" 
                        >
                  Search
               </Button>
            </Link>  
        </Form>
    )
}

export default SearchBar



