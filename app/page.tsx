import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="lg:container max-w-6xl w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 mx-auto">
        <h1 className="text-6xl font-bold">
          Hi, I'm Jhon smith
        </h1>
        <p className="pt-4 max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis explicabo ipsa quidem mollitia voluptates quam ipsum, quaerat, repellat repudiandae quia harum voluptas molestiae, aut temporibus! Impedit neque quas sequi corporis aliquam vel aut deleniti nobis corrupti provident perspiciatis enim dicta sapiente dolor, id non, voluptate doloremque. Corrupti, quos blanditiis.
        </p>
      </div>
    </main>
  )
}
