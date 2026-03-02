function UserCard({ name, email }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  //⭐⭐ ระดับ 2 — Avatar หลากสี
  const charCode = name.charCodeAt(0);
  const colorIndex = charCode % 3;

  let avatarColor = "#1e40af"; // สีเริ่มต้น
  if (colorIndex === 1) avatarColor = "#059669"; // สีเขียว
  if (colorIndex === 2) avatarColor = "#7c3aed"; // สีม่วง

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
        background: "white",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          background: avatarColor, // เปลี่ยนตรงนี้ให้ใช้ตัวแปร avatarColor
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        {initials}
      </div>
      <div>
        <div style={{ fontWeight: "bold", color: "#2d3748" }}>{name}</div>
        <div style={{ fontSize: "0.85rem", color: "#718096" }}>{email}</div>
      </div>
    </div>
  );
}

export default UserCard;
