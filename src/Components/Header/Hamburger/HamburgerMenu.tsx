import 'Components/Header/Hamburger/hamburger.scss';
import React, { useState, useCallback, MouseEventHandler } from 'react';
import { Table_of_contentsList } from 'Components/Header/table_of_contentsList';
import { HeaderTabProps } from 'Components/Header/headerInterface';

const HamburgerMenu: React.FC<HeaderTabProps> = ({ selectedTabIndex, setSelectedTabIndex }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        const index = parseInt(event.currentTarget.dataset.index || '0',10);
        const Table_of_contentsListItem = Table_of_contentsList[index];
        console.log(Table_of_contentsListItem.title+'がクリックされました');
        setIsOpen(!isOpen);
        setSelectedTabIndex(index);
    },[ isOpen ]);

    const toggleMenu = useCallback (() => {
        setIsOpen(!isOpen);
    },[ isOpen ]);

    return (
        <div className='hamburgerMenu'>
            {/* ハンバーガーボタン */}
            <button className={`hamburgerIcon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </button>
            
            {/* メニュー */}
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {Table_of_contentsList.map((Table_of_contentsListItem, index) => (
                        <button
                        key={ index }
                        onClick={ handleClick }
                        data-index={index}
                        className={ selectedTabIndex === index ? 'active' : '' }
                        >
                            <li key={ index }>
                                { Table_of_contentsListItem.title }
                            </li>
                        </button>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;