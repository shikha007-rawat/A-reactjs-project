import'./Filter.css'
const  Filter = (props) => {
  const onSelectHandler=(event)=>{
    console.log("onselect Handler" , event.target.value)
    props.onFilterChange(event.target.value)

  }
  return (
   <div className='filter'>
    
      <label>Filter by year</label>
      <select value={props.setFilteredData} onChange={onSelectHandler}>
        <option value="2022">2022</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2019">2019</option>
      </select>
   
   </div>
  )
}

export default Filter
