import Carousel from './Carousel.js';


const AboutMeSection = ({title, paragraphs, items, endingNote}) => {
    return (
        <div>
            <h2 className='text-left font-extrabold text-xl py-unit-lg'>{title}</h2>
            {paragraphs.map((item, index) => (
                <p key={index} className='py-unit-2 font-normal text-medium text-justify indent-5'>{item}</p>
            ))}
            <ui className='font-light text-medium text-indent list-none indent-5'>
                <li className='py-unit-sm text-justify'>
                    {endingNote}
                </li>
            </ui>
            <div className='carousel-container'>
                <Carousel items={items} is_navigation={true} delay={5000} />
            </div>
        </div>
    );
}

export default AboutMeSection;