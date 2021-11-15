
const LIMIT = 5
const ChangePage = ({
  totalPages,
  setOffset,
  offset,
  FontAwesomeIcon,
  faChevronLeft,
  faChevronRight,
  }) => {

  return (
    <div>
      <button
        className="pre"
        disabled={offset <= 1}
        onClick = {()=>(setOffset(offset - LIMIT))}
      >
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {[
        ...Array(totalPages),
      ].map((_, index) => (
        <button 
          className='change-page'
          id={index} key={index}
          onClick={(e,)=> (
            setOffset(e.target.id * LIMIT)
            )}
          style={(offset===index*LIMIT)?{
            color:'rgb(100, 100 , 100)',
            backgroundColor: 'rgb(233, 232, 232)',
            borderRadius: '50%'
            }:{}} 
        >
          {index+1}
        </button>
      ))}

      <button
        className="next"
        disabled = {offset > LIMIT}
        onClick ={()=>(
          setOffset(offset + LIMIT))}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

export default ChangePage