import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-bi/hurricane'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> Buscador de Eventos Peligrosos</h1>
        </header>
    )
}

export default Header
