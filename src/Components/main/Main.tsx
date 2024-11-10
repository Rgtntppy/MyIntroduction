import 'Components/main/main.scss';
import WelcomeImg from 'Components/main/Contents/WelcomeImg/WelcomeImg';

const Main = () => {
    return (
        <>
        <WelcomeImg/>
        <section id='section1' className='section-wrapper'>
            <div className='bg-image-fixed'></div>
            <div className='section-body'>
                <h2>section 1</h2>
            </div>
        </section>

        <section id='section2' className='section-wrapper'>
            <div className='bg-image-fixed'></div>
            <div className='section-body'>
                <h2>section 2</h2>
            </div>
        </section>

        <section id='section3' className='section-wrapper'>
            <div className='bg-image-fixed'></div>
            <div className='section-body'>
                <h2>section 3</h2>
            </div>
        </section>
        </>
    );
}

export default Main;