    // 对应的事件处理函数
    window.onload = checkForm;

    function checkForm() {
        let txtName = document.querySelector('#txt-name');
        let txtPwd = document.querySelector('#txt-pwd');
        let txtPhone = document.querySelector('#txt-phone');
        let txtRepwd = document.querySelector('#txt-repwd');
        let otips = document.getElementsByClassName("error_tip");
        let login = document.querySelector("#btn-login");
        let register = document.querySelector("#btn-register");
        let findpwd = document.querySelector("#btn-findpwd");
        let name = false;
        let phone = false;
        let pwd = false;
        let repwd = false;

        if (txtName) {
            txtName.onblur = checkUsername;
        }
        if (txtPhone) {
            txtPhone.onblur = checkPhone;
        }
        if (txtPwd) {
            txtPwd.onblur = checkPwd;
        }
        if (txtRepwd) {
            txtRepwd.onblur = checkRepwd;
        }
        if (login) {
            login.onclick = checkLogin;
        }
        if (register) {
            register.onclick = checkRegister;
        }
        if (findpwd) {
            findpwd.onclick = checkFindpwd;
        }
        function checkLogin() {
            checkUsername();
            checkPwd();
            if (name && pwd) {
                alert("登录成功");
                return true;
            }
            return false;
        };

        function checkRegister() {
            checkPhone();
            checkPwd();
            checkRepwd();
            if (phone && pwd && repwd) {
                alert("注册成功");
                return true;
            }
            return false;
        };

        function checkFindpwd() {
            checkPhone();
            checkPwd();
            checkRepwd();
            if (phone && pwd && repwd) {
                alert("zhaohui");
                return true;
            }
            return false;
        };

        function checkUsername() {
            if (txtName.value === '') { // 未输入任何内空
                otips[0].innerHTML = "用户名不能为空";
                otips[0].style.display = "block";
                name = false;
            } else if (isValid(txtName.value)) { // 说明内容不正确
                otips[0].innerHTML = "内容不正确有非法字符";
                otips[0].style.display = "block";
                name = false;
            } else {
                otips[0].innerHTML = "";
                otips[0].style.display = "none";
                name = true;
            }
        }

        function checkPwd() {
            if (txtPwd.value === '') { // 未输入任何内空
                otips[1].innerHTML = "密码不能为空";
                otips[1].style.display = "block";
                pwd = false;
            } else if (txtPwd.value.length < 6 || txtPwd.value.length > 20) { // 密码长度6-20
                otips[1].innerHTML = "密码长度为6-20位";
                otips[1].style.display = "block";
                pwd = false;
            } else {
                otips[1].innerHTML = "";
                otips[1].style.display = "none";
                pwd = true;
            }
        }

        function checkRepwd() {
            if (txtRepwd.value !== txtPwd.value) { // 说明两次密码不一致
                otips[2].innerHTML = "两次密码不一致";
                otips[2].style.display = "block";
                repwd = false;
            } else {
                otips[2].innerHTML = "";
                otips[2].style.display = "none";
                repwd = true;
            }
        }

        function checkPhone() {
            if (!isPoneAvailable(txtPhone.value)) { // 判断手机格式
                otips[0].innerHTML = "手机格式不正确";
                otips[0].style.display = "block";
                phone = false;
            } else {
                otips[0].innerHTML = "";
                otips[0].style.display = "none";
                phone = true;
            }
        }
        //是否含有非法字符
        function isValid(s) {
            var filter = /^[\u2E80-\u9FFF]+$/;
            if (filter.test(s)) {
                return true;
            } else {
                return false;
            }
        }
        //是否是11位手机号
        function isPoneAvailable(s) {
            let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(s)) {
                return false;
            } else {
                return true;
            }
        }
    }