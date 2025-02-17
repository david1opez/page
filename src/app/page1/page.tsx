import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

export default function Page1() {
    return (
        <div className="flex flex-col items-center justify-center items-center min-h-screen py-2">
            <Navbar active="Page1"/>

            <h1 className="text-4xl font-bold">PRODUCTOS</h1>

            <Product justify="start"/>
            <Product justify="end"/>
            <Product justify="start"/>
        </div>
    );
};
