import React from 'react'
import "./ChannelRow.css"
import {Avatar} from "@material-ui/core"
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined"

function ChannelRow({image,Channel,subs,noOfVideo,verified,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image} alt={Channel}/>
            <div className="channelRow__text">
            <h4>{Channel} {verified && <VerifiedIcon/>}</h4>
            <p>{subs} subscribers .{noOfVideo}</p>
            <p>{description}</p>

            </div>
        </div>
    )
}

export default ChannelRow
