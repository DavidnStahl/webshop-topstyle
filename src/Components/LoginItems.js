import React from 'react'
import './LoginRegisterItems.css'

const LoginItems = () => {
    return (<React.Fragment>

<div className="wrapper fadeInDown">
  <div id="formContent">

  <div className="fadeIn first">
  <img src="https://t4.ftcdn.net/jpg/00/58/78/67/240_F_58786761_Yx7m6rN9c6RRnEIOJOn3bWrSe2zQF6ge.jpg" id="icon" alt="User Icon" />
    </div>

    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
      <input type="submit" className="fadeIn fourth" value="Log In" />
    </form>

  </div>
</div>

    </React.Fragment>)
}

export default LoginItems
