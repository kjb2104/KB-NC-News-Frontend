import {useEffect, useState} from "react"
import  { getTopics } from "../utils/api";


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
                <h1>{topic.slug}</h1>
                <p>{topic.description}</p>
                </li>
        ))}
    </ol>
)
}

export default Topics