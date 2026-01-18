import { assets } from "../assets/assets";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: 'John Doe',
      title: 'Marketing Director, TechCorp',
      content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
      rating: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: 'Jane Smith',
      title: 'Content Creator, TechCorp',
      content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
      rating: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: 'David Lee',
      title: 'Content Writer, TechCorp',
      content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
      rating: 4,
    },
  ]

  return (
    <div className='px-4 sm:px-10 md:px-20 xl:px-32 py-16 sm:py-24'>
      
      {/* Heading */}
      <div className='text-center'>
        <h2 className='text-slate-700 text-2xl sm:text-3xl md:text-[42px] font-semibold'>
          Loved by Creators
        </h2>
        <p className='text-gray-500 text-sm sm:text-base max-w-sm sm:max-w-lg mx-auto mt-2'>
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>

      {/* Cards */}
      <div className='flex flex-wrap mt-8 sm:mt-10 justify-center gap-4 sm:gap-6'>
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className='p-6 sm:p-8 max-w-sm w-full rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'
          >
            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array(5).fill(0).map((_, i) => (
                <img
                  key={i}
                  src={i < testimonial.rating ? assets.star_icon : assets.star_dull_icon}
                  className="w-3.5 sm:w-4 h-3.5 sm:h-4"
                  alt="star"
                />
              ))}
            </div>

            {/* Content */}
            <p className='text-gray-500 text-xs sm:text-sm my-4 sm:my-5 leading-relaxed'>
              "{testimonial.content}"
            </p>

            <hr className='mb-4 sm:mb-5 border-gray-300' />

            {/* User */}
            <div className='flex items-center gap-3 sm:gap-4'>
              <img
                src={testimonial.image}
                className='w-10 sm:w-12 object-contain rounded-full'
                alt=''
              />
              <div className='text-xs sm:text-sm text-gray-600'>
                <h3 className='font-medium'>{testimonial.name}</h3>
                <p className='text-gray-500 text-[11px] sm:text-xs'>
                  {testimonial.title}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Testimonial;
