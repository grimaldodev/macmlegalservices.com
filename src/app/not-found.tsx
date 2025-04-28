import Link from 'next/link';

const NoFound: React.FC = () => {
    return (
        <div className="w-full h-[50vh] flex justify-center items-center text-xl md:text-4xl">
            Not found{' '}
            <Link href={'/'} className="text-primary ml-5">
                Go back
            </Link>
        </div>
    );
};

export default NoFound;
