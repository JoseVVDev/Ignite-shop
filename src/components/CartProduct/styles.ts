import { styled } from "@stitches/react";

export const CartProductContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    height: '94px',
    gap: 20
})

export const CartProductImg = styled('div', {
    width: '100px',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '8px'
})

export const CartProductDescription = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    lineHeight: '160%',
    fontSize: '18px',

    h3: {
        fontWeight: '200',
    },

    strong: {
        fontWeight: '600',
    },

    span: {
        color: '$green500',
        fontSize: '16px',
        fontWeight: '600',
    }
})