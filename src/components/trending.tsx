import Switcher from './switch'
export default function Trending() {
  return (
    <section className="mt-5">
      <div className="flex gap-5 items-center">
        <h1 className="text-[1.5rem]">Trending</h1>
        <Switcher></Switcher>
      </div>
    </section>
  )
}
