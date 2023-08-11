import Image from '@/features/core/components/image'

interface IProductCard {
  src: string
  name: string
  price: number
}
export const ProductCard = (props: IProductCard) => {
  return (
    <main className="w-full h-[319px] max-w-[235.91px] flex flex-col items-center justify-center gap-[30px] bg-white fill-white stroke-[#E0E0E0] rounded-md ">
      <div className="min-h-[176px]">
        <Image
          isPublicImage={false}
          src={props.src}
          width={184}
          height={177}
          alt="product-image"
        />
      </div>
      <div className="w-full pl-[17px] pr-[17px] flex flex-col gap-y-[3px]">
        <p className="font-medium ">
          R$ {props.price.toFixed(2).replace('.', ',')}
        </p>
        <p className="text-[#8B96A5]">{props.name}</p>
      </div>
    </main>
  )
}

export default ProductCard
