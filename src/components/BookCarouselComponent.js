import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import { FEATUREDBOOKS } from '../shared/featuredbooks';

const FeaturedBooksCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === FEATUREDBOOKS.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? FEATUREDBOOKS.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = FEATUREDBOOKS.map((item) => {
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.id}
        >
            <div class="ccontainer">
                <div class="row">
                    <div class="col-sm-4 col-6 mx-auto">
                        <div class="card mb-2">
                            <div class="card-img-crop-height">
                                <img class="scale card-img-top" src={item.image_a} alt={item.title_a} />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">{item.title_a}<br /><small>by {item.author_a}<br />{item.category_a}</small></h3>
                                <p class="card-text">{item.description_a}</p>
                                <a href="#" class="btn btn-inktank-carousel text-white">Read on</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-6 clearfix d-block">
                        <div class="card mb-2">
                            <div class="card-img-crop-height">
                                <img class="scale card-img-top" src={item.image_b} alt={item.title_b} />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">{item.title_b}<br /><small>by {item.author_b}<br />{item.category_b}</small></h3>
                                <p class="card-text">{item.description_b}</p>
                                <a href="#" class="btn btn-inktank-carousel text-white">Read on</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 clearfix d-none d-sm-block">
                        <div class="card mb-2">
                            <div class="card-img-crop-height">
                                <img class="scale card-img-top" src={item.image_c} alt={item.title_c} />
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">{item.title_c}<br /><small>{item.author_c}<br />{item.category_c}</small></h3>
                                <p class="card-text">{item.description_c}</p>
                                <a href="#" class="btn btn-inktank-carousel text-white">Read on</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CarouselItem>
        
        );
    });

    return (
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default FeaturedBooksCarousel;