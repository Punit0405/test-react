import styles from "./Layout.module.css";
import Gallery from "react-photo-gallery";


interface Props {
    children: JSX.Element;
}
const data = [
    { src: "../../images15.jpg", height: 0, width: 0 }, { src: "../../sample2.jpg", height: 0, width: 0 }, { src: "../../images11.jpg", height: 0, width: 0 }, { src: "../../images12.jpg", height: 0, width: 0 },
    { src: "../../images13.jpg", height: 0, width: 0 }, { src: "../../images14.jpg", height: 0, width: 0 },
];
const newData = [
    {
        "src": "../../images15.jpg",
        "height": 3744,
        "width": 3744
    },
    {
        "src": "../../sample2.jpg",
        "height": 2251,
        "width": 1500
    },
    {
        "src": "../../images11.jpg",
        "height": 2988,
        "width": 5312
    },
    {
        "src": "../../images12.jpg",
        "height": 3024,
        "width": 4032
    },
    {
        "src": "../../images13.jpg",
        "height": 4032,
        "width": 3024
    },
    {
        "src": "../../images15.jpg",
        "height": 3744,
        "width": 3744
    },
    {
        "src": "../../sample2.jpg",
        "height": 2251,
        "width": 1500
    },
    {
        "src": "../../images15.jpg",
        "height": 3744,
        "width": 3744
    },
    {
        "src": "../../sample2.jpg",
        "height": 2251,
        "width": 1500
    },
    {
        "src": "../../images14.jpg",
        "height": 3787,
        "width": 2525
    },
    {
        "src": "../../images13.jpg",
        "height": 4032,
        "width": 3024
    },
    {
        "src": "../../images14.jpg",
        "height": 3787,
        "width": 2525
    },
    {
        "src": "../../images13.jpg",
        "height": 4032,
        "width": 3024
    },
    {
        "src": "../../images14.jpg",
        "height": 3787,
        "width": 2525
    },
    {
        "src": "../../images15.jpg",
        "height": 3744,
        "width": 3744
    },
    {
        "src": "../../sample2.jpg",
        "height": 2251,
        "width": 1500
    },
    {
        "src": "../../images11.jpg",
        "height": 2988,
        "width": 5312
    },
    {
        "src": "../../images12.jpg",
        "height": 3024,
        "width": 4032
    },
    {
        "src": "../../images13.jpg",
        "height": 4032,
        "width": 3024
    },
    {
        "src": "../../images15.jpg",
        "height": 3744,
        "width": 3744
    },
    {
        "src": "../../sample2.jpg",
        "height": 2251,
        "width": 1500
    },
    {
        "src": "../../images15.jpg",
        "height": 3744,
        "width": 3744
    }
]


const GridVerticalMobile = () => {
    return (
        <div className={styles.maincomp}>
            <Gallery photos={newData} columns={2} direction="column" />
            <Gallery photos={newData} />
        </div>
    );
};

export default GridVerticalMobile;
