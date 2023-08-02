import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';

const Carousels = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 } as any));

    return (
        <>
            <div>
                <Carousel
                    slideSize="40%"
                    height={500}
                    align="start"
                    slideGap="sm"
                    controlSize={35}
                    loop
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}
                >
                    <Carousel.Slide>
                        <Image
                            src="/Images/事例紹介カード01.png"
                            objectFit="cover"
                            alt=""
                            width={300}
                            height={499}
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src="/Images/事例紹介カード02.png"
                            objectFit="cover"
                            alt=""
                            width={300}
                            height={499}
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src="/Images/事例紹介カード03.png"
                            objectFit="cover"
                            alt=""
                            width={300}
                            height={499}
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                            src="/Images/事例紹介カード01.png"
                            objectFit="cover"
                            alt=""
                            width={300}
                            height={499}
                        />
                    </Carousel.Slide>
                </Carousel>
            </div>
        </>
    );
};

export default Carousels;
