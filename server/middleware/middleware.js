
const isLogin = async (req, res, next) => {
    try {
        if (req.session.user) {
            return next();  // User logged in, proceed to the next middleware or route handler
        } else {
            return res.redirect('/');  // User not logged in, redirect to homepage or login page
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ status: "error", message: "Internal server error" });
    }
}
 const isLogout = async (req, res, next) => {
    try {
        if (req.session.user) {
            return res.redirect('/dashboard');  // User is logged in, redirect to dashboard
        }
        return next();  // User not logged in, proceed to the next middleware or route handler
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ status: "error", message: "Internal server error" });
    }
}
    module.exports={
    isLogin,
    isLogout
    }