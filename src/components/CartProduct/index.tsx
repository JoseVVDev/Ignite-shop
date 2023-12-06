import { CartProductContainer, CartProductDescription, CartProductImg } from "./styles";
import prodImage from '../../assets/Shirt/1.png'
import Image from "next/image"

export function CartProduct() {
    return (
        <CartProductContainer>
            <CartProductImg>
                <Image src={prodImage} width={100} height={94} alt=""/>
            </CartProductImg>
            <CartProductDescription>
                <h3>Camista Beyond Limits</h3>
                <strong>R$ 98,90</strong>
                <span>Remover</span>
            </CartProductDescription>

        </CartProductContainer>
    )
}