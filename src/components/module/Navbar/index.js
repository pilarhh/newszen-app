import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../Button";

export default function Navbar() {
    const router = useRouter();

    return (
        <>
            <div className='navbar d-flex justify-content-around p-3 pb-4 bg-brown'>
                <div>
                    <span className='fs-4 fw-bolder'>Newszen</span>
                </div>
                <div className='d-flex justify-content-around'>
                    <Link href="/" passHref><span className='pointer'>Home</span></Link>
                    <Link href="/main/articles" passHref><span className='pointer mx-5'>Articles</span></Link>
                    <Link href="/" passHref><span className='pointer'>Category</span></Link>
                    <Link href="/" passHref><span className='pointer ms-5'>About</span></Link>
                </div>
                <div className="">
                    <Button className='btn p-2 w-10'>Sign up</Button>
                    <Button className='btn-orange p-2 rounded-3 w-10'>Login</Button>
                </div>
            </div>
        </>
    );
}