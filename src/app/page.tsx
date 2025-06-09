import { Taunts } from './taunts'

export default function Home() {
  return (
    <div className="grid place-items-center p-3 py-6">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold font-serif tracking-wide">
          Age of Empires II Taunts
        </h1>
        <Taunts />
      </div>
    </div>
  )
}
