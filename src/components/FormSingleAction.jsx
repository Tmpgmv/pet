

function FormSingleAction({id, formClassName=null, inputClassName=null, onSubmit=null}) {
    
    return (
        <form id={id} method="post" className={formClassName ?? undefined} onSubmit={onSubmit ?? undefined}>
            <input className={`${id} ${inputClassName}`} type="submit" value="" />
        </form>
    );

}

export default FormSingleAction;