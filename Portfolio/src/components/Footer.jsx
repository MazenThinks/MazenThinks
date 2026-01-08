import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-600">
            <div className="container-custom py-16">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                    <p className="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-wider transition-colors duration-600">
                        © {currentYear}
                    </p>
                    <div className="flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-xs text-neutral-400 dark:text-neutral-600 hover:text-neutral-950 dark:hover:text-white transition-colors uppercase tracking-wider"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
