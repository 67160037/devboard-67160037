//⭐ ระดับ 1 — PostCount Component
function PostCount({ count }) {
  return (
    <p style={{ color: "#718096", fontWeight: "bold", marginBottom: "1rem" }}>
      โพสต์ทั้งหมด: {count} รายการ
    </p>
  );
}

export default PostCount;
