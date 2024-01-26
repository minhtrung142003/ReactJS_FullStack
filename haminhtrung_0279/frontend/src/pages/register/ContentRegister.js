import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const ContentRegister =()=>{
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [address, setaddress] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState('');


  const handleLogin = () => {
	if ( email != "" && password != "" && fullname != "" && address != "" && phone_number != "")
	{
		axios
		.post(`http://localhost:8080/api/users`, {
		  email,
		  password,
		  fullname,
		  address,
		  phone_number,
		})
		.then((response) => {
		  if (response.data.success) {
			setIsLoggedIn(true);
		  } 
		  else {
			alert("Đăng kí thành công");
		  }
		})
		.catch((error) => {
		  console.error(error);
		});
	    navigate('/login');
  
	}console.error('Login failed:', error.response);
	setError('Tên đăng nhập hoặc mật khẩu không chính xác. Hãy thử lại.');
	
    
  };
  useEffect(() => {
    if (isLoggedIn) {
      
    }
  }, [isLoggedIn]);
  

		return(
			<section class="section-content padding-y">
		<div class="card mx-auto" style={{ width: '520px' }} >
			<article class="card-body">
				<header class="mb-4"><h4 class="card-title">Sign up</h4></header>
				<form>
					<div class="form-row">

						<label>Họ và tên</label>
						<input required="name"
						class="form-control"
							type="fullname"
							placeholder="Fullname"
							value={fullname}
							onChange={(e) => setfullname(e.target.value)}
						/>


					</div>
					<div class="form-group">
						<label>Email</label>
						<input required="email"
						class="form-control"
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

					</div>

					<div class="form-row">
						<label>Mật khẩu</label>
						<input required="password"
						class="form-control"
							type="password"
							placeholder="Mật khẩu"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div class="form-row">
						<label>Địa chỉ</label>
						<input required="address"
						class="form-control"
							type="address"
							placeholder="address"
							value={address}
							onChange={(e) => setaddress(e.target.value)}
						/>
					</div>
				
					<div class="form-row">
						<label>Số điện thoại</label>
						<input required="phone_number"
						class="form-control"
							type="phone_number"
							placeholder="phone_number"
							value={phone_number}
							onChange={(e) => setphone_number(e.target.value)}
						/>
					</div>:

					<div class="form-group">
					{error && <p className="text-danger">{error}</p>}
<button    onClick={handleLogin} type="submit" class="btn btn-primary btn-block"> Đăng ký  </button>
					</div>
					<div class="form-group">
						<label class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" checked="" /> <div class="custom-control-label"> I am agree with <a href="#">terms and contitions</a>  </div> </label>
					</div>
				</form>
			</article>
		</div>
		

		</section>

		);


};
export default ContentRegister