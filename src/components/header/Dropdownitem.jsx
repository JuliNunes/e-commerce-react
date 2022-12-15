import Dropdown from 'react-bootstrap/Dropdown';
import react from 'react';

function Dropdownitem(props) {
	<Dropdown>
		<Dropdown.Toggle>{props.toggle}</Dropdown.Toggle>
		<Dropdown.Menu>
			<Dropdown.Item>{props.item}</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>;
}

export default Dropdownitem;
