import 'Components/Header/header.scss';
import { useState } from 'react';
import HamburgerMenu from 'Components/Header/Hamburger/HamburgerMenu';

const Header = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

    return (
        <div className='header'>
            <h1 className='title'>MyIntroduction</h1>
            <HamburgerMenu selectedTabIndex={selectedTabIndex} setSelectedTabIndex={setSelectedTabIndex} />
        </div>
    );
};

export default Header;