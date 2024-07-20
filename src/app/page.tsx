import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-start px-[17.5px] pt-[200px] h-screen md:min-h-[1024px] lg:min-h-[768px]">
        <TestimonialCard
          image={'/thumbnail.png'}
          name={'Sarah Dole'}
          username={'@sarahdole'}
          testimonial={`I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`}
        />
      </div>
    </>
  )
}
