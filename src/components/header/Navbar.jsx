import React, { StrictMode } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
	return (
		<StrictMode>
			<nav className='navbar navbar-expand-sm d-flex flex-row bg-primary justify-content-center gap-3'>
				<Dropdown>
					<Dropdown.Toggle variant='primary'>
						Para Empresas e Negócios
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item>Criação de arte final</Dropdown.Item>
						<Dropdown.Item>Criação gráfica</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle variant='primary'>
						Serviços Comuns
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href='#'>
							Consulta e emissão de 1ª e 2ª via
						</Dropdown.Item>
						<Dropdown.Item>
							Transferências e back up de mídias
						</Dropdown.Item>
						<Dropdown.Item>Digitação de documentos</Dropdown.Item>
						<Dropdown.Item>
							Criar contas, cadastros e pesquisas
						</Dropdown.Item>
						<Dropdown.Item>
							Revelação de Fotos em diversos tamanhos: 2x2, 3x4,
							5x7, 10x15 e 15x20 cm
						</Dropdown.Item>
						<Dropdown.Item>Consulta de SPC e SERASA</Dropdown.Item>
						<Dropdown.Item>
							Cópia, gravação e impressão em CD e DVD
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle variant='primary'>
						Copiadora
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>Ampliação e Redução</Dropdown.Item>
						<Dropdown.Item>Digitalização</Dropdown.Item>
						<Dropdown.Item>Encadernação</Dropdown.Item>
						<Dropdown.Item>Plastificação</Dropdown.Item>
						<Dropdown.Item>Carimbos</Dropdown.Item>
						<Dropdown.Item>Personalização de CD/DVD</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle variant='primary'>Gráfica</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>
							Cardápios, Catálogos e Tabelas
						</Dropdown.Item>
						<Dropdown.Item>Cartazes</Dropdown.Item>
						<Dropdown.Item>
							Sacolas personalizadas em Papel
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle variant='primary'>
						Comunicação Visual
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>
							Rótulos, Etiquetas e Adesivos
						</Dropdown.Item>
						<Dropdown.Item>Placas PVC, PS, Acrílico</Dropdown.Item>
						<Dropdown.Item>Brindes Personalizados</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</nav>
		</StrictMode>
	);
}

export default Navbar;
