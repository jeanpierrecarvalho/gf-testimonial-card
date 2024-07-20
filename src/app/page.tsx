import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center mt-[200px]">
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
