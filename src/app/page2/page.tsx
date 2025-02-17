import Navbar from "@/components/Navbar";

export default function Page1() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Navbar active="Page2"/>

            <h1 className="text-4xl font-bold">En Construcción</h1>
        </div>
    );
};
