import { SearchInput } from '@/features/search/components'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { ProductCard } from '@/features/products/components'
import { useProductsContexts } from '@/contexts/productContext'
import { FiltersWrapper } from '@/features/filters/components'
import Image from '@/features/core/components/image'
import Divider from '@/features/core/components/divider'
const Home: React.FC = () => {
  const { products } = useProductsContexts()
  return (
    <>
      <main className="w-full flex flex-col items-center min-h-[1000px]">
        <section className="w-full flex flex-col items-center justify-center h-[164px] header-custom-gradient">
          <div className="w-full flex justify-between items-center max-w-[1310px] h-[85px]">
            {/* <Image src={logo} alt="logo-image" /> */}
            <Image
              src="/logo.png"
              width={124}
              height={32}
              isPublicImage={true}
              alt="logo"
            />
            <SearchInput />
          </div>
          <div className="w-full flex justify-center h-[79px] bg-gray-150">
            <div className="w-full flex max-w-[1310px] gap-[24px]">
              <section className="w-full flex items-center max-w-[280px] text-[#585858]">
                <span className="flex items-center gap-x-2">
                  <HomeIcon width={20} height={20} />
                  <ChevronRightIcon width={20} height={20} />
                  <p className="text-sm text-bold">Todos os produtos</p>
                </span>
              </section>
              <section className="w-full flex items-center justify-between w-full text-[#585858]">
                <p className="font-bold text-xl">Produtos mais buscados</p>
                <span>
                  <p>Produtos ordenados por:</p>
                </span>
              </section>
            </div>
          </div>
        </section>
        <div className="w-full flex gap-[24px] max-w-[1310px] pb-[30px]">
          <section className="w-full max-w-[280px]">
            <FiltersWrapper />
          </section>
          <section className="w-full flex flex-wrap gap-x-[20.45px] gap-y-[20px] min-h-[1000px]">
            {!!products &&
              products.map((i) => {
                return (
                  <ProductCard
                    key={i.id}
                    src={i.image.url}
                    name={i.name}
                    price={249.9}
                  />
                )
              })}
          </section>
        </div>
        <footer className="w-full flex justify-center bg-white pb-[110px]">
          <div className="w-full flex flex-col max-w-[1310px] text-[#585858]">
            <section className="flex flex-col pt-[40px] ">
              <a href="#" className="font-bold h-[40px]">
                Atendimento
              </a>
              <a href="#" className="h-[40px]">
                Central de atendimento
              </a>
              <a href="#" className="h-[40px]">
                Políticas de privacidade
              </a>
            </section>
            <Divider />
            <section className="w-full mt-[30px]">
              <div className="w-full flex justify-between">
                <div className="flex flex-col gap-[8px]">
                  <p className="h-[40px]">Formas de pagamento</p>
                  <span className="flex gap-[8px]">
                    <Image
                      src="/mc.svg"
                      isPublicImage={true}
                      width={48}
                      height={32}
                      alt="card"
                    />
                    <Image
                      src="/visa.svg"
                      isPublicImage={true}
                      width={48}
                      height={32}
                      alt="card"
                    />
                    <Image
                      src="/american-express.svg"
                      isPublicImage={true}
                      width={48}
                      height={32}
                      alt="card"
                    />

                    <Image
                      src="/diners-club.svg"
                      isPublicImage={true}
                      width={48}
                      height={32}
                      alt="card"
                    />

                    <Image
                      src="/hipercard.svg"
                      isPublicImage={true}
                      width={76}
                      height={32}
                      alt="card"
                    />
                    <Image
                      src="/elo.svg"
                      isPublicImage={true}
                      width={68}
                      height={32}
                      alt="card"
                    />
                    <Image
                      src="/barcode.svg"
                      isPublicImage={true}
                      width={68}
                      height={32}
                      alt="card"
                    />
                    <Image
                      src="/pix.svg"
                      isPublicImage={true}
                      width={68}
                      height={24}
                      alt="card"
                    />
                  </span>
                </div>
                <Image
                  src="/google-safe-browsing-status.png"
                  alt="google-safe-status"
                  width={194}
                  isPublicImage={true}
                  height={56}
                />
              </div>
            </section>
          </div>
        </footer>
      </main>
    </>
  )
}

export default Home
