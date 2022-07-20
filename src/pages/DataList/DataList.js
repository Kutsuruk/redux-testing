import React, {useEffect} from "react";
import {PageAnimation} from "../../components";
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {postsActions} from "../../store/posts/actions";

export const DataList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postReducer.post)
    const loading = useSelector(state => state.postReducer.loading)

    // useEffect(() => {
    //     dispatch(postsActions.fetchPosts())
    // })

    return(
        <>

            <PageAnimation>
                <div className="dataList">
                    {posts.map((post, index) => <div
                        key={index}
                        className={
                            `block ${(index % 2 === 0) ?
                                'blockRight' :
                                'blockLeft'}`
                        }>
                        <span>{post.title}</span>
                    </div>)}
                </div>
            </PageAnimation>
            {loading && <div>Loading...</div>}
        </>
    )
}