export const pages = {
    'Gallery': '/gallery',
    'Blog': '/blog',
    'About': '/about',
    'Careers': '/careers',
    'Contact Us': '/contact-us',
    keys() {
        return Object.keys(this).filter(k => k !== 'keys');
    }
}
