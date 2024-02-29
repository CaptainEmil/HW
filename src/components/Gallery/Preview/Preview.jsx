import Div from '../../Div/Div';
import Link from '../../Link/Link';
import ListItem from '../../List/ListItem/ListItem';
import Img from '../../Img/Img';

const Preview = ({ href, imgSrc, imgAlt }) => {
    return (
        <ListItem>
            <Div>
                <Link href={href}>
                    <Img src={imgSrc} alt={imgAlt} />
                </Link>
            </Div>
        </ListItem>
    )
}

export default Preview;