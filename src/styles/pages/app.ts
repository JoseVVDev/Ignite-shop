import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100vh',
  })
  
  export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 'calc(100vw - 19%)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  })

  export const Cart = styled('button', {
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