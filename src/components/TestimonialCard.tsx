import Image from 'next/image'
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({ subsets: ['latin'] })

type TestimonialProps = {
  image: string
  name: string
  username: string
  testimonial: string
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  image,
  name,
  username,
  testimonial,
}: TestimonialProps): JSX.Element => {
  return (
    <div
      className={`${notoSans.className} bg-white shadow-md p-6 rounded-lg w-[340px] h-[233px] text-neutral-600`}
    >
      <div className="flex flex-row gap-4">
        <div>
          <Image src={image} width={48} height={48} alt="Profile Thumbnail" />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-lg text-neutral-900">{name}</div>
          <div className="text-sm">{username}</div>
        </div>
      </div>
      <div className="mt-4 text-base">{testimonial}</div>
    </div>
  )
}

export default TestimonialCard
