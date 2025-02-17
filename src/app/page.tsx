import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Navbar active="Home"/>

      <main className="">
        <h1 className="text-8xl font-bold">TEXTO</h1>
        <p className="text-center mb-6">Subtexto</p>
      </main>

      <button className="p-2 pl-5 pr-5 mt-4 text-white bg-red-500 rounded-md font-bold">Botón</button>
    </div>
  );
}
