const Link = ({ children, href }) => {
    const anchor = '#' + href;

    return (
        <a href={anchor}>
            {children}
        </a>
    )
}

export default Link;