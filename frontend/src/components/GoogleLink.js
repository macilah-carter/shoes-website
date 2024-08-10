const Google = () => {
  const handleClick = () => {
    fetch("https://shoes-website-backend.vercel.app/user/google")
      .then((res) => {
        if(!res.ok){
            throw new Error('Network erro')
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="googlelogin">
      <button className="btn btn-primary" onClick={handleClick}>sign in with google</button>
    </div>
  );
};

export default Google;
