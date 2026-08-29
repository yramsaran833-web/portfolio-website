import { AwardForm } from '../AwardForm'

export default function NewAwardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Add New Award</h2>
      </div>
      <AwardForm />
    </div>
  )
}
