import React from 'react'
import './LoginRegisterItems.css'

const RegisterItems = () => {
    return (<React.Fragment>

        <div className="wrapper fadeInDown">
          <div id="formContent">
        
          <div className="fadeIn first">
          <img src="https://www.pngitem.com/pimgs/m/224-2244774_image-result-for-registration-icon-blue-transparent-register.png" id="icon" alt="User Icon" />
            </div>
        
            <form>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
              <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
              <input type="submit" className="fadeIn fourth" value="Register" />
            </form>
        
          </div>
        </div>
        
            </React.Fragment>)
}

export default RegisterItems
