import Image from "next/image";
import Link from "next/link";

import paymentMethods from "@/constants/paymentMethods";

const PaymentMethods = () => {
    return (
        <ul className="flex items-center gap-x-1.5">
            {paymentMethods.map((payment, index) => (
                <li key={index}>
                    <Link href="#">
                        <Image src={payment.imagePath} alt={payment.label} width={46} height={30} className="rounded-lg border color-payment-method-border" />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default PaymentMethods;