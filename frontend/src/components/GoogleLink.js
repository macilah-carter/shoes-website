const Google = () => {
  const handleGoogleLogin = () => {
    // Redirect the user to the Google OAuth flow initiated by your backend
    window.location.href = "https://shoes-website-backend.vercel.app/google/redirect";
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
