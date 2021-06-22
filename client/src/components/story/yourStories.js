import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import './yourStories.css'


function YourStories() {


    const [stories, setStories] = useState([])
    const [pageNumber, SetPageNumber] = useState(0)


    useEffect(()=>{
        axios.get('/user/profile/mystories')
        .then((res)=>{
            setStories(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    
    const storiesPerPage = 5
    const pagesVisited = pageNumber * storiesPerPage

    const displayStories = stories.slice(pagesVisited, pagesVisited + storiesPerPage)

    const pageCount = Math.ceil(stories.length /storiesPerPage )

    const changePage = ({selected}) =>{
        SetPageNumber(selected)
    }


    return (
        <div className="map">
            {
                displayStories.map((story)=>{
                    return (
                        <div className="card" key={story._id}>
                           <figure className="cards__item__wrap" data={"Thriller"}> 
                           <h3><span>Title: </span>{story.title}</h3>
                           <br />
                           <p> {story.text}</p>
                           <footer>
                          
                               <span className="like"><i className="fa fa-thumbs-up"/> &nbsp;{(story.likes.length)}</span>
                               <span className="comments"><i class="fas fa-comment"/> &nbsp;{story.comments.length}</span>
                               <span className="emojisClass"><i class="far fa-smile-beam"/> : &nbsp;{story.emojis}</span>

                           </footer>
                           </figure>
                        </div>
                    )
                })
            }
            <br />
            <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationsBttns"}
            previousLinkClassName={"previosBttm"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
        </div>
    )
}

export default YourStories
