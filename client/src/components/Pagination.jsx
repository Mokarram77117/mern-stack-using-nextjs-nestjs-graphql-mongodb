import Link from 'next/link';

    const Pagination = ({  currentpage, numpages }) => {
    const isFirst = currentpage===1
    const isLast = currentpage === numpages
    const prevPage = `/index/${currentpage-1}`
    const nextPage = `/index/${currentpage+1}`
  if (numpages === 1) return <></>;
    return (
    <div >
      <ul className='pagination my-2'   >
        {!isFirst && (
          <Link href={prevPage}>
            <a><li className='page-item page-link m-1'>
                Previous
            </li></a>
          </Link>
        )}

        {Array.from({length: numpages}, (_,i)=>(
          <>
                { currentpage===i+1?(
                  <li className='page-item page-link active m-1' > 
                      {i+1} 
                  </li>):
                  (<Link href={`/index/${i+1}`} key={i}>
                      <a>
                        <li className='page-item page-link m-1' > 
                          {i+1}
                        </li>
                      </a>
                    </Link>)}
        

          </>         
        ))}
        
        {!isLast && (
          <Link href={nextPage}>
            <a><li className='page-item page-link m-1'>
                Next
            </li></a>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Pagination;