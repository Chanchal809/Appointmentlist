import { FormControl, InputGroup, Dropdown, DropdownButton } from "react-bootstrap"
import { BsCheck2 } from "react-icons/bs"

const DropDown = ({sortBy, onSortByChange, orderBy, onOrderByChange}) => {
    return (
        <>
          <DropdownButton variant="secondary" title="Sort">
          <Dropdown.Item href="#" onClick={() => onSortByChange('firstName')}>First Name {(sortBy == 'firstName') && <BsCheck2 className="float-end" />}</Dropdown.Item>
          <Dropdown.Item href="#"onClick={() => onSortByChange('lastName')}>Last Name {(sortBy == 'lastName') && <BsCheck2 className="float-end" />}</Dropdown.Item>
          <Dropdown.Item href="#"onClick={() => onSortByChange('aptDate')}>Appointment Date {(sortBy == 'aptDate') && <BsCheck2 className="float-end" />}</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#"onClick={() => onOrderByChange('asc')}>ASC {(orderBy == 'asc') && <BsCheck2 className="float-end" />}</Dropdown.Item>
          <Dropdown.Item href="#"onClick={() => onOrderByChange('desc')}>DESC {(orderBy == 'desc') && <BsCheck2 className="float-end" />}</Dropdown.Item>
        </DropdownButton>
        </>
    )
}

const Search = ({query, onQueryChange, sortBy, onSortByChange, orderBy,onOrderByChange}) => {
    return(
        <>
           <InputGroup className="mb-3">
            <FormControl placeholder="Search" onChange={(event) => {
                onQueryChange(event.target.value)
            }} value={query}/>
             <DropDown 
             sortBy={sortBy}
             onSortByChange={mySort => onSortByChange(mySort)}
             orderBy={orderBy}
             onOrderByChange={myOrder => onOrderByChange(myOrder)}/>
            </InputGroup>
        </>
    )
}

export default Search; 
          
        