import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

export default function GoHome() {
  return (
    <div>
      <Link href={"/"}>
        <Button className="action__btn m-2" variant="success">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
