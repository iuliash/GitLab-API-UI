import React from 'react'
//import Select from '@material-ui/core/Select';
//import MenuItem from '@material-ui/core/MenuItem';

import Domain from './RequestParameters/Domain'
import PrivateToken from './RequestParameters/PrivateToken'
import ProjectID from './RequestParameters/ProjectID'
import State from './RequestParameters/State'
import ClosedAfter from './RequestParameters/ClosedAfter'
import ClosedBefore from './RequestParameters/ClosedBefore'
import Assignee from './RequestParameters/Assignee'
import ClosedBy from './RequestParameters/ClosedBy'
import Milestone from './RequestParameters/Milestone'


export default function RequestParameters() {
    return(
        <div className="send-form">
            <Domain />
            <ProjectID />
            <PrivateToken />
            <State />
            <ClosedAfter />
            <ClosedBefore />
            <Assignee />
            <ClosedBy />
            <Milestone />
        </div>
    )
}