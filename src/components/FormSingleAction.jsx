

function FormSingleAction({id, formClassName=null, inputClassName=null}) {

    return (
        <form id={id} method="post" className={formClassName ? formClassName : undefined}>
            <input className={`${id} ${inputClassName}`} type="submit" value="" />
        </form>
    );

}

export default FormSingleAction;