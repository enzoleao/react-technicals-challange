import Search from '@/features/search/components'

const Home: React.FC = () => {
  return (
    <>
      <main className="w-full">
        <header className="w-full flex justify-center h-[5.13rem] header-custom-gradient">
          <div className="w-full flex justify-between items-center max-w-7xl">
            a
            <Search />
          </div>
        </header>
      </main>
    </>
  )
}

export default Home
