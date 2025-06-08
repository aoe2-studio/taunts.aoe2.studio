import { Taunts } from './taunts'

export default function Home() {
  return (
    <div className="grid place-items-center p-3 py-6">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">aoe2 taunts</h1>
        <Taunts />
      </div>
    </div>
  )
}
