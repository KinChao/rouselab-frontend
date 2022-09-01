import { Typography } from 'antd'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <Typography.Title>Return to home page</Typography.Title>
        </Link>
      </div>
    </header>
  )
}

export default Navbar