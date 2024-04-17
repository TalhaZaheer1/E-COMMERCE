import { useState } from "react"
import { useParams } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import Circle from '@uiw/react-color-circle';
import { colorNameToHex, hexToColorName } from "../../utils/colorChanger";

const product = {
    title: "AXOLO LINEN SNEAKERS",
    gender: "men",
    available: true,
    colors: {
        classic: [
            "blue",
            "beige",
            "pink",
            "white",
            "grey"
        ],
        limited: [
            "yellow"
        ]
    },
    variants: [
        {
            name: "AXOLO-LINEN BAIGE",
            price: "134.00",
            color: {
                title: "blue",
                type: "classic"
            },
            images: [""],
            sizes: [
                {
                    title: 41,
                    available: true
                }
            ]
        }
    ],
    description: {
        imageSet: [
            {
                title: "Robust canvas",
                image: ""
            }
        ],
        specs: [
            {
                title: "R-CO-Recycled cotton",
                desc: "Breathable,comfortable,soft"
            }
        ],
        info: [
            {
                title: "Shipping & Return",
                subHeadings: [
                    {
                        title: "Return",
                        header: "The return is offered in Pakistan",
                        para: ""
                    },
                    {
                        title: "",
                        header: "We recommend washing by hand",
                        para: ""
                    }
                ]
            }
        ],
        detailedSpecs: [
            {
                image: "",
                title: "",
                subHeadings: [
                    {
                    header: "",
                    para: ""
                    }
                ]
            }
        ]
    },
    reviews: {
        rating: 7.8,
        all: []
    }
}

function ProductInfo(/*{product}*/) {
    const { paramColor } = useParams()
    const [selectedColor, setSelectedColor] = useState(paramColor || product.colors.classic[0])

    const variant = product.variants.find(variant => variant.color.title.toLowerCase() === selectedColor.toLocaleLowerCase()) || {}
    return (
        <article>
            <h1>{product.title}</h1>
            <h2>{selectedColor}</h2>
            <div>
                <ReactStars />
                <p>{product.reviews.all.length + " "} Reviews</p>
            </div>
            <h2>{variant.price}</h2>
            <div>
                <div>
                    <h3>Classic</h3>
                    <Circle
                        colors={product.colors.classic.map(color => colorNameToHex(color))}
                        color={colorNameToHex(selectedColor)}
                        onChange={(color) => {
                            console.log(color)
                            setSelectedColor(hexToColorName(color.hex))
                        }}
                    />
                </div>
                <div>
                    <h3>Limited</h3>
                    <Circle
                        colors={product.colors.limited.map(color => colorNameToHex(color))}
                        color={colorNameToHex(selectedColor)}
                        onChange={(color) => {
                            console.log(color)
                            setSelectedColor(hexToColorName(color.hex))
                        }}
                    />
                </div>
            </div>
            <div>
                <button>Men</button>
                <button>Women</button>
            </div>
            <div>
                <div>
                    <p>Select your size</p>
                    <p>Size guide</p>
                </div>
                {variant.sizes.map(size => (
                    <p>{size.title}</p>
                ))}
            </div>
            <div>
                {/* des img slider */}
            </div>
            <div>
                <h1>NATURAL AND RECYCLED MATERIALS</h1>
                <ol>
                    {product.description.specs.map(spec => (
                        <li>
                            <p>{spec.title}</p>
                            <p>{spec.desc}</p>
                        </li>
                    ))}
                </ol>
            </div>
            <div>
                {product.description.info.map(item => <InfoItem item={item} />)}
            </div>
            <div>
                {product.description.detailedSpecs.map(spec => (
                    <div>
                        <img src={spec.image} alt="" />
                        <h2>{spec.title}</h2>
                        {spec.subHeadings.map(sub => (
                            <div>
                                <h4>{sub.header}</h4>
                                <p>{sub.para}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </article>
    )
}

export default ProductInfo

function InfoItem({ item }) {
    const [isOpen, setIsOpen] = useState()
    return (
        <>
            <div>
                <p>{item.title}</p>
            </div>
            {isOpen && item.subHeadings.map(({title,header,para}) =>(
                <div>
                    {title && <p>{title}</p>}
                    {header && <p>{header}</p>}
                    {para && <p>{para}</p>}
                </div>
            ))}
        </>
    )
}