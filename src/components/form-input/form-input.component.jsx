import "./form-input.styles.scss"

const FormInput = ({label , ...otherprops}) =>{
   


    return (
        <div className="group">
        <input
         className="form-input"
          {...otherprops}
        />
        <label className={`${otherprops.value.length ? 'shrink' : null}  form-input-label `} >{label}</label>
        </div>
    )
}


export default FormInput ;