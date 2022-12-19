import { useEffect, useState } from "react";
import styled from "styled-components";
import withBoundary from "../../Core/hoc/withBoundary";
import { Metric } from "../../SDK/@types";
import MetricService from "../../SDK/services/Metric.service";
import CircleChart from "../Components/CircleChart";

function UserTopTags(){

    const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

    const [error, setError] = useState<Error>()


    useEffect(()=> {
        MetricService
        .getTop3Tags()
        .then(setTopTags)
        .catch(error => setError(new Error(error.message)))
    }, [])

    if(error)
    throw error

    return <UserTopTagsWrapper>

        {
            topTags.map((tag, i) => {
                return <CircleChart 
                key={i}
                progress={tag.percentage}
                caption={tag.tagName}
                theme={i === 0 ?'primary': 'default' }
                size={88}
                />
            })
        }

        {/* <CircleChart progress={80}  size={88} caption={'JavaScript'} theme="primary" />
        <CircleChart progress={30}  size={88} caption={'Java'} />
        <CircleChart progress={24}  size={88} caption={'Scrum'} /> */}

    </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px;
`

export default withBoundary(UserTopTags, 'User Top Tags')