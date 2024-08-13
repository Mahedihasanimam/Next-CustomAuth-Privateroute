import { useRouter } from 'next/navigation';
const Navigate = ({ path }) => {
    const router = useRouter();

    useEffect(() => {
        router.push(path);
    }, [path, router]);

    
};

export default Navigate;
