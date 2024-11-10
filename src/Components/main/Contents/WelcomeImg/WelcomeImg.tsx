import 'Components/main/Contents/WelcomeImg/welcomeImg.scss';
import { useState, useEffect } from 'react';

const WelcomeImg: React.FC = () => {
    const [welcomeText, setWelcomeText] = useState<string>('');
    const [animate, setAnimate] = useState<boolean>(false);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const timeoutId1 = setTimeout(() => {
            setWelcomeText('welcome!');
        
            const timeoutId2 = setTimeout(() => {
                setAnimate(true);
                setTimeout(() => {
                    setWelcomeText('MyIntroduction');
                    const timeoutId3 = setTimeout(() => {
                        setShowOverlay(true);
                        setIsVisible(true);
                    }, 3000);

                    return () => clearTimeout(timeoutId3);
                }, 3000);
            }, 3000);
            
            return () => clearTimeout(timeoutId2);
        }, 1000);

        return () => clearTimeout(timeoutId1);
    }, []);

    return (
        <div className={`welcomeImg ${isVisible ? 'visible' : ''}`}>
            <div className='welcomeBackground'/>
            {welcomeText === 'welcome!' ? (
                <p className={`welcomeText ${animate ? 'slideOut' : ''}`}>
                    {welcomeText}
                </p>
            ) : (
                <p className='welcomeTextChange'>
                    {welcomeText}
                </p>
            )}
        </div>
    );
};

export default WelcomeImg;