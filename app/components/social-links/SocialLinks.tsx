import { SocialInterface } from '@/app/api/interfaces/social';
import { useAppSelector } from '@/app/lib/store/hooks';
import Link from 'next/link';

type SocialLinksProps = {
    color?: boolean;
};

export default function SocialLinks({ color = true }: SocialLinksProps) {
    const socialData = useAppSelector((state) => state.socials);
    const socialLinks: SocialInterface[] = socialData && socialData?.list.length > 1 ? socialData?.list : [];

    return (
        <>
            <div className="social-icon row py-3 justify-around mb-3">
                {socialLinks.map((data: SocialInterface, i: number) => (
                    <div key={i} className='p-0'>
                        <Link
                            href={data.href}
                            className={`${color ? 'color' : 'text-white'} text-2xl`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <data.icon size={30} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
