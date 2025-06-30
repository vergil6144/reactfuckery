export default function die(props){
    const value = props.value
    return (
        <button className={props.held?"held":"notheld"} onClick={()=>props.hold(props.id)}>{value}</button>
    )
}