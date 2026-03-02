//⭐⭐⭐ ระดับ 3 — PostSkeleton
function PostSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            background: "white",
          }}
        >
          <div
            style={{
              height: "20px",
              width: "60%",
              background: "#e2e8f0",
              borderRadius: "4px",
              marginBottom: "1rem",
            }}
          />

          <div
            style={{
              height: "14px",
              width: "100%",
              background: "#e2e8f0",
              borderRadius: "4px",
              marginBottom: "0.5rem",
            }}
          />
          <div
            style={{
              height: "14px",
              width: "80%",
              background: "#e2e8f0",
              borderRadius: "4px",
            }}
          />
        </div>
      ))}
    </>
  );
}

export default PostSkeleton;
