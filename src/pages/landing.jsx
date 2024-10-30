import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel'
import companies from '../data/companies.json'
import Autoplay from 'embla-carousel-autoplay'
const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'> 
        <section>
        <h1 className='flex flex-col justify-center items-center gradient-title font-extrabold text-4xl sm:text-6xl tracking-tighter py-4'>
            Find Your Dream Job <span>and get Hired!</span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl justify-center text-center">
          Explore thousands of job listings or find the perfect candidate
        </p>
     
      <div className="flex gap-6 justify-center py-3">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <img src="/banner.jpeg" className="w-full" />
    </section>
    <div>
      
    </div>
    </main>
  )
}

export default LandingPage