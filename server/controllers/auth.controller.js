export const signup = async (req, res) => { //this is the function we will execute when the endpoint is hit
    res.json({
         data: "You hit the signup endpoint",
    });
}

export const login = async (req, res) => {
    res.json({
        data: "You hit the login endpoint",
    });
}

export const logout = async (req, res) => {
    res.json({
        data: "You hit the logout endpoint",
    });
}