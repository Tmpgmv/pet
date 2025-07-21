function CardAction({id, className=null}) {
  return (
    <form id={id} method="post" className={className ? className : undefined}>
      <input className={`${id} ps-3 pe-3`} type="submit" value="" />
    </form>
  );
}

export default CardAction;
