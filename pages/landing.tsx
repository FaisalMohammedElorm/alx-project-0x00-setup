import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* Reusable Cards */}
      <Card />
      <Card />

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
          <Button title="Medium Rounded-md" styles="text-base rounded-md" />
          <Button title="Large Rounded-full" styles="text-lg rounded-full px-6 py-3" />
        </div>
      </div>
    </div>
  )
}

export default Landing;
