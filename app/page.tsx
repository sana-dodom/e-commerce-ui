import Image from "next/image"

const Homepage = () => {
  return (
    <div className='relative aspect-3/1 mb-12'>
      <div>
        <Image src="/featured.png" alt="Featured Product" fill/>
      </div>
    </div>
  )
}

export default Homepage