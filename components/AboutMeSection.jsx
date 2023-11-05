import Carousel from './Carousel.js';


const AboutMeSection = ({title, paragraphs, items, endingNote}) => {
    return (
        <div>
            <h2 className='text-left font-extrabold py-unit-lg'>{title}</h2>
            {paragraphs.map((item, index) => (
                <p key={index} className='text-medium text-justify '>{item}</p>
            ))}
            <div className='carousel-container'>
                <Carousel items={items} is_navigation={true} delay={5000} />
            </div>
            <ui className='font-light text-success-foreground text-medium text-indent list-none indent-5'>
                <li className='py-unit-sm'>
                    {endingNote}
                </li>
            </ui>
        </div>
    );
}

export default AboutMeSection;