import { styled } from "@stitches/react";

export const ShoppingCartButton = styled('button', {
  width: '48px',
  height: '48px',
  backgroundColor: '$gray800',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '8px',
  position: 'relative',
  
  div: {
    position: 'absolute',
    top: -6,
    right: -6,
    padding: '2px 6px',
    border: '2px solid $gray900',
    fontSize: '0.85rem',
    borderRadius: '99999px',
    backgroundColor: '$green300'
  }
})

export const ShoppingCartModal = styled('aside', {
    variants: {
      display: {
        hidden: { marginRight: '-30%' },
        visible: { marginRight: '0px', boxShadow: '-4px 0 30px 0px black' }
      }
    },
    width: '30%',
    position: 'fixed',
    right: 0,
    top: 0,
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '$gray800',
    zIndex: 99999,
    transition: "ease-in-out 0.4s",
    padding: '40px 40px 40px 50px',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,

    svg: {
      alignSelf: 'flex-end'
    },

    h2: {
      marginTop: '20px',
      marginBottom: '30px',
      padding: '0px'
    },

    footer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      marginTop: 'auto',

      h5: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: '200',
        fontSize: '16px',
        '& span:nth-child(2)': {
          fontSize: '18px'
        }
      },


      h3: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '20px',
        '& span:nth-child(2)': {
          fontSize: '24px'
        }
      }
    }
    
  })