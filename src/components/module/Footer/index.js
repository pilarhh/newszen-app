
export default function Footer() {
    return (
        <>
            <div className="footer d-flex justify-content-between p-5 h-100 bg-brown">
                <div className="d-flex flex-column ms-5 mt-5">
                    <p className="my-3">Why Newszen</p>
                    <p className="my-3">Be an author</p>
                    <p className="my-3">Community</p>
                    <p className="my-3">FAQ</p>
                </div>
                <div className="d-flex flex-column text-end me-5 mb-5">
                    <p className="fw-bold fs-4">Newszen</p>
                    <p className="">Jendral Sudirman Street No. 23 <br></br>
                        Jakarta, Indonesia</p>
                    <p className="">(621)989898934</p>
                    <p className="">newszen@mail.com</p>
                </div>
            </div>
        </>
    );
}