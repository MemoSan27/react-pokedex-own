import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="loading">
        <ReactLoading type="bars" color="#FED624"
            height={100} width={150} />
    </div>
  )
}

export default Loading
