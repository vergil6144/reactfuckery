import ReactMarkdown from 'react-markdown'


export default function rs(props){
  return (
    <section className="airec">
        {/* {props.recipe} */}
        <ReactMarkdown>{props.recipe}</ReactMarkdown>

    </section>
)
}