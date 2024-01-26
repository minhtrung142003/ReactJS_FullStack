import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContentLogin = () => {
    const [user, setUser] = useState({ fullname: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post("http://localhost:8080/api/users/login", {
            fullname: user.fullname,
            password: user.password,
        })
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem("fullname", user.fullname);
                alert("Đăng nhập thành công");
                navigate("/");
                window.location.reload();
            } else {
                alert("Đăng nhập thất bại");
            }
        })
        .catch(error => {
            console.error("Đăng nhập thất bại:", error);
            alert("Vui lòng điền đầy đủ thông tin");
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Đăng Nhập</h2>
                            <form>
                                <div className="form-group">
                                    <label>Tên đăng nhập:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập tên đăng nhập"
                                        value={user.fullname}
                                        onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Nhập mật khẩu"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />
                                </div>
                                {error && <p className="text-danger">{error}</p>}
                                <button type="button" className="btn btn-primary btn-block mb-3" onClick={handleLogin}>
                                    Đăng Nhập
                                </button>
                                <p className="text-center mb-3">Chưa có tài khoản? <a href="/register">Đăng ký ngay</a></p>
                                <div className="text-center">
                                    <button type="button" className="btn btn-outline-primary mr-2">
                                        <i className="fab fa-facebook-f"></i> Facebook
                                    </button>
                                    <button type="button" className="btn btn-outline-danger">
                                        <i className="fab fa-google"></i> Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentLogin;
