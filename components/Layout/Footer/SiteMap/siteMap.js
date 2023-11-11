import Link from "next/link";
import siteMapLinks from "@/constants/siteMaps";

const SiteMap = () => {
    const mappedData = [];

    for (const category in siteMapLinks) {
        if (siteMapLinks.hasOwnProperty(category)) {
            const links = siteMapLinks[category];
            const mappedLinks = links.map(link => {
                return {
                    ...link,
                };
            });

            mappedData.push({
                category,
                links: mappedLinks,
            });
        }
    }

    return (
        <div className="flex justify-between flex-wrap">
            {mappedData.map(categoryData => (
                <div key={categoryData.category} className="text-sm md:text-base w-1/2 md:w-1/4 mt-6 md:mt-0">
                    <h3 className="font-satoshi-medium tracking-wide text-black">{categoryData.category}</h3>
                    <ul className="mt-4">
                        {categoryData.links.map((link, index) => (
                            <li key={index} className="my-2">
                                <Link href={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default SiteMap;