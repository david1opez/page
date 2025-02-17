import Image from 'next/image';

export default function Product({ justify }: { justify: string }) {
    return (
        <div className={`flex flex-row items-center w-full justify-${justify} pr-20 pl-20`}>
            <Image
                src="https://handletheheat.com/wp-content/uploads/2017/03/chewy-brownies-SQUARE.jpg"
                alt="product"
                width={150}
                height={20}
            />
            <p className="text-base ml-4 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor, nunc nec ultricies ultricies, nunc nunc ultricies ultricies,
                nunc nunc ultricies ultricies, nunc nunc ultricies ultricies, nunc
                nunc ultricies ultricies, nunc nunc ultricies ultricies, nunc nunc
            </p>
        </div>
    );
};
