import { Handbag, X } from "phosphor-react";
import { ShoppingCartButton, ShoppingCartModal } from "./styles";
import { useState } from "react";
import { CartProduct } from "../CartProduct";

export default function ShoppingCart() {
    const [isDisplayed, setIsDisplayed] = useState(false)
    return (
        <>
            <ShoppingCartButton onClick={() => setIsDisplayed(true)}>
                <Handbag size={24} />
                <div>1</div>
            </ShoppingCartButton>
            <ShoppingCartModal display={isDisplayed ? "visible" : "hidden"}>
                <X onClick={() => setIsDisplayed(false)} size={32} />
                <h2>Sacola de Compras</h2>
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <footer>
                    <h5>
                        <span>Quantidade</span>
                        <span>3 itens</span>
                    </h5>
                    <h3>
                        <span>Valor Total</span>
                        <span>R$ 270,00</span>
                    </h3>
                </footer>
                <button>
                    ola amigo
                </button>
            </ShoppingCartModal>
        </>
    )
}