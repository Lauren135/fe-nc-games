export default function CommentsButton({ children, ...props }) {
  return (
    <div>
      <button className="comments-button" {...props}>
        {children}
      </button>
    </div>
  );
}
