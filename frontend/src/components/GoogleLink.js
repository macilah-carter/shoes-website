const Google = () => {

  const handleGoogleLogin = () => {
    // Redirect the user to the backend endpoint that starts the Google OAuth flow
    window.location.href = "https://shoes-website-backend.vercel.app/user/google";
  };

  return (
    <div className="googlelogin">
      <button className="btn btn-primary" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Google;
