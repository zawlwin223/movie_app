import { ModeToggle } from '@/components/modeTogeller'
import { Input } from '@/components/ui/input'
import { SelectDemo } from '@/components/select'
export default function Navigation() {
  return (
    <nav className="py-4 flex justify-between items-center">
      <h1 className="text-gradient font-bold text-[3rem]">Movie Site</h1>
      <div className="flex gap-5 items-center">
        <Input
          type="text"
          className="ps-3 py-2"
          placeholder="Search For Movie"
        />
        <SelectDemo></SelectDemo>
        <SelectDemo></SelectDemo>

        <a href="">WatchList</a>
      </div>
      <div className="flex gap-5">
        <button>SignIn</button>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  )
}
