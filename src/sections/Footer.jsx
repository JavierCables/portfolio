import { mySocials } from "../constants";

const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
            <div className="mb-1 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
            <p></p>
            <div className="flex gap-3 mb-2">
                {mySocials.map((social, index) => (
                    <a href={ social.href } key={ index }  >
                        <img src={ social.icon } className="w-5 h-5" alt={ social.name } />
                    </a>
                ))}
            </div>
            <p></p>
        </section>
    );
};

export default Footer;