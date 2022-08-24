import { Avatar, Button } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './rightBox.scss'

function RightBox() {
  return (
    <div className='right-box'>
      <div className="account">
        <a href="/"><Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/46.jpg "
                sx={{width:56, height:56}}
              /></a>
              <div className='account-titles'> <a href="/">username <span>User Name</span></a></div>
      </div>
      <span className='friends-title'>My Friends</span>
      <ul className='friends-list'>
        <li className="friend-item">
          <div className="friend-item-left">
          <a href="/"><Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/83.jpg "
                sx={{width:40, height:40}}
              /></a>
              <div className="friend-user-name"> <a href="/">friend1</a><span>Friend One</span> </div>
          </div>
          <div className="friend-item-right"><Button variant="contained" endIcon={<ArrowCircleRightIcon/>}  size="small">Show profile</Button></div>
        </li>
        <li className="friend-item">
          <div className="friend-item-left">
          <a href="/"><Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/82.jpg "
                sx={{width:40, height:40}}
              /></a>
              <div className="friend-user-name"> <a href="/">friend1</a><span>Friend One</span> </div>
          </div>
          <div className="friend-item-right"><Button variant="contained" endIcon={<ArrowCircleRightIcon/>}  size="small">Show profile</Button></div>
        </li>
        <li className="friend-item">
          <div className="friend-item-left">
          <a href="/"><Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/81.jpg "
                sx={{width:40, height:40}}
              /></a>
              <div className="friend-user-name"> <a href="/">friend1</a><span>Friend One</span> </div>
          </div>
          <div className="friend-item-right">
            <Button variant="contained" endIcon={<ArrowCircleRightIcon/>}  size="small">Show profile</Button></div>
        </li>
      </ul>
    </div>

  )
}

export default RightBox