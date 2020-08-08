import React from 'react'
import "./SearchPage.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
        image=""
        Channel="Anish Dora"
        verified
        subs="1M"
        noOfVideos={147}
        description="You can find awesome programming stuff."
            />
            <hr/>
            <VideoRow 
                views="24M"
                subs="656K"
                description="Do you want a free one hour training.. "
                timestamp="59seconds ago"
                channel="Anish Dora"
                title="Let's build a Youtube clone"
                image="https://youtubebannertemplates.com/wp-content/uploads/2019/12/YouTube-Thumbnail-Size-2020.jpg"
            
            />
            <VideoRow 
                views="3.4M"
                subs="656K"
                description="Do you want a free one hour training.. "
                timestamp="59seconds ago"
                channel="Sandeep"
                title="Let's build a Twitter clone"
                image="https://youtubebannertemplates.com/wp-content/uploads/2019/12/YouTube-Thumbnail-Size-2020.jpg"
            
            />
            <VideoRow 
                views="4.4M"
                subs="66K"
                description="Do you want a free one hour training.. "
                timestamp="59seconds ago"
                channel="Rajeev"
                title="Let's build a Tinder clone"
                image="https://youtubebannertemplates.com/wp-content/uploads/2019/12/YouTube-Thumbnail-Size-2020.jpg"
            
            />
            <VideoRow 
                views="450K"
                subs="656K"
                description="Do you want a free one hour training.. "
                timestamp="59seconds ago"
                channel="Adam Lewis"
                title="Let's build a Ticktok clone"
                image="https://youtubebannertemplates.com/wp-content/uploads/2019/12/YouTube-Thumbnail-Size-2020.jpg"
            
            />
            <VideoRow 
                views="1.4M"
                subs="956K"
                description="Do you want a free one hour training.. "
                timestamp="59seconds ago"
                channel="Anish Dora"
                title="Let's build an Insatgram clone"
                image="https://youtubebannertemplates.com/wp-content/uploads/2019/12/YouTube-Thumbnail-Size-2020.jpg"
            
            />
            <VideoRow 
                views="14M"
                subs="606K"
                description="Do you want a free one hour training.. "
                timestamp="59seconds ago"
                channel="Ayushman"
                title="Let's build Amazon clone"
                image="https://youtubebannertemplates.com/wp-content/uploads/2019/12/YouTube-Thumbnail-Size-2020.jpg"
            
            />
        </div>
        
    )
}

export default SearchPage
