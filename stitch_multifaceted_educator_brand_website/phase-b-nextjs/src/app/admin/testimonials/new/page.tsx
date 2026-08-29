import { TestimonialForm } from '../TestimonialForm'

export default function NewTestimonialPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Add New Testimonial</h2>
      </div>
      <TestimonialForm />
    </div>
  )
}
