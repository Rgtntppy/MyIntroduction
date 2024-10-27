import 'Components/main/Contents/WelcomeImg/welcomeImg.scss';
import { useState, useEffect } from 'react';

const WelcomeImg: React.FC = () => {
    const [welcomeText, setWelcomeText] = useState<string>('');
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        const timeoutId1 = setTimeout(() => {
            setWelcomeText('welcome!');
        
            const timeoutId2 = setTimeout(() => {
                setAnimate(true);
                setTimeout(() => {
                    setWelcomeText('MyIntroduction');
                }, 3000);
            }, 3000);
            
            return () => clearTimeout(timeoutId2);
        }, 1000);

        return () => clearTimeout(timeoutId1);
    }, []);

    return (
        <div className='welcomeImg'>
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