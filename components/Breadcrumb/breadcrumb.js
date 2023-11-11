import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";

import { BREADCRUMB_SEPARATOR_ICON } from "@/constants/imagePaths";

const Breadcrumb = () => {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter((segment) => segment !== '');

    return (
        <nav>
            <ul className="capitalize flex items-center gap-1 text-base">
                <li>
                    <Link href="/" className="text-black/[0.40]">Home</Link>
                </li>
                {pathSegments.map((segment, index) => (
                    <li key={segment} className="flex items-center gap-1">
                        <span>
                            <Image src={BREADCRUMB_SEPARATOR_ICON} width={16} height={16} alt="" />
                        </span>
                        <span>{segment}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;