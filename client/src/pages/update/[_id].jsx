import { useRouter } from 'next/router';
import React from 'react';

function _id() {
    const router = useRouter();
    const {_id} = router.query;

    return (
        <div>{_id}</div>
    )
}

export default _id;
