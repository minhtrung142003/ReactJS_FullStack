import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentLogin = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
      try {
          const response = await axios.post('http://localhost:8080/api/users/login', user);
          console.log('Login successful:', response.data);
          // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
          navigate('/');
      } catch (error) {
          console.error('Login failed:', error.response);
          setError('Tên đăng nhập hoặc mật khẩu không chính xác. Hãy thử lại.');
      }
  };

  return (
    <section className="section-conten padding-y" style={{ height: "84vh" }}>
      <div className="card mx-auto" style={{ width: "380px", marginTop: "100px" }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">Sign in</h4>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value})}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-danger btn-block"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-center">
        Don't have an account? <a href="#">Sign up</a>
      </p>
      <br />
    </section>
  );
}

export default ContentLogin;
