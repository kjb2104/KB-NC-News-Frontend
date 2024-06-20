import {useEffect, useState} from "react"
import  { getTopics } from "../utils/api"
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom"


const Topics = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [topics, setTopics] = useState([])
 

useEffect(() => {
    setIsLoading(true)
    getTopics().then(({topics}) => {
        setTopics(topics)
        setIsLoading(false)
}) }, [])


if(isLoading){
    return <p className="Loading">Loading...</p>
}

return (
    <ol className="Topic_list">
        {topics.map((topic) => (
            <li key={topic.slug}>
                <Link to={`/articles?topic=${topic.slug}`}><p>{topic.slug}</p></Link>
                <p>{topic.description}</p>
                </li>
        ))}
    </ol>
)
}

export default Topics