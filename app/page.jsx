'use client'
import Image from "next/image";
import image2 from "../public/images/image2.jpg"

const cargador = ({ src, width }) => {
    return `http://photos.discount-merchant.com/photos/sku/${src}?w=${width}`
}

export default function page() {
    return (
        <>
            <div>
                Pagina principal
            </div>
            <div className="caja">
                <Image
                    src="/images/image1.jpg"
                    width={400}
                    height={400} />
            </div>
            <div className="caja">
                <Image src={image2}
                    width={400}
                    height={400} />
            </div>
            <div className="caja">
                <Image loader={cargador} src="101002/101002-1.jpg"
                    width={600}
                    height={600} />
            </div>
        </>

    )
}
