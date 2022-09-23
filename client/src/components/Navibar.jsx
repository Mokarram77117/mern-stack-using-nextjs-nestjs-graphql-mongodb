

import Link from 'next/link';
import React from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';



function Navibar({...rest}) {
    return (
      <Navbar className={styles.mainnav} sticky="top">
        {/* <nav className={styles.mainnav} > */}
        <ul>
          <Link href='/'>
            <a>
              <li>Home</li>
            </a> 
          </Link>
          
          <Link href='/create'>
            <a>
              <li>Add user</li>
            </a>
          </Link>
          
          <Form className="d-flex">
            <Form.Control {...rest}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    
                  />
                  
                    
              <Button variant="outline-success" 
                        >
                  Search
               </Button>
            
        </Form>
                 
        </ul>
      </Navbar>
    )
}

export default Navibar
