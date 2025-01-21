import { motion, AnimatePresence } from 'framer-motion';
import 'Components/main/Contents/WelcomeContents/welcomeImg.scss';
import { useState, useEffect } from 'react';

const importAllImages = (
    context: __WebpackModuleApi.RequireContext) =>
    context.keys().map(context) as string[];
const images = importAllImages(
    require.context('./WelcomeImg', false, /\.(jpeg|jpg|png|gif)$/)
);

const WelcomeImg: React.FC = () => {
    const [welcomeText, setWelcomeText] = useState('');
    const [animate, setAnimate] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const initTimeout = setTimeout(() => {
            setWelcomeText('welcome!');
            const animateTimeout = setTimeout(() => {
                setAnimate(true);
                const textChangeTimeout = setTimeout(() => {
                    setWelcomeText('MyIntroduction');
                    setTimeout(() => setIsVisible(true), 3000);
                }, 3000);

                return () => clearTimeout(textChangeTimeout);
            }, 3000);
            return () => clearTimeout(animateTimeout);
        }, 1000);

        return () => {
            clearTimeout(initTimeout);
        };
    }, []);

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);
        
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);


    return (
        <div className='welcomeImg'>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key={currentImageIndex}
                        className={`imgBlock ${isVisible ? 'visible' : ''}`}
                        initial={{scale: 1, opacity: 0.3}}
                        animate={{scale: 1.1, opacity: 1}}
                        exit={{scale: 1, opacity: 0.3}}
                        transition={{
                            duration: 1.5,
                            ease: 'easeInOut'
                        }}
                        style={{
                            backgroundImage: isVisible
                            ? `linear-gradient(
                                167deg, transparent 50%,
                                transparent 75%,
                                rgba(34, 139, 34, 0.8) 80%,
                                rgba(0, 128, 0, 1) 100%),
                                url(${images[currentImageIndex]}
                                )`
                                : 'none',
                        }}
                    />
                )}
            </AnimatePresence>
            <div className={`blindBlock ${isVisible ? 'visible' : ''}`}/>
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