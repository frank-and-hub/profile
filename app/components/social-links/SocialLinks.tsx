import { SocialInterface } from '@/app/api/interfaces/social';
import { useAppSelector } from '@/app/lib/store/hooks';
import Link from 'next/link';

type SocialLinksProps = {
    color?: boolean;
};

export default function SocialLinks({ color = true }: SocialLinksProps) {
    const socialData = useAppSelector((state) => state.socials);
    const socialLinks: SocialInterface[] =
        socialData && socialData?.list.length > 1 ? socialData?.list : [];

    return (
        <div className={`row py-3 mb-3 justify-content-center`}>
            <div className={`col-12 col-md-${color ? '9' : '3'} d-flex justify-content-around mx-auto`}>
                {socialLinks.map((data: SocialInterface, i: number) => (
                    <div key={i} className="p-0">
                        <Link
                            href={data.href}
                            className={`${color ? 'color' : 'text-white'} fs-3`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <data.icon size={30} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
