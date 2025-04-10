export default function LoginPage() {
    return (
        <div>
            <div className="">LoginPage</div>
            <p>Login to your account</p>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
