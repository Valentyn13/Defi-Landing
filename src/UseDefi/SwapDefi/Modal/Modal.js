import "./Modal.css"
const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? 'modal modal-active' : 'modal'}>
        <div className={active ? 'modal-content modal-content-active' : 'modal-content'} onClick={()=>setActive(false)}>
            {children}
        </div>
    </div>
  )
}

export default Modal